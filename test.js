#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
console.log(`${chalk.green.bold(`Welcome to code with Shehroz`)}-${chalk.bold.yellowBright('Adventure Game')} `);
console.log(".".repeat(60));
let player;
while (!player || !player.input.trim()) {
    player = await inquirer.prompt([
        {
            name: "input",
            type: "input",
            message: "Please Enter your name",
            transformer: (input, answers, flags) => {
                return chalk.green(input); // Change the input color
            }
        }
    ]);
    if (!player.input.trim()) {
        console.log('Name cannot be empty. Please enter your name.');
    }
}
let oppo = await inquirer.prompt([
    {
        name: "opt",
        type: "list",
        message: "Kindly Select Your Opponent",
        choices: ["Skeleton", "Assasian", "Zombie"]
    }
]);
let p1 = new Person(player.input);
let o1 = new Opponent(oppo.opt);
if (oppo.opt == "Skeleton") {
    console.log(`${chalk.bold.yellowBright(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    do {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What You want to do?",
                choices: ["Attack", "Re-Fuel", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`)}`);
                if (p1.fuel == 0) {
                    console.log(`${chalk.yellow.bold.italic(`${p1.name}`)} ${chalk.red.bold.italic(`You Loose,Better Luck Next Time`)}`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`)}`);
                if (o1.fuel == 0) {
                    console.log(`${chalk.yellow.bold.italic(`${p1.name} You win`)}`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Re-Fuel") {
            p1.fuelIncrease();
            console.log(`${chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`)}`);
        }
        if (ask.opt == "Run For Your Life") {
            console.log(`${chalk.red.bold.italic(`You Loose,Better Luck Next Time`)}`);
            process.exit();
        }
    } while (true);
}
if (oppo.opt == "Assasian") {
    console.log(`${chalk.bold.yellowBright(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    do {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What You want to do?",
                choices: ["Attack", "Re-Fuel", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`)}`);
                if (p1.fuel == 0) {
                    console.log(`${chalk.yellow.bold.italic(`${p1.name}`)} ${chalk.red.bold.italic(`You Loose,Better Luck Next Time`)}`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`)}`);
                if (o1.fuel == 0) {
                    console.log(`${chalk.yellow.bold.italic(`${p1.name} You win`)}`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Re-Fuel") {
            p1.fuelIncrease();
            console.log(`${chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`)}`);
        }
        if (ask.opt == "Run For Your Life") {
            console.log(`${chalk.red.bold.italic(`You Loose,Better Luck Next Time`)}`);
            process.exit();
        }
    } while (true);
}
if (oppo.opt == "Zombie") {
    console.log(`${chalk.bold.yellowBright(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    do {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What You want to do?",
                choices: ["Attack", "Re-Fuel", "Run For Your Life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}`)}`);
                if (p1.fuel == 0) {
                    console.log(`${chalk.yellow.bold.italic(`${p1.name}`)} ${chalk.red.bold.italic(`You Loose,Better Luck Next Time`)}`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`)}`);
                if (o1.fuel == 0) {
                    console.log(`${chalk.yellow.bold.italic(`${p1.name} You win`)}`);
                    process.exit();
                }
            }
        }
        if (ask.opt == "Re-Fuel") {
            p1.fuelIncrease();
            console.log(`${chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`)}`);
        }
        if (ask.opt == "Run For Your Life") {
            console.log(`${chalk.red.bold.italic(`You Loose,Better Luck Next Time`)}`);
            process.exit();
        }
    } while (true);
}
