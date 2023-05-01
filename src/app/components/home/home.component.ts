import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;

  onColumnsCountChange(colsNum: number): void {
    // console.log(colsNum); 
    this.cols = colsNum;
  }
  onShowCategory(newCategory: string): void {
    // console.log(newCategory);
    this.category = newCategory
  }
}
