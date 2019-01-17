import { Component } from '@angular/core';

const todos = [
    'Learn JS', 'Learn Angular', 'Make application'
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls : ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;
}