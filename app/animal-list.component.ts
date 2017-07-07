import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class = "selectForm">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Animals under two years old</option>
      <option value="olderAnimals">Animals two years old and up</option>
    </select>
  </div>

  <ul>
    <li [class]="dietColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age: filterByAge">{{currentAnimal.name}} <button (click)="editAnimalClick(currentAnimal)">Edit!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

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
