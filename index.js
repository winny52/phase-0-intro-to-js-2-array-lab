// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(name) {
    cats.push(name);
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name);
 }

 function destructivelyRemoveLastCat(){
    cats.pop();
 }

 function destructivelyRemoveFirstCat(){
    cats.shift();
 }


 function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
 }

 function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
 }

 function removeLastCat() {
    const removeLastCat = cats.slice(0, 2);
    return removeLastCat;
 }
 console.log(removeLastCat());

 function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
 }
 console.log(removeFirstCat());