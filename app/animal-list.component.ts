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
    <li [class]="dietColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age: filterByAge"><strong>{{currentAnimal.name}}</strong> Spiecies: {{currentAnimal.species}} | Age: {{currentAnimal.age}} | Location: {{currentAnimal.location}} | Sex: {{currentAnimal.sex}} | Likes: {{currentAnimal.likes}} | Dislikes: {{currentAnimal.dislikes}} <br> <button (click)="editAnimalClick(currentAnimal)">Edit!</button></li>
  </ul>
  <h4>Key:</h4>
  <div id="key">
    <p><span id="red">Carnivore<img src="/resources/images/wec.gif"></span></p>
    <p><span id="green">Herbivore<img src="http://www.dialbforblog.com/archives/793/superrabbit2.gif"></span></p>
    <p><span id="blue">Omnivore<img src="https://68.media.tumblr.com/e02587fff48f3f210cf1c4ce644c492b/tumblr_ny4au0lREN1s2wio8o1_500.gif"></span></p>
  </div>
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
    if (currentAnimal.diet === 'Carnivore' || currentAnimal.diet === 'carnivore'){
      return "bg-danger";
    } else if (currentAnimal.diet === 'Herbivore' || currentAnimal.diet === 'herbivore') {
      return  "bg-success";
    } else if(currentAnimal.diet === 'Omnivore' || currentAnimal.diet === 'omnivore') {
      return "bg-info";
    }else {
      return "bg-default"
    }
  }

}
