(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Aplicaciones Personales\sitios_web\Sitio Personal\src\main.ts */"zUnb");


/***/ }),

/***/ "0ehU":
/*!****************************************************************************!*\
  !*** ./src/app/pages/work-experiencience/work-experiencience.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkExperiencienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperiencienceComponent", function() { return WorkExperiencienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_work_experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/work-experience.service */ "MIx7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/domseguro.pipe */ "nmnT");





function WorkExperiencienceComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "domseguro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "time", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const WorkExperience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", WorkExperience_r1.Img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](WorkExperience_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, WorkExperience_r1.Content, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](WorkExperience_r1.Validity);
} }
class WorkExperiencienceComponent {
    constructor(WorkExperienceService) {
        this.WorkExperienceService = WorkExperienceService;
    }
    ngOnInit() {
        this.DataWorkExperience = this.WorkExperienceService.getWorkExperience();
    }
}
WorkExperiencienceComponent.ɵfac = function WorkExperiencienceComponent_Factory(t) { return new (t || WorkExperiencienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_work_experience_service__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceService"])); };
WorkExperiencienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkExperiencienceComponent, selectors: [["app-work-experiencience"]], decls: 7, vars: 6, consts: [[1, "container", "mb-6"], [1, "title", "is-2", "mt-6", "has-text-danger-dark", "is-size-3-mobile", "px-1", "animated", "fast"], [1, "has-text-justified", "is-size-6-mobile", "px-1", "animated", "fadeIn", 3, "innerHtml"], [1, "my-5"], ["class", "card is-flex-tablet mt-6 animated fadeIn ", 4, "ngFor", "ngForOf"], [1, "card", "is-flex-tablet", "mt-6", "animated", "fadeIn"], [1, "card-image", "is-flex", "is-justify-content-center", "p-2"], [1, "image", 2, "width", "350px"], ["alt", "Placeholder image", 3, "src"], [1, "card-content"], [1, "media"], [1, "media-content", "is-size-5-mobile"], [1, "title", "is-4"], [1, "content", "has-text-justified", "is-size-6-mobile", 3, "innerHtml"], [1, "is-flex", "is-justify-content-flex-end"], ["datetime", "2016-1-1"]], template: function WorkExperiencienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "domseguro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkExperiencienceComponent_div_6_Template, 14, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.DataWorkExperience.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.DataWorkExperience.Description, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DataWorkExperience.ListWorkExperience);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_3__["DomseguroPipe"]], styles: ["nz-alert[_ngcontent-%COMP%] {\r\n    margin-bottom: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstZXhwZXJpZW5jaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ3b3JrLWV4cGVyaWVuY2llbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1hbGVydCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExperiencienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-experiencience',
                templateUrl: './work-experiencience.component.html',
                styleUrls: ['./work-experiencience.component.css']
            }]
    }], function () { return [{ type: _services_work_experience_service__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceService"] }]; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home.service */ "nr5L");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");








function HomeComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-progress", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", item_r3.domain);
} }
function HomeComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-progress", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", item_r4.domain);
} }
function HomeComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-progress", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", item_r5.domain);
} }
class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
        this.ListFrontEnd = this.homeService.GetFrontEnd();
        this.ListBackEnd = this.homeService.GetBackEnd();
        this.ListOthers = this.homeService.GetOthers();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 132, vars: 3, consts: [[1, "container", "mt-6", "pt-5"], [1, "columns", "mx-0"], [1, "column", "is-full"], [1, "subtitle", "is-5", "has-text-justified", "is-size-6-mobile"], [1, "columns", "mx-0", "my-5"], [1, "column"], [1, "card"], [1, "card-image", "is-flex", "is-justify-content-center"], [1, "mt-5", 2, "width", "350px"], ["src", "assets/img/perfil.jpg", "alt", "Percy Leon", 2, "border-radius", "50%"], [1, "card-content"], [1, "media"], [1, "media-left"], [1, "image", "is-48x48"], ["src", "assets/img/AvatarPleon.jpg", "alt", "Percy Leon"], [1, "media-content"], [1, "title", "is-4"], [1, "subtitle", "is-6"], [1, "content"], [1, "mb-1"], [1, "is-flex"], ["href", "https://github.com/perleon-dev", 1, "has-text-grey-darker", "mr-2"], ["nz-icon", "", "nzType", "github", "nzTheme", "outline", 2, "font-size", "30px"], ["href", "https://www.linkedin.com/in/percy-luis-leon-lucas/", 1, "has-text-grey-darker", "mr-2"], ["nz-icon", "", "nzType", "linkedin", "nzTheme", "outline", 2, "font-size", "30px"], ["href", "https://www.instagram.com/perleon.dev/", 1, "has-text-grey-darker", "mr-2"], ["nz-icon", "", "nzType", "instagram", "nzTheme", "outline", 2, "font-size", "30px"], ["href", "https://www.youtube.com/channel/UCJ6KiNjbtW_I6xOQjXU1lGg/featured", 1, "has-text-grey-darker", "mr-2"], ["nz-icon", "", "nzType", "youtube", "nzTheme", "outline", 2, "font-size", "30px"], [1, "column", "is-two-thirds"], [1, "is-flex", "is-flex-wrap-wrap", "is-justify-content-space-around"], [1, "message", "is-primary", 2, "width", "310px"], [1, "message-header"], ["aria-label", "delete", 1, "delete"], [1, "message-body", "has-text-justified"], [1, "has-text-weight-bold"], [1, "message", "is-link", 2, "width", "310px"], [1, "message", "is-info", 2, "width", "310px"], [1, "message", "is-success", 2, "width", "310px"], [2, "background", "#fafafa", "padding", "30px"], ["nz-row", "", "nzJustify", "space-around"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzMd", "12", "nzLg", "8", "nzXl", "8"], ["nzTitle", "Front-End"], [4, "ngFor", "ngForOf"], ["nzTitle", "Back-End"], ["nzTitle", "Tools"], ["nzStatus", "active", 3, "nzPercent"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hola, soy Percy Leon, soy un ingeniero de sistemas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "adicto a aprender nuevas cosas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". Por un lado, me gusta la investigaci\u00F3n, constantemente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "actualizo mis conocimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "mejoro mis habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". El \u00E1rea en donde estoy especializado es el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "desarrollo de software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ", mi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "lenguaje favorito es C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", sin embargo, conozco otros lenguajes. Por otro lado, tengo experiencia trabajando con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "arquitectura de microservicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "arquitectura monolitica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Microservicios con Event-Driven Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Arquitectura basada en Pub/Sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ". Me gustan los retos y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "amo los desaf\u00EDos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ", adem\u00E1s, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "me agrada ense\u00F1ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", si te puedo ayudar en algo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "no dudes en contactarme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "figure", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Percy Leon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "@PerLeonDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pais:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Per\u00FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Lima-Chorrillos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Un dev. empedernido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "I love programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "No hack, no fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "article", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Hobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Investigar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Me atrae profundamente la relaci\u00F3n entre estrategia y tecnolog\u00EDa. Me interesan especialmente temas como FinOps, DevOps, PMBOK, metodolog\u00EDas \u00E1giles, ciberseguridad, inteligencia artificial y tecnolog\u00EDas IoT. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "article", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Objetivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Desarrollo personal y profesional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Estoy convencido de que la mejor forma de mejorar es a trav\u00E9s del aprendizaje. Por eso, me dedico a crecer constantemente en todos los aspectos de mi vida, tanto profesionalmente como en mi vida cotidiana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "article", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Estado acad\u00E9mico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Ingenieria de sistemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Soy ingeniero de sistemas especializado en desarrollo de software y tecnolog\u00EDas cloud, con experiencia en la creaci\u00F3n de soluciones escalables y optimizaci\u00F3n de infraestructuras en la nube. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "article", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Estado laboral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Senior software engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Transformando ideas en soluciones robustas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nz-card", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, HomeComponent_div_125_Template, 4, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "nz-card", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, HomeComponent_div_128_Template, 4, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "nz-card", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, HomeComponent_div_131_Template, 4, 2, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListFrontEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListBackEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ListOthers);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_6__["NzProgressComponent"]], styles: ["[nz-carousel-content][_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 160px;\r\n    background: #364d79;\r\n    color: #fff;\r\n    overflow: hidden;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active {\r\n    text-decoration: none;\r\n}\r\n\r\n.has-text-mixto[_ngcontent-%COMP%] {\r\n    color: rgb(226, 108, 187);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1jYXJvdXNlbC1jb250ZW50XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzY0ZDc5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5hOmxpbmssXHJcbmE6dmlzaXRlZCxcclxuYTphY3RpdmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaGFzLXRleHQtbWl4dG8ge1xyXG4gICAgY29sb3I6IHJnYigyMjYsIDEwOCwgMTg3KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "5Q7x":
/*!***************************************************************!*\
  !*** ./src/app/pages/blog/base-datos/base-datos.component.ts ***!
  \***************************************************************/
/*! exports provided: BaseDatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDatosComponent", function() { return BaseDatosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BaseDatosComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseDatosComponent.ɵfac = function BaseDatosComponent_Factory(t) { return new (t || BaseDatosComponent)(); };
BaseDatosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseDatosComponent, selectors: [["app-base-datos"]], decls: 3, vars: 0, consts: [[1, "container", "mt-6"]], template: function BaseDatosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "En proceso . . .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLWRhdG9zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseDatosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-datos',
                templateUrl: './base-datos.component.html',
                styleUrls: ['./base-datos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8B9z":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavBarComponent {
    constructor() {
        this.is_active_menu = "";
        this.is_active_contacto = "";
    }
    ngOnInit() {
    }
    btn_isActive() {
        if (this.is_active_menu == "")
            this.is_active_menu = "is-active";
        else
            this.is_active_menu = "";
    }
    btn_isActive_button() {
        if (this.is_active_contacto == "")
            this.is_active_contacto = "is-active";
        else
            this.is_active_contacto = "";
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 37, vars: 4, consts: [[1, "container"], ["role", "navigation", "aria-label", "main navigation", 1, "navbar"], [1, "navbar-menu"], [1, "navbar-end"], [1, "navbar-item"], ["nz-image", "", "nzSrc", "assets/img/leon.svg", "alt", "Leon", 1, "cursor-pointer"], [1, "mt-0"], ["role", "navigation", "aria-label", "main navigation", 1, "navbar", "mb-3"], [1, "navbar-brand"], [1, "navbar-item", "has-text-weight-bold"], ["src", "assets/img/leon completo.svg", 1, "mr-3"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navbarBasicExample", 1, "navbar-burger", 3, "click"], ["aria-hidden", "true"], [1, "navbar-start"], ["routerLink", "", 1, "navbar-item"], ["routerLink", "experiencia-laboral", 1, "navbar-item"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link"], [1, "navbar-dropdown"], ["routerLink", "arquitecturasoftware", 1, "navbar-item"], ["routerLink", "basedatos", 1, "navbar-item"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hola Mundo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " bienvenido a mi blog, espero les guste mi contenido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " BIENVENIDO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_17_listener() { return ctx.btn_isActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Experiencia Laboral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Arquitectura de Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Base de datos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.is_active_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.is_active_menu);
    } }, directives: [ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__["NzImageDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "L9LU":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/blog/arquitectura-software/arquitectura-software.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ArquitecturaSoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquitecturaSoftwareComponent", function() { return ArquitecturaSoftwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ArquitecturaSoftwareComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArquitecturaSoftwareComponent.ɵfac = function ArquitecturaSoftwareComponent_Factory(t) { return new (t || ArquitecturaSoftwareComponent)(); };
ArquitecturaSoftwareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArquitecturaSoftwareComponent, selectors: [["app-arquitectura-software"]], decls: 48, vars: 0, consts: [[1, "container", "mt-6"], ["aria-label", "breadcrumbs", 1, "breadcrumb", "has-arrow-separator"], [2, "align-items", "normal"], [1, "is-active", 2, "font-size", "25px"], ["href", "#"], [1, "columns", "mx-0"], [1, "column"], [1, "title", "is-3"], ["nz-image", "", "nzSrc", "https://instintobinario.com/wp-content/uploads/2014/12/2512_0-769x360.gif", "alt", ""], [1, "title", "is-4", "mt-2", "has-text-info-dark", "mt-6"], [1, "has-text-justified", "is-size-6-mobile"], [1, "mt-3", "has-text-justified", "is-size-6-mobile"], [1, "title", "is-4", "mt-2", "has-text-info-dark", "mt-5", "is-size-6-mobile"], ["nz-image", "", "nzSrc", "assets/img/que_no_es_arquitectura.PNG", "alt", "", 1, "mt-6"], [1, "column", "is-half"], [1, "title", "is-4", "mt-2", "has-text-info-dark"], ["nz-image", "", "nzSrc", "assets/img/proceso_desarrollo.PNG", "alt", "", 1, "mt-2"], [1, "title", "is-4", "mt-4", "has-text-danger-dark"], ["routerLink", "driver-arquitectonicos", 1, "has-text-link"], ["routerLink", "microservicio", 1, "has-text-link"]], template: function ArquitecturaSoftwareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Introducci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Arquitectra de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Arquitectura de Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00BFQue es Arquitectura de Software? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Una arquitectura es el conjunto de decisiones significativas sobre la organizaci\u00F3n de un sistema software, la selecci\u00F3n de los elementos estructurales y sus interfaces por lo que el sistema esta compuesto junto con su comportamiento como se especifica en sus colaboraciones entre estos elementos, la composici\u00F3n de estos elementos estructurales y de comportamiento en subsistemas progresivamente mas grandes y el estilo de arquitectura que gu\u00EDan la organizaci\u00F3n [Booch, Rumbaugh and Jacobson] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " La arquitectura del software es el dise\u00F1o de m\u00E1s alto nivel de la estructura de un sistema. Consiste en un conjunto de abstracciones que forman el \u201Cmarco\u201D del software. La arquitectura se dise\u00F1a en la fase posterior a la de requisitos, la llamada fase de dise\u00F1o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Que no es Arquitectura de Software ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " La arquitectura de software NO es la arquitectura del Sistema (o de la computadora) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " La arquitectura de software NO es una vista de la funcionalidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " La arquitectura de software NO es un dibujo conceptual de cajas y flechas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u00BFQu\u00E9 es un proceso de desarrollo de software? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Es un marco de trabajo que permite la programaci\u00F3n de las tareas necesarias para construir un software de alta calidad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Drivers arquitect\u00F3nicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Dentro de los requerimientos que se consideran para el desarrollo de un sistema y que se derivan de los objetivos de negocio, existe un subconjunto que tiene una gran importancia relativa a la arquitectura. Estos requerimientos se conocen en ingl\u00E9s como drivers de la arquitectura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "[Ver mas]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Microservicios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " La Arquitectura de Microservicios es un enfoque para desarrollar una aplicaci\u00F3n software como una serie de peque\u00F1os servicios, cada uno ejecut\u00E1ndose de forma aut\u00F3noma y comunic\u00E1ndose entre s\u00ED, por ejemplo, a trav\u00E9s de peticiones HTTP a sus API. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "[Ver mas]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_1__["NzImageDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnF1aXRlY3R1cmEtc29mdHdhcmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArquitecturaSoftwareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-arquitectura-software',
                templateUrl: './arquitectura-software.component.html',
                styleUrls: ['./arquitectura-software.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MIx7":
/*!*****************************************************!*\
  !*** ./src/app/services/work-experience.service.ts ***!
  \*****************************************************/
/*! exports provided: WorkExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceService", function() { return WorkExperienceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WorkExperienceService {
    constructor() {
        this.WorkExperience = {
            Title: "Experiencia Laboral",
            Description: `A continuacion resumiré toda mi experiencia en <b>desarrollo de software</b>. En primer lugar, para el Back-End las principales tecnologías que utilizo son <b>C#</b>, <b>PHP</b> y <b>AWS</b>. 
                  Así mismo, para base de datos relacionales utilizo <b>SQL Server</b> y <b>Mysql</b>. Por ejemplo, desarrolle <b>APIS que se conectaran a Microsoft Azure para almacenar 
                  imágenes</b>, desarrolle <b>microservicios</b>, <b>Lambdas</b>, he realizado proyectos con conexión <b>SignalR</b>, por ejemplo <b>chat en línea</b> y utilizando criterios estadísticos 
                  <b>he calculado información para ser evaluada gráficamente</b>. En segundo lugar, mis labores en el Front-End las he desarrollado con frameworks como <b>Blazor WebAssembly</b>
                  y <b>Angular</b>. Además, utilizo <b>patrones de diseño</b> para mejorar el rendimiento de la aplicación. Por ejemplo <b>patrón singleton</b>, <b>patrón observer</b>, <b>patrón mediador</b>, etc. 
                  Por último, trabajo con <b>métodos ágiles</b>.`,
            ListWorkExperience: [
                {
                    Title: "Satrack",
                    Content: `SATRACK es una empresa que implementa dispositivos IoT para la telemetría, y mi labor consiste en diseñar e implementar soluciones que optimicen esta tecnología. 
                En primer lugar, he integrado dispositivos IoT en la plataforma, desarrollando toda la funcionalidad necesaria para interpretar datos y controlar los dispositivos mediante comandos. 
                En segundo lugar, he optimizado procesos implementando buenas prácticas de desarrollo y utilizando tecnologías avanzadas. Esto ha permitido, entre otras mejoras, reducir el uso 
                de recursos en los pods y corregir aplicaciones con fallos. Además, he migrado y actualizado sistemas obsoletos, asegurando su continuidad y adaptándolos a las necesidades actuales de la plataforma.
                Por último, he monitoreado la plataforma mediante diversas herramientas, al tiempo que he promovido el uso de buenas prácticas de desarrollo y fomentado una cultura de mejora continua.`,
                    Img: "assets/img/logo_satrack.png",
                    Validity: "2022-Enero - Actual"
                },
                {
                    Title: "Real Plaza",
                    Content: `Real Plaza es una cadena de centros comerciales que opera en 13 ciudades del Perú, trabajo en <b>Ing. de Software</b> como Analista programador, mi labor consiste 
                en <b>desarrollar software</b> para automatizar o facilitar el trabajo de los stakeholders. En Real Plaza utilizamos <b>métodos ágiles</b>, las tecnologías que utilizo son: 
                <b>Angular con Ng Zorro</b>, <b>AWS</b>, <b>.Net Core</b>, <b>SQL Server</b>, <b>Docker para el SonarQube</b>, <b>Microsoft Azure</b> y <b>Specflow para las pruebas E2E</b>. 
                Un ejemplo del desarrollo realizado: <b> Microservicios</b>, <b>MicroFront</b>, <b>Lambdas</b>, <b>Subir Archivos a S3</b>, <b>inserción masiva de datos</b>, <b>actualización 
                masiva</b>, <b>Pruebas E2E con C#</b> y todo lo que tenga que ver con <b>.Net Core y AWS</b>.`,
                    Img: "assets/img/logo_real_plaza.png",
                    Validity: "2021-Febrero - 2021-Diciembre"
                },
                {
                    Title: "A&S Software Developers",
                    Content: `A&S es una empresa de desarrollo de software cuyo producto principal es el sistema control de colas. Aparte de ello, soy integrante de un equipo conformado por 
                4 desarrolladores y como tal, parte de mi trabajo es desarrollar en conjunto con mis compañeros. Actualmente trabajo desarrollando requerimientos de software para 
                los clientes de la empresa. Además, tengo la <b>actitud proactiva</b> de automatizar procesos, las principales tecnologías que utilizo son <b>C#</b>, <b>Javascript</b>, 
                <b>SQL Server</b>, <b>.NET Core</b>, <b>Blazor WebAssembly</b> y <b>Angular</b>.`,
                    Img: "assets/img/logo_AyS.png",
                    Validity: "2017-Febrero - 2021-Febrero"
                },
                {
                    Title: "Consulado de Italia - Instituto Italiano",
                    Content: `El Instituto Italiano de Cultura - Agregaduría Cultural de la Embajada de Italia, es una Institución Cultural del Gobierno Italiano, el trabajo que realice para el 
                instituto consistió en integrar un formulario para el registro de alumnos a un sistema ya existente. En primer lugar, <b>atendí los requerimientos funcionales</b> para la 
                integración del software. Además, <b>analicé la base de datos</b> del instituto, este gestor fue <b>MariaDB</b>. En segundo lugar, realice el desarrollo del formulario utilizando 
                <b>bootstrap</b> junto con <b>JQuery</b> para el front-end y para el back-end desarrolle servicios con <b>PHP</b>. Por ultimo, el despliegue de la aplicaion se realizo en un <b>servidor 
                linux</b>. Por lo tanto, fue necesario configurar el servidor, además de instalar las dependencias del proyecto.`,
                    Img: "assets/img/logo_consulado_italiano.jpg",
                    Validity: "2017-Junio - 2017-Agosto"
                }
            ]
        };
    }
    getWorkExperience() {
        return this.WorkExperience;
    }
}
WorkExperienceService.ɵfac = function WorkExperienceService_Factory(t) { return new (t || WorkExperienceService)(); };
WorkExperienceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkExperienceService, factory: WorkExperienceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExperienceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");





class AppComponent {
    constructor() {
        this.title = 'siteweb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "Etcd");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var _pages_blog_arquitectura_software_arquitectura_software_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/blog/arquitectura-software/arquitectura-software.component */ "L9LU");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var _pages_blog_arquitectura_software_post_driver_arquitectonicos_driver_arquitectonicos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/blog/arquitectura-software/post/driver-arquitectonicos/driver-arquitectonicos.component */ "hbfB");
/* harmony import */ var _pages_blog_arquitectura_software_post_microservicio_microservicio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/blog/arquitectura-software/post/microservicio/microservicio.component */ "dCee");
/* harmony import */ var _pages_work_experiencience_work_experiencience_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/work-experiencience/work-experiencience.component */ "0ehU");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/domseguro.pipe */ "nmnT");
/* harmony import */ var _pages_blog_base_datos_base_datos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/blog/base-datos/base-datos.component */ "5Q7x");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");




























Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__["NzCardModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__["NzGridModule"],
            ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_18__["NzImageModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_25__["NzAlertModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _pages_blog_arquitectura_software_arquitectura_software_component__WEBPACK_IMPORTED_MODULE_17__["ArquitecturaSoftwareComponent"],
        _pages_blog_arquitectura_software_post_driver_arquitectonicos_driver_arquitectonicos_component__WEBPACK_IMPORTED_MODULE_19__["DriverArquitectonicosComponent"],
        _pages_blog_arquitectura_software_post_microservicio_microservicio_component__WEBPACK_IMPORTED_MODULE_20__["MicroservicioComponent"],
        _pages_work_experiencience_work_experiencience_component__WEBPACK_IMPORTED_MODULE_21__["WorkExperiencienceComponent"],
        _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_23__["DomseguroPipe"],
        _pages_blog_base_datos_base_datos_component__WEBPACK_IMPORTED_MODULE_24__["BaseDatosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__["NzCardModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__["NzGridModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_18__["NzImageModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_25__["NzAlertModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _pages_blog_arquitectura_software_arquitectura_software_component__WEBPACK_IMPORTED_MODULE_17__["ArquitecturaSoftwareComponent"],
                    _pages_blog_arquitectura_software_post_driver_arquitectonicos_driver_arquitectonicos_component__WEBPACK_IMPORTED_MODULE_19__["DriverArquitectonicosComponent"],
                    _pages_blog_arquitectura_software_post_microservicio_microservicio_component__WEBPACK_IMPORTED_MODULE_20__["MicroservicioComponent"],
                    _pages_work_experiencience_work_experiencience_component__WEBPACK_IMPORTED_MODULE_21__["WorkExperiencienceComponent"],
                    _pipes_domseguro_pipe__WEBPACK_IMPORTED_MODULE_23__["DomseguroPipe"],
                    _pages_blog_base_datos_base_datos_component__WEBPACK_IMPORTED_MODULE_24__["BaseDatosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__["NzCardModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__["NzGridModule"],
                    ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_18__["NzImageModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"],
                    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_25__["NzAlertModule"]
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["en_US"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dCee":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/blog/arquitectura-software/post/microservicio/microservicio.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MicroservicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicioComponent", function() { return MicroservicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");




class MicroservicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
MicroservicioComponent.ɵfac = function MicroservicioComponent_Factory(t) { return new (t || MicroservicioComponent)(); };
MicroservicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MicroservicioComponent, selectors: [["app-microservicio"]], decls: 47, vars: 0, consts: [[1, "container", "mt-6", "pt-5"], ["aria-label", "breadcrumbs", 1, "breadcrumb", "has-arrow-separator"], [2, "align-items", "normal"], [2, "font-size", "25px"], ["routerLink", "/arquitecturasoftware"], [1, "is-active"], ["href", "#"], [1, "columns", "mx-0"], [1, "column"], [1, "title", "is-4", "mt-3", "has-text-link-dark"], [1, "has-text-justified", "mt-5"], [1, "has-text-justified", "mt-3"], [1, "title", "is-4", "mt-4", "has-text-danger-dark"], [1, "mt-2"], [1, "ml-5", "mt-3"], ["type", "1"], ["nz-image", "", "nzSrc", "assets/img/monoliticaVSmicroservicios.png", "alt", "", 1, "my-2"], [1, "column", "is-full"], [1, "has-text-justified", "mt-2"], [1, "columns", "is-mobile"], [1, "column", "is-flex", "is-justify-content-center"], ["nz-image", "", "nzSrc", "assets/img/monoliticaVSmicroserviciosDiagrama.png", "alt", "", 1, "my-2"]], template: function MicroservicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Arquitectra de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Microservicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Microservicios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Arquitecturas monol\u00EDticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " una sola pieza, nivel de complejidad m\u00E1s alta. En caso de despliegue se hace toda la pieza. El fallo en una parte de la aplicaci\u00F3n, provoca el fallo de toda la aplicaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Microservicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " soluci\u00F3n a las falencias de la arquitectura monol\u00EDticas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00BFQue es un microservicio? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Los microservicio son Servicios peque\u00F1os y aut\u00F3nomos que trabajan bien juntos modelado alrededor de un dominio de negocio (business domain). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ol", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Son procesos independientes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Se comunican, predominantemente, sobre API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Alto nivel de autonom\u00EDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Son peque\u00F1os, se enfocan en hacer una sola cosa y la hacen bien! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " La arquitectura de microservicios es un m\u00E9todo de desarrollo de aplicaciones o sistemas de software, compuesto por servicios m\u00E1s peque\u00F1os que proporcionan una funcionalidad de negocio completa. En otras palabras, cada microservicio desempe\u00F1a una funci\u00F3n espec\u00EDfica y puede conectarse con otros microservicios. Es una alternativa a las soluciones monol\u00EDticas m\u00E1s tradicionales, donde todos los elementos funcionales est\u00E1n unidos en un programa o aplicaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Los microservicios nacen de la necesidad de implementar y realizar cambios en el software de forma r\u00E1pida y sencilla. Ahora que los desarrolladores est\u00E1n abandonando las arquitecturas monol\u00EDticas en favor de sistemas de microservicios, cada vez m\u00E1s populares, aumentan las organizaciones que est\u00E1n empezando a dar prioridad al desarrollo de productos compuestos de piezas intercambiables, actualizables y escalables, donde todas encajan como un rompecabezas. Las organizaciones que est\u00E1n adaptando gradualmente una mentalidad centrada en el ser humano, donde se necesita un flujo fluido de informaci\u00F3n, y donde pueden sentirse a\u00FAn m\u00E1s atra\u00EDdas por los microservicios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__["NzImageDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWNyb3NlcnZpY2lvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MicroservicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-microservicio',
                templateUrl: './microservicio.component.html',
                styleUrls: ['./microservicio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hbfB":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/blog/arquitectura-software/post/driver-arquitectonicos/driver-arquitectonicos.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DriverArquitectonicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverArquitectonicosComponent", function() { return DriverArquitectonicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");




class DriverArquitectonicosComponent {
    constructor() { }
    ngOnInit() {
    }
}
DriverArquitectonicosComponent.ɵfac = function DriverArquitectonicosComponent_Factory(t) { return new (t || DriverArquitectonicosComponent)(); };
DriverArquitectonicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverArquitectonicosComponent, selectors: [["app-driver-arquitectonicos"]], decls: 63, vars: 0, consts: [[1, "container", "mt-6", "pt-5"], ["aria-label", "breadcrumbs", 1, "breadcrumb", "has-arrow-separator"], [2, "align-items", "normal"], [2, "font-size", "25px"], ["routerLink", "/arquitecturasoftware"], [1, "is-active"], ["href", "#"], [1, "columns", "mx-0"], [1, "column", "is-full"], [1, "title", "is-4", "mt-3", "has-text-link-dark"], [1, "has-text-justified", "mt-5"], [1, "has-text-justified", "mt-2"], [1, "columns", "px-2"], [1, "column", "is-6", "is-size-12-tablet"], [1, "title", "is-4", "mt-4", "has-text-danger-dark"], [1, "ml-5"], ["type", "1"], [1, "mt-4"], ["nz-image", "", "nzSrc", "assets/img/Driver Arquitectonicos.PNG", "alt", "", 1, "my-2"], [1, "has-text-justified"], [1, "ml-5", "mt-4"]], template: function DriverArquitectonicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Arquitectra de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Drivers arquitect\u00F3nicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Drivers arquitect\u00F3nicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " La arquitectura de software tiene una especial importancia debido a que, la manera en que se estructura un sistema impacta en la capacidad de este para alcanzar los objetivos del negocio. Un requerimiento es una especificaci\u00F3n que describe alguna funcionalidad, atributo de calidad o restricci\u00F3n que influencia el desarrollo de un sistema. La identificaci\u00F3n de los requerimientos ocurre durante la etapa de an\u00E1lisis y a disciplina que se encarga de gestionarlos es la ingenier\u00EDa de requerimientos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " No a todos los requerimientos se les da la misma relevancia al momento de elaborar la arquitectura de software. Se debe enfocar \u00FAnicamente en los requerimientos de mayor influencia respecto de la forma que tomar\u00E1n estos elementos al momento de dise\u00F1ar la arquitectura, al subconjunto de requerimientos que tienen una gran importancia para la arquitectura de un sistema, se les conoce como drivers arquitect\u00F3nicos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Clasificaci\u00F3n de drivers arquitect\u00F3nicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ol", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Drivers funcionales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Drivers de atributos de calidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Drivers de restricciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Durante el dise\u00F1o de la arquitectura, el arquitecto toma como entrada los drivers y produce un dise\u00F1o arquitect\u00F3nico. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Del conjunto de drivers arquitect\u00F3nicos, los atributos de calidad y las restricciones son los requerimientos que tienen mayor influencia sobre el dise\u00F1o de la arquitectura de software. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Drivers funcionales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Son un subconjunto de los requerimientos funcionales.Provee informaci\u00F3n relevante para realizar la descomposici\u00F3n funcional del sistema. Asigna la funcionalidad a elementos espec\u00EDficos en la arquitectura. Los criterios utilizados para escoger estos drivers son: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ol", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Relevancia en la satisfacci\u00F3n del negocio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Complejidad t\u00E9cnica que conlleva su implementaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Representa un escenario relevante para la arquitectura.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Drivers de atributos de calidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Por lo general todos los requerimientos de atributo de calidad son drivers. Su elecci\u00F3n se determina considerando los siguientes criterios: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ol", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Relevancia en la satisfacci\u00F3n de los objetivos del negocio del sistema.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "La complejidad t\u00E9cnica que represente su implementaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Drivers de restricciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " A diferencia con los drivers funcionales y de atributos de calidad, los requerimientos de este tipo no tienen prioridad. Todas las restricciones son consideradas drivers de la arquitectura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__["NzImageDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXItYXJxdWl0ZWN0b25pY29zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverArquitectonicosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-driver-arquitectonicos',
                templateUrl: './driver-arquitectonicos.component.html',
                styleUrls: ['./driver-arquitectonicos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer", "mt-6"], [1, "container", "has-text-centered"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " El buen juicio es usualmente el resultado de la experiencia. Y la experiencia es frecuentemente el resultado de un mal juicio. Pero aprender de la experiencia de otros requiere que aquellos que tienen la experiencia compartan el conocimiento con quienes lo siguen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "@Barry LePatner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nmnT":
/*!*****************************************!*\
  !*** ./src/app/pipes/domseguro.pipe.ts ***!
  \*****************************************/
/*! exports provided: DomseguroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomseguroPipe", function() { return DomseguroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class DomseguroPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.domSanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.domSanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.domSanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.domSanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
DomseguroPipe.ɵfac = function DomseguroPipe_Factory(t) { return new (t || DomseguroPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
DomseguroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "domseguro", type: DomseguroPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomseguroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'domseguro'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "nr5L":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeService {
    constructor() {
        this.ListFrontEnd = [
            {
                skill: "Blazor",
                domain: 90
            },
            {
                skill: "Angular",
                domain: 90
            },
            {
                skill: "JavaScript",
                domain: 60
            },
            {
                skill: "TypeScript",
                domain: 70
            },
            {
                skill: "Bulma",
                domain: 75
            },
            {
                skill: "Ant Design",
                domain: 50
            }
        ];
        this.ListBackEnd = [
            {
                skill: ".Net Core (C#)",
                domain: 70
            },
            {
                skill: "Python",
                domain: 50
            },
            {
                skill: "Java",
                domain: 50
            },
            {
                skill: "SQL Express",
                domain: 70
            },
            {
                skill: "MySql",
                domain: 60
            },
            {
                skill: "Entity Framework Core",
                domain: 50
            },
            {
                skill: "PHP",
                domain: 70
            }
        ];
        this.ListOthers = [
            {
                skill: "GitHub",
                domain: 90
            },
            {
                skill: "Git",
                domain: 80
            },
            {
                skill: "AWS",
                domain: 40
            },
            {
                skill: "Docker",
                domain: 40
            },
            {
                skill: ".Net Core Selenium (E2E)",
                domain: 50
            },
            {
                skill: "Microsoft Azure",
                domain: 20
            },
            {
                skill: "Azure DevOps",
                domain: 30
            }
        ];
    }
    GetFrontEnd() {
        return this.ListFrontEnd;
    }
    GetBackEnd() {
        return this.ListBackEnd;
    }
    GetOthers() {
        return this.ListOthers;
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_blog_arquitectura_software_arquitectura_software_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blog/arquitectura-software/arquitectura-software.component */ "L9LU");
/* harmony import */ var _pages_blog_arquitectura_software_post_driver_arquitectonicos_driver_arquitectonicos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/blog/arquitectura-software/post/driver-arquitectonicos/driver-arquitectonicos.component */ "hbfB");
/* harmony import */ var _pages_blog_arquitectura_software_post_microservicio_microservicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/blog/arquitectura-software/post/microservicio/microservicio.component */ "dCee");
/* harmony import */ var _pages_work_experiencience_work_experiencience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/work-experiencience/work-experiencience.component */ "0ehU");
/* harmony import */ var _pages_blog_base_datos_base_datos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blog/base-datos/base-datos.component */ "5Q7x");










const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'experiencia-laboral', component: _pages_work_experiencience_work_experiencience_component__WEBPACK_IMPORTED_MODULE_6__["WorkExperiencienceComponent"] },
    { path: 'arquitecturasoftware', component: _pages_blog_arquitectura_software_arquitectura_software_component__WEBPACK_IMPORTED_MODULE_3__["ArquitecturaSoftwareComponent"] },
    { path: 'arquitecturasoftware/driver-arquitectonicos', component: _pages_blog_arquitectura_software_post_driver_arquitectonicos_driver_arquitectonicos_component__WEBPACK_IMPORTED_MODULE_4__["DriverArquitectonicosComponent"] },
    { path: 'arquitecturasoftware/microservicio', component: _pages_blog_arquitectura_software_post_microservicio_microservicio_component__WEBPACK_IMPORTED_MODULE_5__["MicroservicioComponent"] },
    { path: 'basedatos', component: _pages_blog_base_datos_base_datos_component__WEBPACK_IMPORTED_MODULE_7__["BaseDatosComponent"] }
];
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