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
const _c1 = function (a0) { return { country: a0 }; };
const _c2 = function () { return ["/inprogress"]; };
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.pcode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.pcode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.pcode));
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");








class ReviewdetailsComponent {
    constructor(router, cookie, cloudantservice, servicenowservice) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.servicenowservice = servicenowservice;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.reviewDetailsIndia = {
            officeLocation: "Ahmedabad",
            campus: "Titanium",
            funded: "Yes",
            chargeDepartmentCode: "QADF",
            businessUnit: "GBS",
            projectId: "ABCDS",
            fixPhoneIdentifier: " "
        };
    }
    submit() {
        this.servicenowservice.submit_new_jabber_request().subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage']);
        });
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
ReviewdetailsComponent.ɵfac = function ReviewdetailsComponent_Factory(t) { return new (t || ReviewdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"])); };
ReviewdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewdetailsComponent, selectors: [["app-reviewdetails"]], decls: 95, vars: 9, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-b-1"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [1, "ds-panel-row"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5", "ds-pad-l-1"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content", "ds-text-neutral-7"], [1, "ds-pad-l-r-1", "ds-text-contextual-blue-5"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover", "ds-text-align-center"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "addId1"], ["width", "54%", "height", "10"], ["colspan", "2", "width", "46%"], ["width", "54%"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "Projectid"], ["for", "icano"], [1, "ds-hr-thick", "ds-mar-t-1_5"], [1, "ds-row", "ds-mar-t-b-1_5"], [1, "ds-col-xs-10", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], [1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], [1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "click"]], template: function ReviewdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Employee Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "STEP 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "STEP 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Jabber Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Project id (for GBS employee only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Fix Phone Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewdetailsComponent_Template_button_click_93_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData)("cloudantData", ctx.cloudantData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
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
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsc0VBQXNFOztBQUUxRSIsImZpbGUiOiJyZXZpZXdkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcy10ZXh0LWNvbnRleHR1YWwtZ3JlZW4tMyB7XHJcbiAgICBjb2xvcjogIzI3YWE3YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHMtdGV4dC1jb250ZXh0dWFsLWJsdWUtNSB7XHJcbiAgICBjb2xvcjogIzAzNzBiMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSUJNUGxleFNhbnNcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviewdetails',
                templateUrl: './reviewdetails.component.html',
                styleUrls: ['./reviewdetails.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"] }]; }, null); })();


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
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _middleframe_middleframe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middleframe/middleframe.component */ "xD7X");








class ServicesComponent {
    constructor(cookie, cloudantservice, route, router) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.router = router;
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
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
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
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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











function EmployeeinfoComponent_div_2_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The serial number that you have entered is not eligible to request more than one Jabber account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help related to Jabber configuration can be found at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Help@IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " For any further assistance, please contact ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " '.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The IBM Telephone Number (ITN) that exists for this users jabber account is ", ctx_r1.identifier, ".");
} }
function EmployeeinfoComponent_div_2_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The serial number that you have entered has already one new Jabber request is in progress and request number is ", ctx_r2.identifier, ".");
} }
function EmployeeinfoComponent_div_2_button_131_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_div_2_button_131_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navigation", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Request new Jabber service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "If the following information is correct, click Next. Any errors must be corrected in the employee's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BluePages record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " before continuing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "STEP 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Employee Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "STEP 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Employee Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "STEP 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Employee Entry Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "STEP 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Review Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Employee Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Job Responsibility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Business Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "The serial number that you have entered is not eligible to request Jabber account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " The IBM Telephone Number (ITN) that exists for this user is .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "There is no Jabber for this serial number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "The serial number you have entered does not own an IP Telephone Number (ITN) and so is not eligible for Jabber. Please use this link to raise a request for an ITN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Global Voice Infrastructure.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Once you have received the ITN you can then request Jabber. Thank you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "The serial number that you have entered is not authorized to access Jabber service. You can access IP Extension option available on the left side menu. For any further queries about Jabber, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Ladislav.Kosar@sk.ibm.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "The serial number that you have entered is not authorized to access IP Extension service. You can access Jabber option available on the left side menu. For any further queries about IP Extension, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Ladislav.Kosar@sk.ibm.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, EmployeeinfoComponent_div_2_div_126_Template, 17, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, EmployeeinfoComponent_div_2_div_127_Template, 12, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, EmployeeinfoComponent_div_2_button_131_Template, 2, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_div_2_Template_button_click_133_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.backClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "BACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx_r0.servicesData)("cloudantData", ctx_r0.cloudantData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employeeInfo.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employeeInfo.jobResponsibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employeeInfo.businessUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employeeInfo.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employeeInfo.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employeeInfo.email);
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
        this.isDataLoaded = false;
    }
    submit() {
        this.router.navigate(['/entrydetails'], { queryParams: { country: this.pcode } });
    }
    backClick() {
        this.location.back();
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
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
        this.cnum = sessionStorage.getItem('cnum');
        this.servicesData = servicesData.data[0];
        this.warninginfo = false;
        this.warninginfosnow = false;
        this.sessionwarninginfo = sessionStorage.getItem('warninginfo');
        this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow');
        console.log("from12345" + this.sessionwarninginfo + this.sessionwarninginfosnow);
        if (this.sessionwarninginfo == 'true1') {
            this.warninginfo = true;
            this.identifier = sessionStorage.getItem('identifier');
            this.isDataLoaded = true;
        }
        else if (this.sessionwarninginfosnow == 'true1') {
            this.warninginfosnow = true;
            this.identifier = sessionStorage.getItem('identifier');
            this.isDataLoaded = true;
        }
        // this.warninginfosnow = true
        this.isDataLoaded = true;
        //this.identifier=sessionStorage.getItem('identifier')
        this.employeeInfo1 = sessionStorage.getItem('employeeInfo');
        this.employeeInfo = JSON.parse(this.employeeInfo1);
    }
}
EmployeeinfoComponent.ɵfac = function EmployeeinfoComponent_Factory(t) { return new (t || EmployeeinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_4__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_6__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
EmployeeinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeinfoComponent, selectors: [["app-employeeinfo"]], decls: 3, vars: 1, consts: [[1, "ds-panel", "ds-col-12"], ["class", "ds-row ds-pad-l-7 ds-pad-t-1 ds-pad-b-4", 4, "ngIf"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-padding-top-0_5"], ["href", "https://w3.ibm.com/bluepages/", "target", "_blank"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [1, "ds-col-12", "ds-padding-top-0_5"], [1, "ds-row"], [1, "ds-col-12"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5", "ds-pad-l-1"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content", "ds-text-neutral-7"], [1, "ds-pad-l-r-1", "ds-text-contextual-blue-5"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover", "ds-text-align-center"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["width", "359"], ["for", "NameID"], ["for", "JobID"], ["for", "BUID"], ["for", "DeptID"], ["for", "EmpCountryID"], ["for", "EmailID"], ["id", "war11", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "war2", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], [2, "font-size", "1rem"], ["id", "war3", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "war4", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["target", "_blank", "href", "https://105.w3-969.ibm.com/tools/voice/SPOEProd.nsf/EntryPage?OpenForm&EMEA_Voice", 2, "color", "blue"], ["id", "err-dept1", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["target", "_blank", "href", "mailto:Ladislav.Kosar@sk.ibm.com", 2, "color", "blue"], ["id", "err-dept2", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "w1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], [1, "ds-hr-thick"], [1, "ds-row", "ds-mar-t-b-3_5"], [1, "ds-col-xs-10", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], ["class", "ds-button ds-primary ds-pad-l-0 ds-pad-r-0 ds-text-align-center", "style", "width: 100%", 3, "click", 4, "ngIf"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], [1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "click"], ["id", "w1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["target", "_blank", "href", "https://w3.ibm.com/help/#/article/jabbernewuser", 2, "color", "blue"], ["target", "_blank", "href", "https://ibm-cio.slack.com/archives/C0133EDUGVB", 2, "color", "blue"], ["id", "req_stat", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%", 3, "click"]], template: function EmployeeinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeinfoComponent_div_2_Template, 135, 11, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__["TopcountryframeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzRUFBc0U7O0FBRTFFIiwiZmlsZSI6ImVtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHMtdGV4dC1jb250ZXh0dWFsLWdyZWVuLTMge1xyXG4gICAgY29sb3I6ICMyN2FhN2MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRzLXRleHQtY29udGV4dHVhbC1ibHVlLTUge1xyXG4gICAgY29sb3I6ICMwMzcwYjAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTVBsZXhTYW5zXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn0iXX0= */"] });
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
function ServicessearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
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
ServicessearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicessearchComponent, selectors: [["app-servicessearch"]], decls: 15, vars: 5, consts: [[1, "ds-row", "ds-pad-t-1", "ds-pad-b-1"], [1, "ds-col-sm-12", "ds-col-md-2", "ds-col-xl-3"], [1, "ds-col-sm-12", "ds-col-md-10", "ds-col-xl-9"], [1, "ds-row", "ds-pad-l-12", "ds-pad-t-4"], [1, "ds-col-sm-12", "ds-col-md-2", "ds-col-xl-2"], [1, "ds-col-sm-12", "ds-col-md-10", "ds-col-xl-10", "ds-pad-b-2"], [1, "ds-col-sm-8", "md-2", "xl-5"], ["type", "text", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Search service...", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], [1, "row"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "queryParams"], ["width", "28;", "height", "20;", 1, "ds-border-neutral-5", 3, "src"]], template: function ServicessearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GVS Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServicessearchComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServicessearchComponent_div_13_Template, 5, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 2, ctx.searchItems, ctx.searchText));
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
    }
    getcountrydetails(ccode) {
        console.log("getcountrydetails" + ccode);
        return this.http.post(this.Url, { ccode })
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

/***/ "U8Ij":
/*!**************************************!*\
  !*** ./src/app/_services/payload.ts ***!
  \**************************************/
/*! exports provided: db2search, snowsearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db2search", function() { return db2search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snowsearch", function() { return snowsearch; });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ "tyNb");





































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
        _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_34__["EmployeesearchVoipDeleteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_35__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function VoipInNewComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r4.Campus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r4.Campus, "");
} }
function VoipInNewComponent_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_campus_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_campus_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fl_campus_r5);
} }
class VoipInNewComponent {
    constructor(router, cookie, cloudantservice) {
        //alert(this.Location[0].Buildings[2]);
        //alert(this.Location[0].Campus);
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.Location = [{ 'Campus': 'Select Office Location', 'Buildings': [] },
            { 'Campus': 'Banglore', 'Buildings': ['Select One', 'MTP', 'SA'] },
            { 'Campus': 'Gurgaon', 'Buildings': ['Select One', 'DLF Infinity', 'ASF'] }
        ];
        this.array = [];
        this.SelectedLoc = [];
        this.Banglore = ['Select One', 'MTP', 'SA'];
        this.Gurgaon = ['Select One', 'DLF Infinity', 'ASF'];
        this.hideDeptCode = true;
        this.hideBuilding = true;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
    }
    submit() {
        this.router.navigate(['/reviewdetails']);
    }
    selectedLocation(loc) {
        if (loc.toUpperCase() != 'SELECT OFFICE LOCATION') {
            this.hideBuilding = false;
            /*  if(loc == this.Campus[0].Banglore) {
                this.array = Object.values(this.Campus[0]);
              }
              else if(this.SelectedLoc == Object.keys(this.Campus[1])) {
                this.SelectedLoc = [...this.Gurgaon];
              }
              else {
                return;
              } */
            for (var i = 0; i < this.Location.length; i++) {
                if (loc == this.Location[i].Campus) {
                    this.campus = [...this.Location[i].Buildings];
                }
            }
        }
        else {
            this.hideBuilding = true;
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
        if (formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '') {
            alert('Please select the Campus');
            return;
        }
        if (formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {
            alert('Please enter the Charge Department Code');
            return;
        }
        if (formData.value.Projectid == '') {
            alert('Please enter the Project Id');
            return;
        }
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
VoipInNewComponent.ɵfac = function VoipInNewComponent_Factory(t) { return new (t || VoipInNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"])); };
VoipInNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInNewComponent, selectors: [["app-voip-in-new"]], decls: 138, vars: 6, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [1, "ds-col-12", "ds-pad-t-0_5"], [1, "ds-row"], [1, "ds-col-12"], [1, "tooltip"], [1, "ds-text-contextual-blue-5", "ds-pad-r-0_5", "ds-pad-l-1"], [1, "tooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], ["id", "r21", 1, "tooltip"], [1, "ds-pad-r-1"], [1, "newtooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], ["id", "r3", 1, "ds-text-contextual-green-3", "ds-pad-r-1", "ds-pad-l-0_5"], [1, "tooltiptext", "ds-bg-blue-2", "ds-text-neutral-7", 2, "font-weight", "normal"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "54%", "height", "10"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Location_1", "cols", "40", "id", "LocationId", "title", "Office Location", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["location", ""], ["name", "Location_1", 3, "value", 4, "ngFor", "ngForOf"], ["valign", "top", 3, "hidden"], ["colspan", "2", "width", "46%"], ["for", "builId", 1, "ds-text-capitalize"], ["width", "54%"], ["name", "Buildings", "rows", "2", "cols", "40", "id", "LocationId_1_1", "title", "Campus", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "addId", 1, "ds-text-capitalize", "ds-padding-top-2"], [1, "ds-mar-b-1"], [1, "ds-input-radio-group"], ["for", "radio1", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "name", "Voice_Type", "id", "radio1", "value", "Y", 1, "ds-input", 3, "click"], [1, "ds-input-control"], [1, "ds-pad-l-0_5"], ["for", "radio2", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "name", "Voice_Type", "id", "radio2", "value", "N", "checked", "", 1, "ds-input", 3, "click"], ["id", "d1"], ["for", "addId", 1, "ds-text-capitalize", "ds-pad-t-1"], ["id", "d21", 1, "ds-input-container"], ["name", "Department_number", "value", "", "tabindex", "4", "id", "d2", "title", "Contact FirstLine Manager\\Project Manager for Charge Department Code", "autocomplete", "off", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["id", "Mentor1Div"], ["for", "addId", 1, "ds-text-capitalize"], ["for", "Projectid", 1, "ds-text-capitalize", "ds-pad-t-1"], [1, "ds-input-container", "ds-pad-t-1"], ["name", "Projectid", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "Projectid", "title", "Contact FirstLine Manager\\Project Manager for Project id", "maxlength", "11", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "icano", 1, "ds-text-capitalize", "ds-pad-t-1"], [1, "ds-input-container"], ["name", "identifier_hp", "value", "", "tabindex", "7", "title", "Fix Phone Identifier", "maxlength", "8", 1, "ds-input", 2, "width", "300px !important"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "tabindex", "32765", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["name", "Location_1", 3, "value"], [3, "value"]], template: function VoipInNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipInNewComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetails(_r0); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Employee Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "STEP 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "STEP 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipInNewComponent_Template_select_change_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); return ctx.selectedLocation(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, VoipInNewComponent_option_65_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, VoipInNewComponent_option_75_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_Template_input_click_86_listener() { return ctx.showChargeDepartmentCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_Template_input_click_91_listener() { return ctx.hideChargeDepartmentCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "GBS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Project id (for GBS employee only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "If you already have Fix Phone , please provide the identifier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_Template_input_click_137_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBuilding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDeptCode);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtaW4tbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWluLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipInNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-in-new',
                templateUrl: './voip-in-new.component.html',
                styleUrls: ['./voip-in-new.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }]; }, null); })();


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
    constructor(router, cookie, cloudantservice) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.requestResult = {
            serviceName: "new Jabber",
            serviceNumber: "IN-NS-06521V-0028"
        };
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
ResultpageComponent.ɵfac = function ResultpageComponent_Factory(t) { return new (t || ResultpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"])); };
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
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"] }]; }, null); })();


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









function RequestsComponent_tr_31_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} }
function RequestsComponent_tr_31_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_tr_31_ng_template_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const no_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openNav(no_r2.fl_reqcomments); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const no_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r2.fl_reqcomments[0]);
} }
function RequestsComponent_tr_31_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const no_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r2.fl_reqcomments);
} }
function RequestsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestsComponent_tr_31_span_10_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestsComponent_tr_31_ng_template_11_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RequestsComponent_tr_31_ng_template_13_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const no_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r2.fl_typesnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r2.fl_date_submittedsnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r2.fl_statussnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r2.fl_ReqNumbersnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", no_r2.fl_reqcomments.includes("none" || false))("ngIfThen", _r6)("ngIfElse", _r4);
} }
function RequestsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmts_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cmts_r13, " ");
} }
class RequestsComponent {
    constructor(cookie, cloudantservice, route, servicenowservice) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.servicenowservice = servicenowservice;
        this.requests = [
            { fl_typesnow: "GVS FAC Code - Create", fl_date_submittedsnow: "01/06/2021", fl_statussnow: "Completed", fl_ReqNumbersnow: "IN-NS-06685M-5121", fl_reqcomments: "none" },
        ];
        this.DisplayModel = 'none';
        this.allComments = [];
        this.servicesData = [];
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
        //code to search snow for request status
        this.servicenowservice.searchsnow('000RQU744', 'all', '').subscribe(data => {
            console.log(' snow response', data);
        });
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"])); };
RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 45, vars: 5, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-col-sm-2", "ds-col-md-7", "ds-padding-left-1_5"], [1, "ds-padding-top-0_5", "ds-padding-bottom-1"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], [2, "width", "100%", "border-collapse", "collapse", "padding", "2px"], [1, "ds-bg-neutral-warm-2", "ds-text-neutral-7", "ds-font-weight-bold"], [2, "padding", "5px 15px 5px 25px", "padding-left", "15px"], [2, "padding", "5px 55px 5px 25px", "padding-left", "15px"], [2, "padding", "5px 65px 9px 50px", "padding-left", "15px"], [2, "padding", "5px 55px 5px 50px", "padding-left", "15px"], [2, "padding", "5px 15px 5px 10px", "padding-left", "15px"], [4, "ngFor", "ngForOf"], ["id", "myNav", 1, "overlay", "ds-padding-top-5"], [1, "overlay-content"], [1, "ds-row", "ds-bg-neutral-1"], [1, "ds-margin-right-1"], [1, "ds-float-right", 3, "click"], [1, "ds-padding-left-5", "ds-padding-bottom-3", "ds-padding-right-1"], ["id", "inval", "style", "padding-left: 1rem;", 4, "ngFor", "ngForOf"], [2, "padding-top", "13px", "padding-left", "15px"], [2, "width", "30%", "padding-top", "13px", "padding-left", "15px"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["link", ""], ["text", ""], [2, "color", "blue", 3, "click"], ["id", "inval", 2, "padding-left", "1rem"]], template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Employee Requests Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Resource Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tracking Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Additional Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RequestsComponent_tr_31_Template, 15, 7, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_Template_a_click_38_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RequestsComponent_div_43_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.DisplayModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allComments);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".overlay[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n  }\r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      padding: 8px;\r\n      text-decoration: none;\r\n      color: black;\r\n  }\r\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n      cursor: pointer;\r\n      color: blue;\r\n  }\r\n  .overlay-content[_ngcontent-%COMP%] {    \r\n      width: 50%;\r\n      margin-left: 25%;\r\n      margin-top:5%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxvQ0FBb0M7RUFDdEM7RUFDQTtNQUNJLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsWUFBWTtFQUNoQjtFQUNBO01BQ0ksZUFBZTtNQUNmLFdBQVc7RUFDZjtFQUNBO01BQ0ksVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixhQUFhO0VBQ2pCIiwiZmlsZSI6InJlcXVlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuICAub3ZlcmxheSBhIHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLm92ZXJsYXkgYTpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWNvbnRlbnQgeyAgICBcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgbWFyZ2luLXRvcDo1JTtcclxuICB9XHJcbiAgIl19 */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function EmployeesearchComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fullName, " ");
} }
function EmployeesearchComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.ccode);
} }
function EmployeesearchComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(eg 012789)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_p_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "font", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("There is no record of an IBM employee with the serial number ", ctx_r6.employeeSerial, " available from BluePages");
} }
const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0) { return { country: a0 }; };
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
        this.warninginfo = true;
        this.warninginfosnow = true;
        this.employeeSerial = '';
        this.notvalid = false;
        this.dataloading = false;
    }
    ngOnInit() {
        this.fullName = this.cookie.getCookie('user');
        this.ccode = this.cookie.getCookie('ccode');
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        this.radioAction = "mySelf";
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
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
    onSubmit(formData) {
        if (this.radioAction.toLowerCase() == "anotheremployee") {
            if (formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true) {
                alert("Please enter serial number");
            }
            else if (formData.value.employeeSerial.length < 6 && this.hideDisTextBox == true) {
                alert("Employee Serial Number should be of 6 characters");
            }
            else {
                this.employeeSerial = formData.value.employeeSerial + this.pcode;
            }
        }
        //for self
        else {
            this.employeeSerial = this.ccode;
        }
        //BP verification and getting data
        this.bpservices.bpdetails(this.employeeSerial).subscribe(data => {
            console.log(' BP Details', data.userdata);
            if (data.userdata) {
                this.employeeInfo = {
                    employeeName: data.username.callupname,
                    jobResponsibility: data.username.jobresponsibilities,
                    businessUnit: data.username.workloc,
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
                        this.router.navigate(['/employeeinfo'], { queryParams: { country: this.pcode } });
                    }
                    else {
                        this.warninginfo = false;
                        sessionStorage.setItem('warninginfo', 'false1');
                        //SNOW search for ongoin requests      
                        this.servicenowservice.searchsnow(this.employeeSerial, 'jabber_new', 'IN-NS-000RQU').subscribe(data => {
                            console.log(' snow response', data);
                            console.log(' snow response', data.message.length);
                            if (data.message.length > 0) {
                                console.log(' snow response1', data.message.length);
                                this.warninginfosnow = true;
                                sessionStorage.setItem('warninginfosnow', 'true1');
                                this.identifier = data.message;
                                sessionStorage.setItem('identifier', this.identifier);
                                this.router.navigate(['/employeeinfo'], { queryParams: { country: this.pcode } });
                            }
                            else {
                                this.router.navigate(['/employeeinfo'], { queryParams: { country: this.pcode } });
                            }
                        });
                    }
                });
            }
            else {
                this.notvalid = true;
            }
            //this.isDataLoaded=true
        });
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
EmployeesearchComponent.ɵfac = function EmployeesearchComponent_Factory(t) { return new (t || EmployeesearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_4__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_5__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__["servicenowservice"])); };
EmployeesearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesearchComponent, selectors: [["app-employeesearch"]], decls: 84, vars: 15, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "ngSubmit"], ["formData", "ngForm"], [1, "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [1, "ds-panel-row"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5", "ds-pad-l-1"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content", "ds-text-neutral-7"], [1, "ds-pad-l-r-1", "ds-text-contextual-blue-5"], ["aria-label", "help", "tabindex", "0", 1, "ds-tooltip-trigger", "ds-text-contextual-blue-5"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content"], ["id", "tooltip-demo1", 1, "ds-tooltip", "ds-hover", "ds-text-align-center"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], [1, "ds-input-container"], ["role", "group", "aria-labelledby", "horizontal-radio-buttons-example", 1, "ds-input-radio-group", "ds-flex"], [1, "ds-input-radio", "ds-mar-r-1"], ["type", "radio", "name", "radio-group2", "id", "radio4", "value", "mySelf", 1, "ds-input", 3, "ngModel", "ngModelChange", "change"], [1, "ds-input-control"], ["for", "radio4"], [1, "ds-input-radio"], ["type", "radio", "name", "radio-group2", "id", "radio5", "value", "anotherEmployee", 1, "ds-input", 3, "ngModel", "ngModelChange", "change"], ["for", "radio5"], [4, "ngIf"], ["class", "ds-pad-t-2", 4, "ngIf"], ["colspan", "2"], ["class", " row ds-pad-t-2", 4, "ngIf"], ["class", "ds-col-xs-12 ds-alert ds-warning", "id", "error", 4, "ngIf"], [1, "ds-hr-thick", "ds-mar-t-1_5"], [1, "ds-row", "ds-mar-t-b-3_5"], [1, "ds-col-xs-12", "ds-col-md-5", "ds-col-lg-2", "ds-offset-md-3", "ds-offset-lg-6", "ds-push-md-4", "ds-push-lg-4"], ["type", "submit", 1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%"], [1, "ds-col-xs-12", "ds-col-md-4", "ds-col-lg-3", "ds-pull-md-5", "ds-pull-lg-1"], ["type", "button", 1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "routerLink", "queryParams"], ["for", "OriginatorNameId"], [1, "ds-pad-t-2"], [1, "row", "ds-pad-t-2"], [1, "ds-col-4"], ["maxlength", "6", "name", "employeeSerial", "ngModel", "", "type", "text", 1, "ds-input"], [1, "ds-col-6"], [2, "color", "#808080"], ["id", "error", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["color", "black"]], template: function EmployeesearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeesearchComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchComponent_Template_input_ngModelChange_55_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchComponent_Template_input_change_55_listener() { return ctx.onRequestForChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchComponent_Template_input_ngModelChange_60_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchComponent_Template_input_change_60_listener() { return ctx.onRequestForChange(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, EmployeesearchComponent_tr_64_Template, 6, 1, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, EmployeesearchComponent_div_67_Template, 3, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, EmployeesearchComponent_div_69_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, EmployeesearchComponent_div_72_Template, 5, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, EmployeesearchComponent_div_74_Template, 6, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, EmployeesearchComponent_p_75_Template, 3, 1, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "EXIT REQUEST");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.pcode));
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNFQUFzRTs7QUFFMUUiLCJmaWxlIjoiZW1wbG95ZWVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRzLXRleHQtY29udGV4dHVhbC1ncmVlbi0zIHtcclxuICAgIGNvbG9yOiAjMjdhYTdjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcy10ZXh0LWNvbnRleHR1YWwtYmx1ZS01IHtcclxuICAgIGNvbG9yOiAjMDM3MGIwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk1QbGV4U2Fuc1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIFxyXG59Il19 */"] });
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










const _c0 = function () { return ["/services"]; };
const _c1 = function (a0) { return { country: a0 }; };
function HomepageComponent_div_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, searchResult_r2.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", searchResult_r2.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", searchResult_r2.name, " ");
} }
function HomepageComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_26_a_1_Template, 3, 7, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 < 1);
} }
const _c2 = function () { return ["/searchresult"]; };
function HomepageComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.storeSearchTerm(ctx_r6.searchText); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click here to see all results in GVS search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
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
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 78, vars: 28, consts: [[1, "ds-row", "ds-bg-dark", "ds-pad-t-2_4", 2, "background-image", "url(././assets/banner.png)", "background-position", "center", "background-size", "cover", "background-repeat", "no-repeat"], [1, "ds-col-xs-10", "ds-offset-xs-3", "ds-mar-t-3", "ds-col-lg-8", "ds-offset-lg-2", "ds-col-xl-6", "ds-offset-xl-3", "ds-text-align-center", "ds-shadow-text"], [1, "ds-heading-xs-2", "ds-heading-lg-2", "ds-shadow-text"], [1, "ds-row"], [1, "ds-col-xs-15", "ds-col-md-5", "ds-col-lg-12", "ds-offset-md-3", "ds-heading-2"], [1, "ds-col-xs-30", 2, "font-size", "48px"], [1, "ds-heading-3", "ds-text-align-center"], [2, "font-size", "30px"], [1, "ds-padding-top-0_5", "ds-row", "ds-text-align-center"], [1, "ds-col-sm-4", "md-2", "xl-5"], ["type", "text", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Search service...", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-pad-t-0_5", "ds-text-align-left"], [3, "routerLink", "click", 4, "ngIf"], [1, "ds-row", "ds-text-align-center", 2, "background-color", "#f3f3f3"], [1, "ds-col-sm-6", "ds-padding-bottom-1_5", "ds-padding-right-3_5", "ds-text-align-right", "ds-padding-top-1_5"], ["routerLinkActive", "active ", "data", "{cdetails:this.countryname}", 3, "routerLink", "queryParams"], [1, "ds-text-align-center", "ds-border-neutral-5", 3, "src"], [1, "ds-col-sm-6", "ds-text-align-left", "ds-padding-top-1"], [1, "ds-padding-left-3", 2, "font-size", "30px"], ["data", "{cdetails:this.countryname}", 3, "routerLink", "queryParams"], [1, "ds-padding-left-3"], [1, "ds-text-align-center", "ds-heading-4", "ds-margin-bottom-0"], [1, "ds-text-align-center", "ds-heading-5", "ds-margin-bottom-0"], [1, "ds-row", "ds-text-align-center", "ds-padding-left-1", "ds-padding-right-1"], [1, "ds-col-3", "ds-padding-left-1"], [1, "ds-panel"], [1, "ds-panel-container"], ["src", "././assets/JABBER.png ", "width", "93px ", "height", "93px "], [1, "ds-text-small", "ds-align-text-left", "ds-padding-bottom-2"], ["id", "button2 ", 1, "button-blue"], ["type", "button ", "name", "next ", "tabindex", "15 ", "data", "{cdetails:this.countryname}", "value", "Get Started ", 1, "ds-button", "ds-secondary", "ds-margin-bottom-0", "ds-padding-top-1", "ds-padding-bottom-1", 3, "routerLink", "queryParams"], ["name", "country_code ", "type", "hidden", 3, "value"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "queryParams", 4, "ngIf"], [3, "routerLink", "queryParams"], ["width", "28;", "height", "20;", 1, "ds-border-neutral-5", 3, "src"], [3, "routerLink", "click"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "What service or country are you looking for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomepageComponent_Template_input_ngModelChange_25_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomepageComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomepageComponent_a_29_Template, 2, 2, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "My Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " to view all available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Most Viewed Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Find the right services, check their availability, and then choose the way ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "you connect and work together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Cisco Jabber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Cisco Jabber is a multiple platform soft phone application to make and receive phone calls.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 32);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.fullName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 13, ctx.searchItems, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 16, ctx.searchItems, ctx.searchText).length >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.countryname.flagname, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("services for ", ctx.countryname.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ccode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
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






const _c0 = function (a0, a1) { return { page: a0, country: a1 }; };
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", nav_r1.routingname)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, nav_r1.routingname, ctx_r0.pcode))("ngClass", i_r2 == ctx_r0.selectedItem ? "ds-text-contextual-blue-5" : "ds-text-neutral-7");
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
    }
    getNavClass(i) {
        if (this.dataNav.lhs[i].indented && this.dataNav.lhs[i].highlighted) {
            if (this.onLoad) {
                return this.defaultNavClass + this.indentNavClass + this.activeNavClass;
            }
            else {
                return this.defaultNavClass + this.indentNavClass;
            }
        }
        else if (this.dataNav.lhs[i].indented) {
            return this.defaultNavClass + this.indentNavClass;
        }
        else if (this.dataNav.lhs[i].highlighted) {
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
        if (this.dataNav.lhs[i].indented) {
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
        this.dataNav.lhs = this.dataNavParent.lhs.filter((item) => item.name !== service);
    }
    removeServices() {
        console.log("In navigation component" + this.cloudantData.isreval);
        if (!this.cloudantData.isjabber) {
            this.removeService('Jabber');
        }
        if (!this.cloudantData.isfixedphone) {
            this.removeService('Fixed Phone');
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
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
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
            this.dataNav = this.dataNavParent;
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
            this.dataNav = this.dataNavParent;
            this.removeServices();
        }
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { dataNavParent: ["dataNav", "dataNavParent"], cloudantData1: ["cloudantData", "cloudantData1"] }, decls: 4, vars: 1, consts: [[1, "ds-row", "ds-pad-t-1", "ds-pad-b-2"], [1, "ds-panel", "ds-bg-neutral-warm-1", "ds-no-border"], [1, "ds-list-unstyled", "ds-hover"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "routerLink", "queryParams", "ngClass", "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavigationComponent_li_3_Template, 3, 8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataNav.lhs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { dataNavParent: [{
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
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payload */ "U8Ij");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class servicenowservice {
    constructor(http) {
        this.http = http;
        this.submitUrl = '/api/submit_snow';
        this.searchUrl = '/api/search_snow';
        this.payload = new _payload__WEBPACK_IMPORTED_MODULE_3__["snowsearch"]();
    }
    submit_new_jabber_request() {
        console.log('calling snow');
        this.sample = {
            "orinator_payload": "000RQU744",
            "cNum_payload": "000RQU744",
            "Buildings_Disp": "testbuilding",
            "Voice_Type_Disp": "testvoice",
            "Projectid_Disp": "12345",
            "icano_Disp": "testdisp",
            "identifier_hp_Disp": "to do",
            "BusinessUnit_Disp": "testBU",
            "Department_number_Disp": "dept",
            "Location_final": "Location_final",
            "accid_Disp": "accid disp",
            "ReqNo": "NS-06521V-0028",
            "level2_japproval": "yes",
            "countryname": "India",
            "request_type": "jabber_new",
            "evolution_instance": "AP",
            "level1_japproval": "yes",
            "qag": "IBM ENHANCED QAS Group 3 - All Features Legacy E&C v2.0",
            "class_of_serice": "COS_APAC_INDIA",
            "gvs_portal_link": "NA",
            "gvs_approval_link": "NA",
            "SLA_type": "seven_days_reminder",
            "country_code": "744"
        };
        return this.http.post(this.submitUrl, this.sample)
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
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payload */ "U8Ij");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class Db2Service {
    constructor(http) {
        this.http = http;
        this.Url = '/api/db2_resource';
        this.payload = new _payload__WEBPACK_IMPORTED_MODULE_3__["db2search"]();
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
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dropdownsearch.pipe */ "OHqS");







const _c0 = function () { return ["/services"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function (a0) { return { country: a0 }; };
function UitoplinksComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_div_45_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.closeDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, searchResult_r1.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](searchResult_r1.name);
} }
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["/feedback"]; };
class UitoplinksComponent {
    constructor(_eref, cookie) {
        this._eref = _eref;
        this.cookie = cookie;
        this.searchText = '';
        this.ccode = '';
        this.searchItems = [
            { "name": "India", "code": "744" },
            { "name": "France", "code": "706" },
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
UitoplinksComponent.ɵfac = function UitoplinksComponent_Factory(t) { return new (t || UitoplinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"])); };
UitoplinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UitoplinksComponent, selectors: [["app-uitoplinks"]], hostBindings: function UitoplinksComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 47, vars: 14, consts: [["href", "https://w3.ibm.com/", "id", "ds-w3-injectable-nav", "data-layout", "1", "data-height", "79", "data-breakpoint", "md", "target", "_blank", 1, "ds-hide-xs", "ds-display-md-block", "light", "md", 2, "height", "79px", "margin-left", "20px"], ["id", "w3-nav-full-overlay-injectable-open", "width", "91px", "height", "99px", "viewBox", "0 0 71 99", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "path-1", "points", "0.3828125 0.0936521943 0.3828125 61 35.62839 79 71 61 71 0.151757577"], ["x", "-22.7%", "y", "-18.8%", "width", "145.3%", "height", "137.7%", "filterUnits", "objectBoundingBox", "id", "filter-2"], ["radius", "1", "operator", "dilate", "in", "SourceAlpha", "result", "shadowSpreadOuter1"], ["dx", "0", "dy", "0", "in", "shadowSpreadOuter1", "result", "shadowOffsetOuter1"], ["stdDeviation", "5", "in", "shadowOffsetOuter1", "result", "shadowBlurOuter1"], ["in", "shadowBlurOuter1", "in2", "SourceAlpha", "operator", "out", "result", "shadowBlurOuter1"], ["values", "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0", "type", "matrix", "in", "shadowBlurOuter1"], ["x", "-22.7%", "y", "-24.4%", "width", "145.3%", "height", "148.8%", "filterUnits", "objectBoundingBox", "id", "filter-3"], ["id", "w3Masthead", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Badge"], ["id", "Path-2"], ["id", "mobile-filter", "fill", "black", "fill-opacity", "1", "filter", "url(#filter-2)", 0, "xlink", "href", "#path-1"], ["id", "BadgeFill", "fill-rule", "evenodd", 0, "xlink", "href", "#path-1"], ["id", "w3", "ds-heading-4", "", 1, "masthead-svg__text"], ["x", "21", "y", "40.85"], [1, "header"], [1, "ds-row", "ds-shadow-floating", "ds-margin-bottom-0"], [1, "ds-col-8", "ds-padding-top-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-margin-bottom-0"], [1, "ds-button", "ds-flat", "ds-bg-neutral-5", "ds-padding-left-2", "ds-padding-right-2", 2, "cursor", "default", 3, "routerLink", "click"], ["href", "https://w3.ibm.com/w3publisher/global-voice-services/about-gvs/data-privacy", "target", "_blank", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "click"], ["routerLinkActive", "active", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "routerLink", "queryParams", "click"], ["href", "https://w3.ibm.com/help/#/article/telephony_gvi_spoe/overview", "target", "_blank", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "click"], ["routerLinkActive", "active", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "routerLink", "click"], ["id", "countryDropdown", 1, "dropdown"], [1, "dropbtn", 3, "click"], ["id", "countrydropdown", 1, "dropdown-content"], ["type", "text", "id", "myInput", "aria-describedby", "search-text", "placeholder", "Search..", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "routerLinkActive", "queryParams", "click"]], template: function UitoplinksComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UitoplinksComponent_div_45_Template, 3, 8, "div", 30);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_5__["DropdownsearchPipe"]], styles: [".dropbtn[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    font-size: 16px;\r\n    font-weight: 410;\r\n    font-family: IBMPlexSans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    width: 215px;\r\n    color: black;\r\n    padding: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    \r\n    background-position: 14px 12px;\r\n    background-repeat: no-repeat;\r\n    font-size: 16px;\r\n    padding: 14px 20px 12px 45px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 230px;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n    border-right: 6px solid #ddd;\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #038AD8;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpdG9wbGlua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNFQUFzRTtJQUN0RSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7SUFDN0MsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InVpdG9wbGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQxMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJQk1QbGV4U2FucywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMjE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGJ0bjpob3ZlcixcclxuLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNteUlucHV0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NlYXJjaGljb24ucG5nJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4IDEycHggNDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuLyogI215SW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNkZGQ7XHJcbn0gKi9cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzOEFEODtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UitoplinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uitoplinks',
                templateUrl: './uitoplinks.component.html',
                styleUrls: ['./uitoplinks.component.css'],
                host: { '(document:click)': 'onClick($event)' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }]; }, null); })();


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
const _c1 = function (a0) { return { country: a0 }; };
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r1.pcode));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r2.pcode));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r3.pcode));
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
            console.log("navigation component" + this.pcode);
        });
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