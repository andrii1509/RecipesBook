import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {RecipesPageComponent} from "../recipes-page/recipes-page.component";
import {VersionsPageComponent} from "../versions-page/versions-page.component";
import {EditPageComponent} from "../edit-page/edit-page.component";

const routes = [
  {path : '', component : RecipesPageComponent},
  {path : 'versions', component : VersionsPageComponent},
  {path : 'edit', component : EditPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
