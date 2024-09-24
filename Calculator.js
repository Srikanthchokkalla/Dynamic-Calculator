let display = document.getElementById("display")

let ac = document.getElementById("ac");
let del = document.getElementById("del");
let percentage = document.getElementById("percentage");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let multiplication = document.getElementById("multiplication");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let sub = document.getElementById("sub");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let addition = document.getElementById("addition");
let zeros = document.getElementById("zeros");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let equals = document.getElementById("equals");

let out = ""
ac.addEventListener("click", (e) => {
    e.preventDefault()
    out = ""
    display.innerHTML = out
})

del.addEventListener("click", (e) => {
    e.preventDefault()
    out = out.slice(0, out.length - 1)
    display.innerHTML = out
})

percentage.addEventListener("click", (e) => {
    e.preventDefault()
    if (out.length) {
        out = out + "%"
        display.innerHTML = out
    }
})

divide.addEventListener("click", (e) => {
    e.preventDefault()
    if (out.length) {
        out = out + "/"
        display.innerHTML = out
    }
})

seven.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 7
    display.innerHTML = out
})

eight.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 8
    display.innerHTML = out
})

nine.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 9
    display.innerHTML = out
})

multiplication.addEventListener("click", (e) => {
    e.preventDefault()
    if (out.length) {
        out = out + "*"
        display.innerHTML = out
    }
})

four.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 4
    display.innerHTML = out
})

five.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 5
    display.innerHTML = out
})

six.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 6
    display.innerHTML = out
})

sub.addEventListener("click", (e) => {
    e.preventDefault()
    if (out.length) {
        out = out + "-"
        display.innerHTML = out
    }
})

one.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 1
    display.innerHTML = out
})

two.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 2
    display.innerHTML = out
})

three.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 3
    display.innerHTML = out
})

addition.addEventListener("click", (e) => {
    e.preventDefault()
    if (out.length) {
        out = out + "+"
        display.innerHTML = out
    }
})

zeros.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 0
    display.innerHTML = out
})

zero.addEventListener("click", (e) => {
    e.preventDefault()
    out = out + 0
    display.innerHTML = out
})

dot.addEventListener("click", (e) => {
    e.preventDefault()
    if (out.length) {
        out = out + "."
        display.innerHTML = out
    }
})

equals.addEventListener("click", (e) => {
    e.preventDefault()
    if (out != 0) {
        let finalOut = eval(out)
        display.innerHTML = finalOut
        out = ""
    }
})  