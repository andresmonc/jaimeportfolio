(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <app-navbar></app-navbar>\r\n</nav>\r\n<main>\r\n    <app-cover></app-cover>\r\n    <app-about></app-about>\r\n    <app-contact></app-contact>\r\n</main>\r\n<footer>\r\n    <!-- <app-footer></app-footer> -->\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _body_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/about/about.component */ "./src/app/body/about/about.component.ts");
/* harmony import */ var _body_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/contact/contact.component */ "./src/app/body/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_cover_cover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/cover/cover.component */ "./src/app/body/cover/cover.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _body_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _body_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _body_cover_cover_component__WEBPACK_IMPORTED_MODULE_7__["CoverComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/body/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about {\r\n    max-width: 100% !important;\r\n    height: auto;\r\n    margin: 3em;\r\n    margin-bottom: 6vh;\r\n    padding-bottom: 0;\r\n}\r\n\r\n#about-text {\r\n    padding-top: 0;\r\n    margin-top: 0;\r\n    display: block;\r\n    margin: 10px 200px 15px;\r\n    margin-right: var(--margin-text);\r\n    margin-left: var(--margin-text);\r\n    text-align-last: left;\r\n    text-align: justify;\r\n    -moz-text-align-last: left;\r\n    font-family: 'Roboto Slab',serif;\r\n    font-weight: 400;\r\n    font-size: 1.1em;\r\n    color: #212529;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#aboutphoto-container{\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#aboutphoto {\r\n    float: none;\r\n    border-radius: 50%;\r\n    max-width: var(--about-photo);\r\n    height: auto;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* ribbon */\r\n\r\n.ribbon {\r\n font-size: 1em !important;\r\n /* This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements */\r\n width: var(--about-ribbon);\r\n bottom: 40px;\r\n box-shadow: 0 10px 15px #000a;\r\n position: relative;\r\n background: #4286f4;\r\n color: #fff;\r\n text-align: center;\r\n padding: .5em 1em; /* Adjust to suit */\r\n margin: 0em auto 0em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */\r\n}\r\n\r\n.ribbon:before, .ribbon:after {\r\n content: \"\";\r\n position: absolute;\r\n display: block;\r\n bottom: -1em;\r\n border: 1.5em solid #4286f4;\r\n z-index: -2;\r\n\r\n}\r\n\r\n.ribbon:before {\r\n left: -2em;\r\n border-right-width: 1.5em;\r\n border-left-color: transparent;\r\n  box-shadow: 10px 1px 10px #000a;\r\n}\r\n\r\n.ribbon:after {\r\n right: -2em;\r\n border-left-width: 1.5em;\r\n border-right-color: transparent;\r\nbox-shadow: -10px 1px 10px #000a;\r\n}\r\n\r\n.ribbon .ribbon-content:before, .ribbon .ribbon-content:after {\r\n content: \"\";\r\n position: absolute;\r\n display: block;\r\n border-style: solid;\r\n border-color:#4286f4 transparent transparent transparent;\r\n bottom: -1em;\r\n}\r\n\r\n.ribbon .ribbon-content:before {\r\n left: 0;\r\n border-width: 1em 0 0 1em;\r\n}\r\n\r\n.ribbon .ribbon-content:after {\r\n right: 0;\r\n border-width: 1em 1em 0 0;\r\n}"

/***/ }),

/***/ "./src/app/body/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/body/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\r\n    <div id=\"aboutphoto-container\">\r\n        <img id=\"aboutphoto\" src=\"https://avatars3.githubusercontent.com/u/41450290?s=400&u=e2d203f900cf7adc68cfdbdfff3f011f679226a9&v=4\">\r\n        <h1 class=\"ribbon\">\r\n            <strong class=\"ribbon-content\" style=\"font-family: 'Lobster', cursive;\">About Me</strong>\r\n         </h1>\r\n    </div>\r\n    <div id=\"about-text\">\r\n        I am currently a Software Engineer at Fidelity Investments and a proud graduate from the University of North Texas with a\r\n        Bachelor’s of Business Administration in Finance. My Finance degree and business knowledge has allowed me to better\r\n        bridge gaps between business and technology. This knowledge afforded me to have a perspective that allows me to communicate\r\n        ideas between different stakeholders of the software development life cycle. Since I began working at Fidelity Investments,\r\n        I have had the opportunity to work in different lines of business where I worked on applications that had different\r\n        technology stacks yet interfaced within the same development ecosystem. Each application brought its own set of experiences\r\n        that gave me new ways to approach a problem. I feel that over the course of my time in the industry, I have refined\r\n        my versatility and have become technology agnostic. I welcome the challenges my next endeavors will bring and hope\r\n        they are as enriching as my last.\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/body/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/body/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/body/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/body/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/body/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photo {\r\n    width: 100%;\r\n    height: 50vh;\r\n    background-image: url('IMG-0874.JPG');\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#contact {\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/body/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/body/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"test\"></span>\r\n<div id=\"contact\">\r\n<div id=\"photo\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/body/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/body/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/body/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/body/cover/cover.component.css":
/*!************************************************!*\
  !*** ./src/app/body/cover/cover.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 100%;\r\n    height: 88vh;\r\n}\r\n\r\n#cover {\r\n    overflow: hidden;\r\n}\r\n\r\n/* Arrow */\r\n\r\nsection {\r\n    position: relative;\r\n    top: 78vh;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\nsection::after {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    content: '';\r\n    width: 100%;\r\n    height: 80%;\r\n  }\r\n\r\n.demo a {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 50%;\r\n    z-index: 2;\r\n    display: inline-block;\r\n    -webkit-transform: translate(0, -50%);\r\n    transform: translate(0, -50%);\r\n    color: #fff;\r\n    font : normal 400 20px/1 'Josefin Sans', sans-serif;\r\n    letter-spacing: .1em;\r\n    text-decoration: none;\r\n    transition: opacity .3s;\r\n  }\r\n\r\n.demo a:hover {\r\n    opacity: .5;\r\n  }\r\n\r\n#section07 a span {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin-left: -12px;\r\n    border-left: 1px solid #fff;\r\n    border-bottom: 1px solid #fff;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    -webkit-animation: sdb07 2s infinite;\r\n    animation: sdb07 2s infinite;\r\n    opacity: 0;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n#section07 a span:nth-of-type(1) {\r\n    -webkit-animation-delay: 0s;\r\n    animation-delay: 0s;\r\n  }\r\n\r\n#section07 a span:nth-of-type(2) {\r\n    top: 16px;\r\n    -webkit-animation-delay: .15s;\r\n    animation-delay: .15s;\r\n  }\r\n\r\n#section07 a span:nth-of-type(3) {\r\n    top: 32px;\r\n    -webkit-animation-delay: .3s;\r\n    animation-delay: .3s;\r\n  }\r\n\r\n@-webkit-keyframes sdb07 {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    50% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@keyframes sdb07 {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    50% {\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/body/cover/cover.component.html":
/*!*************************************************!*\
  !*** ./src/app/body/cover/cover.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cover\">\r\n    <img src=\"https://drive.google.com/uc?export=view&id=16nMYeilISuXBmEHxPuLFPszZF86LXYio\">\r\n\r\n    <!-- Scroll Arrow -->\r\n    <section id=\"section07\" class=\"demo\">\r\n        <a href=\"#about-text\">\r\n            <span></span>\r\n            <span></span>\r\n        </a>\r\n    </section>\r\n\r\n</div>\r\n\r\n<!-- \r\nmobile version\r\nhttps://drive.google.com/uc?export=view&id=1-LlUrm-RWJaNm5zUhbKa6TnXSk46_QX5 -->"

/***/ }),

/***/ "./src/app/body/cover/cover.component.ts":
/*!***********************************************!*\
  !*** ./src/app/body/cover/cover.component.ts ***!
  \***********************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverComponent = /** @class */ (function () {
    function CoverComponent() {
    }
    CoverComponent.prototype.ngOnInit = function () {
    };
    CoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__(/*! ./cover.component.html */ "./src/app/body/cover/cover.component.html"),
            styles: [__webpack_require__(/*! ./cover.component.css */ "./src/app/body/cover/cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n    color: white;\r\n    background-color: black;\r\n    padding: 0;\r\n    margin: 0; \r\n    margin-bottom: 0;\r\n    padding-top: 0;\r\n  }\r\n  \r\n  #logo {\r\n    font-family: 'Ranga', cursive;\r\n    font-size: 1.4em;\r\n  }\r\n  \r\n  #menu {\r\n    color:white; \r\n    float: right; \r\n    font-size: 1.2em;\r\n  }\r\n  \r\n  .fill-space {\r\n    /* // This fills the remaining space, by using flexbox.\r\n    // Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  letter-spacing: .025em;\n  background-color: var(--main-theme-bgcolor);\n  overflow: hidden;\n  height: 12vh;\n  z-index: 4;\n}\n\n.fixed-top {\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  top: 0;\n}\n\n.nav-item {\n    font-family: Open Sans,sans-serif;\n    font-size: 2.5vh;\n    font-weight: 400;\n    display: var(--desktop-show);\n    text-align: right;\n    padding-right: 1em;\n    padding-top: 4.6vh;\n    text-decoration: none;\n    float: right;\n}\n\n#logo {\n  font-family: 'Lobster Two', cursive;\n  font-size: 5vh;\n  display: block;\n  text-align: left;\n  padding-top: 2.5vh;\n  padding-left: 1em;\n  text-decoration: none;\n\n}\n\n#menu {\n  color:white; \n  float: right; \n  font-size: 4.5vh;\n  padding-right: 2.3vh;\n  padding-top: 2vh;\n  display: var(--mobile-show);\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  \n}\n\nli {\n  float: left;\n}\n\na{\n  color: var(--main-theme-color);;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top\">\n<!-- <span id=\"logo\">\n  Jaime Moncayo hi\n  <i class=\"fa fa-bars\" aria-hidden=\"true\" id=\"menu\"></i>\n</span> -->\n\n<ul>\n    <li id=\"logo\"><a href=\"#\">Jaime Moncayo</a></li>\n    <li class=\"nav-item\"><a href=\"#contacct\">Contact</a></li>\n    <li class=\"nav-item\"><a href=\"#test\">About me</a></li>\n    <!-- <li class=\"nav-item\"><a href=\"#\">About</a></li>\n    <li class=\"nav-item\"><a href=\"#\">Contact</a></li>\n    <li class=\"nav-item\"><a href=\"#\">About</a></li> -->\n    <li id=\"menu\"><a href=\"#\"><i class=\"fa fa-bars\" aria-hidden=\"true\" id=\"menu\"></i></a></li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jaime\Desktop\Projects\jaimeportfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map