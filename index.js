var kittens = ["Milo","Otis","Garfield"] //define your array here

function destructivelyAppendKitten(name){
kittens.push(name)
return kittens 
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
return kittens
}

function destructivelyRemoveLastKitten(name){
kittens.pop(name)
return kittens
}

function destructivelyRemoveFirstKitten(name){
kittens.shift(name)
return kittens
}

function appendKitten(name){
return [...kittens,"Broom"]
}

function prependKitten(name){
return [name,...kittens]
}

function removeLastKitten(name){
return kittens.slice(-1,kittens.length)
}

