import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Test Recipe', 'this is just a description', 'https://static01.nyt.com/images/2018/10/23/dining/as-white-bean-tomato/as-white-bean-tomato-superJumbo-v2.jpg?quality=90&auto=webp'),
    // tslint:disable-next-line:max-line-length
    new RecipeModel('Anohter Recipe', 'this is just a description', 'https://static01.nyt.com/images/2018/10/23/dining/as-white-bean-tomato/as-white-bean-tomato-superJumbo-v2.jpg?quality=90&auto=webp')
  ];
  constructor() { }

  ngOnInit() {
  }

}
