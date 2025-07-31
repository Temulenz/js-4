// map methods
// arrey iig uuriign uurchluhgui
// map neg function avna, tuhain function neg utga avna
// map method shine arrey uusgej ugnu
// yamar arrey uusgehee map iin return eer shiide

let ages = [10, 203, 40, 30, 50];

let newAges = ages.map((b) => {
  return 10 * b;
});
console.log(newAges);

let students = [
  { name: "Boldo", age: 20, grade: 11, gender: "female" },
  { name: "Dorjo", age: 20, grade: 11, gender: "male" },
];

let newStudents = students.map((student) => {
  return {
    age: student.age + 1,
    grade: student.grade + 1,
  };
});

console.log(newStudents);

//filter
//filter uuriign uurchluhgui
// shine arrey uusgej ugnu
//filter method neg function avnas,
//return deer true baih elment tsugluulad arrey butsaana

const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(filtered);

//sort
//sort method funtion avna
//avjgaa function 2 utga orj irne
//return deer + esvel - too butsaana
//
ages.sort((age2, age1) => {
  return age2 - age1;
});
console.log(ages);

students.sort((student2, student1) => {
  if (student1.gender > student2.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log(students);

let Students = [
  {
    name: "Bataa",
    age: 18,
    grade: 54,
    gender: "male",
    balance: 114,
  },
  {
    name: "Khangai",
    age: 132,
    grade: 54,
    gender: "male",
    balance: 333,
  },
  {
    name: "Sumbee",
    age: 165,
    grade: 84,
    gender: "female",
    balance: 123,
  },
  {
    name: "Ganbaa",
    age: 17,
    grade: 98,
    gender: "female",
    balance: 234,
  },
];

// Bodlogo #1
// nasand hursen suragchiig filterlej oloh function bich
const findAdult = (Students) => {
  let filtered = Students.filter((Students) => {
    return Students.age >= 18;
  });
  return filtered;
};

let resultAdu = findAdult(Students);
console.log(resultAdu);

// Bodlogo #2
// gender ogonguut tuhain gendereer filterlej ogoh function bich
// eg: filterByGender(students,"male") => zovhon erchuudiig yalgaj ogn
const findGender = (student, gender) => {
  let filtered = student.filter((student) => {
    return student.gender == gender;
  });
  return filtered;
};

let resultGen = findGender(Students, "female");
console.log(resultGen);

// Bodlogo #3
// nasaar n sortloh function bich

const sortAge = (students) => {
  let sort = students.sort((Student1, Student2) => {
    return Student2.age - Student1.age;
  });

  return sort;
};
let resultAge = sortAge(Students);
console.log("======================B3", resultAge);

// Bodlogo #4
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich
const filterByBalance = (student, balance) => {
  let filtered = student.filter((student) => {
    return student.balance > balance;
  });
  return filtered;
};
let resultBalance = filterByBalance(Students, 114);
console.log(resultBalance);

// bodlogo #5
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]
const addclasscode = (students, classcode) => {
  let mapped = students.map((student) => {
    return { name: student.name, age: student.age, classcode: "3a" };
  });
  return mapped;
};
let resultadd = addclasscode(Students);
console.log(resultadd);
// bodlogo #6
// removeGenders from student array function bich

const removeGenders = (student) => {
  let mapped = student.map((student) => {
    return {
      name: student.name,
      age: student.age,
      grade: student.grade,
      balance: student.balance,
    };
  });
  return mapped;
};
let resultRemoveGender = removeGenders(Students);
console.log(resultRemoveGender);
