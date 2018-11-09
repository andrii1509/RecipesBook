import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Recipe} from "../models/recepieModel";

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  recipes : Recipe[];
  constructor(
    private dataService : DataService
  ) { }

  ngOnInit() {
    this.dataService.getRecipes().subscribe((data)=>{
      this.recipes = data;
      this.recipes.sort((el1, el2) : number  =>{
        let date1 : number = (new Date(el1.date)).getTime();
        let date2 : number = (new Date(el2.date)).getTime();
        return date2 - date1
      })

    })
  }
  receiveRecipe(event){
    this.recipes.push(event);
    this.recipes.sort((el1, el2) : number  =>{
      let date1 : number = (new Date(el1.date)).getTime();
      let date2 : number = (new Date(el2.date)).getTime();
      return date2 - date1
    })
  }
  receiveRecipeToRemove(event){
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i]._id === event._id){
        this.recipes.splice(i, 1)
      }
    }
  }


}
