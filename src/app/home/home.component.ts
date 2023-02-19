import { InformationService } from './../information.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private activatedroute:ActivatedRoute,private router:Router, private service:InformationService){}

list=this.service.list;
viewblog(i:number){
  this.activatedroute.params.subscribe((params)=>{
  this.router.navigate(['/view',i+1])
  });
  }
}
