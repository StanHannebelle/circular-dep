# Circular Dependencies Trainer

This repo presents 3 snippets of code containing circular dependencies.
The goal is to solve each of these circular dependencies.

## How to spot a circular dependency

Running `yarn test-circular` enables to identify circular dependencies.

If you are not familiar with dependency-cruiser, feel free to have a look at their documentation: https://github.com/sverweij/dependency-cruiser

## Exercises

### Exercise 1

This is an example of files in a common folder importing each other through the `index.ts` file of the folder

<img width="550" alt="image" src="https://user-images.githubusercontent.com/45121661/208460087-5fd3531c-24f4-4654-8aa2-3a492de5e43d.png">


### Exercise 2

Here, the circular dependency is due to a poor file architecture as files and variable instantiations are not splitted accordingly to the business logic.

<img width="550" alt="image" src="https://user-images.githubusercontent.com/45121661/208460160-57bfead1-ad2f-485c-907f-63dc60a51623.png">


### Exercise 3

This is a more complex variant of Exercise 2.

<img width="550" alt="image" src="https://user-images.githubusercontent.com/45121661/208460215-a3d70c1c-5206-47de-820e-38204a914570.png">


## Solution

A PR containing the solutions of the 3 examples is opened. Each commit of the PR corresponds to the solution to one example.
