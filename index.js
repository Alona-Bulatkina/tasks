// 1) Дана последовательность случайных цифр любой длины и «волшебное» положительное число, больше нуля. 
// Напишите функцию magic(), принимающую эти аргументы, и выясните, можно ли разделить сумму квадратов последовательности на «волшебное» число без остатка. 
// В качестве ответа возвращается «Волшебство случается» в случае успеха или «Никакого волшебства», если разделить нельзя.

// # Тесты
// magic(2, 5, 7, k=5)   Никакого волшебства
// magic(2, 5, 7, k=39) Волшебство случается
// magic(2, 5, 7, k=2)   Волшебство случается

function magic(...theArgs) {
  let sum = 0;
      for (let i = 0; i < theArgs.length - 1; i += 1) {
          sum += Math.pow(theArgs[i], 2) 
      };
      
      if (sum % theArgs[theArgs.length - 1] === 0) {
          console.log('Волшебство случается');
      } else {
          console.log('Никакого волшебства');
      };
};

magic(2, 5, 7, 5);
magic(2, 5, 7, 2);
magic(2, 5, 7, 39);

// 2) На входе имеем список строк разной длины. 
// Необходимо написать функцию all_eq(lst), которая вернет новый список из строк одинаковой длины. 
// Длину итоговой строки определяем исходя из самой большой из них. 
// Если конкретная строка короче самой длинной, дополнить ее нижними подчеркиваниями с правого края до требуемого количества символов.
// Расположение элементов начального списка не менять.

// # Тесты
// all_eq(['крот', 'белка', 'выхухоль']) -> ['крот____', 'белка___', 'выхухоль']
// all_eq(['a', 'aa', 'aaa', 'aaaa', 'aaaaa']) -> ['a____', 'aa___', 'aaa__', 'aaaa_', 'aaaaa']
// all_eq(['qweasdqweas', 'q', 'rteww', 'ewqqqqq']) -> ['qweasdqweas', 'q__________', 'rteww______', 'ewqqqqq____']

// function all_eq(lst) {
//   let theLongest = 0;
//   for (i = 0; i < lst.length; i += 1) {
//       if (lst[i].length > theLongest) {
//           theLongest = lst[i].length;
//       };
//   };

//   for (i = 0; i < lst.length; i += 1) {
//       if (lst[i].length < theLongest) {
//           let value = theLongest - lst[i].length;
//           for (let j = 0; j < value; j += 0 ) {
//               lst[i] += '_'
//           };
//       };
//   };
//   console.log(lst);
// };

// all_eq(['крот', 'белка', 'выхухоль']);
// all_eq(['a', 'aa', 'aaa', 'aaaa', 'aaaaa']);
// all_eq(['qweasdqweas', 'q', 'rteww', 'ewqqqqq']);


// 3) Предоставлен список натуральных чисел. Требуется сформировать из них множество. Если какое-либо число повторяется, то преобразовать его в строку по образцу: 
// например, если число 4 повторяется 3 раза, то в множестве будет следующая запись: само число 4, строка «44» (второе повторение, т.е. число дублируется в строке), 
// строка «444» (третье повторение, т.е. строка множится на 3). Реализуйте вывод множества через функцию set_gen().

// # Тесты
// list_1 = [1, 1, 3, 3, 1]
// list_2 = [5, 5, 5, 5, 5, 5, 5]
// list_3 = [2, 2, 1, 2, 2, 5, 6, 7, 1, 3, 2, 2]
// set_gen(list_1)  -> {1, 3, '111', '33', '11'}    // последовательность вывода не имеет значения
// set_gen(list_2) -> {'5555555', 5, '55', '55555', '5555', '555555', '555'}     // последовательность вывода не имеет значения
// set_gen(list_3) -> {1, 2, 3, 5, 6, 7, '22', '2222', '22222', '222', '11', '222222'}    // последовательность вывода не имеет значения

// const value = {};

// function repeatingNumber(a) {

//     for (let i = 0; i < a.length; i += 1) { 

//         if (value[a[i]]) {
//             value[a[i]] += 1;
//         } else {
//             value[a[i]] = 1;
//             convertingToString += a[i];
//         };
//     };
// };

// let convertingToString = '';
// const arrayOfNumbers = [];

// function set_gen(arr) {
//     repeatingNumber(arr);
//     for (let i = 0; i < convertingToString.length; i += 1 ) {
//         if(value[convertingToString[i]] === 1) {
//             arrayOfNumbers.push(+convertingToString[i]);
//         } else {
//             let k =+ convertingToString[i];
//             for(let j = 0; j < value[convertingToString[i]]; j +=1) {
//                 arrayOfNumbers.push(k)  
//                 k += convertingToString[i]
//             };
//         };
//     };
    
//     const outcome = new Set(arrayOfNumbers);
//     console.log(outcome);
// };

 
// list_1 = [1, 1, 3, 3, 1];
// set_gen(list_1);

// list_2 = [5, 5, 5, 5, 5, 5, 5];
// set_gen(list_2);

// list_3 = [2, 2, 1, 2, 2, 5, 6, 7, 1, 3, 2, 2];
// set_gen(list_3);
