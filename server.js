const bodyParser = require('body-parser');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const url = require('url');
const admin = require("firebase-admin");
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'youraccesstokensecret';
const serviceAccount = require("./server/public/serviceAccountKey.json");
const authenticateJWT = require("./server/_helpers/authenticateJWT");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ang-simple-organizer.firebaseio.com"
});

const db = admin.database();


const app = express();
app.use(bodyParser.json())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/simple-organize-app'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/simple-organize-app/index.html'));
});

// user
app.post('/login', cors(), function (req, res) {
  const {login, password} = req.body;

  db.ref(`users/${login}`).once('value')
    .then(resp => {
      if (resp.val()) {
        const data = Object.values(resp.val())[0];
        const id = Object.keys(resp.val())[0];
        if (data.password === password) {
          const accessToken = jwt.sign({username: login,}, accessTokenSecret);

          res.status(200).json({
            id,
            login,
            email: data.email,
            tasksList: data.tasksList,
            accessToken,
          });
        } else {
          res.status(500).send('Password doesn`t correct!');
        }
      } else {
        res.status(500).send('User doesn`t exist!');
      }
    })
    .catch(err => {
        res.status(500).send('Something broke!');
      }
    )
});

app.post('/registration', cors(), function (req, res) {
  const {login, password, email,} = req.body;
  const tasksList = {test:'test'}
  db.ref(`users/${login}`).once('value')
    .then(resp => {
      if (resp.val()) {
        res.status(500).send('User already exist!');
      } else {
        db.ref(`users/${login}`)
          .push({password, email, tasksList})
          .once('value')
          .then((() => {
            const accessToken = jwt.sign({username: login,}, accessTokenSecret);

            db.ref(`users/${login}`).once('value').then((resp => {
              const data = Object.values(resp.val())[0];
              const id = Object.keys(resp.val())[0];

              res.status(200).json({
                id,
                login,
                email: data.email,
                tasksList: data.tasksList,
                accessToken,
              });
            }))
          }))
          .catch(err => {
              res.status(500).send('Something broke!');
            }
          )
      }
    })
});

app.get('/user', authenticateJWT, (req, res) => {
  db.ref(`users/${req.user.username}`).once('value')
    .then(resp => {
      if (resp.val()) {
        const data = Object.values(resp.val())[0];
        const id = Object.keys(resp.val())[0];
        res.status(200).json({
          id,
          login: req.user.username,
          email: data.email,
          tasksList: data.tasksList,
        });
      }
    })
    .catch(err => {
        res.status(500).send('Something broke!');
      }
    )
});


// notes
app.post('/addTodo', authenticateJWT, (req, res) => {
  const {text, date, userId, userName,} = req.body;

  db.ref(`users/${userName}/${userId}/tasksList/${date}`)
    .push(text)
    .then((snap) => {
      const key = snap.key
      res.status(200).json({
        key,
      });
    })
    .catch(err => {
      res.status(500).send('Something broke!');
    })
});

app.delete('/deleteTodo', authenticateJWT, (req, res) => {
  const {date, id,  userId, userName} = url.parse(req.url, true).query;

  db.ref(`users/${userName}/${userId}/tasksList/${date}/${id}`)
    .remove()
    .then(() => {
      res.status(200).json({});    })
    .catch(err => {
      res.status(500).send('Something broke!');
    })
});

app.put('/editTodo', authenticateJWT, (req, res) => {
  const {newValue, date, id,  userId, userName} = req.body;

  db.ref(`users/${userName}/${userId}/tasksList/${date}/${id}`)
    .set(newValue)
    .then(() => {
      res.status(200).json({});})
    .catch(err => {
      res.status(500).send('Something broke!');
    })
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


