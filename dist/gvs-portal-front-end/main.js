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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function JabberservicesComponent_div_8_br_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
const _c0 = function () { return ["/employeesearch"]; };
const _c1 = function (a0) { return { country: a0, service: "jabber_update" }; };
function JabberservicesComponent_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update an existing service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r2.pcode));
} }
function JabberservicesComponent_div_8_br_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
const _c2 = function (a0) { return { country: a0, service: "jabber_move" }; };
function JabberservicesComponent_div_8_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Move an existing service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx_r4.pcode));
} }
function JabberservicesComponent_div_8_br_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
const _c3 = function (a0) { return { country: a0, service: "jabber_delete" }; };
function JabberservicesComponent_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete an existing service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r6.pcode));
} }
function JabberservicesComponent_div_8_br_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
const _c4 = function (a0) { return { country: a0, service: "jabber_new" }; };
function JabberservicesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Request a new service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JabberservicesComponent_div_8_br_13_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JabberservicesComponent_div_8_div_14_Template, 12, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, JabberservicesComponent_div_8_br_15_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JabberservicesComponent_div_8_div_16_Template, 12, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JabberservicesComponent_div_8_br_17_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, JabberservicesComponent_div_8_div_18_Template, 12, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JabberservicesComponent_div_8_br_19_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, ctx_r0.pcode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("new"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("update"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("move"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("move"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.linkv.includes("delete"));
} }
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
            this.countrydetails = sessionStorage.getItem('countrydetails');
            this.countrydetails = JSON.parse(this.countrydetails);
            this.linkv = this.countrydetails.jservices;
            console.log(this.countrydetails.jservices);
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
            if (sessionStorage.getItem('radioAction') === null) {
            }
            else {
                sessionStorage.setItem('radioAction', 'myself');
                sessionStorage.setItem('empserial', '');
            }
        });
    }
}
JabberservicesComponent.ɵfac = function JabberservicesComponent_Factory(t) { return new (t || JabberservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
JabberservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JabberservicesComponent, selectors: [["app-jabberservices"]], decls: 9, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "lead-in"], ["class", "ds-col-12", 4, "ngIf"], [1, "ds-col-12"], [1, "ds-panel"], [1, "ds-panel-container"], [2, "text-decoration", "none", 3, "routerLink", "queryParams"], ["src", "././assets/arr.png"], [1, "ds-text-blue-6", "ds-pad-l-1"], [4, "ngIf"], ["class", "ds-panel", 4, "ngIf"], [1, "ds-padding-left-1", "ds-text-blue-6", "ds-pad-l-1"]], template: function JabberservicesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JabberservicesComponent_div_8_Template, 20, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.linkv.includes("new"));
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWJiZXJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
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
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_1_Template_span_mouseenter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeClass1 = true; })("mouseout", function StepsComponent_span_1_Template_span_mouseout_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeClass1 = false; });
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
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_2_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changeClass2 = true; })("mouseout", function StepsComponent_span_2_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeClass2 = false; });
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
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_3_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeClass2 = true; })("mouseout", function StepsComponent_span_3_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeClass2 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_3_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.sendToEntryDetails(); });
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
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_4_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeClass2 = true; })("mouseout", function StepsComponent_span_4_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changeClass2 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_4_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.sendToEntryDetails(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.step === 2 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.changeClass2 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.step === 1 || ctx_r3.step === 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.step === 2 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.servicesData[6].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.servicesData[6].tooltip);
} }
function StepsComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_5_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeClass2 = true; })("mouseout", function StepsComponent_span_5_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.changeClass2 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_5_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.sendToEntryDetails(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.step === 2 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.changeClass2 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.step === 1 || ctx_r4.step === 2 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.step === 2 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.servicesData[8].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.servicesData[8].tooltip);
} }
function StepsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_6_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.changeClass3 = true; })("mouseout", function StepsComponent_span_6_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.changeClass3 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_6_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.sendToEntryDetails(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.step === 3 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.changeClass3 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r5.step === 1 || ctx_r5.step === 2 || ctx_r5.step === 3 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.step === 3 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.servicesData[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.servicesData[3].tooltip);
} }
const _c3 = function () { return ["/entrydetails"]; };
function StepsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_7_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.changeClass3 = true; })("mouseout", function StepsComponent_span_7_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.changeClass3 = false; });
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
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.step === 3 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.changeClass3 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r6.step === 1 || ctx_r6.step === 2 || ctx_r6.step === 3 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx_r6.pcode, ctx_r6.service))("ngClass", ctx_r6.step === 3 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.servicesData[4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.servicesData[4].tooltip);
} }
function StepsComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_8_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.changeClass3 = true; })("mouseout", function StepsComponent_span_8_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.changeClass3 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_8_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.sendToEntryDetails(); });
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
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.step === 3 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.changeClass3 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r7.step === 1 || ctx_r7.step === 2 || ctx_r7.step === 3 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.step === 3 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.servicesData[7].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.servicesData[7].tooltip);
} }
function StepsComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_9_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.changeClass3 = true; })("mouseout", function StepsComponent_span_9_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.changeClass3 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepsComponent_span_9_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.sendToEntryDetails(); });
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
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.step === 3 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.changeClass3 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r8.step === 1 || ctx_r8.step === 2 || ctx_r8.step === 3 ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.step === 3 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.servicesData[9].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.servicesData[9].tooltip);
} }
function StepsComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "----->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function StepsComponent_span_10_Template_span_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.changeClass4 = true; })("mouseout", function StepsComponent_span_10_Template_span_mouseout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.changeClass4 = false; });
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
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.step === 4 ? "ds-pad-l-r-1 ds-text-contextual-green-3" : "ds-pad-l-r-1 ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.changeClass4 ? "ds-tooltip ds-hover ds-text-align-center ds-open" : "ds-tooltip ds-hover ds-text-align-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.step === 4 ? "ds-tooltip-trigger ds-text-contextual-green-3" : "ds-tooltip-trigger ds-text-contextual-blue-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.servicesData[5].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.servicesData[5].tooltip);
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
                        { "name": "STEP 4", "tooltip": "Review Details" },
                        { "name": "STEP 2", "tooltip": "Employee Resources Details" },
                        { "name": "STEP 3", "tooltip": "Employee Resources Details" },
                        { "name": "STEP 2", "tooltip": "Employee Requests Details" },
                        { "name": "STEP 3", "tooltip": "Employee Requests Details" },
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
        if (this.service !== 'jabber_new' && this.step === 3 && this.isWarning === true) {
            this.isWarning2 = true;
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
StepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepsComponent, selectors: [["app-steps"]], inputs: { step: "step", isSelf: "isSelf", onChange: ["hideSteps", "onChange"] }, outputs: { previousStep: "previousStep" }, decls: 11, vars: 10, consts: [[1, "ds-panel-row"], [4, "ngIf"], ["id", "tooltip-demo1", 3, "ngClass"], [3, "mouseenter", "mouseout"], ["aria-label", "help", "tabindex", "0", 3, "routerLink", "queryParams", "ngClass"], ["id", "tooltip-demo1-content", "role", "tooltip", 1, "ds-tooltip-content", "ds-text-neutral-7"], [3, "ngClass"], ["aria-label", "help", "tabindex", "0", 3, "ngClass", "click"], ["aria-label", "help", "tabindex", "0", 3, "ngClass"]], template: function StepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepsComponent_span_1_Template, 8, 12, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepsComponent_span_2_Template, 11, 13, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepsComponent_span_3_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepsComponent_span_4_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepsComponent_span_5_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StepsComponent_span_6_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StepsComponent_span_7_Template, 11, 13, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StepsComponent_span_8_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StepsComponent_span_9_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StepsComponent_span_10_Template, 11, 7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSelf && !ctx.isWarning1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service !== "resources" && ctx.service !== "requests" && ctx.isSelf && !ctx.isWarning1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service === "resources" && ctx.isSelf && !ctx.isWarning1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service === "requests" && ctx.isSelf && !ctx.isWarning1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service !== "resources" && ctx.service !== "requests" && !ctx.isSelf && !ctx.isWarning2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service !== "resources" && ctx.service !== "requests" && ctx.isSelf && !ctx.isWarning2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service === "resources" && !ctx.isSelf && !ctx.isWarning2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service === "requests" && !ctx.isSelf && !ctx.isWarning2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service !== "resources" && ctx.service !== "requests" && !ctx.isSelf && !ctx.isWarning3);
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

/***/ "5V17":
/*!*******************************************************!*\
  !*** ./src/app/_services/translate-config.service.ts ***!
  \*******************************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TranslateConfigService {
    constructor(translateservice) {
        this.translateservice = translateservice;
        this.translateservice.use('en');
    }
    changeLanguage(type) {
        this.translateservice.use(type);
    }
}
TranslateConfigService.ɵfac = function TranslateConfigService_Factory(t) { return new (t || TranslateConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslateConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateConfigService, factory: TranslateConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


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

/***/ "8sw4":
/*!***********************************************************************!*\
  !*** ./src/app/components/voip-in-update/voip-in-update.component.ts ***!
  \***********************************************************************/
/*! exports provided: VoipInUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipInUpdateComponent", function() { return VoipInUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_db2_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/db2.service */ "qtc7");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");













function VoipInUpdateComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fields marked with an asterisk (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") are required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInUpdateComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There is no Jabber for this serial number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInUpdateComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The serial number that you have entered has already one Update Jabber request is in progress and request number is ", ctx_r3.identifier, ".");
} }
function VoipInUpdateComponent_table_18_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_itn_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_itn_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_itn_r12, "");
} }
function VoipInUpdateComponent_table_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Select Jabber Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipInUpdateComponent_table_18_Template_select_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.SelectedJabber(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VoipInUpdateComponent_table_18_option_14_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Charge Department Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.Jabber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.hideChargeDept);
} }
function VoipInUpdateComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInUpdateComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request submission is in progress.Do not Go back or Refresh the page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInUpdateComponent_input_60_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInUpdateComponent_input_60_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInUpdateComponent_input_62_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInUpdateComponent_input_62_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VoipInUpdateComponent {
    constructor(router, cookie, cloudantservice, location, Db2Service, servicenowservice, route) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.location = location;
        this.Db2Service = Db2Service;
        this.servicenowservice = servicenowservice;
        this.route = route;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.Jabber = [];
        this.itns = [];
        this.selected = true;
        this.hideChargeDept = true;
        this.isReviewForm = true;
        this.isEntryForm = false;
        this.fixedPhoneIdentifier = false;
        this.employeeSerial = '';
        this.service = '';
        this.hideSteps = false;
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.warninginfo = false;
        this.warninginfosnow = false;
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_Update"]();
    }
    SelectedJabber(jabber) {
        if (jabber != "") {
            this.hideChargeDept = false;
        }
        else {
            this.hideChargeDept = true;
        }
    }
    EntryDetails(formData) {
        if (formData.value.Jabber_1.toUpperCase() == 'SELECT ONE' || formData.value.Jabber_1 == '') {
            alert('Please select the jabber number to update');
            return;
        }
        if (formData.value.Charge_Dept.toUpperCase() == 'NA') {
            alert('No value is changed, so Update request is not required');
            return;
        }
        this.jabberDisp = formData.value.Jabber_1;
        this.chargeDisp = formData.value.Charge_Dept;
        this.isReviewForm = false;
        this.isEntryForm = true;
    }
    // Submit to Snow Jabber new code added by Swarnava ends	
    backClick() {
        sessionStorage.setItem('backbutton', 'yes');
        sessionStorage.setItem('step', 'step1');
        this.location.back();
    }
    BackButton() {
        this.isReviewForm = true;
        this.isEntryForm = false;
    }
    submit_snow() {
        this.reqno = this.countrydetails.isocode + "-US-" + this.cnum.substr(0, 6) + "-" + gettime();
        sessionStorage.setItem('reqno', this.reqno);
        this.isButtonVisible = false;
        this.isSpinnerVisible = true;
        this.payload.orinator_payload = this.orgi;
        this.payload.cNum_payload = this.cnum;
        // fields picked up from form -- begins	
        this.payload.Projectid_Disp = '';
        // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
        this.payload.Department_number_Disp = this.chargeDisp;
        this.payload.accid_Disp = '';
        this.payload.Identifier_Selected = this.jabberDisp;
        this.payload.updated_for = '';
        this.payload.ReqNo = this.reqno;
        // fields to be picked up from form -- ends	
        this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
        this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
        this.payload.countryname = this.countrydetails.name;
        this.payload.request_type = 'jabber_update';
        this.payload.evolution_instance = this.countrydetails.evolution_instance;
        this.servicenowservice.submit_request_update(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        });
    }
    ngOnInit() {
        // Submit to Snow Jabber Update code
        this.cnum = sessionStorage.getItem('cnum');
        this.orgi = this.cookie.getCookie('ccode');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.sessionwarninginfo = sessionStorage.getItem('warninginfo');
        this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow');
        if (this.sessionwarninginfo == 'false1') {
            this.warninginfo = true;
        }
        else if (this.sessionwarninginfosnow == 'true1') {
            this.warninginfosnow = true;
            this.identifier = sessionStorage.getItem('identifier');
        }
        else {
            this.identifier = sessionStorage.getItem('identifier');
            this.identifier = this.identifier.split(',');
            this.Jabber = [...this.identifier];
        }
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
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
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 3,
                }
            ]
        };
        this.reqFor = sessionStorage.getItem('radioAction');
        this.servicesData = servicesData.data[0];
        if (this.warninginfo || this.warninginfosnow) {
            this.hideSteps = true;
        }
        else {
            this.hideSteps = false;
        }
    }
    previousStep(event) {
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.fixedPhoneIdentifier = false;
    }
}
VoipInUpdateComponent.ɵfac = function VoipInUpdateComponent_Factory(t) { return new (t || VoipInUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_6__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_7__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
VoipInUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInUpdateComponent, selectors: [["app-voip-in-update"]], decls: 63, vars: 19, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [4, "ngIf"], [3, "step", "isSelf", "hideSteps"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "b1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat_del", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0", 4, "ngIf"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "tabindex", "32765", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["class", "ds-pad-l-1 ds-pad-r-1", "id", "button2", 4, "ngIf"], [3, "hidden"], [3, "step", "isSelf", "hideSteps", "previousStep"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "54%", "height", "10"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "tabindex", "32765", "value", "Back", 3, "click", 4, "ngIf"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "tabindex", "32767", "value", "Next", 3, "click", 4, "ngIf"], [1, "ds-text-contextual-red-2"], ["id", "b1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["id", "req_stat_del", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [2, "font-size", "1rem"], ["target", "_blank", "href", "https://ibm-cio.slack.com/archives/C0133EDUGVB", 2, "color", "blue"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Jabber_1", "cols", "40", "id", "LocationId", "title", "Select the Jabber number you wish to update", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["number", ""], ["value", ""], ["name", "Jabber_1", "selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["valign", "top", 3, "hidden"], [1, "ds-input-container"], ["name", "Charge_Dept", "value", "NA", "tabindex", "3", "id", "ch", "title", "Contact FirstLine Manager for Charge Department Code", "ngModel", "NA", 1, "ds-input", 2, "width", "300px !important"], ["name", "Jabber_1", "selected", "", 3, "value"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"]], template: function VoipInUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipInUpdateComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.EntryDetails(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update Jabber Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VoipInUpdateComponent_label_11_Template, 5, 0, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-steps", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VoipInUpdateComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VoipInUpdateComponent_div_17_Template, 12, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VoipInUpdateComponent_table_18_Template, 24, 2, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInUpdateComponent_Template_input_click_25_listener() { return ctx.backClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VoipInUpdateComponent_span_26_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 20, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Update Jabber Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "app-steps", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipInUpdateComponent_Template_app_steps_previousStep_34_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Jabber Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, VoipInUpdateComponent_div_55_Template, 4, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, VoipInUpdateComponent_input_60_Template, 1, 0, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, VoipInUpdateComponent_input_62_Template, 1, 0, "input", 30);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor)("hideSteps", ctx.hideSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfosnow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false && ctx.warninginfosnow == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false && ctx.warninginfosnow == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isReviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step + 1)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jabberDisp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chargeDisp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_11__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtaW4tdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWluLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipInUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-in-update',
                templateUrl: './voip-in-update.component.html',
                styleUrls: ['./voip-in-update.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _services_db2_service__WEBPACK_IMPORTED_MODULE_6__["Db2Service"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_7__["servicenowservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();
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
        this.servicenowservice.submit_request(this.payload).subscribe(data => {
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
        });
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

/***/ "Hq2D":
/*!*****************************************************************!*\
  !*** ./src/app/components/voip-la-new/voip-la-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: VoipLaNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipLaNewComponent", function() { return VoipLaNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function VoipLaNewComponent_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r2, "");
} }
class VoipLaNewComponent {
    constructor() {
        this.location = ["Select Office Location", "Belo Horizonte", "Curitiba", "Fortaleza", "Hortolandia"];
    }
    entryDetailsLA(formData) {
        if (formData.value.Location.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location == '') {
            alert('Please select the Office Location');
            return;
        }
    }
    ngOnInit() {
    }
}
VoipLaNewComponent.ɵfac = function VoipLaNewComponent_Factory(t) { return new (t || VoipLaNewComponent)(); };
VoipLaNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipLaNewComponent, selectors: [["app-voip-la-new"]], decls: 93, vars: 1, consts: [[1, "ds-col-sm-2", "ds-col-md-7", "ds-padding-left-1_5"], [3, "submit"], ["formData", "ngForm"], [1, "ds-padding-top-0_5", "ds-padding-bottom-1"], [1, "ds-text-contextual-red-2"], [1, "ds-panel", "ds-col-12"], [1, "ds-col-12", "ds-pad-t-0_5"], [1, "ds-row"], [1, "ds-col-12"], [1, "tooltip"], [1, "ds-text-contextual-blue-5", "ds-pad-r-0_5", "ds-pad-l-1"], [1, "tooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], [1, "ds-pad-r-1"], [1, "newtooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], [1, "ds-text-contextual-green-3", "ds-pad-r-0_5", "ds-pad-l-1"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["id", "t1", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "3", "width", "540"], ["id", "p9"], ["width", "349"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "160"], ["role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["name", "%%Surrogate_Location", "type", "hidden", "value", "1"], ["name", "Location", "rows", "2", "cols", "40", "id", "LocationId", "title", "Location", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important"], ["name", "Location", 3, "value", 4, "ngFor", "ngForOf"], [1, "ds-text-capitalize"], ["for", "COSId"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], ["name", "Location", 3, "value"]], template: function VoipLaNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipLaNewComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.entryDetailsLA(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ") are required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Employee Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "STEP 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "STEP 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Jabber Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, VoipLaNewComponent_option_65_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Voicemail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Class of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "National ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.location);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtbGEtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWxhLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipLaNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-la-new',
                templateUrl: './voip-la-new.component.html',
                styleUrls: ['./voip-la-new.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");












function VoipInDeleteComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There is no Jabber for this serial number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInDeleteComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The serial number that you have entered has already one delete Jabber request is in progress and request number is ", ctx_r2.identifier, ".");
} }
function VoipInDeleteComponent_table_17_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_itn_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_itn_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_itn_r11, "");
} }
function VoipInDeleteComponent_table_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Jabber Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Jabber Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VoipInDeleteComponent_table_17_option_13_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.Jabber);
} }
function VoipInDeleteComponent_input_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
} }
function VoipInDeleteComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! Some thing went worng.Please try again latter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInDeleteComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request submission is in progress.Do not Go back or Refresh the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInDeleteComponent_input_52_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInDeleteComponent_input_52_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInDeleteComponent_span_53_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInDeleteComponent_span_53_input_1_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInDeleteComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoipInDeleteComponent_span_53_input_1_Template, 1, 0, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isButtonVisible && !ctx_r8.errorinfo);
} }
const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0, a1) { return { country: a0, service: a1 }; };
function VoipInDeleteComponent_input_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 51);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r9.pcode, ctx_r9.service));
} }
class VoipInDeleteComponent {
    constructor(router, route, cookie, cloudantservice, location, servicenowservice) {
        this.router = router;
        this.route = route;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.location = location;
        this.servicenowservice = servicenowservice;
        this.ccode = '';
        this.cloudantData = [];
        this.servicesData = [];
        this.Jabber = [];
        this.selected = true;
        this.isReviewForm = true;
        this.isEntryForm = false;
        this.fixedPhoneIdentifier = false;
        this.hideSteps = false;
        this.isButtonVisible = true;
        this.errorinfo = false;
        this.isSpinnerVisible = false;
        this.warninginfo = false;
        this.warninginfosnow = false;
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_Delete"]();
        if (this.Jabber[0] == 'Select One') {
            this.selected = true;
        }
    }
    backClick() {
        sessionStorage.setItem('backbutton', 'yes');
        sessionStorage.setItem('step', 'step1');
        this.location.back();
    }
    BackButton() {
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.fixedPhoneIdentifier = false;
    }
    entryDetails(formData) {
        if (formData.value.Jabber_1.toUpperCase() == 'SELECT JABBER NUMBER' || formData.value.Jabber_1 == '') {
            alert('Please select the Jabber Number');
            return;
        }
        this.selectedJabber = formData.value.Jabber_1;
        this.isReviewForm = false;
        this.isEntryForm = true;
    }
    submit_snow() {
        this.reqno = this.countrydetails.isocode + "-DS-" + this.cnum.substr(0, 6) + "-" + gettime();
        sessionStorage.setItem('reqno', this.reqno);
        this.isButtonVisible = false;
        this.isSpinnerVisible = true;
        this.payload.orinator_payload = this.orgi;
        this.payload.cNum_payload = this.cnum;
        this.payload.site_address = '';
        //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
        this.payload.ReqNo = this.reqno;
        // fields to be picked up from form -- ends	
        this.payload.Identifier_Disp = this.selectedJabber;
        this.payload.countryname = this.countrydetails.name;
        this.payload.request_type = 'jabber_delete';
        this.payload.evolution_instance = this.countrydetails.evolution_instance;
        this.payload.country_code = this.countrydetails.code;
        // console.log('Payload');	
        // console.log(this.payload);	
        this.servicenowservice.submit_request_delete(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        }, (error) => {
            console.error('error caught in component' + error);
            this.isSpinnerVisible = false;
            this.errorinfo = true;
            this.isButtonVisible = true;
        });
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
        });
        // Submit to Snow Jabber new code added by Swarnava	
        this.orgi = this.cookie.getCookie('ccode');
        this.cnum = sessionStorage.getItem('cnum');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        // Submit to Snow Jabber new code added by Swarnava ends	
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.sessionwarninginfo = sessionStorage.getItem('warninginfo');
        this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow');
        if (this.sessionwarninginfo == 'false1') {
            this.warninginfo = true;
        }
        else if (this.sessionwarninginfosnow == 'true1') {
            this.warninginfosnow = true;
            this.identifier = sessionStorage.getItem('identifier');
        }
        else {
            this.identifier = sessionStorage.getItem('identifier');
            this.identifier = this.identifier.split(',');
            this.Jabber = [...this.identifier];
            //this.Jabber.push(this.identifier)
        }
        const servicesData = {
            "data": [
                {
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 3,
                }
            ]
        };
        this.servicesData = servicesData.data[0];
        this.reqFor = sessionStorage.getItem('radioAction');
        if (this.warninginfo || this.warninginfosnow) {
            this.hideSteps = true;
        }
        else {
            this.hideSteps = false;
        }
    }
    previousStep(event) {
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.fixedPhoneIdentifier = false;
    }
}
VoipInDeleteComponent.ɵfac = function VoipInDeleteComponent_Factory(t) { return new (t || VoipInDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__["servicenowservice"])); };
VoipInDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInDeleteComponent, selectors: [["app-voip-in-delete"]], decls: 55, vars: 19, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [3, "step", "isSelf", "hideSteps", "previousStep"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "b1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat_del", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0", 4, "ngIf"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "tabindex", "32765", "value", "BACK", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "tabindex", "32767", "value", "NEXT", 4, "ngIf"], [3, "hidden"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "43%"], ["width", "57%"], [1, "ds-margin-bottom-2"], ["class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "tabindex", "32765", "value", "BACK", 3, "click", 4, "ngIf"], ["class", "ds-pad-l-1 ds-pad-r-1", "id", "button2", 4, "ngIf"], ["type", "button", "name", "exit", "type", "button", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "EXIT REQUEST", 3, "routerLink", "queryParams", 4, "ngIf"], ["id", "b1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["id", "req_stat_del", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [2, "font-size", "1rem"], ["target", "_blank", "href", "https://ibm-cio.slack.com/archives/C0133EDUGVB", 2, "color", "blue"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], [1, "ds-text-contextual-red-2"], ["width", "54%", "height", "10"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Jabber_1", "cols", "40", "id", "LocationId", "title", "Select the Jabber number you wish to update", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase"], ["value", ""], ["name", "Jabber_1", "selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["name", "Jabber_1", "selected", "", 3, "value"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "NEXT", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "submit", "name", "next", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "tabindex", "32767", "value", "SUBMIT", 3, "click", 4, "ngIf"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "SUBMIT", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "button", "name", "exit", "type", "button", "value", "EXIT REQUEST", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "routerLink", "queryParams"]], template: function VoipInDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipInDeleteComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetails(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete Jabber Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-steps", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipInDeleteComponent_Template_app_steps_previousStep_12_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VoipInDeleteComponent_div_15_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VoipInDeleteComponent_div_16_Template, 12, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VoipInDeleteComponent_table_17_Template, 14, 1, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInDeleteComponent_Template_input_click_24_listener() { return ctx.backClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VoipInDeleteComponent_input_26_Template, 1, 0, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete Jabber Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-steps", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipInDeleteComponent_Template_app_steps_previousStep_33_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Jabber Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, VoipInDeleteComponent_div_45_Template, 5, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, VoipInDeleteComponent_div_47_Template, 4, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, VoipInDeleteComponent_input_52_Template, 1, 0, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, VoipInDeleteComponent_span_53_Template, 2, 1, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, VoipInDeleteComponent_input_54_Template, 1, 6, "input", 30);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor)("hideSteps", ctx.hideSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfosnow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false && ctx.warninginfosnow == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false && ctx.warninginfosnow == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isReviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step + 1)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedJabber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible && !ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorinfo);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtaW4tZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWluLWRlbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipInDeleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-in-delete',
                templateUrl: './voip-in-delete.component.html',
                styleUrls: ['./voip-in-delete.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_6__["servicenowservice"] }]; }, null); })();
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

/***/ "Jjrs":
/*!*******************************************************************!*\
  !*** ./src/app/components/voip-au-move/voip-au-move.component.ts ***!
  \*******************************************************************/
/*! exports provided: VoipAuMoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipAuMoveComponent", function() { return VoipAuMoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function VoipAuMoveComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jab_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jab_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jab_r7);
} }
function VoipAuMoveComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", loc_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loc_r8);
} }
function VoipAuMoveComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request submission is in progress.Do not Go back or Refresh the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipAuMoveComponent_input_91_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipAuMoveComponent_input_91_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipAuMoveComponent_input_93_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipAuMoveComponent_input_93_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VoipAuMoveComponent {
    constructor(router, route, servicenowservice) {
        this.router = router;
        this.route = route;
        this.servicenowservice = servicenowservice;
        this.jabberNumber = [78979812, 79870945];
        this.locations = ['Australian Capital Territory - Canberra', 'New South Wales - Baulkham Hill Data Centre'];
        this.servicesData = [];
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.loc_sel = "Select Location";
        this.set_value = "Location";
        this.reviewDetailsIndia = {
            officeLocation: "",
            Identifier_Selected: "",
            Location_Selected: "",
            reqno: ""
        };
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_New"]();
    }
    getjabberNumberVal(jabberNumberVal) {
        //this.loc_sel = "Location";
    }
    entryDetailsMove(formData) {
        if (formData.value.Identifier_Selected == '') {
            alert('Please select a Jabber number');
            return;
        }
        if (formData.value.Location_Selected.toUpperCase() == 'SELECT LOCATION') {
            alert('Please select a Location');
            return;
        }
        this.isEntryForm = true;
        this.isReviewForm = false;
        this.reviewDetailsIndia.Identifier_Selected = formData.value.Identifier_Selected;
        this.reviewDetailsIndia.Location_Selected = formData.value.Location_Selected;
    }
    previousStep(event) {
        this.isEntryForm = false;
        this.isReviewForm = true;
    }
    BackButton() {
        this.isEntryForm = false;
        this.isReviewForm = true;
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
        this.payload.Buildings_Disp = this.reviewDetailsIndia.Identifier_Selected;
        // by default set to true. below line can be removed if needed.	
        //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
        this.payload.ReqNo = this.reqno;
        // fields to be picked up from form -- ends	
        this.payload.level1_japproval = this.countrydetails.level1_japproval;
        this.payload.level2_japproval = this.countrydetails.level2_japproval;
        this.payload.SLA_type = this.countrydetails.SLA_type;
        this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
        this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
        this.payload.countryname = this.countrydetails.name;
        this.payload.request_type = 'jabber_move';
        this.payload.evolution_instance = this.countrydetails.evolution_instance;
        this.payload.qag = this.countrydetails.qag;
        this.payload.class_of_serice = this.countrydetails.class_of_serice;
        this.payload.country_code = this.countrydetails.code;
        this.payload.default_call_permission = this.countrydetails.default_call_permission;
        // console.log('Payload');	
        // console.log(this.payload);	
        this.servicenowservice.submit_request(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        });
    }
    ngOnInit() {
        const servicesData = {
            "data": [
                {
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 3,
                }
            ]
        };
        this.reqFor = sessionStorage.getItem('radioAction');
        this.servicesData = servicesData.data[0];
    }
}
VoipAuMoveComponent.ɵfac = function VoipAuMoveComponent_Factory(t) { return new (t || VoipAuMoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_3__["servicenowservice"])); };
VoipAuMoveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipAuMoveComponent, selectors: [["app-voip-au-move"]], decls: 94, vars: 15, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [3, "step", "isSelf", "hideSteps"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%"], ["for", "IdentifierId", 1, "ds-text-capitalize"], ["width", "54%", "height", "10"], ["role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["ngModel", "", "name", "Identifier_Selected", "id", "IdentifierId", "title", "Extension Number", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["jabberNumberVal", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "Location_Selected", "id", "LocationId", "title", "Location", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], ["value", "Select Location"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [3, "hidden"], [3, "step", "isSelf", "hideSteps", "previousStep"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "addId1"], ["width", "54%"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Back", 3, "click", 4, "ngIf"], ["type", "submit", "name", "submit", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Submit", 3, "click", 4, "ngIf"], [3, "value"], [3, "ngValue"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "submit", "name", "submit", "value", "Submit", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"]], template: function VoipAuMoveComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipAuMoveComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetailsMove(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Move an existing Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with an asterisk (");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Jabber Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipAuMoveComponent_Template_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.getjabberNumberVal(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select Jabber Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VoipAuMoveComponent_option_33_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Location Moving To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipAuMoveComponent_Template_select_ngModelChange_42_listener($event) { return ctx.loc_sel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, VoipAuMoveComponent_option_45_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Please note that a new number will be assigned to you in the new location. You will no longer have your existing number. Click Next if you want to continue or Back to make any changes or Close the window to Exit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Move an existing Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "app-steps", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipAuMoveComponent_Template_app_steps_previousStep_66_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Jabber Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Jabber Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Location Moving To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, VoipAuMoveComponent_div_86_Template, 4, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, VoipAuMoveComponent_input_91_Template, 1, 0, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, VoipAuMoveComponent_input_93_Template, 1, 0, "input", 40);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isEntryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jabberNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loc_sel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isReviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step + 1)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.Identifier_Selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.Location_Selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_7__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2lwLWF1LW1vdmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipAuMoveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-au-move',
                templateUrl: './voip-au-move.component.html',
                styleUrls: ['./voip-au-move.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_3__["servicenowservice"] }]; }, null); })();
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

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/translate-config.service */ "5V17");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class FooterComponent {
    constructor(translateconfigservice) {
        this.translateconfigservice = translateconfigservice;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "ds-row", "ds-bg-dark", "ds-padding-top-5", 2, "background-image", "url(././assets/footer.png)", "background-position", "center", "background-size", "cover", "background-repeat", "no-repeat"], [1, "ds-col-xs-10", "ds-offset-xs-3", "ds-mar-t-3", "ds-col-lg-8", "ds-offset-lg-2", "ds-col-xl-6", "ds-offset-xl-3", "ds-text-align-center", "ds-shadow-text"], ["translate", ""], ["translate", "", 1, "ds-margin-bottom-5"], ["href", "https://w3.ibm.com/help/#/article/telephony_gvi_spoe/overview", "target", "_blank", 1, "ds-text-neutral-1"], ["translate", "", 1, "ds-caption"], [1, "ds-col-xs-10", "ds-offset-xs-1", "ds-col-md-4", "ds-offset-lg-2", "ds-col-xl-2", "ds-offset-xl-3", "ds-align-text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " footer.aditional-question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " footer.please consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help@IBM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "footer.consult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _services_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"] }]; }, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BluePages record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " before continuing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employee Entry Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Serial Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Job Responsibility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Business Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.sno);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The serial number that you have entered is not eligible to request more than one Jabber account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help related to Jabber configuration can be found at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Help@IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " For any further assistance, please contact ' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 45);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);
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
function EmployeeinfoComponent_div_2_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("The serial number that you have entered has already one ", ctx_r7.page, " request is in progress and request number is ", ctx_r7.identifier1, ".");
} }
function EmployeeinfoComponent_div_2_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No outstanding requests were found for the serial number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There are no resources for this serial number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There is no Jabber for this serial number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_div_2_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeinfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navigation", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmployeeinfoComponent_div_2_p_7_Template, 5, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-steps", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployeeinfoComponent_div_2_h2_10_Template, 2, 0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmployeeinfoComponent_div_2_h2_11_Template, 2, 0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmployeeinfoComponent_div_2_table_12_Template, 58, 7, "table", 11);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EmployeeinfoComponent_div_2_div_45_Template, 12, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EmployeeinfoComponent_div_2_div_46_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EmployeeinfoComponent_div_2_div_47_Template, 4, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EmployeeinfoComponent_div_2_div_48_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeinfoComponent_div_2_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.backClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "BACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EmployeeinfoComponent_div_2_button_55_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx_r0.servicesData)("cloudantData", ctx_r0.cloudantData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfo == false && ctx_r0.warninginfosnow == false);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfosnowothers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfosnowreq);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfosnowres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfoothers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.warninginfo == false && ctx_r0.warninginfosnow == false ? "ds-col-lg-2 ds-push-lg-8" : "ds-col-lg-2 ds-push-lg-10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfo == false && ctx_r0.warninginfosnow == false && ctx_r0.warninginfosnowreq == false && ctx_r0.warninginfosnowres == false && ctx_r0.warninginfoothers == false && ctx_r0.warninginfosnowothers == false);
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
        this.warninginfosnowreq = false;
        this.warninginfosnowres = false;
        this.warninginfoothers = false;
        this.warninginfosnowothers = false;
        this.selfinfo = false;
        this.isDataLoaded = false;
        this.hideSteps = false;
    }
    submit() {
        if (this.service == "requests" || this.service == "resources" || this.service == "approvalpending" || this.service == "revalidationpending") {
            this.navpage = '/' + this.service;
        }
        else {
            this.navpage = this.navpage;
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
            this.title = sessionStorage.getItem('title');
            this.navpage = sessionStorage.getItem('navpage');
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
            else if (this.sessionwarninginfosnow == 'false1' && this.service == "requests") {
                this.warninginfosnowreq = true;
                this.isDataLoaded = true;
            }
            else if (this.sessionwarninginfo == 'false1' && this.service == "resources") {
                this.warninginfosnowres = true;
                this.isDataLoaded = true;
            }
            else if (this.service == "jabber_delete" || this.service == "jabber_update" || this.service == "jabber_move") {
                console.log("deletes" + this.warninginfosnowothers);
                console.log("deletes" + sessionStorage.getItem('warninginfosnow'));
                console.log("deletes" + sessionStorage.getItem('warninginfo'));
                if (this.service == "jabber_delete") {
                    this.page = 'delete Jabber';
                }
                else if (this.service == "jabber_update") {
                    this.page = 'update Jabber';
                }
                else if (this.service == "jabber_move") {
                    this.page = 'move Jabber';
                }
                if (this.sessionwarninginfosnow == 'true1') {
                    this.identifier1 = sessionStorage.getItem('identifier1');
                    this.warninginfosnowothers = true;
                    this.isDataLoaded = true;
                }
                else if (this.sessionwarninginfo == 'false1') {
                    this.warninginfoothers = true;
                    this.isDataLoaded = true;
                }
            }
            // this.warninginfosnow = true
            this.isDataLoaded = true;
            //this.identifier=sessionStorage.getItem('identifier')
            this.employeeInfo1 = sessionStorage.getItem('employeeInfo');
            this.employeeInfo = JSON.parse(this.employeeInfo1);
            if (this.warninginfo || this.warninginfosnow || this.warninginfosnowres || this.warninginfosnowreq || this.warninginfosnowothers || this.warninginfoothers) {
                this.hideSteps = true;
            }
            else {
                this.hideSteps = false;
            }
        });
    }
}
EmployeeinfoComponent.ɵfac = function EmployeeinfoComponent_Factory(t) { return new (t || EmployeeinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_4__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_6__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
EmployeeinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeinfoComponent, selectors: [["app-employeeinfo"]], decls: 3, vars: 1, consts: [[1, "ds-panel", "ds-col-12"], ["class", "ds-row ds-pad-l-7 ds-pad-t-1 ds-pad-b-4", 4, "ngIf"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-t-0_5", "ds-pad-b-0_4"], [4, "ngIf"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps"], ["class", "ds-bg-neutral-2 ds-text-neutral-7 ds-pad-l-0_5 ", 4, "ngIf"], ["cellspacing", "0", "cellpadding", "0", "border", "0", 4, "ngIf"], ["id", "war11", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "war2", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], [2, "font-size", "1rem"], ["id", "war3", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "war4", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["target", "_blank", "href", "https://105.w3-969.ibm.com/tools/voice/SPOEProd.nsf/EntryPage?OpenForm&EMEA_Voice", 2, "color", "blue"], ["id", "err-dept1", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["target", "_blank", "href", "mailto:Ladislav.Kosar@sk.ibm.com", 2, "color", "blue"], ["id", "err-dept2", 1, "ds-col-xs-12", "ds-alert", "ds-warning", 2, "display", "none"], ["id", "w1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat_del", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "b1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], [1, "ds-hr-thick"], [1, "ds-row", "ds-grid", "ds-mar-t-b-3_5", "ds-pad-r-1"], [3, "ngClass"], [1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "click"], [1, "ds-col-lg-2", "ds-push-lg-8"], ["class", "ds-button ds-primary ds-pad-l-0 ds-pad-r-0 ds-text-align-center", "style", "width: 100%", 3, "click", 4, "ngIf"], ["href", "https://w3.ibm.com/bluepages/", "target", "_blank"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["width", "359"], ["for", "NameID"], ["for", "JobID"], ["for", "BUID"], ["for", "DeptID"], ["for", "EmpCountryID"], ["for", "EmailID"], ["id", "w1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["target", "_blank", "href", "https://w3.ibm.com/help/#/article/jabbernewuser", 2, "color", "blue"], ["target", "_blank", "href", "https://ibm-cio.slack.com/archives/C0133EDUGVB", 2, "color", "blue"], ["id", "req_stat", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["id", "req_stat_del", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["id", "b1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%", 3, "click"]], template: function EmployeeinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeinfoComponent_div_2_Template, 56, 18, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__["TopcountryframeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzRUFBc0U7O0FBRTFFIiwiZmlsZSI6ImVtcGxveWVlaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHMtdGV4dC1jb250ZXh0dWFsLWdyZWVuLTMge1xyXG4gICAgY29sb3I6ICMyN2FhN2MgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRzLXRleHQtY29udGV4dHVhbC1ibHVlLTUge1xyXG4gICAgY29sb3I6ICMwMzcwYjAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIklCTVBsZXhTYW5zXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn0iXX0= */"] });
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

/***/ "PmSy":
/*!*****************************************************************!*\
  !*** ./src/app/components/voip-au-new/voip-au-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: VoipAuNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipAuNewComponent", function() { return VoipAuNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function VoipAuNewComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r2, "");
} }
class VoipAuNewComponent {
    constructor() {
        this.location = ["Select Office Location", "Australian Capital Territory - Canberra", "New South Wales - Baulkham Hill Data Centre",
            "New South Wales - George Street", "New South Wales - IBM Centre"];
    }
    entryDetailsAU(formData) {
        if (formData.value.Location.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location == '') {
            alert('Please select the Office Location');
            return;
        }
    }
    ngOnInit() {
    }
}
VoipAuNewComponent.ɵfac = function VoipAuNewComponent_Factory(t) { return new (t || VoipAuNewComponent)(); };
VoipAuNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipAuNewComponent, selectors: [["app-voip-au-new"]], decls: 72, vars: 1, consts: [[1, "ds-col-sm-2", "ds-col-md-7", "ds-padding-left-1_5"], [3, "submit"], ["formData", "ngForm"], [1, "ds-padding-top-0_5", "ds-padding-bottom-1"], [1, "ds-text-contextual-red-2"], [1, "ds-panel", "ds-col-12"], [1, "ds-col-12", "ds-pad-t-0_5"], [1, "ds-row"], [1, "ds-col-12"], [1, "tooltip"], [1, "ds-text-contextual-blue-5", "ds-pad-r-0_5", "ds-pad-l-1"], [1, "tooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], [1, "ds-pad-r-1"], [1, "newtooltiptext", "ds-bg-blue-2", "ds-text-neutral-7"], [1, "ds-text-contextual-green-3", "ds-pad-r-0_5", "ds-pad-l-1"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["id", "t1"], ["width", "100%", "height", "10", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "47%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "53%", "height", "10"], ["role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["name", "%%Surrogate_Location", "type", "hidden", "value", "1"], ["name", "Location", "rows", "2", "cols", "40", "id", "LocationId", "title", "Location", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important"], ["name", "Location", 3, "value", 4, "ngFor", "ngForOf"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], ["name", "Location", 3, "value"]], template: function VoipAuNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipAuNewComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.entryDetailsAU(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ") are required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Employee Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "STEP 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "----->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "STEP 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Jabber Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, VoipAuNewComponent_option_61_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.location);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtYXUtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWF1LW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipAuNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-au-new',
                templateUrl: './voip-au-new.component.html',
                styleUrls: ['./voip-au-new.component.css']
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

/***/ "R5fI":
/*!*********************************************************************!*\
  !*** ./src/app/components/voip-emea-new/voip-emea-new.component.ts ***!
  \*********************************************************************/
/*! exports provided: VoipEmeaNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipEmeaNewComponent", function() { return VoipEmeaNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");












function VoipEmeaNewComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r6, "");
} }
function VoipEmeaNewComponent_input_82_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipEmeaNewComponent_input_82_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipEmeaNewComponent_input_84_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipEmeaNewComponent_input_84_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0, a1) { return { country: a0, service: a1 }; };
function VoipEmeaNewComponent_input_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 43);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r5.pcode, ctx_r5.service));
} }
class VoipEmeaNewComponent {
    constructor(router, cookie, cloudantservice, route, servicenowservice, location) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.servicenowservice = servicenowservice;
        this.location = location;
        this.payload = new config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_New"]();
        this.reviewDetailsEMEA = {
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
        // officeLocation = ["Select Location","Denmark", "Belgium"];
        this.ccode = '';
        this.officeLocation = "";
        this.selectedLocationEmea = "";
        this.cloudantData = [];
        this.servicesData = [];
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.errorinfo = false;
        this.isEntryFormEmea = false;
        this.isReviewFormEmea = true;
        this.hideProjectId = false;
        this.campA = [];
        this.camp = [];
        this.buildA = [];
        this.build = [];
        this.j = 0;
        this.hideBuilding = true;
    }
    entryDetailsEMEA(formData) {
        if (formData.value.Location.toUpperCase() == 'SELECT LOCATION' || formData.value.Location == '') {
            alert('Please select the Location');
            return;
        }
        this.selectedLocationEmea = formData.value.Location;
        this.isEntryFormEmea = true;
        this.isReviewFormEmea = false;
    }
    BackButton() {
        this.isEntryFormEmea = false;
        this.isReviewFormEmea = true;
    }
    backClick() {
        sessionStorage.setItem('backbutton', 'yes');
        sessionStorage.setItem('step', 'step1');
        this.location.back();
    }
    selectedLocation(loc) {
        this.build = [];
        this.campus = '';
        //alert("Location"+loc);
        if (loc != '') {
            // this.hideBuilding = false;	
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
    submit_snow() {
        this.reqno = this.countrydetails.isocode + "-NS-" + this.cnum.substr(0, 6) + "-" + gettime();
        sessionStorage.setItem('reqno', this.reqno);
        this.isButtonVisible = false;
        this.isSpinnerVisible = true;
        this.payload.orinator_payload = this.orgi;
        this.payload.cNum_payload = this.cnum;
        // fields picked up from form -- begins	
        this.payload.Buildings_Disp = this.reviewDetailsEMEA.campus;
        // by default set to true. below line can be removed if needed.	
        //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
        this.payload.Projectid_Disp = this.reviewDetailsEMEA.projectId;
        // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
        this.payload.identifier_hp_Disp = this.reviewDetailsEMEA.fixPhoneIdentifier;
        this.payload.BusinessUnit_Disp = this.reviewDetailsEMEA.businessUnit;
        this.payload.Department_number_Disp = this.reviewDetailsEMEA.chargeDepartmentCode;
        this.payload.Location_final = this.reviewDetailsEMEA.campus;
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
        this.payload.default_call_permission = this.countrydetails.default_call_permission;
        // console.log('Payload');	
        // console.log(this.payload);	
        this.servicenowservice.submit_request(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        }, (error) => {
            console.error('error caught in component' + error);
            this.isSpinnerVisible = false;
            this.errorinfo = true;
            this.isButtonVisible = true;
        });
    }
    ngOnInit() {
        var _a, _b;
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
        if (this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null) {
            this.hideProjectId = true;
        }
    }
    previousStep(event) {
        this.isEntryFormEmea = false;
        this.isReviewFormEmea = true;
    }
}
VoipEmeaNewComponent.ɵfac = function VoipEmeaNewComponent_Factory(t) { return new (t || VoipEmeaNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
VoipEmeaNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipEmeaNewComponent, selectors: [["app-voip-emea-new"]], decls: 86, vars: 13, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5"], [1, "ds-text-contextual-red-2"], [3, "step", "isSelf", "hideSteps"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-left-0_5"], ["id", "tabsubform", "width", "100%"], ["valign", "top"], ["colspan", "2", "width", "47%"], ["for", "LocationId"], ["width", "53%"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["name", "Location", "rows", "2", "cols", "40", "id", "LocationId", "title", "Location", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", 3, "change"], ["location", ""], ["value", ""], ["name", "Location", 3, "value", 4, "ngFor", "ngForOf"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["width", "5%"], ["width", "41%"], ["src", "/icons/ecblank.gif", "alt", "", "width", "1", "height", "1", "border", "0"], [1, "ds-row", "ds-grid", "ds-mar-b-5", "ds-pad-r-1"], [1, "ds-col-lg-2", "ds-push-lg-8"], ["type", "button", 1, "ds-button", "ds-secondary", "ds-no-expand", "ds-text-align-center", "ds-mar-b-0", 2, "width", "100%", 3, "click"], ["type", "submit", 1, "ds-button", "ds-primary", "ds-pad-l-0", "ds-pad-r-0", "ds-text-align-center", 2, "width", "100%"], [3, "hidden"], [3, "step", "isSelf", "hideSteps", "previousStep"], ["id", "tabsubform", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "class", "ds-button ds-secondary \n                                ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Back", 3, "click", 4, "ngIf"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "submit", "class", "ds-button ds-width-auto \n                                ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Submit", 3, "click", 4, "ngIf"], ["type", "button", "name", "exit", "type", "button", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 \n                                ds-pad-r-3", "value", "EXIT REQUEST", 3, "routerLink", "queryParams", 4, "ngIf"], ["name", "Location", 3, "value"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "submit", "name", "submit", "value", "Submit", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "button", "name", "exit", "type", "button", "value", "EXIT REQUEST", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "routerLink", "queryParams"]], template: function VoipEmeaNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipEmeaNewComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetailsEMEA(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") are required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-steps", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Jabber Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipEmeaNewComponent_Template_select_change_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return ctx.selectedLocation(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Select Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, VoipEmeaNewComponent_option_35_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipEmeaNewComponent_Template_button_click_50_listener() { return ctx.backClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "app-steps", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipEmeaNewComponent_Template_app_steps_previousStep_62_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Jabber Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, VoipEmeaNewComponent_input_82_Template, 1, 0, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, VoipEmeaNewComponent_input_84_Template, 1, 0, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, VoipEmeaNewComponent_input_85_Template, 1, 6, "input", 39);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isEntryFormEmea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locationlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isReviewFormEmea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step + 1)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedLocationEmea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible && !ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible && !ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorinfo);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2lwLWVtZWEtbmV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipEmeaNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-emea-new',
                templateUrl: './voip-emea-new.component.html',
                styleUrls: ['./voip-emea-new.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }]; }, null); })();
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
    getlocationdetails(ccode) {
        console.log("getlocationdetails" + ccode);
        return this.http.post('/api/locationdetails', { ccode })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/uitoplinks/uitoplinks.component */ "rXSL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");






function AppComponent_app_footer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class AppComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'gvs-portal-front-end';
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            this.service = params.service;
            this.display = true;
            this.pagedisplay = sessionStorage.getItem('pagedisplay');
            //alert(window.location.href)
            //this.curl=window.location.href
            this.curl = sessionStorage.getItem('pagedisplay');
            //sessionStorage.setItem('count','0')
            if (this.curl.includes('pagenotfound')) {
                this.display = false;
            }
            else {
                this.display = true;
            }
            if (sessionStorage.getItem('count') !== '1' || (this.curl.includes('homepage') && sessionStorage.getItem('count') !== '1')) {
                sessionStorage.setItem('count', '1');
                window.location.reload();
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "ds-grid"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-uitoplinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_footer_3_Template, 1, 0, "app-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
    } }, directives: [_components_uitoplinks_uitoplinks_component__WEBPACK_IMPORTED_MODULE_2__["UitoplinksComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Uo6X":
/*!*******************************************************************!*\
  !*** ./src/app/components/voip-in-move/voip-in-move.component.ts ***!
  \*******************************************************************/
/*! exports provided: VoipInMoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoipInMoveComponent", function() { return VoipInMoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config/payload */ "dP2x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/cookie-handler.service */ "oxqP");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");












function VoipInMoveComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There is no Jabber for this serial number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInMoveComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You can view the status of the on-going request by clicking on the Requests link on the left side navigation menu.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For any further assistance, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#voice-at-ibm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The serial number that you have entered has already one move Jabber request is in progress and request number is ", ctx_r2.identifier, ".");
} }
function VoipInMoveComponent_table_21_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jab_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jab_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jab_r11);
} }
function VoipInMoveComponent_table_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jabber number to Move");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipInMoveComponent_table_21_Template_select_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.getjabberNumberVal(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VoipInMoveComponent_table_21_option_14_Template, 2, 2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.jabberNumber);
} }
function VoipInMoveComponent_div_22_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r17, "");
} }
function VoipInMoveComponent_div_22_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_campus_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_campus_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fl_campus_r18);
} }
function VoipInMoveComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Office Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipInMoveComponent_div_22_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.selectedLocation(_r14.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select Office Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VoipInMoveComponent_div_22_option_15_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipInMoveComponent_div_22_Template_select_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.campus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VoipInMoveComponent_div_22_option_27_Template, 2, 2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Funded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipInMoveComponent_div_22_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.Voice_Type = $event; })("click", function VoipInMoveComponent_div_22_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.showChargeDepartmentCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoipInMoveComponent_div_22_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.Voice_Type = $event; })("click", function VoipInMoveComponent_div_22_Template_input_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.hideChargeDepartmentCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Charge Department Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Business Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Project Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Account Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "ICA Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.camp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.hideBuilding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.campus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.build);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.Voice_Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.Voice_Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.hideDeptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.employeeInfo.businessUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r4.hideProjectId);
} }
function VoipInMoveComponent_input_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 83);
} }
function VoipInMoveComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request is being submitted.Do not refresh or go back.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInMoveComponent_input_105_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInMoveComponent_input_105_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInMoveComponent_input_107_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInMoveComponent_input_107_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VoipInMoveComponent {
    constructor(router, cookie, cloudantservice, route, servicenowservice, location) {
        this.router = router;
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.servicenowservice = servicenowservice;
        this.location = location;
        this.hideDeptCode = true;
        this.jabberNumber = [78979812, 79870945];
        this.Voice_Type = "No";
        this.hideBuilding = true;
        this.displayDiv = false;
        this.isReviewFormMove = true;
        this.isEntryFormMove = false;
        this.identifier = [];
        this.campA = [];
        this.camp = [];
        this.buildA = [];
        this.build = [];
        this.j = 0;
        this.ccode = '';
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.cloudantData = [];
        this.servicesData = [];
        this.warninginfo = false;
        this.warninginfosnow = false;
        this.hideProjectId = false;
        this.hideSteps = false;
        this.payload = new _config_payload__WEBPACK_IMPORTED_MODULE_1__["Jabber_Move"]();
        this.reviewDetailsIndia = {
            jabberNumbertoMove: "",
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
        /* this.Locations = {
           locc: ['Banglore~~MTP', 'Banglore~~SA',
             'Gurgaon~~DLF Infinity', 'Gurgaon~~ASF', 'Hyderabad~~Hitech', 'Hyderabad~~Hitech2']
         };
         for (var i = 0; i < this.Locations.locc.length; i++) {
           var n = this.Locations.locc[i].indexOf("~")
           this.campA[i] = this.Locations.locc[i].substr(0, n);
           this.buildA[i] = this.Locations.locc[i].substr(n + 2, this.Locations.locc[i].length);
         }
         for (var i = 0; i < this.campA.length; i++) {
           if (this.campA[i] != this.campA[i + 1]) {
             this.camp[this.j] = this.campA[i];
             this.j++;
           }
         }*/
    }
    backClick() {
        sessionStorage.setItem('backbutton', 'yes');
        sessionStorage.setItem('step', 'step1');
        this.location.back();
    }
    getjabberNumberVal(jabberNumberVal) {
        if (jabberNumberVal != '') {
            this.displayDiv = true;
        }
        else
            this.displayDiv = false;
        //alert(this.displayDiv + this.jabberNumberVal)
    }
    selectedLocation(loc) {
        this.build = [];
        this.campus = '';
        if (loc != '') {
            this.hideBuilding = false;
            var k = 0;
            for (var i = 0; i < this.campA.length; i++) {
                if (loc == this.campA[i]) {
                    this.build[k] = this.buildA[i];
                    k = k + 1;
                }
            }
        }
        else {
            this.hideBuilding = true;
            this.build = [];
        }
    }
    entryDetailsMove(formData) {
        if (formData.value.Identifier_Selected == '') {
            alert('Please select the jabber number to move');
            return;
        }
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
        if (formData.value.Projectid == '' && this.hideProjectId == false) {
            alert('Please enter the Project Id');
            return;
        }
        if (formData.value.accid == '') {
            alert('Please enter the Account Id');
            return;
        }
        if (formData.value.icano == '') {
            alert('Please enter the ICA Code');
            return;
        }
        this.isEntryFormMove = true;
        this.isReviewFormMove = false;
        this.reviewDetailsIndia.jabberNumbertoMove = formData.value.Identifier_Selected;
        this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
        this.reviewDetailsIndia.campus = formData.value.Buildings;
        this.reviewDetailsIndia.funded = this.Voice_Type;
        this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;
        this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;
        this.reviewDetailsIndia.projectId = formData.value.Projectid;
        this.reviewDetailsIndia.accid_Disp = formData.value.accid;
        this.reviewDetailsIndia.icano_Disp = formData.value.icano;
    }
    BackButton() {
        this.isEntryFormMove = false;
        this.isReviewFormMove = true;
    }
    // Submit to Snow Jabber move code 
    submit_snow() {
        this.reqno = this.countrydetails.isocode + "-MS-" + this.cnum.substr(0, 6) + "-" + gettime();
        sessionStorage.setItem('reqno', this.reqno);
        this.isButtonVisible = false;
        this.isSpinnerVisible = true;
        this.payload.orinator_payload = this.orgi;
        this.payload.cNum_payload = this.cnum;
        // fields picked up from form -- begins	
        //this.payload.Buildings_Disp = this.reviewDetailsIndia.campus;
        // by default set to true. below line can be removed if needed.	
        //this.payload.Voice_Type_Disp = this.reviewDetailsIndia.Voice_Type_Disp ;	
        this.payload.Projectid_Disp = this.reviewDetailsIndia.projectId;
        // this.payload.icano_Disp = this.reviewDetailsIndia.icano_Disp ;	
        // this.payload.identifier_hp_Disp = this.reviewDetailsIndia.fixPhoneIdentifier;
        this.payload.BusinessUnit_Disp = this.reviewDetailsIndia.businessUnit;
        this.payload.Department_number_Disp = this.reviewDetailsIndia.chargeDepartmentCode;
        this.payload.Location_final = this.reviewDetailsIndia.campus;
        //this.payload.accid_Disp=this.reviewDetailsIndia.accid_Disp;	
        this.payload.ReqNo = this.reqno;
        // fields to be picked up from form -- ends	
        this.payload.level1_japproval = this.countrydetails.level1_japproval;
        this.payload.level2_japproval = this.countrydetails.level2_japproval;
        //this.payload.SLA_type = this.countrydetails.SLA_type;
        this.payload.gvs_approval_link = this.countrydetails.gvs_approval_link;
        this.payload.gvs_portal_link = this.countrydetails.gvs_portal_link;
        this.payload.countryname = this.countrydetails.name;
        this.payload.request_type = 'jabber_move';
        this.payload.evolution_instance = this.countrydetails.evolution_instance;
        this.payload.qag = this.countrydetails.qag;
        this.payload.class_of_serice = this.countrydetails.class_of_serice;
        //this.payload.country_code = this.countrydetails.code;
        console.log('Payload');
        //console.log(this.payload);	
        this.servicenowservice.submit_request_move(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        }, (error) => {
            console.error('error caught in component' + error);
            this.isSpinnerVisible = false;
            this.errorinfo = true;
            this.isButtonVisible = true;
        });
    }
    showChargeDepartmentCode() {
        this.hideDeptCode = false;
    }
    hideChargeDepartmentCode() {
        this.hideDeptCode = true;
    }
    ngOnInit() {
        this.orgi = this.cookie.getCookie('ccode');
        this.cnum = sessionStorage.getItem('cnum');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.sessionwarninginfo = sessionStorage.getItem('warninginfo');
        this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow');
        if (this.sessionwarninginfo == 'false1') {
            this.warninginfo = true;
        }
        else if (this.sessionwarninginfosnow == 'true1') {
            this.warninginfosnow = true;
            this.identifier = sessionStorage.getItem('identifier');
        }
        else {
            this.identifier = sessionStorage.getItem('identifier');
        }
        this.route.queryParams
            .subscribe(params => {
            var _a, _b;
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("navigation component" + this.pcode);
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
                        "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                        "step": 3,
                    }
                ]
            };
            this.servicesData = servicesData.data[0];
            if (this.warninginfo || this.warninginfosnow) {
                this.hideSteps = true;
            }
            else {
                this.hideSteps = false;
            }
            this.employeeInfo1 = sessionStorage.getItem('employeeInfo');
            this.employeeInfo = JSON.parse(this.employeeInfo1);
            if (this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null) {
                this.hideProjectId = true;
            }
            this.reqFor = sessionStorage.getItem('radioAction');
        });
    }
    previousStep(event) {
        this.isEntryFormMove = false;
        this.isReviewFormMove = true;
    }
}
VoipInMoveComponent.ɵfac = function VoipInMoveComponent_Factory(t) { return new (t || VoipInMoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
VoipInMoveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInMoveComponent, selectors: [["app-voip-in-move"]], decls: 108, vars: 28, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [3, "step", "isSelf", "hideSteps", "previousStep"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "b1", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "req_stat_del", "class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0", 4, "ngIf"], [4, "ngIf"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Next", 4, "ngIf"], [3, "hidden"], [1, "ds-pad-b-1"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "addId1"], ["width", "54%", "height", "10"], ["colspan", "2", "width", "46%"], ["width", "54%"], ["valign", "top", 3, "hidden"], ["for", "Projectid"], ["for", "icano"], [1, "ds-hr-thick", "ds-mar-t-1_5"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Back", 3, "click", 4, "ngIf"], ["type", "submit", "name", "submit", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Submit", 3, "click", 4, "ngIf"], ["id", "b1", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["id", "req_stat_del", 1, "ds-col-xs-12", "ds-alert", "ds-warning"], [2, "font-size", "1rem"], ["target", "_blank", "href", "https://ibm-cio.slack.com/archives/C0133EDUGVB", 2, "color", "blue"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "IdentifierId", 1, "ds-text-capitalize"], ["role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["ngModel", "", "name", "Identifier_Selected", "id", "IdentifierId", "title", "Identifier to Move", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["jabberNumberVal", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "LocationId", 1, "ds-text-capitalize"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Location_1", "cols", "40", "id", "LocationId", "title", "Office Location", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["location", ""], ["name", "Location_1", 3, "value", 4, "ngFor", "ngForOf"], ["for", "builId", 1, "ds-text-capitalize"], ["name", "Buildings", "rows", "2", "cols", "40", "id", "LocationId_1_1", "title", "Campus", "tabindex", "1", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], ["for", "addId", 1, "ds-text-capitalize", "ds-padding-top-2"], [1, "ds-mar-b-1"], [1, "ds-input-radio-group"], ["for", "radio1", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "name", "Voice_Type", "id", "radio1", "value", "Yes", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], [1, "ds-input-control"], [1, "ds-pad-l-0_5"], ["for", "radio2", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "checked", "", "name", "Voice_Type", "id", "radio2", "value", "No", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], ["id", "d1"], ["for", "addId", 1, "ds-text-capitalize", "ds-pad-t-1"], ["id", "d21", 1, "ds-input-container"], ["name", "Department_number", "value", "", "maxlength", "6", "tabindex", "4", "id", "d2", "title", "Contact FirstLine Manager\\Project Manager for Charge Department Code", "autocomplete", "off", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["id", "Mentor1Div"], ["for", "addId", 1, "ds-text-capitalize"], [1, "ds-input-container"], ["for", "Projectid", 1, "ds-text-capitalize", "ds-pad-t-1"], ["ngModel", "", "name", "Projectid", "value", "", "rows", "2", "maxlength", "6", "cols", "40", "id", "Projectid", "title", "Project id", 1, "ds-input", 2, "width", "300px !important"], ["for", "accid", 1, "ds-text-capitalize", "ds-pad-b-1"], ["ngModel", "", "name", "accid", "value", "", "maxlength", "6", "id", "accid", "title", "Account Id", 1, "ds-input", 2, "width", "300px !important"], ["for", "icano", 1, "ds-text-capitalize"], ["ngModel", "", "name", "icano", "value", "", "id", "icano", "maxlength", "6", "title", "ICA Code", 1, "ds-input", 2, "width", "300px !important"], ["name", "Location_1", 3, "value"], ["type", "submit", "name", "next", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "submit", "name", "submit", "value", "Submit", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"]], template: function VoipInMoveComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipInMoveComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetailsMove(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request Move Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") are required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-steps", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipInMoveComponent_Template_app_steps_previousStep_16_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Employee Entry Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VoipInMoveComponent_div_19_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VoipInMoveComponent_div_20_Template, 12, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoipInMoveComponent_table_21_Template, 15, 1, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoipInMoveComponent_div_22_Template, 90, 9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInMoveComponent_Template_input_click_30_listener() { return ctx.backClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, VoipInMoveComponent_input_32_Template, 1, 0, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Request Move Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-steps", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function VoipInMoveComponent_Template_app_steps_previousStep_40_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jabber Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Jabber Number to Move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "New Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Project Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Account Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "ICA Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, VoipInMoveComponent_div_100_Template, 4, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, VoipInMoveComponent_input_105_Template, 1, 0, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, VoipInMoveComponent_input_107_Template, 1, 0, "input", 39);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isEntryFormMove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step)("isSelf", ctx.reqFor)("hideSteps", ctx.hideSteps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfosnow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false && ctx.warninginfosnow == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayDiv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfo == false && ctx.warninginfosnow == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isReviewFormMove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx.servicesData.step + 1)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.jabberNumbertoMove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.officeLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.campus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.funded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDeptCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.chargeDepartmentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.businessUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideProjectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.projectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.accid_Disp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.icano_Disp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtaW4tbW92ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoidm9pcC1pbi1tb3ZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLm5ld3Rvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoipInMoveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voip-in-move',
                templateUrl: './voip-in-move.component.html',
                styleUrls: ['./voip-in-move.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }]; }, null); })();
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
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ResourcesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There are no resources for this serial number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResourcesComponent_table_16_tbody_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "font", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "font", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "font", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "font", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const no_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r3.TYPE.includes("ip") ? "Jabber" : no_r3.TYPE.includes("fac") ? "FAC" : no_r3.TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", no_r3.SUPPLIER, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", no_r3.TYPE.includes("fac") ? "XXXXXXXX" : no_r3.IDENTIFIER, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", no_r3.ATTRIBUTE6, " ");
} }
function ResourcesComponent_table_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Resource Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone/Dial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " In number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Additional Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResourcesComponent_table_16_tbody_25_Template, 21, 4, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dbdata);
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
        this.warninginfosnowres = false;
        this.ccode = '';
    }
    ngOnInit() {
        this.dbdata1 = sessionStorage.getItem('identifier');
        this.sessionwarninginfo = sessionStorage.getItem('warninginfo');
        this.reqFor = sessionStorage.getItem('radioAction');
        if (this.sessionwarninginfo == 'false1') {
            this.warninginfosnowres = true;
        }
        console.log(this.dbdata1);
        console.log(this.dbdata1.identifier);
        console.log(JSON.parse(this.dbdata1).identifier);
        var parsed = JSON.parse(JSON.stringify(JSON.parse(this.dbdata1)));
        this.dbdata = parsed;
        console.log(this.dbdata[0].IDENTIFIER);
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"])); };
ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["app-resources"]], decls: 17, vars: 5, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-l-0_5"], [1, "ds-col-12", "ds-pad-t-0_5"], [3, "step", "isSelf", "hideSteps"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], [1, "ds-pad-t-1"], ["class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["id", "t1", "cellspacing", "0", "cellpad", "0", "border", "0", 4, "ngIf"], [1, "ds-col-xs-12", "ds-alert", "ds-warning"], ["id", "t1", "cellspacing", "0", "cellpad", "0", "border", "0"], ["valign", "top"], ["width", "172", "bgcolor", "#F1F0EE"], [1, "ds-set-height-group-1", "ds-col-xs-12", "ds-pad-1", "ds-bg-neutral-warm-2", "ds-text-neutral-7"], [1, "ds-set-height-group-1", "ds-pad-t-1", "ds-bg-neutral-warm-2", "ds-text-neutral-7"], ["colspan", "2", "width", "345", "bgcolor", "#F1F0EE"], ["colspan", "5", "width", "862", "bgcolor", "#FFFFFF"], [4, "ngFor", "ngForOf"], ["width", "172", "bgcolor", "#FFFFFF", 1, "ds-pad-l-1"], ["width", "172", "bgcolor", "#FFFFFF"], ["color", "#808080"], ["colspan", "2", "width", "345", "bgcolor", "#FFFFFF"]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-steps", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Employee Resources Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResourcesComponent_div_15_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResourcesComponent_table_16_Template, 26, 1, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", 3)("isSelf", ctx.reqFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfosnowres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warninginfosnowres == false);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_4__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_6__["StepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoicmVzb3VyY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxNTAlO1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLm5ld3Rvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfSJdfQ== */"] });
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
/*! exports provided: rootLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootLoaderFactory", function() { return rootLoaderFactory; });
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
/* harmony import */ var _components_voip_in_move_voip_in_move_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/voip-in-move/voip-in-move.component */ "Uo6X");
/* harmony import */ var _components_voip_la_new_voip_la_new_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/voip-la-new/voip-la-new.component */ "Hq2D");
/* harmony import */ var _components_voip_au_new_voip_au_new_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/voip-au-new/voip-au-new.component */ "PmSy");
/* harmony import */ var _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/dummy/dummy.component */ "nF3f");
/* harmony import */ var _components_voip_in_update_voip_in_update_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/voip-in-update/voip-in-update.component */ "8sw4");
/* harmony import */ var _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/voip-in-delete/voip-in-delete.component */ "JIgN");
/* harmony import */ var _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/employeesearch-voip-delete/employeesearch-voip-delete.component */ "IE7g");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/steps/steps.component */ "52XD");
/* harmony import */ var _components_voip_emea_new_voip_emea_new_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/voip-emea-new/voip-emea-new.component */ "R5fI");
/* harmony import */ var _components_voip_au_move_voip_au_move_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/voip-au-move/voip-au-move.component */ "Jjrs");
/* harmony import */ var _components_hp_in_new_hp_in_new_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/hp-in-new/hp-in-new.component */ "aJjB");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "cw5x");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ "tyNb");


















































function rootLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_40__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_services_cloudant_service__WEBPACK_IMPORTED_MODULE_27__["cloudantservice"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_23__["appRoutingProviders"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateLoader"],
                    useFactory: rootLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            })
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
        _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_35__["DummyComponent"],
        _components_voip_in_update_voip_in_update_component__WEBPACK_IMPORTED_MODULE_36__["VoipInUpdateComponent"],
        _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_37__["VoipInDeleteComponent"],
        _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_38__["EmployeesearchVoipDeleteComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_41__["FooterComponent"],
        _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_42__["StepsComponent"],
        _components_voip_au_new_voip_au_new_component__WEBPACK_IMPORTED_MODULE_34__["VoipAuNewComponent"],
        _components_voip_la_new_voip_la_new_component__WEBPACK_IMPORTED_MODULE_33__["VoipLaNewComponent"],
        _components_voip_emea_new_voip_emea_new_component__WEBPACK_IMPORTED_MODULE_43__["VoipEmeaNewComponent"],
        _components_voip_au_move_voip_au_move_component__WEBPACK_IMPORTED_MODULE_44__["VoipAuMoveComponent"],
        _components_hp_in_new_hp_in_new_component__WEBPACK_IMPORTED_MODULE_45__["HpInNewComponent"],
        _components_voip_in_move_voip_in_move_component__WEBPACK_IMPORTED_MODULE_32__["VoipInMoveComponent"],
        _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_46__["PagenotfoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_47__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"]] }); })();
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
                    _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_35__["DummyComponent"],
                    _components_voip_in_update_voip_in_update_component__WEBPACK_IMPORTED_MODULE_36__["VoipInUpdateComponent"],
                    _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_37__["VoipInDeleteComponent"],
                    _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_38__["EmployeesearchVoipDeleteComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_41__["FooterComponent"],
                    _components_steps_steps_component__WEBPACK_IMPORTED_MODULE_42__["StepsComponent"],
                    _components_voip_au_new_voip_au_new_component__WEBPACK_IMPORTED_MODULE_34__["VoipAuNewComponent"],
                    _components_voip_la_new_voip_la_new_component__WEBPACK_IMPORTED_MODULE_33__["VoipLaNewComponent"],
                    _components_voip_emea_new_voip_emea_new_component__WEBPACK_IMPORTED_MODULE_43__["VoipEmeaNewComponent"],
                    _components_voip_au_move_voip_au_move_component__WEBPACK_IMPORTED_MODULE_44__["VoipAuMoveComponent"],
                    _components_hp_in_new_hp_in_new_component__WEBPACK_IMPORTED_MODULE_45__["HpInNewComponent"],
                    _components_voip_in_move_voip_in_move_component__WEBPACK_IMPORTED_MODULE_32__["VoipInMoveComponent"],
                    _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_46__["PagenotfoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_23__["appRoutingProviders"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__["TranslateLoader"],
                            useFactory: rootLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                        }
                    })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/cloudant.service */ "Rfmm");
/* harmony import */ var _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/cookie-handler.service */ "oxqP");





class TopcountryframeComponent {
    constructor(router, cloudantservice, cookie, route) {
        this.router = router;
        this.cloudantservice = cloudantservice;
        this.cookie = cookie;
        this.route = route;
        this.ccode = '';
        this.pcode = '';
        this.routingservices = ['services', 'jabberservices', 'fixedphoneservices', 'facservices', 'jabber_new', 'jabber_delete', 'jabber_update', 'jabber_move', 'requests', 'resources'];
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.service = params.service;
            this.pcode = params.country;
            console.log("topcountry component" + this.pcode);
            console.log("topcountry component" + this.route.component);
            this.countryroute = sessionStorage.getItem('countryroute');
            this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
            if (!this.routingservices.includes(this.service)) {
                sessionStorage.setItem('pagedisplay', 'pagenotfound');
                this.router.navigate(['**'], {
                //  queryParams: {}
                });
            }
            else {
                sessionStorage.setItem('pagedisplay', 'page');
            }
            if (this.pcode == this.countryroute) {
                this.pcountrydetails = sessionStorage.getItem('countrydetails');
                console.log("topcountrysession storageif" + JSON.parse(this.pcountrydetails).code);
                this.countryname = JSON.parse(this.pcountrydetails);
            }
            else {
                console.log("topcountrysession storageelse" + this.pcode);
                this.cloudantservice.getcountrydetails(this.pcode).subscribe(data => {
                    if (data.countrydetails == 'no data') {
                        sessionStorage.setItem('pagedisplay', 'pagenotfound');
                        this.router.navigate(['**'], {
                        //   queryParams: {}
                        });
                    }
                    else {
                        sessionStorage.setItem('pagedisplay', 'page');
                        console.log('Response received', data.countrydetails.name);
                        this.countryname = data.countrydetails;
                        sessionStorage.setItem('countrydetails', JSON.stringify(data.countrydetails));
                        sessionStorage.setItem('countryroute', this.pcode);
                    }
                });
            }
        });
    }
}
TopcountryframeComponent.ɵfac = function TopcountryframeComponent_Factory(t) { return new (t || TopcountryframeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
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
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r9, "");
} }
function VoipInNewComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_campus_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_campus_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fl_campus_r10);
} }
function VoipInNewComponent_div_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! Some thing went worng.Please try again latter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInNewComponent_div_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request submission is in progress.Do not Go back or Refresh the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInNewComponent_input_171_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_input_171_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoipInNewComponent_input_173_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoipInNewComponent_input_173_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0, a1) { return { country: a0, service: a1 }; };
function VoipInNewComponent_input_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 81);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r8.pcode, ctx_r8.service));
} }
class VoipInNewComponent {
    constructor(router, cookie, cloudantservice, route, servicenowservice, location) {
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
        this.errorinfo = false;
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
        /*this.Locations = {
          locc : ['Banglore~~MTP','Banglore~~SA',
          'Gurgaon~~DLF Infinity','Gurgaon~~ASF','Hyderabad~~Hitech','Hyderabad~~Hitech2']
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
        //alert("Location"+loc);
        if (loc != '') {
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
        this.payload.default_call_permission = this.countrydetails.default_call_permission;
        // console.log('Payload');	
        // console.log(this.payload);	
        this.servicenowservice.submit_request(this.payload).subscribe(data => {
            console.log('response', data);
            if (data)
                this.router.navigate(['/resultpage'], { queryParams: { country: this.pcode, service: this.service } });
        }, (error) => {
            console.error('error caught in component' + error);
            this.isSpinnerVisible = false;
            this.errorinfo = true;
            this.isButtonVisible = true;
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
        if (this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null) {
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
VoipInNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoipInNewComponent, selectors: [["app-voip-in-new"]], decls: 175, vars: 33, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [3, "step", "isSelf", "hideSteps"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "54%", "height", "10"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Location_1", "cols", "40", "id", "LocationId", "title", "Office Location", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["location", ""], ["value", ""], ["name", "Location_1", 3, "value", 4, "ngFor", "ngForOf"], ["valign", "top", 3, "hidden"], ["colspan", "2", "width", "46%"], ["for", "builId", 1, "ds-text-capitalize"], ["width", "54%"], ["name", "Buildings", "rows", "2", "cols", "40", "id", "LocationId_1_1", "title", "Campus", "tabindex", "1", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "addId", 1, "ds-text-capitalize", "ds-padding-top-2"], [1, "ds-mar-b-1"], [1, "ds-input-radio-group"], ["for", "radio1", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "name", "Voice_Type", "id", "radio1", "value", "Yes", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], [1, "ds-input-control"], [1, "ds-pad-l-0_5"], ["for", "radio2", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "checked", "", "name", "Voice_Type", "id", "radio2", "value", "No", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], ["id", "d1"], ["for", "addId", 1, "ds-text-capitalize", "ds-pad-t-1"], ["id", "d21", 1, "ds-input-container"], ["name", "Department_number", "value", "", "tabindex", "4", "id", "d2", "title", "Contact FirstLine Manager\\Project Manager for Charge Department Code", "maxlength", "6", "autocomplete", "off", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["id", "Mentor1Div"], ["for", "addId", 1, "ds-text-capitalize", 2, "display", "inline-block", "padding-bottom", "1rem"], ["name", "BusinessUnit", "ngModel", "", 2, "display", "inline-block", "padding-bottom", "1rem"], ["for", "Projectid", 1, "ds-pad-t-1"], [1, "ds-input-container", "ds-pad-t-1"], ["name", "Projectid", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "Projectid", "title", "Contact FirstLine Manager\\Project Manager for Project id", "maxlength", "11", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "icano", 1, "ds-pad-t-1"], [1, "ds-input-container"], ["name", "identifier_hp", "value", "", "tabindex", "7", "title", "Fixed Phone Identifier", "maxlength", "8", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "tabindex", "32765", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [3, "hidden"], [1, "ds-pad-b-1"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps", "previousStep"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["for", "addId1"], ["for", "addId1", 3, "hidden"], ["width", "54%", 3, "hidden"], ["for", "Projectid"], ["for", "icano"], ["class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], [1, "ds-hr-thick", "ds-mar-t-1_5"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Back", 3, "click", 4, "ngIf"], ["type", "submit", "name", "submit", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Submit", 3, "click", 4, "ngIf"], ["type", "button", "name", "exit", "type", "button", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "EXIT REQUEST", 3, "routerLink", "queryParams", 4, "ngIf"], ["name", "Location_1", 3, "value"], [3, "value"], [1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "submit", "name", "submit", "value", "Submit", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "button", "name", "exit", "type", "button", "value", "EXIT REQUEST", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "routerLink", "queryParams"]], template: function VoipInNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VoipInNewComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetails(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request new Jabber service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with an asterisk (");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VoipInNewComponent_Template_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.selectedLocation(_r1.value); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "If you already have Fixed Phone , please provide the identifier ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Fixed Phone Identifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, VoipInNewComponent_div_164_Template, 5, 0, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, VoipInNewComponent_div_166_Template, 4, 0, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, VoipInNewComponent_input_171_Template, 1, 0, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, VoipInNewComponent_input_173_Template, 1, 0, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, VoipInNewComponent_input_174_Template, 1, 6, "input", 72);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible && !ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible && !ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorinfo);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 40%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 280px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 150%;\r\n    left: 80%;\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaXAtaW4tbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ2b2lwLWluLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTUwJTtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH0iXX0= */"] });
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

/***/ "aJjB":
/*!*************************************************************!*\
  !*** ./src/app/components/hp-in-new/hp-in-new.component.ts ***!
  \*************************************************************/
/*! exports provided: HpInNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HpInNewComponent", function() { return HpInNewComponent; });
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












function HpInNewComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_location_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_location_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fl_location_r13, "");
} }
function HpInNewComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fl_campus_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fl_campus_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fl_campus_r14);
} }
function HpInNewComponent_option_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r15, "");
} }
function HpInNewComponent_option_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", model_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", model_r16, "");
} }
function HpInNewComponent_label_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "e.g. IBMC Lv21 EM desk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HpInNewComponent_label_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "e.g. IBMC Lv21 conference room 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HpInNewComponent_div_326_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your request submission is in progress.Do not Go back or Refresh the page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HpInNewComponent_input_331_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HpInNewComponent_input_331_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.BackButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HpInNewComponent_input_333_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HpInNewComponent_input_333_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.submit_snow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HpInNewComponent {
    constructor(router, cookie, cloudantservice, route, servicenowservice, location) {
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
        this.devices = ['Extension Mobility Station', 'Conference / Meeting Room Phone', 'Fixed Phone User'];
        this.j = 0;
        this.ccode = '';
        this.isButtonVisible = true;
        this.isSpinnerVisible = false;
        this.isEntryForm = false;
        this.isReviewForm = true;
        this.Voice_Type = "No";
        this.hideDeptCode = true;
        this.hideBuilding = true;
        //fixedPhoneIdentifier = false;	
        this.cloudantData = [];
        this.servicesData = [];
        this.hideProjectId = false;
        this.models = ['7941', '7942', '8811', '8812'];
        this.hideDeviceSection = true;
        this.showforAnyDevice = true;
        this.showforFixedPhone = true;
        this.showBusinessNeed = true;
        this.voicemail = 'no';
        this.COS = 'national';
        this.selected_device = '';
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
            accountId: " ",
            Voice_Type_Disp: true,
            icano_Disp: "",
            Location_final: "",
            accid_Disp: "",
            reqno: "",
            icaCode: "",
            device: "",
            model: "",
            employeeId: "",
            voicemail: "",
            cos: "",
            justification: "",
            description: "",
            mac: "",
        };
        /* this.Locations = {
           locc : ['Banglore~~MTP','Banglore~~SA',
           'Gurgaon~~DLF Infinity','Gurgaon~~ASF','Hyderabad~~Hitech','Hyderabad~~Hitech2']
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
        if (loc != '') {
            this.hideBuilding = false;
            var k = 0;
            for (var i = 0; i < this.campA.length; i++) {
                if (loc == this.campA[i]) {
                    this.build[k] = this.buildA[i];
                    k = k + 1;
                }
            }
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
    selectedDevice(device) {
        if (device != '') {
            this.hideDeviceSection = false;
        }
        if (device == '') {
            this.hideDeviceSection = true;
        }
        if (device.toUpperCase() == 'FIXED PHONE USER') {
            this.showforAnyDevice = false;
            this.showforFixedPhone = false;
        }
        if (device.toUpperCase() == 'EXTENSION MOBILITY STATION' || device.toUpperCase() == 'CONFERENCE / MEETING ROOM PHONE') {
            this.showforAnyDevice = false;
            this.showforFixedPhone = true;
        }
    }
    classofservice(cos) {
        if (cos == 'international') {
            this.showBusinessNeed = false;
        }
        else {
            this.showBusinessNeed = true;
        }
    }
    entryDetails(formData) {
        /* if(formData.value.Location_1.toUpperCase() == 'SELECT OFFICE LOCATION' || formData.value.Location_1 == '') {
           alert('Please select the Office Location');
           return;
         }
         if(formData.value.Buildings.toUpperCase() == 'SELECT ONE' || formData.value.Buildings == '' || formData.value.Location_1.toUpperCase() != 'SELECT OFFICE LOCATION' && formData.value.Buildings == '') {
           alert('Please select the Campus');
           return;
         }	*/
        if (formData.value.Department_number.toUpperCase() == '' && this.hideDeptCode == false) {
            alert('Please enter the Charge Department Code');
            return;
        }
        if (formData.value.Projectid == '' && this.hideProjectId == false) {
            alert('Please enter the Project Id');
            return;
        }
        if (formData.value.Accountid == '') {
            alert('Please provide account ID');
            return;
        }
        if (formData.value.ICAcode == '') {
            alert('Please provide ICA code');
            return;
        }
        if (formData.value.Device_Type == '') {
            alert('Please select a device type');
            return;
        }
        if (formData.value.Model_Type == '') {
            alert('Please select a type of model');
            return;
        }
        if (formData.value.StepMentor == '' && this.showforFixedPhone == false) {
            alert('Please enter the employee ID');
            return;
        }
        if (formData.value.Justification == '' && this.showBusinessNeed == false) {
            alert('Please enter the business need for Class of Service.');
            return;
        }
        if (formData.value.Description == '') {
            alert('Please Enter a description and it should not be more than 30 characters');
            return;
        }
        if (formData.value.MACAddress == '') {
            alert('Please enter 12 characters MAC address');
            return;
        }
        this.isEntryForm = true;
        this.isReviewForm = false;
        this.reviewDetailsIndia.officeLocation = formData.value.Location_1;
        this.reviewDetailsIndia.campus = formData.value.Buildings;
        this.reviewDetailsIndia.funded = this.Voice_Type;
        this.reviewDetailsIndia.chargeDepartmentCode = formData.value.Department_number;
        // this.reviewDetailsIndia.businessUnit = this.employeeInfo.businessUnit;	
        this.reviewDetailsIndia.projectId = formData.value.Projectid;
        this.reviewDetailsIndia.accountId = formData.value.Accountid;
        this.reviewDetailsIndia.icaCode = formData.value.ICAcode;
        this.reviewDetailsIndia.device = formData.value.Device_Type;
        this.reviewDetailsIndia.model = formData.value.Model_Type;
        this.reviewDetailsIndia.employeeId = formData.value.StepMentor;
        this.reviewDetailsIndia.voicemail = formData.value.Voicemail;
        this.reviewDetailsIndia.cos = formData.value.cos;
        this.reviewDetailsIndia.justification = formData.value.Justification;
        this.reviewDetailsIndia.description = formData.value.Description;
        this.reviewDetailsIndia.mac = formData.value.MACAddress;
    }
    BackButton() {
        this.isEntryForm = false;
        this.isReviewForm = true;
        // this.fixedPhoneIdentifier = false;	
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
        this.payload.default_call_permission = this.countrydetails.default_call_permission;
        // console.log('Payload');	
        // console.log(this.payload);	
        this.servicenowservice.submit_request(this.payload).subscribe(data => {
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
        if (this.employeeInfo.businessUnit.toUpperCase().trim() != 'GBS' || this.employeeInfo.businessUnit == null) {
            this.hideProjectId = true;
        }
    }
    previousStep(event) {
        this.isEntryForm = false;
        this.isReviewForm = true;
        // this.fixedPhoneIdentifier = false;	
    }
}
HpInNewComponent.ɵfac = function HpInNewComponent_Factory(t) { return new (t || HpInNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_3__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_5__["servicenowservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
HpInNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HpInNewComponent, selectors: [["app-hp-in-new"]], decls: 334, vars: 55, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "hidden", "submit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [3, "step", "isSelf", "hideSteps"], ["id", "h22", 1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["id", "t2", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["colspan", "2", "width", "46%", "height", "10"], ["for", "LocationId", 1, "ds-text-capitalize"], ["width", "54%", "height", "10"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["rows", "2", "name", "Location_1", "cols", "40", "id", "LocationId", "title", "Office Location", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "change"], ["location", ""], ["value", ""], ["name", "Location_1", 3, "value", 4, "ngFor", "ngForOf"], ["valign", "top", 3, "hidden"], ["colspan", "2", "width", "46%"], ["for", "builId", 1, "ds-text-capitalize"], ["width", "54%"], ["name", "Buildings", "rows", "2", "cols", "40", "id", "LocationId_1_1", "title", "Campus", "tabindex", "1", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "t1", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["for", "addId", 1, "ds-text-capitalize", "ds-padding-top-2"], [1, "ds-mar-b-1"], [1, "ds-input-radio-group"], ["for", "radio1", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "name", "Voice_Type", "id", "radio1", "value", "Yes", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], [1, "ds-input-control"], [1, "ds-pad-l-0_5"], ["for", "radio2", 1, "ds-input-radio", "ds-pad-r-1", 2, "display", "inline"], ["type", "radio", "checked", "", "name", "Voice_Type", "id", "radio2", "value", "No", 1, "ds-input", 3, "ngModel", "ngModelChange", "click"], ["id", "d1"], ["for", "addId", 1, "ds-text-capitalize", "ds-pad-t-1"], ["id", "d21", 1, "ds-input-container"], ["name", "Department_number", "value", "", "tabindex", "4", "id", "d2", "title", "Contact FirstLine Manager\\Project Manager for Charge Department Code", "autocomplete", "off", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["id", "Mentor1Div"], ["for", "addId", 1, "ds-text-capitalize", 2, "display", "inline-block", "padding-bottom", "1rem"], ["name", "BusinessUnit", "ngModel", "", 2, "display", "inline-block", "padding-bottom", "1rem"], ["for", "Projectid", 1, "ds-text-capitalize", "ds-pad-t-1"], [1, "ds-input-container", "ds-pad-t-1"], ["name", "Projectid", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "Projectid", "title", "Project id", "maxlength", "11", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "Accountid", 1, "ds-text-capitalize", "ds-pad-t-1"], ["name", "Accountid", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "Accountid", "title", "Account id", "maxlength", "8", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "ICAcode", 1, "ds-text-capitalize", "ds-pad-t-1"], ["name", "ICAcode", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "ICAcode", "title", "ICA Code", "maxlength", "100", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "DeviceType", 1, "ds-text-capitalize"], ["rows", "2", "name", "Device_Type", "cols", "40", "id", "DeviceTypeId", "title", "Device Type", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "change", "ngModelChange"], ["device", ""], ["name", "Device_Type", 3, "value", 4, "ngFor", "ngForOf"], ["id", "t3", "width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0", 3, "hidden"], ["rows", "2", "name", "Model_Type", "cols", "40", "id", "ModelTypeId", "title", "Model", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase"], ["name", "Model_Type", 3, "value", 4, "ngFor", "ngForOf"], ["for", "EmployeeID", 1, "ds-text-capitalize"], [2, "display", "ruby-base-container"], ["name", "StepMentor", "value", "", "title", "Employee ID", "ngModel", "", 1, "ds-input", 2, "width", "250px !important", "display", "inline-block"], [1, "ds-button", "ds-small", "ds-width-auto", 2, "padding-right", "1rem", "padding-left", "1rem", "margin-left", "2px"], ["valign", "top", 1, "ds-mar-t-1_5", 3, "hidden"], ["for", "Voicemail", 1, "ds-text-capitalize", "ds-mar-t-1", 2, "display", "inline-block"], ["rows", "2", "name", "Voicemail", "cols", "40", "id", "VoicemailId", "title", "Voicemail", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", "ds-mar-t-1", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange"], ["value", "yes"], ["value", "no"], ["for", "cos", 1, "ds-text-capitalize"], ["rows", "2", "name", "cos", "cols", "40", "id", "COSId", "title", "Class of Service", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "300px !important", "text-transform", "uppercase", 3, "ngModel", "ngModelChange", "change"], ["cos", ""], ["value", "national"], ["value", "international"], ["for", "Justification", 1, "ds-text-capitalize", "ds-pad-t-1"], ["name", "Justification", "title", "Business Justification", "tabindex", "2", "rows", "2", "cols", "40", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], ["for", "Description", 1, "ds-text-capitalize", "ds-pad-t-1"], ["name", "Description", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "DescriptionId", "title", "Description", "maxlength", "30", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], [4, "ngIf"], ["for", "MACAddress", 1, "ds-text-capitalize"], [1, "ds-input-container"], ["name", "MACAddress", "value", "", "tabindex", "2", "rows", "2", "cols", "40", "id", "MACAddressId", "title", "MAC Address", "maxlength", "12", "ngModel", "", 1, "ds-input", 2, "width", "300px !important"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "back", "tabindex", "32765", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "tabindex", "32767", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"], [3, "hidden"], [1, "ds-pad-b-1"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps", "previousStep"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["for", "addId1"], ["for", "addId1", 3, "hidden"], ["width", "54%", 3, "hidden"], ["for", "Projectid"], ["for", "icano"], ["for", "device"], ["for", "model"], ["for", "employeeId"], ["for", "voiemail"], ["for", "cos"], ["for", "justification"], ["for", "description"], ["for", "mac"], [1, "ds-hr-thick", "ds-mar-t-1_5"], ["class", "ds-loader-container", 4, "ngIf"], ["type", "button", "name", "back", "class", "ds-button ds-secondary ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Back", 3, "click", 4, "ngIf"], ["type", "submit", "name", "submit", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 ds-pad-r-3", "value", "Submit", 3, "click", 4, "ngIf"], ["name", "Location_1", 3, "value"], [3, "value"], ["name", "Device_Type", 3, "value"], ["name", "Model_Type", 3, "value"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "Your request is being submitted. Do not refresh or go back.", 1, "ds-loader"], ["type", "button", "name", "back", "value", "Back", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"], ["type", "submit", "name", "submit", "value", "Submit", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3", 3, "click"]], template: function HpInNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function HpInNewComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.entryDetails(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fixed Phone - New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fields marked with an asterisk (");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HpInNewComponent_Template_select_change_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.selectedLocation(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HpInNewComponent_option_33_Template, 2, 2, "option", 20);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HpInNewComponent_Template_select_ngModelChange_42_listener($event) { return ctx.campus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HpInNewComponent_option_45_Template, 2, 2, "option", 26);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HpInNewComponent_Template_input_ngModelChange_56_listener($event) { return ctx.Voice_Type = $event; })("click", function HpInNewComponent_Template_input_click_56_listener() { return ctx.showChargeDepartmentCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HpInNewComponent_Template_input_ngModelChange_61_listener($event) { return ctx.Voice_Type = $event; })("click", function HpInNewComponent_Template_input_click_61_listener() { return ctx.hideChargeDepartmentCode(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Charge Department Code ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " GBS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Project id (for GBS employee only) ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Account id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "ICA Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Type of Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "select", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HpInNewComponent_Template_select_change_121_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](122); return ctx.selectedDevice(_r4.value); })("ngModelChange", function HpInNewComponent_Template_select_ngModelChange_121_listener($event) { return ctx.selected_device = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Select Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, HpInNewComponent_option_125_Template, 2, 2, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Type of Model ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Select Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, HpInNewComponent_option_139_Template, 2, 2, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Employee ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Voicemail Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "select", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HpInNewComponent_Template_select_ngModelChange_157_listener($event) { return ctx.voicemail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Select Class of Service (COS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "select", 68, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HpInNewComponent_Template_select_ngModelChange_168_listener($event) { return ctx.COS = $event; })("change", function HpInNewComponent_Template_select_change_168_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](169); return ctx.classofservice(_r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "National");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "International");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Business Need (Why is international required?) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "textarea", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Description of the Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, HpInNewComponent_label_193_Template, 2, 0, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, HpInNewComponent_label_194_Template, 2, 0, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "label", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "MAC Address of the Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Note:Combination of (0 to 9 , A to F) and Length:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HpInNewComponent_Template_input_click_213_listener() { return ctx.backClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "form", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Fixed Phone - New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "By submitting this provisioning request, you are providing express written consent for IBM to process the Personal Information (PI) that you have provided as part of the provisioning process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "app-steps", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousStep", function HpInNewComponent_Template_app_steps_previousStep_222_listener($event) { return ctx.previousStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Review Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Campus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Funded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "label", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Charge Department Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Business Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Project id (for GBS employee only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Account Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "ICA Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Type of Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "label", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Type of Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "label", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Voicemail Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "label", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Class of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "label", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Business Justification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "label", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Description of Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "MAC Address of the Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](326, HpInNewComponent_div_326_Template, 4, 0, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](331, HpInNewComponent_input_331_Template, 1, 0, "input", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](333, HpInNewComponent_input_333_Template, 1, 0, "input", 108);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideProjectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected_device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDeviceSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforAnyDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.models);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforFixedPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforFixedPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.voicemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforFixedPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.COS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showBusinessNeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforAnyDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_device == "Extension Mobility Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_device == "Conference / Meeting Room Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforAnyDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.accountId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.icaCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.voicemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showforFixedPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.cos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.justification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showBusinessNeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewDetailsIndia.mac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isButtonVisible);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJocC1pbi1uZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HpInNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hp-in-new',
                templateUrl: './hp-in-new.component.html',
                styleUrls: ['./hp-in-new.component.css']
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
/* harmony import */ var _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resources/resources.component */ "Wptv");
/* harmony import */ var _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dummy/dummy.component */ "nF3f");
/* harmony import */ var _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/voip-in-new/voip-in-new.component */ "aGf8");
/* harmony import */ var _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/voip-in-delete/voip-in-delete.component */ "JIgN");
/* harmony import */ var _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/employeesearch-voip-delete/employeesearch-voip-delete.component */ "IE7g");
/* harmony import */ var _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/revalidationpending/revalidationpending.component */ "pt/k");
/* harmony import */ var _components_voip_au_new_voip_au_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/voip-au-new/voip-au-new.component */ "PmSy");
/* harmony import */ var _components_voip_la_new_voip_la_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/voip-la-new/voip-la-new.component */ "Hq2D");
/* harmony import */ var _components_voip_in_update_voip_in_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/voip-in-update/voip-in-update.component */ "8sw4");
/* harmony import */ var _components_voip_emea_new_voip_emea_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/voip-emea-new/voip-emea-new.component */ "R5fI");
/* harmony import */ var _components_voip_in_move_voip_in_move_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/voip-in-move/voip-in-move.component */ "Uo6X");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "cw5x");
























const appRoutes = [
    { path: 'unauthorized', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'feedback', component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"] },
    { path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"] },
    // { path: 'services' , loadChildren: () => import('./components/navigation/navigation.component').then(m => m.ServicesComponent)}  
    { path: 'jabberservices', component: _components_jabberservices_jabberservices_component__WEBPACK_IMPORTED_MODULE_4__["JabberservicesComponent"] },
    { path: 'employeesearch', component: _components_employeesearch_employeesearch_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesearchComponent"] },
    { path: 'employeeinfo', component: _components_employeeinfo_employeeinfo_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeinfoComponent"] },
    { path: 'resultpage', component: _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_6__["ResultpageComponent"] },
    { path: 'requests', component: _components_requests_requests_component__WEBPACK_IMPORTED_MODULE_11__["RequestsComponent"] },
    { path: 'topcountryframe', component: _components_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_8__["TopcountryframeComponent"] },
    { path: 'searchresult', component: _components_servicessearch_servicessearch_component__WEBPACK_IMPORTED_MODULE_9__["ServicessearchComponent"] },
    { path: 'inprogress', component: _components_dummy_dummy_component__WEBPACK_IMPORTED_MODULE_13__["DummyComponent"] },
    { path: 'entrydetailsjd', component: _components_voip_in_delete_voip_in_delete_component__WEBPACK_IMPORTED_MODULE_15__["VoipInDeleteComponent"] },
    { path: 'entrydetails', component: _components_voip_in_new_voip_in_new_component__WEBPACK_IMPORTED_MODULE_14__["VoipInNewComponent"] },
    { path: 'entrydetailsiju', component: _components_voip_in_update_voip_in_update_component__WEBPACK_IMPORTED_MODULE_20__["VoipInUpdateComponent"] },
    { path: 'entrydetailsijm', component: _components_voip_in_move_voip_in_move_component__WEBPACK_IMPORTED_MODULE_22__["VoipInMoveComponent"] },
    { path: 'reviewdetails', component: _components_reviewdetails_reviewdetails_component__WEBPACK_IMPORTED_MODULE_10__["ReviewdetailsComponent"] },
    { path: 'resultpage', component: _components_resultpage_resultpage_component__WEBPACK_IMPORTED_MODULE_6__["ResultpageComponent"] },
    { path: 'employeesearchdelete', component: _components_employeesearch_voip_delete_employeesearch_voip_delete_component__WEBPACK_IMPORTED_MODULE_16__["EmployeesearchVoipDeleteComponent"] },
    { path: 'revalidationpending', component: _components_revalidationpending_revalidationpending_component__WEBPACK_IMPORTED_MODULE_17__["RevalidationpendingComponent"] },
    { path: 'entrydetailsau', component: _components_voip_au_new_voip_au_new_component__WEBPACK_IMPORTED_MODULE_18__["VoipAuNewComponent"] },
    { path: 'entrydetailsla', component: _components_voip_la_new_voip_la_new_component__WEBPACK_IMPORTED_MODULE_19__["VoipLaNewComponent"] },
    { path: 'entrydetailsemea', component: _components_voip_emea_new_voip_emea_new_component__WEBPACK_IMPORTED_MODULE_21__["VoipEmeaNewComponent"] },
    { path: 'resources', component: _components_resources_resources_component__WEBPACK_IMPORTED_MODULE_12__["ResourcesComponent"] },
    { path: 'pagenotfound', component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_23__["PagenotfoundComponent"] },
    { path: 'pagenotfound?error', component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_23__["PagenotfoundComponent"] },
    // {path: '**', redirectTo:'/pagenotfound?error'}
    { path: '**', component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_23__["PagenotfoundComponent"] }
];
const appRoutingProviders = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { onSameUrlNavigation: 'reload' });


/***/ }),

/***/ "cw5x":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 6, vars: 0, consts: [[1, "ds-row", "ds-text-align-center"], [1, "ds-col-xs-10", "ds-col-md-8", "ds-col-lg-6", "ds-col-xl-5", "ds-pad-t-2", "ds-pad-b-4", "ds-pad-t-md-3", "hp-heading"], [1, "ds-heading-xs-2", "ds-heading-md-1", "ds-pad-b-0_5"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The page you're looking for may not exists.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dP2x":
/*!***************************!*\
  !*** ./config/payload.ts ***!
  \***************************/
/*! exports provided: db2search, snowsearch, Jabber_New, Jabber_Delete, Jabber_Move, Jabber_Update, Special_Request, fixedphone_new, fixedphone_delete, fixedphone_update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db2search", function() { return db2search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snowsearch", function() { return snowsearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jabber_New", function() { return Jabber_New; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jabber_Delete", function() { return Jabber_Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jabber_Move", function() { return Jabber_Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jabber_Update", function() { return Jabber_Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Special_Request", function() { return Special_Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedphone_new", function() { return fixedphone_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedphone_delete", function() { return fixedphone_delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedphone_update", function() { return fixedphone_update; });
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
        this.default_call_permission = "";
    }
}
// class used to create the payload for snow delete jabber service
class Jabber_Delete {
    Jabber_Delete() {
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.ReqNo = "";
        this.countryname = "";
        this.request_type = "";
        this.evolution_instance = "";
        this.country_code = "";
    }
}
// class used to create the payload for snow move jabber service
class Jabber_Move {
    Jabber_Move() {
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.evolution_instance = "";
        this.Voice_Type_Disp = "";
        this.Projectid_Disp = "";
        this.default_call_permission = "";
        this.icano_Disp = "";
        this.BusinessUnit_Disp = "";
        this.Department_number_Disp = "";
        this.accid_Disp = "";
        this.level1_japproval = "";
        this.level2_japproval = "";
        this.Location_final = "";
        this.ReqNo = "";
        this.qag = "";
        this.class_of_serice = "";
        this.gvs_portal_link = "";
        this.gvs_approval_link = "";
        this.countryname = "";
        this.correct_location = "";
        this.Identifier_Disp = "";
        this.request_type = "";
    }
}
// class used to create the payload for snow update jabber service
class Jabber_Update {
    Jabber_Update() {
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.Projectid_Disp = "";
        this.icano_Disp = "";
        this.Department_number_Disp = "";
        this.accid_Disp = "";
        this.ReqNo = "";
        this.countryname = "";
        this.evolution_instance = "";
        this.gvs_portal_link = "";
        this.gvs_approval_link = "";
        this.Identifier_Selected = "";
        this.updated_for = "";
        this.request_type = "";
    }
}
// // class used to create the payload for snow special request service
class Special_Request {
    Special_Request() {
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.Identifier_Disp = "";
        this.Location_Disp = "";
        this.Comments = "";
        this.ReqNo = "";
        this.gvs_portal_link = "";
        this.countryname = "";
        this.request_type = "";
    }
}
// // class used to create the payload for snow fixed phone new service
class fixedphone_new {
    fixedphone_new() {
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.Buildings_Disp = "";
        this.Voice_Type_Disp = "";
        this.Projectid_Disp = "";
        this.icano_Disp = "";
        this.identifier_hp_Disp = "";
        this.BusinessUnit_Disp = "";
        this.Department_number_Disp = "";
        this.Location_final = "";
        this.accid_Disp = "";
        this.ReqNo = "";
        this.Device_Type_Disp = "";
        this.Model_Disp = "";
        this.MAC_Disp = "";
        this.Voicemail_Disp = "";
        this.Desc_Disp = "";
        this.LocationCorrect = "";
        this.COS_Disp = "";
        this.Justification_Disp = "";
        this.level2_japproval = "";
        this.countryname = "";
        this.request_type = "";
        this.evolution_instance = "";
        this.level1_japproval = "";
        this.gvs_portal_link = "";
        this.gvs_approval_link = "";
        this.SLA_type = "";
        this.country_code = "";
    }
}
// // class used to create the payload for snow fixed phone delete service
class fixedphone_delete {
    fixedphone_delete() {
        this.request_type = "";
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.Identifier = "";
        this.ReqNo = "";
        this.mac = "";
        this.olddesc = "";
        this.ccmail = "";
        this.countryname = "";
        this.evolution_instance = "";
        this.gvs_portal_link = "";
    }
}
// // class used to create the payload for snow fixed phone update service
class fixedphone_update {
    fixedphone_update() {
        this.request_type = "";
        this.orinator_payload = "";
        this.cNum_payload = "";
        this.Comments_Disp = "";
        this.Newdesc_Disp = "";
        this.NewModel_Disp = "";
        this.MAC_Disp = "";
        this.updatereq_Disp = "";
        this.currmodel = "";
        this.olddesc = "";
        this.Identifier = "";
        this.MAC = "";
        this.Location_fina = "";
        this.LocationCorrectnew = "";
        this.ReqNo = "";
        this.countryname = "";
        this.Location_Disp = "";
        this.evolution_instance = "";
        this.gvs_portal_link = "";
        this.gvs_approval_link = "";
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
        this.requestResult =
            {
                serviceName: this.getPage(),
                serviceNumber: sessionStorage.getItem('reqno')
            };
        const servicesData = {
            "data": [
                {
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
    getPage() {
        if (this.service == 'jabber_new') {
            this.page = 'new Jabber';
            return this.page;
        }
        if (this.service == 'jabber_delete') {
            this.page = 'delete Jabber';
            return this.page;
        }
        if (this.service == 'jabber_update') {
            this.page = 'update Jabber';
            return this.page;
        }
    }
}
ResultpageComponent.ɵfac = function ResultpageComponent_Factory(t) { return new (t || ResultpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_3__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ResultpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultpageComponent, selectors: [["app-resultpage"]], decls: 19, vars: 4, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-row"], [1, "ds-col-1"], ["src", "assets/tick.png"], [1, "ds-col-11"], [1, "ds-pad-b-1"], [1, "ds-pad-t-1"], [1, "ds-pad-t-1", "ds-pad-b-1"]], template: function ResultpageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tracking number for the request is : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "You will receive an email notification, when your request has been processed.");
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
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../steps/steps.component */ "52XD");










function RequestsComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No outstanding requests were found for the serial number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestsComponent_div_5_table_12_tr_15_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_div_5_table_12_tr_15_span_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.openNav(ctx_r9.snowdataarray[i_r6]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.lastcomment[i_r6]);
} }
function RequestsComponent_div_5_table_12_tr_15_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.lastcomment[i_r6]);
} }
function RequestsComponent_div_5_table_12_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestsComponent_div_5_table_12_tr_15_span_11_Template, 3, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestsComponent_div_5_table_12_tr_15_span_12_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const no_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r5.cat_item.display_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, no_r5.sys_created_on, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", no_r5.stage, "", ctx_r4.approver[i_r6], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](no_r5["variables.6b7d0e981b3f84d08476dc26bc4bcb75"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.snowdataarray[i_r6].includes("none" || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.snowdataarray[i_r6].includes("none" || false));
} }
function RequestsComponent_div_5_table_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Resource Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tracking Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Additional Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RequestsComponent_div_5_table_12_tr_15_Template, 13, 10, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.snowdata);
} }
function RequestsComponent_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmts_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cmts_r14, " ");
} }
function RequestsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-steps", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Employee Requests Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RequestsComponent_div_5_div_11_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RequestsComponent_div_5_table_12_Template, 16, 1, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_div_5_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.closeNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RequestsComponent_div_5_div_24_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", ctx_r0.servicesData.step)("isSelf", ctx_r0.reqFor)("hideSteps", ctx_r0.hideSteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfosnowreq);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.warninginfosnowreq == false);
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
        this.approver = [];
        this.comments = [];
        this.snowdataarray = [];
        this.snowdataarray1 = [];
        this.commentsresult = [];
        this.lastcomment = [];
        this.warninginfosnowreq = false;
        this.hideSteps = true;
    }
    openNav(comments) {
        this.DisplayModel = 'block';
        console.log("popup" + comments);
        //this.allComments = comments;
        this.allComments.push(comments);
    }
    closeNav() {
        this.allComments = [];
        this.DisplayModel = 'none';
    }
    ngOnInit() {
        this.display = false;
        this.snowdata = sessionStorage.getItem('identifier');
        this.empserial = sessionStorage.getItem('empserial');
        this.sessionwarninginfosnow = sessionStorage.getItem('warninginfosnow');
        this.reqFor = sessionStorage.getItem('radioAction');
        if (this.sessionwarninginfosnow == 'false1') {
            this.warninginfosnowreq = true;
            this.display = true;
        }
        else {
            console.log(this.snowdata.length);
            var parsed = JSON.parse(JSON.stringify(JSON.parse(this.snowdata)));
            this.snowdata = parsed;
            console.log(this.snowdata.length);
            for (this.i = 0; this.i < this.snowdata.length; this.i++) {
                this.stage = '';
                this.stage = this.snowdata[this.i].stage.toLowerCase();
                if ((this.stage === "waiting for approval" || this.stage === "rejected") && this.stage !== "closed incomplete") {
                    this.servicenowservice.searchsnowcoments(this.empserial, "snow_approver", '-NS-' + this.empserial.substr(0, 6), this.snowdata[this.i].number).subscribe(data => {
                        this.approver.push("(" + data.message[0]['approver.name'] + ")");
                    });
                }
                else {
                    //this.approver.push([])
                }
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
                        this.lastcomment.push("none");
                        this.display = true;
                    }
                    else {
                        this.snowdataarray.push(data.message.results);
                        this.snowdataarray1 = data.message.results.split("UTC");
                        this.lastcomment.push(this.snowdataarray1[this.snowdataarray1.length - 1]);
                        this.display = true;
                    }
                });
            }
        }
        const servicesData = {
            "data": [
                {
                    "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                    "step": 3,
                }
            ]
        };
        this.servicesData = servicesData.data[0];
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"])); };
RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 6, vars: 2, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav"], ["class", "ds-col-md-8 ds-col-xl-7 ds-pad-l-2_5", 4, "ngIf"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [1, "ds-pad-b-1"], [3, "step", "isSelf", "hideSteps"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-pad-l-0_5"], ["class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["style", "width:100%; border-collapse: collapse; padding:2px", 4, "ngIf"], ["id", "myNav", 1, "overlay", "ds-pad-t-5"], [1, "overlay-content"], [1, "ds-row", "ds-bg-neutral-1"], [1, "ds-mar-r-1"], [1, "ds-float-right", 3, "click"], [1, "ds-pad-l-5", "ds-pad-b-3", "ds-pad-r-1"], ["id", "inval", "style", "padding-left: 1rem;", 4, "ngFor", "ngForOf"], [1, "ds-col-xs-12", "ds-alert", "ds-warning"], [2, "width", "100%", "border-collapse", "collapse", "padding", "2px"], [1, "ds-bg-neutral-warm-2", "ds-text-neutral-7", "ds-font-weight-bold"], [2, "padding", "5px 15px 5px 25px", "padding-left", "15px"], [2, "padding", "5px 55px 5px 25px", "padding-left", "15px"], [2, "padding", "5px 65px 9px 50px", "padding-left", "15px"], [2, "padding", "5px 55px 5px 50px", "padding-left", "15px"], [2, "padding", "5px 15px 5px 10px", "padding-left", "15px"], [4, "ngFor", "ngForOf"], [2, "padding-top", "13px", "padding-left", "15px"], [2, "width", "30%", "padding-top", "13px", "padding-left", "15px"], [4, "ngIf"], [2, "color", "blue", 3, "click"], ["id", "inval", 2, "padding-left", "1rem"]], template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RequestsComponent_div_5_Template, 26, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataNav", ctx.servicesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_8__["StepsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".overlay[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: blue;\r\n}\r\n\r\n.overlay-content[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 280px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 150%;\r\n  left: 40%;\r\n  margin-left: -100px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .newtooltiptext[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  width: 280px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 150%;\r\n  left: 80%;\r\n  margin-left: -100px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .newtooltiptext[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJyZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi5vdmVybGF5IGEge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ub3ZlcmxheSBhOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMTUwJTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4udG9vbHRpcCAubmV3dG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDE1MCU7XHJcbiAgbGVmdDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC5uZXd0b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufSJdfQ== */"] });
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













function EmployeesearchComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fullName, " ");
} }
function EmployeesearchComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.ccode);
} }
function EmployeesearchComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Serial Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesearchComponent_div_48_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hidedata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(eg 012789)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModel", ctx_r5.empno);
} }
function EmployeesearchComponent_tr_49_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCountry_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subCountry_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subCountry_r15);
} }
function EmployeesearchComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeesearchComponent_tr_49_Template_select_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.hidedata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeesearchComponent_tr_49_option_14_Template, 2, 2, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.subCountries);
} }
function EmployeesearchComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "font", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("There is no record of an IBM employee with the serial number ", ctx_r7.employeeSerial.substr(0, 6), " available from BluePages");
} }
function EmployeesearchComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! Some thing went worng.Please try again latter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeesearchComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/jabberservices"]; };
const _c1 = function (a0, a1) { return { country: a0, service: a1 }; };
function EmployeesearchComponent_input_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 56);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r10.pcode, ctx_r10.service));
} }
function EmployeesearchComponent_input_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 57);
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
        this.subCountries = [];
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
        this.errorinfo = false;
        this.showCountryCode = false;
        this.countryCA = '';
        this.itns = [];
    }
    ngOnInit() {
        this.showloader = false;
        this.fullName = this.cookie.getCookie('username');
        this.ccode = this.cookie.getCookie('ccode');
        this.countrydetails = sessionStorage.getItem('countrydetails');
        this.countrydetails = JSON.parse(this.countrydetails);
        this.route.queryParams
            .subscribe(params => {
            console.log(params);
            this.pcode = params.country;
            this.service = params.service;
            console.log("navigation component" + this.pcode);
            this.backbutton = sessionStorage.getItem('backbutton');
            this.step = sessionStorage.getItem('step');
            //to get the titles
            //this.radioAction = "mySelf"; 
            if (sessionStorage.getItem('radioAction') === null || sessionStorage.getItem('radioAction') === '') {
                //if ("radioAction" in localStorage) {
                this.radioAction = "myself";
            }
            else {
                this.radio = sessionStorage.getItem('radioAction');
                console.log("radiabutton" + this.radio);
                this.radioAction = this.radio;
                this.empno = sessionStorage.getItem('empserial');
                this.onRequestForChangesession();
            }
            //for lhs
            const servicesData = {
                "data": [
                    {
                        "services": ["Jabber", "Fixed Phone", "FAC Code", "Special Request"],
                        "step": 1,
                    }
                ]
            };
            this.servicesData = servicesData.data[0];
            this.getTitle();
            if (this.countrydetails.scountries) {
                this.showCountryCode = true;
                this.subCountries = this.countrydetails.scountries;
            }
        });
    }
    onSubmit(formData) {
        sessionStorage.setItem('radioAction', this.radioAction.toLowerCase());
        console.log(this.pcode + this.ccode);
        if (this.radioAction.toLowerCase() == "myself" && this.pcode !== this.ccode.substr(6, 9)) {
            alert("Only " + this.countrydetails.name + " Serial numbers are allowed to create a request for " + this.countrydetails.name);
            return;
        }
        if (this.radioAction.toLowerCase() == "anotheremployee") {
            if (formData.value.employeeSerial.length == 0 && this.hideDisTextBox == true) {
                alert("Please enter a serial number");
                return;
            }
            else if (formData.value.employeeSerial.length < 6 && this.hideDisTextBox == true) {
                alert("Employee Serial Number should be of 6 characters");
                return;
            }
            else if (this.showCountryCode && this.hideDisTextBox && formData.value.selectedCountry === '') {
                alert("Please select the Country Code");
                return;
            }
            else {
                sessionStorage.setItem('empserial', formData.value.employeeSerial);
                if (this.showCountryCode) {
                    this.employeeSerial = formData.value.employeeSerial + (formData.value.selectedCountry).substr(formData.value.selectedCountry.length - 3);
                }
                else {
                    this.employeeSerial = formData.value.employeeSerial + this.pcode;
                }
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
                    this.navpage = this.routingname;
                    this.navpage1 = this.routingname;
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
                    email: data.username.preferredidentity,
                    sno: data.username.uid
                };
                sessionStorage.setItem('employeeInfo', JSON.stringify(this.employeeInfo));
                sessionStorage.setItem('cnum', this.employeeSerial);
                this.warninginfo = false;
                this.warninginfosnow = false;
                sessionStorage.setItem('warninginfo', 'false1');
                sessionStorage.setItem('warninginfosnow', 'false1');
                sessionStorage.setItem('identifier', '');
                //Data and routing 
                if (this.service == "jabber_new") {
                    this.getDBdata();
                }
                if (this.service == "requests") {
                    this.getSNOWdata();
                }
                if (this.service == "resources" || this.service == "jabber_delete" || this.service == "jabber_update" || this.service == 'jabber_move') {
                    this.getDBdata();
                }
                //end data and routing
            }
            else {
                this.showloader = false;
                this.notvalid = true;
            }
            sessionStorage.setItem('title', this.title);
            sessionStorage.setItem('navpage', this.routingname);
            //this.isDataLoaded=true
        });
    }
    getSNOWdata() {
        this.servicenowservice.searchsnow(this.employeeSerial, this.service, this.countrydetails.isocode + this.reqname + this.employeeSerial.substr(0, 6)).subscribe(data => {
            console.log(' snow response', data);
            console.log(' snow response', data.message.length);
            if (data.message.length > 0) {
                console.log(' snow response1', data.message.length);
                this.warninginfosnow = true;
                sessionStorage.setItem('warninginfosnow', 'true1');
                this.identifier = data.message;
                sessionStorage.setItem('identifier', JSON.stringify(this.identifier));
                sessionStorage.setItem('identifier1', JSON.stringify(this.identifier));
                this.datasnow = "yes";
                this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
            }
            else {
                this.datasnow = "nodata";
                if (this.service == "jabber_new" || this.service == "jabber_move") {
                    this.getLocationdata();
                }
                else {
                    if (this.radioAction.toLowerCase() == "anotheremployee") {
                        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
                    }
                    else {
                        this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
                    }
                }
            }
        }, (error) => {
            console.error('error caught in component' + error);
            this.errorinfo = true;
            this.showloader = false;
        });
        return this.datasnow;
    }
    getDBdata() {
        this.Db2Service.search_db2(this.employeeSerial, this.service).subscribe(data => {
            console.log(' db2 response', data);
            console.log(' db2 response', data.message.length);
            if (data.message.length > 0) {
                this.warninginfo = true;
                sessionStorage.setItem('warninginfo', 'true1');
                for (var i = 0; i < data.message.length; i++) {
                    this.itns[i] = data.message[i].IDENTIFIER.trim();
                }
                // this.identifier = data.message[0].IDENTIFIER
                if (this.service == "resources") {
                    sessionStorage.setItem('identifier', JSON.stringify(data.message));
                    this.datadb = "yes";
                }
                else {
                    sessionStorage.setItem('identifier', this.itns);
                    this.datadb = "yes";
                }
                if (this.service == "jabber_delete" || this.service == 'jabber_update' || this.service == 'jabber_move') {
                    console.log("insidesnowdelete");
                    this.getSNOWdata();
                    this.datadb = "yes";
                }
                else {
                    this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
                }
            }
            else {
                console.log("nodb2data");
                this.datadb = "nodata";
                if (this.service == "jabber_new") {
                    this.getSNOWdata();
                }
                else {
                    if (this.radioAction.toLowerCase() == "anotheremployee") {
                        this.router.navigate([this.navpage1], { queryParams: { country: this.pcode, service: this.service } });
                    }
                    else {
                        this.router.navigate([this.navpage], { queryParams: { country: this.pcode, service: this.service } });
                    }
                }
            }
        }, (error) => {
            console.error('error caught in component' + error);
            this.errorinfo = true;
            this.showloader = false;
        });
        return this.datadb;
    }
    getLocationdata() {
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
    getRoutingname() {
    }
    getTitle() {
        //for title
        switch (this.service) {
            case "jabber_new":
                this.title = "Request new Jabber service";
                if (this.countrydetails.jnavpage == 'AP') {
                    this.routingname = "/entrydetails";
                }
                else if (this.countrydetails.jnavpage == 'EMEA') {
                    this.routingname = "/entrydetailsemea";
                }
                this.reqname = "-NS-";
                break;
            case "jabber_delete":
                this.title = "Delete Jabber Request";
                this.routingname = "/entrydetailsjd";
                this.reqname = "-DS-";
                break;
            case "jabber_update":
                this.title = "Update Jabber Request";
                this.routingname = "/entrydetailsiju";
                this.reqname = "-US-";
                break;
            case "jabber_move":
                this.title = "Move Jabber Request";
                this.routingname = "/entrydetailsijm";
                this.reqname = "-MS-";
                break;
            case "resources":
                this.title = "Resources";
                break;
            case "requests":
                this.title = "Requests";
                break;
            case "approvalpending":
                this.title = "Approvals";
                break;
        }
    }
    hidedata() {
        this.notvalid = false;
        this.errorinfo = false;
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
EmployeesearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesearchComponent, selectors: [["app-employeesearch"]], decls: 62, vars: 19, consts: [[1, "ds-panel", "ds-col-12"], [1, "ds-row", "ds-pad-l-7", "ds-pad-t-1", "ds-pad-b-4"], [1, "ds-col-md-4", "ds-col-xl-4"], [3, "dataNav", "cloudantData"], [1, "ds-col-md-8", "ds-col-xl-7", "ds-pad-l-2_5"], [3, "ngSubmit"], ["formData", "ngForm"], [1, "ds-pad-t-0_5", "ds-pad-b-1"], [1, "ds-text-contextual-red-2"], [1, "ds-hr-thick", "ds-mar-b-1_5"], [3, "step", "isSelf", "hideSteps"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], ["width", "100%", "cellspacing", "0", "cellpadding", "0", "border", "0"], ["valign", "top"], ["width", "41%"], [1, "ds-input-container"], ["role", "group", "aria-labelledby", "horizontal-radio-buttons-example", 1, "ds-input-radio-group", "ds-flex"], [1, "ds-input-radio", "ds-mar-r-1"], ["type", "radio", "name", "radio-group2", "id", "radio4", "value", "myself", 1, "ds-input", 3, "ngModel", "ngModelChange", "change", "click"], [1, "ds-input-control"], ["for", "radio4"], [1, "ds-input-radio"], ["type", "radio", "name", "radio-group2", "id", "radio5", "value", "anotheremployee", 1, "ds-input", 3, "ngModel", "ngModelChange", "change", "click"], ["for", "radio5"], [4, "ngIf"], ["class", "ds-pad-t-1", 4, "ngIf"], ["colspan", "2"], ["class", "ds-col-xs-12 ds-mar-t-1 ds-alert ds-warning", "id", "error", 4, "ngIf"], ["class", "ds-col-xs-12 ds-alert ds-warning", 4, "ngIf"], ["class", "ds-loader-container", 4, "ngIf"], [1, "ds-col-19", "ds-pad-t-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-mar-b-0"], [1, "button-bar", "ds-tray-fit-content", "ds-pad-t-1", "ds-float-lg-right"], ["id", "button1", 1, "ds-pad-l-4"], ["type", "button", "name", "EXIT REQUEST", "class", "ds-button ds-secondary \n                            ds-width-auto ds-mar-b-0 ds-pad-l-1 ds-pad-r-1", "value", "EXIT REQUEST", 3, "routerLink", "queryParams", 4, "ngIf"], ["id", "button2", 1, "ds-pad-l-1", "ds-pad-r-1"], ["type", "submit", "name", "next", "class", "ds-button ds-width-auto ds-mar-b-0 ds-pad-l-3 \n                            ds-pad-r-3", "value", "Next", 4, "ngIf"], ["for", "OriginatorNameId"], [1, "ds-pad-t-1"], [1, "ds-col-4"], ["maxlength", "6", "name", "employeeSerial", "ngModel", "", "type", "text", 1, "ds-input", 3, "ngModel", "click"], [1, "ds-col-6", "ds-pad-t-0_5", "ds-pad-l-0_3"], [2, "color", "#808080"], [1, "ds-pad-t-2"], [1, "row", "ds-pad-t-2"], ["tabindex", "0", "role", "menu", "aria-label", "w3DS Dropdown1", 1, "ds-dropdown", "ds-secondary"], ["name", "selectedCountry", "rows", "2", "cols", "40", "id", "sub-Countries", "title", "CountryCode", "tabindex", "1", "ngModel", "", 1, "ds-title", "ds-align-text-left", 2, "width", "230px !important", "text-transform", "uppercase", 3, "click"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "error", 1, "ds-col-xs-12", "ds-mar-t-1", "ds-alert", "ds-warning"], ["color", "black"], [1, "ds-col-xs-12", "ds-alert", "ds-warning"], [1, "ds-loader-container"], [1, "ds-loader-header"], ["role", "alert", "aria-busy", "true", "aria-label", "", 1, "ds-loader"], ["type", "button", "name", "EXIT REQUEST", "value", "EXIT REQUEST", 1, "ds-button", "ds-secondary", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-1", "ds-pad-r-1", 3, "routerLink", "queryParams"], ["type", "submit", "name", "next", "value", "Next", 1, "ds-button", "ds-width-auto", "ds-mar-b-0", "ds-pad-l-3", "ds-pad-r-3"]], template: function EmployeesearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topcountryframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeesearchComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This request can be submitted for yourself, or on behalf of another employee. Fields marked with an asterisk (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ") are required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-steps", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Employee Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Who is this request for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchComponent_Template_input_ngModelChange_29_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchComponent_Template_input_change_29_listener() { return ctx.onRequestForChange(); })("click", function EmployeesearchComponent_Template_input_click_29_listener() { return ctx.hidedata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Myself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeesearchComponent_Template_input_ngModelChange_34_listener($event) { return ctx.radioAction = $event; })("change", function EmployeesearchComponent_Template_input_change_34_listener() { return ctx.onRequestForChange(); })("click", function EmployeesearchComponent_Template_input_click_34_listener() { return ctx.hidedata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Another Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EmployeesearchComponent_tr_38_Template, 6, 1, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EmployeesearchComponent_div_41_Template, 3, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EmployeesearchComponent_div_43_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EmployeesearchComponent_div_46_Template, 5, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EmployeesearchComponent_div_48_Template, 6, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, EmployeesearchComponent_tr_49_Template, 15, 1, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EmployeesearchComponent_p_50_Template, 3, 1, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EmployeesearchComponent_div_51_Template, 5, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EmployeesearchComponent_div_54_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EmployeesearchComponent_input_59_Template, 1, 6, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, EmployeesearchComponent_input_61_Template, 1, 0, "input", 36);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideDisTextBox && ctx.showCountryCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorinfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showloader && !ctx.notvalid && !ctx.errorinfo);
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_7__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_10__["StepsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.ds-text-contextual-green-3[_ngcontent-%COMP%] {\r\n    color: #27aa7c !important;\r\n}\r\n\r\n.ds-text-contextual-blue-5[_ngcontent-%COMP%] {\r\n    color: #0370b0 !important;\r\n    font-family: \"IBMPlexSans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNFQUFzRTs7QUFFMUUiLCJmaWxlIjoiZW1wbG95ZWVzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRzLXRleHQtY29udGV4dHVhbC1ncmVlbi0zIHtcclxuICAgIGNvbG9yOiAjMjdhYTdjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcy10ZXh0LWNvbnRleHR1YWwtYmx1ZS01IHtcclxuICAgIGNvbG9yOiAjMDM3MGIwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJJQk1QbGV4U2Fuc1wiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIFxyXG59Il19 */"] });
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
/* harmony import */ var _services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/translate-config.service */ "5V17");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../filter.pipe */ "i6q1");











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
    constructor(Service, cookie, bpservice, cloudantservice, translateconfigservice) {
        this.Service = Service;
        this.cookie = cookie;
        this.bpservice = bpservice;
        this.cloudantservice = cloudantservice;
        this.translateconfigservice = translateconfigservice;
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
    changeLanguage(type) {
        this.translateconfigservice.changeLanguage(type);
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
            sessionStorage.setItem('pagedisplay', 'homepage');
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_1__["ConnectCucdmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bp_service__WEBPACK_IMPORTED_MODULE_3__["bpservices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 77, vars: 24, consts: [[1, "ds-row", "ds-bg-dark", "ds-pad-t-2_4", 2, "background-image", "url(././assets/banner.png)", "background-position", "center", "background-size", "cover", "background-repeat", "no-repeat"], [1, "ds-col-xs-10", "ds-offset-xs-3", "ds-mar-t-3", "ds-col-lg-8", "ds-offset-lg-2", "ds-col-xl-6", "ds-offset-xl-3", "ds-text-align-center", "ds-shadow-text"], [1, "ds-heading-xs-2", "ds-heading-lg-2", "ds-shadow-text"], [1, "ds-text-align-left"], [1, "ds-row"], [1, "ds-text-align-center", "ds-heading-2"], [1, "ds-col-xs-30", 2, "font-size", "48px"], [1, "ds-heading-3", "ds-text-align-center"], [2, "font-size", "30px"], [1, "ds-padding-top-0_5", "ds-row", "ds-text-align-center"], [1, "ds-col-sm-4", "md-2", "xl-5"], ["type", "text", "id", "search-text", "aria-describedby", "search-text", "placeholder", "Search service...", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-row", "ds-text-align-center", 2, "background-color", "#f3f3f3"], [1, "ds-col-sm-6", "ds-padding-bottom-1_5", "ds-padding-right-3_5", "ds-text-align-right", "ds-padding-top-1_5"], ["routerLinkActive", "active ", "data", "{cdetails:this.countryname}", 3, "routerLink", "queryParams"], [1, "ds-text-align-center", "ds-border-neutral-5", 3, "src"], [1, "ds-col-sm-6", "ds-text-align-left", "ds-padding-top-1"], [1, "ds-padding-left-3", 2, "font-size", "30px"], ["data", "{cdetails:this.countryname}", 3, "routerLink", "queryParams"], [1, "ds-padding-left-3"], [1, "ds-text-align-center", "ds-heading-4", "ds-margin-bottom-0"], [1, "ds-text-align-center", "ds-heading-5", "ds-margin-bottom-0"], [1, "ds-row", "ds-text-align-center", "ds-padding-left-1", "ds-padding-right-1"], [1, "ds-col-3", "ds-padding-left-1"], [1, "ds-panel"], [1, "ds-panel-container"], ["src", "././assets/Jabber.png ", "width", "93px ", "height", "93px "], [1, "ds-text-small", "ds-align-text-left", "ds-padding-bottom-2"], ["id", "button2 ", 1, "button-blue"], ["type", "button ", "name", "next ", "tabindex", "15 ", "data", "{cdetails:this.countryname}", "value", "Get Started ", 1, "ds-button", "ds-secondary", "ds-margin-bottom-0", "ds-padding-top-1", "ds-padding-bottom-1", 3, "routerLink", "queryParams"], ["name", "country_code ", "type", "hidden", 3, "value"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "queryParams", 4, "ngIf"], [3, "routerLink", "queryParams"], ["width", "28;", "height", "20;", 1, "ds-border-neutral-5", 3, "src"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 31);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ccode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _demo_service__WEBPACK_IMPORTED_MODULE_1__["ConnectCucdmService"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_2__["CookieHandlerService"] }, { type: _services_bp_service__WEBPACK_IMPORTED_MODULE_3__["bpservices"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_4__["cloudantservice"] }, { type: _services_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"] }]; }, null); })();


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
/* harmony import */ var src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/translate-config.service */ "5V17");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("lhs.", nav_r1.name, "");
} }
class NavigationComponent {
    constructor(cookie, cloudantservice, route, translateconfigservice) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.route = route;
        this.translateconfigservice = translateconfigservice;
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
            if ((this.service).includes("resources")) {
                this.reshl = true;
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
                                { "name": "Resources", "routingname": "/employeesearch", "indented": this.resin, "highlighted": this.reshl, "param": "resources" },
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
                                { "name": "FAC Code", "routingname": "/inprogress", "indented": true, "highlighted": this.fhl, "param": "jabberservices" },
                                { "name": "Approvals Pending", "routingname": "/inprogress", "indented": false, "highlighted": false, "param": "services" },
                                { "name": "Revalidation Pending", "routingname": "/inprogress", "indented": false, "highlighted": false, "param": "services" },
                                { "name": "Resources", "routingname": "/employeesearch", "indented": this.resin, "highlighted": this.reshl, "param": "resources" },
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
                    "isjabberupdate": this.countryname.isjabberupdate,
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
                    this.dataNavParent = this.dataNav123;
                    //end for lhs
                    this.dataNav123 = this.dataNav123;
                    this.dataNavParent = this.dataNav123;
                    this.removeServices();
                });
                //for lhs
            }
        });
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { dataNavParent1: ["dataNav", "dataNavParent1"], cloudantData1: ["cloudantData", "cloudantData1"] }, decls: 4, vars: 1, consts: [[1, "ds-row", "ds-pad-t-1", "ds-pad-b-2"], [1, "ds-panel", "ds-bg-neutral-warm-1", "ds-no-border"], [1, "ds-list-unstyled", "ds-hover"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["translate", "", 3, "routerLink", "queryParams", "ngClass", "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"] }]; }, { dataNavParent1: [{
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
/* harmony import */ var _services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/servicenow.service */ "qWuM");
/* harmony import */ var _topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topcountryframe/topcountryframe.component */ "aDsg");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");








class DummyComponent {
    constructor(cookie, cloudantservice, Db2Service, servicenowservice) {
        this.cookie = cookie;
        this.cloudantservice = cloudantservice;
        this.Db2Service = Db2Service;
        this.servicenowservice = servicenowservice;
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
        this.Db2Service.search_db2('06685M744', 'jabber_delete').subscribe(data => {
            console.log(' db2 response', data);
        });
        // Code to search Snow
        this.servicenowservice.searchsnow('06685M744', 'jabber_delete', 'IN-DS-06685M').subscribe(data => {
            console.log(' snow response', data);
        });
    }
}
DummyComponent.ɵfac = function DummyComponent_Factory(t) { return new (t || DummyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"])); };
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
    } }, directives: [_topcountryframe_topcountryframe_component__WEBPACK_IMPORTED_MODULE_5__["TopcountryframeComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdW1teS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DummyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dummy',
                templateUrl: './dummy.component.html',
                styleUrls: ['./dummy.component.css']
            }]
    }], function () { return [{ type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"] }, { type: _services_db2_service__WEBPACK_IMPORTED_MODULE_3__["Db2Service"] }, { type: _services_servicenow_service__WEBPACK_IMPORTED_MODULE_4__["servicenowservice"] }]; }, null); })();


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
    submit_request(Jabber_new_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, Jabber_new_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
        // .pipe(catchError((error) => {
        //   console.log('error is intercept')
        //   console.error(error);
        //   return throwError(error);
        // }))
    }
    submit_request_delete(Jabber_delete_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, Jabber_delete_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    submit_request_update(Jabber_update_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, Jabber_update_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    submit_request_move(Jabber_move_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, Jabber_move_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    submit_request_fixed_new(fixedphone_new_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, fixedphone_new_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    submit_request_fixed_delete(fixedphone_delete_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, fixedphone_delete_payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
    }
    submit_request_fixed_update(fixedphone_update_payload) {
        console.log('calling snow');
        return this.http.post(this.submitUrl, fixedphone_update_payload)
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
        // .pipe((error) => {
        //   console.log('error is intercept')
        //   console.error(error);
        //   return throwError(error);
        // })
    }
    errorhandler(error) {
        console.log('error is intercept');
        console.log(error.message);
        //return Observable.throw(error.message || "Sever Error");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
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
        console.log('calling db2' + this.payload);
        return this.http.post(this.Url, this.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorhandler));
        // .pipe((error) => {
        //   console.log('error is intercept')
        //   return throwError(error);
        // })
    }
    errorhandler(error) {
        console.log('error is intercept');
        console.log(error.message);
        //return Observable.throw(error.message || "Sever Error");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
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







function UitoplinksComponent_div_45_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} if (rf & 2) {
    const searchResult_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", searchResult_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UitoplinksComponent_div_45_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 37);
} }
const _c0 = function () { return ["/services"]; };
const _c1 = function (a0) { return { country: a0, service: "services" }; };
function UitoplinksComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_div_45_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeDropdown("services-nav"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UitoplinksComponent_div_45_img_2_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UitoplinksComponent_div_45_span_3_Template, 1, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const searchResult_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, searchResult_r1.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", searchResult_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !searchResult_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](searchResult_r1.name);
} }
const _c2 = function () { return ["/"]; };
const _c3 = function () { return ["/feedback"]; };
class UitoplinksComponent {
    constructor(_eref, cookie, route) {
        this._eref = _eref;
        this.cookie = cookie;
        this.route = route;
        this.searchText = '';
        this.ccode = '';
        this.routerPath = '';
        this.searchItems = [
            { "name": "India", "code": "744", "path": "././assets/flags/744.png" },
            { "name": "France", "code": "706", "path": "././assets/flags/706.png" },
            { "name": "Canada/Caribbean", "code": "649", "path": "" },
            { "name": "Latin America", "code": "631", "path": "././assets/flags/631.png" },
            { "name": "USA", "code": "897", "path": "././assets/flags/897.png" },
        ];
    }
    ngOnInit() {
        this.ccode = this.cookie.getCookie('ccode').substring(6, 9);
        this.route.queryParams
            .subscribe(params => {
            this.routerPath = window.location.pathname;
            if (this.routerPath === '/') {
                this.toggleHighlight('home-nav');
            }
            else if (this.routerPath === '/feedback') {
                this.toggleHighlight('feed-nav');
            }
            else {
                this.toggleHighlight('services-nav');
            }
        });
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
    closeDropdown(id) {
        var _a;
        (_a = document.getElementById('countrydropdown')) === null || _a === void 0 ? void 0 : _a.classList.remove('show');
        this.searchText = '';
        this.toggleHighlight(id);
    }
    toggleHighlight(id) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (id === 'home-nav') {
            (_a = document.getElementById('home-nav')) === null || _a === void 0 ? void 0 : _a.classList.add('ds-bg-neutral-5');
            (_b = document.getElementById('services-nav')) === null || _b === void 0 ? void 0 : _b.classList.remove('ds-bg-neutral-5');
            (_c = document.getElementById('feed-nav')) === null || _c === void 0 ? void 0 : _c.classList.remove('ds-bg-neutral-5');
        }
        if (id === 'services-nav') {
            (_d = document.getElementById('home-nav')) === null || _d === void 0 ? void 0 : _d.classList.remove('ds-bg-neutral-5');
            (_e = document.getElementById('services-nav')) === null || _e === void 0 ? void 0 : _e.classList.add('ds-bg-neutral-5');
            (_f = document.getElementById('feed-nav')) === null || _f === void 0 ? void 0 : _f.classList.remove('ds-bg-neutral-5');
        }
        if (id === 'feed-nav') {
            (_g = document.getElementById('home-nav')) === null || _g === void 0 ? void 0 : _g.classList.remove('ds-bg-neutral-5');
            (_h = document.getElementById('services-nav')) === null || _h === void 0 ? void 0 : _h.classList.remove('ds-bg-neutral-5');
            (_j = document.getElementById('feed-nav')) === null || _j === void 0 ? void 0 : _j.classList.add('ds-bg-neutral-5');
        }
    }
}
UitoplinksComponent.ɵfac = function UitoplinksComponent_Factory(t) { return new (t || UitoplinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
UitoplinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UitoplinksComponent, selectors: [["app-uitoplinks"]], hostBindings: function UitoplinksComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 47, vars: 14, consts: [["href", "https://w3.ibm.com/", "id", "ds-w3-injectable-nav", "data-layout", "1", "data-height", "79", "data-breakpoint", "md", "target", "_blank", 1, "ds-hide-xs", "ds-display-md-block", "light", "md", 2, "height", "79px", "margin-left", "20px"], ["id", "w3-nav-full-overlay-injectable-open", "width", "91px", "height", "99px", "viewBox", "0 0 71 99", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "path-1", "points", "0.3828125 0.0936521943 0.3828125 61 35.62839 79 71 61 71 0.151757577"], ["x", "-22.7%", "y", "-18.8%", "width", "145.3%", "height", "137.7%", "filterUnits", "objectBoundingBox", "id", "filter-2"], ["radius", "1", "operator", "dilate", "in", "SourceAlpha", "result", "shadowSpreadOuter1"], ["dx", "0", "dy", "0", "in", "shadowSpreadOuter1", "result", "shadowOffsetOuter1"], ["stdDeviation", "5", "in", "shadowOffsetOuter1", "result", "shadowBlurOuter1"], ["in", "shadowBlurOuter1", "in2", "SourceAlpha", "operator", "out", "result", "shadowBlurOuter1"], ["values", "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0", "type", "matrix", "in", "shadowBlurOuter1"], ["x", "-22.7%", "y", "-24.4%", "width", "145.3%", "height", "148.8%", "filterUnits", "objectBoundingBox", "id", "filter-3"], ["id", "w3Masthead", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["id", "Badge"], ["id", "Path-2"], ["id", "mobile-filter", "fill", "black", "fill-opacity", "1", "filter", "url(#filter-2)", 0, "xlink", "href", "#path-1"], ["id", "BadgeFill", "fill-rule", "evenodd", 0, "xlink", "href", "#path-1"], ["id", "w3", "ds-heading-4", "", 1, "masthead-svg__text"], ["x", "21", "y", "40.85"], [1, "header"], [1, "ds-row", "ds-shadow-floating", "ds-margin-bottom-0"], [1, "ds-col-8", "ds-padding-top-0_8", "ds-no-gutter", "ds-float-lg-right"], [1, "ds-tray-fit-content", "ds-margin-bottom-0"], ["id", "home-nav", 1, "ds-button", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "routerLink", "click"], ["id", "privacy-nav", "href", "https://w3.ibm.com/w3publisher/global-voice-services/about-gvs/data-privacy", "target", "_blank", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "click"], ["id", "services-nav", 1, "ds-button", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 2, "cursor", "default", 3, "routerLink", "queryParams", "click"], ["id", "help-nav", "href", "https://w3.ibm.com/help/#/article/telephony_gvi_spoe/overview", "target", "_blank", 1, "ds-button", "ds-flat", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "click"], ["id", "feed-nav", 1, "ds-button", "ds-flat", "ds-padding-left-2", "ds-padding-right-2", 3, "routerLink", "click"], ["id", "countryDropdown", 1, "dropdown"], [1, "dropbtn", 3, "click"], ["id", "countrydropdown", 1, "dropdown-content"], ["type", "text", "id", "myInput", "aria-describedby", "search-text", "placeholder", "Search..", 1, "ds-input", 2, "background-image", "url('././assets/search.png')", "background-repeat", "no-repeat", "background-position", "right 20px center", 3, "ngModel", "ngModelChange"], ["class", "ds-text-align-left ds-pad-t-0_5", 4, "ngFor", "ngForOf"], [1, "ds-text-align-left", "ds-pad-t-0_5"], [3, "routerLink", "queryParams", "click"], ["class", "ds-border-neutral-5", "width", "25;", "height", "16;", 3, "src", 4, "ngIf"], ["class", "ds-pad-l-1_5", 4, "ngIf"], [1, "ds-pad-l-0_5"], ["width", "25;", "height", "16;", 1, "ds-border-neutral-5", 3, "src"], [1, "ds-pad-l-1_5"]], template: function UitoplinksComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_30_listener() { return ctx.closeDropdown("home-nav"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_32_listener() { return ctx.closeDropdown("privacy-nav"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DATA PRIVACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_34_listener() { return ctx.closeDropdown("services-nav"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_36_listener() { return ctx.closeDropdown("help-nav"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "HELP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UitoplinksComponent_Template_a_click_38_listener() { return ctx.closeDropdown("feed-nav"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UitoplinksComponent_div_45_Template, 6, 8, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "dropdownsearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.ccode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 6, ctx.searchItems, ctx.searchText));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_dropdownsearch_pipe__WEBPACK_IMPORTED_MODULE_5__["DropdownsearchPipe"]], styles: [".dropbtn[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    font-size: 16px;\r\n    font-weight: 410;\r\n    font-family: IBMPlexSans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    width: 215px;\r\n    color: black;\r\n    padding: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%]:hover, .dropbtn[_ngcontent-%COMP%]:focus {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n#myInput[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    \r\n    background-position: 14px 12px;\r\n    background-repeat: no-repeat;\r\n    font-size: 16px;\r\n    padding: 14px 20px 12px 45px;\r\n    border: none;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f6f6f6;\r\n    min-width: 230px;\r\n    max-height: 400px;\r\n    overflow: auto;\r\n    border-right: 6px solid #ddd;\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #038AD8;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\nimg.a[_ngcontent-%COMP%] {\r\n    vertical-align: baseline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpdG9wbGlua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNFQUFzRTtJQUN0RSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7SUFDN0MsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InVpdG9wbGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQxMDtcclxuICAgIGZvbnQtZmFtaWx5OiBJQk1QbGV4U2FucywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMjE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGJ0bjpob3ZlcixcclxuLmRyb3BidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNteUlucHV0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NlYXJjaGljb24ucG5nJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4IDEycHggNDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxuLyogI215SW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNkZGQ7XHJcbn0gKi9cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzOEFEODtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmltZy5hIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UitoplinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uitoplinks',
                templateUrl: './uitoplinks.component.html',
                styleUrls: ['./uitoplinks.component.css'],
                host: { '(document:click)': 'onClick($event)' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
            console.log("navigation component country route" + this.countryroute);
            console.log("navigation component middelframe123" + this.pcode);
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
        });
    }
}
MiddleframeComponent.ɵfac = function MiddleframeComponent_Factory(t) { return new (t || MiddleframeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cookie_handler_service__WEBPACK_IMPORTED_MODULE_1__["CookieHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cloudant_service__WEBPACK_IMPORTED_MODULE_2__["cloudantservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MiddleframeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiddleframeComponent, selectors: [["app-middleframe"]], decls: 14, vars: 9, consts: [[1, "ds-pad-t-1"], [1, "ds-row", "ds-pad-b-1", "ds-pad-r-2"], ["class", "ds-pad-b-1 ds-col-xs-12 ds-col-sm-6 ds-col-md-6 ds-col-lg-4", 4, "ngIf"], ["target", "_blank", 1, "ds-text-contextual-blue-5", "ds-link-unstyled", 3, "href"], [1, "ds-bg-neutral-2", "ds-text-neutral-7", "ds-padding-left-0_5"], [4, "ngFor", "ngForOf"], [1, "ds-pad-b-1", "ds-col-xs-12", "ds-col-sm-6", "ds-col-md-6", "ds-col-lg-4"], [3, "routerLink", "queryParams"], [1, "ds-panel"], [1, "ds-panel-container", "ds-text-align-center", 2, "max-height", "215px"], ["src", "././assets/Jabber.png"], [1, "ds-text-small", "ds-padding-t-3"], ["src", "././assets/fixedphone.png"], ["src", "././assets/ss.png"]], template: function MiddleframeComponent_Template(rf, ctx) { if (rf & 1) {
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