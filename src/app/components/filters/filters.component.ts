import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
@Output() showCategory = new EventEmitter<string>()

  categories = ['shoes', 'sports']
  
  onShowCategory(category: string): void {
    console.log(category);
    
    this.showCategory.emit(category)
  }
}
