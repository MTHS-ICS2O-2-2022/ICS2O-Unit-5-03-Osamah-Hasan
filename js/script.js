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
  if (age >= 17) {
    document.getElementById("answer").innerHTML =
      "You can see G, PG and R rated movies!"
  }
  else if (age >= 13) {
    document.getElementById("answer").innerHTML =
    "You can see G and PG rated movies."
  }
  else if (age >= 5) {
    document.getElementById("answer").innerHTML =
    "You can only see G rated movies."
  }
  else {
    document.getElementById("answer").innerHTML =
    "You are too young to watch any movies."
  }
}