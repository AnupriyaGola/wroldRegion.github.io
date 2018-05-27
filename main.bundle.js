webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\r\n    \r\n    display: block;\r\n    padding: 3%;\r\n    \r\n    font-size: 26px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align: center\">\n    <div class=\"container\">\n      <div class=\"row header\">\n        <div class=\"col-md-12\">\n          <a style=\"color:rgb(0, 140, 255);\">World Regions</a>\n        </div>\n      </div>\n      <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n        <!--Brand and toggle get grouped for better mobile display-->\n        <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n         <span class=\"sr-only\">Toggle navigation</span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n        </button>\n      </div>\n      <!--Collect the nav links,forms,and other content for toggling-->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li><a [routerLink]=\"['/home']\">Regions</a></li>\n          <li><a (click)=\"goBack()\">Go Back</a></li>\n          \n        </ul>\n      </div><!--/.navbar-collpase-->\n      </div><!--/.container-fluid-->\n    </nav>\n  </div>\n  </div>\n  <br/>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_route, router, location) {
        this._route = _route;
        this.router = router;
        this.location = location;
        this.title = 'app';
    }
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__countries_view_countries_view_component__ = __webpack_require__("./src/app/countries-view/countries-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_country_view_single_country_view_component__ = __webpack_require__("./src/app/single-country-view/single-country-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__world_service__ = __webpack_require__("./src/app/world.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__world_http_service__ = __webpack_require__("./src/app/world-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__countries_view_countries_view_component__["a" /* CountriesViewComponent */],
                __WEBPACK_IMPORTED_MODULE_5__single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'single-country-view/:name', component: __WEBPACK_IMPORTED_MODULE_5__single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */] },
                    { path: 'countries-view/:region', component: __WEBPACK_IMPORTED_MODULE_4__countries_view_countries_view_component__["a" /* CountriesViewComponent */] },
                    { path: 'countries-view/:code', component: __WEBPACK_IMPORTED_MODULE_4__countries_view_countries_view_component__["a" /* CountriesViewComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__world_service__["a" /* WorldService */], __WEBPACK_IMPORTED_MODULE_9__world_http_service__["a" /* WorldHttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countries-view/countries-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/countries-view/countries-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n  \n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 col-12 card-container\" *ngFor=\"let country of allCountries\">\n        <div class=\"card h-100\">\n          <img class=\"card-img-top\" [src]=\"country.flag\" alt=\"Card image cap\" style=\"height : 70px;\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{country.name}}</h5>\n            <div class=\"card-text\">\n              <p>\n                <em>Capital</em> : {{country.capital}}</p>\n              <p>\n                <em>SubRegion</em> :\n                <span>{{country.subregion}}</span>\n              </p>\n              <p>\n                <em>Currency</em> :\n                <span *ngFor=\"let currency of country.currencies; let i = last\">\n                  <a [routerLink]=\"['/allCountries/' + country.region]\" [queryParams]=\"{ 'currency' : currency.code, 'name' : currency.name}\">{{currency.name}} </a>{{i ? \"\" : \",\"}} </span>\n              </p>\n            </div>\n            <p>\n              <button [routerLink]=\"['/single-country-view', country.name]\" class=\"btn btn-primary btn-block\">See More..</button>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n \n"

/***/ }),

/***/ "./src/app/countries-view/countries-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__world_http_service__ = __webpack_require__("./src/app/world-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountriesViewComponent = /** @class */ (function () {
    function CountriesViewComponent(_route, router, worldHttpService) {
        this._route = _route;
        this.router = router;
        this.worldHttpService = worldHttpService;
        this.currencyFilter = false;
        this.languageFilter = false;
        console.log("constructor is called");
    }
    CountriesViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subCurrency = this._route.queryParams
            .subscribe(function (params) {
            if (params["currency"]) {
                _this.currencyFilter = true;
                _this.getCountriesByCurrency(params["currency"]);
                _this.titlePreText = "Countries with currency";
                _this.title = params["name"];
            }
            else if (params["language"]) {
                _this.languageFilter = true;
                _this.getCountriesByLanguage(params["language"]);
                _this.titlePreText = "Countries with language";
                _this.title = params["name"];
            }
            else {
                _this.currencyFilter = false;
                _this.region = _this._route.snapshot.paramMap.get("region");
                _this.titlePreText = "Countries in";
                _this.title = _this.region;
                console.log(_this.region);
                _this.worldHttpService.getAllCountries(_this.region).subscribe(function (data) {
                    console.log(data);
                    _this.allCountries = data;
                }, function (error) {
                    console.log("some error occured");
                    console.log(error.errorMessage);
                });
                console.log(_this.allCountries);
            }
        });
        /*console.log("ngOnInitCalled");
        //getting region name from the route
        let countries = this._route.snapshot.paramMap.get('region');
        console.log(countries);
      //this.worldHttpService.getAllCountries(countries);*/
    };
    CountriesViewComponent.prototype.getCountriesByCurrency = function (code) {
        var _this = this;
        this.worldHttpService.getCountriesUsingCurrency(code)
            .subscribe(function (data) {
            _this.allCountries = data;
            console.log(_this.allCountries);
        });
    };
    CountriesViewComponent.prototype.getCountriesByLanguage = function (code) {
        var _this = this;
        this.worldHttpService.getCountriesUsingLanguage(code)
            .subscribe(function (data) {
            _this.allCountries = data;
            console.log(_this.allCountries);
        });
    };
    CountriesViewComponent.prototype.ngOnDestroy = function () {
        console.log("Countries Component OnDestroyCalled");
    };
    CountriesViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-countries-view',
            template: __webpack_require__("./src/app/countries-view/countries-view.component.html"),
            styles: [__webpack_require__("./src/app/countries-view/countries-view.component.css")],
            providers: [Location]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__world_http_service__["a" /* WorldHttpService */]])
    ], CountriesViewComponent);
    return CountriesViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-1 col-lg-1 col-xs-3 col-xl-1\">\n        </div>\n  <div class=\"col-md-3 col-lg-3 col-xs-9 col-xl-4\">\n<a [routerLink]=\"['/countries-view/americas']\"><img width=\"300\"  src=\"assets/america.jpg\"></a>\n</div>\n<div class=\"col-md-1 col-lg-1 col-xs-3 col-xl-1\">\n  </div>\n<div class=\"col-md-3 col-lg-3 col-xs-9 col-xl-3\">\n<a [routerLink]=\"['/countries-view/europe']\"><img width=\"300\"  src=\"assets/europe.jpg\"></a>\n</div>\n<div class=\"col-md-1 col-lg-1 col-xs-3 col-xl-1\">\n  </div>\n<div class=\"col-md-3 col-lg-3 col-xs-9 col-xl-4\">\n <a [routerLink]=\"['/countries-view/asia']\"><img width=\"300\"  src=\"assets/asia.png\"></a>\n </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-2 col-lg-2 col-xs-3 col-xl-2\">\n      </div>\n <div class=\"col-md-4 col-lg-4 col-xs-9 col-xl-4\">\n<a [routerLink]=\"['/countries-view/africa']\"><img width=\"300\"  src=\"assets/africa.jpg\"></a>\n</div>\n<div class=\"col-md-2 col-lg-2 col-xs-3 col-xl-2\">\n  </div>\n<div class=\"col-md-4 col-lg-4 col-xs-9 col-xl-4\">\n <a [routerLink]=\"['/countries-view/oceania']\"><img width=\"300\"  src=\"assets/oceania.jpg\"></a>\n </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, router, location) {
        this._route = _route;
        this.router = router;
        this.location = location;
        console.log("Home component constructor called");
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("Home component OnInit called");
        //this.allCountries = this.worldHttpService.getAllCountries();
    };
    HomeComponent.prototype.goBack = function () {
        this.location.back();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home component destroyed");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/single-country-view/single-country-view.component.css":
/***/ (function(module, exports) {

module.exports = ".flagDiv{\r\n    height : 300px;\r\n    width : 100%;\r\n}"

/***/ }),

/***/ "./src/app/single-country-view/single-country-view.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let Country of singleCountry\">\n  <div style=\"background : grey\">\n    <img [src]=\"Country.flag\" alt=\"\" class=\"flagDiv\">\n  </div>\n  <div class=\"text-center\" style=\"margin : 20px 0\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <h1>{{Country.name}} {{Country.nativeName === Country.name ? \"\" : \"(\" + Country.nativeName\n          + \")\" }}</h1>\n        <h4>Capital City : {{Country.capital}}</h4>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-12\">\n          <div class=\"alert alert-secondary\" role=\"alert\">\n            <h5 class=\"alert-heading\">Physical Parmeters</h5>\n            <hr>\n            <b>Region : </b> {{Country.region}}\n            <br>\n            <b>Subregion : </b> {{Country.subregion}}\n            <br>\n            <b>Area : </b> {{Country.area}}\n            <br>\n            <b>Borders : </b>\n            <span class=\"badge badge-secondary\" style=\"display : inline-block; cursor : pointer; margin : 0 5px;\" *ngFor=\"let borderCountry of Country.borders\">\n              <a (click)=\"goToCountry(borderCountry)\">{{borderCountry}}</a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <div class=\"alert alert-secondary\" role=\"alert\">\n            <h5 class=\"alert-heading\">Languages</h5>\n            <hr>\n            <span *ngFor=\"let language of Country.languages; let i = last\">\n              <a [routerLink]=\"['/countries-view/' + Country.region]\" [queryParams]=\"{ 'language' : language.iso639_1, 'name' : language.name}\">{{language.name}}</a>\n              <br>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-12\">\n          <div class=\"alert alert-secondary\" role=\"alert\">\n            <h5 class=\"alert-heading\">Other Details</h5>\n            <hr>\n            <b>Top Level Domain</b> : {{Country.topLevelDomain}}\n            <br>\n            <b>alpha2Code</b> : {{Country.alpha2Code}}\n            <br>\n            <b>alpha3Code</b> : {{Country.alpha3Code}}\n            <br>\n            <b>Calling Codes</b> :\n            <span *ngFor=\"let code of Country.callingCodes; let i = last\">{{code}}{{i ? \"\" : \",\"}}</span>\n            <br>\n            <b>Population</b> : {{Country.population}}\n            <br>\n            <b>Currencies</b> :\n            <span *ngFor=\"let currency of Country.currencies; let i = last\">\n              <a [routerLink]=\"['/countries-view/' + currency.code]\" [queryParams]=\"{ 'currency' : currency.code, 'name' : currency.name}\">{{currency.name}} </a>{{i ? \"\" : \",\"}}\n              <br>\n            </span>\n            <b>TimeZone</b> :\n            <span *ngFor=\"let time of Country.timezones\">{{time}}\n              <br>\n            </span>\n            <br>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </span>"

/***/ }),

/***/ "./src/app/single-country-view/single-country-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleCountryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__world_http_service__ = __webpack_require__("./src/app/world-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleCountryViewComponent = /** @class */ (function () {
    function SingleCountryViewComponent(_route, router, worldHttpService) {
        this._route = _route;
        this.router = router;
        this.worldHttpService = worldHttpService;
        console.log("constructor is called");
    }
    SingleCountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInitCalled");
        //getting region name from the route
        var country = this._route.snapshot.paramMap.get('name');
        console.log(country);
        //this.worldHttpService.getAllCountries(countries);
        this.worldHttpService.getSingleCountries(country).subscribe(function (data) {
            console.log(data);
            _this.singleCountry = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    SingleCountryViewComponent.prototype.goToCountry = function (countryCode) {
        var _this = this;
        this.worldHttpService.goToCountryUsingCode(countryCode).subscribe(function (data) {
            _this.router.navigate(["/single-country-view/" + data.name]);
        });
    };
    SingleCountryViewComponent.prototype.ngOnDestroy = function () {
        console.log("Countries Component OnDestroyCalled");
    };
    SingleCountryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single-country-view',
            template: __webpack_require__("./src/app/single-country-view/single-country-view.component.html"),
            styles: [__webpack_require__("./src/app/single-country-view/single-country-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__world_http_service__["a" /* WorldHttpService */]])
    ], SingleCountryViewComponent);
    return SingleCountryViewComponent;
}());



/***/ }),

/***/ "./src/app/world-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorldHttpService = /** @class */ (function () {
    function WorldHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://restcountries.eu/rest/v2';
        console.log("world-http service is called");
    }
    WorldHttpService.prototype.getAllCountries = function (currentCountry) {
        var myResponse = this._http.get(this.baseUrl + '/region' + '/' + currentCountry);
        console.log(myResponse);
        return myResponse;
    };
    WorldHttpService.prototype.getSingleCountries = function (country) {
        var myResponse = this._http.get(this.baseUrl + '/name' + '/' + country);
        console.log(myResponse);
        return myResponse;
    };
    WorldHttpService.prototype.goToCountryUsingCode = function (code) {
        return this._http.get(this.baseUrl + "/alpha/" + code);
    };
    WorldHttpService.prototype.getCountriesUsingCurrency = function (code) {
        var myResponse = this._http.get(this.baseUrl + '/currency' + '/' + code);
        console.log(myResponse);
        return myResponse;
    };
    WorldHttpService.prototype.getCountriesUsingLanguage = function (code) {
        return this._http.get(this.baseUrl + "/lang/" + code);
    };
    WorldHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WorldHttpService);
    return WorldHttpService;
}());



/***/ }),

/***/ "./src/app/world.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorldService = /** @class */ (function () {
    function WorldService() {
        console.log("service constructor called");
    }
    //method to return all the countries
    WorldService.prototype.getAllCountries = function () {
        return this.getAllCountries;
    };
    WorldService.prototype.getCountries = function (currentCountry) {
        for (var _i = 0, _a = this.allCountries; _i < _a.length; _i++) {
            var country = _a[_i];
            if (country.region == currentCountry) {
                this.currentCountry = country;
            }
        }
        return this.currentCountry;
    };
    WorldService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WorldService);
    return WorldService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map