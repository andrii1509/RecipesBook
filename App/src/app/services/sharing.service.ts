import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Recipe} from "../models/recepieModel";

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor() { }
  channel_0: Subject<any> = new Subject<any>();
  channel_1: Subject<any> = new Subject<any>();

}
