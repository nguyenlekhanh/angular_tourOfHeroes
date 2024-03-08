import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common'; //ngFor
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, //uppercase
    FormsModule,   //ngModel
    HeroDetailComponent,
    RouterModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  //xxx
  constructor(private heroService: HeroService) {

  }

  //xxx
  ngOnInit(): void {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
