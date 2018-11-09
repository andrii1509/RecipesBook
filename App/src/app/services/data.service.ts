import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Recipe } from "../models/recepieModel";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  recipes = 'http://localhost:3000/recipes';
  edit = 'http://localhost:3000/editRecipe';
  add = 'http://localhost:3000/add';
  recipeVersions = 'http://localhost:3000/versions';
  deleteRecipe = 'http://localhost:3000/deleteRecipe';
  constructor(
    private http : HttpClient
  ) { }
  getRecipes() : Observable<any[]>{
    return this.http.get<any[]>(this.recipes)
  };
  editRecipe(obj) : Observable<any>{
    return this.http.post<any>(this.edit, obj)
  }
  addRecipe(newRecipe): Observable<any>{
    return this.http.post<any>(this.add, newRecipe)
  }
  getVersions(id) : Observable<any[]>{
    return this.http.post<any[]>(this.recipeVersions, id)
  }

  deleteRec(recipe) : Observable<any>{
    return this.http.post<any>(this.deleteRecipe, recipe)
  }
}
