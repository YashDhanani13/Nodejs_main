// Simple Express Examples

const express = require("express");
const app = express();

// ---------------------------------------------
// 1. res.send()

// Send array
// app.get("/", (req, res) => {
//   res.send(["Apple", "Banana", "Mango"]);
// });

// Send object
// app.get("/", (req, res) => {
//   res.send({
//     name: "Ravindra Jadeja",
//     age: 12,
//   });
// });

// ---------------------------------------------
// 2. res.json() – returns JSON

// app.get("/", (req, res) => {
//   res.json({
//     name: "Jay",
//     age: 12,
//   });
// });

// Array of objects
// app.get("/", (req, res) => {
//   const users = [
//     { id: 1, name: "Rohit Sharma" },
//     { id: 2, name: "Virat Kohli" },
//   ];
//   res.json(users);
// });

// ---------------------------------------------
// 3. res.jsonp() – used for cross-domain requests

// app.get("/", (req, res) => {
//   const users = [
//     { id: 1, name: "Rohit Sharma" },
//     { id: 2, name: "Virat Kohli" },
//   ];
//   res.jsonp(users);
// });

// ---------------------------------------------
// 4. res.redirect()

// app.get("/about", (req, res) => {
//   res.redirect("/user");   // redirect to /user
// });

// app.get("/user", (req, res) => {
//   res.send("<h1>This is User Page</h1>");
// });

// Permanent redirect: res.redirect(301, "/path")
// Temporary redirect: res.redirect(302, "/path")

// ---------------------------------------------
// 5. res.render() – to use EJS templates

// app.set("view engine", "ejs");

// app.get("/user", (req, res) => {
//   res.render("user");  // must have views/user.ejs
// });

// ---------------------------------------------

// 6. res.download

// app.get(" / download", (req, res) => {
//   res.download("file/shortcut.pdf", "Download");  ?// here give the path odf file
// });

// -----------------------------------------------------------------

//7. res.sendFile :-   // give the path releative

// app.get('/download' , (req, res) =>{
//     res.sendFile(__filename + "files/shortcuts.pdf")
// });

// download it download auto matic filw
// sendfile  : - here the this send file thorough  not force to downlaoad the file:-

// -------------------------------------------------------------------------------------------

// 8. res.end :-

// app.get('/end' , (req , res) =>{
//     res.write("yhisd is  testing ")  //  write any write trhe word in thsie write
//     res.end();   // end thie breand to edn the f

// })

// ----------------------------------------------------------------------------------------------------------------
// 9.res.sendStatus()

// 200 : this is the  success when it  status code in  when is show it
// 403 : not any permisiion to read , write  etc
// 404 : this are any error when is show it
// 500 : internal server error  //server error
// 503 : it show to user get server but thise unavailable
// 504 : Gate way timeout

// app.get('/error' , (req , res) =>{
//     res.sendStatus(404)   //  this is is errior whne any error insi file
// })

app.get("/error", (req, res) => {
  res.status(200).send("Hello");
});

// ----------------------------------------------------
// Start server

app.listen(4000, () => {
  console.log("App listening on port 4000!");
});





// 301  : this 301 is redireact wirg parminatily 
// 302  : it temporaray redirect with url 