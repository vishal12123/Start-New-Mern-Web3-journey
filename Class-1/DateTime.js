let d = new Date();

console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMilliseconds()); 
console.log(d.getSeconds());
console.log(d.getUTCDate());
console.log(d.toLocaleDateString()); 
console.log(d.toLocaleTimeString());
console.log(d.toLocaleString());

// Output: 2024-09-12T12:01:25.294Z;  date and time
// 12; date
// 4; second
// 2024; year
// 17; hour
// 463; millisecond
// 42; second
// 12; date
// 9 / 12 / 2024; date
// 5:31:25 PM ; time
// 9/12/2024, 5:31:25 PM date and time