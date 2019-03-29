import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class shoppingListService{
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('apple',1),
        new Ingredient('banana',2),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index : number){
        return this.ingredients[index];
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredientTo(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    updateIngredient(index : number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    deleteIngredient(index : number){
        this.ingredients.splice(index, 1);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}