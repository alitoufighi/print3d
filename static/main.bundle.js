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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(/static/assets/fonts/iran-fonts/index.css);", ""]);

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<section *ngIf=\"!showProgressing\">-->\r\n<!--</section>-->\r\n<router-outlet (activate)=\"refreshData($event, true)\"></router-outlet>\r\n<section>\r\n  <mat-progress-bar\r\n    *ngIf=\"showProgressing\"\r\n    [color]=\"color\"\r\n    [mode]=\"mode\"\r\n    [value]=\"value\"\r\n    [bufferValue]=\"bufferValue\">\r\n  </mat-progress-bar>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(progressService, dataService) {
        this.progressService = progressService;
        this.dataService = dataService;
        this.title = 'app';
        this.refreshingPages = [
            {
                pageName: 'main-page',
                changes: [
                    'temps',
                ]
            },
            {
                pageName: 'print-page',
                changes: [
                    'temps',
                    'percentage',
                ]
            },
        ];
        this.showProgressing = false;
        this.color = 'primary';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.settingProgressService();
    };
    AppComponent.prototype.settingProgressService = function () {
        var _this = this;
        this.progressService.showProgress.subscribe(function (data) { return _this.showProgressing = data; }, function (err) {
            _this.showProgressing = false;
            console.error('An error occurred when subscribing on showProgress in progressService: ', err);
        });
        this.progressService.progressMode.subscribe(function (data) { return _this.mode = data; }, function (err) {
            _this.mode = null;
            console.error('An error occurred when subscribing on progressMode in progressService: ', err);
        });
        this.progressService.progressValue.subscribe(function (data) { return _this.value = data; }, function (err) {
            _this.value = null;
            console.error('An error occurred when subscribing on progressValue in progressService: ', err);
        });
        this.progressService.progressBufferValue.subscribe(function (data) { return _this.bufferValue = data; }, function (err) {
            _this.bufferValue = null;
            console.error('An error occurred when subscribing on progressBufferValue in progressService: ', err);
        });
    };
    AppComponent.prototype.refreshData = function ($event, activate) {
        var _this = this;
        this.dataService.datas.forEach(function (e) {
            _this.dataService.changeInterval(e, false);
        });
        this.progressService.disable();
        this.refreshingPages.forEach(function (e) {
            if ($event.hasOwnProperty('pageName') && $event['pageName'] == e['pageName']) {
                e.changes.forEach(function (change) {
                    _this.dataService.changeInterval(change, true);
                });
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_usb_select_usb_component__ = __webpack_require__("../../../../../src/app/select-usb/select-usb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tools_page_tools_page_component__ = __webpack_require__("../../../../../src/app/tools-page/tools-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tools_page_homize_homize_component__ = __webpack_require__("../../../../../src/app/tools-page/homize/homize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tools_page_move_axis_move_axis_component__ = __webpack_require__("../../../../../src/app/tools-page/move-axis/move-axis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__print_page_print_page_component__ = __webpack_require__("../../../../../src/app/print-page/print-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__select_usb_select_usb_component__["a" /* SelectUsbComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tools_page_tools_page_component__["a" /* ToolsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tools_page_homize_homize_component__["a" /* HomizeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tools_page_move_axis_move_axis_component__["a" /* MoveAxisComponent */],
                __WEBPACK_IMPORTED_MODULE_15__print_page_print_page_component__["a" /* PrintPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_confirm_confirm_component__["a" /* ConfirmComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialogModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__shared_confirm_confirm_component__["a" /* ConfirmComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_10__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_16__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_main_page_component__ = __webpack_require__("../../../../../src/app/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_usb_select_usb_component__ = __webpack_require__("../../../../../src/app/select-usb/select-usb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_page_tools_page_component__ = __webpack_require__("../../../../../src/app/tools-page/tools-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_page_homize_homize_component__ = __webpack_require__("../../../../../src/app/tools-page/homize/homize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_page_move_axis_move_axis_component__ = __webpack_require__("../../../../../src/app/tools-page/move-axis/move-axis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__print_page_print_page_component__ = __webpack_require__("../../../../../src/app/print-page/print-page.component.ts");








var APP_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_3__select_usb_select_usb_component__["a" /* SelectUsbComponent */] },
    { path: 'tools', component: __WEBPACK_IMPORTED_MODULE_4__tools_page_tools_page_component__["a" /* ToolsPageComponent */] },
    { path: 'homize', component: __WEBPACK_IMPORTED_MODULE_5__tools_page_homize_homize_component__["a" /* HomizeComponent */] },
    { path: 'move', component: __WEBPACK_IMPORTED_MODULE_6__tools_page_move_axis_move_axis_component__["a" /* MoveAxisComponent */] },
    { path: 'print', component: __WEBPACK_IMPORTED_MODULE_7__print_page_print_page_component__["a" /* PrintPageComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  height: 100%;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 3%;\r\n  margin: 4%;\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 6%;\r\n\r\n}\r\n\r\n.bottom-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  margin-bottom: 8px;\r\n  max-width: 100%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\"-->\r\n     <!--fxLayout-->\r\n     <!--fxLayout.xs=\"column\"-->\r\n     <!--fxLayoutAlign=\"center\"-->\r\n     <!--fxLayoutGap=\"10px\"-->\r\n     <!--fxLayoutGap.xs=\"0\">-->\r\n  <!--<div class=\"item item-1\" pItem [height]=\"'50px'\" fxFlex=\"15%\">Item 1</div>-->\r\n  <!--<div class=\"item item-2\" fxFlex=\"20%\" fxFlexOrder=\"3\">Item 2</div>-->\r\n  <!--<div class=\"item item-3\" fxFlex>Item 3</div>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"container\"-->\r\n     <!--fxLayout-->\r\n     <!--fxLayout.xs=\"column\"-->\r\n     <!--fxLayoutAlign=\"center\"-->\r\n     <!--fxLayoutGap=\"10px\"-->\r\n     <!--fxLayoutGap.xs=\"0\">-->\r\n  <!--<div class=\"item item-4\" fxFlex fxFlexOffset=\"50px\"  fxFlexOffset.xs=\"0\">Item 4</div>-->\r\n  <!--<div class=\"item item-5\" fxFlex=\"200px\">Item 5</div>-->\r\n<!--</div>-->\r\n<div class=\"main-page-div\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\r\n        <div class=\"simple-text\">دمای Bed</div>\r\n        <span class=\"little-text\">فعلی: °{{bed.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{bed.goal}}</span>\r\n      </div>\r\n      <div fxFlex=\"2%\"></div>\r\n      <div class=\"item full-item\" fxFlex=\"44%\">2</div>\r\n      <div fxFlex=\"2%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\r\n        <div class=\"simple-text\">دمای Extrude</div>\r\n        <span class=\"little-text\">فعلی: °{{ext.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{ext.goal}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"container\">-->\r\n  <!--</div>-->\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" class=\"middle-part\">\r\n      <div class=\"item full-item\" fxFlex=\"100\">\r\n        <!--<br><br><br><br>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container t\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\r\n      <div class=\"item full-item item-button\" fxFlex=\"28%\" style=\"opacity: 0.4;\">\r\n        <img src=\"{{elements.settings?.imageUrl}}\" alt=\"\">\r\n        <div class=\"simple-text\">تنظیمات</div>\r\n      </div>\r\n      <div fxFlex=\"8%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"28%\" (click)=\"goToSelectUsbPage()\">\r\n        <img src=\"{{elements.print?.imageUrl}}\" alt=\"\">\r\n        <div class=\"simple-text\">پرینت</div>\r\n      </div>\r\n      <div fxFlex=\"8%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"28%\" (click)=\"goToToolsPage()\">\r\n        <img src=\"{{elements.tools?.imageUrl}}\" alt=\"\">\r\n        <div class=\"simple-text\">ابزار</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainPageComponent = (function () {
    function MainPageComponent(httpService, snackBar, progressService, router, dataService) {
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.progressService = progressService;
        this.router = router;
        this.dataService = dataService;
        this.pageName = 'main-page';
        this.bed = {
            cur: 200,
            goal: 1000
        };
        this.ext = {
            cur: 6,
            goal: 200
        };
        this.elements = {
            settings: { imageUrl: '' },
            print: { imageUrl: '' },
            tools: { imageUrl: '' },
        };
        this.elements = {
            settings: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/settings.png'
            },
            print: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png'
            },
            tools: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/tools.png'
            }
        };
        // console.log(ServerMatch.STATIC);
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.temps.subscribe(function (data) {
            _this.bed = data.bed;
            _this.ext = data.ext;
        });
    };
    MainPageComponent.prototype.goToSelectUsbPage = function () {
        this.router.navigate(["/select"]);
    };
    MainPageComponent.prototype.goToToolsPage = function () {
        this.router.navigate(['/tools']);
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/print-page/print-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  height: 100%;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 1%;\r\n  margin: 2%;\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 6%;\r\n\r\n}\r\n\r\n.bottom-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  margin-bottom: 8px;\r\n  max-width: 100%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n/* SELECT USB */\r\nbody {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 1%;\r\n  margin: 2%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\nmat-progress-spinner {\r\n  left: 5px;\r\n}\r\n\r\n.value-percent {\r\n  position: relative;\r\n  top: -69px;\r\n  left: -23px;\r\n  font-size: 2em;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n\r\n.short-padding {\r\n  padding: 10px;\r\n  background-color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/print-page/print-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        <div class=\"simple-text\">دمای Bed</div>\n        <span class=\"little-text\">فعلی: °{{temps.bed.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{temps.bed.goal}}</span>\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\">2</div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        <div class=\"simple-text\">دمای Extrude</div>\n        <span class=\"little-text\">فعلی: °{{temps.ext.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{temps.ext.goal}}</span>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"container\"> -->\n  <!-- <div fxLayout=\"row\" class=\"middle-part\"> -->\n  <!-- <div class=\"item full-item\" fxFlex=\"100\"> -->\n  <!-- </div> -->\n  <!-- </div> -->\n  <!-- </div> -->\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" fxFlexOffset=\"40%\">\n        <mat-progress-spinner [value]=\"printPercent\"></mat-progress-spinner>\n        <div class=\"value-percent\">{{printPercent}}</div>\n        <!--<img src=\"{{elements.usb?.imageUrl}}\" alt=\"\">-->\n        <!--<div class=\"simple-text\">{{usbs.length > i ? usbs[i].substring(0, 12) : 'Empty'}}</div>-->\n      </div>\n      <!--<div fxFlex=\"1%\"></div>-->\n      <!--<div class=\"item full-item item-button\" fxFlex=\"24%\"-->\n           <!--(click)=\"addDir(usbs.length > (i + 1) ? usbs[i + 1] : '')\" [ngClass]=\"{'disable-like-button': usbs.length <= (i + 1)}\">-->\n        <!--<img src=\"{{elements.usb?.imageUrl}}\" alt=\"\">-->\n        <!--<div class=\"simple-text\">{{usbs.length > (i + 1) ? usbs[i + 1].substring(0, 12) : 'Empty'}}</div>-->\n      <!--</div>-->\n      <!--<div fxFlex=\"1%\"></div>-->\n      <!--<div class=\"item full-item item-button\" fxFlex=\"24%\"-->\n           <!--(click)=\"addDir(usbs.length > (i + 2) ? usbs[i + 2] : '')\" [ngClass]=\"{'disable-like-button': usbs.length <= (i + 2)}\">-->\n        <!--<img src=\"{{elements.usb?.imageUrl}}\" alt=\"\">-->\n        <!--<div class=\"simple-text\">{{usbs.length > (i + 2) ? usbs[i + 2].substring(0, 12) : 'Empty'}}</div>-->\n      <!--</div>-->\n      <!--<div fxFlex=\"1%\"></div>-->\n      <!--<div class=\"item full-item item-button\" fxFlex=\"24%\"-->\n           <!--(click)=\"addDir(usbs.length > (i + 3) ? usbs[i + 3] : '')\" [ngClass]=\"{'disable-like-button': usbs.length <= (i + 3)}\">-->\n        <!--<img src=\"{{elements.usb?.imageUrl}}\" alt=\"\">-->\n        <!--<div class=\"simple-text\">{{usbs.length > (i + 3) ? usbs[i + 3].substring(0, 12) : 'Empty'}}</div>-->\n      <!--</div>-->\n    </div>\n  </div>\n\n  <div class=\"container t\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\n      <!--<div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goBackToHomePage()\">-->\n        <!--<img src=\"{{elements.return?.imageUrl}}\">-->\n        <!--<mat-icon aria-label=\"edit\">edit</mat-icon>-->\n        <!--<i class=\"material-icons\">keyboard_arrow_left</i>-->\n        <!--<i class=\"material-icons iconic-font\">replay</i>-->\n        <!--<div class=\"simple-text\">بازگشت</div>-->\n      <!--</div>-->\n      <div class=\"item full-item item-button-bigger\" fxFlexOffset=\"36%\" fxFlex=\"23%\" (click)=\"beforePrint('stop')\">\n        <img src=\"{{elements.stop?.imageUrl}}\">\n        <!--<i class=\"material-icons iconic-font\">keyboard_arrow_left</i>-->\n        <div class=\"simple-text\">توقف کامل</div>\n      </div>\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"23%\" (click)=\"beforePrint(printingStatus == 'pause' ? 'resume' : 'pause')\">\n        <img src=\"{{printingStatus == 'pause' ? elements.pause?.imageUrl : elements.resume?.imageUrl}}\">\n        <!--<i class=\"material-icons iconic-font\">keyboard_arrow_right</i>-->\n        <div class=\"simple-text\">{{printingStatus == 'pause' ? 'ادامه' : 'توقف'}}</div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/print-page/print-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrintStatus;
(function (PrintStatus) {
    PrintStatus["print"] = "print";
    PrintStatus["resume"] = "resume";
    PrintStatus["pause"] = "pause";
    PrintStatus["stop"] = "stop";
})(PrintStatus || (PrintStatus = {}));
var PrintPageComponent = (function () {
    function PrintPageComponent(httpService, router, dataService, dialog) {
        this.httpService = httpService;
        this.router = router;
        this.dataService = dataService;
        this.dialog = dialog;
        this.pageName = 'print-page';
        this.printPercent = 100;
        this.temps = {
            bed: {
                cur: 0,
                goal: 10,
            },
            ext: {
                cur: 0,
                goal: 10,
            }
        };
        this.elements = {
            resume: { imageUrl: '' },
            pause: { imageUrl: '' },
            stop: { imageUrl: '' },
            return: { imageUrl: '' }
        };
        this.printingStatus = PrintStatus.print;
        this.elements = {
            resume: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/up.png',
            },
            pause: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/down.png',
            },
            stop: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png',
            },
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            },
        };
    }
    PrintPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.temps.subscribe(function (data) {
            _this.temps.bed = data.bed;
            _this.temps.ext = data.ext;
        });
        this.dataService.percentage.subscribe(function (data) {
            _this.printPercent = data;
        });
    };
    PrintPageComponent.prototype.beforePrint = function (action) {
        var _this = this;
        if (action === void 0) { action = 'percentage'; }
        if (action === 'stop') {
            var rmDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_confirm_confirm_component__["a" /* ConfirmComponent */], {
                width: '400px',
            });
            rmDialog.afterClosed().subscribe(function (status) {
                if (status) {
                    _this.printAction(action);
                }
            });
        }
        else {
            this.printAction(action);
        }
    };
    PrintPageComponent.prototype.printAction = function (action) {
        var _this = this;
        if (action === void 0) { action = 'percentage'; }
        this.httpService.post("print", { action: action }, true).subscribe(function (data) {
            if (data['status'] === 'success') {
                console.log('OK');
                _this.printingStatus = PrintStatus[action];
                if (_this.printingStatus === PrintStatus.stop) {
                    _this.goBackToHomePage();
                }
            }
            else {
                console.log('problem!', data);
            }
        }, function (err) {
            console.error('error in changing state of printing', err);
        });
    };
    PrintPageComponent.prototype.goBackToHomePage = function () {
        this.router.navigate(["home"]);
    };
    PrintPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-print-page',
            template: __webpack_require__("../../../../../src/app/print-page/print-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/print-page/print-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialog */]])
    ], PrintPageComponent);
    return PrintPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/select-usb/select-usb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  overflow: hidden;\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.no-border-rad {\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.ltr-text {\r\n  direction: ltr;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/select-usb/select-usb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\r\n        1\r\n      </div>\r\n      <div fxFlex=\"2%\"></div>\r\n      <div class=\"item full-item\" fxFlex=\"44%\" style=\"text-align: center;\">{{cd}}</div>\r\n      <div fxFlex=\"2%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\r\n        3\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\r\n      <div class=\"item full-item item-button\" fxFlex=\"24%\"\r\n           (click)=\"addDir(usbs.length > i ? usbs[i] : '')\" [ngClass]=\"{'disable-like-button': usbs.length <= i}\">\r\n        <img class=\"no-border-rad\"\r\n          src=\"{{(i < usbs.length ?\r\n          (cd == '' ? elements.usb?.imageUrl :\r\n            (isGcode(usbs[i]) ?\r\n              elements.gcodeFile?.imageUrl :\r\n              elements.folder?.imageUrl))\r\n          : elements.none?.imageUrl)}}\"\r\n          alt=\"\">\r\n        <div class=\"simple-text ltr-text\">{{usbs.length > i ? getShortString(usbs[i]) : 'Empty'}}</div>\r\n      </div>\r\n      <div fxFlex=\"1%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"24%\"\r\n           (click)=\"addDir(usbs.length > (i + 1) ? usbs[i + 1] : '')\"\r\n           [ngClass]=\"{'disable-like-button': usbs.length <= (i + 1)}\">\r\n        <img class=\"no-border-rad\"\r\n          src=\"{{((i + 1) < usbs.length ?\r\n          (cd == '' ? elements.usb?.imageUrl :\r\n            (isGcode(usbs[i + 1]) ?\r\n              elements.gcodeFile?.imageUrl :\r\n              elements.folder?.imageUrl))\r\n          : elements.none?.imageUrl)}}\"\r\n          alt=\"\">\r\n        <div class=\"simple-text ltr-text\">{{usbs.length > (i + 1) ? getShortString(usbs[i + 1]) : 'Empty'}}</div>\r\n      </div>\r\n      <div fxFlex=\"1%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"24%\"\r\n           (click)=\"addDir(usbs.length > (i + 2) ? usbs[i + 2] : '')\"\r\n           [ngClass]=\"{'disable-like-button': usbs.length <= (i + 2)}\">\r\n        <img class=\"no-border-rad\"\r\n          src=\"{{((i + 2) < usbs.length ?\r\n          (cd == '' ? elements.usb?.imageUrl :\r\n            (isGcode(usbs[i + 2]) ?\r\n              elements.gcodeFile?.imageUrl :\r\n              elements.folder?.imageUrl))\r\n          : elements.none?.imageUrl)}}\"\r\n          alt=\"\">\r\n        <div class=\"simple-text ltr-text\">{{usbs.length > (i + 2) ? getShortString(usbs[i + 2]) : 'Empty'}}</div>\r\n      </div>\r\n      <div fxFlex=\"1%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"24%\"\r\n           (click)=\"addDir(usbs.length > (i + 3) ? usbs[i + 3] : '')\"\r\n           [ngClass]=\"{'disable-like-button': usbs.length <= (i + 3)}\">\r\n        <img class=\"no-border-rad\"\r\n          src=\"{{((i + 3) < usbs.length ?\r\n          (cd == '' ? elements.usb?.imageUrl :\r\n            (isGcode(usbs[i + 3]) ?\r\n              elements.gcodeFile?.imageUrl :\r\n              elements.folder?.imageUrl))\r\n          : elements.none?.imageUrl)}}\"\r\n          alt=\"\">\r\n        <div class=\"simple-text ltr-text\">{{usbs.length > (i + 3) ? getShortString(usbs[i + 3]) : 'Empty'}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container t\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\r\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goBackToHomePage()\">\r\n        <img src=\"{{elements.return?.imageUrl}}\">\r\n        <div class=\"simple-text\">بازگشت</div>\r\n      </div>\r\n      <div class=\"item full-item item-button-bigger\" fxFlexOffset=\"1%\" fxFlex=\"24%\" (click)=\"addDir(cd, false)\">\r\n        <img src=\"{{elements.up?.imageUrl}}\">\r\n        <div class=\"simple-text\">بالا</div>\r\n      </div>\r\n      <div class=\"item full-item item-button-bigger\" fxFlexOffset=\"1%\" fxFlex=\"24%\" (click)=\"changePage(false)\">\r\n        <img src=\"{{elements.left?.imageUrl}}\">\r\n        <div class=\"simple-text\">عقب</div>\r\n      </div>\r\n      <div class=\"item full-item item-button-bigger\" fxFlexOffset=\"1%\" fxFlex=\"24%\" (click)=\"changePage(true)\">\r\n        <img src=\"{{elements.right?.imageUrl}}\">\r\n        <div class=\"simple-text\">جلو</div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/select-usb/select-usb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectUsbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectUsbComponent = (function () {
    function SelectUsbComponent(httpService, snackBar, progressService, router) {
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.progressService = progressService;
        this.router = router;
        this.usbs = ['jfsidjfslijfseliofa', 'my name is iman sahebi', 'c.gcode', 'd', 'this is a long file.gcode', 'f'];
        this.cd = '';
        this.i = 0;
        this.elements = {
            left: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/left.png',
            },
            right: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/right.png',
            },
            up: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/up.png',
            },
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            },
            usb: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/usb.png',
            },
            folder: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/folder.png',
            },
            gcodeFile: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/file.png',
            },
            none: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/none.png',
            },
        };
    }
    SelectUsbComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.progressService.enable();
            console.log('post to dir:', _this.cd);
            _this.httpService.post('directory', { 'cd': _this.cd }, true).subscribe(function (data) {
                _this.progressService.disable();
                _this.usbs = data.data;
            }, function (err) {
                _this.progressService.disable();
                console.log("server didn't send usbs", err);
            });
        }, 0);
    };
    SelectUsbComponent.prototype.addDir = function (path, isAdd) {
        var _this = this;
        if (isAdd === void 0) { isAdd = true; }
        var currentDir = this.cd;
        if (path && path != '') {
            if (isAdd) {
                if (currentDir != '') {
                    currentDir += '/' + path;
                }
                else {
                    currentDir = path;
                }
            }
            else {
                var tempDir = path.split('/');
                currentDir = tempDir.splice(0, tempDir.length - 1).join('/');
            }
            console.log('post to dir:', currentDir);
            this.progressService.enable();
            this.httpService.post('directory', { 'cd': currentDir }, true).subscribe(function (data) {
                _this.cd = currentDir;
                console.log('data received:', data);
                if (data && data.type == 'file') {
                    _this.httpService.post('print', { 'cd': _this.cd, 'action': 'print' }, true).subscribe(function (data) {
                        if (data.status === 'success') {
                            _this.progressService.disable();
                            _this.router.navigate(["/print"]);
                        }
                        else {
                            console.error('problem occurred!', data);
                        }
                    });
                }
                else {
                    _this.progressService.disable();
                    _this.usbs = data.data;
                    _this.i = 0;
                }
            }, function (err) {
                _this.progressService.disable();
                console.log('server didn\'t send the files', err);
            });
        }
    };
    SelectUsbComponent.prototype.changePage = function (next) {
        if (next) {
            if (this.i < this.usbs.length - 4) {
                this.i += 4;
                console.log('added', this.i);
            }
        }
        else {
            if (this.i >= 4) {
                this.i -= 4;
                console.log('removed', this.i);
            }
        }
    };
    SelectUsbComponent.prototype.getShortString = function (text, length) {
        if (length === void 0) { length = 15; }
        var gcode = '.gcode';
        var dots = '...';
        if (text.length < length) {
            return text;
        }
        else {
            if (this.isGcode(text)) {
                return text.substring(0, length - (dots + gcode).length) + dots + gcode;
            }
            else {
                return text.substring(0, length - dots.length) + dots;
            }
        }
        // default
        // return text.substring(0, length);
    };
    SelectUsbComponent.prototype.isGcode = function (text) {
        var gcode = '.gcode';
        return text.endsWith(gcode);
    };
    SelectUsbComponent.prototype.goBackToHomePage = function () {
        this.router.navigate(["/home"]);
    };
    SelectUsbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-usb-page',
            template: __webpack_require__("../../../../../src/app/select-usb/select-usb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/select-usb/select-usb.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], SelectUsbComponent);
    return SelectUsbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(progressService, httpService) {
        this.progressService = progressService;
        this.httpService = httpService;
        this.datas = [
            'temps',
            'percentage',
        ];
        this.temps = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            bed: {
                cur: 0,
                goal: 10,
            },
            ext: {
                cur: 0,
                goal: 10,
            },
        });
        this.firstTouch = true;
        this.percentage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](60);
        this.setTemps();
    }
    DataService.prototype.changeInterval = function (name, activate) {
        if (activate === void 0) { activate = true; }
        if (!activate) {
            if (name === 'temps') {
                clearInterval(this.tempsInterval);
            }
            else if (name === 'percentage') {
                clearInterval(this.percentageInterval);
            }
            this.changeInterval(this[name]);
        }
        else {
            if (name === 'temps') {
                this.setTemps();
            }
            else if (name === 'percentage') {
                this.setPercentage();
            }
        }
    };
    DataService.prototype.setTemps = function () {
        var _this = this;
        this.tempsInterval = setInterval(function () {
            if (_this.firstTouch)
                _this.progressService.enable();
            _this.httpService.get('temperatures', true).subscribe(function (data) {
                _this.temps.next({
                    bed: data.bed,
                    ext: data.ext
                });
                if (_this.firstTouch) {
                    _this.progressService.disable();
                    _this.firstTouch = false;
                }
            }, function (err) {
                if (!_this.firstTouch) {
                    _this.progressService.disable();
                    _this.firstTouch = true;
                    console.log("server didn't send temperatures", err);
                }
            });
        }, 3000);
    };
    DataService.prototype.setPercentage = function () {
        var _this = this;
        this.percentageInterval = setInterval(function () {
            _this.httpService.post("print", {
                action: 'percentage'
            }, true).subscribe(function (data) {
                _this.percentage.next(data['percentage']);
            }, function (err) {
                console.error('percentage error', err);
            });
        }, 5000);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        // public static Host = 'http://localhost:3000';
        // private serverAddress = 'http://172.18.129.94:8000/api/';
        this.serverAddress = '/api/';
        this.defaultMap = false;
    }
    HttpService.prototype.get = function (url, map) {
        if (map === void 0) { map = this.defaultMap; }
        if (!map)
            return this.http.get(this.serverAddress + url, { observe: 'response' });
        return this.http.get(this.serverAddress + url, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.prototype.put = function (url, values, map) {
        if (map === void 0) { map = this.defaultMap; }
        if (!map)
            return this.http.put(this.serverAddress + url, values, { observe: 'response' });
        return this.http.put(this.serverAddress + url, values, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.prototype.post = function (url, values, map) {
        if (map === void 0) { map = this.defaultMap; }
        if (!map)
            return this.http.post(this.serverAddress + url, values, { observe: 'response' });
        return this.http.post(this.serverAddress + url, values, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.prototype.delete = function (url, map) {
        if (map === void 0) { map = this.defaultMap; }
        if (!map)
            return this.http.delete(this.serverAddress + url, { observe: 'response' });
        return this.http.delete(this.serverAddress + url, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/services/progress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgressModeEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressModeEnum;
(function (ProgressModeEnum) {
    ProgressModeEnum["determinate"] = "determinate";
    ProgressModeEnum["indeterminate"] = "indeterminate";
    ProgressModeEnum["buffer"] = "buffer";
    ProgressModeEnum["query"] = "query";
})(ProgressModeEnum || (ProgressModeEnum = {}));
var ProgressService = (function () {
    function ProgressService() {
        this.progressModeEnum = ProgressModeEnum;
        this.showProgress = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.progressMode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.progressValue = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.progressBufferValue = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.showProgress.next(false);
        // Set default values
        this.progressMode.next(this.progressModeEnum.indeterminate);
        this.progressValue.next(50);
        this.progressBufferValue.next(null);
    }
    ProgressService.prototype.enable = function () {
        this.showProgress.next(true);
    };
    ProgressService.prototype.disable = function () {
        this.showProgress.next(false);
    };
    ProgressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProgressService);
    return ProgressService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\r\n  padding: 10px;\r\n  background-color: darkgrey;\r\n}\r\n\r\n.sub-title {\r\n  font-size: 0.8em;\r\n}\r\n\r\n.page {\r\n  font-family: iranyekan, sans-serif;\r\n  padding: 15px;\r\n  margin: 10px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\nmat-card-title {\r\n  font-family: iranyekan, sans-serif;\r\n  font-size: 1.5em !important;\r\n  text-align: center;\r\n  position: relative;\r\n  left: 114px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"center\">\n  <mat-card-header class=\"content\">\n    <mat-card-title>\n      تأیید توقف\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"page\">\n    <div class=\"sub-title content\">آیا مطمئن هستید که پرینت متوقف شود؟</div>\n    <br/>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" role=\"yes-btn\" style=\"display: inline-block\">\n        <button mat-button mat-icon-button (click)=\"remove(true)\">\n          <mat-icon aria-label=\"yes\">done</mat-icon>\n        </button>\n      </div>\n      <div fxFlex=\"50\" role=\"no-btn\" style=\"display: inline-block\">\n        <button mat-icon-button (click)=\"remove(false)\">\n          <mat-icon aria-label=\"no\">clear</mat-icon>\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/shared/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmComponent = (function () {
    function ConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        // data = (this.data && this.data.name) ? this.data.name : null;
    };
    ConfirmComponent.prototype.remove = function (answer) {
        this.dialogRef.close(answer);
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm',
            template: __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/confirm/confirm.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/servermatch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerMatch; });
var ServerMatch = (function () {
    /** TODO:
     * STATIC is for development-mode
     * But for the server, it's input should be changed to SERVER_STATIC value
     *
     * THIS WILL BE AUTOMATED (THE FILE SHOULD NOT BE CHANGED :D)
     */
    function ServerMatch() {
        this.SERVER_STATIC = '/static/';
    }
    ServerMatch.STATIC = '/static/';
    return ServerMatch;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/homize/homize.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n  max-height: 215px !important;\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger:nth-child(2) {\r\n  /* THE BIG BLUE SIMPLE BACKGROUND :D */\r\n  /*margin-bottom: 20px;*/\r\n  /*background-color: #005E7C;*/\r\n\r\n  /*box-shadow: 0 20px 15px -10px blue;*/\r\n  /*opacity: 0.6;*/\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.shaped-text {\r\n  border: 11px solid black;\r\n  border-radius: 100px;\r\n  padding: 1px;\r\n  font-size: 6em;\r\n  background-color: #FFC593;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/homize/homize.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        1\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\">2</div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        3\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"23%\" (click)=\"homizeAxis(elements.x?.axis)\">\n        <!--<img src=\"{{elements.x?.imageUrl}}\" alt=\"\">-->\n        <div class=\"simple-text shaped-text\">{{elements.x?.title}}</div>\n      </div>\n      <div fxFlex=\"7%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"23%\" (click)=\"homizeAxis(elements.y?.axis)\">\n        <!--<img src=\"{{elements.y?.imageUrl}}\" alt=\"\">-->\n        <div class=\"simple-text shaped-text\">{{elements.y?.title}}</div>\n      </div>\n      <div fxFlex=\"7%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"23%\" (click)=\"homizeAxis(elements.z?.axis)\">\n        <!--<img src=\"{{elements.z?.imageUrl}}\" alt=\"\">-->\n        <div class=\"simple-text shaped-text\">{{elements.z?.title}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container t\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goToPage(elements.return?.routeTo)\">\n        <img src=\"{{elements.return?.imageUrl}}\">\n        <div class=\"simple-text\">بازگشت</div>\n      </div>\n      <div class=\"item full-item item-button-bigger\" fxFlexOffset=\"17%\" fxFlex=\"50%\"\n           (click)=\"homizeAxis(elements.all?.axis)\">\n        <!--<img src=\"{{elements.return?.imageUrl}}\">-->\n        <div class=\"simple-text shaped-text\" style=\"position: relative;\">{{elements.all?.title}}</div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools-page/homize/homize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomizeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomizeComponent = (function () {
    // TODO: I can use some kind of abstract class to reduce this much redundancy!
    function HomizeComponent(router, httpService, snackBar) {
        this.router = router;
        this.httpService = httpService;
        this.snackBar = snackBar;
        var TIU = __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png';
        this.elements = {
            x: {
                title: 'X',
                imageUrl: TIU,
                axis: 'X',
            },
            y: {
                title: 'Y',
                imageUrl: TIU,
                axis: 'Y',
            },
            z: {
                title: 'Z',
                imageUrl: TIU,
                axis: 'Z',
            },
            all: {
                title: 'All',
                imageUrl: TIU,
                axis: 'All',
            },
            return: {
                title: 'بازگشت',
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
                routeTo: 'tools'
            }
        };
    }
    HomizeComponent.prototype.ngOnInit = function () {
    };
    HomizeComponent.prototype.goToPage = function (route) {
        this.router.navigate(['/' + route]);
    };
    HomizeComponent.prototype.homizeAxis = function (axis) {
        var _this = this;
        this.httpService.post('home', { axis: axis }).subscribe(function (data) {
            _this.snackBar.open('با موفقیت هوم شد!', null, {
                duration: 2300,
            });
        }, function (err) {
            _this.snackBar.open('ارور در ست کردن هوم', null, {
                duration: 2300,
            });
        });
    };
    HomizeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homize',
            template: __webpack_require__("../../../../../src/app/tools-page/homize/homize.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools-page/homize/homize.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatSnackBar */]])
    ], HomizeComponent);
    return HomizeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/move-axis/move-axis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button {\r\n  }\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  /*-webkit-border-radius: 100px;*/\r\n  /*-moz-border-radius: 100px;*/\r\n  /*border-radius: 100px;*/\r\n  border-radius: 15px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  /*-webkit-border-radius: 100px;*/\r\n  /*-moz-border-radius: 100px;*/\r\n  /*border-radius: 100px;*/\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.move-icon {\r\n  font-size: 6em;\r\n  /*border: 1px solid gray;*/\r\n  /*padding: 0 !important;*/\r\n  /*background-color: black;*/\r\n  /*color: white;*/\r\n  /*-webkit-border-radius: 70px;*/\r\n  /*-moz-border-radius: 60px;*/\r\n  /*border-radius: 60px;*/\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/move-axis/move-axis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"30%\">\r\n        <span class=\"simple-text\">X: {{axis.X}}</span>\r\n      </div>\r\n      <div fxFlex=\"5%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"30%\">\r\n        <span class=\"simple-text\">Y: {{axis.Y}}</span>\r\n      </div>\r\n      <div fxFlex=\"5%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"30%\">\r\n        <span class=\"simple-text\">Z: {{axis.Z}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"margin-bottom: 10px;\"></div>\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"9%\" class=\"item-button\" (click)=\"moveAxis('X', value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_up</i>-->\r\n        <img src=\"{{elements.up?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Y', value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_up</i>-->\r\n        <img src=\"{{elements.up?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Z', value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_up</i>-->\r\n        <img src=\"{{elements.up?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"9%\" class=\"item-button\" (click)=\"moveAxis('X', -value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_down</i>-->\r\n        <img src=\"{{elements.down?.imageUrl}}\" alt=\"\">\r\n        <!--<div class=\"simple-text\">X</div>-->\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Y', -value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_down</i>-->\r\n        <img src=\"{{elements.down?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Z', -value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_down</i>-->\r\n        <img src=\"{{elements.down?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"container\">-->\r\n    <!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">-->\r\n      <!--&lt;!&ndash;<div fxFlex=\"80%\" fxFlexOffset=\"10%\">&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n      <!--<div fxFlex=\"13%\" fxFlexOffset=\"24%\" class=\"item-button\" (click)=\"moveAxis('X', -value)\">-->\r\n        <!--<i class=\"material-icons move-icon\">arrow_back</i>-->\r\n      <!--</div>-->\r\n      <!--<div fxFlex=\"13%\" class=\"item-button\" (click)=\"moveAxis('Y', -value)\">-->\r\n        <!--<i class=\"material-icons move-icon\">arrow_downward</i>-->\r\n      <!--</div>-->\r\n      <!--<div fxFlex=\"13%\" class=\"item-button\" (click)=\"moveAxis('X', value)\">-->\r\n        <!--&lt;!&ndash;<i class=\"material-icons move-icon\">arrow_forward</i>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<img src=\"{{elements.right?.imageUrl}}\" alt=\"\">&ndash;&gt;-->\r\n      <!--</div>-->\r\n      <!--<div fxFlex=\"13%\" fxFlexOffset=\"8%\" class=\"item-button\" (click)=\"moveAxis('Z', -value)\">-->\r\n        <!--<i class=\"material-icons move-icon\">arrow_downward</i>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <div class=\"container t\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\r\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goToToolsPage()\">\r\n        <img src=\"{{elements.return?.imageUrl}}\">\r\n        <!--<mat-icon aria-label=\"edit\">edit</mat-icon>-->\r\n        <!--<i class=\"material-icons\">keyboard_arrow_left</i>-->\r\n        <!--<i class=\"material-icons iconic-font\">replay</i>-->\r\n        <div class=\"simple-text\">بازگشت</div>\r\n      </div>\r\n      <mat-slider [max]=\"50\" [min]=\"0\" [step]=\"1\" [thumb-label]=\"true\"\r\n                  (change)=\"changeSlider($event)\" style=\"width: 60%\"></mat-slider>\r\n      <!--<div class=\"item full-item item-button-bigger\" fxFlexOffset=\"12%\" fxFlex=\"23%\">-->\r\n      <!--<img src=\"{{elements.return?.imageUrl}}\">-->\r\n      <!--<i class=\"material-icons iconic-font\">keyboard_arrow_left</i>-->\r\n      <!--<div class=\"simple-text\">عقب</div>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"item full-item item-button-bigger\" fxFlex=\"23%\">-->\r\n      <!--<img src=\"{{elements.return?.imageUrl}}\">-->\r\n      <!--<i class=\"material-icons iconic-font\">keyboard_arrow_right</i>-->\r\n      <!--<div class=\"simple-text\">جلو</div>-->\r\n      <!--</div>-->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tools-page/move-axis/move-axis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveAxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoveAxisComponent = (function () {
    function MoveAxisComponent(httpService, router, progressService) {
        this.httpService = httpService;
        this.router = router;
        this.progressService = progressService;
        this.elements = {
            up: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/up.png'
            },
            down: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/down.png',
            },
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            }
        };
    }
    MoveAxisComponent.prototype.ngOnInit = function () {
        this.axis = {
            X: 0,
            Y: 0,
            Z: 0,
        };
    };
    MoveAxisComponent.prototype.moveAxis = function (axis, value) {
        // if(this.axis[axis] + value < 0) {
        //   console.log("YOU'RE SETTING IT TO MINUS!");
        //   return;
        // }
        var _this = this;
        this.progressService.enable();
        this.httpService.post('move_axis', { axis: axis, value: value }).subscribe(function (data) {
            _this.progressService.disable();
            _this.axis[axis] += value || 0;
        }, function (err) {
            _this.progressService.disable();
            console.error("couldn't move axis", err);
            // TODO: for test purposes
            // this.axis[axis] += value || 0;
        });
    };
    MoveAxisComponent.prototype.goToToolsPage = function () {
        this.router.navigate(['/tools']);
    };
    MoveAxisComponent.prototype.changeSlider = function ($event) {
        this.value = $event.value;
        console.log(this.value);
    };
    MoveAxisComponent.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    MoveAxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-move-axis',
            template: __webpack_require__("../../../../../src/app/tools-page/move-axis/move-axis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools-page/move-axis/move-axis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_progress_service__["a" /* ProgressService */]])
    ], MoveAxisComponent);
    return MoveAxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        1\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\">2</div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        3\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\" (click)=\"goToPage(elements.home?.routeTo)\">\n      <div class=\"item full-item item-button\" fxFlex=\"24%\">\n        <img src=\"{{elements.home?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.home?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button disable-like-button\" fxFlex=\"24%\">\n        <img src=\"{{elements.heat?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.heat?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"goToPage(elements.move?.routeTo)\">\n        <img src=\"{{elements.move?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.move?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button disable-like-button\" fxFlex=\"24%\">\n        <img src=\"{{elements.ext?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.ext?.title}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container t\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goToPage(elements.return?.routeTo)\">\n        <!--<i class=\"material-icons iconic-font\">replay</i>-->\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.return?.title}}</div>\n      </div>\n      <div class=\"item full-item item-button-bigger disable-like-button\" fxFlexOffset=\"26%\" fxFlex=\"24%\">\n        <img src=\"{{elements.bed?.imageUrl}}\">\n        <div class=\"simple-text\">{{elements.bed?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button-bigger disable-like-button\" fxFlex=\"24%\">\n        <img src=\"{{elements.fan?.imageUrl}}\">\n        <div class=\"simple-text\">{{elements.fan?.title}}</div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsPageComponent = (function () {
    function ToolsPageComponent(router) {
        this.router = router;
        var TIU = __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png';
        this.elements = {
            home: {
                title: 'Home',
                imageUrl: TIU,
                routeTo: 'homize',
            },
            heat: {
                title: 'Heat',
                imageUrl: TIU,
                routeTo: 'heat',
            },
            move: {
                title: 'Move',
                imageUrl: TIU,
                routeTo: 'move',
            },
            ext: {
                title: 'Extrude',
                imageUrl: TIU,
                routeTo: 'extrude',
            },
            return: {
                title: 'بازگشت',
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
                routeTo: 'home',
            },
            bed: {
                title: 'Bed Leveling',
                imageUrl: TIU,
                routeTo: 'bedleveling',
            },
            fan: {
                title: 'Fans',
                imageUrl: TIU,
                routeTo: 'setfans',
            }
        };
    }
    ToolsPageComponent.prototype.ngOnInit = function () {
    };
    ToolsPageComponent.prototype.goToPage = function (route) {
        this.router.navigate(['/' + route]);
    };
    ToolsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tools-page',
            template: __webpack_require__("../../../../../src/app/tools-page/tools-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools-page/tools-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ToolsPageComponent);
    return ToolsPageComponent;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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