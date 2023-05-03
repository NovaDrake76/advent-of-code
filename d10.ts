const inputs = ["noop", "noop", "noop", "addx 5", "noop", "addx 1", "addx 2", "addx 5", "addx 2", "addx 1", "noop", "addx 5", "noop", "addx -1", "noop", "addx 5", "noop", "noop", "addx 5", "addx 1", "noop", "noop", "addx 3", "addx 2", "noop", "addx -38", "noop", "addx 3", "addx 2", "addx -5", "addx 12", "addx 2", "addx 27", "addx -40", "addx 19", "addx 2", "addx 19", "addx -18", "addx 2", "addx 5", "addx 2", "addx -23", "addx 22", "addx 4", "addx -34", "addx -1", "addx 5", "noop", "addx 2", "addx 1", "addx 20", "addx -17", "noop", "addx 25", "addx -17", "addx -2", "noop", "addx 3", "addx 19", "addx -12", "addx 3", "addx -2", "addx 3", "addx 1", "noop", "addx 5", "noop", "noop", "addx -37", "addx 3", "addx 4", "noop", "addx 24", "addx -6", "addx -15", "addx 2", "noop", "addx 6", "addx -2", "addx 6", "addx -12", "addx -2", "addx 19", "noop", "noop", "noop", "addx 3", "noop", "addx 7", "addx -2", "addx -24", "addx -11", "addx 4", "addx 3", "addx -2", "noop", "addx 7", "addx -2", "addx 2", "noop", "addx 3", "addx 7", "noop", "addx -2", "addx 5", "addx 2", "addx 5", "noop", "noop", "noop", "addx 3", "addx -35", "addx 35", "addx -21", "addx -14", "noop", "addx 5", "addx 2", "addx 33", "addx -7", "addx -23", "addx 5", "addx 2", "addx 1", "noop", "noop", "addx 5", "addx -1", "noop", "addx 3", "addx -23", "addx 30", "addx 1", "noop", "addx 4", "addx -17", "addx 11", "noop", "noop"]
const signals = [20, 60, 100, 140, 180, 220]

let x = 1
let aux = 0
let cycle = 0
let signal = 0
let signalSum = 0
let crt: any[] = []
let line = ""

function verifySignal() {
    if (cycle % 20 == 0) {
        signal = cycle * x

        if (signals.includes(cycle)) {
            signalSum += signal
        }
    }
}

function passCycle() {
    addLine()

    cycle += 1
    verifySignal()
}

function addLine() {
    let cycleAux = cycle

    cycleAux >= 40 && (cycleAux = cycleAux % 40)

    if (cycleAux == x || cycleAux == x + 1 || cycleAux == x - 1) {
        crt.push('#')
    } else {
        crt.push('.')
    }
}

for (let i in inputs) {

    if (inputs[i] == "noop") {
        passCycle()

    } else {
        passCycle()

        aux = parseInt(inputs[i].split(' ')[1])
        passCycle()
        x += aux

    }
}

for (let i = 0; i < 6; i++) {
    console.log(crt.splice(0, 40).join(''))
}
