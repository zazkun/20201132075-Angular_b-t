import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { FbServisService } from 'src/app/services/fbServis.Service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  adsoyad:string;
  uid:string;
  kayitlar:Kayit[];
  constructor(
    public fbServis : FbServisService,
    public router : Router
  ) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.KayitListele();
  }
  KayitListele(){
    this.fbServis.KayıtListeleByUID(this.uid).snapshotChanges().subscribe(data=>{
      this.kayitlar=[];
      data.forEach(satir=>{
        const y ={...satir.payload.toJSON(),key:satir.key};
        this.kayitlar.push( y as Kayit);
      });
    })
  }
  OturumKontrol(){
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
  }

}
