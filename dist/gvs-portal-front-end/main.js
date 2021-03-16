(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GVSNewPortal\gvs-portal-front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "0t4b":
/*!***********************************************************************!*\
  !*** ./src/app/components/jabberservices/jabberservices.component.ts ***!
  \***********************************************************************/
/*! exports provided: JabberservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JabberservicesComponent", function() { return JabberservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");







const _c0 = function () { return ["/employeesearch"]; };
const _c1 = function (a0) { return { country: a0, service: "jabber_new" }; };
const _c2 = function () { return ["/inprogress"]; };
const _c3 = function (a0) { return { country: a0 }; };
class JabberservicesComponent {
    constructor(cookie, cloudantservice, route) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        //cloudantData: any = []
        this.servicesData = [];
        this.ccode = '';
        this.pcode = '';
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        if (sessionStorage.getItem('radioAction') === null) {
        }
        else {
            sessionStorage.setItem('radioAction', 'myself');
            sessionStorage.setItem('empserial', '');
        }
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
                        { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },
                        { "name": "Fixed Phone", "routingname": "/services", "indented": true, "highlighted": false },
                        { "name": "Special Request", "routingname": "/services", "indented": true, "highlighted": false },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
JabberservicesComponent.ɵfac = function JabberservicesComponent_Factory(t) { return new (t || JabberservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
JabberservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JabberservicesComponent, selectors: [["app-jabberservices"]], decls: 61, vars: 21, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "lead-in"], [1, "ds-col-12"], [1, "ds-panel"], [1, "ds-panel-container"], [2, "text-decoration", "none", 3, "routerLink", "queryParams"], ["src", "././assets/arr.png"], [1, "ds-text-blue-6", "ds-pad-l-1"], [1, "ds-padding-left-1", "ds-text-blue-6", "ds-pad-l-1"]], template: function JabberservicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please click on a request type below to initiate a Jabber service request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Request a new service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Update an existing service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Move an existing service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Delete an existing service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.pcode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.pcode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.pcode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.pcode));
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWJiZXJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JabberservicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jabberservices',
                templateUrl: './jabberservices.component.html',
                styleUrls: ['./jabberservices.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "52XD":
/*!*****************************************************!*\
  !*** ./src/app/components/steps/steps.component.ts ***!
  \*****************************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return ["/employeesearch"]; };
const _c1 = function (a0, a1) { return { country: a0, service: a1 }; };
function StepsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_1_Template_span_mouseenter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeClass1 = true; })("mouseout", function StepsComponent_span_1_Template_span_mouseout_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeClass1 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.changeClass1 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.step === 1 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx_r0.pcode, ctx_r0.service))("ngClass", ctx_r0.step === 1 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.servicesData[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.servicesData[0].tooltip);
} }
const _c2 = function () { return ["/employeeinfo"]; };
function StepsComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_2_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeClass2 = true; })("mouseout", function StepsComponent_span_2_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeClass2 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.step === 2 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.changeClass2 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.step === 1 || ctx_r1.step === 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx_r1.pcode, ctx_r1.service))("ngClass", ctx_r1.step === 2 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.servicesData[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.servicesData[1].tooltip);
} }
function StepsComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_3_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeClass2 = true; })("mouseout", function StepsComponent_span_3_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changeClass2 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.sendToEntryDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.step === 2 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.changeClass2 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.step === 1 || ctx_r2.step === 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.step === 2 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.servicesData[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.servicesData[2].tooltip);
} }
function StepsComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_4_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeClass3 = true; })("mouseout", function StepsComponent_span_4_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeClass3 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_4_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.sendToEntryDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.step === 3 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.changeClass3 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.step === 1 || ctx_r3.step === 2 || ctx_r3.step === 3 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.step === 3 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.servicesData[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.servicesData[3].tooltip);
} }
const _c3 = function () { return ["/entrydetails"]; };
function StepsComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_5_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeClass3 = true; })("mouseout", function StepsComponent_span_5_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changeClass3 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.step === 3 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.changeClass3 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.step === 1 || ctx_r4.step === 2 || ctx_r4.step === 3 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx_r4.pcode, ctx_r4.service))("ngClass", ctx_r4.step === 3 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.servicesData[4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.servicesData[4].tooltip);
} }
function StepsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_6_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.changeClass4 = true; })("mouseout", function StepsComponent_span_6_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeClass4 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.step === 4 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.changeClass4 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.step === 4 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.servicesData[5].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.servicesData[5].tooltip);
} }
class StepsComponent {
    constructor(route) {
        this.route = route;
        this.isWarning = false;
        this.isWarning1 = false;
        this.isWarning2 = false;
        this.isWarning3 = false;
        this.previousStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.servicesData = [];
        this.pcode = '';
        this.isDisabled = false;
        this.changeClass1 = false;
        this.changeClass2 = false;
        this.changeClass3 = false;
        this.changeClass4 = false;
    }
    set onChange(isWarning) {
        this.isWarning = isWarning;
        if (this.step === 1) {
            if (isWarning === true) {
                this.isWarning1 = true;
                this.isWarning2 = true;
                this.isWarning3 = true;
            }
            else {
                this.isWarning1 = false;
                this.isWarning2 = false;
                this.isWarning3 = false;
            }
        }
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            this.service = params.service;
            console.log("navigation component" + this.pcode);
        });
        const servicesData = {
            "data": [
                {
                    "steps": [
                        { "name": "STEP 1", "tooltip": "Employee Search" },
                        { "name": "STEP 2", "tooltip": "Employee Information" },
                        { "name": "STEP 2", "tooltip": "Employee Entry Details" },
                        { "name": "STEP 3", "tooltip": "Employee Entry Details" },
                        { "name": "STEP 3", "tooltip": "Review Details" },
                        { "name": "STEP 4", "tooltip": "Review Details" }
                    ]
                }
            ]
        };
        this.servicesData = servicesData.data[0].steps;
        if (!(this.step === 1)) {
            if (this.isSelf === 'myself') {
                this.isSelf = true;
            }
            else {
                this.isSelf = false;
            }
        }
        if (this.step === 2 && this.isWarning === true) {
            this.isWarning2 = true;
            this.isWarning3 = true;
            this.isWarning1 = false;
        }
        if (this.step === 3 && this.isWarning === true) {
            this.isWarning3 = true;
            this.isWarning1 = false;
        }
        if (this.step === 3 && this.isSelf === true) {
            this.step = 2;
        }
        if (this.step === 4 && this.isSelf === true) {
            this.step = 3;
        }
    }
    sendToEntryDetails() {
        this.previousStep.emit('true');
    }
}
StepsComponent.ɵfac = function StepsComponent_Factory(t) { return new (t || StepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
StepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepsComponent, selectors: [["app-steps"]], inputs: { step: "step", isSelf: "isSelf", onChange: ["hideSteps", "onChange"] }, outputs: { previousStep: "previousStep" }, decls: 7, vars: 6, consts: [[1, "ds-panel-row"], [4, "ngIf"], ["id", "tooltip-demo1", 3, "ngClass"], [3, "mouseenter", "mouseout"], ["aria-label", "help", "tabindex", "0", 3, "routerLink", "queryParams", "ngClass"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content", "ds-text-neutral-7"], [3, "ngClass"], ["aria-label", "help", "tabindex", "0", 3, "ngClass", "click"], ["aria-label", "help", "tabindex", "0", 3, "ngClass"]], template: function StepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepsComponent_span_1_Template, 8, 12, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepsComponent_span_2_Template, 11, 13, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepsComponent_span_3_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepsComponent_span_4_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepsComponent_span_5_Template, 11, 13, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StepsComponent_span_6_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSelf && !ctx.isWarning1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelf && !ctx.isWarning1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSelf && !ctx.isWarning2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelf && !ctx.isWarning2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSelf && !ctx.isWarning3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\na.disabled[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-steps',
                templateUrl: './steps.component.html',
                styleUrls: ['./steps.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['step']
        }], isSelf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isSelf']
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hideSteps']
        }], previousStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "7+xq":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../demo.service */ "oHDm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class DemoComponent {
    constructor(Service) {
        this.Service = Service;
        this.res_rec = '';
    }
    generate(cnum) {
        console.log(cnum);
        this.Service.getNodes(cnum).subscribe(data => {
            console.log('Response received', data);
            this.res_rec = data.message;
        });
    }
    ngOnInit() {
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_1__["ConnectCucdmService"])); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 14, vars: 1, consts: [[1, "form-group"], ["for", "CNUM"], [1, "col-sm-4"], ["type", "text"], ["cnum", ""], ["type", "button", "ng-disabled", "false", 1, "btn-primary", "btn-lg", "btn-block", 3, "click"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cnum:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.generate(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.res_rec, "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demo',
                templateUrl: './demo.component.html',
                styleUrls: ['./demo.component.css']
            }]
    }], function () { return [{ type: _demo_service__WEBPACK_IMPORTED_MODULE_1__["ConnectCucdmService"] }]; }, null); })();


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

/***/ "BaVL":
/*!***********************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FeedbackComponent {
    constructor() {
        this.uname = "kk";
    }
    ngOnInit() {
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 9, vars: 0, template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page under construction !!!!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GuZX":
/*!*********************************************************************!*\
  !*** ./src/app/components/reviewdetails/reviewdetails.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReviewdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewdetailsComponent", function() { return ReviewdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ReviewdetailsComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReviewdetailsComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request is being submitted.Do not refresh or go back.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReviewdetailsComponent {
    constructor(router, cookie, cloudantservice, servicenowservice) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.servicenowservice = servicenowservice;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_New"]();
        this.reviewDetailsIndia = {
            officeLocation: "Ahmedabad",
            campus: "Titanium",
            funded: "Yes",
            chargeDepartmentCode: "QADF",
            businessUnit: "GBS",
            projectId: "ABCDS",
            fixPhoneIdentifier: " ",
            Voice_Type_Disp: true,
            icano_Disp: "disp",
            Location_final: "",
            accid_Disp: "",
            reqno: ""
        };
    }
    submit_snow() {
        this.isButtonVisible = false;
        this.isSpinnerVisible = true;
        this.payload.orinator_payload = this.ccode;
        this.payload.cNum_payload = this.cnum;
        // fields picked up from form -- begins
        this.payload.Buildings_Disp = this.reviewDetailsIndia.campus;
        // by default set to true. below line can be removed if needed.
        this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp;
        this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;
        this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp;
        this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;
        this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit;
        this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;
        this.payload.Location_final = this.reviewDetailsIndia.Location_final;
        this.payload.accid_Disp = this.reviewDetailsIndia.accid_Disp;
        this.payload.ReqNo = this.reviewDetailsIndia.reqno;
        // fields to be picked up from form -- ends
        this.payload.level1_japproval = this.countrydetails.level1_japproval;
        this.payload.level2_japproval = this.countrydetails.level2_japproval;
        this.payload.SLA_type = this.countrydetails.SLA_type;
        this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
        this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
        this.payload.countryname = this.countrydetails.name;
        this.payload.request_type = 'jabber_new';
        this.payload.evolution_instance = this.countrydetails.evolution_instance;
        this.payload.qag = this.countrydetails.qag;
        this.payload.class_of_serice = this.countrydetails.class_of_serice;
        this.payload.country_code = this.countrydetails.code;
        //console.log('Payload');
        //console.log(this.payload);
        this.servicenowservice.submit_new_jabber_request(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage']);
        });
    }
    ngOnInit() {
        this.ccode = this.cookie.getCookie('ccode');
        this.cnum = sessionStorage.getItem('cnum');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 4,
                }
            ]
        };
        this.servicesData = servicesData.data[0];
        this.reqFor = sessionStorage.getItem('reqFor');
    }
}
ReviewdetailsComponent.ɵfac = function ReviewdetailsComponent_Factory(t) { return new (t || ReviewdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"])); };
ReviewdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewdetailsComponent, selectors: [["app-reviewdetails"]], decls: 69, vars: 13, consts: [[1, "ds-panel", "ds-col-12"], ["overlay", ""], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-b-1"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "addId1"], ["width", "54%", "height", "10"], ["colspan", "2", "width", "46%"], ["width", "54%"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "Projectid"], ["for", "icano"], [1, "ds-hr-thick", "ds-mar-t-1_5"], [1, "ds-row", "ds-mar-t-b-1_5"], [1, "ds-col-xs-10", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], ["class", "ds-button ds-primary ds-pad-l-0 ds-pad-r-0 ds-text-align-center", "style", "width: 100%", "id", "back", 4, "ngIf"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], [1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "click"], ["class", "ds-loader-container", 4, "ngIf"], ["id", "back", 1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"]], template: function ReviewdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navigation", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-steps", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Jabber Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Project id (for GBS employee only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Fix Phone Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ReviewdetailsComponent_button_64_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewdetailsComponent_Template_button_click_66_listener() { return ctx.submit_snow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ReviewdetailsComponent_div_68_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.officeLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.campus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.funded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.chargeDepartmentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.businessUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.projectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.fixPhoneIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_6__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_8__["StepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\r\n\r\n#loading[_ngcontent-%COMP%]{ \r\n    position: absolute; \r\n    left: 50%; \r\n    top: 50%; \r\n    z-index: 1; \r\n    width: 100px; \r\n    height: 100px; \r\n    margin: -75px 0 0 -75px; \r\n    border: 16px solid #f3f3f3; \r\n    border-radius: 50%; \r\n    border-top: 16px solid #3498db; \r\n    width: 100px; \r\n    height: 100px; \r\n    animation: spin 2s linear infinite; \r\n    }\r\n\r\n@keyframes spin { \r\n        0% { transform: rotate(0deg); } \r\n        100% { transform: rotate(360deg); } \r\n    }\r\n\r\n#overlay[_ngcontent-%COMP%] {\r\n        position: fixed;\r\n        display: none;\r\n        width: 100%;\r\n        height: 100%;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: rgba(0,0,0,0.5);\r\n        z-index: 2;\r\n        cursor: pointer;\r\n      }\r\n\r\n.disable-background[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background: #2d2d2d;\r\n    opacity: 0.8;\r\n    z-index: 998;\r\n    height: 100%;\r\n    width: 100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0VBQXNFOztBQUUxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQzs7QUFFQTtRQUNJLEtBQUssdUJBQXVCLEVBQUU7UUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtJQUN0Qzs7QUFFQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixNQUFNO1FBQ04sT0FBTztRQUNQLFFBQVE7UUFDUixTQUFTO1FBQ1QsaUNBQWlDO1FBQ2pDLFVBQVU7UUFDVixlQUFlO01BQ2pCOztBQUdOO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7Q0FDZCIsImZpbGUiOiJyZXZpZXdkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcy10ZXh0LWNvbnRleHR1YWwtZ3JlZW4tMyB7XHJcbiAgICBjb2xvcjogIzI3YWE3YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHMtdGV4dC1jb250ZXh0dWFsLWJsdWUtNSB7XHJcbiAgICBjb2xvcjogIzAzNzBiMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSUJNUGxleFNhbnNcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBcclxufVxyXG5cclxuI2xvYWRpbmd7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGxlZnQ6IDUwJTsgXHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIHdpZHRoOiAxMDBweDsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIG1hcmdpbjogLTc1cHggMCAwIC03NXB4OyBcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICMzNDk4ZGI7IFxyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgQGtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfSBcclxuICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSBcclxuICAgIH1cclxuICAgIFxyXG4gICAgI292ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuLmRpc2FibGUtYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviewdetails',
                templateUrl: './reviewdetails.component.html',
                styleUrls: ['./reviewdetails.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"] }]; }, null); })();


/***/ }),

/***/ "HL2q":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _middleframe_middleframe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middleframe/middleframe.component */ "xD7X");








class ServicesComponent {
    constructor(router, cookie, cloudantservice, route) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.cloudantData = [];
        this.servicesData = [];
        this.ccode = '';
        this.pcode = '';
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        this.countryroute = sessionStorage.getItem('countryroute');
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "titles": [
                        "Terms of use",
                        "Useful Information",
                        "Please bear in mind the following points when making a request :"
                    ],
                    "usefulinfotexts": [
                        "To make a request the Employee must exist in BluePages (except for cancellation requests).",
                        "You must know the IBM serial Number of the person making the request.",
                        "Only one request per employee per request type is processed at a time."
                    ],
                    "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 7, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-middleframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _middleframe_middleframe_component__WEBPACK_IMPORTED_MODULE_6__["MiddleframeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "IE7g":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/employeesearch-voip-delete/employeesearch-voip-delete.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EmployeesearchVoipDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesearchVoipDeleteComponent", function() { return EmployeesearchVoipDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function EmployeesearchVoipDeleteComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Kankanampati,Manisha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchVoipDeleteComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchVoipDeleteComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "000RQU744");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchVoipDeleteComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchVoipDeleteComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(eg 012789)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EmployeesearchVoipDeleteComponent {
    constructor(router, cookie, cloudantservice) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.radioAction = "";
        this.hideDisTextBox = false;
        this.hideDisserial = true;
        this.cloudantData = [];
        this.servicesData = [];
        this.ccode = '';
    }
    submit() {
        this.router.navigate(['/employeeinfo']);
    }
    ngOnInit() {
        this.radioAction = "mySelf";
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.cloudantservice.getcountrydetails(this.ccode).subscribe(data => {
            console.log('Response received', data.countrydetails.name);
            this.countryname = data.countrydetails;
            this.cloudantData = {
                "code": this.ccode,
                "name": this.countryname.name,
                "isocode": this.countryname.isocode,
                "isjabber": this.countryname.isjabber,
                "isfixedphone": this.countryname.isfixphone,
                "isfac": this.countryname.isfac,
                "isspecial": this.countryname.isspecial
            };
        });
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "titles": [
                        "Terms of use",
                        "Useful Information",
                        "Please bear in mind the following points when making a request :"
                    ],
                    "usefulinfotexts": [
                        "To make a request the Employee must exist in BluePages (except for cancellation requests).",
                        "You must know the IBM serial Number of the person making the request.",
                        "Only one request per employee per request type is processed at a time."
                    ],
                    "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
    onSubmit(formData) {
        if (formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true) {
            alert("Please enter serial number");
        }
        else if (formData.value.employeeSerial.length < 6 && this.hideDisTextBox == true) {
            alert("Employee Serial Number should be of 6 characters");
        }
    }
    onRequestForChange() {
        if (this.radioAction.toLowerCase() == "anotheremployee") {
            this.hideDisTextBox = true;
            this.hideDisserial = false;
        }
        else if (this.radioAction.toLowerCase() == "myself") {
            this.hideDisTextBox = false;
            this.hideDisserial = true;
        }
    }
}
EmployeesearchVoipDeleteComponent.ɵfac = function EmployeesearchVoipDeleteComponent_Factory(t) { return new (t || EmployeesearchVoipDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"])); };
EmployeesearchVoipDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesearchVoipDeleteComponent, selectors: [["app-employeesearch-voip-delete"]], decls: 83, vars: 9, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "ngSubmit"], ["formData", "ngForm"], [1, "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [1, "ds-panel-row"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5", "ds-pad-l-1"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content", "ds-text-neutral-7"], [1, "ds-pad-l-r-1", "ds-text-contextual-blue-5"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover", "ds-text-align-center"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], [1, "ds-input-container"], ["role", "group", "aria-labelledby", "horizontal-radio-buttons-example", 1, "ds-input-radio-group", "ds-flex"], [1, "ds-input-radio", "ds-mar-r-1"], ["type", "radio", "name", "radio-group2", "id", "radio4", "value", "mySelf", 1, "ds-input", 3, "ngModel", "ngModelChange", "change"], [1, "ds-input-control"], ["for", "radio4"], [1, "ds-input-radio"], ["type", "radio", "name", "radio-group2", "id", "radio5", "value", "anotherEmployee", 1, "ds-input", 3, "ngModel", "ngModelChange", "change"], ["for", "radio5"], [4, "ngIf"], ["class", "ds-pad-t-2", 4, "ngIf"], ["colspan", "2"], ["class", " row ds-pad-t-2", 4, "ngIf"], [1, "ds-hr-thick", "ds-mar-t-1_5"], [1, "ds-row", "ds-mar-t-b-3_5"], [1, "ds-col-xs-12", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], ["type", "submit", 1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], ["type", "button", 1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%"], ["for", "OriginatorNameId"], [1, "ds-pad-t-2"], [1, "row", "ds-pad-t-2"], [1, "ds-col-4"], ["maxlength", "6", "name", "employeeSerial", "ngModel", "", "type", "text", 1, "ds-input"], [1, "ds-col-6"], [2, "color", "#808080"]], template: function EmployeesearchVoipDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeesearchVoipDeleteComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request delete Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This request can be submitted for yourself, or on behalf of another employee. Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") are required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Employee Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "STEP 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Employee Entry Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "STEP 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Who is this request for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchVoipDeleteComponent_Template_input_ngModelChange_55_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchVoipDeleteComponent_Template_input_change_55_listener() { return ctx.onRequestForChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchVoipDeleteComponent_Template_input_ngModelChange_60_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchVoipDeleteComponent_Template_input_change_60_listener() { return ctx.onRequestForChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Another Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, EmployeesearchVoipDeleteComponent_tr_64_Template, 6, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, EmployeesearchVoipDeleteComponent_div_67_Template, 3, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, EmployeesearchVoipDeleteComponent_div_69_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, EmployeesearchVoipDeleteComponent_div_72_Template, 5, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, EmployeesearchVoipDeleteComponent_div_74_Template, 6, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "EXIT REQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisserial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisserial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisserial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisTextBox);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXNlYXJjaC12b2lwLWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesearchVoipDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employeesearch-voip-delete',
                templateUrl: './employeesearch-voip-delete.component.html',
                styleUrls: ['./employeesearch-voip-delete.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }]; }, null); })();


/***/ }),

/***/ "JIgN":
/*!***********************************************************************!*\
  !*** ./src/app/components/voip-in-delete/voip-in-delete.component.ts ***!
  \***********************************************************************/
/*! exports provided: VoipInDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipInDeleteComponent", function() { return VoipInDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VoipInDeleteComponent {
    constructor() { }
    ngOnInit() {
    }
}
VoipInDeleteComponent.ɵfac = function VoipInDeleteComponent_Factory(t) { return new (t || VoipInDeleteComponent)(); };
VoipInDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInDeleteComponent, selectors: [["app-voip-in-delete"]], decls: 2, vars: 0, template: function VoipInDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "voip-in-delete works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2lwLWluLWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipInDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-in-delete',
                templateUrl: './voip-in-delete.component.html',
                styleUrls: ['./voip-in-delete.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Nzlk":
/*!*******************************************************************!*\
  !*** ./src/app/components/employeeinfo/employeeinfo.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeinfoComponent", function() { return EmployeeinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_db2_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/db2.service */ "qtc7");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _services_bp_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/bp.service */ "Qz7Q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");












function EmployeeinfoComponent_div_2_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "If the following information is correct, click Next. Any errors must be corrected in the employee's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BluePages record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " before continuing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Entry Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Job Responsibility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Business Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.jobResponsibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.businessUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.email);
} }
function EmployeeinfoComponent_div_2_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The serial number that you have entered is not eligible to request more than one Jabber account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help related to Jabber configuration can be found at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Help@IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " For any further assistance, please contact ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " '.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The IBM Telephone Number (ITN) that exists for this users jabber account is ", ctx_r5.identifier, ".");
} }
function EmployeeinfoComponent_div_2_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The serial number that you have entered has already one new Jabber request is in progress and request number is ", ctx_r6.identifier, ".");
} }
function EmployeeinfoComponent_div_2_button_48_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_div_2_button_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navigation", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Request new Jabber service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmployeeinfoComponent_div_2_p_7_Template, 5, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-steps", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployeeinfoComponent_div_2_h2_10_Template, 2, 0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmployeeinfoComponent_div_2_h2_11_Template, 2, 0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmployeeinfoComponent_div_2_table_12_Template, 50, 6, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The serial number that you have entered is not eligible to request Jabber account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The IBM Telephone Number (ITN) that exists for this user is .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "There is no Jabber for this serial number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The serial number you have entered does not own an IP Telephone Number (ITN) and so is not eligible for Jabber. Please use this link to raise a request for an ITN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Global Voice Infrastructure.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Once you have received the ITN you can then request Jabber. Thank you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "The serial number that you have entered is not authorized to access Jabber service. You can access IP Extension option available on the left side menu. For any further queries about Jabber, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ladislav.Kosar@sk.ibm.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "The serial number that you have entered is not authorized to access IP Extension service. You can access Jabber option available on the left side menu. For any further queries about IP Extension, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ladislav.Kosar@sk.ibm.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EmployeeinfoComponent_div_2_div_43_Template, 17, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EmployeeinfoComponent_div_2_div_44_Template, 12, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EmployeeinfoComponent_div_2_button_48_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_div_2_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.backClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "BACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx_r0.servicesData)("cloudantData", ctx_r0.cloudantData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selfinfo == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx_r0.servicesData.step)("isSelf", ctx_r0.reqFor)("hideSteps", ctx_r0.hideSteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selfinfo == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selfinfo == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selfinfo == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfosnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfo == false && ctx_r0.warninginfosnow == false);
} }
class EmployeeinfoComponent {
    constructor(router, cookie, cloudantservice, Db2Service, servicenowservice, bpservices, location, route) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.Db2Service = Db2Service;
        this.servicenowservice = servicenowservice;
        this.bpservices = bpservices;
        this.location = location;
        this.route = route;
        this.ccode = '';
        this.pcode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.warninginfo = true;
        this.warninginfosnow = true;
        this.selfinfo = false;
        this.isDataLoaded = false;
        this.hideSteps = false;
    }
    submit() {
        if (this.service == "requests" || this.service == "resources" || this.service == "approvalpending" || this.service == "revalidationpending") {
            this.navpage = '/' + this.service;
        }
        else {
            this.navpage = '/entrydetails';
        }
        this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
    }
    backClick() {
        sessionStorage.setItem('backbutton', 'yes');
        sessionStorage.setItem('step', 'step1');
        this.location.back();
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        const servicesData = {
            "data": [
                {
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 2,
                }
            ]
        };
        this.reqFor = sessionStorage.getItem('radioAction');
        if (sessionStorage.getItem('radioAction') == "myself") {
            this.selfinfo = true;
        }
        this.cnum = sessionStorage.getItem('cnum');
        this.servicesData = servicesData.data[0];
        this.warninginfo = false;
        this.warninginfosnow = false;
        this.sessionwarninginfo = sessionStorage.getItem('warninginfo');
        this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow');
        console.log("from12345" + this.sessionwarninginfo + this.sessionwarninginfosnow);
        if (this.sessionwarninginfo == 'true1' && this.service == "jabber_new") {
            this.warninginfo = true;
            this.identifier = sessionStorage.getItem('identifier');
            this.isDataLoaded = true;
        }
        else if (this.sessionwarninginfosnow == 'true1' && this.service == "jabber_new") {
            this.warninginfosnow = true;
            this.identifier = sessionStorage.getItem('identifier');
            this.isDataLoaded = true;
        }
        // this.warninginfosnow = true
        this.isDataLoaded = true;
        //this.identifier=sessionStorage.getItem('identifier')
        this.employeeInfo1 = sessionStorage.getItem('employeeInfo');
        this.employeeInfo = JSON.parse(this.employeeInfo1);
        if (this.warninginfo || this.warninginfosnow) {
            this.hideSteps = true;
        }
        else {
            this.hideSteps = false;
        }
    }
}
EmployeeinfoComponent.ɵfac = function EmployeeinfoComponent_Factory(t) { return new (t || EmployeeinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_4__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_6__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
EmployeeinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeinfoComponent, selectors: [["app-employeeinfo"]], decls: 3, vars: 1, consts: [[1, "ds-panel", "ds-col-12"], ["class", "ds-row ds-pad-l-7 ds-pad-t-1 ds-pad-b-4", 4, "ngIf"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-padding-top-0_5"], [4, "ngIf"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps"], ["class", "ds-bg-neutral-2 ds-text-neutral-7 ds-pad-l-0_5 ", 4, "ngIf"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 4, "ngIf"], ["id", "war11", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "war2", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], [2, "font-size", "1rem"], ["id", "war3", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "war4", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["target", "_blank", "href", "https://105.w3-969.ibm.com/tools/voice/SPOEProd.nsf/EntryPage?OpenForm&EMEA_Voice", 2, "color", "blue"], ["id", "err-dept1", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["target", "_blank", "href", "mailto:Ladislav.Kosar@sk.ibm.com", 2, "color", "blue"], ["id", "err-dept2", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "w1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], [1, "ds-hr-thick"], [1, "ds-row", "ds-mar-t-b-3_5"], [1, "ds-col-xs-10", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], ["class", "ds-button ds-primary ds-pad-l-0 ds-pad-r-0 ds-text-align-center", "style", "width: 100%", 3, "click", 4, "ngIf"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], [1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "click"], ["href", "https://w3.ibm.com/bluepages/", "target", "_blank"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["width", "359"], ["for", "NameID"], ["for", "JobID"], ["for", "BUID"], ["for", "DeptID"], ["for", "EmpCountryID"], ["for", "EmailID"], ["id", "w1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["target", "_blank", "href", "https://w3.ibm.com/help/#/article/jabbernewuser", 2, "color", "blue"], ["target", "_blank", "href", "https://ibm-cio.slack.com/archives/C0133EDUGVB", 2, "color", "blue"], ["id", "req_stat", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%", 3, "click"]], template: function EmployeeinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeinfoComponent_div_2_Template, 52, 12, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__["TopcountryframeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzRUFBc0U7O0FBRTFFIiwiZmlsZSI6ImVtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHMtdGV4dC1jb250ZXh0dWFsLWdyZWVuLTMge1xyXG4gICAgY29sb3I6ICMyN2FhN2MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRzLXRleHQtY29udGV4dHVhbC1ibHVlLTUge1xyXG4gICAgY29sb3I6ICMwMzcwYjAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTVBsZXhTYW5zXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeinfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employeeinfo',
                templateUrl: './employeeinfo.component.html',
                styleUrls: ['./employeeinfo.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }, { type: _services_db2_service__WEBPACK_IMPORTED_MODULE_4__["Db2Service"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"] }, { type: _services_bp_service__WEBPACK_IMPORTED_MODULE_6__["bpservices"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "OHqS":
/*!****************************************!*\
  !*** ./src/app/dropdownsearch.pipe.ts ***!
  \****************************************/
/*! exports provided: DropdownsearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownsearchPipe", function() { return DropdownsearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DropdownsearchPipe {
    /**
      * Transform
      *
      * @param {any[]} items
      * @param {string} searchText
      * @returns {any[]}
      */
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        this.result = items.filter(it => {
            return it.name.toLocaleLowerCase().includes(searchText);
        });
        return this.result;
    }
}
DropdownsearchPipe.ɵfac = function DropdownsearchPipe_Factory(t) { return new (t || DropdownsearchPipe)(); };
DropdownsearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dropdownsearch", type: DropdownsearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownsearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dropdownsearch'
            }]
    }], null, null); })();


/***/ }),

/***/ "PH4R":
/*!***********************************************************************!*\
  !*** ./src/app/components/servicessearch/servicessearch.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServicessearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicessearchComponent", function() { return ServicessearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../filter.pipe */ "i6q1");






const _c0 = function () { return ["/services"]; };
const _c1 = function (a0) { return { country: a0 }; };
function ServicessearchComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, searchResult_r1.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", searchResult_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", searchResult_r1.name, " ");
} }
class ServicessearchComponent {
    constructor() {
        this.searchItems = [
            { "name": "India Jabber", "flag": "././assets/flags/744.png", "code": "744" },
        ];
    }
    ngOnInit() {
        this.searchText = sessionStorage.getItem('searchText');
    }
}
ServicessearchComponent.ɵfac = function ServicessearchComponent_Factory(t) { return new (t || ServicessearchComponent)(); };
ServicessearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicessearchComponent, selectors: [["app-servicessearch"]], decls: 16, vars: 5, consts: [[1, "ds-row", "ds-pad-t-1", "ds-pad-b-10"], [1, "ds-pad-b-5"], [1, "ds-col-sm-12", "ds-col-md-2", "ds-col-xl-3"], [1, "ds-col-sm-12", "ds-col-md-10", "ds-col-xl-7"], [1, "ds-row", "ds-pad-l-12", "ds-pad-t-4"], [1, "ds-col-sm-12", "ds-col-md-2", "ds-col-xl-2", "ds-pad-t-1"], [1, "ds-col-sm-12", "ds-col-md-10", "ds-col-xl-10", "ds-pad-b-2"], [1, "ds-col-sm-8", "md-2", "xl-5"], ["type", "text", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Search service...", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], [1, "row"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "queryParams"], ["width", "28;", "height", "20;", 1, "ds-border-neutral-5", 3, "src"]], template: function ServicessearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GVS Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicessearchComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ServicessearchComponent_div_14_Template, 5, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 2, ctx.searchItems, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlc3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicessearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicessearch',
                templateUrl: './servicessearch.component.html',
                styleUrls: ['./servicessearch.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PJ3E":
/*!*******************************************************************!*\
  !*** ./src/app/components/entrydetails/entrydetails.component.ts ***!
  \*******************************************************************/
/*! exports provided: EntrydetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrydetailsComponent", function() { return EntrydetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EntrydetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
EntrydetailsComponent.ɵfac = function EntrydetailsComponent_Factory(t) { return new (t || EntrydetailsComponent)(); };
EntrydetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntrydetailsComponent, selectors: [["app-entrydetails"]], decls: 2, vars: 0, template: function EntrydetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "entrydetails works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyeWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntrydetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entrydetails',
                templateUrl: './entrydetails.component.html',
                styleUrls: ['./entrydetails.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qz7Q":
/*!*****************************************!*\
  !*** ./src/app/_services/bp.service.ts ***!
  \*****************************************/
/*! exports provided: bpservices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpservices", function() { return bpservices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class bpservices {
    constructor(http) {
        this.http = http;
        this.Url = '/api/bpdetails';
    }
    bpdetails(cnum) {
        // return this.http.get('/feedback'); 
        return this.http.post(this.Url, { cnum })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    errorhandler(error) {
        console.log(error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || "Sever Error");
    }
}
bpservices.ɵfac = function bpservices_Factory(t) { return new (t || bpservices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
bpservices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: bpservices, factory: bpservices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](bpservices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Rfmm":
/*!***********************************************!*\
  !*** ./src/app/_services/cloudant.service.ts ***!
  \***********************************************/
/*! exports provided: cloudantservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudantservice", function() { return cloudantservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class cloudantservice {
    constructor(http) {
        this.http = http;
        this.Url = '/api/countrydetails';
        this.Url1 = '/api/locationdetails';
    }
    getcountrydetails(ccode) {
        console.log("getcountrydetails" + ccode);
        return this.http.post(this.Url, { ccode })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    getlocationdetails(ccode) {
        console.log("getlocationdetails" + ccode);
        return this.http.post(this.Url1, { ccode })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    errorhandler(error) {
        console.log(error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || "Sever Error");
    }
}
cloudantservice.ɵfac = function cloudantservice_Factory(t) { return new (t || cloudantservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
cloudantservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: cloudantservice, factory: cloudantservice.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](cloudantservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/uitoplinks/uitoplinks.component */ "rXSL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'gvs-portal-front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [[1, "ds-grid"], [1, "ds-row", "ds-bg-dark", "ds-padding-top-5", 2, "background-image", "url(././assets/footer.png)", "background-position", "center", "background-size", "cover", "background-repeat", "no-repeat"], [1, "ds-col-xs-10", "ds-offset-xs-3", "ds-mar-t-3", "ds-col-lg-8", "ds-offset-lg-2", "ds-col-xl-6", "ds-offset-xl-3", "ds-text-align-center", "ds-shadow-text"], [1, "ds-margin-bottom-5"], ["href", "https://w3.ibm.com/help/#/article/telephony_gvi_spoe/overview", "target", "_blank", 1, "ds-text-neutral-1"], [1, "ds-caption"], [1, "ds-col-xs-10", "ds-offset-xs-1", "ds-col-md-4", "ds-offset-lg-2", "ds-col-xl-2", "ds-offset-xl-3", "ds-align-text-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-uitoplinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Have additional questions about ordering Global Voice Services ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Help@IBM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "* This website supports Mozilla Firefox, Google Chrome, IE and Safari.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_1__["UitoplinksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Wptv":
/*!*************************************************************!*\
  !*** ./src/app/components/resources/resources.component.ts ***!
  \*************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_db2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/db2.service */ "qtc7");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ResourcesComponent_tbody_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "font", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "font", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "font", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "font", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const no_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r1.fl_resoucetype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r1.fl_supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", no_r1.fl_phone_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", no_r1.fl_additional_information, " ");
} }
class ResourcesComponent {
    constructor(cookie, cloudantservice, Db2Service) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.Db2Service = Db2Service;
        this.resources = [
            { fl_resoucetype: "IP Extension", fl_supplier: "Cisco", fl_phone_number: "69501765", fl_additional_information: "none" },
            { fl_resoucetype: "IP Extension", fl_supplier: "Cisco", fl_phone_number: "69512345", fl_additional_information: "none" },
            { fl_resoucetype: "IP Extension", fl_supplier: "Cisco", fl_phone_number: "69512351", fl_additional_information: "none" },
            { fl_resoucetype: "Jabber", fl_supplier: "Cisco", fl_phone_number: "69502111", fl_additional_information: "none" },
            { fl_resoucetype: "Jabber", fl_supplier: "Cisco", fl_phone_number: "69501222", fl_additional_information: "NA" }
        ];
        this.cloudantData = [];
        this.servicesData = [];
        this.ccode = '';
    }
    ngOnInit() {
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": true }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                }
            ]
        };
        this.servicesData = servicesData.data[0];
        // Code to search Db2 for resrouces
        this.Db2Service.search_db2('06685M744', 'all').subscribe(data => {
            console.log(' db2 response', data);
        });
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"])); };
ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["app-resources"]], decls: 67, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-l-0_5"], [1, "ds-col-12", "ds-pad-t-0_5"], [1, "ds-row"], [1, "ds-col-12"], [1, "tooltip"], [1, "ds-text-contextual-blue-5", "ds-pad-r-0_5", "ds-pad-l-1"], [1, "tooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], ["id", "r21", 1, "tooltip"], [1, "ds-pad-r-1"], [1, "newtooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], ["id", "r3", 1, "ds-text-contextual-green-3", "ds-pad-r-1", "ds-pad-l-0_5"], [1, "tooltiptext", "ds-bg-blue-2", "ds-text-neutral-7", 2, "font-weight", "normal"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], [1, "ds-pad-t-1"], ["id", "t1", "cellspacing", "0", "cellpad", "0", "border", "0"], ["valign", "top"], ["width", "172", "bgcolor", "#F1F0EE"], [1, "ds-set-height-group-1", "ds-col-xs-12", "ds-pad-1", "ds-bg-neutral-warm-2", "ds-text-neutral-7"], [1, "ds-set-height-group-1", "ds-pad-t-1", "ds-bg-neutral-warm-2", "ds-text-neutral-7"], ["colspan", "2", "width", "345", "bgcolor", "#F1F0EE"], ["colspan", "5", "width", "862", "bgcolor", "#FFFFFF"], [4, "ngFor", "ngForOf"], ["width", "172", "bgcolor", "#FFFFFF", 1, "ds-pad-l-1"], ["width", "172", "bgcolor", "#FFFFFF"], ["color", "#808080"], ["colspan", "2", "width", "345", "bgcolor", "#FFFFFF"]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Employee Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "STEP 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Employee Resource Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Employee Resources Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Resource Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Phone/Dial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " In number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Additional Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ResourcesComponent_tbody_66_Template, 21, 4, "tbody", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.resources);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoicmVzb3VyY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLm5ld3Rvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resources',
                templateUrl: './resources.component.html',
                styleUrls: ['./resources.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.component */ "7+xq");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/services/services.component */ "HL2q");
/* harmony import */ var _components_employeesearch_employeesearch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/employeesearch/employeesearch.component */ "gzNm");
/* harmony import */ var _components_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/employeeinfo/employeeinfo.component */ "Nzlk");
/* harmony import */ var _components_entrydetails_entrydetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/entrydetails/entrydetails.component */ "PJ3E");
/* harmony import */ var _components_reviewdetails_reviewdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reviewdetails/reviewdetails.component */ "GuZX");
/* harmony import */ var _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/resultpage/resultpage.component */ "gClL");
/* harmony import */ var _components_countrysearch_countrysearch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/countrysearch/countrysearch.component */ "h72F");
/* harmony import */ var _components_servicessearch_servicessearch_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/servicessearch/servicessearch.component */ "PH4R");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/resources/resources.component */ "Wptv");
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/requests/requests.component */ "gULd");
/* harmony import */ var _components_approvalpending_approvalpending_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/approvalpending/approvalpending.component */ "jKZD");
/* harmony import */ var _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/revalidationpending/revalidationpending.component */ "pt/k");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "BaVL");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/uitoplinks/uitoplinks.component */ "rXSL");
/* harmony import */ var _components_jabberservices_jabberservices_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/jabberservices/jabberservices.component */ "0t4b");
/* harmony import */ var _components_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _app_services_cloudant_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../app/_services/cloudant.service */ "Rfmm");
/* harmony import */ var _components_middleframe_middleframe_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/middleframe/middleframe.component */ "xD7X");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");
/* harmony import */ var _dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dropdownsearch.pipe */ "OHqS");
/* harmony import */ var _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/voip-in-new/voip-in-new.component */ "aGf8");
/* harmony import */ var _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dummy/dummy.component */ "nF3f");
/* harmony import */ var _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/voip-in-delete/voip-in-delete.component */ "JIgN");
/* harmony import */ var _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/employeesearch-voip-delete/employeesearch-voip-delete.component */ "IE7g");
/* harmony import */ var _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/steps/steps.component */ "52XD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ "tyNb");






































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_services_cloudant_service__WEBPACK_IMPORTED_MODULE_27__["cloudantservice"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_23__["appRoutingProviders"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        _components_employeesearch_employeesearch_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesearchComponent"],
        _components_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeinfoComponent"],
        _components_entrydetails_entrydetails_component__WEBPACK_IMPORTED_MODULE_12__["EntrydetailsComponent"],
        _components_reviewdetails_reviewdetails_component__WEBPACK_IMPORTED_MODULE_13__["ReviewdetailsComponent"],
        _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_14__["ResultpageComponent"],
        _components_countrysearch_countrysearch_component__WEBPACK_IMPORTED_MODULE_15__["CountrysearchComponent"],
        _components_servicessearch_servicessearch_component__WEBPACK_IMPORTED_MODULE_16__["ServicessearchComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
        _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_18__["ResourcesComponent"],
        _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_19__["RequestsComponent"],
        _components_approvalpending_approvalpending_component__WEBPACK_IMPORTED_MODULE_20__["ApprovalpendingComponent"],
        _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_21__["RevalidationpendingComponent"],
        _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_22__["FeedbackComponent"],
        _components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_24__["UitoplinksComponent"],
        _components_jabberservices_jabberservices_component__WEBPACK_IMPORTED_MODULE_25__["JabberservicesComponent"],
        _components_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_26__["TopcountryframeComponent"],
        _components_middleframe_middleframe_component__WEBPACK_IMPORTED_MODULE_28__["MiddleframeComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"],
        _dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_30__["DropdownsearchPipe"],
        _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_31__["VoipInNewComponent"],
        _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_32__["DummyComponent"],
        _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_33__["VoipInDeleteComponent"],
        _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_34__["EmployeesearchVoipDeleteComponent"],
        _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_35__["StepsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_36__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                    _components_employeesearch_employeesearch_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesearchComponent"],
                    _components_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeinfoComponent"],
                    _components_entrydetails_entrydetails_component__WEBPACK_IMPORTED_MODULE_12__["EntrydetailsComponent"],
                    _components_reviewdetails_reviewdetails_component__WEBPACK_IMPORTED_MODULE_13__["ReviewdetailsComponent"],
                    _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_14__["ResultpageComponent"],
                    _components_countrysearch_countrysearch_component__WEBPACK_IMPORTED_MODULE_15__["CountrysearchComponent"],
                    _components_servicessearch_servicessearch_component__WEBPACK_IMPORTED_MODULE_16__["ServicessearchComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
                    _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_18__["ResourcesComponent"],
                    _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_19__["RequestsComponent"],
                    _components_approvalpending_approvalpending_component__WEBPACK_IMPORTED_MODULE_20__["ApprovalpendingComponent"],
                    _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_21__["RevalidationpendingComponent"],
                    _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_22__["FeedbackComponent"],
                    _components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_24__["UitoplinksComponent"],
                    _components_jabberservices_jabberservices_component__WEBPACK_IMPORTED_MODULE_25__["JabberservicesComponent"],
                    _components_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_26__["TopcountryframeComponent"],
                    _components_middleframe_middleframe_component__WEBPACK_IMPORTED_MODULE_28__["MiddleframeComponent"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterPipe"],
                    _dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_30__["DropdownsearchPipe"],
                    _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_31__["VoipInNewComponent"],
                    _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_32__["DummyComponent"],
                    _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_33__["VoipInDeleteComponent"],
                    _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_34__["EmployeesearchVoipDeleteComponent"],
                    _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_35__["StepsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_23__["appRoutingProviders"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [_app_services_cloudant_service__WEBPACK_IMPORTED_MODULE_27__["cloudantservice"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aDsg":
/*!*************************************************************************!*\
  !*** ./src/app/components/topcountryframe/topcountryframe.component.ts ***!
  \*************************************************************************/
/*! exports provided: TopcountryframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopcountryframeComponent", function() { return TopcountryframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TopcountryframeComponent {
    constructor(cloudantservice, cookie, route) {
        this.cloudantservice = cloudantservice;
        this.cookie = cookie;
        this.route = route;
        this.ccode = '';
        this.pcode = '';
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            console.log("topcountry component" + this.pcode);
        });
        this.countryroute = sessionStorage.getItem('countryroute');
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        if (this.pcode == this.countryroute) {
            this.pcountrydetails = sessionStorage.getItem('countrydetails');
            console.log("topcountrysession storageif" + JSON.parse(this.pcountrydetails).code);
            this.countryname = JSON.parse(this.pcountrydetails);
        }
        else {
            console.log("topcountrysession storageelse" + this.pcode);
            this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
                console.log('Response received', data.countrydetails.name);
                this.countryname = data.countrydetails;
                sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
                sessionStorage.setItem('countryroute', this.pcode);
            });
        }
    }
}
TopcountryframeComponent.ɵfac = function TopcountryframeComponent_Factory(t) { return new (t || TopcountryframeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_1__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TopcountryframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopcountryframeComponent, selectors: [["app-topcountryframe"]], decls: 7, vars: 2, consts: [[1, "ds-panel", "ds-row", "ds-pad-t-2"], [1, "ds-col-12", "ds-text-align-center"], [1, "ds-col-2"], [3, "src"]], template: function TopcountryframeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.countryname.flagname, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryname.name);
    } }, styles: [".ds-panel[_ngcontent-%COMP%] {\r\n    background-color: #fdfdfd;\r\n    border: 1px solid #d1d1d1;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGNvdW50cnlmcmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QiIsImZpbGUiOiJ0b3Bjb3VudHJ5ZnJhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcy1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopcountryframeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topcountryframe',
                templateUrl: './topcountryframe.component.html',
                styleUrls: ['./topcountryframe.component.css']
            }]
    }], function () { return [{ type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_1__["cloudantservice"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "aGf8":
/*!*****************************************************************!*\
  !*** ./src/app/components/voip-in-new/voip-in-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: VoipInNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipInNewComponent", function() { return VoipInNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");












function VoipInNewComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r7, "");
} }
function VoipInNewComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_campus_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_campus_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fl_campus_r8);
} }
function VoipInNewComponent_div_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request submission is in progress.Do not Go back or Refresh the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInNewComponent_input_170_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_input_170_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInNewComponent_input_172_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_input_172_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VoipInNewComponent {
    constructor(router, cookie, cloudantservice, route, servicenowservice, location) {
        /* this.Locations = {
           locc : ['Select Office Location~~Select One','Banglore~~MTP','Banglore~~SA',
           'Gurgaon~~DLF Infinity','Gurgaon~~ASF','Hyderabad~~Hitech']
           };
         for(var i=0;i<this.Locations.locc.length;i++) {
           var n=this.Locations.locc[i].indexOf("~")
           this.campA[i] = this.Locations.locc[i].substr(0,n);
           this.buildA[i] = this.Locations.locc[i].substr(n+2,this.Locations.locc[i].length);
           }
           for (var i=0;i<this.campA.length;i++) {
           if(this.campA[i] !=this.campA[i+1]) {
           this.camp[this.j] = this.campA[i];
           this.j++;
           }
           }	*/
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.servicenowservice = servicenowservice;
        this.location = location;
        this.campA = [];
        this.camp = [];
        this.buildA = [];
        this.build = [];
        this.j = 0;
        this.ccode = '';
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.Voice_Type = "No";
        this.hideDeptCode = true;
        this.hideBuilding = true;
        this.fixedPhoneIdentifier = false;
        this.cloudantData = [];
        this.servicesData = [];
        this.hideProjectId = false;
        // submit(){	
        //   this.router.navigate(['/reviewdetails']) 	
        // }	
        // Submit to Snow Jabber new code added by Swarnava	
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_New"]();
        this.reviewDetailsIndia = {
            officeLocation: "",
            campus: "",
            funded: "",
            chargeDepartmentCode: "",
            businessUnit: "",
            projectId: "",
            fixPhoneIdentifier: " ",
            Voice_Type_Disp: true,
            icano_Disp: "",
            Location_final: "",
            accid_Disp: "",
            reqno: ""
        };
    }
    // Submit to Snow Jabber new code added by Swarnava ends	
    backClick() {
        sessionStorage.setItem('backbutton', 'yes');
        sessionStorage.setItem('step', 'step1');
        this.location.back();
    }
    selectedLocation(loc) {
        this.build = [];
        this.campus = '';
        if (loc.toUpperCase() != 'SELECT OFFICE LOCATION') {
            this.hideBuilding = false;
            var k = 0;
            //var f = 100;	
            //this.build[k] = this.buildA[0];	
            for (var i = 0; i < this.campA.length; i++) {
                if (loc == this.campA[i]) {
                    this.build[k] = this.buildA[i];
                    k = k + 1;
                }
            }
            // alert("HIIII"+this.build);	
        }
        else {
            this.hideBuilding = true;
            this.build = [];
        }
    }
    showChargeDepartmentCode() {
        this.hideDeptCode = false;
    }
    hideChargeDepartmentCode() {
        this.hideDeptCode = true;
    }
    entryDetails(formData) {
        if (formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {
            alert('Please select the Office Location');
            return;
        }
        if (formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '' || formData.value.Location_1.toUpperCase() != 'SELECT OFFICE LOCATION' && formData.value.Buildings == '') {
            alert('Please select the Campus');
            return;
        }
        if (formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {
            alert('Please enter the Charge Department Code');
            return;
        }
        if (formData.value.Projectid == '' && this.hideProjectId == false) {
            alert('Please enter the Project Id');
            return;
        }
        if (formData.value.identifier_hp == '') {
            this.fixedPhoneIdentifier = true;
        }
        this.isEntryForm = true;
        this.isReviewForm = false;
        this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
        this.reviewDetailsIndia.campus = formData.value.Buildings;
        this.reviewDetailsIndia.funded = this.Voice_Type;
        this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;
        this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;
        this.reviewDetailsIndia.projectId = formData.value.Projectid;
        this.reviewDetailsIndia.fixPhoneIdentifier = formData.value.identifier_hp;
    }
    BackButton() {
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.fixedPhoneIdentifier = false;
    }
    // Submit to Snow Jabber new code added by Swarnava	
    submit_snow() {
        this.reqno = this.countrydetails.isocode + "-NS-" + this.cnum.substr(0, 6) + "-" + gettime();
        sessionStorage.setItem('reqno', this.reqno);
        this.isButtonVisible = false;
        this.isSpinnerVisible = true;
        this.payload.orinator_payload = this.orgi;
        this.payload.cNum_payload = this.cnum;
        // fields picked up from form -- begins	
        this.payload.Buildings_Disp = this.reviewDetailsIndia.campus;
        // by default set to true. below line can be removed if needed.	
        //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
        this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;
        // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
        this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;
        this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit;
        this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;
        this.payload.Location_final = this.reviewDetailsIndia.campus;
        //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
        this.payload.ReqNo = this.reqno;
        // fields to be picked up from form -- ends	
        this.payload.level1_japproval = this.countrydetails.level1_japproval;
        this.payload.level2_japproval = this.countrydetails.level2_japproval;
        this.payload.SLA_type = this.countrydetails.SLA_type;
        this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
        this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
        this.payload.countryname = this.countrydetails.name;
        this.payload.request_type = 'jabber_new';
        this.payload.evolution_instance = this.countrydetails.evolution_instance;
        this.payload.qag = this.countrydetails.qag;
        this.payload.class_of_serice = this.countrydetails.class_of_serice;
        this.payload.country_code = this.countrydetails.code;
        console.log('Payload');
        //console.log(this.payload);	
        this.servicenowservice.submit_new_jabber_request(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        });
    }
    // Submit to Snow Jabber new code added by Swarnava ends	
    ngOnInit() {
        var _a, _b;
        // Submit to Snow Jabber new code added by Swarnava	
        this.orgi = this.cookie.getCookie('ccode');
        this.cnum = sessionStorage.getItem('cnum');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        // Submit to Snow Jabber new code added by Swarnava ends	
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        this.locationlist = (_a = sessionStorage.getItem('locationdetails')) === null || _a === void 0 ? void 0 : _a.replace('"', '');
        this.locationlist = (_b = this.locationlist) === null || _b === void 0 ? void 0 : _b.replace('"', '').split(',');
        for (var i = 0; i < this.locationlist.length; i++) {
            var n = this.locationlist[i].indexOf("~");
            this.campA[i] = this.locationlist[i].substr(1, n - 1);
            this.buildA[i] = this.locationlist[i].substring(n + 2, this.locationlist[i].length - 1);
        }
        for (var i = 0; i < this.campA.length; i++) {
            if (this.campA[i] != this.campA[i + 1]) {
                this.camp[this.j] = this.campA[i];
                this.j++;
            }
        }
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
                        { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 3,
                }
            ]
        };
        this.reqFor = sessionStorage.getItem('radioAction');
        this.servicesData = servicesData.data[0];
        //this.reviewDetailsIndia.reqno = "IN-NS-" + this.cnum.substring(0, 6) + "-" + (Math.floor(Math.random() * (this.max - this.min)) + this.min);	
        //alert(this.reviewDetailsIndia.reqno);	
        this.employeeInfo1 = sessionStorage.getItem('employeeInfo');
        this.employeeInfo = JSON.parse(this.employeeInfo1);
        if (this.employeeInfo.businessUnit.toUpperCase() != 'GBS' && this.employeeInfo.businessUnit == null) {
            this.hideProjectId = true;
        }
    }
    previousStep(event) {
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.fixedPhoneIdentifier = false;
    }
}
VoipInNewComponent.ɵfac = function VoipInNewComponent_Factory(t) { return new (t || VoipInNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
VoipInNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInNewComponent, selectors: [["app-voip-in-new"]], decls: 173, vars: 31, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [3, "step", "isSelf", "hideSteps"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "54%", "height", "10"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Location_1", "cols", "40", "id", "LocationId", "title", "Office Location", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["location", ""], ["value", ""], ["name", "Location_1", 3, "value", 4, "ngFor", "ngForOf"], ["valign", "top", 3, "hidden"], ["colspan", "2", "width", "46%"], ["for", "builId", 1, "ds-text-capitalize"], ["width", "54%"], ["name", "Buildings", "rows", "2", "cols", "40", "id", "LocationId_1_1", "title", "Campus", "tabindex", "1", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "addId", 1, "ds-text-capitalize", "ds-padding-top-2"], [1, "ds-mar-b-1"], [1, "ds-input-radio-group"], ["for", "radio1", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "name", "Voice_Type", "id", "radio1", "value", "Yes", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], [1, "ds-input-control"], [1, "ds-pad-l-0_5"], ["for", "radio2", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "checked", "", "name", "Voice_Type", "id", "radio2", "value", "No", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], ["id", "d1"], ["for", "addId", 1, "ds-text-capitalize", "ds-pad-t-1"], ["id", "d21", 1, "ds-input-container"], ["name", "Department_number", "value", "", "tabindex", "4", "id", "d2", "title", "Contact FirstLine Manager\\Project Manager for Charge Department Code", "autocomplete", "off", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["id", "Mentor1Div"], ["for", "addId", 1, "ds-text-capitalize"], ["name", "BusinessUnit", "ngModel", ""], ["for", "Projectid", 1, "ds-text-capitalize", "ds-pad-t-1"], [1, "ds-input-container", "ds-pad-t-1"], ["name", "Projectid", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "Projectid", "title", "Contact FirstLine Manager\\Project Manager for Project id", "maxlength", "11", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "icano", 1, "ds-text-capitalize", "ds-pad-t-1"], [1, "ds-input-container"], ["name", "identifier_hp", "value", "", "tabindex", "7", "title", "Fix Phone Identifier", "maxlength", "8", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "tabindex", "32765", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [3, "hidden"], [1, "ds-pad-b-1"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps", "previousStep"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["for", "addId1"], ["for", "addId1", 3, "hidden"], ["width", "54%", 3, "hidden"], ["for", "Projectid"], ["for", "icano"], [1, "ds-hr-thick", "ds-mar-t-1_5"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Back", 3, "click", 4, "ngIf"], ["type", "submit", "name", "submit", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Submit", 3, "click", 4, "ngIf"], ["name", "Location_1", 3, "value"], [3, "value"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "submit", "name", "submit", "value", "Submit", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"]], template: function VoipInNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipInNewComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetails(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with an asterick (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") are required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-steps", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipInNewComponent_Template_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.selectedLocation(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VoipInNewComponent_option_33_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipInNewComponent_Template_select_ngModelChange_42_listener($event) { return ctx.campus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, VoipInNewComponent_option_45_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipInNewComponent_Template_input_ngModelChange_56_listener($event) { return ctx.Voice_Type = $event; })("click", function VoipInNewComponent_Template_input_click_56_listener() { return ctx.showChargeDepartmentCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipInNewComponent_Template_input_ngModelChange_61_listener($event) { return ctx.Voice_Type = $event; })("click", function VoipInNewComponent_Template_input_click_61_listener() { return ctx.hideChargeDepartmentCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Project id (for GBS employee only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "If you already have Fix Phone , please provide the identifier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_Template_input_click_106_listener() { return ctx.backClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "form", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "app-steps", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipInNewComponent_Template_app_steps_previousStep_115_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Jabber Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Project id (for GBS employee only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Fix Phone Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, VoipInNewComponent_div_165_Template, 4, 0, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, VoipInNewComponent_input_170_Template, 1, 0, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, VoipInNewComponent_input_172_Template, 1, 0, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isEntryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.camp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBuilding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.campus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.build);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Voice_Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Voice_Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDeptCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employeeInfo.businessUnit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideProjectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isReviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step + 1)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.officeLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.campus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.funded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDeptCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDeptCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.chargeDepartmentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.businessUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideProjectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.projectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fixedPhoneIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.fixPhoneIdentifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtaW4tbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWluLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipInNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-in-new',
                templateUrl: './voip-in-new.component.html',
                styleUrls: ['./voip-in-new.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }]; }, null); })();
function gettime() {
    var date = new Date();
    var minutes1 = '';
    var seconds1 = '';
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes1 = '0' + minutes;
    }
    else {
        minutes1 = '' + minutes;
    }
    if (seconds < 10) {
        seconds1 = '0' + seconds;
    }
    else {
        seconds1 = '' + seconds;
    }
    console.log(minutes1 + seconds1);
    return minutes1 + seconds1;
}


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services/services.component */ "HL2q");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "BaVL");
/* harmony import */ var _components_jabberservices_jabberservices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jabberservices/jabberservices.component */ "0t4b");
/* harmony import */ var _components_employeesearch_employeesearch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employeesearch/employeesearch.component */ "gzNm");
/* harmony import */ var _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resultpage/resultpage.component */ "gClL");
/* harmony import */ var _components_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/employeeinfo/employeeinfo.component */ "Nzlk");
/* harmony import */ var _components_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _components_servicessearch_servicessearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/servicessearch/servicessearch.component */ "PH4R");
/* harmony import */ var _components_reviewdetails_reviewdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reviewdetails/reviewdetails.component */ "GuZX");
/* harmony import */ var _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/requests/requests.component */ "gULd");
/* harmony import */ var _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dummy/dummy.component */ "nF3f");
/* harmony import */ var _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/voip-in-new/voip-in-new.component */ "aGf8");
/* harmony import */ var _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employeesearch-voip-delete/employeesearch-voip-delete.component */ "IE7g");
/* harmony import */ var _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/revalidationpending/revalidationpending.component */ "pt/k");
















const appRoutes = [
    { path: 'unauthorized', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'feedback', component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"] },
    { path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"] },
    { path: 'jabberservices', component: _components_jabberservices_jabberservices_component__WEBPACK_IMPORTED_MODULE_4__["JabberservicesComponent"] },
    { path: 'employeesearch', component: _components_employeesearch_employeesearch_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesearchComponent"] },
    { path: 'employeeinfo', component: _components_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeinfoComponent"] },
    { path: 'resultpage', component: _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_6__["ResultpageComponent"] },
    { path: 'requests', component: _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__["RequestsComponent"] },
    { path: 'topcountryframe', component: _components_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__["TopcountryframeComponent"] },
    { path: 'searchresult', component: _components_servicessearch_servicessearch_component__WEBPACK_IMPORTED_MODULE_9__["ServicessearchComponent"] },
    { path: 'inprogress', component: _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_12__["DummyComponent"] },
    { path: 'entrydetails', component: _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_13__["VoipInNewComponent"] },
    { path: 'reviewdetails', component: _components_reviewdetails_reviewdetails_component__WEBPACK_IMPORTED_MODULE_10__["ReviewdetailsComponent"] },
    { path: 'resultpage', component: _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_6__["ResultpageComponent"] },
    { path: 'employeesearchdelete', component: _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_14__["EmployeesearchVoipDeleteComponent"] },
    { path: 'revalidationpending', component: _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_15__["RevalidationpendingComponent"] }
];
const appRoutingProviders = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { onSameUrlNavigation: 'reload' });


/***/ }),

/***/ "dP2x":
/*!***************************!*\
  !*** ./config/payload.ts ***!
  \***************************/
/*! exports provided: db2search, snowsearch, Jabber_New */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db2search", function() { return db2search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snowsearch", function() { return snowsearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jabber_New", function() { return Jabber_New; });
// Class used to create the payload for Db2 search service.
class db2search {
    db2search() {
        this.cnum = "";
        this.request_type = "";
    }
}
// Class used to create the payload for snow search service.
class snowsearch {
    snowsearch() {
        this.cnum = "";
        this.request_type = "";
        this.reqno = "";
        this.sysid = "";
        this.number = "";
    }
}
// Class used to create the payload for snow new jabber service.
class Jabber_New {
    Jabber_New() {
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.Buildings_Disp = "";
        this.Voice_Type_Disp = true;
        this.Projectid_Disp = "";
        this.icano_Disp = "";
        this.identifier_hp_Disp = "";
        this.BusinessUnit_Disp = "";
        this.Department_number_Disp = "";
        this.Location_final = "";
        this.accid_Disp = "";
        this.ReqNo = "";
        this.level2_japproval = "";
        this.countryname = "";
        this.request_type = "";
        this.evolution_instance = "";
        this.level1_japproval = "";
        this.qag = "";
        this.class_of_serice = "";
        this.gvs_portal_link = "";
        this.gvs_approval_link = "";
        this.SLA_type = "";
        this.country_code = "";
    }
}


/***/ }),

/***/ "gClL":
/*!***************************************************************!*\
  !*** ./src/app/components/resultpage/resultpage.component.ts ***!
  \***************************************************************/
/*! exports provided: ResultpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultpageComponent", function() { return ResultpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");







class ResultpageComponent {
    constructor(router, cookie, cloudantservice, route) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.pcode = '';
        this.fullName = '';
        this.service = '';
        this.requestResult = {
            serviceName: "new Jabber",
            serviceNumber: sessionStorage.getItem('reqno')
        };
    }
    ngOnInit() {
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            this.service = params.service;
            console.log("navigation component" + this.pcode);
        });
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
                        { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
ResultpageComponent.ɵfac = function ResultpageComponent_Factory(t) { return new (t || ResultpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ResultpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultpageComponent, selectors: [["app-resultpage"]], decls: 19, vars: 4, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-row"], [1, "ds-col-1"], ["src", "assets/tick.png"], [1, "ds-col-11"], [1, "ds-padding-top-0_5"], [1, "ds-padding-top-0_5", "ds-padding-bottom-1"]], template: function ResultpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tracking number for the request is : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "You will receive an email notification when your request has been processed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your request for ", ctx.requestResult.serviceName, " has been submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestResult.serviceNumber);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRwYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resultpage',
                templateUrl: './resultpage.component.html',
                styleUrls: ['./resultpage.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "gULd":
/*!***********************************************************!*\
  !*** ./src/app/components/requests/requests.component.ts ***!
  \***********************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RequestsComponent_div_5_tr_26_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} }
function RequestsComponent_div_5_tr_26_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_div_5_tr_26_ng_template_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const no_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.openNav(no_r3.stage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.snowdataarray[i_r4]);
} }
function RequestsComponent_div_5_tr_26_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const no_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r3.stage);
} }
function RequestsComponent_div_5_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestsComponent_div_5_tr_26_span_10_Template, 1, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestsComponent_div_5_tr_26_ng_template_11_Template, 2, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RequestsComponent_div_5_tr_26_ng_template_13_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const no_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r3.cat_item.display_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r3.sys_created_on);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r3.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r3["variables.6b7d0e981b3f84d08476dc26bc4bcb75"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.snowdataarray[i_r4].includes("none" || false))("ngIfThen", _r8)("ngIfElse", _r6);
} }
function RequestsComponent_div_5_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmts_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cmts_r15, " ");
} }
function RequestsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Employee Requests Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Resource Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tracking Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Additional Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RequestsComponent_div_5_tr_26_Template, 15, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_div_5_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RequestsComponent_div_5_div_38_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.snowdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.DisplayModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allComments);
} }
class RequestsComponent {
    constructor(cookie, cloudantservice, route, servicenowservice) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.servicenowservice = servicenowservice;
        this.DisplayModel = 'none';
        this.allComments = [];
        this.servicesData = [];
        this.requests = [];
        this.comments = [];
        this.snowdataarray = [];
        this.commentsresult = [];
    }
    openNav(comments) {
        this.DisplayModel = 'block';
        this.allComments = comments;
        this.allComments;
    }
    closeNav() {
        this.DisplayModel = 'none';
    }
    ngOnInit() {
        this.display = false;
        this.snowdata = sessionStorage.getItem('identifier');
        this.empserial = sessionStorage.getItem('empserial');
        console.log(this.snowdata.length);
        var parsed = JSON.parse(JSON.stringify(JSON.parse(this.snowdata)));
        this.snowdata = parsed;
        console.log(this.snowdata.length);
        for (this.i = 0; this.i < this.snowdata.length; this.i++) {
            this.servicenowservice.searchsnowcoments(this.empserial, "snow_comments", '-NS-' + this.empserial.substr(0, 6), this.snowdata[this.i].number).subscribe(data => {
                console.log(' snow response', data);
                console.log(' snow response', data.message.results.length);
                //console.log(' snow response', data.message.results);  
                console.log(' snow response ccccc');
                var j, num, dis, cre, vari;
                j = this.i;
                //num=this.snowdata[this.i].number
                if (data.message.results.length == 0) {
                    this.snowdataarray.push("none");
                }
                else {
                    this.snowdataarray.push(data.message.results);
                }
                console.log(this.i);
                console.log("snowarrraylength" + this.snowdataarray);
                //var parsed1 = JSON.parse(JSON.stringify(JSON.parse(this.snowdataarray)));
                //this.snowdataarray = parsed1;
                //this.display=true
                if (this.i = 3) {
                    //console.log("snowdataarray"+this.snowdataarray.reqnumber)
                    this.display = true;
                }
            });
        }
        const servicesData = {
            "data": [
                {
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"])); };
RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 6, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], ["class", "ds-col-md-8 ds-col-xl-7 ds-pad-l-2_5", 4, "ngIf"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-col-sm-2", "ds-col-md-7", "ds-padding-left-1_5"], [1, "ds-padding-top-0_5", "ds-padding-bottom-1"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], [2, "width", "100%", "border-collapse", "collapse", "padding", "2px"], [1, "ds-bg-neutral-warm-2", "ds-text-neutral-7", "ds-font-weight-bold"], [2, "padding", "5px 15px 5px 25px", "padding-left", "15px"], [2, "padding", "5px 55px 5px 25px", "padding-left", "15px"], [2, "padding", "5px 65px 9px 50px", "padding-left", "15px"], [2, "padding", "5px 55px 5px 50px", "padding-left", "15px"], [2, "padding", "5px 15px 5px 10px", "padding-left", "15px"], [4, "ngFor", "ngForOf"], ["id", "myNav", 1, "overlay", "ds-padding-top-5"], [1, "overlay-content"], [1, "ds-row", "ds-bg-neutral-1"], [1, "ds-margin-right-1"], [1, "ds-float-right", 3, "click"], [1, "ds-padding-left-5", "ds-padding-bottom-3", "ds-padding-right-1"], ["id", "inval", "style", "padding-left: 1rem;", 4, "ngFor", "ngForOf"], [2, "padding-top", "13px", "padding-left", "15px"], [2, "width", "30%", "padding-top", "13px", "padding-left", "15px"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["link", ""], ["text", ""], [2, "color", "blue", 3, "click"], ["id", "inval", 2, "padding-left", "1rem"]], template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestsComponent_div_5_Template, 40, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n  }\r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      padding: 8px;\r\n      text-decoration: none;\r\n      color: black;\r\n  }\r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n      cursor: pointer;\r\n      color: blue;\r\n  }\r\n  .overlay-content[_ngcontent-%COMP%] {    \r\n      width: 50%;\r\n      margin-left: 25%;\r\n      margin-top:5%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxvQ0FBb0M7RUFDdEM7RUFDQTtNQUNJLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsWUFBWTtFQUNoQjtFQUNBO01BQ0ksZUFBZTtNQUNmLFdBQVc7RUFDZjtFQUNBO01BQ0ksVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixhQUFhO0VBQ2pCIiwiZmlsZSI6InJlcXVlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuICAub3ZlcmxheSBhIHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLm92ZXJsYXkgYTpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWNvbnRlbnQgeyAgICBcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgbWFyZ2luLXRvcDo1JTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requests',
                templateUrl: './requests.component.html',
                styleUrls: ['./requests.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"] }]; }, null); })();


/***/ }),

/***/ "gzNm":
/*!***********************************************************************!*\
  !*** ./src/app/components/employeesearch/employeesearch.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeesearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesearchComponent", function() { return EmployeesearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_bp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/bp.service */ "Qz7Q");
/* harmony import */ var _services_db2_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/db2.service */ "qtc7");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function EmployeesearchComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fullName, " ");
} }
function EmployeesearchComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.ccode);
} }
function EmployeesearchComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesearchComponent_div_47_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.hidedata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(eg 012789)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx_r5.empno);
} }
function EmployeesearchComponent_p_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "font", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("There is no record of an IBM employee with the serial number ", ctx_r6.employeeSerial.substr(0, 6), " available from BluePages");
} }
function EmployeesearchComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0) { return { country: a0 }; };
function EmployeesearchComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "EXIT REQUEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r9.pcode));
} }
class EmployeesearchComponent {
    constructor(router, cookie, cloudantservice, route, bpservices, Db2Service, servicenowservice) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.bpservices = bpservices;
        this.Db2Service = Db2Service;
        this.servicenowservice = servicenowservice;
        this.radioAction = "";
        this.hideDisTextBox = false;
        this.hideDisserial = true;
        this.cloudantData = [];
        this.servicesData = [];
        this.ccode = '';
        this.pcode = '';
        this.fullName = '';
        this.service = '';
        this.warninginfo = true;
        this.warninginfosnow = true;
        this.employeeSerial = '';
        this.notvalid = false;
        this.dataloading = false;
        this.showloader = false;
    }
    ngOnInit() {
        this.showloader = false;
        this.fullName = this.cookie.getCookie('user');
        this.ccode = this.cookie.getCookie('ccode');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            this.service = params.service;
            console.log("navigation component" + this.pcode);
        });
        this.backbutton = sessionStorage.getItem('backbutton');
        this.step = sessionStorage.getItem('step');
        //this.radioAction = "mySelf"; 
        if (sessionStorage.getItem('radioAction') === null) {
            this.radioAction = "myself";
        }
        else {
            this.radio = sessionStorage.getItem('radioAction');
            this.radioAction = this.radio;
            this.empno = sessionStorage.getItem('empserial');
            this.onRequestForChangesession();
        }
        //for lhs
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": false },
                        { "name": "Jabber", "routingname": "/services", "indented": true, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 1,
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
    onSubmit(formData) {
        sessionStorage.setItem('radioAction', this.radioAction.toLowerCase());
        console.log(this.pcode + this.ccode);
        if (this.radioAction.toLowerCase() == "myself" && this.pcode !== this.ccode.substr(6, 9)) {
            alert("Only " + JSON.parse(this.countrydetails).name + " Serial numbers are allowed to create a request for " + JSON.parse(this.countrydetails).name);
            return;
        }
        if (this.radioAction.toLowerCase() == "anotheremployee") {
            if (formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true) {
                alert("Please enter serial number");
                return;
            }
            else if (formData.value.employeeSerial.length < 6 && this.hideDisTextBox == true) {
                alert("Employee Serial Number should be of 6 characters");
                return;
            }
            else {
                sessionStorage.setItem('empserial', formData.value.employeeSerial);
                this.employeeSerial = formData.value.employeeSerial + this.pcode;
            }
        }
        //for self
        else {
            this.employeeSerial = this.ccode;
            sessionStorage.setItem('empserial', this.ccode);
        }
        //to change the routing
        if (this.service == "jabber_new") {
            this.navpage = '/entrydetails';
            this.navpage1 = '/employeeinfo';
        }
        else {
            if (this.radioAction.toLowerCase() == "myself") {
                if (this.service == "requests" || this.service == "resources" || this.service == "approvalpending" || this.service == "revalidationpending") {
                    this.navpage = '/' + this.service;
                    this.navpage1 = '/' + this.service;
                }
                else {
                    this.navpage = '/entrydetails';
                    this.navpage1 = '/entrydetails';
                }
            }
            else {
                this.navpage = '/employeeinfo';
                this.navpage1 = '/employeeinfo';
            }
        }
        this.showloader = true;
        //BP verification and getting data
        this.bpservices.bpdetails(this.employeeSerial).subscribe(data => {
            console.log(' BP Details', data.userdata);
            if (data.userdata) {
                this.employeeInfo = {
                    employeeName: data.username.callupname,
                    jobResponsibility: data.username.jobresponsibilities,
                    businessUnit: data.bu,
                    department: data.username.dept,
                    country: data.username.co,
                    email: data.username.preferredidentity
                };
                sessionStorage.setItem('employeeInfo', JSON.stringify(this.employeeInfo));
                sessionStorage.setItem('cnum', this.employeeSerial);
                this.warninginfo = false;
                this.warninginfosnow = false;
                sessionStorage.setItem('warninginfo', 'false1');
                sessionStorage.setItem('warninginfosnow', 'false1');
                sessionStorage.setItem('identifier', '');
                // Code to search Db2 for Jabber New
                this.Db2Service.search_db2(this.employeeSerial, 'jabber_new').subscribe(data => {
                    console.log(' db2 response', data);
                    console.log(' db2 response', data.message.length);
                    if (data.message.length > 0) {
                        this.warninginfo = true;
                        sessionStorage.setItem('warninginfo', 'true1');
                        this.identifier = data.message[0].IDENTIFIER;
                        sessionStorage.setItem('identifier', this.identifier);
                        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
                    }
                    else {
                        this.warninginfo = false;
                        sessionStorage.setItem('warninginfo', 'false1');
                        //SNOW search for ongoin requests  
                        console.log('SNOW search' + this.countrydetails.isocode);
                        this.servicenowservice.searchsnow(this.employeeSerial, this.service, this.countrydetails.isocode + '-NS-' + this.employeeSerial.substr(0, 6)).subscribe(data => {
                            console.log(' snow response', data);
                            console.log(' snow response', data.message.length);
                            if (data.message.length > 0) {
                                console.log(' snow response1', data.message.length);
                                this.warninginfosnow = true;
                                sessionStorage.setItem('warninginfosnow', 'true1');
                                this.identifier = data.message;
                                sessionStorage.setItem('identifier', JSON.stringify(this.identifier));
                                this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
                            }
                            else {
                                this.cloudantservice.getlocationdetails(this.pcode).subscribe(data => {
                                    console.log('Response received navigation', data.locationdetails);
                                    sessionStorage.setItem('locationdetails', JSON.stringify(data.locationdetails.jlocations));
                                    if (this.radioAction.toLowerCase() == "anotheremployee") {
                                        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
                                    }
                                    else {
                                        this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
                                    }
                                });
                            }
                        });
                    }
                });
            }
            else {
                this.showloader = false;
                this.notvalid = true;
            }
            //this.isDataLoaded=true
        });
    }
    onRequestForChange() {
        this.empno = '';
        if (this.radioAction.toLowerCase() == "anotheremployee") {
            this.hideDisTextBox = true;
            this.hideDisserial = false;
        }
        else if (this.radioAction.toLowerCase() == "myself") {
            this.hideDisTextBox = false;
            this.hideDisserial = true;
        }
    }
    hidedata() {
        this.notvalid = false;
    }
    onRequestForChangesession() {
        if (this.radioAction.toLowerCase() == "anotheremployee") {
            this.hideDisTextBox = true;
            this.hideDisserial = false;
        }
        else if (this.radioAction.toLowerCase() == "myself") {
            this.hideDisTextBox = false;
            this.hideDisserial = true;
        }
    }
}
EmployeesearchComponent.ɵfac = function EmployeesearchComponent_Factory(t) { return new (t || EmployeesearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_4__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_5__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__["servicenowservice"])); };
EmployeesearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesearchComponent, selectors: [["app-employeesearch"]], decls: 56, vars: 16, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "ngSubmit"], ["formData", "ngForm"], [1, "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], [1, "ds-input-container"], ["role", "group", "aria-labelledby", "horizontal-radio-buttons-example", 1, "ds-input-radio-group", "ds-flex"], [1, "ds-input-radio", "ds-mar-r-1"], ["type", "radio", "name", "radio-group2", "id", "radio4", "value", "myself", 1, "ds-input", 3, "ngModel", "ngModelChange", "change"], [1, "ds-input-control"], ["for", "radio4"], [1, "ds-input-radio"], ["type", "radio", "name", "radio-group2", "id", "radio5", "value", "anotheremployee", 1, "ds-input", 3, "ngModel", "ngModelChange", "change"], ["for", "radio5"], [4, "ngIf"], ["class", "ds-pad-t-2", 4, "ngIf"], ["colspan", "2"], ["class", " row ds-pad-t-2", 4, "ngIf"], ["class", "ds-col-xs-12 ds-alert ds-warning", "id", "error", 4, "ngIf"], [1, "ds-hr-thick", "ds-mar-t-1_5"], ["class", "ds-loader-container", 4, "ngIf"], [1, "ds-row", "ds-mar-t-b-3_5"], [1, "ds-col-xs-12", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], ["type", "submit", "class", "ds-button ds-primary ds-pad-l-0 ds-pad-r-0 ds-text-align-center", "style", "width: 100%", 4, "ngIf"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], ["type", "button", "class", "ds-button ds-secondary ds-no-expand ds-text-align-center ds-mar-b-0", "style", "width: 100%", 3, "routerLink", "queryParams", 4, "ngIf"], ["for", "OriginatorNameId"], [1, "ds-pad-t-2"], [1, "row", "ds-pad-t-2"], [1, "ds-col-4"], ["maxlength", "6", "name", "employeeSerial", "ngModel", "", "type", "text", 1, "ds-input", 3, "ngModel", "click"], [1, "ds-col-6"], [2, "color", "#808080"], ["id", "error", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["color", "black"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "", 1, "ds-loader"], ["type", "submit", 1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%"], ["type", "button", 1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "routerLink", "queryParams"]], template: function EmployeesearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeesearchComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This request can be submitted for yourself, or on behalf of another employee. Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") are required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-steps", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Who is this request for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchComponent_Template_input_ngModelChange_28_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchComponent_Template_input_change_28_listener() { return ctx.onRequestForChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchComponent_Template_input_ngModelChange_33_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchComponent_Template_input_change_33_listener() { return ctx.onRequestForChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Another Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EmployeesearchComponent_tr_37_Template, 6, 1, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EmployeesearchComponent_div_40_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EmployeesearchComponent_div_42_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EmployeesearchComponent_div_45_Template, 5, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EmployeesearchComponent_div_47_Template, 6, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EmployeesearchComponent_p_48_Template, 3, 1, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EmployeesearchComponent_div_50_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EmployeesearchComponent_button_53_Template, 2, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EmployeesearchComponent_button_55_Template, 2, 5, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.hideDisserial)("hideSteps", ctx.notvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisserial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisserial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisserial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisTextBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showloader && !ctx.notvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showloader);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNFQUFzRTs7QUFFMUUiLCJmaWxlIjoiZW1wbG95ZWVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRzLXRleHQtY29udGV4dHVhbC1ncmVlbi0zIHtcclxuICAgIGNvbG9yOiAjMjdhYTdjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcy10ZXh0LWNvbnRleHR1YWwtYmx1ZS01IHtcclxuICAgIGNvbG9yOiAjMDM3MGIwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk1QbGV4U2Fuc1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employeesearch',
                templateUrl: './employeesearch.component.html',
                styleUrls: ['./employeesearch.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_bp_service__WEBPACK_IMPORTED_MODULE_4__["bpservices"] }, { type: _services_db2_service__WEBPACK_IMPORTED_MODULE_5__["Db2Service"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__["servicenowservice"] }]; }, null); })();


/***/ }),

/***/ "h72F":
/*!*********************************************************************!*\
  !*** ./src/app/components/countrysearch/countrysearch.component.ts ***!
  \*********************************************************************/
/*! exports provided: CountrysearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountrysearchComponent", function() { return CountrysearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CountrysearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
CountrysearchComponent.ɵfac = function CountrysearchComponent_Factory(t) { return new (t || CountrysearchComponent)(); };
CountrysearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountrysearchComponent, selectors: [["app-countrysearch"]], decls: 2, vars: 0, template: function CountrysearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "countrysearch works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5c2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountrysearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countrysearch',
                templateUrl: './countrysearch.component.html',
                styleUrls: ['./countrysearch.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    /**
      * Transform
      *
      * @param {any[]} items
      * @param {string} searchText
      * @returns {any[]}
      */
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return [];
        }
        searchText = searchText.toLocaleLowerCase();
        this.result = items.filter(it => {
            return it.name.toLocaleLowerCase().includes(searchText);
        });
        return this.result;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "jKZD":
/*!*************************************************************************!*\
  !*** ./src/app/components/approvalpending/approvalpending.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApprovalpendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalpendingComponent", function() { return ApprovalpendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ApprovalpendingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApprovalpendingComponent.ɵfac = function ApprovalpendingComponent_Factory(t) { return new (t || ApprovalpendingComponent)(); };
ApprovalpendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalpendingComponent, selectors: [["app-approvalpending"]], decls: 2, vars: 0, template: function ApprovalpendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "approvalpending works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbHBlbmRpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApprovalpendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-approvalpending',
                templateUrl: './approvalpending.component.html',
                styleUrls: ['./approvalpending.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../demo.service */ "oHDm");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_bp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/bp.service */ "Qz7Q");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../filter.pipe */ "i6q1");










const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0) { return { country: a0, service: "jabberservice" }; };
function HomepageComponent_div_28_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, searchResult_r1.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", searchResult_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", searchResult_r1.name, " ");
} }
function HomepageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_28_a_1_Template, 3, 7, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 < 1);
} }
const _c2 = function () { return ["/services"]; };
const _c3 = function (a0) { return { country: a0, service: "services" }; };
const _c4 = function (a0) { return { country: a0, service: "jabberservices" }; };
class HomepageComponent {
    constructor(Service, cookie, bpservice, cloudantservice) {
        this.Service = Service;
        this.cookie = cookie;
        this.bpservice = bpservice;
        this.cloudantservice = cloudantservice;
        this.searchText = '';
        this.searchItems = [
            { "name": "India Jabber", "flag": "././assets/flags/744.png", "code": "744" },
        ];
        this.res_rec = '';
        this.uname = '';
        this.ccode = '';
    }
    generate(cnum) {
        console.log(cnum);
        this.Service.getNodes(cnum).subscribe(data => {
            console.log('Response received', data);
            this.res_rec = data.message;
        });
    }
    storeSearchTerm(searchText) {
        sessionStorage.setItem('searchText', searchText);
    }
    ngOnInit() {
        //this.userDetails = (this.cookie.getCookie('user'));
        this.fullName = this.cookie.getCookie('user');
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.cloudantservice.getcountrydetails(this.ccode).subscribe(data => {
            console.log('Response received', data.countrydetails.name);
            this.countryname = data.countrydetails;
            let countrydetails = data.countrydetails;
            sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
            sessionStorage.setItem('countryroute', this.ccode);
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_1__["ConnectCucdmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_3__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 78, vars: 24, consts: [[1, "ds-row", "ds-bg-dark", "ds-pad-t-2_4", 2, "background-image", "url(././assets/banner.png)", "background-position", "center", "background-size", "cover", "background-repeat", "no-repeat"], [1, "ds-col-xs-10", "ds-offset-xs-3", "ds-mar-t-3", "ds-col-lg-8", "ds-offset-lg-2", "ds-col-xl-6", "ds-offset-xl-3", "ds-text-align-center", "ds-shadow-text"], [1, "ds-heading-xs-2", "ds-heading-lg-2", "ds-shadow-text"], [1, "ds-text-align-left"], [1, "ds-row"], [1, "ds-text-align-center", "ds-heading-2", "ds-margin-bottom-0"], [1, "ds-col-xs-30", 2, "font-size", "48px"], [1, "ds-heading-3", "ds-text-align-center"], [2, "font-size", "30px"], [1, "ds-padding-top-0_5", "ds-row", "ds-text-align-center"], [1, "ds-col-sm-4", "md-2", "xl-5"], ["type", "text", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Search service...", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-row", "ds-text-align-center", 2, "background-color", "#f3f3f3"], [1, "ds-col-sm-6", "ds-padding-bottom-1_5", "ds-padding-right-3_5", "ds-text-align-right", "ds-padding-top-1_5"], ["routerLinkActive", "active ", "data", "{cdetails:this.countryname}", 3, "routerLink", "queryParams"], [1, "ds-text-align-center", "ds-border-neutral-5", 3, "src"], [1, "ds-col-sm-6", "ds-text-align-left", "ds-padding-top-1"], [1, "ds-padding-left-3", 2, "font-size", "30px"], ["data", "{cdetails:this.countryname}", 3, "routerLink", "queryParams"], [1, "ds-padding-left-3"], [1, "ds-text-align-center", "ds-heading-4", "ds-margin-bottom-0"], [1, "ds-text-align-center", "ds-heading-5", "ds-margin-bottom-0"], [1, "ds-row", "ds-text-align-center", "ds-padding-left-1", "ds-padding-right-1"], [1, "ds-col-3", "ds-padding-left-1"], [1, "ds-panel"], [1, "ds-panel-container"], ["src", "././assets/JABBER.png ", "width", "93px ", "height", "93px "], [1, "ds-text-small", "ds-align-text-left", "ds-padding-bottom-2"], ["id", "button2 ", 1, "button-blue"], ["type", "button ", "name", "next ", "tabindex", "15 ", "data", "{cdetails:this.countryname}", "value", "Get Started ", 1, "ds-button", "ds-secondary", "ds-margin-bottom-0", "ds-padding-top-1", "ds-padding-bottom-1", 3, "routerLink", "queryParams"], ["name", "country_code ", "type", "hidden", 3, "value"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "queryParams", 4, "ngIf"], [3, "routerLink", "queryParams"], ["width", "28;", "height", "20;", 1, "ds-border-neutral-5", 3, "src"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Global Voice Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "font");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Single entry point for ordering voice services in your country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "font", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 \u00A0 Built on CIO Hybrid Cloud Powered by Red Hat OpenShift ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What service or country are you looking for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomepageComponent_Template_input_ngModelChange_27_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomepageComponent_div_28_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "My Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " to view all available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Most Viewed Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Find the right services, check their availability, and then choose the way ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "you connect and work together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cisco Jabber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cisco Jabber is a multiple platform soft phone application to make and receive phone calls.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.fullName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 12, ctx.searchItems, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.countryname.flagname, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("services for ", ctx.countryname.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c4, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ccode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _demo_service__WEBPACK_IMPORTED_MODULE_1__["ConnectCucdmService"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_bp_service__WEBPACK_IMPORTED_MODULE_3__["bpservices"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }]; }, null); })();


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return { country: a0, service: a1 }; };
function NavigationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clickEvent(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nav_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r2 == ctx_r0.selectedItem ? ctx_r0.getNavActiveClass(i_r2) : ctx_r0.getNavClass(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", nav_r1.routingname)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r0.pcode, nav_r1.param))("ngClass", i_r2 == ctx_r0.selectedItem ? "ds-text-contextual-blue-5" : "ds-text-neutral-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r1.name);
} }
class NavigationComponent {
    constructor(cookie, cloudantservice, route) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.ccode = '';
        this.pcode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.defaultNavClass = 'ds-panel-segment ds-text-uppercase';
        this.indentNavClass = ' ds-pad-l-2';
        this.activeNavClass = ' ds-nav-item ds-bg-blue-1';
        this.onLoad = true;
        this.dataNav = [];
        this.dataNav1 = [];
    }
    getNavClass(i) {
        if (this.dataNav123.data[0].lhs[i].indented && this.dataNav123.data[0].lhs[i].highlighted) {
            if (this.onLoad) {
                return this.defaultNavClass + this.indentNavClass + this.activeNavClass;
            }
            else {
                return this.defaultNavClass + this.indentNavClass;
            }
        }
        else if (this.dataNav123.data[0].lhs[i].indented) {
            return this.defaultNavClass + this.indentNavClass;
        }
        else if (this.dataNav123.data[0].lhs[i].highlighted) {
            if (this.onLoad) {
                return this.defaultNavClass + this.activeNavClass;
            }
            else {
                return this.defaultNavClass;
            }
        }
        else {
            return this.defaultNavClass;
        }
    }
    getNavActiveClass(i) {
        if (this.dataNav123.data[0].lhs[i].indented) {
            return this.defaultNavClass + this.indentNavClass + this.activeNavClass;
        }
        else {
            return this.defaultNavClass + this.activeNavClass;
        }
    }
    clickEvent(i) {
        this.onLoad = false;
        this.selectedItem = i;
    }
    removeService(service) {
        this.dataNav123.data[0].lhs = this.dataNav123.data[0].lhs.filter((item) => item.name !== service);
    }
    removeServices() {
        console.log("In navigation component" + this.cloudantData.isreval);
        if (!this.cloudantData.isjabber) {
            this.removeService('Jabber');
        }
        if (!this.cloudantData.isfixedphone) {
            this.removeService('Fixed Phone');
        }
        if (!this.cloudantData.isspecial) {
            this.removeService('Special Request');
        }
        if (!this.cloudantData.isfac) {
            this.removeService('FAC Code');
        }
        if (!this.cloudantData.isapproval) {
            this.removeService('Approvals Pending');
        }
        if (!this.cloudantData.isreval) {
            this.removeService('Revalidation Pending');
        }
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        this.serhl = false;
        this.jhl = false;
        this.fhl = false;
        this.fachl = false;
        this.reqhl = false;
        this.reshl = false;
        this.serin = false;
        this.jin = false;
        this.fin = false;
        this.facin = false;
        this.reqin = false;
        this.resin = false;
        if (this.service == "services") {
            this.serhl = true;
        }
        if ((this.service).includes("jabber")) {
            this.jin = true;
            this.jhl = true;
        }
        if ((this.service).includes("requests")) {
            this.reqhl = true;
        }
        if (this.service == "services" || this.service == "requests" || this.service == "resources") {
            this.dataNav123 = {
                "data": [
                    {
                        "lhs": [
                            { "name": "Services", "routingname": "/services", "indented": this.serin, "highlighted": this.serhl, "param": "services" },
                            // {"name" : "Jabber","routingname":"/services", "indented" : this.jin, "highlighted": this.jhl},              
                            { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false, "param": "services" },
                            { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false, "param": "services" },
                            { "name": "Resources", "routingname": "/inprogress", "indented": this.resin, "highlighted": this.reshl, "param": "resources" },
                            { "name": "Requests", "routingname": "/employeesearch", "indented": this.reqin, "highlighted": this.reqhl, "param": "requests" }
                        ],
                        "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                        "step": 1,
                    }
                ]
            };
        }
        else {
            this.dataNav123 = {
                "data": [
                    {
                        "lhs": [
                            { "name": "Services", "routingname": "/services", "indented": this.serin, "highlighted": this.serhl, "param": "services" },
                            { "name": "Jabber", "routingname": "/services", "indented": this.jin, "highlighted": this.jhl, "param": "jabberservices" },
                            { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false, "param": "services" },
                            { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false, "param": "services" },
                            { "name": "Resources", "routingname": "/inprogress", "indented": this.resin, "highlighted": this.reshl, "param": "resources" },
                            { "name": "Requests", "routingname": "/employeesearch", "indented": this.reqin, "highlighted": this.reqhl, "param": "requests" }
                        ],
                        "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                        "step": 1,
                    }
                ]
            };
        }
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.countryroute = sessionStorage.getItem('countryroute');
        if (this.pcode == this.countryroute) {
            this.pcountrydetails = sessionStorage.getItem('countrydetails');
            console.log("navigationsession storageif" + JSON.parse(this.pcountrydetails).code);
            this.countryname = JSON.parse(this.pcountrydetails);
            this.cloudantData = {
                "code": this.ccode,
                "name": this.countryname.name,
                "isocode": this.countryname.isocode,
                "isjabber": this.countryname.isjabber,
                "isfixedphone": this.countryname.isfixphone,
                "isfac": this.countryname.isfac,
                "isspecial": this.countryname.isspecial,
                "isreval": this.countryname.isreval,
                "isapproval": this.countryname.isapproval,
                "isjabbernew": this.countryname.isjabbernew,
                "isjabberdelete": this.countryname.isjabberdelete,
                "isjabbermove": this.countryname.isjabbermove,
                "isjabberupdate": this.countryname.isjabberupdate
            };
            //for lhs
            this.dataNavParent = this.dataNav123;
            //end for lhs  
            this.dataNav123 = this.dataNav123;
            this.dataNavParent = this.dataNav123;
            this.removeServices();
        }
        else {
            console.log("navigation componentelse" + this.ccode);
            this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
                console.log('Response received navigation', data.countrydetails.isspecial);
                this.countryname = data.countrydetails;
                sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
                sessionStorage.setItem('countryroute', this.pcode);
                this.cloudantData = {
                    "code": this.pcode,
                    "name": this.countryname.name,
                    "isocode": this.countryname.isocode,
                    "isjabber": this.countryname.isjabber,
                    "isfixedphone": this.countryname.isfixphone,
                    "isfac": this.countryname.isfac,
                    "isspecial": this.countryname.isspecial,
                    "isreval": this.countryname.isreval,
                    "isapproval": this.countryname.isapproval,
                    "isjabbernew": this.countryname.isjabbernew,
                    "isjabberdelete": this.countryname.isjabberdelete,
                    "isjabbermove": this.countryname.isjabbermove,
                    "isjabberupdate": this.countryname.isjabberupdate
                };
            });
            //for lhs
            this.dataNavParent = this.dataNav123;
            //end for lhs
            this.dataNav123 = this.dataNav123;
            this.dataNavParent = this.dataNav123;
            this.removeServices();
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { dataNavParent1: ["dataNav", "dataNavParent1"], cloudantData1: ["cloudantData", "cloudantData1"] }, decls: 4, vars: 1, consts: [[1, "ds-row", "ds-pad-t-1", "ds-pad-b-2"], [1, "ds-panel", "ds-bg-neutral-warm-1", "ds-no-border"], [1, "ds-list-unstyled", "ds-hover"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "routerLink", "queryParams", "ngClass", "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_li_3_Template, 3, 8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataNav123.data[0].lhs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { dataNavParent1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['dataNav']
        }], cloudantData1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cloudantData']
        }] }); })();


/***/ }),

/***/ "nF3f":
/*!*****************************************************!*\
  !*** ./src/app/components/dummy/dummy.component.ts ***!
  \*****************************************************/
/*! exports provided: DummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return DummyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_db2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/db2.service */ "qtc7");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");







class DummyComponent {
    constructor(cookie, cloudantservice, Db2Service) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.Db2Service = Db2Service;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
    }
    ngOnInit() {
        //**
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"]
                }
            ]
        };
        this.servicesData = servicesData.data[0];
        // Code to search Db2 for resrouces
        this.Db2Service.search_db2('06685M744', 'all').subscribe(data => {
            console.log(' db2 response', data);
        });
    }
}
DummyComponent.ɵfac = function DummyComponent_Factory(t) { return new (t || DummyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"])); };
DummyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DummyComponent, selectors: [["app-dummy"]], decls: 8, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "lead-in"]], template: function DummyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page Under Construction !!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdW1teS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DummyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dummy',
                templateUrl: './dummy.component.html',
                styleUrls: ['./dummy.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"] }]; }, null); })();


/***/ }),

/***/ "oHDm":
/*!*********************************!*\
  !*** ./src/app/demo.service.ts ***!
  \*********************************/
/*! exports provided: ConnectCucdmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectCucdmService", function() { return ConnectCucdmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ConnectCucdmService {
    constructor(http) {
        this.http = http;
        this.Url = '/api/rest/post';
    }
    getNodes(cnum) {
        return this.http.post(this.Url, { cnum })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    errorhandler(error) {
        console.log(error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || "Sever Error");
    }
}
ConnectCucdmService.ɵfac = function ConnectCucdmService_Factory(t) { return new (t || ConnectCucdmService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConnectCucdmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConnectCucdmService, factory: ConnectCucdmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectCucdmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "oxqP":
/*!*****************************************************!*\
  !*** ./src/app/_services/cookie-handler.service.ts ***!
  \*****************************************************/
/*! exports provided: CookieHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieHandlerService", function() { return CookieHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CookieHandlerService {
    constructor() { }
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}
CookieHandlerService.ɵfac = function CookieHandlerService_Factory(t) { return new (t || CookieHandlerService)(); };
CookieHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieHandlerService, factory: CookieHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pt/k":
/*!*********************************************************************************!*\
  !*** ./src/app/components/revalidationpending/revalidationpending.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RevalidationpendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevalidationpendingComponent", function() { return RevalidationpendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");







class RevalidationpendingComponent {
    constructor(router, cookie, cloudantservice) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.cloudantData = [];
        this.servicesData = [];
        this.ccode = '';
    }
    submit() {
        this.router.navigate(['/employeeinfo']);
    }
    ngOnInit() {
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.cloudantservice.getcountrydetails(this.ccode).subscribe(data => {
            console.log('Response received', data.countrydetails.name);
            this.countryname = data.countrydetails;
            this.cloudantData = {
                "code": this.ccode,
                "name": this.countryname.name,
                "isocode": this.countryname.isocode,
                "isjabber": this.countryname.isjabber,
                "isfixedphone": this.countryname.isfixphone,
                "isfac": this.countryname.isfac,
                "isspecial": this.countryname.isspecial
            };
        });
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "titles": [
                        "Terms of use",
                        "Useful Information",
                        "Please bear in mind the following points when making a request :"
                    ],
                    "usefulinfotexts": [
                        "To make a request the Employee must exist in BluePages (except for cancellation requests).",
                        "You must know the IBM serial Number of the person making the request.",
                        "Only one request per employee per request type is processed at a time."
                    ],
                    "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
RevalidationpendingComponent.ɵfac = function RevalidationpendingComponent_Factory(t) { return new (t || RevalidationpendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"])); };
RevalidationpendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevalidationpendingComponent, selectors: [["app-revalidationpending"]], decls: 105, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-b-0_5", "ds-pad-b-1"], ["cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["width", "865", "height", "5"], ["width", "303"], ["width", "274"], ["src", "/icons/ecblank.gif", "alt", "", "width", "1", "height", "1", "border", "0"], ["width", "370"], ["align", "center"], ["id", "t1", "border", "1"], ["width", "72", "bgcolor", "#808080"], ["color", "#808080"], ["name", "%%Surrogate_fall", "type", "hidden", "value", "1"], ["type", "checkbox", "name", "fall", "value", "fall", "onchange", "if (document.getElementById('fall').checked==true)\n                                {\n                                    selectall();\n                                    }\n                                    else{\n                                    deselectall();\n                                    }", "id", "fall"], ["width", "172", "bgcolor", "#808080"], ["face", "Debussy", "color", "#FFFFFF"], ["width", "72", "bgcolor", "#FFFFFF"], ["color", "#ffffff"], ["name", "%%Surrogate_f1", "type", "hidden", "value", "1"], ["type", "checkbox", "name", "f1", "value", "f1", "id", "f1"], ["width", "172", "bgcolor", "#FFFFFF"], ["href", "https://105.w3-969.ibm.com/tools/voice/test/SPOEWebfe_dev.nsf/RR?OpenForm&VOIP_IN_DNew&01241O744&Suvarna Lakkisetty1&91613867&07/03/2019&077949744&test&077949744&CAG"], [1, "ds-row", "ds-pad-t-2", 2, "margin-right", "12px"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-2", "ds-offset-lg-5"], [1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-2"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3"]], template: function RevalidationpendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Revalidation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0\u00A0\u00A0Pending Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "font", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "fall ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "font", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "CNUM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "font", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "font", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Revalidation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "font", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "font", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "font", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "f1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "01241O744");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "font", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Suvarna Lakkisetty1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "font", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "font", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "07/03/2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "91613867 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Dept Changed from test to CAG ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "font", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "font", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "SELECT ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "DESELECT ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "APPROVE SELECTED ONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZhbGlkYXRpb25wZW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevalidationpendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-revalidationpending',
                templateUrl: './revalidationpending.component.html',
                styleUrls: ['./revalidationpending.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }]; }, null); })();


/***/ }),

/***/ "qWuM":
/*!*************************************************!*\
  !*** ./src/app/_services/servicenow.service.ts ***!
  \*************************************************/
/*! exports provided: servicenowservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicenowservice", function() { return servicenowservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/payload */ "dP2x");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class servicenowservice {
    constructor(http) {
        this.http = http;
        this.submitUrl = '/api/submit_snow';
        this.searchUrl = '/api/search_snow';
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_3__["snowsearch"]();
    }
    submit_new_jabber_request(Jabber_new_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, Jabber_new_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    searchsnow(cnum, type, reqno) {
        console.log('calling snow swarch');
        this.payload.cnum = cnum;
        this.payload.request_type = type;
        this.payload.reqno = reqno;
        return this.http.post(this.searchUrl, this.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    searchsnowcoments(cnum, type, reqno, number) {
        console.log('calling snow swarch');
        this.payload.cnum = cnum;
        this.payload.request_type = type;
        this.payload.reqno = reqno;
        this.payload.number = number;
        return this.http.post(this.searchUrl, this.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    errorhandler(error) {
        console.log(error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || "Sever Error");
    }
}
servicenowservice.ɵfac = function servicenowservice_Factory(t) { return new (t || servicenowservice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
servicenowservice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: servicenowservice, factory: servicenowservice.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](servicenowservice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qtc7":
/*!******************************************!*\
  !*** ./src/app/_services/db2.service.ts ***!
  \******************************************/
/*! exports provided: Db2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Db2Service", function() { return Db2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/payload */ "dP2x");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class Db2Service {
    constructor(http) {
        this.http = http;
        this.Url = '/api/db2_resource';
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_3__["db2search"]();
    }
    search_db2(cnum, type) {
        this.payload.cnum = cnum;
        this.payload.request_type = type;
        console.log('calling db2');
        return this.http.post(this.Url, this.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    errorhandler(error) {
        console.log(error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.message || "Sever Error");
    }
}
Db2Service.ɵfac = function Db2Service_Factory(t) { return new (t || Db2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
Db2Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Db2Service, factory: Db2Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Db2Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rXSL":
/*!***************************************************************!*\
  !*** ./src/app/components/uitoplinks/uitoplinks.component.ts ***!
  \***************************************************************/
/*! exports provided: UitoplinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UitoplinksComponent", function() { return UitoplinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dropdownsearch.pipe */ "OHqS");







const _c0 = function () { return ["/services"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function (a0) { return { country: a0, service: "services" }; };
function UitoplinksComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_div_45_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, searchResult_r1.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", searchResult_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", searchResult_r1.name, "");
} }
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["/feedback"]; };
class UitoplinksComponent {
    constructor(router, _eref, cookie) {
        this.router = router;
        this._eref = _eref;
        this.cookie = cookie;
        this.searchText = '';
        this.ccode = '';
        this.searchItems = [
            { "name": "India", "code": "744", "path": "././assets/flags/744.png" },
            { "name": "France", "code": "706", "path": "././assets/flags/706.png" },
        ];
    }
    ngOnInit() {
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
    }
    onClick(event) {
        var _a;
        if (!this._eref.nativeElement.contains(event.target))
            (_a = document.getElementById('countrydropdown')) === null || _a === void 0 ? void 0 : _a.classList.remove('show');
    }
    toggleDropdown() {
        var _a;
        (_a = document.getElementById('countrydropdown')) === null || _a === void 0 ? void 0 : _a.classList.toggle('show');
        this.searchText = '';
    }
    closeDropdown() {
        var _a;
        (_a = document.getElementById('countrydropdown')) === null || _a === void 0 ? void 0 : _a.classList.remove('show');
        this.searchText = '';
    }
}
UitoplinksComponent.ɵfac = function UitoplinksComponent_Factory(t) { return new (t || UitoplinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"])); };
UitoplinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UitoplinksComponent, selectors: [["app-uitoplinks"]], hostBindings: function UitoplinksComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 47, vars: 14, consts: [["href", "https://w3.ibm.com/", "id", "ds-w3-injectable-nav", "data-layout", "1", "data-height", "79", "data-breakpoint", "md", "target", "_blank", 1, "ds-hide-xs", "ds-display-md-block", "light", "md", 2, "height", "79px", "margin-left", "20px"], ["id", "w3-nav-full-overlay-injectable-open", "width", "91px", "height", "99px", "viewBox", "0 0 71 99", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "path-1", "points", "0.3828125 0.0936521943 0.3828125 61 35.62839 79 71 61 71 0.151757577"], ["x", "-22.7%", "y", "-18.8%", "width", "145.3%", "height", "137.7%", "filterUnits", "objectBoundingBox", "id", "filter-2"], ["radius", "1", "operator", "dilate", "in", "SourceAlpha", "result", "shadowSpreadOuter1"], ["dx", "0", "dy", "0", "in", "shadowSpreadOuter1", "result", "shadowOffsetOuter1"], ["stdDeviation", "5", "in", "shadowOffsetOuter1", "result", "shadowBlurOuter1"], ["in", "shadowBlurOuter1", "in2", "SourceAlpha", "operator", "out", "result", "shadowBlurOuter1"], ["values", "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0", "type", "matrix", "in", "shadowBlurOuter1"], ["x", "-22.7%", "y", "-24.4%", "width", "145.3%", "height", "148.8%", "filterUnits", "objectBoundingBox", "id", "filter-3"], ["id", "w3Masthead", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Badge"], ["id", "Path-2"], ["id", "mobile-filter", "fill", "black", "fill-opacity", "1", "filter", "url(#filter-2)", 0, "xlink", "href", "#path-1"], ["id", "BadgeFill", "fill-rule", "evenodd", 0, "xlink", "href", "#path-1"], ["id", "w3", "ds-heading-4", "", 1, "masthead-svg__text"], ["x", "21", "y", "40.85"], [1, "header"], [1, "ds-row", "ds-shadow-floating", "ds-margin-bottom-0"], [1, "ds-col-8", "ds-padding-top-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-margin-bottom-0"], [1, "ds-button", "ds-flat", "ds-bg-neutral-5", "ds-padding-left-2", "ds-padding-right-2", 3, "routerLink", "click"], ["href", "https://w3.ibm.com/w3publisher/global-voice-services/about-gvs/data-privacy", "target", "_blank", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "click"], ["routerLinkActive", "active", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 2, "cursor", "default", 3, "routerLink", "queryParams", "click"], ["href", "https://w3.ibm.com/help/#/article/telephony_gvi_spoe/overview", "target", "_blank", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "click"], ["routerLinkActive", "active", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "routerLink", "click"], ["id", "countryDropdown", 1, "dropdown"], [1, "dropbtn", 3, "click"], ["id", "countrydropdown", 1, "dropdown-content"], ["type", "text", "id", "myInput", "aria-describedby", "search-text", "placeholder", "Search..", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "routerLinkActive", "queryParams", "click"], ["width", "25;", "height", "16;", 1, "ds-border-neutral-5", 3, "src"]], template: function UitoplinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "feMorphology", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "feOffset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feGaussianBlur", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "feComposite", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feColorMatrix", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "filter", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feMorphology", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " +_ln+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feOffset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feGaussianBlur", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "feComposite", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "feColorMatrix", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tspan", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "w3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_span_click_30_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_32_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DATA PRIVACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_34_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_36_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "HELP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_38_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "FEEDBACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_button_click_41_listener() { return ctx.toggleDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CHANGE COUNTRY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UitoplinksComponent_Template_input_ngModelChange_44_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UitoplinksComponent_div_45_Template, 4, 9, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "dropdownsearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 6, ctx.searchItems, ctx.searchText));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_5__["DropdownsearchPipe"]], styles: [".dropbtn[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    font-size: 16px;\r\n    font-weight: 410;\r\n    font-family: IBMPlexSans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    width: 215px;\r\n    color: black;\r\n    padding: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    \r\n    background-position: 14px 12px;\r\n    background-repeat: no-repeat;\r\n    font-size: 16px;\r\n    padding: 14px 20px 12px 45px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 230px;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n    border-right: 6px solid #ddd;\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #038AD8;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpdG9wbGlua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNFQUFzRTtJQUN0RSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7SUFDN0MsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InVpdG9wbGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQxMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJQk1QbGV4U2FucywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMjE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGJ0bjpob3ZlcixcclxuLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNteUlucHV0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NlYXJjaGljb24ucG5nJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4IDEycHggNDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuLyogI215SW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNkZGQ7XHJcbn0gKi9cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzOEFEODtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UitoplinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uitoplinks',
                templateUrl: './uitoplinks.component.html',
                styleUrls: ['./uitoplinks.component.css'],
                host: { '(document:click)': 'onClick($event)' },
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }]; }, null); })();


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

/***/ "xD7X":
/*!*****************************************************************!*\
  !*** ./src/app/components/middleframe/middleframe.component.ts ***!
  \*****************************************************************/
/*! exports provided: MiddleframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleframeComponent", function() { return MiddleframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0) { return { country: a0, service: "jabberservices" }; };
function MiddleframeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r0.pcode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.servicesData.services[0]);
} }
const _c2 = function () { return ["/inprogress"]; };
const _c3 = function (a0) { return { country: a0 }; };
function MiddleframeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r1.pcode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.servicesData.services[1]);
} }
function MiddleframeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r2.pcode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.servicesData.services[2]);
} }
function MiddleframeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r3.pcode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.servicesData.services[3]);
} }
function MiddleframeComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usefulinfotext_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usefulinfotext_r5);
} }
class MiddleframeComponent {
    constructor(cookie, cloudantservice, route) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.cloudantData = [];
        this.servicesData = [];
        this.pcode = '';
        this.ccode = '';
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            console.log("navigation component middelframe" + this.pcode);
        });
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.countryroute = sessionStorage.getItem('countryroute');
        console.log("navigation component country route" + this.countryroute);
        if (this.pcode == this.countryroute) {
            this.pcountrydetails = sessionStorage.getItem('countrydetails');
            console.log("navigationsession storageif" + JSON.parse(this.pcountrydetails).code);
            this.countryname = JSON.parse(this.pcountrydetails);
            this.cloudantData = {
                "code": this.ccode,
                "name": this.countryname.name,
                "isocode": this.countryname.isocode,
                "isjabber": this.countryname.isjabber,
                "isfixedphone": this.countryname.isfixphone,
                "isfac": this.countryname.isfac,
                "isspecial": this.countryname.isspecial,
                "isreval": this.countryname.isreval,
                "isapproval": this.countryname.isapproval,
                "isjabbernew": this.countryname.isjabbernew,
                "isjabberdelete": this.countryname.isjabberdelete,
                "isjabbermove": this.countryname.isjabbermove,
                "isjabberupdate": this.countryname.isjabberupdate
            };
        }
        else {
            console.log("navigation componentelse" + this.ccode);
            this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
                console.log('Response received navigation', data.countrydetails.isspecial);
                this.countryname = data.countrydetails;
                sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
                sessionStorage.setItem('countryroute', this.pcode);
                this.cloudantData = {
                    "code": this.pcode,
                    "name": this.countryname.name,
                    "isocode": this.countryname.isocode,
                    "isjabber": this.countryname.isjabber,
                    "isfixedphone": this.countryname.isfixphone,
                    "isfac": this.countryname.isfac,
                    "isspecial": this.countryname.isspecial,
                    "isreval": this.countryname.isreval,
                    "isapproval": this.countryname.isapproval,
                    "isjabbernew": this.countryname.isjabbernew,
                    "isjabberdelete": this.countryname.isjabberdelete,
                    "isjabbermove": this.countryname.isjabbermove,
                    "isjabberupdate": this.countryname.isjabberupdate
                };
            });
        }
        const servicesData = {
            "data": [
                {
                    "lhs": [
                        { "name": "Services", "routingname": "/services", "indented": false, "highlighted": true },
                        { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Resources", "routingname": "/inprogress", "indented": false, "highlighted": false },
                        { "name": "Requests", "routingname": "/requests", "indented": false, "highlighted": false }
                    ],
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "titles": [
                        "Terms of use",
                        "Useful Information",
                        "Please bear in mind the following points when making a request :"
                    ],
                    "usefulinfotexts": [
                        "To make a request the Employee must exist in BluePages (except for cancellation requests).",
                        "You must know the IBM serial Number of the person making the request.",
                        "Only one request per employee per request type is processed at a time."
                    ],
                    "termsurl": "https://w3.ibm.com/w3/info_terms_of_use.html"
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
MiddleframeComponent.ɵfac = function MiddleframeComponent_Factory(t) { return new (t || MiddleframeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MiddleframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiddleframeComponent, selectors: [["app-middleframe"]], decls: 14, vars: 9, consts: [[1, "ds-pad-t-1"], [1, "ds-row", "ds-pad-b-1", "ds-pad-r-2"], ["class", "ds-pad-b-1 ds-col-xs-12 ds-col-sm-6 ds-col-md-6 ds-col-lg-4", 4, "ngIf"], ["target", "_blank", 1, "ds-text-contextual-blue-5", "ds-link-unstyled", 3, "href"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], [4, "ngFor", "ngForOf"], [1, "ds-pad-b-1", "ds-col-xs-12", "ds-col-sm-6", "ds-col-md-6", "ds-col-lg-4"], [3, "routerLink", "queryParams"], [1, "ds-panel"], [1, "ds-panel-container", "ds-text-align-center", 2, "max-height", "215px"], ["src", "././assets/JABBER.png"], [1, "ds-text-small", "ds-padding-t-3"], ["src", "././assets/fixedphone.png"], ["src", "././assets/ss.png"]], template: function MiddleframeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MiddleframeComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MiddleframeComponent_div_3_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MiddleframeComponent_div_4_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MiddleframeComponent_div_5_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MiddleframeComponent_li_13_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cloudantData.isjabber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cloudantData.isfixedphone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cloudantData.isfac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cloudantData.isspecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.servicesData.termsurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.servicesData.titles[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.servicesData.titles[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.servicesData.titles[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.servicesData.usefulinfotexts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWRkbGVmcmFtZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiddleframeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-middleframe',
                templateUrl: './middleframe.component.html',
                styleUrls: ['./middleframe.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


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