import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipeSelectedYetComponent } from './recipies/no-recipe-selected-yet/no-recipe-selected-yet.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { AddNewRecipeComponent } from './recipies/add-new-recipe/add-new-recipe.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipiesComponent,
    children: [
      { path: '', component: NoRecipeSelectedYetComponent },
      { path: 'new', component: AddNewRecipeComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: AddNewRecipeComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
