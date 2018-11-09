import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../models/recepieModel";
import { Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe : Recipe;
  @Output()  emitRecipeToRemove = new EventEmitter<any>();
  constructor(
    private routing : Router,
    private dataService : DataService
  ) { }

  ngOnInit() {
  }
  changeRecipe() {
    this.routing.navigate(['edit'], {queryParams: this.recipe})
  }

  watchVersions() {
    this.routing.navigate(['versions'], {queryParams : this.recipe})
  }

  removeRecipe() {
    this.dataService.deleteRec(this.recipe).subscribe((data)=>{
      console.log(data);
      this.sendRecipeToDel();
    })
  }
  sendRecipeToDel(){
    this.emitRecipeToRemove.emit(this.recipe)
  }
}
