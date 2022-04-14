import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientModel } from "src/app/shared/models";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent  {

  @Input() clients!: ClientModel[] | null;
  @Input() readonly = false;
  @Output() select = new EventEmitter();

}
