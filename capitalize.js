// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var ar = str.split(' ');
  
  for(let i =0; i<ar.length; i++){
    ar[i] = ar[i].charAt(0).toUpperCase() + ar[i].slice(1);
  }
  return ar.join(' ');
}