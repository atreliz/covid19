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


    var _data_caadata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../data/caadata.json */
    "./src/app/data/caadata.json");

    var _data_caadata_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../data/caadata.json */
    "./src/app/data/caadata.json", 1);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["GraphA"];
    var _c1 = ["GraphB"];

    function CCAAchartComponent_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

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
      }

      _createClass(CCAAchartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myccaadata = _data_caadata_json__WEBPACK_IMPORTED_MODULE_1___namespace;
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
          }];
          this.selectedCCAA = "MD";
          this.massageData("MD", "create"); //this.getCSV() //CORS ERROR :(
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          this.massageData(value, "update");
        }
      }, {
        key: "getCSV",
        value: function getCSV() {
          var localUrl = "https://covid19.isciii.es/resources/serie_historica_acumulados.csv";
          this.http.get(localUrl).subscribe(function (data) {
            console.log("CSV ", data);
          });
        }
      }, {
        key: "massageData",
        value: function massageData(ccaacode, mode) {
          console.log("load ", ccaacode);
          this.fullData = this.myccaadata["default"];
          this.madridData = this.fullData.filter(function (item) {
            return item['CCAA Codigo ISO'] == ccaacode;
          });
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
            showEditInChartStudio: false
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
            showEditInChartStudio: false
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
      return new (t || CCAAchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
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
      decls: 41,
      vars: 2,
      consts: [[1, "area1"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "area2"], ["href", "https://covid19.isciii.es/"], [1, "explain"], ["id", "GraphA"], ["GraphA", ""], ["id", "GraphB"], ["GraphB", ""], [3, "value"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fuente de datos oficial(28/03/2020): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "https://covid19.isciii.es/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "COVID 19: Cantidades totales incrementales (valores oficiales)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Estas gr\xE1ficas siempre suben por que a cada d\xEDa se suman los datos del anterior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lo que hay que fijarse es la pendiente, cuanto mas plana, menor sera el numero de nuevos casos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "COVID 19: Cantidades por d\xEDa (valores calculados)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Estas gr\xE1ficas suben y bajan, por que son los casos totales de cada d\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Lo que hay que fijarse es si las columnas van bajando seg\xFAn pasan los d\xEDas, lo cual indicar\xEDa una mejora");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NOTA publicada en la fuente de datos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " El objetivo de los datos que se publican en esta web es saber el n\xFAmero de casos acumulados a la fecha y que por tanto no se puede deducir que la diferencia entre un d\xEDa y el anterior es el n\xFAmero de casos nuevos ya que esos casos pueden haber sido recuperados de fechas anteriores Cualquier inferencia que se haga sobre las diferencias de un d\xEDa para otro deben hacerse con precauci\xF3n y son \xFAnicamente la responsabilidad el autor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "NOTA de este autor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " estas gr\xE1ficas usan los datos oficiales compartidos por el gobierno a la poblaci\xF3n. Seg\xFAn el rigor con que se han tomado esos datos, las gr\xE1ficas por d\xEDas debe tomarse como una aproximaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Made by ATL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCCAA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: ["header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  float: left;\n  width: 96%;\n  margin: 0.5% 2%;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n}\nheader[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  float: right;\n  width: 50%;\n  text-align: right;\n}\nsection[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  float: left;\n  width: 46%;\n  height: 650px;\n  margin: 1% 2%;\n  padding: 2%;\n  border-radius: 20px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 10px #ccc;\n  box-sizing: border-box;\n}\nselect[_ngcontent-%COMP%] {\n  font-size: 16px;\n  float: right;\n}\n@media only screen and (max-width: 700px) {\n  header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    margin: 0.5% 2%;\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area1[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n  header[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .area2[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    text-align: left;\n  }\n\n  select[_ngcontent-%COMP%] {\n    font-size: 16px;\n    float: left;\n  }\n\n  section[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n  }\n  section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    float: left;\n    width: 96%;\n    height: 750px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHJlbGl6L0Rlc2t0b3AvY292aWQxOS9jb3ZpZC1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NjYWFjaGFydC9jY2FhY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2NhYWNoYXJ0L2NjYWFjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQU07RUFBSSxXQUFBO0VBQVksVUFBQTtBQ0l0QjtBREhNO0VBQVEsV0FBQTtFQUFZLFVBQUE7RUFBVyxnQkFBQTtBQ1FyQztBRFBNO0VBQVEsZUFBQTtFQUFnQixZQUFBO0VBQWEsVUFBQTtFQUFXLGlCQUFBO0FDYXREO0FEVkE7RUFDTSxXQUFBO0VBQ0EsV0FBQTtBQ2FOO0FEWk07RUFDTSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUVBLHNCQUFBO0FDYVo7QURUQTtFQUNNLGVBQUE7RUFDRixZQUFBO0FDWUo7QURUQTtFQUNNO0lBQ00sV0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDWVY7RURYVTtJQUFJLFdBQUE7SUFBWSxXQUFBO0VDZTFCO0VEZFU7SUFBUSxXQUFBO0lBQVksV0FBQTtJQUFZLGdCQUFBO0VDbUIxQztFRGxCVTtJQUFRLFdBQUE7SUFBWSxXQUFBO0lBQVksZ0JBQUE7RUN1QjFDOztFRHJCSTtJQUNNLGVBQUE7SUFDQSxXQUFBO0VDd0JWOztFRHRCSTtJQUNNLFdBQUE7SUFDQSxXQUFBO0VDeUJWO0VEeEJVO0lBQ00sV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VDMEJoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jY2FhY2hhcnQvY2NhYWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLGZvb3RlcntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDk2JTtcbiAgICAgIG1hcmdpbjogLjUlIDIlO1xuICAgICAgaDF7IGZsb2F0OmxlZnQ7IHdpZHRoOjUwJTsgfVxuICAgICAgLmFyZWExeyBmbG9hdDpsZWZ0OyB3aWR0aDo0OCU7IHRleHQtYWxpZ246bGVmdDt9XG4gICAgICAuYXJlYTJ7IG1hcmdpbi1sZWZ0OjIlOyBmbG9hdDpyaWdodDsgd2lkdGg6NTAlOyB0ZXh0LWFsaWduOnJpZ2h0O31cbn1cblxuc2VjdGlvbntcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhcnRpY2xle1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMSUgMiU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNjY2M7XG5cbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG59XG5cbnNlbGVjdHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgIGhlYWRlcixmb290ZXJ7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBtYXJnaW46IC41JSAyJTtcbiAgICAgICAgICAgIGgxeyBmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyB9XG4gICAgICAgICAgICAuYXJlYTF7IGZsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7IHRleHQtYWxpZ246bGVmdDt9XG4gICAgICAgICAgICAuYXJlYTJ7IGZsb2F0OmxlZnQ7IHdpZHRoOjEwMCU7IHRleHQtYWxpZ246bGVmdDt9XG4gICAgICB9XG4gICAgICBzZWxlY3R7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb257XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYXJ0aWNsZXtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICB9XG5cbn0iLCJoZWFkZXIsIGZvb3RlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAuNSUgMiU7XG59XG5oZWFkZXIgaDEsIGZvb3RlciBoMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xufVxuaGVhZGVyIC5hcmVhMSwgZm9vdGVyIC5hcmVhMSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaGVhZGVyIC5hcmVhMiwgZm9vdGVyIC5hcmVhMiB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuc2VjdGlvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24gYXJ0aWNsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDY1MHB4O1xuICBtYXJnaW46IDElIDIlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICNjY2M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIGhlYWRlciwgZm9vdGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMC41JSAyJTtcbiAgfVxuICBoZWFkZXIgaDEsIGZvb3RlciBoMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaGVhZGVyIC5hcmVhMSwgZm9vdGVyIC5hcmVhMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBoZWFkZXIgLmFyZWEyLCBmb290ZXIgLmFyZWEyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBzZWN0aW9uIGFydGljbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxufSJdfQ== */"]
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
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
  "./src/app/data/caadata.json":
  /*!***********************************!*\
    !*** ./src/app/data/caadata.json ***!
    \***********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, default */

  /***/
  function srcAppDataCaadataJson(module) {
    module.exports = JSON.parse("[{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"20/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"20/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"20/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"20/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"21/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"21/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"21/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"21/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"22/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"22/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"22/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"22/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"23/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"23/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"23/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"23/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"24/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"24/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"24/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"24/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"25/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"25/02/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"25/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"25/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"25/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"25/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"25/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"26/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"26/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"26/02/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"26/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"26/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"26/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"26/02/2020\",\"Casos\":4,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"26/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"27/02/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"27/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"27/02/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"27/02/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"27/02/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"27/02/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"27/02/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"27/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"28/02/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"28/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"28/02/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"28/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"28/02/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"28/02/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"28/02/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"28/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"28/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"29/02/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"29/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"29/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"29/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"29/02/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"29/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"29/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"29/02/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"29/02/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"29/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"29/02/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"29/02/2020\",\"Casos\":4,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"29/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"29/02/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"29/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"29/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"29/02/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"29/02/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"29/02/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"01/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"01/03/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"01/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"01/03/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"01/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"01/03/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"01/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"01/03/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"01/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"01/03/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"01/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"01/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"01/03/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"01/03/2020\",\"Casos\":29,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"01/03/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"01/03/2020\",\"Casos\":\"\",\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"01/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"01/03/2020\",\"Casos\":9,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"01/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"02/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"02/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"02/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"02/03/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"02/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"02/03/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"02/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"02/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"02/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"02/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"02/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"02/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"02/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"02/03/2020\",\"Casos\":49,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"02/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"02/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"02/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"02/03/2020\",\"Casos\":13,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"02/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"03/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"03/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"03/03/2020\",\"Casos\":2,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"03/03/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"03/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"03/03/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"03/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"03/03/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"03/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"03/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"03/03/2020\",\"Casos\":19,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"03/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"03/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"03/03/2020\",\"Casos\":70,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"03/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"03/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"03/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"03/03/2020\",\"Casos\":17,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"03/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"04/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"04/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"04/03/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"04/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"04/03/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"04/03/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"04/03/2020\",\"Casos\":13,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"04/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"04/03/2020\",\"Casos\":24,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"04/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"04/03/2020\",\"Casos\":19,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"04/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"04/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"04/03/2020\",\"Casos\":90,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"04/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"04/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"04/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"04/03/2020\",\"Casos\":17,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"04/03/2020\",\"Casos\":11,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"05/03/2020\",\"Casos\":21,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"05/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"05/03/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"05/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"05/03/2020\",\"Casos\":11,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"05/03/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"05/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"05/03/2020\",\"Casos\":13,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"05/03/2020\",\"Casos\":24,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"05/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"05/03/2020\",\"Casos\":30,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"05/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"05/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"05/03/2020\",\"Casos\":137,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"05/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"05/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"05/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"05/03/2020\",\"Casos\":45,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"05/03/2020\",\"Casos\":29,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"06/03/2020\",\"Casos\":27,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"06/03/2020\",\"Casos\":11,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"06/03/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"06/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"06/03/2020\",\"Casos\":11,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"06/03/2020\",\"Casos\":10,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"06/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"06/03/2020\",\"Casos\":14,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"06/03/2020\",\"Casos\":24,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"06/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"06/03/2020\",\"Casos\":30,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"06/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"06/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"06/03/2020\",\"Casos\":137,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"06/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"06/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"06/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"06/03/2020\",\"Casos\":45,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"06/03/2020\",\"Casos\":39,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"07/03/2020\",\"Casos\":34,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"07/03/2020\",\"Casos\":11,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"07/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"07/03/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"07/03/2020\",\"Casos\":17,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"07/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"07/03/2020\",\"Casos\":15,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"07/03/2020\",\"Casos\":21,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"07/03/2020\",\"Casos\":49,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"07/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"07/03/2020\",\"Casos\":37,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"07/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"07/03/2020\",\"Casos\":5,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"07/03/2020\",\"Casos\":175,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"07/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"07/03/2020\",\"Casos\":1,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"07/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"07/03/2020\",\"Casos\":70,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"07/03/2020\",\"Casos\":55,\"Hospitalizados\":\"\",\"UCI\":\"\",\"Fallecidos\":\"\"},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"08/03/2020\",\"Casos\":54,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"08/03/2020\",\"Casos\":13,\"Hospitalizados\":\"\",\"UCI\":3,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"08/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"08/03/2020\",\"Casos\":11,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"08/03/2020\",\"Casos\":22,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"08/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"08/03/2020\",\"Casos\":26,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"08/03/2020\",\"Casos\":30,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"08/03/2020\",\"Casos\":75,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"08/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"08/03/2020\",\"Casos\":37,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"08/03/2020\",\"Casos\":7,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"08/03/2020\",\"Casos\":6,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"08/03/2020\",\"Casos\":469,\"Hospitalizados\":\"\",\"UCI\":53,\"Fallecidos\":16},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"08/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"08/03/2020\",\"Casos\":4,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"08/03/2020\",\"Casos\":3,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"08/03/2020\",\"Casos\":149,\"Hospitalizados\":\"\",\"UCI\":5,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"08/03/2020\",\"Casos\":81,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"09/03/2020\",\"Casos\":71,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"09/03/2020\",\"Casos\":38,\"Hospitalizados\":\"\",\"UCI\":3,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"09/03/2020\",\"Casos\":22,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"09/03/2020\",\"Casos\":13,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"09/03/2020\",\"Casos\":25,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"09/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"09/03/2020\",\"Casos\":39,\"Hospitalizados\":\"\",\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"09/03/2020\",\"Casos\":40,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"09/03/2020\",\"Casos\":124,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"09/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"09/03/2020\",\"Casos\":50,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"09/03/2020\",\"Casos\":8,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"09/03/2020\",\"Casos\":22,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"09/03/2020\",\"Casos\":782,\"Hospitalizados\":\"\",\"UCI\":77,\"Fallecidos\":21},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"09/03/2020\",\"Casos\":0,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"09/03/2020\",\"Casos\":9,\"Hospitalizados\":\"\",\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"09/03/2020\",\"Casos\":12,\"Hospitalizados\":\"\",\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"09/03/2020\",\"Casos\":195,\"Hospitalizados\":\"\",\"UCI\":5,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"09/03/2020\",\"Casos\":144,\"Hospitalizados\":\"\",\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"10/03/2020\",\"Casos\":90,\"Hospitalizados\":32,\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"10/03/2020\",\"Casos\":45,\"Hospitalizados\":22,\"UCI\":3,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"10/03/2020\",\"Casos\":32,\"Hospitalizados\":12,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"10/03/2020\",\"Casos\":16,\"Hospitalizados\":8,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"10/03/2020\",\"Casos\":37,\"Hospitalizados\":10,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"10/03/2020\",\"Casos\":12,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"10/03/2020\",\"Casos\":71,\"Hospitalizados\":0,\"UCI\":5,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"10/03/2020\",\"Casos\":64,\"Hospitalizados\":14,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"10/03/2020\",\"Casos\":156,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"10/03/2020\",\"Casos\":0,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"10/03/2020\",\"Casos\":65,\"Hospitalizados\":0,\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"10/03/2020\",\"Casos\":9,\"Hospitalizados\":2,\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"10/03/2020\",\"Casos\":35,\"Hospitalizados\":7,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"10/03/2020\",\"Casos\":1024,\"Hospitalizados\":0,\"UCI\":102,\"Fallecidos\":31},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"10/03/2020\",\"Casos\":0,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"10/03/2020\",\"Casos\":11,\"Hospitalizados\":4,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"10/03/2020\",\"Casos\":46,\"Hospitalizados\":10,\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"10/03/2020\",\"Casos\":225,\"Hospitalizados\":102,\"UCI\":15,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"10/03/2020\",\"Casos\":179,\"Hospitalizados\":13,\"UCI\":1,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"11/03/2020\",\"Casos\":115,\"Hospitalizados\":50,\"UCI\":4,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"11/03/2020\",\"Casos\":64,\"Hospitalizados\":28,\"UCI\":3,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"11/03/2020\",\"Casos\":47,\"Hospitalizados\":12,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"11/03/2020\",\"Casos\":22,\"Hospitalizados\":8,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"11/03/2020\",\"Casos\":51,\"Hospitalizados\":15,\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"11/03/2020\",\"Casos\":16,\"Hospitalizados\":3,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"11/03/2020\",\"Casos\":115,\"Hospitalizados\":39,\"UCI\":9,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"11/03/2020\",\"Casos\":71,\"Hospitalizados\":24,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"11/03/2020\",\"Casos\":260,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"11/03/2020\",\"Casos\":0,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"11/03/2020\",\"Casos\":76,\"Hospitalizados\":22,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"11/03/2020\",\"Casos\":19,\"Hospitalizados\":2,\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"11/03/2020\",\"Casos\":35,\"Hospitalizados\":7,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"11/03/2020\",\"Casos\":1388,\"Hospitalizados\":0,\"UCI\":135,\"Fallecidos\":56},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"11/03/2020\",\"Casos\":0,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"11/03/2020\",\"Casos\":26,\"Hospitalizados\":5,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"11/03/2020\",\"Casos\":73,\"Hospitalizados\":17,\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"11/03/2020\",\"Casos\":346,\"Hospitalizados\":146,\"UCI\":18,\"Fallecidos\":11},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"11/03/2020\",\"Casos\":205,\"Hospitalizados\":21,\"UCI\":1,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"12/03/2020\",\"Casos\":219,\"Hospitalizados\":92,\"UCI\":8,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"12/03/2020\",\"Casos\":80,\"Hospitalizados\":30,\"UCI\":3,\"Fallecidos\":7},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"12/03/2020\",\"Casos\":67,\"Hospitalizados\":16,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"12/03/2020\",\"Casos\":28,\"Hospitalizados\":9,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"12/03/2020\",\"Casos\":70,\"Hospitalizados\":15,\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"12/03/2020\",\"Casos\":29,\"Hospitalizados\":3,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"12/03/2020\",\"Casos\":194,\"Hospitalizados\":78,\"UCI\":10,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"12/03/2020\",\"Casos\":92,\"Hospitalizados\":25,\"UCI\":4,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"12/03/2020\",\"Casos\":316,\"Hospitalizados\":0,\"UCI\":25,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"12/03/2020\",\"Casos\":0,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"12/03/2020\",\"Casos\":94,\"Hospitalizados\":23,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"12/03/2020\",\"Casos\":39,\"Hospitalizados\":3,\"UCI\":1,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"12/03/2020\",\"Casos\":85,\"Hospitalizados\":15,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"12/03/2020\",\"Casos\":1990,\"Hospitalizados\":1304,\"UCI\":180,\"Fallecidos\":81},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"12/03/2020\",\"Casos\":2,\"Hospitalizados\":3,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"12/03/2020\",\"Casos\":35,\"Hospitalizados\":8,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"12/03/2020\",\"Casos\":130,\"Hospitalizados\":28,\"UCI\":4,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"12/03/2020\",\"Casos\":417,\"Hospitalizados\":179,\"UCI\":20,\"Fallecidos\":14},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"12/03/2020\",\"Casos\":243,\"Hospitalizados\":27,\"UCI\":2,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"13/03/2020\",\"Casos\":269,\"Hospitalizados\":92,\"UCI\":8,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"13/03/2020\",\"Casos\":121,\"Hospitalizados\":42,\"UCI\":5,\"Fallecidos\":7},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"13/03/2020\",\"Casos\":92,\"Hospitalizados\":16,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"13/03/2020\",\"Casos\":28,\"Hospitalizados\":9,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"13/03/2020\",\"Casos\":90,\"Hospitalizados\":15,\"UCI\":6,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"13/03/2020\",\"Casos\":31,\"Hospitalizados\":3,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"13/03/2020\",\"Casos\":289,\"Hospitalizados\":78,\"UCI\":10,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"13/03/2020\",\"Casos\":169,\"Hospitalizados\":25,\"UCI\":8,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"13/03/2020\",\"Casos\":509,\"Hospitalizados\":0,\"UCI\":33,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"13/03/2020\",\"Casos\":0,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"13/03/2020\",\"Casos\":130,\"Hospitalizados\":31,\"UCI\":4,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"13/03/2020\",\"Casos\":66,\"Hospitalizados\":3,\"UCI\":1,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"13/03/2020\",\"Casos\":115,\"Hospitalizados\":32,\"UCI\":7,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"13/03/2020\",\"Casos\":2940,\"Hospitalizados\":1518,\"UCI\":180,\"Fallecidos\":86},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"13/03/2020\",\"Casos\":3,\"Hospitalizados\":3,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"13/03/2020\",\"Casos\":47,\"Hospitalizados\":8,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"13/03/2020\",\"Casos\":146,\"Hospitalizados\":28,\"UCI\":4,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"13/03/2020\",\"Casos\":521,\"Hospitalizados\":179,\"UCI\":22,\"Fallecidos\":14},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"13/03/2020\",\"Casos\":278,\"Hospitalizados\":38,\"UCI\":2,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"14/03/2020\",\"Casos\":437,\"Hospitalizados\":92,\"UCI\":8,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"14/03/2020\",\"Casos\":147,\"Hospitalizados\":59,\"UCI\":5,\"Fallecidos\":7},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"14/03/2020\",\"Casos\":137,\"Hospitalizados\":16,\"UCI\":3,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"14/03/2020\",\"Casos\":42,\"Hospitalizados\":9,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"14/03/2020\",\"Casos\":109,\"Hospitalizados\":15,\"UCI\":6,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"14/03/2020\",\"Casos\":51,\"Hospitalizados\":3,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"14/03/2020\",\"Casos\":401,\"Hospitalizados\":78,\"UCI\":10,\"Fallecidos\":10},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"14/03/2020\",\"Casos\":223,\"Hospitalizados\":45,\"UCI\":8,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"14/03/2020\",\"Casos\":715,\"Hospitalizados\":0,\"UCI\":33,\"Fallecidos\":8},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"14/03/2020\",\"Casos\":1,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"14/03/2020\",\"Casos\":409,\"Hospitalizados\":31,\"UCI\":4,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"14/03/2020\",\"Casos\":95,\"Hospitalizados\":8,\"UCI\":1,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"14/03/2020\",\"Casos\":195,\"Hospitalizados\":32,\"UCI\":8,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"14/03/2020\",\"Casos\":3544,\"Hospitalizados\":2337,\"UCI\":253,\"Fallecidos\":213},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"14/03/2020\",\"Casos\":8,\"Hospitalizados\":4,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"14/03/2020\",\"Casos\":71,\"Hospitalizados\":13,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"14/03/2020\",\"Casos\":183,\"Hospitalizados\":34,\"UCI\":4,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"14/03/2020\",\"Casos\":630,\"Hospitalizados\":262,\"UCI\":29,\"Fallecidos\":23},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"14/03/2020\",\"Casos\":300,\"Hospitalizados\":58,\"UCI\":7,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"15/03/2020\",\"Casos\":554,\"Hospitalizados\":197,\"UCI\":11,\"Fallecidos\":7},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"15/03/2020\",\"Casos\":174,\"Hospitalizados\":64,\"UCI\":7,\"Fallecidos\":11},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"15/03/2020\",\"Casos\":177,\"Hospitalizados\":16,\"UCI\":3,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"15/03/2020\",\"Casos\":73,\"Hospitalizados\":21,\"UCI\":4,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"15/03/2020\",\"Casos\":119,\"Hospitalizados\":40,\"UCI\":9,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"15/03/2020\",\"Casos\":58,\"Hospitalizados\":18,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"15/03/2020\",\"Casos\":567,\"Hospitalizados\":207,\"UCI\":23,\"Fallecidos\":17},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"15/03/2020\",\"Casos\":292,\"Hospitalizados\":45,\"UCI\":8,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"15/03/2020\",\"Casos\":903,\"Hospitalizados\":0,\"UCI\":33,\"Fallecidos\":12},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"15/03/2020\",\"Casos\":1,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"15/03/2020\",\"Casos\":409,\"Hospitalizados\":31,\"UCI\":4,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"15/03/2020\",\"Casos\":111,\"Hospitalizados\":9,\"UCI\":1,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"15/03/2020\",\"Casos\":245,\"Hospitalizados\":49,\"UCI\":9,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"15/03/2020\",\"Casos\":4165,\"Hospitalizados\":2337,\"UCI\":253,\"Fallecidos\":213},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"15/03/2020\",\"Casos\":8,\"Hospitalizados\":4,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"15/03/2020\",\"Casos\":77,\"Hospitalizados\":13,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"15/03/2020\",\"Casos\":274,\"Hospitalizados\":58,\"UCI\":5,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"15/03/2020\",\"Casos\":630,\"Hospitalizados\":262,\"UCI\":29,\"Fallecidos\":23},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"15/03/2020\",\"Casos\":312,\"Hospitalizados\":64,\"UCI\":13,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"16/03/2020\",\"Casos\":683,\"Hospitalizados\":229,\"UCI\":13,\"Fallecidos\":11},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"16/03/2020\",\"Casos\":207,\"Hospitalizados\":74,\"UCI\":9,\"Fallecidos\":12},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"16/03/2020\",\"Casos\":193,\"Hospitalizados\":34,\"UCI\":5,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"16/03/2020\",\"Casos\":92,\"Hospitalizados\":26,\"UCI\":4,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"16/03/2020\",\"Casos\":148,\"Hospitalizados\":56,\"UCI\":13,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"16/03/2020\",\"Casos\":58,\"Hospitalizados\":18,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"16/03/2020\",\"Casos\":567,\"Hospitalizados\":207,\"UCI\":23,\"Fallecidos\":17},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"16/03/2020\",\"Casos\":431,\"Hospitalizados\":95,\"UCI\":24,\"Fallecidos\":12},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"16/03/2020\",\"Casos\":1394,\"Hospitalizados\":0,\"UCI\":33,\"Fallecidos\":18},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"16/03/2020\",\"Casos\":1,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"16/03/2020\",\"Casos\":541,\"Hospitalizados\":135,\"UCI\":27,\"Fallecidos\":13},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"16/03/2020\",\"Casos\":153,\"Hospitalizados\":18,\"UCI\":2,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"16/03/2020\",\"Casos\":292,\"Hospitalizados\":49,\"UCI\":9,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"16/03/2020\",\"Casos\":4871,\"Hospitalizados\":3710,\"UCI\":340,\"Fallecidos\":355},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"16/03/2020\",\"Casos\":17,\"Hospitalizados\":4,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"16/03/2020\",\"Casos\":97,\"Hospitalizados\":18,\"UCI\":3,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"16/03/2020\",\"Casos\":313,\"Hospitalizados\":72,\"UCI\":10,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"16/03/2020\",\"Casos\":765,\"Hospitalizados\":309,\"UCI\":33,\"Fallecidos\":36},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"16/03/2020\",\"Casos\":355,\"Hospitalizados\":82,\"UCI\":13,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"17/03/2020\",\"Casos\":859,\"Hospitalizados\":319,\"UCI\":21,\"Fallecidos\":19},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"17/03/2020\",\"Casos\":226,\"Hospitalizados\":81,\"UCI\":9,\"Fallecidos\":13},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"17/03/2020\",\"Casos\":242,\"Hospitalizados\":45,\"UCI\":5,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"17/03/2020\",\"Casos\":112,\"Hospitalizados\":29,\"UCI\":4,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"17/03/2020\",\"Casos\":181,\"Hospitalizados\":73,\"UCI\":17,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"17/03/2020\",\"Casos\":68,\"Hospitalizados\":25,\"UCI\":3,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"17/03/2020\",\"Casos\":675,\"Hospitalizados\":277,\"UCI\":29,\"Fallecidos\":28},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"17/03/2020\",\"Casos\":668,\"Hospitalizados\":219,\"UCI\":43,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"17/03/2020\",\"Casos\":1866,\"Hospitalizados\":0,\"UCI\":33,\"Fallecidos\":41},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"17/03/2020\",\"Casos\":1,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"17/03/2020\",\"Casos\":726,\"Hospitalizados\":252,\"UCI\":40,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"17/03/2020\",\"Casos\":194,\"Hospitalizados\":27,\"UCI\":3,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"17/03/2020\",\"Casos\":341,\"Hospitalizados\":63,\"UCI\":12,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"17/03/2020\",\"Casos\":5637,\"Hospitalizados\":3778,\"UCI\":491,\"Fallecidos\":390},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"17/03/2020\",\"Casos\":20,\"Hospitalizados\":4,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"17/03/2020\",\"Casos\":122,\"Hospitalizados\":22,\"UCI\":4,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"17/03/2020\",\"Casos\":386,\"Hospitalizados\":93,\"UCI\":10,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"17/03/2020\",\"Casos\":973,\"Hospitalizados\":353,\"UCI\":37,\"Fallecidos\":40},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"17/03/2020\",\"Casos\":419,\"Hospitalizados\":99,\"UCI\":13,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"18/03/2020\",\"Casos\":1008,\"Hospitalizados\":384,\"UCI\":25,\"Fallecidos\":23},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"18/03/2020\",\"Casos\":281,\"Hospitalizados\":101,\"UCI\":14,\"Fallecidos\":15},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"18/03/2020\",\"Casos\":292,\"Hospitalizados\":61,\"UCI\":6,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"18/03/2020\",\"Casos\":169,\"Hospitalizados\":31,\"UCI\":7,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"18/03/2020\",\"Casos\":220,\"Hospitalizados\":82,\"UCI\":23,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"18/03/2020\",\"Casos\":83,\"Hospitalizados\":40,\"UCI\":4,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"18/03/2020\",\"Casos\":801,\"Hospitalizados\":313,\"UCI\":37,\"Fallecidos\":42},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"18/03/2020\",\"Casos\":868,\"Hospitalizados\":281,\"UCI\":54,\"Fallecidos\":29},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"18/03/2020\",\"Casos\":2702,\"Hospitalizados\":0,\"UCI\":33,\"Fallecidos\":55},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"18/03/2020\",\"Casos\":1,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"18/03/2020\",\"Casos\":921,\"Hospitalizados\":274,\"UCI\":52,\"Fallecidos\":24},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"18/03/2020\",\"Casos\":241,\"Hospitalizados\":36,\"UCI\":3,\"Fallecidos\":8},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"18/03/2020\",\"Casos\":453,\"Hospitalizados\":100,\"UCI\":15,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"18/03/2020\",\"Casos\":6777,\"Hospitalizados\":5168,\"UCI\":590,\"Fallecidos\":498},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"18/03/2020\",\"Casos\":23,\"Hospitalizados\":4,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"18/03/2020\",\"Casos\":167,\"Hospitalizados\":36,\"UCI\":6,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"18/03/2020\",\"Casos\":482,\"Hospitalizados\":132,\"UCI\":11,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"18/03/2020\",\"Casos\":1190,\"Hospitalizados\":455,\"UCI\":44,\"Fallecidos\":53},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"18/03/2020\",\"Casos\":468,\"Hospitalizados\":121,\"UCI\":15,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"19/03/2020\",\"Casos\":1287,\"Hospitalizados\":501,\"UCI\":38,\"Fallecidos\":30},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"19/03/2020\",\"Casos\":360,\"Hospitalizados\":127,\"UCI\":28,\"Fallecidos\":17},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"19/03/2020\",\"Casos\":344,\"Hospitalizados\":87,\"UCI\":7,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"19/03/2020\",\"Casos\":203,\"Hospitalizados\":48,\"UCI\":10,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"19/03/2020\",\"Casos\":287,\"Hospitalizados\":115,\"UCI\":25,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"19/03/2020\",\"Casos\":144,\"Hospitalizados\":61,\"UCI\":7,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"19/03/2020\",\"Casos\":1044,\"Hospitalizados\":313,\"UCI\":37,\"Fallecidos\":42},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"19/03/2020\",\"Casos\":1147,\"Hospitalizados\":370,\"UCI\":69,\"Fallecidos\":43},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"19/03/2020\",\"Casos\":3270,\"Hospitalizados\":1002,\"UCI\":33,\"Fallecidos\":82},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"19/03/2020\",\"Casos\":5,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"19/03/2020\",\"Casos\":1105,\"Hospitalizados\":378,\"UCI\":71,\"Fallecidos\":33},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"19/03/2020\",\"Casos\":297,\"Hospitalizados\":44,\"UCI\":4,\"Fallecidos\":10},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"19/03/2020\",\"Casos\":578,\"Hospitalizados\":138,\"UCI\":19,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"19/03/2020\",\"Casos\":7165,\"Hospitalizados\":6338,\"UCI\":678,\"Fallecidos\":628},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"19/03/2020\",\"Casos\":24,\"Hospitalizados\":5,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"19/03/2020\",\"Casos\":204,\"Hospitalizados\":47,\"UCI\":11,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"19/03/2020\",\"Casos\":554,\"Hospitalizados\":172,\"UCI\":19,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"19/03/2020\",\"Casos\":1465,\"Hospitalizados\":550,\"UCI\":53,\"Fallecidos\":71},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"19/03/2020\",\"Casos\":497,\"Hospitalizados\":122,\"UCI\":15,\"Fallecidos\":7},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"20/03/2020\",\"Casos\":1515,\"Hospitalizados\":605,\"UCI\":53,\"Fallecidos\":40},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"20/03/2020\",\"Casos\":424,\"Hospitalizados\":192,\"UCI\":33,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"20/03/2020\",\"Casos\":486,\"Hospitalizados\":133,\"UCI\":12,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"20/03/2020\",\"Casos\":246,\"Hospitalizados\":60,\"UCI\":14,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"20/03/2020\",\"Casos\":348,\"Hospitalizados\":139,\"UCI\":29,\"Fallecidos\":7},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"20/03/2020\",\"Casos\":215,\"Hospitalizados\":92,\"UCI\":9,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"20/03/2020\",\"Casos\":1423,\"Hospitalizados\":635,\"UCI\":65,\"Fallecidos\":84},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"20/03/2020\",\"Casos\":1466,\"Hospitalizados\":575,\"UCI\":85,\"Fallecidos\":55},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"20/03/2020\",\"Casos\":4203,\"Hospitalizados\":1681,\"UCI\":298,\"Fallecidos\":122},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"20/03/2020\",\"Casos\":5,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"20/03/2020\",\"Casos\":1363,\"Hospitalizados\":476,\"UCI\":84,\"Fallecidos\":50},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"20/03/2020\",\"Casos\":354,\"Hospitalizados\":65,\"UCI\":6,\"Fallecidos\":12},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"20/03/2020\",\"Casos\":739,\"Hospitalizados\":168,\"UCI\":29,\"Fallecidos\":9},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"20/03/2020\",\"Casos\":8921,\"Hospitalizados\":7388,\"UCI\":767,\"Fallecidos\":804},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"20/03/2020\",\"Casos\":25,\"Hospitalizados\":8,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"20/03/2020\",\"Casos\":240,\"Hospitalizados\":61,\"UCI\":14,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"20/03/2020\",\"Casos\":664,\"Hospitalizados\":222,\"UCI\":25,\"Fallecidos\":9},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"20/03/2020\",\"Casos\":1725,\"Hospitalizados\":654,\"UCI\":71,\"Fallecidos\":85},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"20/03/2020\",\"Casos\":564,\"Hospitalizados\":128,\"UCI\":17,\"Fallecidos\":15},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"21/03/2020\",\"Casos\":1725,\"Hospitalizados\":724,\"UCI\":55,\"Fallecidos\":47},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"21/03/2020\",\"Casos\":532,\"Hospitalizados\":241,\"UCI\":45,\"Fallecidos\":24},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"21/03/2020\",\"Casos\":545,\"Hospitalizados\":171,\"UCI\":15,\"Fallecidos\":8},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"21/03/2020\",\"Casos\":331,\"Hospitalizados\":79,\"UCI\":14,\"Fallecidos\":4},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"21/03/2020\",\"Casos\":414,\"Hospitalizados\":150,\"UCI\":32,\"Fallecidos\":9},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"21/03/2020\",\"Casos\":282,\"Hospitalizados\":116,\"UCI\":9,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"21/03/2020\",\"Casos\":1819,\"Hospitalizados\":838,\"UCI\":76,\"Fallecidos\":112},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"21/03/2020\",\"Casos\":1744,\"Hospitalizados\":709,\"UCI\":106,\"Fallecidos\":74},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"21/03/2020\",\"Casos\":4704,\"Hospitalizados\":1681,\"UCI\":298,\"Fallecidos\":191},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"21/03/2020\",\"Casos\":5,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"21/03/2020\",\"Casos\":1604,\"Hospitalizados\":590,\"UCI\":113,\"Fallecidos\":69},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"21/03/2020\",\"Casos\":384,\"Hospitalizados\":87,\"UCI\":8,\"Fallecidos\":14},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"21/03/2020\",\"Casos\":915,\"Hospitalizados\":227,\"UCI\":35,\"Fallecidos\":12},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"21/03/2020\",\"Casos\":9702,\"Hospitalizados\":8441,\"UCI\":834,\"Fallecidos\":1021},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"21/03/2020\",\"Casos\":25,\"Hospitalizados\":12,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"21/03/2020\",\"Casos\":296,\"Hospitalizados\":78,\"UCI\":16,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"21/03/2020\",\"Casos\":794,\"Hospitalizados\":288,\"UCI\":30,\"Fallecidos\":14},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"21/03/2020\",\"Casos\":2097,\"Hospitalizados\":988,\"UCI\":81,\"Fallecidos\":97},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"21/03/2020\",\"Casos\":654,\"Hospitalizados\":134,\"UCI\":17,\"Fallecidos\":18},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"22/03/2020\",\"Casos\":1961,\"Hospitalizados\":865,\"UCI\":77,\"Fallecidos\":58},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"22/03/2020\",\"Casos\":638,\"Hospitalizados\":298,\"UCI\":52,\"Fallecidos\":32},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"22/03/2020\",\"Casos\":594,\"Hospitalizados\":194,\"UCI\":22,\"Fallecidos\":12},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"22/03/2020\",\"Casos\":400,\"Hospitalizados\":87,\"UCI\":27,\"Fallecidos\":10},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"22/03/2020\",\"Casos\":481,\"Hospitalizados\":172,\"UCI\":32,\"Fallecidos\":11},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"22/03/2020\",\"Casos\":347,\"Hospitalizados\":157,\"UCI\":14,\"Fallecidos\":6},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"22/03/2020\",\"Casos\":2078,\"Hospitalizados\":1547,\"UCI\":142,\"Fallecidos\":145},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"22/03/2020\",\"Casos\":2055,\"Hospitalizados\":860,\"UCI\":120,\"Fallecidos\":102},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"22/03/2020\",\"Casos\":5925,\"Hospitalizados\":1681,\"UCI\":551,\"Fallecidos\":245},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"22/03/2020\",\"Casos\":6,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"22/03/2020\",\"Casos\":1901,\"Hospitalizados\":702,\"UCI\":138,\"Fallecidos\":94},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"22/03/2020\",\"Casos\":493,\"Hospitalizados\":131,\"UCI\":13,\"Fallecidos\":18},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"22/03/2020\",\"Casos\":1208,\"Hospitalizados\":270,\"UCI\":47,\"Fallecidos\":18},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"22/03/2020\",\"Casos\":10575,\"Hospitalizados\":9561,\"UCI\":942,\"Fallecidos\":1263},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"22/03/2020\",\"Casos\":28,\"Hospitalizados\":12,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"22/03/2020\",\"Casos\":345,\"Hospitalizados\":80,\"UCI\":23,\"Fallecidos\":2},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"22/03/2020\",\"Casos\":886,\"Hospitalizados\":339,\"UCI\":40,\"Fallecidos\":24},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"22/03/2020\",\"Casos\":2421,\"Hospitalizados\":1252,\"UCI\":92,\"Fallecidos\":120},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"22/03/2020\",\"Casos\":747,\"Hospitalizados\":166,\"UCI\":22,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"23/03/2020\",\"Casos\":2471,\"Hospitalizados\":1132,\"UCI\":102,\"Fallecidos\":87},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"23/03/2020\",\"Casos\":758,\"Hospitalizados\":384,\"UCI\":66,\"Fallecidos\":37},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"23/03/2020\",\"Casos\":662,\"Hospitalizados\":224,\"UCI\":23,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"23/03/2020\",\"Casos\":478,\"Hospitalizados\":127,\"UCI\":35,\"Fallecidos\":10},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"23/03/2020\",\"Casos\":557,\"Hospitalizados\":207,\"UCI\":36,\"Fallecidos\":16},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"23/03/2020\",\"Casos\":425,\"Hospitalizados\":200,\"UCI\":16,\"Fallecidos\":9},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"23/03/2020\",\"Casos\":2465,\"Hospitalizados\":1826,\"UCI\":182,\"Fallecidos\":216},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"23/03/2020\",\"Casos\":2460,\"Hospitalizados\":1057,\"UCI\":137,\"Fallecidos\":124},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"23/03/2020\",\"Casos\":7864,\"Hospitalizados\":3599,\"UCI\":551,\"Fallecidos\":282},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"23/03/2020\",\"Casos\":6,\"Hospitalizados\":0,\"UCI\":0,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"23/03/2020\",\"Casos\":2167,\"Hospitalizados\":917,\"UCI\":161,\"Fallecidos\":115},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"23/03/2020\",\"Casos\":636,\"Hospitalizados\":161,\"UCI\":20,\"Fallecidos\":26},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"23/03/2020\",\"Casos\":1415,\"Hospitalizados\":338,\"UCI\":55,\"Fallecidos\":20},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"23/03/2020\",\"Casos\":12352,\"Hospitalizados\":10443,\"UCI\":1050,\"Fallecidos\":1535},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"23/03/2020\",\"Casos\":28,\"Hospitalizados\":12,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"23/03/2020\",\"Casos\":385,\"Hospitalizados\":99,\"UCI\":26,\"Fallecidos\":3},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"23/03/2020\",\"Casos\":1014,\"Hospitalizados\":405,\"UCI\":45,\"Fallecidos\":31},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"23/03/2020\",\"Casos\":2728,\"Hospitalizados\":1425,\"UCI\":106,\"Fallecidos\":133},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"23/03/2020\",\"Casos\":802,\"Hospitalizados\":206,\"UCI\":24,\"Fallecidos\":30},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"24/03/2020\",\"Casos\":3010,\"Hospitalizados\":1433,\"UCI\":116,\"Fallecidos\":113},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"24/03/2020\",\"Casos\":907,\"Hospitalizados\":459,\"UCI\":75,\"Fallecidos\":40},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"24/03/2020\",\"Casos\":779,\"Hospitalizados\":263,\"UCI\":29,\"Fallecidos\":25},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"24/03/2020\",\"Casos\":562,\"Hospitalizados\":164,\"UCI\":40,\"Fallecidos\":13},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"24/03/2020\",\"Casos\":657,\"Hospitalizados\":235,\"UCI\":43,\"Fallecidos\":21},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"24/03/2020\",\"Casos\":510,\"Hospitalizados\":241,\"UCI\":18,\"Fallecidos\":14},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"24/03/2020\",\"Casos\":2780,\"Hospitalizados\":2162,\"UCI\":210,\"Fallecidos\":263},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"24/03/2020\",\"Casos\":2940,\"Hospitalizados\":1244,\"UCI\":170,\"Fallecidos\":165},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"24/03/2020\",\"Casos\":9937,\"Hospitalizados\":5434,\"UCI\":781,\"Fallecidos\":516},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"24/03/2020\",\"Casos\":9,\"Hospitalizados\":2,\"UCI\":1,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"24/03/2020\",\"Casos\":2616,\"Hospitalizados\":1071,\"UCI\":198,\"Fallecidos\":143},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"24/03/2020\",\"Casos\":742,\"Hospitalizados\":209,\"UCI\":28,\"Fallecidos\":39},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"24/03/2020\",\"Casos\":1653,\"Hospitalizados\":412,\"UCI\":69,\"Fallecidos\":27},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"24/03/2020\",\"Casos\":14597,\"Hospitalizados\":11153,\"UCI\":1150,\"Fallecidos\":1825},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"24/03/2020\",\"Casos\":38,\"Hospitalizados\":14,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"24/03/2020\",\"Casos\":477,\"Hospitalizados\":127,\"UCI\":33,\"Fallecidos\":5},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"24/03/2020\",\"Casos\":1197,\"Hospitalizados\":506,\"UCI\":51,\"Fallecidos\":33},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"24/03/2020\",\"Casos\":3271,\"Hospitalizados\":1577,\"UCI\":119,\"Fallecidos\":155},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"24/03/2020\",\"Casos\":928,\"Hospitalizados\":254,\"UCI\":33,\"Fallecidos\":37},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"25/03/2020\",\"Casos\":3406,\"Hospitalizados\":1626,\"UCI\":134,\"Fallecidos\":134},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"25/03/2020\",\"Casos\":1116,\"Hospitalizados\":562,\"UCI\":93,\"Fallecidos\":48},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"25/03/2020\",\"Casos\":841,\"Hospitalizados\":300,\"UCI\":34,\"Fallecidos\":27},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"25/03/2020\",\"Casos\":660,\"Hospitalizados\":205,\"UCI\":43,\"Fallecidos\":17},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"25/03/2020\",\"Casos\":784,\"Hospitalizados\":279,\"UCI\":45,\"Fallecidos\":24},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"25/03/2020\",\"Casos\":671,\"Hospitalizados\":300,\"UCI\":26,\"Fallecidos\":17},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"25/03/2020\",\"Casos\":3383,\"Hospitalizados\":2162,\"UCI\":243,\"Fallecidos\":316},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"25/03/2020\",\"Casos\":3488,\"Hospitalizados\":1515,\"UCI\":202,\"Fallecidos\":206},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"25/03/2020\",\"Casos\":11592,\"Hospitalizados\":7439,\"UCI\":1021,\"Fallecidos\":672},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"25/03/2020\",\"Casos\":10,\"Hospitalizados\":2,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"25/03/2020\",\"Casos\":3200,\"Hospitalizados\":1278,\"UCI\":230,\"Fallecidos\":167},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"25/03/2020\",\"Casos\":969,\"Hospitalizados\":241,\"UCI\":34,\"Fallecidos\":58},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"25/03/2020\",\"Casos\":1915,\"Hospitalizados\":503,\"UCI\":86,\"Fallecidos\":32},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"25/03/2020\",\"Casos\":17166,\"Hospitalizados\":12440,\"UCI\":1221,\"Fallecidos\":2090},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"25/03/2020\",\"Casos\":39,\"Hospitalizados\":16,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"25/03/2020\",\"Casos\":596,\"Hospitalizados\":172,\"UCI\":36,\"Fallecidos\":8},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"25/03/2020\",\"Casos\":1411,\"Hospitalizados\":649,\"UCI\":54,\"Fallecidos\":49},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"25/03/2020\",\"Casos\":3946,\"Hospitalizados\":1907,\"UCI\":137,\"Fallecidos\":180},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"25/03/2020\",\"Casos\":995,\"Hospitalizados\":316,\"UCI\":36,\"Fallecidos\":43},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"26/03/2020\",\"Casos\":3793,\"Hospitalizados\":1843,\"UCI\":148,\"Fallecidos\":144},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"26/03/2020\",\"Casos\":1338,\"Hospitalizados\":693,\"UCI\":114,\"Fallecidos\":58},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"26/03/2020\",\"Casos\":900,\"Hospitalizados\":339,\"UCI\":47,\"Fallecidos\":29},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"26/03/2020\",\"Casos\":755,\"Hospitalizados\":237,\"UCI\":46,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"26/03/2020\",\"Casos\":878,\"Hospitalizados\":328,\"UCI\":61,\"Fallecidos\":27},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"26/03/2020\",\"Casos\":810,\"Hospitalizados\":355,\"UCI\":29,\"Fallecidos\":21},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"26/03/2020\",\"Casos\":3934,\"Hospitalizados\":2707,\"UCI\":273,\"Fallecidos\":367},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"26/03/2020\",\"Casos\":4132,\"Hospitalizados\":1791,\"UCI\":228,\"Fallecidos\":252},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"26/03/2020\",\"Casos\":12940,\"Hospitalizados\":8545,\"UCI\":1187,\"Fallecidos\":880},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"26/03/2020\",\"Casos\":17,\"Hospitalizados\":2,\"UCI\":2,\"Fallecidos\":0},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"26/03/2020\",\"Casos\":3532,\"Hospitalizados\":1422,\"UCI\":252,\"Fallecidos\":198},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"26/03/2020\",\"Casos\":1231,\"Hospitalizados\":277,\"UCI\":41,\"Fallecidos\":69},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"26/03/2020\",\"Casos\":2322,\"Hospitalizados\":557,\"UCI\":98,\"Fallecidos\":43},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"26/03/2020\",\"Casos\":19243,\"Hospitalizados\":13580,\"UCI\":1312,\"Fallecidos\":2412},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"26/03/2020\",\"Casos\":42,\"Hospitalizados\":18,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"26/03/2020\",\"Casos\":714,\"Hospitalizados\":209,\"UCI\":53,\"Fallecidos\":15},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"26/03/2020\",\"Casos\":1641,\"Hospitalizados\":732,\"UCI\":75,\"Fallecidos\":58},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"26/03/2020\",\"Casos\":4601,\"Hospitalizados\":2270,\"UCI\":154,\"Fallecidos\":207},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"26/03/2020\",\"Casos\":1236,\"Hospitalizados\":388,\"UCI\":43,\"Fallecidos\":55},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"27/03/2020\",\"Casos\":4277,\"Hospitalizados\":2106,\"UCI\":172,\"Fallecidos\":175},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"27/03/2020\",\"Casos\":1592,\"Hospitalizados\":835,\"UCI\":124,\"Fallecidos\":58},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"27/03/2020\",\"Casos\":1004,\"Hospitalizados\":408,\"UCI\":50,\"Fallecidos\":33},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"27/03/2020\",\"Casos\":862,\"Hospitalizados\":283,\"UCI\":59,\"Fallecidos\":26},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"27/03/2020\",\"Casos\":1025,\"Hospitalizados\":377,\"UCI\":68,\"Fallecidos\":36},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"27/03/2020\",\"Casos\":937,\"Hospitalizados\":406,\"UCI\":37,\"Fallecidos\":22},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"27/03/2020\",\"Casos\":4512,\"Hospitalizados\":2977,\"UCI\":289,\"Fallecidos\":448},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"27/03/2020\",\"Casos\":4791,\"Hospitalizados\":2063,\"UCI\":249,\"Fallecidos\":321},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"27/03/2020\",\"Casos\":14263,\"Hospitalizados\":9900,\"UCI\":1324,\"Fallecidos\":1070},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"27/03/2020\",\"Casos\":17,\"Hospitalizados\":2,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"27/03/2020\",\"Casos\":4034,\"Hospitalizados\":1694,\"UCI\":282,\"Fallecidos\":234},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"27/03/2020\",\"Casos\":1394,\"Hospitalizados\":312,\"UCI\":40,\"Fallecidos\":88},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"27/03/2020\",\"Casos\":2772,\"Hospitalizados\":906,\"UCI\":112,\"Fallecidos\":47},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"27/03/2020\",\"Casos\":21520,\"Hospitalizados\":14211,\"UCI\":1404,\"Fallecidos\":2757},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"27/03/2020\",\"Casos\":45,\"Hospitalizados\":22,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"27/03/2020\",\"Casos\":802,\"Hospitalizados\":231,\"UCI\":58,\"Fallecidos\":17},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"27/03/2020\",\"Casos\":1829,\"Hospitalizados\":827,\"UCI\":84,\"Fallecidos\":70},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"27/03/2020\",\"Casos\":5136,\"Hospitalizados\":2612,\"UCI\":176,\"Fallecidos\":241},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"27/03/2020\",\"Casos\":1436,\"Hospitalizados\":458,\"UCI\":43,\"Fallecidos\":65},{\"CCAA Codigo ISO\":\"AN\",\"Fecha\":\"28/03/2020\",\"Casos\":4682,\"Hospitalizados\":2294,\"UCI\":201,\"Fallecidos\":207},{\"CCAA Codigo ISO\":\"AR\",\"Fecha\":\"28/03/2020\",\"Casos\":1858,\"Hospitalizados\":835,\"UCI\":124,\"Fallecidos\":93},{\"CCAA Codigo ISO\":\"AS\",\"Fecha\":\"28/03/2020\",\"Casos\":1088,\"Hospitalizados\":466,\"UCI\":57,\"Fallecidos\":41},{\"CCAA Codigo ISO\":\"IB\",\"Fecha\":\"28/03/2020\",\"Casos\":958,\"Hospitalizados\":345,\"UCI\":71,\"Fallecidos\":29},{\"CCAA Codigo ISO\":\"CN\",\"Fecha\":\"28/03/2020\",\"Casos\":1125,\"Hospitalizados\":425,\"UCI\":78,\"Fallecidos\":39},{\"CCAA Codigo ISO\":\"CB\",\"Fecha\":\"28/03/2020\",\"Casos\":1023,\"Hospitalizados\":449,\"UCI\":40,\"Fallecidos\":26},{\"CCAA Codigo ISO\":\"CM\",\"Fecha\":\"28/03/2020\",\"Casos\":5246,\"Hospitalizados\":3018,\"UCI\":299,\"Fallecidos\":539},{\"CCAA Codigo ISO\":\"CL\",\"Fecha\":\"28/03/2020\",\"Casos\":5414,\"Hospitalizados\":2408,\"UCI\":278,\"Fallecidos\":380},{\"CCAA Codigo ISO\":\"CT\",\"Fecha\":\"28/03/2020\",\"Casos\":15026,\"Hospitalizados\":10688,\"UCI\":1391,\"Fallecidos\":1226},{\"CCAA Codigo ISO\":\"CE\",\"Fecha\":\"28/03/2020\",\"Casos\":21,\"Hospitalizados\":2,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"VC\",\"Fecha\":\"28/03/2020\",\"Casos\":4784,\"Hospitalizados\":1874,\"UCI\":309,\"Fallecidos\":267},{\"CCAA Codigo ISO\":\"EX\",\"Fecha\":\"28/03/2020\",\"Casos\":1456,\"Hospitalizados\":313,\"UCI\":41,\"Fallecidos\":100},{\"CCAA Codigo ISO\":\"GA\",\"Fecha\":\"28/03/2020\",\"Casos\":3139,\"Hospitalizados\":1043,\"UCI\":123,\"Fallecidos\":60},{\"CCAA Codigo ISO\":\"MD\",\"Fecha\":\"28/03/2020\",\"Casos\":22677,\"Hospitalizados\":14454,\"UCI\":1429,\"Fallecidos\":3082},{\"CCAA Codigo ISO\":\"ME\",\"Fecha\":\"28/03/2020\",\"Casos\":48,\"Hospitalizados\":24,\"UCI\":2,\"Fallecidos\":1},{\"CCAA Codigo ISO\":\"MC\",\"Fecha\":\"28/03/2020\",\"Casos\":872,\"Hospitalizados\":260,\"UCI\":58,\"Fallecidos\":20},{\"CCAA Codigo ISO\":\"NC\",\"Fecha\":\"28/03/2020\",\"Casos\":2011,\"Hospitalizados\":896,\"UCI\":90,\"Fallecidos\":84},{\"CCAA Codigo ISO\":\"PV\",\"Fecha\":\"28/03/2020\",\"Casos\":5740,\"Hospitalizados\":3106,\"UCI\":271,\"Fallecidos\":265},{\"CCAA Codigo ISO\":\"RI\",\"Fecha\":\"28/03/2020\",\"Casos\":1629,\"Hospitalizados\":497,\"UCI\":43,\"Fallecidos\":68}]");
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