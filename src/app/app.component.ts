import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:any = [];
  taxistaSelecionado:any = {};
  title = 'app';
  lat = 18.4967726;
  lng = -69.99436039999999;
  siguiendo:boolean =  false;
  constructor(private afDB: AngularFireDatabase){
    afDB.list('/usuarios').subscribe((taxistas)=>{
      this.items = taxistas;
      if(this.siguiendo){
        for(let taxista of taxistas){
          if(taxista.$key === this.taxistaSelecionado.$key){
            this.lat = taxista.lat;
            this.lng = taxista.lng;
          }
        }
      }
    })
  }
  seguir_taxista(taxista: any){
    this.lat = taxista.lat;
    this.lng = taxista.lng;
    this.taxistaSelecionado = taxista;
    this.siguiendo = true;
  }
  dejar_seguir(){
    this.siguiendo = false;
    this.taxistaSelecionado = {};
  }
}
