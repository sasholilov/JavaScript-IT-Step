const myObject = {
  "map-top-right-coordinate": {
    x: 280,
    y: 280,
  },
  products: [
    "tomatoes",
    "cucumber",
    "cheese",
    "milk",
    "ham",
    "eggs",
    "bananas",
    "carrots",
    "bread",
    "onion",
  ],
  warehouses: [
    {
      x: 100,
      y: 100,
      name: "Left warehouse",
    },
    {
      x: 200,
      y: 200,
      name: "Right warehouse",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Stocks",
      coordinates: {
        x: 10,
        y: 10,
      },
    },
    {
      id: 2,
      name: "Alfred Derrick",
      coordinates: {
        x: 213,
        y: 187,
      },
    },
    {
      id: 3,
      name: "Richard Brune",
      coordinates: {
        x: 108,
        y: 15,
      },
    },
  ],
  orders: [
    {
      customerId: 1,
      productList: {
        tomatoes: 5,
        cucumber: 5,
        cheese: 1,
        milk: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        eggs: 10,
        cucumber: 2,
        cheese: 1,
        ham: 2,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 10,
        tomatoes: 2,
        bananas: 5,
        carrots: 15,
        bread: 2,
        onion: 6,
      },
    },
  ],
  typesOfDrones: [
    {
      capacity: "500W",
      consumption: "1W",
    },
    {
      capacity: "1kW",
      consumption: "3W",
    },
    {
      capacity: "2kW",
      consumption: "5W",
    },
  ],
};

const customers = function (myObject) {
  const customerNamesAndId = myObject.customers.map((el) => {
    return { name: el.name, id: el.id };
  });
  console.table(customerNamesAndId);
  //const john = customerNamesAndId[0];
  //const alfred = customerNamesAndId[1];
  //const richard = customerNamesAndId[2];

  const [john, alfred, richard] = customerNamesAndId;
  const message = `Welcome ${john.name}. You are with ID ${john.id}`;
  const mArr = message.split(" ");
  const mArrString = mArr.join(" ");
  const johnKey = Object.keys(john);
  const johnOrederedProducts = myObject.orders.filter(
    (order) => order.customerId == 1
  );
  console.log(johnOrederedProducts[0].productList);
  console.log(johnKey);
  console.log(mArr);
  console.log(mArrString);
  console.log(john);
  console.log(alfred);
  console.log(richard);

  //const john = {
  //  name: customerNames[0],
  //  id: customerID[0],
  //};
  //console.log(customerNames, customerID, john);

  // const john = {};//
  // const alfred = {}//;
  // const richard = {//};
  //
  // const length = customerNames.length;
  // for (let i = 0; i < length; i++) {
  //   if (customerNames[i] === "John Stocks") {
  //     john.name = customerNames[i];
  //     john.id = customerID[0];
  //   }
  //   if (customerNames[i] === "Alfred Derrick") {
  //     alfred.name = customerNames[i];
  //     alfred.id = customerID[1];
  //   }
  //   if (customerNames[i] === "Richard Brune") {
  //     richard.name = customerNames[i];
  //     richard.id = customerID[2];
  //   }
  //   console.log(john, alfred, richard);
  //}
};

customers(myObject);

//1.Add and Subtract
//Write a function, which changes the value of odd and even numbers in an array of numbers.
//If the number is even - add to its value its index position
//If the number is odd - subtract to its value its index position
//Output
//On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.
//
//input : [5, 15, 23, 56, 35]
//output: [ 5, 14, 21, 59, 31 ]
//134
//130

console.log("-----------Задача 1: Add and Subtract---------------");

const addAndSubtract = function (input) {
  const output = input.map((element, index) => {
    if (element % 2 == 0) {
      return (element += index);
    } else {
      return (element -= index);
    }
  });
  const sumInput = input.reduce((acc, el) => {
    return (acc += el);
  });
  const sumOutput = output.reduce((acc, el) => {
    return (acc += el);
  });

  console.table(output);
  console.table(sumInput);
  console.table(sumOutput);
};
addAndSubtract([5, 15, 23, 56, 35]);

//2.Common Elements
//Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.
//
//input: ['Hey', 'hello', 2, 4, 'Peter', 'e'],
//['Petar', 10, 'hey', 4, 'hello', '2']
//output: hello

console.log("-----------Задача 2: Common Elements---------------");

const compareArr = function (arr1, arr2) {
  const resultArr = arr1.filter((e) => arr2.includes(e)).join("\n");
  console.log(resultArr);
};

compareArr(
  ["Hey", "hello", 2, 4, "Peter", "e", "ivan"],
  ["Petar", 10, "hey", 4, "hello", "2", "ivan"]
);

//3.Часовник
//Напишете функция, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. Часовете трябва да се изписват във формат "{час}:{минути}".
//Примерен вход и изход: (няма вход)
//0:0
//0:1
//0:2
//0:3
//0:4
//0:5
//0:6
//0:7
//0:8
//0:9
//0:10
//...
//23:50
//23:51
//23:52
//23:53
//23:54
//23:55
//23:56
//23:57
//23:58
//23:59
console.log("-----------Задача 3: Часовник---------------");

for (let i = 0; i <= 24; i++) {
  for (let j = 0; j <= 59; j++) {
    if (i <= 9 && j <= 9) {
      console.log(`0${i}:0${j}`);
    } else if (i <= 9 && j > 9) {
      console.log(`0${i}:${j}`);
    } else if (i > 9 && j <= 9) {
      console.log(`${i}:0${j}`);
    } else {
      console.log(`${i}:${j}`);
    }
  }
}

//4.Таблица за умножение
//Отпечатайте на конзолата таблицата за умножение за числата от 1 до 10 във формат: $"{първи множител} * ${втори множител} = ${резултат}".
//Примерен вход и изход: 1 * 1 = 1
console.log("-----------Задача 4: Таблица за умножение---------------");

const tableOfMultiplication = function () {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      sum = i * j;
      console.log(`${i} x ${j} = ${sum}`);
    }
  }
};
tableOfMultiplication();

//5.Комбинации
//Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
//x1 + x2 + x3 = n
//Числото n е цяло число и се въвежда от конзолата.
//Примерен вход (["25"]) и изход: 351
console.log("-----------Задача 5: Комбинации---------------");
const combinations = function (n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        if (i + j + k === n) {
          count++;
        }
      }
    }
  }
  console.log(count);
};
combinations(25);
//6. Create a program that organizes passengers onto a train. Each train car can hold up to 4 passengers. If a car is full, direct passengers to the next available car.
//Input:The first line should contain the number of passengers waiting to board the train.The second line should contain the current state of the train, with each car represented by a number indicating how many passengers are in it, separated by a single space.
//Output:When there are no more available spots on the train, or there are no more passengers waiting, print the final state of the train's cars separated by " " and one of the following messages:If there are no more passengers and the train has empty spots, print: "The train has empty spots! {train cars separated by ' '}"If there are still passengers waiting and no more available space, print: "There isn't enough space! {number of passengers waiting} people in the queue! {train cars separated by ' '}"If the train is full and there are no more passengers waiting, print only the train cars separated by " ".
//example input
//14 0 0 0 0
//example output The lift has empty spots!4 4 4 2

console.log(
  "-----------Задача 6: Organizes passengers onto a train---------------"
);

let passengers = 100;
const slots = "3 0 0 0 0 2 0 0 0 0 0 1 1 4";

const train = function (passengers, slots) {
  let fill = 0;
  const onBoard = slots.split(" ").map((e) => {
    if (e <= 4) {
      if (passengers >= 4) {
        fill = 4 - e;
      } else {
        fill = passengers - e;
      }
      passengers = passengers - fill;
      return Number(e) + fill;
    }
  });
  let isStillSpots = onBoard.some((e) => e < 4);
  if (passengers > 0) {
    console.log(`There isn't enough space! ${passengers} people in the queue!`);
  } else if (passengers == 0 && isStillSpots) {
    console.log(`The train has empty spots! ${onBoard.join(" ")}`);
  } else if (passengers == 0) {
    console.log(`${onBoard.join(" ")}`);
  }
};
train(passengers, slots);

//7.Seek and DestroyYou will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.destroyer([1, 2, //3, 1, 2, 3], 2, 3) should return [1, 1//].

console.log("-----------Задача 7: Seek and Destroy---------------");

const destroy = function (array, ...arguments) {
  const destroyedArr = array
    .map((e) => e)
    .filter((e) => !arguments.includes(e));
  console.log(destroyedArr);
};

destroy([1, 2, 3, 1, 2, 3], 2, 3);

//8. Sum All Numbers in a RangeWe'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.For example, sumAll([4,1]) should return 10 because sum //of all the numbers between 1 and 4 (both inclusive) is 10.sumAll([5, 10]) should return 45.

console.log("-----------Задача 7: Sum All Numbers---------------");

const sumAllNumbers = function (nums) {
  let lesNum = nums[0] < nums[1] ? nums[0] : nums[1];
  let greaterNum = nums[0] > nums[1] ? nums[0] : nums[1];
  let sum = lesNum + greaterNum;
  let count = Math.floor(greaterNum - lesNum / 2);
  for (let i = lesNum; i <= count; i++) {
    lesNum++;
    greaterNum--;
    if (lesNum < greaterNum) {
      sum += lesNum + greaterNum;
    }
  }
  console.log(sum);
};

sumAllNumbers([1, 10]);
