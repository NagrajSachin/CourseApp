import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();
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

      addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe : Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index : number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}