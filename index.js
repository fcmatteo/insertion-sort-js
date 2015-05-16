"use strict";
require('babel/polyfill');

var insertionSort = function(sortable){
  //Insertion sort is efficient for sorting a small number of elements
  //It's in the order of O(n2) so it's not good for big objects.

  //Starts in the second position (1) because it's unnecesary to enter in the first one, but there wouldn't be a problem.
  for(let i = 1; i < sortable.length; i++){
    //We enter the for statement for each element in sortable object

    let key = sortable[i]; //Key is the actual value we are looking at
    let j = i -1; //We define j for comparing with the previous element
    
    //We move the element to the left until it's the first position
    //or the previous element is smaller than the element we picked previously (key)
    while(j > -1 && sortable[j] > key){
      sortable[j+1] = sortable[j]; //Move the previous element to the place where key was.
      j = j - 1;
    }
    sortable[j+1] = key; //Move the key one place to the left.
  }

  return sortable;
};


module.exports = insertionSort;
