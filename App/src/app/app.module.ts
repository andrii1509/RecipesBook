import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes-page/recipe/recipe.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { AddRecipeComponent } from './recipes-page/add-recipe/add-recipe.component';
import { VersionsPageComponent } from './versions-page/versions-page.component';
import {RoutingModule} from "./routing/routing.module";
import {RouterModule} from "@angular/router";
import { EditPageComponent } from './edit-page/edit-page.component';
import { VersionViewComponent } from './versions-page/version-view/version-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesPageComponent,
    AddRecipeComponent,
    VersionsPageComponent,
    EditPageComponent,
    VersionViewComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
