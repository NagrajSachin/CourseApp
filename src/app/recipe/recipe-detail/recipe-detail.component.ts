import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe : Recipe;
 id : number;

  constructor(private recipeservice : RecipeService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params : Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeservice.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeservice.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditClick(){
    this.router.navigate(['edit'], { relativeTo : this.route});
  }

  onDelete(){
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
