//Find out how many hours have passed since 1/1/2000.
let date2000 = new Date('1/1/2000');
let date = new Date();
let time = (date.getTime() - date2000.getTime())/1000;
time = time/3600;
console.log(Math.floor(time)); //need to round down because 
//Print it to the console.
