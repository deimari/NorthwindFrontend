import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategoryId: number;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(categoryId: number) {
    this.currentCategoryId = categoryId;
  }

  getCategoryClass(category: Category) {
    if (category.categoryId == this.currentCategoryId) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass() {
    if (this.currentCategoryId < 1 || !this.currentCategoryId){
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
