import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm : NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;

  constructor(private shoppinglistservice : shoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppinglistservice.startedEditing
    .subscribe(
      (index : number) => { 
         this.editedItemIndex = index;
         this.editMode = true;
         this.editedItem = this.shoppinglistservice.getIngredient(index);
         this.slForm.setValue({
           name : this.editedItem.name,
           amount : this.editedItem.amount
         })
      }
    )
  }
 


  onSubmit(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppinglistservice.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
    this.shoppinglistservice.addIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppinglistservice.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
