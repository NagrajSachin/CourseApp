import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class shoppingListService{
    ingredientAdded = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('apple',1),
        new Ingredient('banana',2),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredientTo(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}