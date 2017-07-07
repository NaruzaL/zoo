import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <div id="editAnimal">
        <h3>{{childSelectedAnimal.name}}</h3>
        <h3>Edit Animal</h3>
          <div>
          <label>Enter Animal Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species">
          </div>
          <div>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          </div>
          <div>
          <label>Enter Animal Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
          </div>
          <div>
          <label>Enter Animal Diet:</label>
          <input [(ngModel)]="childSelectedAnimal.diet">
          </div>
          <div>
          <label>Enter Animal Location:</label>
          <input [(ngModel)]="childSelectedAnimal.location">
          </div>
          <div>
          <label>Enter Number of Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          </div>
          <div>
          <label>Enter Animal Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex">
          </div>
          <div>
          <label>Enter Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes">
          </div>
          <div>
          <label>Enter Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
          </div>
        <button class="button-margin" (click)="finishedEditingClick()">Done</button>
      </div>
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
