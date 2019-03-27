import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
        new Recipe('recipe1','first recipe description','./assets/images/frying-pan-pizza-easy-recipe-collection.jpg',[
          new Ingredient('egg',1),
          new Ingredient('bread',2)
        ]),
        new Recipe('recipe2','second recipe description','./assets/images/23bcd559-1e27-4c54-90a7-812690764c7f.jpg',[
          new Ingredient('egg',1),
          new Ingredient('bread',2)
        ])
      ];

      constructor(private shoppinglistservice : shoppingListService){
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index : number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppinglistservice.addIngredientTo(ingredients);
      }
}