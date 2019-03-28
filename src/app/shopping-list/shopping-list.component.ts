import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription : Subscription;

  constructor(private shopplistservice : shoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopplistservice.getIngredients();
    this.subscription = this.shopplistservice.ingredientAdded.subscribe(
      (ingredients: Ingredient[])=>{
         this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
