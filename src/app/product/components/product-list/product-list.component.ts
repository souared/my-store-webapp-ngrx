import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  {

  @Input() products!: ProductModel[] | null;
  @Input() readonly = false;
  @Output() select = new EventEmitter();

}
