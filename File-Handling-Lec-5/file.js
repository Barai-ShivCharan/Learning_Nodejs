const fs = require("fs");

//for creating file
//Sync...Blocking operation
// fs.writeFileSync("./test.txt", "Hey there..");

// FOr creating file
//Async... Non-Blocking operation always write in non blocking code
// fs.writeFile("./test.txt", "Hello World!!", (err) => {
//   console.log(err);
// });

//FOr Reading file contact.txt
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

//FOr Reading file contact.txt
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", ` ${new Date()} Hey There`);

// for copyfile
fs.cpSync("./test.txt", "./copy.txt");

//for delete
fs.unlinkSync("./copy.txt");

// detail of file CRUD
console.log(fs.statSync("./test.txt").isFile());

// for making diretories
fs.mkdirSync("my-docs", { recursive: true });

// ****************************************************************************/
// Clerifying Blocking and Non Blocking----Lec-6
//Blocking operations
console.log("1");
const sb = fs.readFileSync("./contacts.txt", "utf-8");
console.log(sb);
console.log("2");

//Non blocking
console.log("1");
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("2");
