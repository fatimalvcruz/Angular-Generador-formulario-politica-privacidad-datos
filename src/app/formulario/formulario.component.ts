import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
 
  url:string = "";
  sitioweb:string = "";
  fisico: boolean = false;
  juridico: boolean = false;
  textoFisico: string = " ";
  responsableFichero:string = "";
  dniResponsableFichero: string = ""; 
  direccionResponsableFichero:string = "";
  telefonoResponsableFichero:string =  "";
  faxResponsableFichero:string =  "";
  email:string = "";
  datos:boolean = false;
  textoDatos: string ="";
  tiempoConservar: string ="";
  usoDatos:boolean = false;
  textoUsoDatos: string ="";
  nombreDatos: string ="";
  certificadoSsl: boolean = false;
  textoCertificadoSsl :string = "";
  razonSocial:string = "";
  cifResponsableFichero: string = ""; 
  tipoRegistro: string = ""; 
  datosRegistrales:string ="";
  ssl:boolean = false;
  fecha : Date = new Date();


 
 

 
  setcertificadoSsl(event:Event){

    if((<HTMLInputElement>event.target).value=="si" ){
   this.textoCertificadoSsl = ' Una persona física';
   this.ssl = true;
    } 

  } 


  setTipoEmpresa(event:Event){

    if((<HTMLInputElement>event.target).value=="si" ){
        this.textoFisico = ' Una persona física';
        this.fisico = true;
        this.juridico = false;

    } else {
        this.textoFisico = ' Una persona jurídica (ej. sociedad, asociación)';
        this.juridico = true;
        this.fisico = false;

    }

  } 

  setTipodatos(event:Event){

    if((<HTMLInputElement>event.target).value=="si" ){
   this.textoDatos= 'únicamente datosidentificativos (nombre, apellido, número de teléfono, correo electrónico, etc.)';

    } else {
      this.textoDatos = 'datos identificativos y datos personales sensibles o epecialmente protegidos (ej. origen étnico o racial, opiniones políticas, convicciones religioas o filosóficas, afiliación sindical, datos genéricos, datos biométricos, datos de salud)';
      this.datos = true;
    }

  } 
  setTipoUsoDatos(event:Event){

    if((<HTMLInputElement>event.target).value=="si" ){
   this.textoUsoDatos= 'Serán compartidos con otras personas o empresas (ej. Google, Google Analitycs, empresa que realiza el servicio del hosting)';
   this.usoDatos = true;

    } else {
      this.textoUsoDatos = 'no serán compartidos con otras personas o empresas';
      this.usoDatos = false;

    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
