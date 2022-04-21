import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { Observable } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClientModel, ClientRequiredProps } from "src/app/shared/models";

import { Store } from '@ngrx/store';
import {
  State,
  selectActiveClient,
} from 'src/app/shared/state';
import { ClientsPageActions } from '../../actions';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent  {
  @Input() clients!: ClientModel[] | null;
  @Input() readonly = false;
  @Output() select = new EventEmitter();



  currentClient$: Observable<ClientModel | null>;

  constructor(private store: Store<State>,private modalService: NgbModal ) {
    this.currentClient$ = store.select(selectActiveClient);
  }


  onCancel() {
    this.removeSelectedClient();
    this.modalService.dismissAll();
  }

  onSave(client: ClientRequiredProps | ClientModel) {
    this.saveClient(client);
    this.removeSelectedClient();
    this.modalService.dismissAll();
  }

  removeSelectedClient() {
    this.store.dispatch(ClientsPageActions.clearSelectedClient());
  }

  saveClient(clientProps: ClientRequiredProps) {
    this.store.dispatch(ClientsPageActions.saveClient({ client: clientProps }));
  }

  deleteClient(client: ClientRequiredProps | ClientModel)
  {
    this.store.dispatch(ClientsPageActions.deleteClient({clientId: client.clientID}))
  }

  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
