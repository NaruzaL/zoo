import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div id = "newAnimalForm">
    <h1>Add a new aniaml</h1>
    <div>
     <label>Species: </label>
     <input #newSpecies>
    </div>
    <div>
     <label>Name: </label>
     <input #newName>
    </div>
    <div>
     <label>Age: </label>
     <input #newAge>
    </div>
    <div>
     <label>Diet: </label>
     <input #newDiet>
    </div>
    <div>
     <label>Location: </label>
     <input #newLocation>
    </div>
    <div>
    <label>Caretakers: </label>
    <input #newCaretakers>
    </div>
    <div>
     <label>Sex: </label>
     <input #newSex>
    </div>
    <div>
     <label>Likes: </label>
     <input #newLikes>
    </div>
    <div>
     <label>Dislikes: </label>
     <input #newDislikes>
    </div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
 </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
