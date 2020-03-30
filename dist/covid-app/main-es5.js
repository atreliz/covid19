function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/ccaachart/ccaachart.component */
    "./src/app/components/ccaachart/ccaachart.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covid-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ccaachart");
        }
      },
      directives: [_components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_1__["CCAAchartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/ccaachart/ccaachart.component */
    "./src/app/components/ccaachart/ccaachart.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /*
    import * as PlotlyJS from 'plotly.js/dist/plotly.js';
    import { PlotlyModule } from 'angular-plotly.js';
    
    PlotlyModule.plotlyjs = PlotlyJS;
    */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_6__["CCAAchartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_ccaachart_ccaachart_component__WEBPACK_IMPORTED_MODULE_6__["CCAAchartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ccaachart/ccaachart.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/ccaachart/ccaachart.component.ts ***!
    \*************************************************************/

  /*! exports provided: CCAAchartComponent */

  /***/
  function srcAppComponentsCcaachartCcaachartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CCAAchartComponent", function () {
      return CCAAchartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["GraphA"];
    var _c1 = ["GraphB"];

    function CCAAchartComponent_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ccaa_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ccaa_r3.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ccaa_r3.name, " ");
      }
    }

    var CCAAchartComponent = /*#__PURE__*/function () {
      function CCAAchartComponent(http) {
        _classCallCheck(this, CCAAchartComponent);

        this.http = http;
        this.madridDataFull = {};
        this.myccaadata = [];
        this.jsonResumeSpain = [];
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
          responseType: 'text'
        };
      }

      _createClass(CCAAchartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.myccaadata=ccaadata;
          this.options = [{
            "code": "AN",
            name: "Andalucia"
          }, {
            "code": "AR",
            name: "Aragon"
          }, {
            "code": "AS",
            name: "Asturias"
          }, {
            "code": "IB",
            name: "Islas Baleares"
          }, {
            "code": "CN",
            name: "Canarias"
          }, {
            "code": "CB",
            name: "Cantabria"
          }, {
            "code": "CM",
            name: "Castilla la Mancha"
          }, {
            "code": "CL",
            name: "Castilla y Leon"
          }, {
            "code": "CT",
            name: "Cataluña"
          }, {
            "code": "CE",
            name: "Ceuta"
          }, {
            "code": "VC",
            name: "C.Valenciana"
          }, {
            "code": "EX",
            name: "Extremadura"
          }, {
            "code": "GA",
            name: "Galicia"
          }, {
            "code": "MD",
            name: "Madrid"
          }, {
            "code": "ME",
            name: "Melilla"
          }, {
            "code": "MC",
            name: "Murcia"
          }, {
            "code": "NC",
            name: "Navarra"
          }, {
            "code": "PV",
            name: "Pais Vasco"
          }, {
            "code": "RI",
            name: "Rioja"
          }]; //this.selectedCCAA = "MD";
          //this.massageData("MD","create");

          this.getCSV();
          this.getSpainCSV();
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          this.massageData(value, "update");
        }
      }, {
        key: "csvToJSON",
        value: function csvToJSON(csv) {
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
        } //Get resume españa CSV

      }, {
        key: "getSpainCSV",
        value: function getSpainCSV() {
          var _this = this;

          var localUrl = "/assets/data/data.csv";
          this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
          }).subscribe(function (data) {
            console.log("----CSV ", data);
            _this.jsonResumeSpain = _this.csvToJSON(data)[0];
          });
        } //get fulll CSV

      }, {
        key: "getCSV",
        value: function getCSV() {
          var _this2 = this;

          var localUrl = "/assets/data/serie_historica_acumulados.csv";
          this.http.get(localUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({}),
            responseType: 'text'
          }).subscribe(function (data) {
            console.log("----CSV ", data);

            _this2.jsonReadyFull(_this2.csvToJSON(data));
          });
        }
      }, {
        key: "jsonReadyFull",
        value: function jsonReadyFull(data) {
          console.log("ready---", data);
          this.myccaadata = data;
          this.selectedCCAA = "MD";
          this.massageData("MD", "create");
        }
      }, {
        key: "massageData",
        value: function massageData(ccaacode, mode) {
          console.log("load ", ccaacode);
          this.fullData = this.myccaadata;
          var cleanDataOneCCAA = this.fullData.filter(function (item) {
            return item['CCAA Codigo ISO'] == ccaacode;
          });
          this.madridData = cleanDataOneCCAA.slice(10);
          console.log("clean data", this.madridData);
          this.madridDataFull.fechas = this.madridData.map(function (item) {
            return item.Fecha;
          });
          this.madridDataFull.casos = this.madridData.map(function (item) {
            return item.Casos != "" ? item.Casos : 0;
          });
          this.madridDataFull.hospitalizados = this.madridData.map(function (item) {
            return item.Hospitalizados != "" ? item.Hospitalizados : 0;
          });
          this.madridDataFull.uci = this.madridData.map(function (item) {
            return item.UCI != "" ? item.UCI : 0;
          });
          this.madridDataFull.fallecidos = this.madridData.map(function (item) {
            return item.Fallecidos != "" ? item.Fallecidos : 0;
          }); //calculate Casos por dia

          this.madridDataFull.casosDia = [];

          for (var i = 0; i < this.madridDataFull.casos.length; i++) {
            var actual = this.madridDataFull.casos[i];
            var siguiente = this.madridDataFull.casos[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.casosDia.push(resta);
          } //calculate fallecidos por dia


          this.madridDataFull.fallecidosDia = [];

          for (var i = 0; i < this.madridDataFull.fallecidos.length; i++) {
            var actual = this.madridDataFull.fallecidos[i];
            var siguiente = this.madridDataFull.fallecidos[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.fallecidosDia.push(resta);
          } //calculate hospitalizados por dia


          this.madridDataFull.hospitalizadosDia = [];

          for (var i = 0; i < this.madridDataFull.hospitalizados.length; i++) {
            var actual = this.madridDataFull.hospitalizados[i];
            var siguiente = this.madridDataFull.hospitalizados[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.hospitalizadosDia.push(resta);
          } //calculate uci por dia


          this.madridDataFull.uciDia = [];

          for (var i = 0; i < this.madridDataFull.uci.length; i++) {
            var actual = this.madridDataFull.uci[i];
            var siguiente = this.madridDataFull.uci[i + 1];
            var resta = siguiente - actual;
            this.madridDataFull.uciDia.push(resta);
          }

          console.log("this.madridDataFull.", this.madridDataFull); //draw charts

          if (mode === "create") {
            console.log("CREATE");
            this.plotGraphA();
            this.plotGraphB();
          } else {
            console.log("UPDATE");
            this.plotGraphAUpdate();
            this.plotGraphBUpdate();
          }
        }
      }, {
        key: "plotGraphA",
        value: function plotGraphA() {
          Plotly.newPlot(this.GraphA.nativeElement, [{
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.casos,
            mode: 'lines',
            name: 'Casos acumulados'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.fallecidos,
            mode: 'lines',
            name: 'Fallecidos acumulados'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.hospitalizados,
            mode: 'lines',
            name: 'Hopitalizados acumulados'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.uci,
            mode: 'lines',
            name: 'UCI acumulados'
          }], {
            margin: {
              t: 0
            }
          }, {
            responsive: true,
            displayModeBar: false
          });
        }
      }, {
        key: "plotGraphB",
        value: function plotGraphB() {
          Plotly.newPlot(this.GraphB.nativeElement, [{
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.casosDia,
            type: 'bar',
            name: 'Casos cada dia'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.fallecidosDia,
            type: 'bar',
            name: 'Fallecidos al dia'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.hospitalizadosDia,
            type: 'bar',
            name: 'Hopitalizados al dia'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.uciDia,
            type: 'bar',
            name: 'UCI al dia'
          }], {
            margin: {
              t: 0
            }
          }, {
            responsive: true,
            displayModeBar: false
          });
        }
      }, {
        key: "plotGraphAUpdate",
        value: function plotGraphAUpdate() {
          console.log("plotGraphAUpdate");
          Plotly.react(this.GraphA.nativeElement, [{
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.casos,
            mode: 'lines',
            name: 'Casos acumulados'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.fallecidos,
            mode: 'lines',
            name: 'Fallecidos acumulados'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.hospitalizados,
            mode: 'lines',
            name: 'Hopitalizados acumulados'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.uci,
            mode: 'lines',
            name: 'UCI acumulados'
          }], {
            margin: {
              t: 0
            }
          }, {
            responsive: true,
            showEditInChartStudio: false
          });
        }
      }, {
        key: "plotGraphBUpdate",
        value: function plotGraphBUpdate() {
          Plotly.react(this.GraphB.nativeElement, [{
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.casosDia,
            type: 'bar',
            name: 'Casos cada dia'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.fallecidosDia,
            type: 'bar',
            name: 'Fallecidos al dia'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.hospitalizadosDia,
            type: 'bar',
            name: 'Hopitalizados al dia'
          }, {
            x: this.madridDataFull.fechas,
            y: this.madridDataFull.uciDia,
            type: 'bar',
            name: 'UCI al dia'
          }], {
            margin: {
              t: 0
            }
          }, {
            responsive: true,
            showEditInChartStudio: false
          });
        }
      }]);

      return CCAAchartComponent;
    }();

    CCAAchartComponent.ɵfac = function CCAAchartComponent_Factory(t) {
      return new (t || CCAAchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CCAAchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CCAAchartComponent,
      selectors: [["app-ccaachart"]],
      viewQuery: function CCAAchartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphA = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.GraphB = _t.first);
        }
      },
      decls: 78,
      vars: 19,
      consts: [[1, "area1"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "area2"], ["href", "https://covid19.isciii.es/"], [1, "kpis"], [1, "number"], [1, "explain"], ["id", "GraphA"], ["GraphA", ""], ["id", "GraphB"], ["GraphB", ""], [3, "value"]],
      template: function CCAAchartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Influencia COVID 19 por comunidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CCAAchartComponent_Template_select_ngModelChange_4_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CCAAchartComponent_option_5_Template, 2, 2, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "https://covid19.isciii.es/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Espa\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Resumen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ultimas 24H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total de casos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total de fallecidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Total de recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total de hospitalizados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "COVID 19: Cantidades totales incrementales (valores oficiales)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Estas gr\xE1ficas siempre suben por que a cada d\xEDa se suman los datos del anterior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Lo que hay que fijarse es la pendiente, cuanto mas plana, menor sera el numero de nuevos casos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "COVID 19: Cantidades por d\xEDa (valores calculados)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Estas gr\xE1ficas suben y bajan, por que son los casos totales de cada d\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Lo que hay que fijarse es si las columnas van bajando seg\xFAn pasan los d\xEDas, lo cual indicar\xEDa una mejora");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "NOTA publicada en la fuente de datos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " El objetivo de los datos que se publican en esta web es saber el n\xFAmero de casos acumulados a la fecha y que por tanto no se puede deducir que la diferencia entre un d\xEDa y el anterior es el n\xFAmero de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores Cualquier inferencia que se haga sobre las diferencias de un d\xEDa para otro deben hacerse con precauci\xF3n y son \xFAnicamente la responsabilidad el autor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "NOTA de este autor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " estas gr\xE1ficas usan los datos oficiales compartidos por el gobierno a la poblaci\xF3n. Seg\xFAn el rigor con que se han tomado esos datos, las gr\xE1ficas por d\xEDas debe tomarse como una aproximaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Made by ATL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCCAA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Fuente de datos oficial (", ctx.jsonResumeSpain.Fecha, " - ", ctx.jsonResumeSpain.Hora, "): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 9, ctx.jsonResumeSpain.Casos24h));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.jsonResumeSpain.Casos));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 13, ctx.jsonResumeSpain.Defunciones));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 15, ctx.jsonResumeSpain.Recuperados));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 17, ctx.jsonResumeSpain.Hospitalizados));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: ["header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  float: left;\n  width: 96%;\n  margin: 0.5% 2%;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\nheader[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  float: right;\n  width: 50%;\n  text-align: right;\n}\nsection[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%] {\n  list-style-type: none;\n  float: left;\n  width: 96%;\n  margin: 0% 2%;\n  padding: 0%;\n}\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  width: 14.6%;\n  padding: 1%;\n  margin: 1%;\n  box-shadow: 0px 0px 2px #ccc;\n  text-align: center;\n  border-radius: 20px;\n  box-sizing: border-box;\n}\nsection[_ngcontent-%COMP%]   .kpis[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #1f77b4;\n}\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  float: left;\n  width: 46%;\n  height: 650px;\n  margin: 1% 2%;\n  padding: 2%;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 10px #ccc;\n  box-sizing: border-box;\n}\nselect[_ngcontent-%COMP%] {\n  font-size: 16px;\n  float: right;\n}\n@media only screen and (max-width: 700px) {\n  header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    margin: 0.5% 2%;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n  header[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n\n  select[_ngcontent-%COMP%] {\n    font-size: 16px;\n    float: left;\n  }\n\n  section[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    height: 750px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHJlbGl6L0Rlc2t0b3AvY292aWQxOS9jb3ZpZC1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2NhYWNoYXJ0L2NjYWFjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQU07RUFBSSxXQUFBO0VBQVksVUFBQTtBQ0l0QjtBREhNO0VBQVEsV0FBQTtFQUFZLFVBQUE7RUFBVyxnQkFBQTtBQ1FyQztBRFBNO0VBQVEsZUFBQTtFQUFnQixZQUFBO0VBQWEsVUFBQTtFQUFXLGlCQUFBO0FDYXREO0FEVkE7RUFDTSxXQUFBO0VBQ0EsV0FBQTtBQ2FOO0FEWk07RUFDTSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNjWjtBRFpZO0VBQ00sV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDY2xCO0FEYmtCO0VBQ00sZUFBQTtFQUNBLGNBQUE7QUNleEI7QURYTTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBRUEsc0JBQUE7QUNZWjtBRFJBO0VBQ00sZUFBQTtFQUNGLFlBQUE7QUNXSjtBRFJBO0VBQ007SUFDTSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUNXVjtFRFZVO0lBQUksV0FBQTtJQUFZLFdBQUE7RUNjMUI7RURiVTtJQUFRLFdBQUE7SUFBWSxXQUFBO0lBQVksZ0JBQUE7RUNrQjFDO0VEakJVO0lBQVEsV0FBQTtJQUFZLFdBQUE7SUFBWSxnQkFBQTtFQ3NCMUM7O0VEcEJJO0lBQ00sZUFBQTtJQUNBLFdBQUE7RUN1QlY7O0VEckJJO0lBQ00sV0FBQTtJQUNBLFdBQUE7RUN3QlY7RUR2QlU7SUFDTSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUN5QmhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIsZm9vdGVye1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogOTYlO1xuICAgICAgbWFyZ2luOiAuNSUgMiU7XG4gICAgICBoMXsgZmxvYXQ6bGVmdDsgd2lkdGg6NTAlOyB9XG4gICAgICAuYXJlYTF7IGZsb2F0OmxlZnQ7IHdpZHRoOjQ4JTsgdGV4dC1hbGlnbjpsZWZ0O31cbiAgICAgIC5hcmVhMnsgbWFyZ2luLWxlZnQ6MiU7IGZsb2F0OnJpZ2h0OyB3aWR0aDo1MCU7IHRleHQtYWxpZ246cmlnaHQ7fVxufVxuXG5zZWN0aW9ue1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5rcGlze1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgbWFyZ2luOiAwJSAyJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xuXG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0LjYlO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2NjYztcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgLm51bWJlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigzMSwgMTE5LCAxODApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJ0aWNsZXtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgICAgICAgIGhlaWdodDogNjUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDElIDIlO1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjY2NjO1xuXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxufVxuXG5zZWxlY3R7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBoZWFkZXIsZm9vdGVye1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgbWFyZ2luOiAuNSUgMiU7XG4gICAgICAgICAgICBoMXsgZmxvYXQ6bGVmdDsgd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgLmFyZWExeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmxlZnQ7fVxuICAgICAgICAgICAgLmFyZWEyeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB0ZXh0LWFsaWduOmxlZnQ7fVxuICAgICAgfVxuICAgICAgc2VsZWN0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICBzZWN0aW9ue1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFydGljbGV7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG59IiwiaGVhZGVyLCBmb290ZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwLjUlIDIlO1xufVxuaGVhZGVyIGgxLCBmb290ZXIgaDEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cbmhlYWRlciAuYXJlYTEsIGZvb3RlciAuYXJlYTEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmhlYWRlciAuYXJlYTIsIGZvb3RlciAuYXJlYTIge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnNlY3Rpb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5rcGlzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwJSAyJTtcbiAgcGFkZGluZzogMCU7XG59XG5zZWN0aW9uIC5rcGlzIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNC42JTtcbiAgcGFkZGluZzogMSU7XG4gIG1hcmdpbjogMSU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnNlY3Rpb24gLmtwaXMgbGkgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMxZjc3YjQ7XG59XG5zZWN0aW9uIGFydGljbGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgbWFyZ2luOiAxJSAyJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5zZWxlY3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICBoZWFkZXIsIGZvb3RlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBtYXJnaW46IDAuNSUgMiU7XG4gIH1cbiAgaGVhZGVyIGgxLCBmb290ZXIgaDEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAuYXJlYTEsIGZvb3RlciAuYXJlYTEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgaGVhZGVyIC5hcmVhMiwgZm9vdGVyIC5hcmVhMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgc2VjdGlvbiBhcnRpY2xlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTYlO1xuICAgIGhlaWdodDogNzUwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CCAAchartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ccaachart',
          templateUrl: './ccaachart.component.html',
          styleUrls: ['./ccaachart.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        GraphA: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["GraphA", {
            "static": true
          }]
        }],
        GraphB: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["GraphB", {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/atreliz/Desktop/covid19/covid-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map