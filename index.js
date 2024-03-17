// Write your solution here!
let cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}
function prependCat(name){
    let copyCats = cats.slice();
    copyCats.unshift(name);
    return copyCats;
}
function removeLastCat(){
    let copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}
function removeFirstCat(){
    let copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}
