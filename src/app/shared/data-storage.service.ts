import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { RecipeService } from "../recipes/recipe.service";
import { Observable } from "rxjs";
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService,
  ){}

  storeRecipes(): Observable<Response> {
    const token = this.authService.getToken();

    return this.http.put(
      'https://ngrecipe-e4893.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ngrecipe-e4893.firebaseio.com/recipes.json?auth=' + token)
      .subscribe((response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      })
  }

}
