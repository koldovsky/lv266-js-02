// const age = Number(prompt('Your age'));

// switch (age) {
//     case 1:
//         alert('Too young');
//         break;
//     case 35:
//         alert('Just right');
//         break;
//     case 100:
//         alert('Too old');
//         break;
//     // default:
//     //     alert('Unknown');
// }

// const age = Number(prompt('Your age'));

// const message = age >= 18 ? 'Adult' : 'Child';

// let message;
// if (age >= 18) {
//     message = 'Adult';
// } else {
//     message = 'Child';
// }

// alert(message);


// for (let i = 100; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     document.write(i + '<br>');
// }

// let i = 1;
// while (i <= 100) {
//     document.write(i + '<br>');
//     i++;
// }


// let age = 0;
// while (age <= 18) {
//     age = Number(prompt('Your age'));
//     if (age <= 18) {
//         alert('Your age should be more than 18 years!')
//     }
// }


// let age;
// do {
//     age = Number(prompt('Your age'));
//     if (age <= 18) {
//         alert('Your age should be more than 18 years!')
//     }    
// } while (age <= 18)


function prn(val) {
    document.write(val + '<br>');
}

// (function(){
//     let cars = [
//             'Toyota Camry', 
//             'Ford Mustang', 
//             'Daewoo Lanos',
//             'Ferrari LaFerrari',
//             'Lamborghini Diablo'
//         ];
//     let prices = [
//         30000,
//         35000,
//         10000,
//         350000,
//         400000
//     ]    
//     prn(cars.length);

//     cars.forEach(function(el, i) {
//         document.write(el + ': ' + prices[i] + '<br>');    
//     });
    
// })();

// let toyota = {};
// toyota.name = 'Toyota Camry';
// toyota.price = 30000;
// toyota.drive = function() {
//     prn(this.name + ' is running!!!')
// }

// toyota.drive();

// let ford = {
//     name: 'Ford Mustang',
//     price: 35000,
//     drive: function() {
//         prn(this.name + ' is running!!!')
//     }
// }
// ford.drive();

// let weekCars = {};
// weekCars['Monday'] = 'Mercedes GLK';
// weekCars['Tuesday'] = 'Honda Pilot';
// weekCars['Wednesday'] = 'Ford Edge';
// weekCars['Thursday'] = 'Jeep Cherokee';
// weekCars['Friday'] = 'Volkswagen Tiguan';


// for (let key in weekCars) {
//     prn(weekCars[key]);
// }

// let cars = [
//     {name: 'Toyota', price: 30000},
//     {name: 'Ford', price: 10000},
//     {name: 'Jeep', price: 25000},
//     {name: 'ZAZ', price: 2000}
// ]


// cars.forEach(function (el) {
//     prn(el.name + ': ' + el.price);
// });

// obj.city.country
// obj.list[0].weather[0].main

function Car(name, price) {
    // this = {}
    this.name = name;
    this.price = price;
    this.drive = function () {
        prn(this.name + ' is running!!!');
    }
    // return this;
}

let toyota = new Car('Toyota', 30000);
let ford = new Car('Ford', 25000);

ford.drive();

class SuperCar {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.drive = function () {
            prn(this.name + ' is running!!!');
        }
    }
}

let ferrari = new SuperCar('Ferrari', 35000);
ferrari.drive();
