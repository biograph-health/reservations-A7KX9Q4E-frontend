# Biograph Technical Interview

Thank you for your interest in a software engineering role at Biograph! We're excited to meet you and learn more about your skills and approach to problem-solving.

## Interview Overview

During one of your interviews, you'll pair with an engineer from our team to add functionality to a pretend codebase. This exercise is designed to simulate the type of work you might encounter at Biograph on a day-to-day basis.

Our primary focus at Biograph is building useful and delightful products. We aim to assess your ability to contribute to this goal through this interview process. There are no trick questions or algorithm quizzes involved.

## What to Expect

- You'll be asked to make a series of decisions without clear "right" or "wrong" answers.
- We encourage you to bring your own laptop and use your preferred coding environment.
- You'll be sharing your screen while writing code.
- Feel free to use whatever tooling you are comfortable with for this interview. 

## The Codebase

The codebase you'll be working with powers a fictional reservation system for Rao's, a notoriously difficult-to-get-into restaurant in New York City. Here's what you need to know:

- A few "endpoints" are presented in server-side actions in the `lib/api/` folder. They have been populated to return mock data, but the backend team is hard at work to get these ready. 
- The restaurant has a limited number of tables, each with a specific number of seats.
- Reservations can be made for a given table, date, and time slot (5:30, 7:00, or 8:30) under an email address.

## The Ask
- The backend team is hard at work at fleshing out the endpoints for the reservation system. However, they have provided you the interface and mock implementation for certain endpoints. Let them know if there are any ways they can design the backend differently to better serve the interface performantly. 
- Design the frontend for the reservation system. Currently, we only have a single restaurant, but we are scaling up quickly!

## Setting up the application
```
cd calendar-frontend-interview
npm install
npm run dev

Open `http://localhost:3000/reservations`
```
