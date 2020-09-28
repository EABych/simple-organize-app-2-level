(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/work/simple-organize-app/src/main.ts */"zUnb");


/***/ }),

/***/ "7mpd":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/date.service */ "HAHG");
/* harmony import */ var _shared_notes_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/notes-list.service */ "tQAn");
/* harmony import */ var _current_month_current_month_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current-month/current-month.component */ "fw79");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r2);
} }
function CalendarComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hasNote", !!ctx_r6.notesListService.notesList[ctx_r6.dateService.date.value.format("YYYYMM") + (day_r3 > 9 ? day_r3 : "0" + day_r3)]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.notesListService.notesList[ctx_r6.dateService.date.value.format("YYYYMM") + (day_r3 > 9 ? day_r3 : "0" + day_r3)].length, " ");
} }
function CalendarComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_div_3_div_1_div_1_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r4 = ctx_r8.index;
    const day_r3 = ctx_r8.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("weekend", i_r4 % 7 === 0 || (i_r4 + 1) % 7 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r5.notesListService.notesList[ctx_r5.dateService.date.value.format("YYYYMM") + (day_r3 > 9 ? day_r3 : "0" + day_r3)] && ctx_r5.notesListService.notesList[ctx_r5.dateService.date.value.format("YYYYMM") + (day_r3 > 9 ? day_r3 : "0" + day_r3)].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r3, " ");
} }
function CalendarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const day_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeActiveDay(day_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarComponent_div_3_div_1_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("activeDay", ctx_r1.dateService.activeDate.value.format("YYYYMMDD") === ctx_r1.dateService.date.value.format("YYYYMM") + (day_r3 > 9 ? day_r3 : "0" + day_r3))("currentDay", ctx_r1.dateService.currentDate.value.format("YYYYMMDD") === ctx_r1.dateService.date.value.format("YYYYMM") + (day_r3 > 9 ? day_r3 : "0" + day_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!day_r3);
} }
class CalendarComponent {
    constructor(dateService, notesListService) {
        this.dateService = dateService;
        this.notesListService = notesListService;
    }
    changeActiveDay(day) {
        this.dateService.changeActiveDate(+day > 9 ? day : ('0' + day));
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notes_list_service__WEBPACK_IMPORTED_MODULE_2__["NotesListService"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], decls: 4, vars: 2, consts: [[1, "container"], ["class", "nameDay", 4, "ngFor", "ngForOf"], ["class", "day", 3, "activeDay", "currentDay", "click", 4, "ngFor", "ngForOf"], [1, "nameDay"], [1, "date"], [1, "day", 3, "click"], ["class", "date", 3, "weekend", 4, "ngIf"], [3, "hasNote", 4, "ngIf"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-current-month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarComponent_div_2_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalendarComponent_div_3_Template, 2, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dateService.weekKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dateService.month);
    } }, directives: [_current_month_current_month_component__WEBPACK_IMPORTED_MODULE_3__["CurrentMonthComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  box-shadow: 4px 6px 55px -11px rgba(0, 0, 0, 0.46);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  padding: 2rem;\n  width: 100%;\n  height: calc(100% - 68px);\n  font-family: \"Roboto\", sans-serif;\n  grid-gap: 2vw;\n  margin: 0;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .nameDay[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  color: #5d5d5d;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%] {\n  color: red;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  position: relative;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .hasNote[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15%;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: transparent;\n  background: radial-gradient(circle, #ff0707 0%, #cb3232 100%);\n  border: 1px solid #ad0000;\n  font-size: 10px;\n  color: #ffffff;\n  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.46);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .activeDay[_ngcontent-%COMP%] {\n  background-color: #006edd;\n  color: #d0d0d0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .activeDay[_ngcontent-%COMP%]   .hasNote[_ngcontent-%COMP%] {\n  background: radial-gradient(circle, #c9c5c5 0%, white 100%);\n  border: 1px solid white;\n  color: black;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .activeDay[_ngcontent-%COMP%]   .weekend[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .currentDay[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxrREFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFOO0FBR0k7RUFDRSx5QkFBQTtBQUROO0FBSUk7RUFLRSxjQUFBO0FBTk47QUFFTTtFQUNFLFVBQUE7QUFBUjtBQUtNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1NO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZEQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUdBLGdEQUFBO0FBSlI7QUFRSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQU5OO0FBUU07RUFDRSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQU5SO0FBU007RUFDRSxZQUFBO0FBUFI7QUFXSTtFQUNFLGdCQUFBO0FBVE4iLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNnB4IDU1cHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggNnB4IDU1cHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcbiAgYm94LXNoYWRvdzogNHB4IDZweCA1NXB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY4cHgpO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBncmlkLWdhcDogMnZ3O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG5cbiAgICBkaXYge1xuICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5uYW1lRGF5IHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgLmRheSB7XG4gICAgICAud2Vla2VuZCB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiAjNWQ1ZDVkO1xuXG4gICAgICAuZGF0ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuaGFzTm90ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTUlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMjU1LCA3LCA3KSAwJSwgcmdiKDIwMywgNTAsIDUwKSAxMDAlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FkMDAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDVweCAtMXB4IHJnYigwIDAgMCAvIDQ2JSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1cHggLTFweCByZ2IoMCAwIDAgLyA0NiUpO1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAtMXB4IHJnYigwIDAgMCAvIDQ2JSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGl2ZURheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZWRkO1xuICAgICAgY29sb3I6ICNkMGQwZDA7XG5cbiAgICAgIC5oYXNOb3RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDIwMSwgMTk3LCAxOTcpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuXG4gICAgICAud2Vla2VuZCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3VycmVudERheSB7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cblxuICB9XG5cblxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss']
            }]
    }], function () { return [{ type: _shared_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"] }, { type: _shared_notes_list_service__WEBPACK_IMPORTED_MODULE_2__["NotesListService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HAHG":
/*!****************************************!*\
  !*** ./src/app/shared/date.service.ts ***!
  \****************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




var WeekNamesDaysList;
(function (WeekNamesDaysList) {
    WeekNamesDaysList[WeekNamesDaysList["Sun"] = 0] = "Sun";
    WeekNamesDaysList[WeekNamesDaysList["Mon"] = 1] = "Mon";
    WeekNamesDaysList[WeekNamesDaysList["Tue"] = 2] = "Tue";
    WeekNamesDaysList[WeekNamesDaysList["Wed"] = 3] = "Wed";
    WeekNamesDaysList[WeekNamesDaysList["Thu"] = 4] = "Thu";
    WeekNamesDaysList[WeekNamesDaysList["Fri"] = 5] = "Fri";
    WeekNamesDaysList[WeekNamesDaysList["Sat"] = 6] = "Sat";
})(WeekNamesDaysList || (WeekNamesDaysList = {}));
class DateService {
    constructor() {
        this.weekNames = WeekNamesDaysList;
        this.date = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](moment__WEBPACK_IMPORTED_MODULE_2__());
        this.weekKeys = Object.keys(this.weekNames).filter(k => typeof this.weekNames[k] === 'number');
        this.firstDay = this.date.value.clone().startOf('month');
        this.lastDay = +this.date.value.clone().endOf('month').format('DD');
        this.month = [
            ...new Array(+this.firstDay.format('d')).fill(''),
            ...(() => {
                const arr = Array.from(Array(+this.lastDay + 1).keys());
                arr.shift();
                return arr;
            })(),
        ];
        this.activeDate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](moment__WEBPACK_IMPORTED_MODULE_2__());
        this.currentDate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](moment__WEBPACK_IMPORTED_MODULE_2__());
    }
    changeMonth(dir) {
        const value = this.date.value.add(dir, 'month');
        const newFirstDay = value.clone().startOf('month');
        const newLastDay = +value.clone().endOf('month').format('DD');
        this.date.next(value);
        this.firstDay = newFirstDay;
        this.lastDay = newLastDay;
        this.month = [
            ...new Array(+newFirstDay.format('d')).fill(''),
            ...(() => {
                const arr = Array.from(Array(+newLastDay + 1).keys());
                arr.shift();
                return arr;
            })(),
        ];
    }
    changeActiveDate(date) {
        this.activeDate.next(moment__WEBPACK_IMPORTED_MODULE_2__(`${this.date.value.clone().format('YYYYMM')}${date}`, 'YYYYMMDD'));
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, { weekNames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar.component */ "7mpd");
/* harmony import */ var _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-form/note-form.component */ "taaz");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-note-form");
    } }, directives: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"], _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_2__["NoteFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _current_month_current_month_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-month/current-month.component */ "fw79");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.component */ "7mpd");
/* harmony import */ var _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note-form/note-form.component */ "taaz");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/moment.pipe */ "v5Om");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _current_month_current_month_component__WEBPACK_IMPORTED_MODULE_5__["CurrentMonthComponent"],
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],
        _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_7__["NoteFormComponent"],
        _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_8__["MomentPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _current_month_current_month_component__WEBPACK_IMPORTED_MODULE_5__["CurrentMonthComponent"],
                    _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],
                    _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_7__["NoteFormComponent"],
                    _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_8__["MomentPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fw79":
/*!**********************************************************!*\
  !*** ./src/app/current-month/current-month.component.ts ***!
  \**********************************************************/
/*! exports provided: CurrentMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentMonthComponent", function() { return CurrentMonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/date.service */ "HAHG");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/moment.pipe */ "v5Om");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class CurrentMonthComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    go(dir) {
        this.dateService.changeMonth(dir);
    }
}
CurrentMonthComponent.ɵfac = function CurrentMonthComponent_Factory(t) { return new (t || CurrentMonthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
CurrentMonthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentMonthComponent, selectors: [["app-current-month"]], decls: 8, vars: 5, consts: [[1, "material-icons", 3, "click"]], template: function CurrentMonthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentMonthComponent_Template_i_click_0_listener() { return ctx.go(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "moment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentMonthComponent_Template_i_click_6_listener() { return ctx.go(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.dateService.date)));
    } }, pipes: [_shared_moment_pipe__WEBPACK_IMPORTED_MODULE_2__["MomentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 200px;\n  text-align: center;\n  font-size: 2rem;\n}\n\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1tb250aC9jdXJyZW50LW1vbnRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3VycmVudC1tb250aC9jdXJyZW50LW1vbnRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentMonthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-month',
                templateUrl: './current-month.component.html',
                styleUrls: ['./current-month.component.scss']
            }]
    }], function () { return [{ type: _shared_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"] }]; }, null); })();


/***/ }),

/***/ "tQAn":
/*!**********************************************!*\
  !*** ./src/app/shared/notes-list.service.ts ***!
  \**********************************************/
/*! exports provided: NotesListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListService", function() { return NotesListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotesListService {
    constructor() {
        this.notesList = {
            20200915: ['test'],
            20200901: ['test'],
            20200926: ['test', 'test2'],
        };
    }
    addNote(text, date) {
        if (this.notesList[date]) {
            this.notesList[date].push(text);
        }
        else {
            this.notesList[date] = [text];
        }
    }
    deleteNote(index, date) {
        this.notesList[date] = this.notesList[date].filter((note, i) => i !== index);
    }
}
NotesListService.ɵfac = function NotesListService_Factory(t) { return new (t || NotesListService)(); };
NotesListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesListService, factory: NotesListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "taaz":
/*!**************************************************!*\
  !*** ./src/app/note-form/note-form.component.ts ***!
  \**************************************************/
/*! exports provided: NoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteFormComponent", function() { return NoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_notes_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/notes-list.service */ "tQAn");
/* harmony import */ var _shared_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/date.service */ "HAHG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NoteFormComponent_ul_12_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteFormComponent_ul_12_li_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteNote(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r4 + 1, ". ", note_r3, " ");
} }
function NoteFormComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NoteFormComponent_ul_12_li_1_Template, 4, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notesListService.notesList[ctx_r0.dateService.activeDate.value.format("YYYYMMDD")]);
} }
function NoteFormComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There is no one note yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NoteFormComponent {
    constructor(notesListService, dateService, formBuilder) {
        this.notesListService = notesListService;
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            text: '',
        });
    }
    addNewNote() {
        if (!this.checkoutForm.value.text) {
            return;
        }
        this.notesListService.addNote(this.checkoutForm.value.text, this.dateService.activeDate.value.format('YYYYMMDD'));
        this.checkoutForm.reset();
    }
    deleteNote(index) {
        this.notesListService.deleteNote(index, this.dateService.activeDate.value.format('YYYYMMDD'));
    }
}
NoteFormComponent.ɵfac = function NoteFormComponent_Factory(t) { return new (t || NoteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_notes_list_service__WEBPACK_IMPORTED_MODULE_1__["NotesListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
NoteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteFormComponent, selectors: [["app-note-form"]], decls: 14, vars: 4, consts: [[1, "container"], [1, "title"], [3, "formGroup", "ngSubmit"], ["id", "text", "type", "text", "formControlName", "text", "placeholder", "Add text"], ["type", "submit"], ["class", "form", 4, "ngIf"], [1, "form"], [4, "ngFor", "ngForOf"], [1, "deleteButton", 3, "click"]], template: function NoteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Organizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NoteFormComponent_Template_form_ngSubmit_7_listener() { return ctx.addNewNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create new note ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NoteFormComponent_ul_12_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NoteFormComponent_p_13_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateService.activeDate.value.format("Do MMMM YYYY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notesListService.notesList[ctx.dateService.activeDate.value.format("YYYYMMDD")] && ctx.notesListService.notesList[ctx.dateService.activeDate.value.format("YYYYMMDD")].length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notesListService.notesList[ctx.dateService.activeDate.value.format("YYYYMMDD")] || !ctx.notesListService.notesList[ctx.dateService.activeDate.value.format("YYYYMMDD")].length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  width: 100%;\n  height: 100%;\n  padding: 2rem;\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 600;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  border-color: #2e2f2f;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  border: 1px solid #818d96;\n  padding: 20px;\n  font-weight: 700;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%] {\n  font-weight: 300;\n  border: none;\n  border-bottom: 1px solid #535353;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 1px solid #313131;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  margin: 20px 10px;\n  max-height: 60vh;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  border-top: 0.5px solid grey;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n}\n.container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  color: #5f5959;\n  font-weight: 700;\n}\n.container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: #7d2020;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #006edd;\n  color: #f1f1f1;\n  border: none;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1mb3JtL25vdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUROO0FBR007RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUFEUjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBTko7QUFRSTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTk47QUFRTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBTlI7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUkoiLCJmaWxlIjoic3JjL2FwcC9ub3RlLWZvcm0vbm90ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC50aXRsZXtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBociB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmUyZjJmO1xuICB9XG5cbiAgZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MThkOTY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgI3RleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTM1MzUzO1xuXG4gICAgICAmOmZvY3Vze1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxMzEzMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9ybSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogLjVweCBzb2xpZCBncmV5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIC5kZWxldGVCdXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogIzVmNTk1OTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgICY6Zm9jdXN7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjN2QyMDIwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZlZGQ7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-form',
                templateUrl: './note-form.component.html',
                styleUrls: ['./note-form.component.scss']
            }]
    }], function () { return [{ type: _shared_notes_list_service__WEBPACK_IMPORTED_MODULE_1__["NotesListService"] }, { type: _shared_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "v5Om":
/*!***************************************!*\
  !*** ./src/app/shared/moment.pipe.ts ***!
  \***************************************/
/*! exports provided: MomentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentPipe", function() { return MomentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MomentPipe {
    transform(m, format = 'MMMM YYYY') {
        return m.format(format);
    }
}
MomentPipe.ɵfac = function MomentPipe_Factory(t) { return new (t || MomentPipe)(); };
MomentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "moment", type: MomentPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'moment',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map