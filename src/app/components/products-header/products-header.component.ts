import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  // emit event to parent
  @Output() columnsCountChange = new EventEmitter<number>()
  sort = 'desc';
  itemShowCount = 12

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    console.log(colsNum);
    
    this.columnsCountChange.emit(colsNum)
  }
}
