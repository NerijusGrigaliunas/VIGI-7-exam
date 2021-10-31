/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite ojektų konstruktorių "Movie" (naudokte ES6), kuris sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

/* ------------------------------ TASK 9 ---------------------------------------------------------------
Create class constructor "Movie" (use ES6 syntax), which will be able to create objects with properties and 1 method:

Properties:
title, director, budget
Method: 
wasExpensive() - if movie budget is more than 100 000 000 mln USD, method will return true, otherwise - false.
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
}
const movie1 = new Movie("Titanic", "James Cameron", 200000000);
const movie2 = new Movie("Taken", "Pierre Morel", 2500000);
console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
