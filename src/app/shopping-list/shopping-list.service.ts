import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class shoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('apple',1),
        new Ingredient('banana',2),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredientTo(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }
}