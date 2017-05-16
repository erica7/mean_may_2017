#Mongoose Dashboard Checklist

1. What are my dependencies?
	+ 'express'
	+ 'ejs'
	+ 'body-parser'
	+ 'mongoose'
	+ 'path'

2. Set up file tree, including views:
	+ 'index.ejs'
	+ 'new.ejs'
	+ 'edit.ejs'
	+ 'show.ejs'

3. Add HTML to views

4. Create server
	+ Add routes
	+ Add logic to interact with database...
	 	+ Add new dog to the database
	 	+ Fetch all dogs
	 	+ Update a dog
	 	+ Delete
	 	+ Show

5. Connect database to server
	+ Create model for our data (dogs)



This exercise will allow you to utilize all 4 CRUD methods with Mongoose. In this exercise, you'll build an app which manages a pack of some kind of animal (think otter, rabbit, or owl). You need to be able to add a new animal, update it, and delete it. You should use the following routes to build this app:

GET '/' Displays all of the mongooses. GET '/mongooses/:id' Displays information about one mongoose. GET '/mongooses/new' Displays a form for making a new mongoose. POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new'). GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose. POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id'). POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
Remember these routes are just examples, avoid using mongooses for your dashboard if you can!