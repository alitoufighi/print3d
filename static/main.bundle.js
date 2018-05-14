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
        // by changes, I mean, the things that needs to be activated in that page!
        this.refreshingPages = [
            {
                pageName: 'main-page',
                changes: [
                    'temps',
                    'ips',
                ]
            },
            {
                pageName: 'print-page',
                changes: [
                    'temps',
                    'percentage',
                    'printTime',
                ]
            },
            {
                pageName: 'tools-page',
                changes: [
                    'temps',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_material_keyboard_core__ = __webpack_require__("../../../../@ngx-material-keyboard/core/esm5/ngx-material-keyboard-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tools_page_tools_page_component__ = __webpack_require__("../../../../../src/app/tools-page/tools-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tools_page_homize_homize_component__ = __webpack_require__("../../../../../src/app/tools-page/homize/homize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tools_page_move_axis_move_axis_component__ = __webpack_require__("../../../../../src/app/tools-page/move-axis/move-axis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__print_page_print_page_component__ = __webpack_require__("../../../../../src/app/print-page/print-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__settings_page_settings_page_component__ = __webpack_require__("../../../../../src/app/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_page_wifi_wifi_component__ = __webpack_require__("../../../../../src/app/settings-page/wifi/wifi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tools_page_extrude_extrude_component__ = __webpack_require__("../../../../../src/app/tools-page/extrude/extrude.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tools_page_bedleveling_bedleveling_component__ = __webpack_require__("../../../../../src/app/tools-page/bedleveling/bedleveling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__base_template_base_template_component__ = __webpack_require__("../../../../../src/app/base-template/base-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_fan_fan_component__ = __webpack_require__("../../../../../src/app/shared/fan/fan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_heat_heat_component__ = __webpack_require__("../../../../../src/app/shared/heat/heat.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_13__tools_page_tools_page_component__["a" /* ToolsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tools_page_homize_homize_component__["a" /* HomizeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tools_page_move_axis_move_axis_component__["a" /* MoveAxisComponent */],
                __WEBPACK_IMPORTED_MODULE_16__print_page_print_page_component__["a" /* PrintPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_19__settings_page_settings_page_component__["a" /* SettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__settings_page_wifi_wifi_component__["a" /* WifiComponent */],
                __WEBPACK_IMPORTED_MODULE_22__tools_page_extrude_extrude_component__["a" /* ExtrudeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__tools_page_bedleveling_bedleveling_component__["a" /* BedlevelingComponent */],
                __WEBPACK_IMPORTED_MODULE_24__base_template_base_template_component__["a" /* BaseTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_fan_fan_component__["a" /* FanComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shared_heat_heat_component__["a" /* HeatComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_material_keyboard_core__["a" /* MatKeyboardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatTabsModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__shared_confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shared_heat_heat_component__["a" /* HeatComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_fan_fan_component__["a" /* FanComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_11__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_17__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_page_settings_page_component__ = __webpack_require__("../../../../../src/app/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_page_wifi_wifi_component__ = __webpack_require__("../../../../../src/app/settings-page/wifi/wifi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tools_page_extrude_extrude_component__ = __webpack_require__("../../../../../src/app/tools-page/extrude/extrude.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tools_page_bedleveling_bedleveling_component__ = __webpack_require__("../../../../../src/app/tools-page/bedleveling/bedleveling.component.ts");












// import {HeatComponent} from './shared/heat/heat.component';
var APP_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'select', component: __WEBPACK_IMPORTED_MODULE_3__select_usb_select_usb_component__["a" /* SelectUsbComponent */] },
    { path: 'tools', component: __WEBPACK_IMPORTED_MODULE_4__tools_page_tools_page_component__["a" /* ToolsPageComponent */] },
    { path: 'homize', component: __WEBPACK_IMPORTED_MODULE_5__tools_page_homize_homize_component__["a" /* HomizeComponent */] },
    { path: 'move', component: __WEBPACK_IMPORTED_MODULE_6__tools_page_move_axis_move_axis_component__["a" /* MoveAxisComponent */] },
    { path: 'extrude', component: __WEBPACK_IMPORTED_MODULE_10__tools_page_extrude_extrude_component__["a" /* ExtrudeComponent */] },
    // {path: 'heat', component: HeatComponent},
    { path: 'bedleveling', component: __WEBPACK_IMPORTED_MODULE_11__tools_page_bedleveling_bedleveling_component__["a" /* BedlevelingComponent */] },
    { path: 'print', component: __WEBPACK_IMPORTED_MODULE_7__print_page_print_page_component__["a" /* PrintPageComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_8__settings_page_settings_page_component__["a" /* SettingsPageComponent */] },
    { path: 'wifi', component: __WEBPACK_IMPORTED_MODULE_9__settings_page_wifi_wifi_component__["a" /* WifiComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/base-template/base-template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page-div {\r\n  position: relative;\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  text-align: center;\r\n  height: 432px;\r\n  width: 750px;\r\n}\r\n\r\n/* FOR TOP PART */\r\n.top-part {\r\n  background-color: #58DADA;\r\n  font-family: iranyekan, sans-serif;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.top-part * {\r\n  padding: 2%;\r\n}\r\n\r\n.title-normal {\r\n  font-size: 1.2em;\r\n}\r\n\r\n.title-elevated {\r\n  font-size: 1.2em;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n/* FOR MAIN PART */\r\n.main-part {\r\n  max-height: 175px !important;\r\n}\r\n\r\n.item {\r\n  padding: 0 2%;\r\n  margin: 3%;\r\n}\r\n\r\n.disabled-item {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disabled-item:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n.item img {\r\n  border-radius: 100px;\r\n  max-width: 110%;\r\n}\r\n\r\n.item div {\r\n\r\n}\r\n\r\n.elevating-item:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.return-special {\r\n  max-width: 80%;\r\n}\r\n\r\n/* FOR TEXTS */\r\n.text {\r\n  font-family: iranyekan, sans-serif;\r\n  text-align: center;\r\n}\r\n\r\n.text-rtl {\r\n  direction: rtl;\r\n}\r\n\r\n.text-ltr {\r\n  direction: ltr;\r\n}\r\n\r\n.little-text {\r\n  font-size: 12px;\r\n}\r\n\r\n.normal-text {\r\n  font-size: 1.8em;\r\n}\r\n\r\n.bigger-text {\r\n  font-size: 2.8em;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base-template/base-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div fxFlex=\"26%\" fxFlexOffset=\"0%\" class=\"title-elevated\">\n        <span>1</span>\n      </div>\n      <div fxFlex=\"44%\" fxFlexOffset=\"2%\" class=\"title-normal\">\n        <span>Connected to: Iman</span>\n      </div>\n      <div fxFlex=\"26%\" fxFlexOffset=\"2%\" class=\"title-elevated\">\n        <span>3</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\">\n      <div fxFlex=\"24%\" class=\"item elevating-item\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">Text 1</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item disabled-item\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">Text 2</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item elevating-item\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">Text 3</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item elevating-item\">\n        <img src=\"{{elements.ext_in?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl bigger-text\">In</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\">\n      <div fxFlex=\"24%\" class=\"item elevating-item return-special\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">بازگشت</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item disabled-item\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">Text 6</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item elevating-item\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">Text 7</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item elevating-item\">\n        <img src=\"{{elements.ext_out?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl bigger-text\">Out</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/base-template/base-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseTemplateComponent = (function () {
    function BaseTemplateComponent() {
        this.elements = {
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            },
            ext_in: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/up.png',
            },
            ext_out: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/down.png',
            },
        };
    }
    BaseTemplateComponent.prototype.ngOnInit = function () {
    };
    BaseTemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-base-template',
            template: __webpack_require__("../../../../../src/app/base-template/base-template.component.html"),
            styles: [__webpack_require__("../../../../../src/app/base-template/base-template.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseTemplateComponent);
    return BaseTemplateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  height: 100%;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 3%;\r\n  margin: 3%;\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 6%;\r\n\r\n}\r\n\r\n.bottom-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  margin-bottom: 8px;\r\n  max-width: 100%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\"-->\r\n     <!--fxLayout-->\r\n     <!--fxLayout.xs=\"column\"-->\r\n     <!--fxLayoutAlign=\"center\"-->\r\n     <!--fxLayoutGap=\"10px\"-->\r\n     <!--fxLayoutGap.xs=\"0\">-->\r\n  <!--<div class=\"item item-1\" pItem [height]=\"'50px'\" fxFlex=\"15%\">Item 1</div>-->\r\n  <!--<div class=\"item item-2\" fxFlex=\"20%\" fxFlexOrder=\"3\">Item 2</div>-->\r\n  <!--<div class=\"item item-3\" fxFlex>Item 3</div>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"container\"-->\r\n     <!--fxLayout-->\r\n     <!--fxLayout.xs=\"column\"-->\r\n     <!--fxLayoutAlign=\"center\"-->\r\n     <!--fxLayoutGap=\"10px\"-->\r\n     <!--fxLayoutGap.xs=\"0\">-->\r\n  <!--<div class=\"item item-4\" fxFlex fxFlexOffset=\"50px\"  fxFlexOffset.xs=\"0\">Item 4</div>-->\r\n  <!--<div class=\"item item-5\" fxFlex=\"200px\">Item 5</div>-->\r\n<!--</div>-->\r\n<div class=\"main-page-div\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\r\n        <div class=\"simple-text\">دمای Bed</div>\r\n        <span class=\"little-text\">فعلی: °{{bed.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{bed.goal}}</span>\r\n      </div>\r\n      <div fxFlex=\"2%\"></div>\r\n      <div class=\"item full-item\" fxFlex=\"44%\" *ngIf=\"dataService.ipList.length > 0\">\r\n        <span class=\"simple-text\">IP to connect:</span>\r\n        <div class=\"little-text\" *ngFor=\"let ip of dataService.ipList\">{{ip}}</div>\r\n      </div>\r\n      <div class=\"item full-item\" fxFlex=\"44%\" *ngIf=\"dataService.ipList.length <= 0\">\r\n        <span>Not Connected!</span>\r\n      </div>\r\n      <div fxFlex=\"2%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\r\n        <div class=\"simple-text\">دمای Extrude</div>\r\n        <span class=\"little-text\">فعلی: °{{ext.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{ext.goal}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"container\">-->\r\n  <!--</div>-->\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" class=\"middle-part\">\r\n      <div class=\"item full-item\" fxFlex=\"100\" style=\"margin: 2.8%;\">\r\n        <!--<br><br><br><br>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container t\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\r\n      <div class=\"item full-item item-button\" fxFlex=\"28%\" (click)=\"goToSettingsPage()\">\r\n        <img src=\"{{elements.settings?.imageUrl}}\" alt=\"\">\r\n        <div class=\"simple-text\">تنظیمات</div>\r\n      </div>\r\n      <div fxFlex=\"8%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"28%\" (click)=\"goToSelectUsbPage()\">\r\n        <img src=\"{{elements.print?.imageUrl}}\" alt=\"\">\r\n        <div class=\"simple-text\">پرینت</div>\r\n      </div>\r\n      <div fxFlex=\"8%\"></div>\r\n      <div class=\"item full-item item-button\" fxFlex=\"28%\" (click)=\"goToToolsPage()\">\r\n        <img src=\"{{elements.tools?.imageUrl}}\" alt=\"\">\r\n        <div class=\"simple-text\">ابزار</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_enum_dialogUsage__ = __webpack_require__("../../../../../src/app/shared/enum/dialogUsage.ts");
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
    function MainPageComponent(httpService, dialog, progressService, router, dataService) {
        this.httpService = httpService;
        this.dialog = dialog;
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
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.checkUnfinishedProject()
            .then(function (res) {
            if (res && res === true) {
                var rmDialog = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__shared_confirm_confirm_component__["a" /* ConfirmComponent */], {
                    width: '450px',
                    data: {
                        usage: __WEBPACK_IMPORTED_MODULE_8__shared_enum_dialogUsage__["a" /* DialogUsage */].UnfinishedPrinting,
                    }
                });
                rmDialog.afterClosed().subscribe(function (status) {
                    if (status) {
                        _this.progressService.enable();
                        _this.httpService.post('print', {
                            cd: _this.dataService.gcodePrintingFileDirectory,
                            line: _this.dataService.gcodeUnfinishedLine || 0,
                            action: 'print'
                        }, true).subscribe(function (data) {
                            _this.progressService.disable();
                            if (data['status'] === 'success') {
                                _this.router.navigate(["/print"]);
                            }
                            else {
                                console.error('problem occurred!', data);
                            }
                        }, function (err) {
                            _this.progressService.disable();
                            console.error('network problems supposedly!', err);
                        });
                    }
                    else {
                        _this.httpService.delete('print', true).subscribe();
                        console.log('deleted the last printed file!');
                    }
                });
            }
        })
            .catch(function (rej) {
            console.error('about unfinished project: ', rej);
        });
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
    MainPageComponent.prototype.goToSettingsPage = function () {
        this.router.navigate(["/settings"]);
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-page',
            template: __webpack_require__("../../../../../src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */],
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
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  height: 100%;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 1%;\r\n  margin: 2%;\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 6%;\r\n\r\n}\r\n\r\n.bottom-part .item-button:active, .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  margin-bottom: 8px;\r\n  max-width: 100%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n/* SELECT USB */\r\nbody {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.print-buttons {\r\n  padding: 20px !important;\r\n  max-width: 70% !important;\r\n  max-height: 125px !important;\r\n  margin: 2px;\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 1%;\r\n  margin: 2%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\nmat-progress-spinner {\r\n  left: 20%;\r\n  bottom: -50px;\r\n}\r\n\r\n.limit-height {\r\n  max-height: 100px;\r\n}\r\n\r\n.value-percent {\r\n  position: relative;\r\n  top: -139px;\r\n  left: 11px;\r\n  font-size: 7em;\r\n  font-weight: bold;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n\r\n.short-padding {\r\n  padding: 10px;\r\n  background-color: red;\r\n}\r\n\r\n.print-dir {\r\n  position: relative;\r\n  top: -70px;\r\n  text-align: center !important;\r\n  font-family: iranyekan, sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/print-page/print-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        <div class=\"simple-text\">دمای Bed</div>\n        <span class=\"little-text\">فعلی: °{{temps.bed.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{temps.bed.goal}}</span>\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\">\n        <div class=\"simple-text\">زمان پرینت:</div>\n        <div class=\"simple-text\" style=\"direction: ltr\">{{printTime}}</div>\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        <div class=\"simple-text\">دمای Extrude</div>\n        <span class=\"little-text\">فعلی: °{{temps.ext.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{temps.ext.goal}}</span>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"container\"> -->\n  <!-- <div fxLayout=\"row\" class=\"middle-part\"> -->\n  <!-- <div class=\"item full-item\" fxFlex=\"100\"> -->\n  <!-- </div> -->\n  <!-- </div> -->\n  <!-- </div> -->\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n      <div fxFlex=\"50\" class=\"limit-height\">\n        <mat-progress-spinner [value]=\"printPercent === 0 ? 1 : printPercent\"></mat-progress-spinner>\n        <div class=\"value-percent\" [ngStyle]=\"{'left': (printPercent > 99 ? '11px' : (printPercent > 9 ? '15px' : '19px'))}\">{{printPercent}}</div>\n        <div class=\"print-dir\">{{dataService.gcodePrintingFileDirectory}}</div>\n      </div>\n      <div fxFlex=\"50\">\n        <div fxLayout=\"row\" fxLayouAlign=\"start center\">\n          <div fxFlex=\"50\">\n            <div class=\"item full-item item-button-bigger print-buttons\"\n                 (click)=\"beforePrint(printingStatus == 'pause' ? 'resume' : 'pause')\">\n              <img src=\"{{printingStatus == 'pause' ? elements.pause?.imageUrl : elements.resume?.imageUrl}}\">\n              <div class=\"simple-text\">{{printingStatus == 'pause' ? 'ادامه' : 'توقف'}}</div>\n            </div>\n          </div>\n          <div fxFlex=\"50\">\n            <div class=\"item full-item item-button-bigger print-buttons\"\n                 (click)=\"beforePrint('stop')\">\n              <img src=\"{{elements.stop?.imageUrl}}\">\n              <div class=\"simple-text\">قطع کامل</div>\n            </div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayouAlign=\"start center\">\n          <div fxFlex=\"50\">\n            <div class=\"item full-item item-button-bigger print-buttons\" (click)=\"openDialog('heat')\">\n              <img src=\"{{elements.heat?.imageUrl}}\" alt=\"\">\n              <div class=\"simple-text\">Heat</div>\n            </div>\n          </div>\n          <div fxFlex=\"50\">\n            <div class=\"item full-item item-button-bigger print-buttons disable-like-button\">\n              <img src=\"{{elements.fan?.imageUrl}}\">\n              <div class=\"simple-text\">{{elements.fan?.title}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">-->\n      <!--<div class=\"item full-item item-button\" fxFlex=\"24%\" fxFlexOffset=\"40%\">-->\n        <!--<mat-progress-spinner [value]=\"printPercent\"></mat-progress-spinner>-->\n        <!--<div class=\"value-percent\">{{printPercent}}</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n\n  <!--<div class=\"container t\">-->\n    <!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">-->\n\n\n\n    <!--</div>-->\n  <!--</div>-->\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_enum_dialogUsage__ = __webpack_require__("../../../../../src/app/shared/enum/dialogUsage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_heat_heat_component__ = __webpack_require__("../../../../../src/app/shared/heat/heat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_fan_fan_component__ = __webpack_require__("../../../../../src/app/shared/fan/fan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
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
    function PrintPageComponent(httpService, router, dataService, dialog, progressService, snackBar) {
        this.httpService = httpService;
        this.router = router;
        this.dataService = dataService;
        this.dialog = dialog;
        this.progressService = progressService;
        this.snackBar = snackBar;
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
            heat: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png',
            },
            fan: {
                title: 'Fans',
                imageUrl: __WEBPACK_IMPORTED_MODULE_2__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/fans.png',
            }
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
            if (_this.printPercent === 100) {
                _this.onFinishPrinting();
            }
        });
        this.dataService.printTime.subscribe(function (data) {
            _this.printTime = _this.dataService.stringizedTime(data);
        });
    };
    PrintPageComponent.prototype.onFinishPrinting = function () {
        var _this = this;
        this.dataService.changeInterval('printTime', false);
        this.dataService.changeInterval('percentage', false);
        var rmDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_confirm_confirm_component__["a" /* ConfirmComponent */], {
            width: '500px',
            data: {
                usage: __WEBPACK_IMPORTED_MODULE_7__shared_enum_dialogUsage__["a" /* DialogUsage */].FinishPrinting,
            }
        });
        rmDialog.afterClosed().subscribe(function (status) {
            // if (status) {
            _this.dataService.setUpBasic('percentage');
            _this.dataService.setUpBasic('printTime');
            _this.goBackToHomePage();
            // }
        });
    };
    PrintPageComponent.prototype.beforePrint = function (action) {
        var _this = this;
        if (action === void 0) { action = 'percentage'; }
        if (action === 'stop') {
            var rmDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_confirm_confirm_component__["a" /* ConfirmComponent */], {
                width: '450px',
                data: {
                    usage: __WEBPACK_IMPORTED_MODULE_7__shared_enum_dialogUsage__["a" /* DialogUsage */].StopPrinting,
                }
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
                    _this.dataService.setUpBasic('percentage');
                    _this.dataService.setUpBasic('printTime');
                    _this.dataService.changeInterval('printTime', false);
                    _this.goBackToHomePage();
                }
                else if (_this.printingStatus === PrintStatus.pause) {
                    _this.dataService.changeInterval('printTime', false);
                }
                else if (_this.printingStatus === PrintStatus.resume) {
                    _this.dataService.changeInterval('printTime', true);
                }
            }
            else {
                console.log('problem!', data);
            }
        }, function (err) {
            console.error('error in changing state of printing', err);
        });
    };
    PrintPageComponent.prototype.openDialog = function (kind) {
        var _this = this;
        if (kind === void 0) { kind = 'heat'; }
        var kindComp = (kind === 'heat' ? __WEBPACK_IMPORTED_MODULE_8__shared_heat_heat_component__["a" /* HeatComponent */] : __WEBPACK_IMPORTED_MODULE_9__shared_fan_fan_component__["a" /* FanComponent */]);
        var rmDialog = this.dialog.open(kindComp, {
            width: (kind === 'heat' ? '640px' : '450px'),
            height: (kind === 'heat' ? '420px' : '200px'),
            data: {}
        });
        rmDialog.afterClosed().subscribe(function (data) {
            if (data && data['status'] === true) {
                _this.progressService.enable();
                _this.dataService.setHeat(data)
                    .then(function (res) {
                    _this.progressService.disable();
                    _this.snackBar.open('دما با موفقیت تغییر کرد', null, {
                        duration: 1700
                    });
                })
                    .catch(function (rej) {
                    _this.progressService.disable();
                    console.error('heat problem in print page', rej);
                });
            }
        });
    };
    PrintPageComponent.prototype.goBackToHomePage = function () {
        this.router.navigate(["/home"]);
    };
    PrintPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-print-page',
            template: __webpack_require__("../../../../../src/app/print-page/print-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/print-page/print-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_10__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSnackBar */]])
    ], PrintPageComponent);
    return PrintPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/select-usb/select-usb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  overflow: hidden;\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.no-border-rad {\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 1.15em !important;\r\n}\r\n\r\n.ltr-text {\r\n  direction: ltr;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
    function SelectUsbComponent(httpService, dataService, progressService, router) {
        this.httpService = httpService;
        this.dataService = dataService;
        this.progressService = progressService;
        this.router = router;
        this.usbs = ['temp1 temp1temp1', 'temp2.gcode', 'temp3 temp3.gcode', 'temp4temp4temp4.gcode', 'temp5temp5 .gcode', 'temp6temp6 temp6'];
        this.cd = '';
        this.i = 0;
        this.elements = {
            left: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/left.png',
            },
            right: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/right.png',
            },
            up: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/up.png',
            },
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            },
            usb: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/usb.png',
            },
            folder: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/folder.png',
            },
            gcodeFile: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/file.png',
            },
            none: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/none.png',
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
                if (data.data.length === 0 || (data.data.length === 1 && data.data[0] === '')) {
                    _this.usbs = [];
                }
                else {
                    _this.usbs = data.data;
                }
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
                    _this.dataService.gcodePrintingFileDirectory = _this.cd;
                    _this.httpService.post('print', { 'cd': _this.cd, 'action': 'print' }, true).subscribe(function (data) {
                        if (data.status === 'success') {
                            _this.progressService.disable();
                            _this.router.navigate(["/print"]);
                        }
                        else {
                            console.error('problem occurred!', data);
                        }
                    }, function (err) {
                        _this.progressService.disable();
                        console.error('go to print page has problems: ', err);
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
        if (length === void 0) { length = 13; }
        var gcode = '.gcode';
        var dots = '...';
        if (this.isGcode(text)) {
            text = text.substring(0, text.length - gcode.length);
        }
        if (text.length < length) {
            return text;
        }
        else {
            return text.substring(0, length - dots.length) + dots;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
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
            'ips',
        ];
        this.firstTouch = true;
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
        // currentPercentage = 0;
        this.percentage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.currentPrintTime = 0;
        this.printTime = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.gcodePrintingFileDirectory = 'some/default/directory';
        this.gcodeUnfinishedLine = 0;
        this.connectedWifi = '';
        this.ipList = [];
        this.setTemps();
        // setInterval(() => {
        //   this.percentage.next(this.currentPercentage ++);
        // }, 50)
    }
    DataService.prototype.setUpBasic = function (name) {
        if (name === 'percentage') {
            this.percentage.next(0);
        }
        else if (name === 'printTime') {
            this.currentPrintTime = 0;
            this.printTime.next(0);
        }
    };
    DataService.prototype.setIpList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.post('ip', {}, true).subscribe(function (data) {
                // console.log('data received from ip:', data);
                if (data && data['ips']) {
                    _this.ipList = data['ips'];
                    resolve(true);
                }
                else {
                    console.error('in else if posting to ip!', data);
                    reject(false);
                }
            }, function (err) {
                console.error('in err of posting to ip', err);
                reject(false);
            });
        });
    };
    DataService.prototype.checkUnfinishedProject = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.post('print', { action: 'unfinished' }, true).subscribe(function (data) {
                if (data['status'] === 'success') {
                    if (data['unfinished'] && data['unfinished']['exist']) {
                        console.log('received data for unfinished file:', data);
                        _this.gcodePrintingFileDirectory = data['unfinished']['cd'];
                        _this.gcodeUnfinishedLine = data['unfinished']['line'];
                        resolve(true);
                    }
                }
            }, function (err) {
                reject(false);
            });
        });
    };
    DataService.prototype.setHeat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpService.post('heat', {
                field: data['kind'] === 'bed' ? 'bed' : 'hotend',
                action: data['goal'] === 0 ? 'cooldown' : 'heat',
                value: data['goal']
            }).subscribe(function (data) {
                if (data['status'] === 'success') {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            }, function (err) {
                reject(false);
            });
        });
    };
    DataService.prototype.changeInterval = function (name, activate) {
        if (activate === void 0) { activate = true; }
        if (!activate) {
            if (name === 'temps') {
                clearInterval(this.tempsInterval);
            }
            else if (name === 'percentage') {
                clearInterval(this.percentageInterval);
            }
            else if (name === 'printTime') {
                clearInterval(this.printTimeInterval);
            }
            else if (name === 'ips') {
                clearInterval(this.ipInterval);
            }
            // this.changeInterval(this[name]) // Don't know what it was doing exactly :|
        }
        else {
            if (name === 'temps') {
                this.setTemps();
            }
            else if (name === 'percentage') {
                this.setPercentage();
            }
            else if (name === 'printTime') {
                this.setPrintTime();
            }
            else if (name === 'ips') {
                this.setIpInterval();
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
        }, 2000);
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
    DataService.prototype.setPrintTime = function () {
        var _this = this;
        this.printTimeInterval = setInterval(function () {
            // let's consider it a number for now, then we'll deal with the date
            _this.currentPrintTime++;
            _this.printTime.next(_this.currentPrintTime);
        }, 1000);
    };
    DataService.prototype.setIpInterval = function () {
        var _this = this;
        this.ipInterval = setInterval(function () {
            _this.setIpList();
        }, 15000);
    };
    DataService.prototype.stringizedTime = function (t) {
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        return [
            days,
            '-',
            (hours > 9 ? hours : ('0' + hours)),
            ':',
            (minutes > 9 ? minutes : ('0' + minutes)),
            ':',
            (seconds > 9 ? seconds : ('0' + seconds))
        ].join(' ');
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
    HttpService.prototype.options = function (url, map) {
        if (map === void 0) { map = this.defaultMap; }
        if (!map)
            return this.http.options(this.serverAddress + url, { observe: 'response' });
        return this.http.options(this.serverAddress + url, { observe: 'response' }).map(function (data) { return data.body; });
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

/***/ "../../../../../src/app/settings-page/settings-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  overflow: hidden;\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 2.6%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.no-border-rad {\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.ltr-text {\r\n  direction: ltr;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings-page/settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        1\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\" style=\"text-align: center;\">2</div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        3\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"wifiPage()\">\n        <img class=\"no-border-rad\" style=\"max-height: 110px\" src=\"{{elements.wifi?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">Wifi</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n    </div>\n  </div>\n\n  <div class=\"container t\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goBackToHomePage()\">\n        <img src=\"{{elements.return?.imageUrl}}\">\n        <div class=\"simple-text\">بازگشت</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings-page/settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
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



var SettingsPageComponent = (function () {
    function SettingsPageComponent(router) {
        this.router = router;
        this.elements = {
            wifi: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/wifi.png',
            },
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            },
        };
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    SettingsPageComponent.prototype.wifiPage = function () {
        this.router.navigate(["/wifi"]);
    };
    SettingsPageComponent.prototype.goBackToHomePage = function () {
        this.router.navigate(["/home"]);
    };
    SettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings-page',
            template: __webpack_require__("../../../../../src/app/settings-page/settings-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings-page/settings-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings-page/wifi/wifi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button {\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  /*-webkit-border-radius: 100px;*/\r\n  /*-moz-border-radius: 100px;*/\r\n  /*border-radius: 100px;*/\r\n  border-radius: 15px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  /*-webkit-border-radius: 100px;*/\r\n  /*-moz-border-radius: 100px;*/\r\n  /*border-radius: 100px;*/\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.extra-fonts {\r\n  font-size: 1.2em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings-page/wifi/wifi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\" style=\"height: 420px;\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"15%\">\n        <span class=\"simple-text\">1</span>\n      </div>\n      <div fxFlex=\"5%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"60%\">\n        <span class=\"simple-text\">{{dataService.connectedWifi ? ('Connected to: ' + dataService.connectedWifi) :\n          (dataService.ipList.length > 0 ? 'App is Online!' : 'App is Offline!')}}</span>\n      </div>\n      <div fxFlex=\"5%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"15%\">\n        <span class=\"simple-text\">3</span>\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-bottom: 20px;\"></div>\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\n      <div fxFlex=\"30%\" class=\"extra-fonts\">\n        <mat-form-field>\n          <mat-select placeholder=\"SSID\" [(value)]=\"selectedWifi\">\n            <mat-option *ngFor=\"let wifi of wifis\" [value]=\"wifi\">{{wifi}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"30%\" fxFlexOffset=\"5%\" class=\"extra-fonts\">\n        <mat-form-field>\n          <input matInput matKeyboard\n                 placeholder=\"Password\" type=\"{{isPassVisible ? 'text' : 'password'}}\" [(ngModel)]=\"password\">\n        </mat-form-field>\n      </div>\n      <div fxFlex=\"30%\" fxFlexOffset=\"5%\" (click)=\"submitWifi()\">\n        <button mat-raised-button color=\"primary\" class=\"extra-fonts\"\n                style=\"padding: 10px 40px;\">Connect\n        </button>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"\">\n      <div fxFlex=\"40%\" fxFlexOffset=\"29%\">\n        <mat-checkbox class=\"extra-fonts\" style=\"color: #626914; margin-top: 10px;\" [(ngModel)]=\"isPassVisible\">Show\n          Password\n        </mat-checkbox>\n      </div>\n    </div>\n    <div style=\"margin-bottom: 50px;\"></div>\n    <div class=\"container t\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\n        <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goBackToSettingsPage()\">\n          <img src=\"{{elements.return?.imageUrl}}\">\n          <div class=\"simple-text\">بازگشت</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings-page/wifi/wifi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WifiComponent = (function () {
    function WifiComponent(dataService, httpService, snackBar, router, progressService) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.router = router;
        this.progressService = progressService;
        this.wifis = ['rahim', 'karim', 'reza'];
        this.selectedWifi = '';
        this.password = '';
        this.isPassVisible = false;
        this.elements = {
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_4__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            }
        };
    }
    WifiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progressService.enable();
        this.httpService.options("wifi", true).subscribe(function (data) {
            _this.progressService.disable();
            _this.wifis = data['list'];
        }, function (err) {
            _this.progressService.disable();
            _this.snackBar.open("Cannot get list of wifis", null, {
                duration: 2000
            });
        });
    };
    WifiComponent.prototype.submitWifi = function () {
        var _this = this;
        // console.log(this.selectedWifi, this.password);
        this.progressService.enable();
        this.httpService.post("wifi", {
            ssid: this.selectedWifi,
            password: this.password,
        }, true).subscribe(function (data) {
            if (data && data['status'] === 'success') {
                _this.dataService.connectedWifi = _this.selectedWifi;
                _this.password = '';
                // console.log('got the wifi! now going for the setting the ips!');
                _this.dataService.setIpList()
                    .then(function (res) {
                    _this.progressService.disable();
                    _this.snackBar.open('دستگاه با موفقیت به وای فای متصل شد.', null, {
                        duration: 2000,
                    });
                }).catch(function (rej) {
                    _this.progressService.disable();
                    _this.snackBar.open('خطای اتصال به وای فای', null, {
                        duration: 2000
                    });
                });
            }
            else if (data && data['status'] === 'failure') {
                _this.progressService.disable();
                console.error('can not connect to wifi! error with failure!');
            }
            else {
                _this.progressService.disable();
                console.error('neither ways!');
            }
        }, function (err) {
            _this.progressService.disable();
            console.error('connection problem!', err);
        });
    };
    WifiComponent.prototype.goBackToSettingsPage = function () {
        this.router.navigate(["/settings"]);
    };
    WifiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wifi',
            template: __webpack_require__("../../../../../src/app/settings-page/wifi/wifi.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings-page/wifi/wifi.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_progress_service__["a" /* ProgressService */]])
    ], WifiComponent);
    return WifiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\r\n  padding: 10px;\r\n  background-color: darkgrey;\r\n}\r\n\r\n.stop-header {\r\n  font-size: 1.7em;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n.sub-title {\r\n  font-size: 1.4em;\r\n}\r\n\r\n.page {\r\n  font-family: iranyekan, sans-serif;\r\n  padding: 15px;\r\n  margin: 10px;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\nmat-card-title {\r\n  font-family: iranyekan, sans-serif;\r\n  font-size: 1.5em !important;\r\n  text-align: center;\r\n  position: relative;\r\n  left: 114px;\r\n}\r\n\r\n.finish-header {\r\n  direction: rtl;\r\n  left: -173px;\r\n  position: relative;\r\n  font-size: 2em;\r\n}\r\n\r\n.finish-content {\r\n  margin-top: -20px;\r\n}\r\n\r\n.right-content {\r\n  direction: rtl;\r\n  text-align: right;\r\n}\r\n\r\n.left-content {\r\n  direction: ltr;\r\n  text-align: left;\r\n}\r\n\r\n.preheating-title {\r\n  font-size: 1.3em !important;\r\n  left: 140px;\r\n}\r\n\r\n.preheating-text {\r\n  direction: rtl;\r\n  font-size: 1.2em;\r\n  margin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- STOP PRINTING -->\n<mat-card class=\"center\" *ngIf=\"usage == 0\">\n  <mat-card-header class=\"content stop-header\">\n    <mat-card-title>\n      تأیید توقف\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"page\">\n    <div class=\"sub-title content\">آیا مطمئن هستید که پرینت متوقف شود؟</div>\n    <br/><br><br>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" role=\"yes-btn\" style=\"display: inline-block\">\n        <button mat-button mat-icon-button (click)=\"remove(true)\">\n          <mat-icon aria-label=\"yes\">done</mat-icon>\n        </button>\n      </div>\n      <div fxFlex=\"50\" role=\"no-btn\" style=\"display: inline-block\">\n        <button mat-icon-button (click)=\"remove(false)\">\n          <mat-icon aria-label=\"no\">clear</mat-icon>\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n<!-- FINISH PRINTING -->\n<mat-card class=\"center\" *ngIf=\"usage == 1\">\n  <mat-card-header class=\"content finish-header\">\n    <mat-card-title>\n      پرینت تمام شد!\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"page finish-content\">\n    <div class=\"sub-title content\" dir=\"rtl\" style=\"font-weight: bold; font-size: 1em;\">فایل با موفقیت پرینت شد.</div>\n    <br>\n    <div class=\"sub-title content right-content\" dir=\"rtl\">زمان پرینت:</div>\n    <div class=\"sub-title content left-content\" dir=\"ltr\">{{printInfo.time}}</div>\n    <br>\n    <div class=\"sub-title content right-content\" dir=\"rtl\">فایل پرینت گرفته شده:</div>\n    <div class=\"sub-title content left-content\" dir=\"ltr\">{{printInfo.dir}}</div>\n    <br/><br><br>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" role=\"yes-btn\" style=\"display: inline-block\">\n        <button mat-button mat-icon-button (click)=\"remove(true)\">\n          <mat-icon aria-label=\"yes\">done</mat-icon>\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n\n<!-- UNFINISHED PRINTING -->\n<mat-card class=\"center\" *ngIf=\"usage == 2\">\n  <mat-card-header class=\"content stop-header\">\n    <mat-card-title>\n      پرینت ناتمام\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"page\">\n    <div class=\"sub-title content\">یک فایل پرینت ناتمام دارید. آیا میخواهید ادامه دهید؟</div>\n    <div class=\"sub-title content\">{{dataService.gcodePrintingFileDirectory}}</div>\n    <br/><br><br>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" role=\"yes-btn\" style=\"display: inline-block\">\n        <button mat-button mat-icon-button (click)=\"remove(true)\">\n          <mat-icon aria-label=\"yes\">done</mat-icon>\n        </button>\n      </div>\n      <div fxFlex=\"50\" role=\"no-btn\" style=\"display: inline-block\">\n        <button mat-icon-button (click)=\"remove(false)\">\n          <mat-icon aria-label=\"no\">clear</mat-icon>\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n<!--NEEDS PREHEATING FIRST-->\n<mat-card class=\"center\" *ngIf=\"usage == 3\">\n  <mat-card-header class=\"content finish-header\">\n    <mat-card-title class=\"preheating-title\">\n      دما بسیار پایین است!\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"page finish-content\">\n    <div class=\"sub-title content preheating-text\">\n      برای استفاده از این بخش نیاز به حداقل دمای °180 دارید!\n    </div>\n    <br/><br>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" role=\"yes-btn\" style=\"display: inline-block\">\n        <button mat-button mat-icon-button (click)=\"remove(true)\">\n          <mat-icon aria-label=\"yes\">done</mat-icon>\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n\n<!--NEEDS HOMING FIRST-->\n<mat-card class=\"center\" *ngIf=\"usage == 4\">\n  <mat-card-header class=\"content finish-header\">\n    <mat-card-title class=\"preheating-title\" style=\"left: 165px !important;\">\n      دستگاه هوم نشده است!\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"page finish-content\">\n    <div class=\"sub-title content preheating-text\">\n      برای استفاده از این بخش نیاز به هوم کردن محورها دارید!\n    </div>\n    <br/><br>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div fxFlex=\"50\" role=\"yes-btn\" style=\"display: inline-block\">\n        <button mat-button mat-icon-button (click)=\"remove(true)\">\n          <mat-icon aria-label=\"yes\">done</mat-icon>\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/shared/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enum_dialogUsage__ = __webpack_require__("../../../../../src/app/shared/enum/dialogUsage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
    function ConfirmComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        this.usage = this.data && this.data['usage'];
        if (this.usage === __WEBPACK_IMPORTED_MODULE_2__enum_dialogUsage__["a" /* DialogUsage */].FinishPrinting) {
            this.printInfo = {
                dir: this.dataService.gcodePrintingFileDirectory,
                time: this.dataService.stringizedTime(this.dataService.currentPrintTime),
            };
        }
        else if (this.usage === __WEBPACK_IMPORTED_MODULE_2__enum_dialogUsage__["a" /* DialogUsage */].UnfinishedPrinting) {
        }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/enum/dialogUsage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUsage; });
var DialogUsage;
(function (DialogUsage) {
    DialogUsage[DialogUsage["StopPrinting"] = 0] = "StopPrinting";
    DialogUsage[DialogUsage["FinishPrinting"] = 1] = "FinishPrinting";
    DialogUsage[DialogUsage["UnfinishedPrinting"] = 2] = "UnfinishedPrinting";
    DialogUsage[DialogUsage["needsPreheating"] = 3] = "needsPreheating";
    DialogUsage[DialogUsage["needsHoming"] = 4] = "needsHoming";
})(DialogUsage || (DialogUsage = {}));
;


/***/ }),

/***/ "../../../../../src/app/shared/fan/fan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/fan/fan.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fan works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/fan/fan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanComponent; });
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

var FanComponent = (function () {
    function FanComponent() {
    }
    FanComponent.prototype.ngOnInit = function () {
    };
    FanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fan',
            template: __webpack_require__("../../../../../src/app/shared/fan/fan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/fan/fan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FanComponent);
    return FanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/heat/heat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-part {\r\n  height: 110px !important;\r\n}\r\n\r\n.preferred-heat {\r\n  font-size: 3em;\r\n  border: 2px solid black;\r\n  background-color: #FFC593;\r\n  padding: 15px 10px;\r\n}\r\n\r\n.item {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.item img {\r\n  border-radius: 0;\r\n  max-width: 60%;\r\n  margin-left: 20px;\r\n}\r\n\r\n.little-text {\r\n  font-size: 1em !important;\r\n}\r\n\r\n.submit {\r\n  padding: 14px 5px;\r\n  background-color: #FFDD93;\r\n  border: 2px solid grey;\r\n  text-align: center;\r\n  box-shadow: 0px 5px 17px -8px rgba(0, 0, 0, 0.2), 2px -2px 3px 2px rgba(0, 0, 0, 0.14), 12px -5px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.submit-text {\r\n  font-size: 1.3em !important;\r\n  font-weight: bold;\r\n  font-family: iranyekan, sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/heat/heat.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start start\">\r\n  <div fxFlex=\"100\" role=\"no-btn\" style=\"display: inline-block\">\r\n    <button mat-icon-button (click)=\"remove(false)\">\r\n      <mat-icon aria-label=\"no\">clear</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-tab-group>\r\n\r\n\r\n      <mat-tab label=\"Bed\">\r\n        <div class=\"container\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\" style=\"margin-top: 20px;\">\r\n            <div class=\"text text-ltr normal-text\" style=\"text-align: left !important;\">Preferred:</div>\r\n            <div fxFlex=\"30%\" fxFlexOffset=\"7%\" class=\"\" (click)=\"changeValue(30, true)\">\r\n              <span class=\"preferred-heat item elevating-item\">30°</span>\r\n            </div>\r\n            <div fxFlex=\"30%\" fxFlexOffset=\"5%\" class=\"\" (click)=\"changeValue(40, true)\">\r\n              <span class=\"preferred-heat item elevating-item\">40°</span>\r\n            </div>\r\n            <div fxFlex=\"30%\" fxFlexOffset=\"5%\" class=\"\" (click)=\"changeValue(50, true)\">\r\n              <span class=\"preferred-heat item elevating-item\">50°</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\">\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item submit\" (click)=\"remove(true, 'bed')\">\r\n              <span class=\"preferred-heat-item-elevating-item submit-text\">\r\n                تثبیت با دمای °{{result['goal']}}\r\n              </span>\r\n            </div>\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item\" (click)=\"changeValue(-10, false)\">\r\n              <img src=\"{{elements.left?.imageUrl}}\" alt=\"\">\r\n              <div class=\"text text-ltr little-text\">Cool 10°</div>\r\n            </div>\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item\" (click)=\"changeValue(10, false)\">\r\n              <img src=\"{{elements.right?.imageUrl}}\" alt=\"\">\r\n              <div class=\"text text-ltr little-text\">Heat 10°</div>\r\n            </div>\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item\" (click)=\"changeValue(0, true)\">\r\n              <img src=\"{{elements.cooldown?.imageUrl}}\" alt=\"\">\r\n              <div class=\"text text-ltr little-text\">Cooldown</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n      <mat-tab label=\"Extruder\">\r\n        <div class=\"container\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\" style=\"margin-top: 20px;\">\r\n            <div class=\"text text-ltr normal-text\" style=\"text-align: left !important;\">Preferred:</div>\r\n            <div fxFlex=\"30%\" fxFlexOffset=\"7%\" class=\"\" (click)=\"changeValue(180, true)\">\r\n              <span class=\"preferred-heat item elevating-item\">180°</span>\r\n            </div>\r\n            <div fxFlex=\"30%\" fxFlexOffset=\"5%\" class=\"\" (click)=\"changeValue(200, true)\">\r\n              <span class=\"preferred-heat item elevating-item\">200°</span>\r\n            </div>\r\n            <div fxFlex=\"30%\" fxFlexOffset=\"5%\" class=\"\" (click)=\"changeValue(210, true)\">\r\n              <span class=\"preferred-heat item elevating-item\">210°</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\">\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item submit\" (click)=\"remove(true, 'extruder')\">\r\n              <span class=\"preferred-heat-item-elevating-item submit-text\">\r\n                تثبیت با دمای °{{result['goal']}}\r\n              </span>\r\n            </div>\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item\" (click)=\"changeValue(-10, false)\">\r\n              <img src=\"{{elements.left?.imageUrl}}\" alt=\"\">\r\n              <div class=\"text text-ltr little-text\">Cool 10°</div>\r\n            </div>\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item\" (click)=\"changeValue(10, false)\">\r\n              <img src=\"{{elements.right?.imageUrl}}\" alt=\"\">\r\n              <div class=\"text text-ltr little-text\">Heat 10°</div>\r\n            </div>\r\n            <div fxFlex=\"27%\" fxFlexOffset=\"0%\" class=\"item elevating-item\" (click)=\"changeValue(0, true)\">\r\n              <img src=\"{{elements.cooldown?.imageUrl}}\" alt=\"\">\r\n              <div class=\"text text-ltr little-text\">Cooldown</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/heat/heat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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





var HeatComponent = (function () {
    function HeatComponent(httpService, dataService, dialogRef, data) {
        this.httpService = httpService;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.elements = {
            cooldown: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/cooldown.png',
            },
            left: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/left.png',
            },
            right: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_3__servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/right.png',
            },
        };
        this.result = {
            status: true,
            kind: 'bed',
            goal: this.dataService.temps.getValue()['ext'].cur || 0,
        };
    }
    HeatComponent.prototype.ngOnInit = function () {
        this.result['goal'] = this.dataService.temps.getValue()['ext'].cur || 0;
    };
    HeatComponent.prototype.changeValue = function (value, absolute) {
        if (absolute === void 0) { absolute = true; }
        if (absolute)
            this.result['goal'] = value;
        else
            this.result['goal'] += value;
    };
    HeatComponent.prototype.remove = function (status, kind) {
        if (kind === void 0) { kind = 'bed'; }
        this.result['status'] = status;
        this.result['kind'] = kind;
        this.dialogRef.close(this.result);
    };
    HeatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heat',
            template: __webpack_require__("../../../../../src/app/shared/heat/heat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/base-template/base-template.component.css"), __webpack_require__("../../../../../src/app/shared/heat/heat.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */], Object])
    ], HeatComponent);
    return HeatComponent;
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

/***/ "../../../../../src/app/tools-page/bedleveling/bedleveling.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n\r\n.stage-buttons {\r\n  font-size: 4em !important;\r\n  border: 5px solid black;\r\n  font-weight: bold;\r\n  padding: 20px !important;\r\n  background-color: #FFC593;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/bedleveling/bedleveling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        1\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\">2</div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        3\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\n      <div class=\"item full-item item-button\" fxFlexOffset=\"30%\" fxFlex=\"24%\" (click)=\"levelStage(1)\">\n        <div class=\"simple-text stage-buttons\">1</div>\n      </div>\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"levelStage(2)\">\n        <div class=\"simple-text stage-buttons\">2</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container t\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part bottom-part\">\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goBackToToolsPage()\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.return?.title}}</div>\n      </div>\n      <div class=\"item full-item item-button\" fxFlexOffset=\"4%\" fxFlex=\"24%\" (click)=\"levelStage(3)\">\n        <div class=\"simple-text stage-buttons\">3</div>\n      </div>\n      <div class=\"item full-item item-button\" fxFlexOffset=\"5%\" fxFlex=\"24%\" (click)=\"levelStage(4)\">\n        <div class=\"simple-text stage-buttons\">4</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools-page/bedleveling/bedleveling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedlevelingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BedlevelingComponent = (function () {
    function BedlevelingComponent(httpService, progressService, router, snackBar) {
        this.httpService = httpService;
        this.progressService = progressService;
        this.router = router;
        this.snackBar = snackBar;
        this.elements = {
            stage: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_5__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png',
            },
            return: {
                title: 'بازگشت',
                imageUrl: __WEBPACK_IMPORTED_MODULE_5__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
            }
        };
    }
    BedlevelingComponent.prototype.ngOnInit = function () {
    };
    BedlevelingComponent.prototype.levelStage = function (stage) {
        var _this = this;
        this.progressService.enable();
        this.httpService.post('bedleveling', { stage: stage }, true).subscribe(function (data) {
            _this.progressService.disable();
            _this.snackBar.open('Successfully leveled!', null, {
                duration: 1500,
            });
        }, function (err) {
            _this.progressService.disable();
            console.error('connection refused!', err);
        });
    };
    BedlevelingComponent.prototype.goBackToToolsPage = function () {
        this.router.navigate(["/tools"]);
    };
    BedlevelingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bedleveling',
            template: __webpack_require__("../../../../../src/app/tools-page/bedleveling/bedleveling.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools-page/bedleveling/bedleveling.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__services_progress_service__["a" /* ProgressService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */]])
    ], BedlevelingComponent);
    return BedlevelingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/extrude/extrude.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top-part {\r\n  margin-bottom: 5px !important;\r\n}\r\n\r\n.little-text-alignment {\r\n  margin-top: -40px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.slider {\r\n  width: 90%;\r\n  position: relative;\r\n}\r\n\r\n.slider-offset {\r\n  left: 10px;\r\n}\r\n\r\n.slider-feedrate {\r\n  /*left: -5px;*/\r\n  left: 0;\r\n}\r\n\r\n.return-special {\r\n  /*max-width: 23% !important;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/extrude/extrude.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div fxFlex=\"26%\" fxFlexOffset=\"0%\" class=\"title-elevated\">\n        <span>1</span>\n      </div>\n      <div fxFlex=\"44%\" fxFlexOffset=\"2%\" class=\"title-normal\">\n        <span class=\"text text-rtl\">مقدار تزریق‌شده: {{injected}}</span>\n      </div>\n      <div fxFlex=\"26%\" fxFlexOffset=\"2%\" class=\"title-elevated\">\n        <span>3</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\">\n      <div fxFlex=\"75%\" class=\"\">\n        <div class=\"text text-ltr normal-text slider slider-offset\" style=\"width: 100%\">Offset</div>\n        <mat-slider [max]=\"10\" [min]=\"1\" [step]=\"1\" [thumb-label]=\"true\"\n                    [(ngModel)]=\"value\" class=\"slider slider-offset\"></mat-slider>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item elevating-item\" (click)=\"makeExtrude(false)\">\n        <img src=\"{{elements.ext_in?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-ltr bigger-text little-text-alignment\">&nbsp;In</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"main-part\">\n      <div fxFlex=\"20%\" class=\"item elevating-item return-special\" (click)=\"goBackToToolsPage()\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-rtl normal-text\">بازگشت</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"49%\" fxFlexOffset=\"2%\" class=\"\">\n        <div class=\"text text-ltr normal-text\">Feed Rate</div>\n        <mat-slider [max]=\"1500\" [min]=\"250\" [step]=\"250\" [thumb-label]=\"true\"\n                    [(ngModel)]=\"feedrate\" class=\"slider slider-feedrate\"></mat-slider>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div fxFlex=\"24%\" class=\"item elevating-item\" (click)=\"makeExtrude(true)\">\n        <img src=\"{{elements.ext_out?.imageUrl}}\" alt=\"\">\n        <div class=\"text text-ltr bigger-text little-text-alignment\">Out</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools-page/extrude/extrude.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrudeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_enum_dialogUsage__ = __webpack_require__("../../../../../src/app/shared/enum/dialogUsage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExtrudeComponent = (function () {
    function ExtrudeComponent(router, httpService, progressService, snackBar, dataService, dialog) {
        this.router = router;
        this.httpService = httpService;
        this.progressService = progressService;
        this.snackBar = snackBar;
        this.dataService = dataService;
        this.dialog = dialog;
        this.injected = 0;
        this.value = 2;
        this.feedrate = 500;
        this.elements = {
            ext_in: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/up.png',
            },
            ext_out: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/down.png',
            },
            return: {
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/return.png',
                title: 'بازگشت',
            },
        };
    }
    ExtrudeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dataService.temps.getValue().ext.cur < 178) {
            var rmDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__shared_confirm_confirm_component__["a" /* ConfirmComponent */], {
                width: '500px',
                data: {
                    usage: __WEBPACK_IMPORTED_MODULE_8__shared_enum_dialogUsage__["a" /* DialogUsage */].needsPreheating,
                },
            });
            rmDialog.afterClosed().subscribe(function (status) {
                _this.goBackToToolsPage();
            });
        }
    };
    ExtrudeComponent.prototype.makeExtrude = function (isOut) {
        var _this = this;
        if (isOut === void 0) { isOut = false; }
        this.progressService.enable();
        this.httpService.post('extrude', {
            value: isOut ? this.value : -this.value,
            feedrate: this.feedrate
        }, true).subscribe(function (data) {
            _this.progressService.disable();
            _this.injected += isOut ? _this.value : -_this.value;
            _this.snackBar.open('با موفقیت انجام شد', null, {
                duration: 1000
            });
        }, function (err) {
            _this.progressService.disable();
            console.error('extrude problem:', err);
        });
    };
    ExtrudeComponent.prototype.goBackToToolsPage = function () {
        this.router.navigate(["/tools"]);
    };
    ExtrudeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extrude',
            template: __webpack_require__("../../../../../src/app/tools-page/extrude/extrude.component.html"),
            styles: [__webpack_require__("../../../../../src/app/base-template/base-template.component.css"), __webpack_require__("../../../../../src/app/tools-page/extrude/extrude.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */]])
    ], ExtrudeComponent);
    return ExtrudeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/homize/homize.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n  max-height: 215px !important;\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger:nth-child(2) {\r\n  /* THE BIG BLUE SIMPLE BACKGROUND :D */\r\n  /*margin-bottom: 20px;*/\r\n  /*background-color: #005E7C;*/\r\n\r\n  /*box-shadow: 0 20px 15px -10px blue;*/\r\n  /*opacity: 0.6;*/\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.shaped-text {\r\n  border: 11px solid black;\r\n  border-radius: 100px;\r\n  padding: 1px;\r\n  font-size: 6em !important;\r\n  background-color: #FFC593;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

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
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */]])
    ], HomizeComponent);
    return HomizeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/move-axis/move-axis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 165px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 6%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button {\r\n  }\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  /*-webkit-border-radius: 100px;*/\r\n  /*-moz-border-radius: 100px;*/\r\n  /*border-radius: 100px;*/\r\n  border-radius: 15px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  /*-webkit-border-radius: 100px;*/\r\n  /*-moz-border-radius: 100px;*/\r\n  /*border-radius: 100px;*/\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.move-icon {\r\n  font-size: 6em;\r\n  /*border: 1px solid gray;*/\r\n  /*padding: 0 !important;*/\r\n  /*background-color: black;*/\r\n  /*color: white;*/\r\n  /*-webkit-border-radius: 70px;*/\r\n  /*-moz-border-radius: 60px;*/\r\n  /*border-radius: 60px;*/\r\n}\r\n\r\n.slider-value {\r\n  width: 90%;\r\n  position: relative;\r\n  left: -25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/move-axis/move-axis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"30%\">\r\n        <span class=\"simple-text\">X: {{axis.X}}</span>\r\n      </div>\r\n      <div fxFlex=\"5%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"30%\">\r\n        <span class=\"simple-text\">Y: {{axis.Y}}</span>\r\n      </div>\r\n      <div fxFlex=\"5%\"></div>\r\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"30%\">\r\n        <span class=\"simple-text\">Z: {{axis.Z}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"margin-bottom: 5px;\"></div>\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"9%\" class=\"item-button\" (click)=\"moveAxis('X', value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_up</i>-->\r\n        <img src=\"{{elements.up?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Y', value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_up</i>-->\r\n        <img src=\"{{elements.up?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Z', value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_up</i>-->\r\n        <img src=\"{{elements.up?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"9%\" class=\"item-button\" (click)=\"moveAxis('X', -value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_down</i>-->\r\n        <img src=\"{{elements.down?.imageUrl}}\" alt=\"\">\r\n        <!--<div class=\"simple-text\">X</div>-->\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Y', -value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_down</i>-->\r\n        <img src=\"{{elements.down?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n      <div fxFlex=\"13%\" fxFlexOffset=\"22%\" class=\"item-button\" (click)=\"moveAxis('Z', -value)\">\r\n        <!--<i class=\"material-icons move-icon\">keyboard_arrow_down</i>-->\r\n        <img src=\"{{elements.down?.imageUrl}}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container t\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\r\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goToToolsPage()\">\r\n        <img src=\"{{elements.return?.imageUrl}}\">\r\n        <!--<mat-icon aria-label=\"edit\">edit</mat-icon>-->\r\n        <!--<i class=\"material-icons\">keyboard_arrow_left</i>-->\r\n        <!--<i class=\"material-icons iconic-font\">replay</i>-->\r\n        <div class=\"simple-text\">بازگشت</div>\r\n      </div>\r\n      <div fxFlex=\"76%\">\r\n        <mat-slider [max]=\"50\" [min]=\"1\" [step]=\"1\" [thumb-label]=\"true\"\r\n                    [(ngModel)]=\"value\" class=\"slider-value\"></mat-slider>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/shared/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_enum_dialogUsage__ = __webpack_require__("../../../../../src/app/shared/enum/dialogUsage.ts");
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
    function MoveAxisComponent(httpService, router, progressService, dialog) {
        this.httpService = httpService;
        this.router = router;
        this.progressService = progressService;
        this.dialog = dialog;
        this.haveAccess = false;
        this.value = 20;
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
        var _this = this;
        // check for accessing to this page!
        this.haveAccess = false;
        this.progressService.enable();
        this.httpService.options('move_axis', true).subscribe(function (data) {
            _this.progressService.disable();
            if (data && data['access'] === true) {
                _this.haveAccess = true;
            }
            else {
                _this.notHomed();
            }
        }, function (err) {
            _this.progressService.disable();
            console.error('could not gain access for moving!', err);
            _this.notHomed();
        });
        this.axis = {
            X: 0,
            Y: 0,
            Z: 0,
        };
    };
    MoveAxisComponent.prototype.notHomed = function () {
        var _this = this;
        var rmDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__shared_confirm_confirm_component__["a" /* ConfirmComponent */], {
            width: '500px',
            data: {
                usage: __WEBPACK_IMPORTED_MODULE_7__shared_enum_dialogUsage__["a" /* DialogUsage */].needsHoming,
            },
        });
        rmDialog.afterClosed().subscribe(function (status) {
            _this.goToToolsPage();
        });
    };
    MoveAxisComponent.prototype.moveAxis = function (axis, value) {
        var _this = this;
        if (!this.haveAccess) {
            console.error('you have no access to use this page, period!');
            return;
        }
        // if(this.axis[axis] + value < 0) {
        //   console.log("YOU'RE SETTING IT TO MINUS!");
        //   return;
        // }
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
            __WEBPACK_IMPORTED_MODULE_3__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */]])
    ], MoveAxisComponent);
    return MoveAxisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  /*background-repeat: repeat;*/\r\n}\r\n\r\n.disable-like-button {\r\n  opacity: 0.4;\r\n}\r\n\r\n.disable-like-button:active {\r\n  opacity: 0.4;\r\n  box-shadow: 0 0;\r\n}\r\n\r\n.main-page-div {\r\n  /*background-image: url(\"https://www.w3schools.com/css/trolltunga.jpg\");*/\r\n  border: 16px solid #005E7C;\r\n  background-color: #FFDD93;\r\n  /*margin: -10px;*/\r\n  /*margin: 24px 18px;*/\r\n  text-align: center;\r\n}\r\n\r\n.top-part {\r\n  /*height: 100px;*/\r\n  background-color: #58DADA;\r\n}\r\n\r\n.middle-part {\r\n  /*height: 100px;*/\r\n}\r\n\r\n.bottom-part {\r\n  /*height: 100%;*/\r\n  height: 170px;\r\n}\r\n\r\n.item {\r\n  /*background-color: #1CA2BB;*/\r\n}\r\n\r\n\r\n.top-part .full-item {\r\n  padding: 2%;\r\n}\r\n\r\n.middle-part .full-item {\r\n  padding: 2%;\r\n  margin: 3%;\r\n  margin-bottom: 3px;\r\n  margin-top: 3px;\r\n  /*margin-top: 4%;*/\r\n  /*margin: 20px;*/\r\n}\r\n\r\n.t {\r\n  position: relative;\r\n  bottom: 10%;\r\n}\r\n\r\n.bottom-part .full-item {\r\n  padding: 2%;\r\n  margin: 1%;\r\n  height: 100%;\r\n  margin-bottom: 2%;\r\n\r\n}\r\n\r\n.middle-part .item-button:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.bottom-part .item-button-bigger:active {\r\n  opacity: 0.7;\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.item-button img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  /*margin-bottom: 8px;*/\r\n  max-width: 100%;\r\n}\r\n\r\n.item-button-bigger img {\r\n  /*background-color: red;*/\r\n  border-radius: 100px;\r\n  max-width: 80%;\r\n}\r\n\r\n.simple-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n}\r\n\r\n.little-text {\r\n  direction: rtl;\r\n  font-family: iranyekan;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.mat-elevation-z16 {\r\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.iconic-font {\r\n  font-size: 6em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page-div\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"top-part\">\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        <div class=\"simple-text\">دمای Bed</div>\n        <span class=\"little-text\">فعلی: °{{bed.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{bed.goal}}</span>\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item\" fxFlex=\"44%\" *ngIf=\"dataService.ipList.length > 0\">\n        <span class=\"simple-text\">IP to connect:</span>\n        <div class=\"little-text\" *ngFor=\"let ip of dataService.ipList\">{{ip}}</div>\n      </div>\n      <div class=\"item full-item\" fxFlex=\"44%\" *ngIf=\"dataService.ipList.length <= 0\">\n        <span>Not Connected!</span>\n      </div>\n      <div fxFlex=\"2%\"></div>\n      <div class=\"item full-item mat-elevation-z16\" fxFlex=\"26%\">\n        <div class=\"simple-text\">دمای Extrude</div>\n        <span class=\"little-text\">فعلی: °{{ext.cur}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class=\"little-text\">هدف: °{{ext.goal}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"middle-part\">\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"goToPage(elements.home?.routeTo)\">\n        <img src=\"{{elements.home?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.home?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"openDialog('heat')\">\n        <img src=\"{{elements.heat?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.heat?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"goToPage(elements.move?.routeTo)\">\n        <img src=\"{{elements.move?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.move?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button\" fxFlex=\"24%\" (click)=\"goToPage(elements.ext?.routeTo)\">\n        <img src=\"{{elements.ext?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.ext?.title}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container t\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"bottom-part\">\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goToPage(elements.return?.routeTo)\">\n        <img src=\"{{elements.return?.imageUrl}}\" alt=\"\">\n        <div class=\"simple-text\">{{elements.return?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"releaseMotor()\">\n        <img src=\"{{elements.release_motor?.imageUrl}}\">\n        <div class=\"simple-text\">{{elements.release_motor?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button-bigger\" fxFlex=\"24%\" (click)=\"goToPage(elements.bed?.routeTo)\">\n        <img src=\"{{elements.bed?.imageUrl}}\">\n        <div class=\"simple-text\">{{elements.bed?.title}}</div>\n      </div>\n      <div fxFlex=\"1%\"></div>\n      <div class=\"item full-item item-button-bigger disable-like-button\" fxFlex=\"24%\">\n        <img src=\"{{elements.fan?.imageUrl}}\">\n        <div class=\"simple-text\">{{elements.fan?.title}}</div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools-page/tools-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__ = __webpack_require__("../../../../../src/app/shared/servermatch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_progress_service__ = __webpack_require__("../../../../../src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_heat_heat_component__ = __webpack_require__("../../../../../src/app/shared/heat/heat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_fan_fan_component__ = __webpack_require__("../../../../../src/app/shared/fan/fan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
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
    function ToolsPageComponent(router, httpService, snackBar, progressService, dialog, dataService) {
        this.router = router;
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.progressService = progressService;
        this.dialog = dialog;
        this.dataService = dataService;
        this.pageName = 'tools-page';
        this.bed = {
            cur: 0,
            goal: 10,
        };
        this.ext = {
            cur: 0,
            goal: 10,
        };
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
            release_motor: {
                title: 'آزادکردن موتور',
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/print-logo.png',
            },
            bed: {
                title: 'Bed Leveling',
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/bed-leveling.png',
                routeTo: 'bedleveling',
            },
            fan: {
                title: 'Fans',
                imageUrl: __WEBPACK_IMPORTED_MODULE_1__shared_servermatch__["a" /* ServerMatch */].STATIC + 'assets/images/fans.png',
                routeTo: 'setfans',
            }
        };
    }
    ToolsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.temps.subscribe(function (data) {
            _this.bed = data.bed;
            _this.ext = data.ext;
        });
    };
    ToolsPageComponent.prototype.goToPage = function (route) {
        this.router.navigate(['/' + route]);
    };
    ToolsPageComponent.prototype.openDialog = function (kind) {
        var _this = this;
        if (kind === void 0) { kind = 'heat'; }
        var kindComp = (kind === 'heat' ? __WEBPACK_IMPORTED_MODULE_6__shared_heat_heat_component__["a" /* HeatComponent */] : __WEBPACK_IMPORTED_MODULE_7__shared_fan_fan_component__["a" /* FanComponent */]);
        var rmDialog = this.dialog.open(kindComp, {
            width: (kind === 'heat' ? '640px' : '450px'),
            height: (kind === 'heat' ? '420px' : '200px'),
            data: {}
        });
        rmDialog.afterClosed().subscribe(function (data) {
            if (data && data['status'] === true) {
                _this.progressService.enable();
                _this.dataService.setHeat(data)
                    .then(function (res) {
                    _this.progressService.disable();
                    _this.snackBar.open('دما با موفقیت تغییر کرد', null, {
                        duration: 1700
                    });
                })
                    .catch(function (rej) {
                    _this.progressService.disable();
                    console.error('heat problem!', rej);
                });
            }
        });
    };
    ToolsPageComponent.prototype.releaseMotor = function () {
        var _this = this;
        this.progressService.enable();
        this.httpService.post('release_motor', true).subscribe(function (data) {
            _this.progressService.disable();
            _this.snackBar.open('موتورها با موفقیت آزاد شدند', null, {
                duration: 2000
            });
        }, function (err) {
            _this.progressService.disable();
            console.error('connection refused!', err);
        });
    };
    ToolsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tools-page',
            template: __webpack_require__("../../../../../src/app/tools-page/tools-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools-page/tools-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__services_progress_service__["a" /* ProgressService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]])
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