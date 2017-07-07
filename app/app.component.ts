import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class = "container">
  <h1 id="title">Looney Toons Zoo</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (finishedEditingClicked)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Rabbit', 'Buggs Bunny', 1, 'Herbivore', 'Northern Trail', 2, 'Male', 'Carrots', 'Elmer Fudd'),
    new Animal('Coyote', 'Wile E Coyote', 4, 'Carnivore', 'Wolf run', 6, 'Male', 'Roadrunner meat', 'ACME mail-order devices'),
    new Animal('Tasmanian Devil', 'Tasmanian Devil', 8, 'Omnivore', 'Northern Trail', 2, 'Male', 'To eat stuff', 'Not eating stuff') ];


  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
