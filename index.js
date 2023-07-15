const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    var name_1= [...cats,name]
    return name_1
}
function prependCat(name){
    var name_2= [name, ...cats]
    return name_2
}
function removeLastCat(){
    var cats= cats.slice(0,cat,1)
    return cats;
}
