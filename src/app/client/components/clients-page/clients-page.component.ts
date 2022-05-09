import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  State,
  selectAllclients,
  selectActiveClient,
} from 'src/app/shared/state';

import { ClientModel, ClientRequiredProps } from 'src/app/shared/models';
import { ClientsPageActions } from '../../actions';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {

  clients$: Observable<ClientModel[] | null>;
  currentClient$: Observable<ClientModel | null>;

  constructor(private store: Store<State>) {
    this.clients$ = store.select(selectAllclients);
    this.currentClient$ = store.select(selectActiveClient);
  }

  ngOnInit(): void {
    this.store.dispatch(ClientsPageActions.enter());
  }

  onSelect(client: ClientModel) {
    this.store.dispatch(
      ClientsPageActions.selectClient({ clientId: client.clientID})
    );
  }

  onCancel() {
    this.removeSelectedClient();
  }


  onSave(client: ClientRequiredProps | ClientModel) {
    this.saveClient(client);
  }

  removeSelectedClient() {
    this.store.dispatch(ClientsPageActions.clearSelectedClient());
  }

  saveClient(clientProps: ClientRequiredProps) {
    this.store.dispatch(ClientsPageActions.saveClient({ client: clientProps }));
  }

}
