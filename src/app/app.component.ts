import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'basic-pipe-exercises';
  name: string = 'Nancy';
  wallet: number = 50.04;
  sentence: string = 'I went to go watch the Spiderman movie with my aunt May.';
  loremSentence: string =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.`;
  petThoughts: string[] = ['Cats are awesome.', 'Cats are sneaky', 'Cats and dogs are both amazing!', 'Dogs are great.', 'Dogs are hyper.'];
  filterResults: string = '';
};
