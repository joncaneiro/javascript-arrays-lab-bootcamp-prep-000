var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here


function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var moreKittens = kittens.concat(name)
  return moreKittens
}

function prependKitten(name) {
  name.concat(kittens)
}

function removeLastKitten() {
  kittens.slice(-1)
}

function removeFirstKitten() {
  kittens.slice(1)
}






