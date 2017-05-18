#!/bin/sh

# Create a database called 'my_first_db'
use my_first_db
# Create students collection
db.createCollection("students")

# Each document you insert into this collection should have the following format:
# ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
# Create 5 students with the appropriate info
db.students.insert({name: 'John', home_state: 'California', lucky_number: 7, birthday: {month: 12, day: 12, year: 2012}})
db.students.insert({name: 'Jane', home_state: 'Washington', lucky_number: 10, birthday: {month: 5, day: 15, year: 2001}})
db.students.insert({name: 'Jennifer', home_state: 'Texas', lucky_number: 1, birthday: {month: 9, day: 1, year: 1998}})
db.students.insert({name: 'Jay', home_state: 'New York', lucky_number: 15, birthday: {month: 11, day: 11, year: 2011}})
db.students.insert({name: 'Jack', home_state: 'Texas', lucky_number: 9, birthday: {month: 3, day: 21, year: 2005}})

# Get all students
db.students.find()
# Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo)
db.students.find({$or: [{home_state: "California"}, {home_state:"Washington"}]})
db.students.find({home_state: {$in: ["California", "Washington"]}})

# Get all students whose lucky number is:
# greater than 3, less than or equal to 10, between 1 and 9 (inclusive)
db.students.find({lucky_number: {$gt: 3}})
db.students.find({lucky_number: {$lte: 10}})
db.students.find({lucky_number: {$gte: 1, $lte: 9}})

# Add a field to each student collection called 'interests' that is an ARRAY
# It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({}, {$set: {"interests": ['coding', 'brunch', 'MongoDB']}}, {multi:true})

# Add some unique interests for each particular students into each of their interest arrays
db.students.update({name: "John"}, {$push: {interests: {$each: ['JavaScript', 'biking']}}})
db.students.update({name: "Jane"}, {$push: {interests: {$each: ['Ruby', 'hiking']}}})
db.students.update({name: "Jennifer"}, {$push: {interests: {$each: ['Python', 'running']}}})
db.students.update({name: "Jay"}, {$push: {interests: {$each: ['Erlang', 'walking']}}})
db.students.update({name: "Jack"}, {$push: {interests: {$each: ['C++', 'sitting']}}})

# Add the interest 'taxes' into someone's interest array
db.students.update({name: "John"}, {$push: {interests: "taxes"}})
# Remove the 'taxes' interest you just added
db.students.update({name: "John"}, {$pull: {interests: "taxes"}})

# Remove all students who are from California (or Washington)
db.students.remove({home_state: {$in: ["California", "Washington"]}})
# Remove a user by name
db.students.remove({name: "Jack"})
# Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt: 5}}, {justOne: true})

# Add a field to each student collection called 'number_of_belts' and set it to 0
db.students.update({}, {$set: {"number_of_belts": 0}}, {multi: true})

# Increment this field by 1 for all students in Washington (Seattle Dojo)
db.students.update({name: "Jennifer"}, {$set: {"home_state": "Washington"}})
db.students.update({home_state: "Washington"}, {$inc: {number_of_belts: 1}}, {multi: true})

# Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({}, {$rename: {"number_of_belts": "belts_earned"}})
# Remove the 'lucky_number' field
db.students.update({}, {$unset: {lucky_number: ""}}, {multi: true})

# Add a 'updated_on' field, and set the value as the current date
db.students.update({}, {$currentDate: {updated_on: true}}, {multi: true})
