import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  k;

  selectedRecipe: any;

  constructor() {}

  ngOnInit(): void {}
}
