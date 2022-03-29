// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the perimeter of a square.
 */
function calculate () {
  // input
  const side = parseInt(document.getElementById('length-of-side').value)

  // process
  const perimeter = 4 * side

  // output
  document.getElementById('area').innerHTML = 'The perimeter is: ' + perimeter + ' cm'
}
