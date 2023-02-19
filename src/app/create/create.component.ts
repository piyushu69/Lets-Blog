import { InformationService } from './../information.service';
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

constructor(private service:InformationService){}
id:any=0;
Blogform=new FormGroup({
'title':new FormControl('',[Validators.required]),
'author':new FormControl('',[Validators.required]),
'description':new FormControl('',[Validators.required,Validators.minLength(150)]),
}
);
get title(){
  return this.Blogform.get('title');
}
// get author(){
//   return this.Blogform.get('author');
// }
get description(){
return this.Blogform.get('description');
}

onClick()
{
this.service.list.push(this.Blogform.value);
alert("Blog Added !!");
}




}

