import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from "../auth/auth-guard.service";
import { SharedModule } from "../shared/shared.module";

const recipesRoutes: Routes = [
  // '' means 'recipes' after lazing load
  { path: '', component: RecipesComponent,children: [
    { path:'', component: RecipeStartComponent },
    { path:'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path:':id', component: RecipeDetailComponent },
    { path:':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
