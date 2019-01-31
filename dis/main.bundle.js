webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_glossary_glossary_component__ = __webpack_require__("../../../../../src/app/components/glossary/glossary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_savemoney_savemoney_component__ = __webpack_require__("../../../../../src/app/components/savemoney/savemoney.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_started_started_component__ = __webpack_require__("../../../../../src/app/components/started/started.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










__WEBPACK_IMPORTED_MODULE_9__components_started_started_component__["a" /* StartedComponent */];
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_auth_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__components_auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'addclient', component: __WEBPACK_IMPORTED_MODULE_5__components_add_client_add_client_component__["a" /* AddClientComponent */] },
    { path: 'savemoney', component: __WEBPACK_IMPORTED_MODULE_8__components_savemoney_savemoney_component__["a" /* SavemoneyComponent */] },
    { path: 'glossary', component: __WEBPACK_IMPORTED_MODULE_7__components_glossary_glossary_component__["a" /* GlossaryComponent */] },
    { path: 'started', component: __WEBPACK_IMPORTED_MODULE_9__components_started_started_component__["a" /* StartedComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyCaLzSfLhWE3huGlGYzkOUjgat39pRvxac",
            authDomain: "list-86b44.firebaseapp.com",
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_fireserve_service__ = __webpack_require__("../../../../../src/app/services/fireserve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_auth_auth_service__ = __webpack_require__("../../../../../src/app/components/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_glossary_glossary_component__ = __webpack_require__("../../../../../src/app/components/glossary/glossary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_savemoney_savemoney_component__ = __webpack_require__("../../../../../src/app/components/savemoney/savemoney.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_started_started_component__ = __webpack_require__("../../../../../src/app/components/started/started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_add_client_add_client_component__["a" /* AddClientComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_glossary_glossary_component__["a" /* GlossaryComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_savemoney_savemoney_component__["a" /* SavemoneyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_started_started_component__["a" /* StartedComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_fireserve_service__["a" /* FireserveService */], __WEBPACK_IMPORTED_MODULE_11__components_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <a routerLink=\"/dashboard\" class=\"btn btn-link\">\r\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard\r\n    </a>\r\n    <h3>\r\n      Did you Open Another Account Since Last Time? <br>\r\n      Add It Here!\r\n    </h3>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Add Account\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n\r\n      <div class=\"form-group\">\r\n        \r\n        <label for=\"Account\">Account Type(Example Checking, Savings, Loan, Credit Card)</label>\r\n        <input \r\n          type=\"text\"\r\n          class=\"form-control\" \r\n          name=\"Account\"\r\n          #clientAccount=\"ngModel\"\r\n          placeholder=\"All lower case example 'Checking' \"\r\n          [(ngModel)]=\"HtmlAccountType\" \r\n          minlength=\"2\"\r\n          required\r\n          >\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          \r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"APR\">Annual Percentage rate / Interest Yield</label>\r\n            <input \r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                name=\"APR\"\r\n                placeholder=\"example '13' Dont Put Percent Sign\"\r\n                #clientAPR=\"ngModel\"\r\n                [(ngModel)]=\"HtmlAPR\" \r\n            >\r\n        </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n              <label for=\"balance\">Balance</label>\r\n              <input \r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                [(ngModel)]=\"HtmlBalance\"\r\n                name=\"balance\"\r\n                #clientBalance = \"ngModel\"\r\n                placeholder=\"Balance on this account\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group\">\r\n              \r\n            </div>\r\n\r\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fireserve_service__ = __webpack_require__("../../../../../src/app/services/fireserve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(router, firebase, serserv) {
        this.router = router;
        this.firebase = firebase;
        this.serserv = serserv;
        this.user = this.serserv.model();
        // This array.length==0 || array.length==null dont fetch
        // because feching on null breaks the code
        this.onFetch();
    }
    AddClientComponent.prototype.ngOnInit = function () {
    };
    AddClientComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.helper = this.HtmlAccountType.toLocaleUpperCase();
        this.HtmlAccountType = this.helper;
        this.user.balance.unshift(this.HtmlBalance);
        this.user.accountType.unshift(this.HtmlAccountType);
        this.user.APR.unshift(this.HtmlAPR);
        this.user.nameFirst = 'Emanuel';
        this.user.nameLast = 'Fonseca';
        this.user.email = 'eman9997@yahoo.com';
        //  this.serserv.save(this.user);
        this.firebase.storeServers(this.user)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/dashboard']);
        });
    };
    AddClientComponent.prototype.onFetch = function () {
        var _this = this;
        this.firebase.getlist()
            .subscribe(function (servers) {
            if (servers.balance === undefined || servers.balance.length == 0) {
                _this.user = _this.serserv.model();
                console.log(servers.balance);
            }
            if (servers.balance.length > 0) {
                _this.user = servers;
                console.log(servers.balance);
            }
            (function (error) {
                console.log(error);
            });
        });
    };
    AddClientComponent.prototype.check = function () {
    };
    AddClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__("../../../../../src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-client/add-client.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_fireserve_service__["a" /* FireserveService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(ru, Message) {
        this.ru = ru;
        this.Message = Message;
    }
    AuthService.prototype.signupUser = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
                _this.ru.navigate(['/dashboard']);
            });
        })
            .catch(function (error) {
            console.log("I show up when you dont get logged in");
            _this.Message.show('Wrong Email or Password Please Try Again', {
                cssClass: 'alert-danger', timeout: 4000
            });
        });
        //   console.log(this.value); this worked
    };
    AuthService.prototype.getUid = function () {
        // firebase.auth().signOut()
        // .then(
        //   // after your signed out then go to loggin page 
        // );
        return this.value = __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.uid;
    };
    AuthService.prototype.log_out = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut;
    };
    AuthService.prototype.set_uid = function () {
        this.value = null;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getIdToken()
            .then(function (token) {
            return _this.token = token;
        });
        return this.token;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- This below is under construction  -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h1 class=\"text-center pb-4 pt-3\">\r\n            <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> PocketVisor</span> Login\r\n          </h1>\r\n          <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input \r\n              type=\"email\" \r\n              name=\"email\" \r\n              [(ngModel)]=\"email\" \r\n              class=\"form-control\" \r\n              required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input \r\n                type=\"password\" \r\n                name=\"password\" \r\n                [(ngModel)]=\"password\" \r\n                class=\"form-control\" \r\n                required>\r\n            </div>\r\n            <input \r\n            type=\"submit\" \r\n            value=\"Login\" \r\n            class=signup\r\n            class=\"btn btn-primary btn-block\"\r\n          \r\n            >\r\n\r\n          </form>\r\n         \r\n        </div>\r\n        <a routerLink=\"/signup\" class=dontHave>Dont Have an Account?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/components/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        authService.set_uid();
    }
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/components/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <!-- This below is under construction  -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <h1 class=\"text-center pb-4 pt-3\">\r\n            <span class=\"text-primary\"><i class=\"fa fa-lock\"></i> Welcome to PocketVisor</span> Lets Get Started!\r\n          </h1>\r\n          <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input \r\n              type=\"email\" \r\n              name=\"email\" \r\n              [(ngModel)]=\"email\" \r\n              class=\"form-control\" \r\n              required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input \r\n                type=\"password\" \r\n                name=\"password\" \r\n                [(ngModel)]=\"password\" \r\n                class=\"form-control\" \r\n                required>\r\n            </div>\r\n            <input \r\n            type=\"submit\" \r\n            value=\"Signup\" \r\n            class=signup\r\n            class=\"btn btn-primary btn-block\"\r\n            \r\n            >\r\n            <!-- routerLink='/dashboard' -->\r\n          </form>\r\n        </div>\r\n        <a routerLink=\"/\" class=dontHave>You Have an Account Already?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/components/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password; // NOTE: password is equal to password1.
        this.authService.signupUser(email, password);
        this.router.navigate(['/']);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-10\">\r\n    <app-user></app-user>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/glossary/glossary.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"title\">\r\n  Glossary\r\n</h1>\r\n<a routerLink=\"/dashboard\" class=\"btn btn-link\">\r\n  <i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard\r\n</a>\r\n\r\n<p class=\"learnMore\">Learn More about your account by Reading Through the\r\n  Information\r\n  Below: </p>\r\n\r\n<div class=\"paragraphs\">\r\n\r\n\r\n  <div class=\"secured\">\r\n    <h5>\r\n      SECURED VS UNSECURED\r\n    </h5>\r\n    <p>\r\n    Things that are Secured are Typically backed up with either cash, a House or a Car.\r\n    Things that are Secured get a larger limit and a lower APR. For a Loan this means\r\n    A bigger Loan.\r\n    </p>\r\n    <p>\r\n      Bank products that are UNSecured Usually have a smaller limit and higher APR\r\n    </p>\r\n    <p>\r\n      EXAMPLE <br>\r\n      - An Auto Loan is a loan Secured with a Car. Thats Why the APR is usually low.<br>\r\n      - A Mortgage is a loan backed up by a house.<br>\r\n      - A Secured Credit is a Credit Card backed up by cash.<br>\r\n    </p>\r\n\r\n  </div>\r\n\r\n  <div class=\"rates\">\r\n      <h5>\r\n        Fixed Rate Vs. Variable Rate\r\n      </h5>\r\n      <p>\r\n        A Fixed Rate means that the APR cannot change. Even if the Economy crashes\r\n        the interest rate will not change.\r\n      </p>\r\n      <p>\r\n        A Variable Rate Means the Rate can change with the Economy. \r\n      </p>\r\n    \r\n    </div>\r\n\r\n  <div class=\"cc\">\r\n      <h5>\r\n        Credit Card\r\n      </h5>\r\n    <p>\r\n      A Credit Card is a Line of credit that consumers can Utilize to Purchase Goods\r\n      or Services. Credit Card's have a variable rate.\r\n    </p>\r\n      Usage: <br>\r\n    - It can be used to increase ones credit. <br>\r\n    - It can be used as a rewards card(Only some CC offer rewards) <br>\r\n    - It can be used to transfer a balance. <br>\r\n    <p>\r\n      People do a Balance Transfer because most Credit Cards offer a period of time\r\n      where the card is 0%. This Helps a lot because the individual saves money on \r\n      Interest. \r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"loan\">\r\n        <h5>\r\n          Loans\r\n        </h5>\r\n        <p>\r\n        A Loan is a way to borrow set amount of money. unlike a line of credit\r\n        you only get money from a loan once. At the time of signing a loan the consumers\r\n        knows exactly how much they are paying back. A loan is Fixed.\r\n        </p>\r\n        <p>\r\n          Loans Typically has a Lower APR.\r\n        </p>\r\n  </div>\r\n\r\n  <div class=\"checking\">\r\n      <h5>\r\n        Checking Account\r\n      </h5>\r\n    <p>\r\n        A checking account is a bank account for everyday expenses.\r\n        It tends to have a lower interest rate than a savings or CD\r\n        account, but unlike those accounts there's no limit to how often you can\r\n        access your money.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"savings\">\r\n      <h5>\r\n        Savings Account\r\n      </h5>\r\n    <p>\r\n        Savings accounts are a safe place to store cash and can earn around 1% to 2% \r\n        interest. They can also help you save for longer-term needs\r\n    </p>\r\n    <p>\r\n      If your not going to use your money for a long period of time you may\r\n      want to consider a Certificate of deposit account for a higher return.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"Heloc\">\r\n      <h5>\r\n        Heloc\r\n      </h5>\r\n    <p>\r\n      A Heloc is a line of credit that is secured by a mortgage. \r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"refinance\">\r\n      <h5>\r\n        Refinance\r\n      </h5>\r\n    <p>\r\n      Refinance is a way to renegotiate a mortgage. If one doesn't like their\r\n      current APR or term they can Refinance to change it.\r\n    </p>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/glossary/glossary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paragraphs {\n  font-family: Arial, sans-serif;\n  font-size: 1.1em;\n  font-weight: normal; }\n\nh5 {\n  font-weight: bolder;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  font-size: 1.8em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/glossary/glossary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlossaryComponent = /** @class */ (function () {
    function GlossaryComponent() {
    }
    GlossaryComponent.prototype.ngOnInit = function () {
    };
    GlossaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-glossary',
            template: __webpack_require__("../../../../../src/app/components/glossary/glossary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/glossary/glossary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GlossaryComponent);
    return GlossaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary mb-4\">\r\n  <div class=\"container\">\r\n    <a routerLink=\"/\" class=\"navbar-brand\">AccountPanel</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/dashboard\" class=\"nav-link\">Dashboard</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/started\" class=\"nav-link\">Get Started</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://www.bankrate.com/\" class=\"nav-link\">Explore Banks</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-wrapper\">\r\n  <div class=\"inner\">\r\n    <div class=\"four-wrapper\">\r\n      <div class=\"leg-1\"></div>\r\n      <div class=\"leg-2\"></div>\r\n      <div class=\"leg-3\"></div>\r\n    </div>\r\n\r\n    <div class=\"zero-wrapper\">\r\n      <div class=\"zero-wrapper__middle\"></div>\r\n    </div>\r\n\r\n    <div class=\"four-wrapper\">\r\n      <div class=\"leg-1\"></div>\r\n      <div class=\"leg-2\"></div>\r\n      <div class=\"leg-3\"></div>\r\n    </div>\r\n  </div>\r\n  \r\n  <h1>Page not found</h1>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #fcf8f3; }\n\nh1 {\n  font-family: 'Lato', sans-serif;\n  text-transform: uppercase;\n  color: #d6c7bc;\n  font-weight: 700;\n  text-align: center; }\n\n.outer-wrapper {\n  padding-top: 10%;\n  width: 100vw;\n  height: 100vh; }\n\n@media (max-width: 767px) {\n    .outer-wrapper {\n      padding-top: 5%; } }\n\n.outer-wrapper .inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    white-space: nowrap; }\n\n.four-wrapper {\n  position: relative;\n  width: 200px;\n  height: 260px;\n  margin: 12px; }\n\n.four-wrapper .leg-1 {\n    background: -webkit-gradient(linear, left top, right top, from(#b38ca5), color-stop(20%, #b38ca5), color-stop(50%, #d7949c), to(#d76f74));\n    background: linear-gradient(to right, #b38ca5 0%, #b38ca5 20%, #d7949c 50%, #d76f74 100%);\n    width: 210px;\n    height: 65px;\n    overflow: hidden;\n    position: absolute;\n    top: 44px;\n    left: 0;\n    border-radius: 35px;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: rotate(-50deg);\n            transform: rotate(-50deg);\n    -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n    z-index: 3; }\n\n.four-wrapper .leg-2 {\n    background: -webkit-gradient(linear, left top, right top, from(#b38ca5), color-stop(20%, #b38ca5), color-stop(50%, #d7949c), to(#d76f74));\n    background: linear-gradient(to right, #b38ca5 0%, #b38ca5 20%, #d7949c 50%, #d76f74 100%);\n    width: 100%;\n    height: 65px;\n    overflow: hidden;\n    position: absolute;\n    top: 113px;\n    left: 0;\n    border-radius: 35px;\n    z-index: 1; }\n\n.four-wrapper .leg-2::before, .four-wrapper .leg-2::after {\n      content: '';\n      display: block;\n      position: absolute;\n      background-color: rgba(0, 0, 0, 0.1); }\n\n.four-wrapper .leg-2::before {\n      width: 30px;\n      height: 80px;\n      -webkit-transform: rotate(50deg);\n              transform: rotate(50deg);\n      left: 50px;\n      top: -15px; }\n\n.four-wrapper .leg-2::after {\n      width: 30px;\n      height: 100%;\n      -webkit-transform: skew(-15deg);\n              transform: skew(-15deg);\n      left: 88px;\n      top: 0; }\n\n.four-wrapper .leg-3 {\n    background: -webkit-gradient(linear, left bottom, left top, from(#b38ca5), color-stop(20%, #b38ca5), color-stop(50%, #d7949c), to(#d76f74));\n    background: linear-gradient(to top, #b38ca5 0%, #b38ca5 20%, #d7949c 50%, #d76f74 100%);\n    width: 65px;\n    height: 235px;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 95px;\n    border-radius: 35px;\n    -webkit-box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.1);\n            box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.1);\n    z-index: 1; }\n\n.four-wrapper .leg-3::before, .four-wrapper .leg-3::after {\n      content: '';\n      display: block;\n      position: absolute;\n      background-color: rgba(0, 0, 0, 0.05); }\n\n.four-wrapper .leg-3::before {\n      width: 30px;\n      height: 100%;\n      -webkit-transform: rotate(25deg);\n              transform: rotate(25deg); }\n\n.four-wrapper .leg-3::after {\n      top: -30px;\n      width: 25px;\n      height: 100%;\n      -webkit-transform: rotate(50deg);\n              transform: rotate(50deg); }\n\n.zero-wrapper {\n  background: linear-gradient(45deg, #b38ca5 0%, #b38ca5 20%, #d7949c 50%, #d76f74 100%);\n  position: relative;\n  width: 235px;\n  height: 235px;\n  border-radius: 50%;\n  overflow: hidden;\n  -webkit-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2) inset;\n          box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2) inset;\n  margin: 12px; }\n\n.zero-wrapper::before, .zero-wrapper::after {\n    content: '';\n    display: block;\n    position: absolute; }\n\n.zero-wrapper::before {\n    top: 40%;\n    left: 33px;\n    width: 104px;\n    height: 60%;\n    -webkit-transform: rotate(35deg);\n            transform: rotate(35deg);\n    background-color: rgba(0, 0, 0, 0.05); }\n\n.zero-wrapper::after {\n    top: -60px;\n    left: -5px;\n    width: 60%;\n    height: 110%;\n    background-color: rgba(255, 255, 255, 0.1);\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.zero-wrapper .zero-wrapper__middle {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 104px;\n    height: 104px;\n    background-color: #fcf8f3;\n    border-radius: 50%;\n    -webkit-box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);\n            box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);\n    z-index: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/savemoney/savemoney.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"title\"ref=\"https://ibb.co/Z8qLtbB\"><img src=\"https://i.ibb.co/2tGnmpv/pocketvisorlogo.jpg\" alt=\"Pocketvisor Recommendations\"\r\n  ></a>\r\n\r\n\r\n\r\n<div class=\"card text-center\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\" *ngFor =\"let user of recommend; let i=index\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{i+1}}. Opportunity</h5>\r\n        <p class=\"card-text\">{{user}}</p>\r\n        <a routerLink='/glossary' class=\"btn btn-primary\">What's this</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/savemoney/savemoney.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  font-family: Concert One;\n  font-size: 1.2em;\n  margin-bottom: 6%;\n  margin-top: 3%;\n  border-width: 6px;\n  border-color: #002266;\n  border-radius: 23px;\n  -webkit-box-shadow: 5px 10px #d9d9d9;\n          box-shadow: 5px 10px #d9d9d9; }\n\n.card-title {\n  font-weight: bold;\n  font-size: 1.4em; }\n\n.card-body {\n  background-color: #b3ccff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/savemoney/savemoney.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavemoneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fireserve_service__ = __webpack_require__("../../../../../src/app/services/fireserve.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavemoneyComponent = /** @class */ (function () {
    function SavemoneyComponent(use, firebase) {
        this.use = use;
        this.firebase = firebase;
        this.loanPrime = 8;
        this.calculate = 0;
        this.helocPrime = 5;
        this.mortPrime = 4.7;
        this.cdPrime = 2;
        this.autoPrime = 4.9;
        this.buget = 3000;
        this.helocBoo = false;
        this.needsLoan = 'Your spending Too Much Money on Interest you will save money if you got a Loan. A Loans interest is only ' + this.loanPrime + '% right now. If your still having trouble you can refer to the glossary located on dashboard page';
        this.needsbalancetransfer = 'Your spending too much money on Interest you will save money if you did a balance transfer. If you think you can pay back your debt in a couple of months 6-20 months this is a good option. If you need more details check the glossary';
        this.needsSavings = 'You should move some Money to your savings or a CD. The rate for a CD is at Least ' + this.cdPrime + '% Right Now';
        this.needsRefinance = 'You Should Refinance your House. Your paying to much interest on your mortgage. Look under Refinance in the glossary for more details';
        this.needsAutoRefi = 'Refinance your Autoloan, Your paying to much interest on your Autoloan. The Glossary will tell you the Many reason one may Refinance an Auto Loan';
        this.needsHeloc = 'Since your Have a Mortgage and You have Debt you Should get a HELOC. A HELOC Has a better interest than a Loan or any Credit Card';
        this.needsLoanRefi = 'The Loan you have has a high interest rate. You might want to refinance it';
    } // this is the begining
    SavemoneyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.use.model();
        this.recommend = [];
        this.firebase.getlist().subscribe(function (server) {
            _this.user = server;
            _this.savemoney();
        }, function (error) { return console.log(error); });
    };
    SavemoneyComponent.prototype.savemoney = function () {
        var i;
        for (i = 0; i < this.user.balance.length; i++) {
            // checking if a loan is needed
            if (this.user.APR[i] > this.loanPrime + 2 && this.user.balance[i] > this.buget) {
                if (this.user.accountType[i] == 'CREDIT CARD') {
                    this.addtoArray(this.needsLoan);
                }
            }
            // needs a balance transfer
            if (this.user.APR[i] > this.loanPrime + 2 && this.user.balance[i] > this.buget) {
                if (this.user.accountType[i] == 'CREDIT CARD') {
                    this.addtoArray(this.needsbalancetransfer);
                }
            }
            // savings account
            if (this.user.balance[i] > this.buget && this.user.accountType[i] == 'CHECKING') {
                this.addtoArray(this.needsSavings);
            }
            // Refinance
            if (this.user.APR[i] > this.mortPrime + 1 && this.user.accountType[i] == 'MORTGAGE') {
                this.addtoArray(this.needsRefinance);
            }
            //autoRefinance
            if (this.user.APR[i] > this.autoPrime + 1 && this.user.accountType[i] == 'AUTO LOAN') {
                this.addtoArray(this.needsAutoRefi);
            }
            //refiLoan
            if (this.user.APR[i] > this.loanPrime + 1 && this.user.accountType[i] == 'LOAN') {
                this.addtoArray(this.needsLoanRefi);
            }
            //Heloc
            if (this.user.accountType[i] == 'CREDIT CARD' || this.user.accountType[i] == 'LOAN') {
                this.calculateHeloc(this.user.balance[i]);
                if (this.helocBoo) {
                    if (this.check()) {
                        this.addtoArray(this.needsHeloc);
                    }
                }
            } // end of HELOC Method
        } // end of for loop
        this.createunique();
        console.log(this.recommend);
    };
    SavemoneyComponent.prototype.addtoArray = function (str) {
        this.recommend.push(str);
    };
    SavemoneyComponent.prototype.createunique = function () {
        this.myset = new Set(this.recommend);
        this.recommend = Array.from(this.myset);
    };
    SavemoneyComponent.prototype.calculateHeloc = function (num) {
        this.calculate += num;
        if (this.calculate > 9999) {
            this.helocBoo = true;
        }
        else {
            this.helocBoo = false;
        }
    };
    SavemoneyComponent.prototype.check = function () {
        var k;
        for (k = 0; k < this.user.balance.length; k++) {
            if (this.user.accountType[k] == 'MORTGAGE') {
                return true;
            }
            else {
                return false;
            }
        }
    }; // end of check
    SavemoneyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-savemoney',
            template: __webpack_require__("../../../../../src/app/components/savemoney/savemoney.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/savemoney/savemoney.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_fireserve_service__["a" /* FireserveService */]])
    ], SavemoneyComponent);
    return SavemoneyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<a routerLink=\"/addclient\" class=\"btn btn-success btn-block\">\r\n  <i class=\"fa fa-plus\"></i> Add\r\n</a>\r\n\r\n<a routerLink=\"/savemoney\" class=\"btn btn-primary btn-block\">\r\n  <i class=\"fa fa-money\"></i> SAVE \r\n</a>\r\n\r\n<a routerLink=\"/glossary\" class=\"btn btn-info btn-block\">\r\n  <i class=\"fa fa-star\"></i> Glossary\r\n</a>\r\n<a (click)=\"logoff()\" class=\"btn btn-danger btn-block\">\r\n  <i class=\"fa fa-star\"></i> Exit\r\n</a>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/components/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, logservice) {
        this.router = router;
        this.logservice = logservice;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logoff = function () {
        this.logservice.log_out;
        this.router.navigate(['/']);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/started/started.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"title\"ref=\"https://ibb.co/Z8qLtbB\"><img src=\"https://i.ibb.co/2tGnmpv/pocketvisorlogo.jpg\" alt=\"Pocketvisor Recommendations\"\r\n  ></a>\r\n\r\n<h1 class=\"header\">\r\n  These are the Products Available Through PocketVisor\r\n</h1>\r\n<!-- <p class=\"message\">\r\n  The Products below are the products supported by PocketVisor\r\n</p> -->\r\n\r\n  <ul class=\"products\">\r\n\r\n    <li>\r\n        Credit Card\r\n    </li>\r\n    <li>\r\n        LOANS\r\n    </li>\r\n    <li>\r\n       Auto Loan\r\n    </li>\r\n   \r\n    <li>\r\n        Checking\r\n    </li>\r\n    <li>\r\n        Savings\r\n    </li>\r\n    <li>\r\n        Heloc\r\n    </li>\r\n    <li>\r\n        Home loan\r\n    </li>\r\n\r\n    <li>\r\n        Mortgage\r\n    </li>\r\n    <li>\r\n        CD\r\n    </li>\r\n\r\n\r\n  </ul>\r\n    \r\n  \r\n \r\n    <button (click)=\"adddummy()\" class=\"btn btn-success btn-block\">\r\n        GO BACK\r\n    </button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/started/started.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  padding-top: 5%;\n  padding-bottom: 5%; }\n\n.products {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 1.5em; }\n\nli {\n  padding-bottom: 2%; }\n\nbutton {\n  margin-bottom: 6%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/started/started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fireserve_service__ = __webpack_require__("../../../../../src/app/services/fireserve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartedComponent = /** @class */ (function () {
    function StartedComponent(firebase, serserv, router) {
        // this.user=this.serserv.dummy();
        this.firebase = firebase;
        this.serserv = serserv;
        this.router = router;
    }
    StartedComponent.prototype.ngOnInit = function () {
    };
    StartedComponent.prototype.adddummy = function () {
        this.router.navigate(['/dashboard']);
    };
    StartedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-started',
            template: __webpack_require__("../../../../../src/app/components/started/started.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/started/started.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fireserve_service__["a" /* FireserveService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], StartedComponent);
    return StartedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <h2><i class=\"fa fa-users\"></i> Accounts</h2>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <h5 class=\"text-right text-secondary\">What Would You like to do Today? </h5>\r\n  </div>\r\n</div>\r\n<table class=\"table\" *ngIf=\"user.balance?.length > 0;else noClients\">\r\n  <thead>\r\n    <tr>\r\n      <th>Accounts</th>\r\n      <th>APR</th>\r\n      <th >Balance</th>\r\n    \r\n    </tr>\r\n    \r\n  </thead>\r\n   <tbody>\r\n<div class=largebox>\r\n  <div class= \"box1\">\r\n      <tr *ngFor=\"let type of user.accountType\">\r\n        <td><span>{{type}}</span>  </td> \r\n      </tr>\r\n    </div>\r\n  <div class=\"box2\">\r\n      <tr *ngFor=\"let apr of user.APR\">\r\n        <td> {{apr}}% </td>\r\n      </tr>\r\n    </div>\r\n\r\n  <div class =\"box3\">\r\n      <tr *ngFor=\"let balances of user.balance; let i=index\">\r\n        <td> {{balances | currency:\"USD\":\"symbol\" }}</td>\r\n        <td><a (click)=\"onedit(i)\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-arrow-circle-o-right\"></i> Delete</a></td>\r\n      </tr>\r\n      \r\n</div>\r\n\r\n\r\n</div>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n<!-- <button (click)=\"onFetch()\">Fetch</button> -->\r\n\r\n<ng-template #noClients>\r\n  <hr>\r\n  <h5>\r\n    There are no Accounts in the system <br><br>\r\n    Press Get Started to Begin\r\n  </h5>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  white-space: nowrap; }\n\n.largebox {\n  padding: 0%;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.box1 {\n  width: 18%;\n  float: left;\n  margin-right: 13%; }\n\n.box2 {\n  width: 18%;\n  float: left; }\n\n.box3 {\n  width: 18%;\n  height: 18%;\n  float: left; }\n\nth {\n  float: left;\n  padding-right: 12%; }\n\n.btn {\n  font-size: .48em; }\n\n@media screen and (max-width: 700px) {\n  .largebox {\n    padding: 0%;\n    font-size: .9em;\n    font-weight: bold; }\n  .box1 {\n    width: 18%;\n    float: left;\n    margin-right: 13%; }\n  .box2 {\n    width: 18%;\n    float: left; }\n  .box3 {\n    width: 10%;\n    height: 8%;\n    float: left; }\n  .btn {\n    font-size: .5em; }\n  th {\n    font-size: .5em;\n    float: left;\n    padding-right: 14%; } }\n\n@media screen and (max-width: 347px) {\n  .largebox {\n    padding: 0%;\n    font-size: .8em;\n    font-weight: bold; }\n  .box1 {\n    width: 18%;\n    float: left;\n    margin-right: 13%; }\n  .box2 {\n    width: 18%;\n    float: left; }\n  .box3 {\n    width: 10%;\n    height: 8%;\n    float: left; }\n  .btn {\n    font-size: .3em; }\n  th {\n    font-size: .5em;\n    float: left;\n    padding-right: 14%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fireserve_service__ = __webpack_require__("../../../../../src/app/services/fireserve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/components/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(fire, ServiceToLoggout, ru, serv) {
        this.fire = fire;
        this.ServiceToLoggout = ServiceToLoggout;
        this.ru = ru;
        this.serv = serv;
        this.user = this.serv.model();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fire.getlist().subscribe(function (server) {
            _this.user = server;
        }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.login = function () {
    };
    UserComponent.prototype.onSave = function () {
        this.fire.storeServers(this.user)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    //  logout(){
    //   this.ServiceToLoggout.log_out;
    //     this.ru.navigate(['/']);
    //  }
    UserComponent.prototype.onedit = function (i) {
        this.inde = i;
        this.user.APR.splice(this.inde, 1);
        this.user.balance.splice(this.inde, 1);
        this.user.accountType.splice(this.inde, 1);
        this.onSave();
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fireserve_service__["a" /* FireserveService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/fireserve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireserveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_service__ = __webpack_require__("../../../../../src/app/components/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FireserveService = /** @class */ (function () {
    function FireserveService(http, uidFromUser) {
        this.http = http;
        this.uidFromUser = uidFromUser;
        this.url = 'https://list-86b44.firebaseio.com/';
    }
    FireserveService.prototype.storeServers = function (servers) {
        var token = this.uidFromUser.getToken();
        return this.http.put(this.url + this.uidFromUser.getUid() + '/data.json?auth=' + token, servers);
    };
    FireserveService.prototype.getlist = function () {
        var token = this.uidFromUser.getToken();
        return this.http.get(this.url + this.uidFromUser.getUid() + '/data.json?auth=' + token)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(console.log(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]));
        });
    };
    FireserveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_service__["a" /* AuthService */]])
    ], FireserveService);
    return FireserveService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fireserve_service__ = __webpack_require__("../../../../../src/app/services/fireserve.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(fire) {
        this.fire = fire;
    }
    UserService.prototype.save = function (user) {
        this.fire.storeServers(user)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    UserService.prototype.onFetch = function () {
        var _this = this;
        this.fire.getlist()
            .subscribe(function (servers) { return _this.user = servers; }, function (error) { return console.log(error); });
        return this.user;
    };
    UserService.prototype.model = function () {
        this.user = {
            email: '',
            nameFirst: '',
            nameLast: '',
            accountType: [],
            balance: [],
            APR: []
        };
        return this.user;
    };
    UserService.prototype.dummy = function () {
        this.user = {
            email: '',
            nameFirst: '',
            nameLast: '',
            accountType: [],
            balance: [],
            APR: []
        };
        this.user.accountType.push("example");
        this.user.APR.push(99);
        this.user.balance.push(99999);
        return this.user;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fireserve_service__["a" /* FireserveService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCaLzSfLhWE3huGlGYzkOUjgat39pRvxac",
        authDomain: "list-86b44.firebaseapp.com",
        databaseURL: "https://list-86b44.firebaseio.com",
        projectId: "list-86b44",
        storageBucket: "list-86b44.appspot.com",
        messagingSenderId: "309608531169"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map