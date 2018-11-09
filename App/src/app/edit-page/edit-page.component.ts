import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Recipe} from "../models/recepieModel";
import {DataService} from "../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SharingService} from "../services/sharing.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  date = new Date();
  editRecipe : any;

  constructor(
    private dataService : DataService,
    private routes : Router,
    private currentRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.currentRoute.queryParams.subscribe((data)=>{
      this.editRecipe = data;
    });

  }

  sendNewFormData(form) {
    let recipe = {
      name : form.value.name,
      description : form.value.description,
      date : new Date(),
    };
    this.dataService.editRecipe({
      obj : recipe,
      old : this.editRecipe,
      id : this.editRecipe._id
    }).subscribe((data)=>{
      console.log(data);
      this.routes.navigate(['']);
    })
  }
}
