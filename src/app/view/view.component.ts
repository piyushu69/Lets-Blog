import { Component } from '@angular/core';
import { InformationService } from './../information.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private activatedroute:ActivatedRoute, private router:Router, private service:InformationService){}
  id:any;
  viewform=new FormGroup({
  'title':new FormControl('',[Validators.required]),
  'author':new FormControl('',[Validators.required]),
  'description':new FormControl('',[Validators.required,Validators.minLength(150)]),
  }
  );
  get title(){
    return this. viewform.get('title');
  }
  // get author(){
  //   return this.Blogform.get('author');
  // }
  get description(){
  return this. viewform.get('description');
  }



Edit(){
this.service.list[this.id-1]=this.viewform.value;
}
ngOnInit():void
{
this.activatedroute.params.subscribe((params)=>{
this.id=params['i'];
});
if(this.id){
this.viewform.controls["title"].setValue(this.service.list[this.id-1].title);
this.viewform.controls["author"].setValue(this.service.list[this.id-1].author);
this.viewform.controls["description"].setValue(this.service.list[this.id-1].description);

}

}
back(){
  this.activatedroute.params.subscribe((params)=>{
    this.router.navigate(['/manage'])
  })
  }
}
