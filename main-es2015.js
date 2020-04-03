(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ccaachart/ccaachart.component */ "./src/app/components/ccaachart/ccaachart.component.ts");



class AppComponent {
    constructor() {
        this.title = 'covid-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ccaachart");
    } }, directives: [_components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_1__["CCAAchartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ccaachart/ccaachart.component */ "./src/app/components/ccaachart/ccaachart.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










/*
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;
*/
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_6__["CCAAchartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_6__["CCAAchartComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/ccaachart/ccaachart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ccaachart/ccaachart.component.ts ***!
  \*************************************************************/
/*! exports provided: CCAAchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCAAchartComponent", function() { return CCAAchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["GraphA"];
const _c1 = ["GraphB"];
const _c2 = ["GraphE0"];
const _c3 = ["GraphE1"];
const _c4 = ["GraphE2"];
const _c5 = ["GraphE3"];
const _c6 = ["GraphE4"];
const _c7 = ["GraphE5"];
const _c8 = ["GraphE6"];
function CCAAchartComponent_option_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ccaa_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ccaa_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ccaa_r10.name, " ");
} }
class CCAAchartComponent {
    constructor(http) {
        this.http = http;
        this.madridDataFull = {};
        this.myccaadata = [];
        this.jsonResumeSpain = [];
        this.ccaaComparatorMode = 'total';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        };
    }
    ngOnInit() {
        this.options = [
            { "code": "AN", name: "Andalucia" },
            { "code": "AR", name: "Aragon" },
            { "code": "AS", name: "Asturias" },
            { "code": "IB", name: "Islas Baleares" },
            { "code": "CN", name: "Canarias" },
            { "code": "CB", name: "Cantabria" },
            { "code": "CM", name: "Castilla la Mancha" },
            { "code": "CL", name: "Castilla y Leon" },
            { "code": "CT", name: "Cataluña" },
            { "code": "CE", name: "Ceuta" },
            { "code": "VC", name: "C.Valenciana" },
            { "code": "EX", name: "Extremadura" },
            { "code": "GA", name: "Galicia" },
            { "code": "MD", name: "Madrid" },
            { "code": "ME", name: "Melilla" },
            { "code": "MC", name: "Murcia" },
            { "code": "NC", name: "Navarra" },
            { "code": "PV", name: "Pais Vasco" },
            { "code": "RI", name: "Rioja" }
        ];
        this.getCSV(); //full csv by days
        this.getSpainCSV(); //spain general data
        this.getRegionsCSV(); //Regions top values to compare
    }
    //--AJAX functions
    //Get resume españa CSV
    getSpainCSV() {
        if (window.location.href === "http://atreliz.com/covid19/") {
            var localUrl = "http://atreliz.com/covid19/assets/data/data.csv?v=" + new Date().getTime();
        }
        else {
            var localUrl = "/assets/data/data.csv?v=" + new Date().getTime();
        }
        this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        })
            .subscribe(data => {
            console.log("----CSV ", data);
            this.jsonResumeSpain = this.csvToJSON(data)[0];
            this.drawPie(this.jsonResumeSpain);
        });
    }
    //get fulll CSV
    getCSV() {
        if (window.location.href === "http://atreliz.com/covid19/") {
            var localUrl = "http://atreliz.com/covid19/assets/data/serie_historica_acumulados.csv?v=" + new Date().getTime();
        }
        else {
            var localUrl = "/assets/data/serie_historica_acumulados.csv?v=" + new Date().getTime();
        }
        this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        })
            .subscribe(data => {
            console.log("----CSV ", data);
            this.jsonReadyFull(this.csvToJSON(data));
        });
    }
    //get resumen de comunidades csv
    getRegionsCSV() {
        if (window.location.href === "http://atreliz.com/covid19/") {
            var localUrl = "http://atreliz.com/covid19/assets/data/ccaa.csv?v=" + new Date().getTime();
        }
        else {
            var localUrl = "/assets/data/ccaa.csv?v=" + new Date().getTime();
        }
        this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        })
            .subscribe(data => {
            console.log("----CSV ", data);
            var regionsCSV = this.csvToJSON(data);
            regionsCSV.forEach(function (item) {
                item.Acumulados = item.Acumulados * 1;
                item['Ultimas 24h'] = item['Ultimas 24h'] * 1;
                item.Incidencia = item.Incidencia * 1;
                if (item.CCAA === 'AndalucÃ­a') {
                    item.CCAA = 'Andalucía';
                }
                if (item.CCAA === 'AragÃ³n') {
                    item.CCAA = 'Aragón';
                }
                if (item.CCAA === 'CataluÃ±a') {
                    item.CCAA = 'Cataluña';
                }
                if (item.CCAA === 'Castilla y LeÃ³n') {
                    item.CCAA = 'Castilla y León';
                }
                if (item.CCAA === 'PaÃ­s Vasco') {
                    item.CCAA = 'Pais Vasco';
                }
            });
            function dynamicSort(property) {
                return function (obj1, obj2) {
                    return obj1[property] > obj2[property] ? 1
                        : obj1[property] < obj2[property] ? -1 : 0;
                };
            }
            function dynamicSortMultiple(props) {
                /*
                * save the arguments object as it will be overwritten
                * note that arguments object is an array-like object
                * consisting of the names of the properties to sort by
                */
                //var props = arguments;
                return function (obj1, obj2) {
                    var i = 0, result = 0, numberOfProperties = props.length;
                    /* try getting a different result from 0 (equal)
                    * as long as we have extra properties to compare
                    */
                    while (result === 0 && i < numberOfProperties) {
                        result = dynamicSort(props[i])(obj1, obj2);
                        i++;
                    }
                    return result;
                };
            }
            //CCAA: "AndalucÃ­a", Acumulados: "5818", Ultimas 24h: "413", Incidencia:
            var data1 = {
                ccaa: [],
                acumulados: []
            };
            var source1 = [...regionsCSV.sort(dynamicSortMultiple(['Acumulados', 'CCAA', 'Ultimas 24h', 'Incidencia']))];
            console.log("source1", source1);
            var data2 = {
                ccaa: [],
                ultimas: []
            };
            var source2 = [...regionsCSV.sort(dynamicSortMultiple(['Ultimas 24h', 'CCAA', 'Acumulados', 'Incidencia']))];
            console.log("source2", source2);
            var data3 = {
                ccaa: [],
                incidencia: []
            };
            var source3 = [...regionsCSV.sort(dynamicSortMultiple(['Incidencia', 'CCAA', 'Ultimas 24h', 'Acumulados']))];
            console.log("source3", source3);
            //console.log("regionsCSV",regionsCSV)
            source1.forEach(function (item) {
                data1.ccaa.push(item.CCAA);
                data1.acumulados.push(item.Acumulados);
            });
            source2.forEach(function (item) {
                data2.ccaa.push(item.CCAA);
                data2.ultimas.push(item['Ultimas 24h']);
            });
            source3.forEach(function (item) {
                data3.ccaa.push(item.CCAA);
                data3.incidencia.push(item.Incidencia);
            });
            this.plotGraphE1(data1);
            this.plotGraphE2(data2);
            this.plotGraphE3(data3);
            //now build the other
            this.getPopulationCSV(data1, data2, data3);
        });
    }
    //get population comunidades csv
    getPopulationCSV(data1, data2, data3) {
        var data4 = JSON.parse(JSON.stringify(data1));
        var data5 = JSON.parse(JSON.stringify(data2));
        var data6 = JSON.parse(JSON.stringify(data3));
        if (window.location.href === "http://atreliz.com/covid19/") {
            var localUrl = "http://atreliz.com/covid19/assets/data/population.csv?v=" + new Date().getTime();
        }
        else {
            var localUrl = "/assets/data/population.csv?v=" + new Date().getTime();
        }
        this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        })
            .subscribe(data => {
            console.log("----CSV ", data);
            var populationCSV = this.csvToJSON(data);
            console.log("---populationCSV", populationCSV);
            console.log("---data4", data4);
            for (let i = 0; i < data4.ccaa.length; i++) {
                populationCSV.forEach(function (item_B) {
                    if (data4.ccaa[i] === item_B.CCAA) {
                        var relative = (data4.acumulados[i] / item_B.population) * 1000;
                        data4.acumulados[i] = relative.toFixed(2);
                        console.log(data4.ccaa[i], item_B.CCAA, data4.acumulados[i]);
                    }
                });
            }
            ;
            for (let i = 0; i < data5.ccaa.length; i++) {
                populationCSV.forEach(function (item_B) {
                    if (data5.ccaa[i] === item_B.CCAA) {
                        var relative = (data5.ultimas[i] / item_B.population) * 1000;
                        data5.ultimas[i] = relative.toFixed(2);
                        console.log(data5.ccaa[i], item_B.CCAA, data5.ultimas[i]);
                    }
                });
            }
            ;
            for (let i = 0; i < data6.ccaa.length; i++) {
                populationCSV.forEach(function (item_B) {
                    if (data6.ccaa[i] === item_B.CCAA) {
                        var relative = (data6.incidencia[i] / item_B.population) * 1000;
                        data6.incidencia[i] = relative.toFixed(2);
                        console.log(data6.ccaa[i], item_B.CCAA, data6.incidencia[i]);
                    }
                });
            }
            ;
            /*
            source2.forEach( function(item){
                data2.ccaa.push(item.CCAA)
                data2.ultimas.push(item['Ultimas 24h'])
            });


            source3.forEach( function(item){
                data3.ccaa.push(item.CCAA)
                data3.incidencia.push(item.Incidencia)
            });
            */
            this.plotGraphE4(data4);
            this.plotGraphE5(data5);
            this.plotGraphE6(data6);
        });
    }
    //--AUX functions
    onChange(value) {
        this.massageData(value, "update");
    }
    csvToJSON(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length - 1; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        /*
        if (callback && (typeof callback === 'function')) {
            return callback(result);
        }
        */
        return result;
    }
    //need?
    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers,
            * and you may want to customize it to your needs
            */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    jsonReadyFull(data) {
        console.log("ready---", data);
        this.myccaadata = data;
        this.selectedCCAA = "MD";
        this.massageData("MD", "create");
    }
    massageData(ccaacode, mode) {
        console.log("load ", ccaacode);
        this.fullData = this.myccaadata;
        var cleanDataOneCCAA = this.fullData.filter((item) => item['CCAA Codigo ISO'] == ccaacode);
        this.madridData = cleanDataOneCCAA.slice(10);
        console.log("clean data", this.madridData);
        this.madridDataFull.fechas = this.madridData.map((item) => item.Fecha);
        this.madridDataFull.casos = this.madridData.map((item) => item['Casos '] != "" ? item['Casos '] : 0);
        this.madridDataFull.hospitalizados = this.madridData.map((item) => item.Hospitalizados != "" ? item.Hospitalizados : 0);
        this.madridDataFull.uci = this.madridData.map((item) => item.UCI != "" ? item.UCI : 0);
        this.madridDataFull.fallecidos = this.madridData.map((item) => item.Fallecidos != "" ? item.Fallecidos : 0);
        //calculate Casos por dia
        this.madridDataFull.casosDia = [];
        for (var i = 0; i < this.madridDataFull.casos.length; i++) {
            var actual = this.madridDataFull.casos[i];
            var siguiente = this.madridDataFull.casos[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.casosDia.push(resta);
        }
        //calculate fallecidos por dia
        this.madridDataFull.fallecidosDia = [];
        for (var i = 0; i < this.madridDataFull.fallecidos.length; i++) {
            var actual = this.madridDataFull.fallecidos[i];
            var siguiente = this.madridDataFull.fallecidos[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.fallecidosDia.push(resta);
        }
        //calculate hospitalizados por dia
        this.madridDataFull.hospitalizadosDia = [];
        for (var i = 0; i < this.madridDataFull.hospitalizados.length; i++) {
            var actual = this.madridDataFull.hospitalizados[i];
            var siguiente = this.madridDataFull.hospitalizados[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.hospitalizadosDia.push(resta);
        }
        //calculate uci por dia
        this.madridDataFull.uciDia = [];
        for (var i = 0; i < this.madridDataFull.uci.length; i++) {
            var actual = this.madridDataFull.uci[i];
            var siguiente = this.madridDataFull.uci[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.uciDia.push(resta);
        }
        console.log("this.madridDataFull.", this.madridDataFull);
        //draw charts
        if (mode === "create") {
            console.log("CREATE");
            this.plotGraphA();
            this.plotGraphB();
        }
        else {
            console.log("UPDATE");
            this.plotGraphAUpdate();
            this.plotGraphBUpdate();
        }
    }
    setCCAAMode(value) {
        console.log("setCCAAMode", value);
        this.ccaaComparatorMode = value;
    }
    //--PLOT functions
    plotGraphA() {
        Plotly.newPlot(this.GraphA.nativeElement, [
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.casos,
                mode: 'lines',
                name: 'Casos acumulados'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.fallecidos,
                mode: 'lines',
                name: 'Fallecidos acumulados'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.hospitalizados,
                mode: 'lines',
                name: 'Hopitalizados acumulados'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.uci,
                mode: 'lines',
                name: 'UCI acumulados'
            }
        ], {
            legend: {
                x: 0,
                y: 1
            },
            margin: { t: 0 }
        }, { responsive: true, displayModeBar: false });
    }
    plotGraphB() {
        Plotly.newPlot(this.GraphB.nativeElement, [
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.casosDia,
                type: 'bar',
                name: 'Casos cada dia'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.fallecidosDia,
                type: 'bar',
                name: 'Fallecidos al dia'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.hospitalizadosDia,
                type: 'bar',
                name: 'Hopitalizados al dia'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.uciDia,
                type: 'bar',
                name: 'UCI al dia'
            }
        ], {
            legend: {
                x: 0,
                y: 1
            },
            margin: { t: 20 }
        }, { responsive: true, displayModeBar: false });
    }
    plotGraphAUpdate() {
        console.log("plotGraphAUpdate");
        Plotly.react(this.GraphA.nativeElement, [
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.casos,
                mode: 'lines',
                name: 'Casos acumulados'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.fallecidos,
                mode: 'lines',
                name: 'Fallecidos acumulados'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.hospitalizados,
                mode: 'lines',
                name: 'Hopitalizados acumulados'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.uci,
                mode: 'lines',
                name: 'UCI acumulados'
            }
        ], {
            margin: { t: 20 }
        }, { responsive: true, showEditInChartStudio: false });
    }
    plotGraphBUpdate() {
        Plotly.react(this.GraphB.nativeElement, [
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.casosDia,
                type: 'bar',
                name: 'Casos cada dia'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.fallecidosDia,
                type: 'bar',
                name: 'Fallecidos al dia'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.hospitalizadosDia,
                type: 'bar',
                name: 'Hopitalizados al dia'
            },
            {
                x: this.madridDataFull.fechas,
                y: this.madridDataFull.uciDia,
                type: 'bar',
                name: 'UCI al dia'
            }
        ], {
            margin: { t: 0 }
        }, { responsive: true, showEditInChartStudio: false });
    }
    //compare comunidades by total
    plotGraphE1(data) {
        Plotly.newPlot(this.GraphE1.nativeElement, [
            {
                y: data.ccaa,
                x: data.acumulados,
                type: 'bar',
                orientation: 'h'
            }
        ], {
            margin: { t: 0, l: 120 }
        }, { responsive: true, displayModeBar: false });
    }
    plotGraphE2(data) {
        Plotly.newPlot(this.GraphE2.nativeElement, [
            {
                y: data.ccaa,
                x: data.ultimas,
                type: 'bar',
                orientation: 'h'
            }
        ], {
            margin: { t: 0, l: 120 }
        }, { responsive: true, displayModeBar: false });
    }
    plotGraphE3(data) {
        Plotly.newPlot(this.GraphE3.nativeElement, [
            {
                y: data.ccaa,
                x: data.incidencia,
                type: 'bar',
                orientation: 'h'
            }
        ], {
            margin: { t: 0, l: 120 }
        }, { responsive: true, displayModeBar: false });
    }
    //compare comunidades by total with population
    plotGraphE4(data) {
        Plotly.newPlot(this.GraphE4.nativeElement, [
            {
                y: data.ccaa,
                x: data.acumulados,
                type: 'bar',
                orientation: 'h'
            }
        ], {
            margin: { t: 0, l: 120 }
        }, { responsive: true, displayModeBar: false });
    }
    plotGraphE5(data) {
        Plotly.newPlot(this.GraphE5.nativeElement, [
            {
                y: data.ccaa,
                x: data.ultimas,
                type: 'bar',
                orientation: 'h'
            }
        ], {
            margin: { t: 0, l: 120 }
        }, { responsive: true, displayModeBar: false });
    }
    plotGraphE6(data) {
        Plotly.newPlot(this.GraphE6.nativeElement, [
            {
                y: data.ccaa,
                x: data.incidencia,
                type: 'bar',
                orientation: 'h'
            }
        ], {
            margin: { t: 0, l: 120 }
        }, { responsive: true, displayModeBar: false });
    }
    drawPie(data) {
        console.log("pie", data);
        var enfermos = data.Casos - data.Defunciones - data.Recuperados;
        Plotly.newPlot(this.GraphE0.nativeElement, [
            {
                values: [enfermos, data.Recuperados, data.Defunciones],
                labels: ['Enfermos', 'Recuperados', 'Defunciones'],
                type: 'pie',
                marker: {
                    colors: ["#ff7f0e", "#2d9f2c", "#1f77b4"]
                }
            }
        ], {
            height: 420
        }, { responsive: true, displayModeBar: false });
    }
}
CCAAchartComponent.ɵfac = function CCAAchartComponent_Factory(t) { return new (t || CCAAchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CCAAchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CCAAchartComponent, selectors: [["app-ccaachart"]], viewQuery: function CCAAchartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphA = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphB = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE0 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE6 = _t.first);
    } }, decls: 145, vars: 24, consts: [[2, "margin-bottom", "20px"], [1, "kpis"], [1, "number"], [1, "number", 2, "margin-top", "15px"], [1, "number", "lastp", 2, "margin-top", "15px"], [1, "material-icons"], [1, "lastp"], [1, "pie"], [2, "margin-bottom", "0px"], ["id", "GraphE0"], ["GraphE0", ""], [1, "area1"], [1, "trisection"], ["id", "GraphE1"], ["GraphE1", ""], ["id", "GraphE2"], ["GraphE2", ""], ["id", "GraphE3"], ["GraphE3", ""], ["id", "GraphE4"], ["GraphE4", ""], ["id", "GraphE5"], ["GraphE5", ""], ["id", "GraphE6"], ["GraphE6", ""], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "explain"], ["id", "GraphA"], ["GraphA", ""], ["id", "GraphB"], ["GraphB", ""], [1, "txtright"], ["href", "https://covid19.isciii.es/"], [1, "txtright", 2, "margin-bottom", "20px"], ["href", "http://atreliz.com"], [3, "value"]], template: function CCAAchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Influencia COVID 19 distribuidas por comunidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Espa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "query_builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ultimas 24H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "add_alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total de casos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total de fallecidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "directions_walk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total de recuperados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "local_hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total de hospitalizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Comunidades: por sus casos totales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Comunidades por casos acumulados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Comunidades en las ultimas 24H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Comunidades por Inc.14d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Comunidades: casos por cada 1000 habitantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Comunidades por casos acumulados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Comunidades en las ultimas 24H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Comunidades por Inc.14d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Selecciona tu comunidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CCAAchartComponent_Template_select_ngModelChange_106_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, CCAAchartComponent_option_107_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "COVID 19: Cantidades totales incrementales (valores oficiales)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Estas gr\u00E1ficas siempre suben por que a cada d\u00EDa se suman los datos del anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Lo que hay que fijarse es la pendiente, cuanto mas plana, menor sera el numero de nuevos casos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "COVID 19: Cantidades por d\u00EDa (valores calculados)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Estas gr\u00E1ficas suben y bajan, por que son los casos totales de cada d\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Lo que hay que fijarse es si las columnas van bajando seg\u00FAn pasan los d\u00EDas, lo cual indicar\u00EDa una mejora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Fuente de datos oficial: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "https://covid19.isciii.es/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "**NOTA publicada en la fuente de datos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " El objetivo de los datos que se publican en esta web es saber el n\u00FAmero de casos acumulados a la fecha y que por tanto no se puede deducir que la diferencia entre un d\u00EDa y el anterior es el n\u00FAmero de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores Cualquier inferencia que se haga sobre las diferencias de un d\u00EDa para otro deben hacerse con precauci\u00F3n y son \u00FAnicamente la responsabilidad el autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "**NOTA de este autor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " estas gr\u00E1ficas usan los datos oficiales compartidos por el gobierno a la poblaci\u00F3n. Seg\u00FAn el rigor con que se han tomado esos datos, las gr\u00E1ficas por d\u00EDas debe tomarse como una aproximaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Made by ATL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jsonResumeSpain.Fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jsonResumeSpain.Hora, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, ctx.jsonResumeSpain.Casos24h));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, ctx.jsonResumeSpain.Casos));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 16, ctx.jsonResumeSpain.Defunciones));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 18, ctx.jsonResumeSpain.Recuperados));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 20, ctx.jsonResumeSpain.Hospitalizados));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Situaci\u00F3n en Espa\u00F1a con ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 22, ctx.jsonResumeSpain.Casos), " casos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCCAA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Ultima actualizaci\u00F3n: (", ctx.jsonResumeSpain.Fecha, " - ", ctx.jsonResumeSpain.Hora, "h) ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".txtright[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 0px;\n}\n\n.lastp[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\nheader[_ngcontent-%COMP%] {\n  float: left;\n  width: 96%;\n  margin: 0.5% 2%;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1f77b4;\n  font-size: 2em;\n  text-transform: uppercase;\n}\n\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\nheader[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  text-align: left;\n}\n\nheader[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  float: right;\n  width: 50%;\n  text-align: right;\n}\n\nfooter[_ngcontent-%COMP%] {\n  float: left;\n  width: 80%;\n  padding: 2% 10%;\n  border-top: 3px solid grey;\n}\n\nheader[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\nsection[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 46%;\n  margin: 0% 2%;\n  padding: 0% 2%;\n  box-sizing: border-box;\n}\n\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 149px;\n  float: left;\n  width: 40%;\n  padding: 23px 2%;\n  margin: 13px 5%;\n  box-shadow: 0px 0px 2px #ccc;\n  text-align: center;\n  border-radius: 20px;\n  background: #fff;\n  box-sizing: border-box;\n}\n\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #1f77b4;\n}\n\nsection[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%] {\n  float: left;\n  width: 46%;\n  height: 500px;\n  margin: 1% 2%;\n  padding: 2%;\n  box-sizing: border-box;\n}\n\nsection.trisection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  float: left;\n  width: 30%;\n  height: 550px;\n  margin: 1% 1.5%;\n  padding: 1.5%;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 10px #ccc;\n  background: #fff;\n  box-sizing: border-box;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  float: left;\n  width: 46%;\n  height: 650px;\n  margin: 1% 2%;\n  padding: 2%;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 10px #ccc;\n  background: #fff;\n  box-sizing: border-box;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-size: 20px;\n  float: left;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n@media only screen and (max-width: 700px) {\n  header[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    margin: 0.5% 2%;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    margin: 2%;\n  }\n  header[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n  header[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    float: left;\n    width: 80%;\n    padding: 2% 10%;\n    border-top: 3px solid grey;\n    margin-top: 5%;\n  }\n\n  select[_ngcontent-%COMP%] {\n    border: 1px;\n    float: left;\n  }\n\n  section[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .pie[_ngcontent-%COMP%] {\n    margin-top: 5%;\n    float: left;\n    width: 96%;\n    margin: 2% li;\n    margin-width: 48%;\n  }\n\n  section[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    height: 750px;\n  }\n\n  section.trisection[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  section.trisection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    height: 550px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHJlbGl6L0Rlc2t0b3AvY292aWQxOS9jb3ZpZC1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2NhYWNoYXJ0L2NjYWFjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNNLGlCQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURFQTtFQUNNLGtCQUFBO0FDQ047O0FERUE7RUFDTSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDTjs7QURBTTtFQUFJLGNBQUE7RUFBZSxjQUFBO0VBQWdCLHlCQUFBO0FDS3pDOztBREpNO0VBQUksV0FBQTtFQUFZLFVBQUE7QUNRdEI7O0FEUE07RUFBUSxXQUFBO0VBQVksVUFBQTtFQUFXLGdCQUFBO0FDWXJDOztBRFhNO0VBQVEsZUFBQTtFQUFnQixZQUFBO0VBQWEsVUFBQTtFQUFXLGlCQUFBO0FDaUJ0RDs7QURmQTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDa0JOOztBRGZBO0VBQ00sZ0JBQUE7QUNrQk47O0FEZkE7RUFDTSxXQUFBO0VBQ0EsV0FBQTtBQ2tCTjs7QURqQk07RUFDTSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ21CWjs7QURqQlk7RUFDTSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0FDa0JsQjs7QURoQmtCO0VBQ00sZUFBQTtFQUNBLGNBQUE7QUNrQnhCOztBRGRNO0VBQ00sV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ2dCWjs7QURaWTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtBQ2FsQjs7QURUTTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtBQ1VaOztBRE5BO0VBQ00sZUFBQTtFQUNBLFdBQUE7QUNTTjs7QUROQTtFQUNNLGVBQUE7QUNTTjs7QUROQTtFQUNNO0lBQ00sV0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDU1Y7RURSVTtJQUFPLFdBQUE7SUFBWSxVQUFBO0lBQVcsVUFBQTtFQ2F4QztFRFpVO0lBQVEsV0FBQTtJQUFZLFdBQUE7SUFBWSxnQkFBQTtFQ2lCMUM7RURoQlU7SUFBUSxXQUFBO0lBQVksV0FBQTtJQUFZLGdCQUFBO0VDcUIxQzs7RURsQkk7SUFDTSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSwwQkFBQTtJQUNBLGNBQUE7RUNxQlY7O0VEbkJJO0lBQ00sV0FBQTtJQUNBLFdBQUE7RUNzQlY7O0VEbkJJO0lBQ00sY0FBQTtJQUNNLFdBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUVBLGlCQUFBO0VDcUJoQjs7RURoQkk7SUFDTSxXQUFBO0lBQ0EsV0FBQTtFQ21CVjtFRGxCVTtJQUNNLFdBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQ29CaEI7O0VEaEJJO0lBQ00sV0FBQTtJQUNBLFdBQUE7RUNtQlY7RURsQlU7SUFDTSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUNvQmhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50eHRyaWdodHtcbiAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubGFzdHB7XG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcbn1cblxuaGVhZGVye1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogOTYlO1xuICAgICAgbWFyZ2luOiAuNSUgMiU7XG4gICAgICBoMXsgY29sb3I6IzFmNzdiNDsgZm9udC1zaXplOiAyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxuICAgICAgaDJ7IGZsb2F0OmxlZnQ7IHdpZHRoOjUwJTsgfVxuICAgICAgLmFyZWExeyBmbG9hdDpsZWZ0OyB3aWR0aDo0OCU7IHRleHQtYWxpZ246bGVmdDt9XG4gICAgICAuYXJlYTJ7IG1hcmdpbi1sZWZ0OjIlOyBmbG9hdDpyaWdodDsgd2lkdGg6NTAlOyB0ZXh0LWFsaWduOnJpZ2h0O31cbn1cbmZvb3RlcntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIHBhZGRpbmc6IDIlIDEwJTtcbiAgICAgIGJvcmRlci10b3A6M3B4IHNvbGlkIGdyZXk7XG59XG5cbmhlYWRlcntcbiAgICAgIG1hcmdpbi10b3A6NTBweDtcbn1cblxuc2VjdGlvbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAua3Bpc3tcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICAgIG1hcmdpbjogMCUgMiU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwJSAyJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDlweDtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIzcHggMiU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEzcHggNSU7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAjY2NjO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC5udW1iZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMzEsIDExOSwgMTgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5waWV7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxJSAyJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgJi50cmlzZWN0aW9ue1xuICAgICAgICAgICAgYXJ0aWNsZXtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDEuNSU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjUlO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggI2NjYztcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGFydGljbGV7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxJSAyJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggI2NjYztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG59XG5cbnNlbGVjdHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnN7XG4gICAgICBmb250LXNpemU6IDM1cHhcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgaGVhZGVye1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgbWFyZ2luOiAuNSUgMiU7XG4gICAgICAgICAgICBoMSxoMnsgZmxvYXQ6bGVmdDsgd2lkdGg6OTYlOyBtYXJnaW46MiUgfVxuICAgICAgICAgICAgLmFyZWExeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmxlZnQ7fVxuICAgICAgICAgICAgLmFyZWEyeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmxlZnQ7fVxuICAgICAgfVxuXG4gICAgICBmb290ZXJ7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJSAxMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOjNweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdHtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggOyAgICAgICAgICAgXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiAua3BpcyxzZWN0aW9uIC5waWUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjoyJVxuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIHNlY3Rpb257XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYXJ0aWNsZXtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24udHJpc2VjdGlvbntcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhcnRpY2xle1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgIH1cblxufSIsIi50eHRyaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5sYXN0cCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbjogMC41JSAyJTtcbn1cbmhlYWRlciBoMSB7XG4gIGNvbG9yOiAjMWY3N2I0O1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmhlYWRlciBoMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuaGVhZGVyIC5hcmVhMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaGVhZGVyIC5hcmVhMiB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuZm9vdGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIlIDEwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyZXk7XG59XG5cbmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5rcGlzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luOiAwJSAyJTtcbiAgcGFkZGluZzogMCUgMiU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5zZWN0aW9uIC5rcGlzIGxpIHtcbiAgaGVpZ2h0OiAxNDlweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDIzcHggMiU7XG4gIG1hcmdpbjogMTNweCA1JTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuc2VjdGlvbiAua3BpcyBsaSAubnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzFmNzdiNDtcbn1cbnNlY3Rpb24gLnBpZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDElIDIlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnNlY3Rpb24udHJpc2VjdGlvbiBhcnRpY2xlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbjogMSUgMS41JTtcbiAgcGFkZGluZzogMS41JTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5zZWN0aW9uIGFydGljbGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgbWFyZ2luOiAxJSAyJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5zZWxlY3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMC41JSAyJTtcbiAgfVxuICBoZWFkZXIgaDEsIGhlYWRlciBoMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIGhlYWRlciAuYXJlYTEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgaGVhZGVyIC5hcmVhMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiAyJSAxMCU7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyZXk7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgc2VjdGlvbiAua3Bpcywgc2VjdGlvbiAucGllIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMiUgbGk7XG4gICAgbWFyZ2luLXdpZHRoOiA0OCU7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBzZWN0aW9uIGFydGljbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuXG4gIHNlY3Rpb24udHJpc2VjdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgc2VjdGlvbi50cmlzZWN0aW9uIGFydGljbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CCAAchartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ccaachart',
                templateUrl: './ccaachart.component.html',
                styleUrls: ['./ccaachart.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { GraphA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphA", { static: true }]
        }], GraphB: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphB", { static: true }]
        }], GraphE0: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE0", { static: true }]
        }], GraphE1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE1", { static: true }]
        }], GraphE2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE2", { static: true }]
        }], GraphE3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE3", { static: true }]
        }], GraphE4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE4", { static: true }]
        }], GraphE5: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE5", { static: true }]
        }], GraphE6: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE6", { static: true }]
        }] }); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/atreliz/Desktop/covid19/covid-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map