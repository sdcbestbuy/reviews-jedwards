import React from 'react';


// Function that gives a random number based on max and min
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function that generates random names from HRATX49 and Staff
function generateName() {
  var name1 = ["Benjamin", "Jonathan", "Anthony", "Denee", "Roy", "Zubair", "Linden", "Chris", "Joshua", "Peyton", "Ricardo", "OtherBen", "Emily", "Nik", "Kimberly", "Matt", "Rex", "Brian", "Big", "Little", "Rich Homie Quan", "Le", "El", "Papa"];
  var name2 = ["Polancich", "Zurita", "Casper", "Lopez", "Olivarez", "Desai", "Kueck", "Murray", "Edwards", "Perret", "Guerrero", "Pernick", "Hilliard", "Mentakis", "Kost", "Co", "Loyer", "McHugh", "Lechuga", "Diablo Lechuga", "Dogg"];

  var name = name1[getRandomInt(0, name1.length)] + ' ' + name2[getRandomInt(0, name2.length)];
  return name;
}

const ReviewsNameArea = (props) => {
  return (
    <div>
      <h4 id='bILPCustomerName'>{generateName()}</h4>
    </div>
  )
}

export default ReviewsNameArea;