import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  constructor(private activatedroute:ActivatedRoute,private router:Router, private service:InformationService){}

  list=this.service.list;

  editblog(i:number){
this.activatedroute.params.subscribe((params)=>{
this.router.navigate(['/edit',i+1])
});
  }
viewblog(i:number){
  this.activatedroute.params.subscribe((params)=>{
  this.router.navigate(['/view',i+1])
  });
  }
 remove(itemdel:any){

  this.service.list.splice(itemdel,1)
  alert("Removed");



}
}
