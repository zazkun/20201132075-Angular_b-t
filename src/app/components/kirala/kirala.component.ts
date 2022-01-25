import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FbServisService } from 'src/app/services/fbServis.Service';

@Component({
  selector: 'app-kirala',
  templateUrl: './kirala.component.html',
  styleUrls: ['./kirala.component.css']
})
export class KiralaComponent implements OnInit {
  returnUrl = "";
  constructor(
    public fbServis : FbServisService,
    public router : Router,
    public toast : ToastrService
  ) { }

  ngOnInit(): void {
  }
  Kirala(){
    alert("Araç Kiralandı")
    this.router.navigateByUrl(this.returnUrl);

  }
  ToastUygula(){
    this.toast.success("Araç Kiralama Tamamlandı","Başarılı");
    this.router.navigateByUrl(this.returnUrl);
  }

}
