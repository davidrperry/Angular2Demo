import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() width : Number
  @Input() labelWidth : Number = 1
  @Input() label : String = 'Label'
  @Input() model : any = 'blank'
  @Input() placeholder : String
  constructor() { }

  ngOnInit() {
    this.placeholder = this.placeholder?  this.placeholder :  this.label 
  }

}
