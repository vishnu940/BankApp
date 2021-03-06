import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';





@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  @Input() item:any

  @Output() onDelete=new EventEmitter()
  
  @Output() onCancel=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
   this.onCancel.emit()
  }

  delete(){
    this.onDelete.emit(this.item)
  }

}
