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
  [...kittens, name]
}

function prependKitten(name) {
  [name, ...kittens]
}

function removeLastKitten() {
  console.log(kittens.slice(-1))
}

function removeFirstKitten() {
  console.log(kittens.slice(1))
}






