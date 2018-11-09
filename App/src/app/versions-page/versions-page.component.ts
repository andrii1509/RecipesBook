import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {SharingService} from "../services/sharing.service";
import {Recipe} from "../models/recepieModel";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-versions-page',
  templateUrl: './versions-page.component.html',
  styleUrls: ['./versions-page.component.css']
})
export class VersionsPageComponent implements OnInit {

  recipesArr : any[];
  currentRecipe : any;

  constructor(
    private dataService : DataService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentRoute.queryParams.subscribe((data)=>{
      console.log(data);
      this.currentRecipe = data;
      this.dataService.getVersions(this.currentRecipe).subscribe((docs)=>{
        console.log(docs);
        this.recipesArr = docs;
        console.log(this.recipesArr.length);
      })
    })
  }


}
