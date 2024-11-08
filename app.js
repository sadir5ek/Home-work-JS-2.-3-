// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// const arr2 = [...arr];
// console.log(...arr2);


// const info = ['name','my', 'tilek','is', 45, {hobby:"swim"}];
 
// const [n,m,i,t,c, {hobby}] = info


// console.log(m,n,t,i,c,hobby);



// const person = {
//     name:"Anna",
//     age:28,
//     city:"kiew",
//     professor:"teacher",
//     family:["Maks","Eldiar","Aidana",{old:35}],
// };

// const {name,age,city,professor,family} = person
// console.log(person);

// console.log(person.name);
// console.log(...other);

// const {age,city,professor} = person
// console.log(age,city,professor);

// const{name,...other} = person
// console.log(name);
// console.log(other);

const person = {
    name: "Садирбек",
    age: 19,
    profession: "айтишник",
    family: ["Умарбек", "Гулсара", "Айзат", "Медербек", { name: "Ислам" }],
};
const { name, age, profession, family } = person;
const [father, mother, sister, brother1, brother2Obj] = family;
const { name: brother2 } = brother2Obj;
const text = `Менин атым ${name}, жашым ${age}да. Профессиям - ${profession}.
 Менин семямда 6 адам жашайт: алар атам ${father}, апам ${mother}, эжем ${sister}, байкем ${brother1}, иним ${brother2} жана мен.`;
console.log(text);
