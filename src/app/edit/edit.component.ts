import { Component } from '@angular/core';
import { InformationService } from './../information.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private activatedroute:ActivatedRoute, private router:Router, private service:InformationService){}
  id:any;
  editform=new FormGroup({
  'title':new FormControl('',[Validators.required]),
  'author':new FormControl('',[Validators.required]),
  'description':new FormControl('',[Validators.required,Validators.minLength(150)]),
  }
  );
  get title(){
    return this. editform.get('title');
  }
  // get author(){
  //   return this.Blogform.get('author');
  // }
  get description(){
  return this. editform.get('description');
  }



Edit(){
this.service.list[this.id-1]=this.editform.value;
}

ngOnInit():void
{
this.activatedroute.params.subscribe((params)=>{
this.id=params['i'];
});
if(this.id){
this.editform.controls["title"].setValue(this.service.list[this.id-1].title);
this.editform.controls["author"].setValue(this.service.list[this.id-1].author);
this.editform.controls["description"].setValue(this.service.list[this.id-1].description);


}

}
back(){
this.activatedroute.params.subscribe((params)=>{
  this.router.navigate(['/manage'])
})
}

}
