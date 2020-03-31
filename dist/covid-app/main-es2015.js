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
const _c2 = ["GraphE1"];
const _c3 = ["GraphE2"];
const _c4 = ["GraphE3"];
function CCAAchartComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ccaa_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ccaa_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ccaa_r6.name, " ");
} }
class CCAAchartComponent {
    constructor(http) {
        this.http = http;
        this.madridDataFull = {};
        this.myccaadata = [];
        this.jsonResumeSpain = [];
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
    //Get resume españa CSV
    getSpainCSV() {
        var localUrl = "/assets/data/data.csv";
        this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        })
            .subscribe(data => {
            console.log("----CSV ", data);
            this.jsonResumeSpain = this.csvToJSON(data)[0];
        });
    }
    //get fulll CSV
    getCSV() {
        var localUrl = "/assets/data/serie_historica_acumulados.csv";
        this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
        })
            .subscribe(data => {
            console.log("----CSV ", data);
            this.jsonReadyFull(this.csvToJSON(data));
        });
    }
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
    getRegionsCSV() {
        var localUrl = "/assets/data/ccaa.csv";
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
        });
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
}
CCAAchartComponent.ɵfac = function CCAAchartComponent_Factory(t) { return new (t || CCAAchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CCAAchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CCAAchartComponent, selectors: [["app-ccaachart"]], viewQuery: function CCAAchartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphA = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphB = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphE3 = _t.first);
    } }, decls: 98, vars: 19, consts: [[1, "txtright"], ["href", "https://covid19.isciii.es/"], [1, "kpis"], [1, "number"], [1, "trisection"], ["id", "GraphE1"], ["GraphE1", ""], ["id", "GraphE2"], ["GraphE2", ""], ["id", "GraphE3"], ["GraphE3", ""], [1, "area1"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "explain"], ["id", "GraphA"], ["GraphA", ""], ["id", "GraphB"], ["GraphB", ""], [3, "value"]], template: function CCAAchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Influencia COVID 19 distribuidas por comunidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Fuente de datos oficial: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "https://covid19.isciii.es/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Espa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Resumen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ultimas 24H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total de casos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Total de fallecidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total de recuperados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Total de hospitalizados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Comunidades por casos acumulados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Comunidades en las ultimas 24H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Comunidades por Inc.14d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Selecciona tu comunidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CCAAchartComponent_Template_select_ngModelChange_66_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CCAAchartComponent_option_67_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "COVID 19: Cantidades totales incrementales (valores oficiales)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Estas gr\u00E1ficas siempre suben por que a cada d\u00EDa se suman los datos del anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Lo que hay que fijarse es la pendiente, cuanto mas plana, menor sera el numero de nuevos casos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "COVID 19: Cantidades por d\u00EDa (valores calculados)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Estas gr\u00E1ficas suben y bajan, por que son los casos totales de cada d\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Lo que hay que fijarse es si las columnas van bajando seg\u00FAn pasan los d\u00EDas, lo cual indicar\u00EDa una mejora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "NOTA publicada en la fuente de datos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " El objetivo de los datos que se publican en esta web es saber el n\u00FAmero de casos acumulados a la fecha y que por tanto no se puede deducir que la diferencia entre un d\u00EDa y el anterior es el n\u00FAmero de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores Cualquier inferencia que se haga sobre las diferencias de un d\u00EDa para otro deben hacerse con precauci\u00F3n y son \u00FAnicamente la responsabilidad el autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "NOTA de este autor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " estas gr\u00E1ficas usan los datos oficiales compartidos por el gobierno a la poblaci\u00F3n. Seg\u00FAn el rigor con que se han tomado esos datos, las gr\u00E1ficas por d\u00EDas debe tomarse como una aproximaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Made by ATL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Ultima actualizaci\u00F3n: (", ctx.jsonResumeSpain.Fecha, " - ", ctx.jsonResumeSpain.Hora, "h) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx.jsonResumeSpain.Casos24h));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 11, ctx.jsonResumeSpain.Casos));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 13, ctx.jsonResumeSpain.Defunciones));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 15, ctx.jsonResumeSpain.Recuperados));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 17, ctx.jsonResumeSpain.Hospitalizados));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCCAA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".txtright[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 0px;\n}\n\nheader[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  float: left;\n  width: 96%;\n  margin: 0.5% 2%;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1f77b4;\n  font-size: 2em;\n  text-transform: uppercase;\n}\n\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\n\nheader[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  text-align: left;\n}\n\nheader[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  float: right;\n  width: 50%;\n  text-align: right;\n}\n\nheader[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\nsection[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 96%;\n  margin: 0% 2%;\n  padding: 0%;\n}\n\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  width: 14.6%;\n  padding: 1%;\n  margin: 1%;\n  box-shadow: 0px 0px 2px #ccc;\n  text-align: center;\n  border-radius: 20px;\n  box-sizing: border-box;\n  background: #fff;\n}\n\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #1f77b4;\n}\n\nsection.trisection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  float: left;\n  width: 30%;\n  height: 550px;\n  margin: 1% 1.5%;\n  padding: 1.5%;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 10px #ccc;\n  background: #fff;\n  box-sizing: border-box;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  float: left;\n  width: 46%;\n  height: 650px;\n  margin: 1% 2%;\n  padding: 2%;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 10px #ccc;\n  background: #fff;\n  box-sizing: border-box;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-size: 20px;\n  float: left;\n}\n\n@media only screen and (max-width: 700px) {\n  header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    margin: 0.5% 2%;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n  header[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n\n  select[_ngcontent-%COMP%] {\n    font-size: 16px;\n    float: left;\n  }\n\n  section[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    height: 750px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHJlbGl6L0Rlc2t0b3AvY292aWQxOS9jb3ZpZC1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2NhYWNoYXJ0L2NjYWFjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNNLGlCQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURHQTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FOOztBRENNO0VBQUksY0FBQTtFQUFlLGNBQUE7RUFBZ0IseUJBQUE7QUNJekM7O0FESE07RUFBSSxXQUFBO0VBQVksVUFBQTtBQ090Qjs7QUROTTtFQUFRLFdBQUE7RUFBWSxVQUFBO0VBQVcsZ0JBQUE7QUNXckM7O0FEVk07RUFBUSxlQUFBO0VBQWdCLFlBQUE7RUFBYSxVQUFBO0VBQVcsaUJBQUE7QUNnQnREOztBRGJBO0VBQ00sZ0JBQUE7QUNnQk47O0FEYkE7RUFDTSxXQUFBO0VBQ0EsV0FBQTtBQ2dCTjs7QURmTTtFQUNNLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ2lCWjs7QURmWTtFQUNNLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDaUJsQjs7QURoQmtCO0VBQ00sZUFBQTtFQUNBLGNBQUE7QUNrQnhCOztBRGJZO0VBQ00sV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0FDY2xCOztBRFZNO0VBQ00sV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0FDV1o7O0FEUEE7RUFDTSxlQUFBO0VBQ0EsV0FBQTtBQ1VOOztBRFBBO0VBQ007SUFDTSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUNVVjtFRFRVO0lBQUksV0FBQTtJQUFZLFdBQUE7RUNhMUI7RURaVTtJQUFRLFdBQUE7SUFBWSxXQUFBO0lBQVksZ0JBQUE7RUNpQjFDO0VEaEJVO0lBQVEsV0FBQTtJQUFZLFdBQUE7SUFBWSxnQkFBQTtFQ3FCMUM7O0VEbkJJO0lBQ00sZUFBQTtJQUNBLFdBQUE7RUNzQlY7O0VEcEJJO0lBQ00sV0FBQTtJQUNBLFdBQUE7RUN1QlY7RUR0QlU7SUFDTSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUN3QmhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50eHRyaWdodHtcbiAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmhlYWRlcixmb290ZXJ7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiA5NiU7XG4gICAgICBtYXJnaW46IC41JSAyJTtcbiAgICAgIGgxeyBjb2xvcjojMWY3N2I0OyBmb250LXNpemU6IDJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XG4gICAgICBoMnsgZmxvYXQ6bGVmdDsgd2lkdGg6NTAlOyB9XG4gICAgICAuYXJlYTF7IGZsb2F0OmxlZnQ7IHdpZHRoOjQ4JTsgdGV4dC1hbGlnbjpsZWZ0O31cbiAgICAgIC5hcmVhMnsgbWFyZ2luLWxlZnQ6MiU7IGZsb2F0OnJpZ2h0OyB3aWR0aDo1MCU7IHRleHQtYWxpZ246cmlnaHQ7fVxufVxuXG5oZWFkZXJ7XG4gICAgICBtYXJnaW4tdG9wOjUwcHg7XG59XG5cbnNlY3Rpb257XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmtwaXN7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBtYXJnaW46IDAlIDIlO1xuICAgICAgICAgICAgcGFkZGluZzogMCU7XG5cbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTQuNiU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMSU7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAjY2NjO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigzMSwgMTE5LCAxODApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi50cmlzZWN0aW9ue1xuICAgICAgICAgICAgYXJ0aWNsZXtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDElIDEuNSU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjUlO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggI2NjYztcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGFydGljbGV7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA0NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxJSAyJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggI2NjYztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG59XG5cbnNlbGVjdHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBoZWFkZXIsZm9vdGVye1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgbWFyZ2luOiAuNSUgMiU7XG4gICAgICAgICAgICBoMXsgZmxvYXQ6bGVmdDsgd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgLmFyZWExeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmxlZnQ7fVxuICAgICAgICAgICAgLmFyZWEyeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmxlZnQ7fVxuICAgICAgfVxuICAgICAgc2VsZWN0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICBzZWN0aW9ue1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFydGljbGV7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG59IiwiLnR4dHJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaGVhZGVyLCBmb290ZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwLjUlIDIlO1xufVxuaGVhZGVyIGgxLCBmb290ZXIgaDEge1xuICBjb2xvcjogIzFmNzdiNDtcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5oZWFkZXIgaDIsIGZvb3RlciBoMiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuaGVhZGVyIC5hcmVhMSwgZm9vdGVyIC5hcmVhMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaGVhZGVyIC5hcmVhMiwgZm9vdGVyIC5hcmVhMiB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuc2VjdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24gLmtwaXMge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAlIDIlO1xuICBwYWRkaW5nOiAwJTtcbn1cbnNlY3Rpb24gLmtwaXMgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE0LjYlO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuc2VjdGlvbiAua3BpcyBsaSAubnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzFmNzdiNDtcbn1cbnNlY3Rpb24udHJpc2VjdGlvbiBhcnRpY2xlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbjogMSUgMS41JTtcbiAgcGFkZGluZzogMS41JTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5zZWN0aW9uIGFydGljbGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgbWFyZ2luOiAxJSAyJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5zZWxlY3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGhlYWRlciwgZm9vdGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMC41JSAyJTtcbiAgfVxuICBoZWFkZXIgaDEsIGZvb3RlciBoMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5hcmVhMSwgZm9vdGVyIC5hcmVhMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBoZWFkZXIgLmFyZWEyLCBmb290ZXIgLmFyZWEyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBzZWN0aW9uIGFydGljbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxufSJdfQ== */"] });
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
        }], GraphE1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE1", { static: true }]
        }], GraphE2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE2", { static: true }]
        }], GraphE3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["GraphE3", { static: true }]
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