import { Component } from '@angular/core';

const todos = [
    {
        title: 'Learn JS',
        completed: true
    },
    {
        title: 'Learn Angular',
        completed: false
    },
    {
        title:  'Make application',
        completed: false
    }
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