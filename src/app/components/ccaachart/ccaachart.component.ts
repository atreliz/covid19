import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import  *  as  ccaadata  from  '../../data/caadata.json';

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
    myccaadata:any;

    selectedCCAA: any;
    options:any;
    loading:boolean;

    @ViewChild("GraphA", { static: true })
    public GraphA: ElementRef; 


    @ViewChild("GraphB", { static: true })
    public GraphB: ElementRef; 

    constructor(private http: HttpClient) { }

    ngOnInit(){
        this.myccaadata=ccaadata;

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

        
        this.selectedCCAA = "MD";
        this.massageData("MD","create");
        //this.getCSV() //CORS ERROR :(

    }

    onChange(value) {
        this.massageData(value,"update");
    }

    getCSV() {
        var localUrl="https://covid19.isciii.es/resources/serie_historica_acumulados.csv"
        this.http.get(localUrl)
          .subscribe(data => {

            console.log("CSV ",data);
          });
    }

    massageData(ccaacode, mode){
        console.log("load ", ccaacode);
        this.fullData = this.myccaadata.default;

        this.madridData = this.fullData.filter( (item) => item['CCAA Codigo ISO']== ccaacode );
        console.log("clean data",this.madridData)

        this.madridDataFull.fechas = this.madridData.map( (item) => item.Fecha);
        this.madridDataFull.casos = this.madridData.map( (item) => item.Casos!="" ? item.Casos:0 );
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
            {responsive: true, showEditInChartStudio: false});
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
                margin: { t: 0 }
            },
            {responsive: true, showEditInChartStudio: false});
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
                margin: { t: 0 }
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

}


