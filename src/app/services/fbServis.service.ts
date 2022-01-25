import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'
import { Kayit } from '../models/kayit';
import { Uye } from '../models/uye';
@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/Kayitlar2';
  private dbUye = '/Uye';

  kayitRef: AngularFireList<Kayit> = null;
  uyeRef: AngularFireList<Uye> = null;
  
  constructor(
  
  public db: AngularFireDatabase,
  public afAuth: AngularFireAuth
  
  )
  
  {
  
  this.kayitRef = db.list(this.dbKayit);
  this.uyeRef = db.list(this.dbUye);
  
  }
  /* firabase başlangıç */
KayıtListele(){
  return this.kayitRef;
}
KayıtListeleByUID(uid:string){
  return this.db.list("/Kayitlar2",q=>q.orderByChild("uid").equalTo(uid));
}
KayıtByKey(key:string){
  return this.db.object("/Kayitlar2/"+key);
}
KayıtEkle(kayit:Kayit){
  return this.kayitRef.push(kayit);
}
KayıtDuzenle(kayit:Kayit){
  return this.kayitRef.update(kayit.key,kayit);
}
KayıtSil(key:string){
  return this.kayitRef.remove(key);
}
/* firabase bitiş */ 

/* Oturum başlangıç */
OturumAc(mail:string,parola:string){
  return this.afAuth.signInWithEmailAndPassword(mail,parola);
}
OturumKapat(){
  return this.afAuth.signOut();
}
UyeOl(uye:Uye){
  return this.afAuth.createUserWithEmailAndPassword(uye.mail,uye.parola)
}
UyeEkle(uye:Uye){
  return this.uyeRef.push(uye);
}
OturumKontrol(){
  if(localStorage.getItem("user")){
    return true;
  }else{
    return false;
  }
}

}
