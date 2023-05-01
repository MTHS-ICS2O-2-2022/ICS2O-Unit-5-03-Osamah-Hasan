// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Osamah Hasan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function video () {
  //input
  const age = parseInt(document.getElementById('age').value)

  //process
  if (age >= 17 ) {
    document.getElementById('answer').innerHTML = "You can watch an R rated movie alone."
  } else if (age >= 13) {
    this.document.getElementById('answer').innerHTML = "You can watch a PG-13 rated movie alone."
  } else if (age >= 5) {
    this.document.getElementById('answer').innerHTML = "You can watch a G or PG rated movie alone."
  } else if (age < 5){
    this.document.getElementById('answer').innerHTML = "Whoops! You are too young, you need to be 5 or older to watch a movie."
  }
}