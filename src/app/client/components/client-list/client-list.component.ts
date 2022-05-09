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
  clientIDToDelete: string = "" as string;

  constructor(private store: Store<State>,private modalService: NgbModal ) {
    this.currentClient$ = store.select(selectActiveClient);
    this.currentClient$.subscribe((selectedClient) => {
      if(selectedClient!=null)
      {
      this.clientIDToDelete = selectedClient.clientID;
    }});
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

  deleteClient(clientId: string)
  {
    this.store.dispatch(ClientsPageActions.deleteClient({clientId: clientId}));
    this.removeSelectedClient();
    this.modalService.dismissAll();
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
