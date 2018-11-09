import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Recipe} from "../../models/recepieModel";
import {Router} from "@angular/router";
import {SharingService} from "../../services/sharing.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  newRecipe : any;
  @Output()  emitRecipe = new EventEmitter<any>();
  constructor(
    private dataService : DataService,
    private navigator : Router,
  ) { }

  ngOnInit() {
  }

  sendForm(form: HTMLFormElement) {
    let date = new Date();
    this.newRecipe = {
      name : form.value.name,
      description : form.value.description,
      date : date
    };
    this.dataService.addRecipe(this.newRecipe).subscribe((data)=>{
      console.log(data);
      // this.navigator.navigate([''])
      this.sendRecipe();
    })
  }
  sendRecipe(){
    this.emitRecipe.emit(this.newRecipe)
  }
}
