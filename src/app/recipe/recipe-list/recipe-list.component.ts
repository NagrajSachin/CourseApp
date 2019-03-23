import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected= new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('recipe1','first recipe description','./assets/images/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('recipe2','second recipe description','./assets/images/23bcd559-1e27-4c54-90a7-812690764c7f.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(recipe : Recipe){
    this.recipewasSelected.emit(recipe);
  }
}
