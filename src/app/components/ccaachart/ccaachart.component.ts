import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import  *  as  ccaadata  from  '../../data/caadata.json';

declare var Plotly: any;

@Component({
  selector: 'app-ccaachart',
  templateUrl: './ccaachart.component.html',
  styleUrls: ['./ccaachart.component.scss']
})


export class CCAAchartComponent implements OnInit {
    receivedData:any;
    data:any;
    madridData:any;
    madridDataFull:any = {};
    fullData:any;
    myccaadata:any=[];
    jsonResumeSpain:any=[]

    selectedCCAA: any;
    options:any;
    loading:boolean;

    @ViewChild("GraphA", { static: true })
    public GraphA: ElementRef; 


    @ViewChild("GraphB", { static: true })
    public GraphB: ElementRef; 

    @ViewChild("GraphE1", { static: true })
    public GraphE1: ElementRef; 

    @ViewChild("GraphE2", { static: true })
    public GraphE2: ElementRef; 

    @ViewChild("GraphE3", { static: true })
    public GraphE3: ElementRef; 
    

    private httpOptions = {
        headers: new HttpHeaders({}),
        responseType: 'text'
      };

    constructor(private http: HttpClient) { }

    ngOnInit(){

        this.options=[
            {"code": "AN",name:"Andalucia"},
            {"code": "AR",name:"Aragon"},
            {"code": "AS",name:"Asturias"},
            {"code": "IB",name:"Islas Baleares"},
            {"code": "CN",name:"Canarias"},
            {"code": "CB",name:"Cantabria"},
            {"code": "CM",name:"Castilla la Mancha"},
            {"code": "CL",name:"Castilla y Leon"},
            {"code": "CT",name:"Cataluña"},
            {"code": "CE",name:"Ceuta"},
            {"code": "VC",name:"C.Valenciana"},
            {"code": "EX",name:"Extremadura"},
            {"code": "GA",name:"Galicia"},
            {"code": "MD",name:"Madrid"},
            {"code": "ME",name:"Melilla"},
            {"code": "MC",name:"Murcia"},
            {"code": "NC",name:"Navarra"},
            {"code": "PV",name:"Pais Vasco"},
            {"code": "RI",name:"Rioja"}

        ]

        
        this.getCSV();//full csv by days
        this.getSpainCSV();//spain general data
        this.getRegionsCSV();//Regions top values to compare

    }

    onChange(value) {
        this.massageData(value,"update");
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
        var localUrl="/assets/data/data.csv"
        this.http.get(
            localUrl, 
            {
                headers: new HttpHeaders({}),
                responseType: 'text'
            }
          )
          .subscribe(data => {
            console.log("----CSV ",data);
            this.jsonResumeSpain= this.csvToJSON(data)[0];
          });
    }

    //get fulll CSV
    getCSV() {
        var localUrl="/assets/data/serie_historica_acumulados.csv"
        this.http.get(
            localUrl, 
            {
                headers: new HttpHeaders({}),
                responseType: 'text'
            }
          )
          .subscribe(data => {
            console.log("----CSV ",data);
            this.jsonReadyFull( this.csvToJSON(data) )
          });
    }


    dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    getRegionsCSV() {
        var localUrl="/assets/data/ccaa.csv"
        this.http.get(
            localUrl, 
            {
                headers: new HttpHeaders({}),
                responseType: 'text'
            }
          )
          .subscribe(data => {
            console.log("----CSV ",data);
            var  regionsCSV = this.csvToJSON(data) 
            regionsCSV.forEach(function(item){
                item.Acumulados = item.Acumulados*1;
                item['Ultimas 24h'] = item['Ultimas 24h']*1;
                item.Incidencia = item.Incidencia*1;
                if(item.CCAA==='AndalucÃ­a'){
                    item.CCAA='Andalucía'
                }
                if(item.CCAA==='AragÃ³n'){
                    item.CCAA='Aragón'
                }
                if(item.CCAA==='CataluÃ±a'){
                    item.CCAA='Cataluña'
                }
                if(item.CCAA==='Castilla y LeÃ³n'){
                    item.CCAA='Castilla y León'
                }
                if(item.CCAA==='PaÃ­s Vasco'){ 
                    item.CCAA='Pais Vasco'
                }

            });

            function dynamicSort(property) { 
                return function (obj1,obj2) {
                    return obj1[property] > obj2[property] ? 1
                        : obj1[property] < obj2[property] ? -1 : 0;
                }
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
                    while(result === 0 && i < numberOfProperties) {
                        result = dynamicSort(props[i])(obj1, obj2);
                        i++;
                    }
                    return result;
                }
            }

            //CCAA: "AndalucÃ­a", Acumulados: "5818", Ultimas 24h: "413", Incidencia:
                var data1={
                    ccaa:[],
                    acumulados:[]
                };
                var source1= [... regionsCSV.sort( dynamicSortMultiple( ['Acumulados','CCAA','Ultimas 24h','Incidencia']) ) ];
                console.log("source1",source1)

                var data2={
                    ccaa:[],
                    ultimas:[]
                };
                var source2= [... regionsCSV.sort( dynamicSortMultiple( ['Ultimas 24h','CCAA','Acumulados','Incidencia']) ) ];
                console.log("source2",source2)

                var data3={
                    ccaa:[],
                    incidencia:[]
                };
                var source3= [... regionsCSV.sort( dynamicSortMultiple( ['Incidencia','CCAA','Ultimas 24h','Acumulados']) ) ];
                console.log("source3",source3)

                //console.log("regionsCSV",regionsCSV)

                source1.forEach( function(item){
                    data1.ccaa.push(item.CCAA)
                    data1.acumulados.push(item.Acumulados)
                });


                source2.forEach( function(item){
                    data2.ccaa.push(item.CCAA)
                    data2.ultimas.push(item['Ultimas 24h'])
                });


                source3.forEach( function(item){
                    data3.ccaa.push(item.CCAA)
                    data3.incidencia.push(item.Incidencia)
                });

                

            
                this.plotGraphE1(data1);
                this.plotGraphE2(data2);
                this.plotGraphE3(data3);

          });
    }

    jsonReadyFull(data){
        console.log("ready---",data)

        this.myccaadata = data;
        this.selectedCCAA = "MD";
        this.massageData("MD","create");

    }

    massageData(ccaacode, mode){
        console.log("load ", ccaacode);
        this.fullData = this.myccaadata;

        var cleanDataOneCCAA = this.fullData.filter( (item) => item['CCAA Codigo ISO']== ccaacode );
        this.madridData= cleanDataOneCCAA.slice(10)
        console.log("clean data",this.madridData)
        

        this.madridDataFull.fechas = this.madridData.map( (item) => item.Fecha);
        this.madridDataFull.casos = this.madridData.map( (item) => item['Casos ']!="" ? item['Casos '] : 0 );
        this.madridDataFull.hospitalizados = this.madridData.map( (item) => item.Hospitalizados!="" ? item.Hospitalizados:0 );
        this.madridDataFull.uci = this.madridData.map( (item) => item.UCI!="" ? item.UCI:0 );
        this.madridDataFull.fallecidos = this.madridData.map( (item) => item.Fallecidos!="" ? item.Fallecidos:0 );

        //calculate Casos por dia
        this.madridDataFull.casosDia = [];
        for(var i=0; i<this.madridDataFull.casos.length; i++){

            var actual = this.madridDataFull.casos[i];
            var siguiente = this.madridDataFull.casos[i+1];

            var resta = siguiente-actual;
            this.madridDataFull.casosDia.push(resta);
        }

         //calculate fallecidos por dia
        this.madridDataFull.fallecidosDia = [];
        for(var i=0; i<this.madridDataFull.fallecidos.length; i++){

            var actual = this.madridDataFull.fallecidos[i];
            var siguiente = this.madridDataFull.fallecidos[i+1];

            var resta = siguiente-actual;
            this.madridDataFull.fallecidosDia.push(resta);
        }

        //calculate hospitalizados por dia
        this.madridDataFull.hospitalizadosDia = [];
        for(var i=0; i<this.madridDataFull.hospitalizados.length; i++){

            var actual = this.madridDataFull.hospitalizados[i];
            var siguiente = this.madridDataFull.hospitalizados[i+1];

            var resta = siguiente-actual;
            this.madridDataFull.hospitalizadosDia.push(resta);
        }

        //calculate uci por dia
        this.madridDataFull.uciDia = [];
        for(var i=0; i<this.madridDataFull.uci.length; i++){

            var actual = this.madridDataFull.uci[i];
            var siguiente = this.madridDataFull.uci[i+1];

            var resta = siguiente-actual;
            this.madridDataFull.uciDia.push(resta);
        }
        
        console.log("this.madridDataFull.",this.madridDataFull)

        //draw charts
        if(mode==="create"){
            console.log("CREATE")
            this.plotGraphA();
            this.plotGraphB();
        }else{
            console.log("UPDATE")
            this.plotGraphAUpdate();
            this.plotGraphBUpdate();
        }


    }

    plotGraphA(){
         Plotly.newPlot( 
            this.GraphA.nativeElement,
            [
                {
                    x: this.madridDataFull.fechas, 
                    y:  this.madridDataFull.casos,
                    mode: 'lines',
                    name: 'Casos acumulados'
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.fallecidos,
                    mode: 'lines',
                    name: 'Fallecidos acumulados'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.hospitalizados,
                    mode: 'lines',
                    name: 'Hopitalizados acumulados'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.uci,
                    mode: 'lines',
                    name: 'UCI acumulados'
                     
                }
            ],
            { 
                margin: { t: 0 }
            },
            {responsive: true, displayModeBar: false});
    }

    plotGraphB(){
        Plotly.newPlot( 
            this.GraphB.nativeElement,
            [
                {
                    x: this.madridDataFull.fechas, 
                    y:  this.madridDataFull.casosDia,
                    type: 'bar',
                    name: 'Casos cada dia'
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.fallecidosDia,
                    type: 'bar',
                    name: 'Fallecidos al dia'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.hospitalizadosDia,
                    type: 'bar',
                    name: 'Hopitalizados al dia'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.uciDia,
                    type: 'bar',
                    name: 'UCI al dia'
                     
                }
            ],
            { 
                margin: { t: 20 }
            },
            {responsive: true, displayModeBar: false});
    }



    plotGraphAUpdate(){
        console.log("plotGraphAUpdate")
        Plotly.react( 
            this.GraphA.nativeElement,
            [
                {
                    x: this.madridDataFull.fechas, 
                    y:  this.madridDataFull.casos,
                    mode: 'lines',
                    name: 'Casos acumulados'
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.fallecidos,
                    mode: 'lines',
                    name: 'Fallecidos acumulados'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.hospitalizados,
                    mode: 'lines',
                    name: 'Hopitalizados acumulados'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.uci,
                    mode: 'lines',
                    name: 'UCI acumulados'
                     
                }
            ],
            { 
                margin: { t: 20 }
            },
            {responsive: true, showEditInChartStudio: false});
    }

    plotGraphBUpdate(){
         Plotly.react( 
            this.GraphB.nativeElement,
            [
                {
                    x: this.madridDataFull.fechas, 
                    y:  this.madridDataFull.casosDia,
                    type: 'bar',
                    name: 'Casos cada dia'
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.fallecidosDia,
                    type: 'bar',
                    name: 'Fallecidos al dia'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.hospitalizadosDia,
                    type: 'bar',
                    name: 'Hopitalizados al dia'
                     
                },
                {
                    x: this.madridDataFull.fechas,
                    y:  this.madridDataFull.uciDia,
                    type: 'bar',
                    name: 'UCI al dia'
                     
                }
            ],
            { 
                margin: { t: 0 }
            },
            {responsive: true, showEditInChartStudio: false});
    }

    plotGraphE1(data){
        Plotly.newPlot( 
            this.GraphE1.nativeElement,
            [
                {
                    y: data.ccaa, 
                    x:  data.acumulados, 
                    type: 'bar',
                    orientation: 'h'
                }
            ],
            { 
                margin: { t: 0, l:120 }
            },
            {responsive: true, displayModeBar: false});
    }

    plotGraphE2(data){
        Plotly.newPlot( 
            this.GraphE2.nativeElement,
            [
                {
                    y: data.ccaa, 
                    x:  data.ultimas, 
                    type: 'bar',
                    orientation: 'h'
                }
            ],
            { 
                margin: { t: 0, l:120 }
            },
            {responsive: true, displayModeBar: false});
    }

    plotGraphE3(data){
        Plotly.newPlot( 
            this.GraphE3.nativeElement,
            [
                {
                    y: data.ccaa, 
                    x:  data.incidencia, 
                    type: 'bar',
                    orientation: 'h'
                }
            ],
            { 
                margin: { t: 0, l:120 }
            },
            {responsive: true, displayModeBar: false});
    }

}


