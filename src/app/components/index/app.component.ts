import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'NILESH PATIL';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "test",
		last_name : "test",
		email : "test@yopmail.com",
		phone : 9503733178,
		department : "Science"
	},
	{
		id : 2,
		first_name : "test1",
		last_name : "test1",
		email : "test1@yopmail.com",
		phone : 8574889658,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "test2",
		last_name : "test2",
		email : "test2@yopmail.com",
		phone : 7485889658,
		department : "Science"
	},
	{
		id : 4,
		first_name : "test3",
		last_name : "test3",
		email : "test3@yopmail.com",
		phone : 9685589748,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "test4",
		last_name : "test4",
		email : "test4@yopmail.com",
		phone : 8595856547,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}