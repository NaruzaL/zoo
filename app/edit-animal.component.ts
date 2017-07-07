import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <h3>Edit Animal</h3>
      <label>Enter Animal Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <label>Enter Animal Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <label>Enter Number of Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <button (click)="finishedEditingClick()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedEditingClicked = new EventEmitter();

  finishedEditingClick() {
    this.finishedEditingClicked.emit();
  }

}
