import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/recepieModel";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-version-view',
  templateUrl: './version-view.component.html',
  styleUrls: ['./version-view.component.css']
})
export class VersionViewComponent implements OnInit {

  @Input('item') item : any;

  constructor(
  ) { }

  ngOnInit() {

  }


}
