import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li [class]="dietColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}} <button (click)="editAnimalClick(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editAnimalClick(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  dietColor(currentAnimal){
    if (currentAnimal.diet === 'Carnivore'){
      return "bg-danger";
    } else if (currentAnimal.diet === 'Herbivore') {
      return  "bg-success";
    } else {
      return "bg-info";
    }
  }

}
