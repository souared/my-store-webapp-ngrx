import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientModel } from 'src/app/shared/models';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss'],
})
export class ClientEditComponent {
  originalClient: ClientModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  clientForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    address: new FormControl(""),
    city: new FormControl(""),
    province: new FormControl(""),
    postalCode: new FormControl(""),
    active: new FormControl(false)
  });

  @Input() set client(client: ClientModel | null) {
    this.clientForm.reset();
    this.originalClient = undefined;

    if (client) {
      this.clientForm.setValue({
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        address: client.address,
        city: client.city,
        province: client.province,
        postalCode: client.postalCode,
        active: client.active
      });

      this.originalClient = client;
    }
  }

  onSubmit(client: ClientModel) {
    this.save.emit({ ...this.originalClient, ...client });
  }
}
