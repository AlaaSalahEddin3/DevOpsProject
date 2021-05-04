import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  flag=false;
  products=["p1","p2","p3"];
  ngOnInit(): void {
  }
 pform=this.fb.group({
name:[''],
check:[''],


comments:this.fb.array([]),



  }
  )
  get check()
  {
    return this.pform.get('check')
  }
get comments()
{
      return this.pform.get('comments') as FormArray
}

  
  Add()
  {
   this.comments.push(this.fb.control('')); 
  }
  giveDiscount(state){
    if(state.currentTarget.checked)
    this.flag=false;
    else{
      this.flag==true;
    }
    
  }
}
