// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   //   res.send("helllo this  is hopme page ");
//   res.send("<h1>helllo Gujarat</h1>"); // write with html
// });

// app.listen(3000, () => {
//   console.log("App listening on port 3000!");
// });
// -------------------------------------------------
// const express = require("express");
// const app = express();

// -----------------------------------------------

//this are simple create here
// app.get("/", (req, res) => {
//   res.send("<h1>this buds  sound is so rich </h1>"); // send  is used show output
// });

// app.get("/gallery", (req, res) => {
//   res.send("this is gallery ");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>this page is about</h1> ");
// });

// ------------------------------------------------------
//- create a nested route

// app.get("/about/user", (req, res) => {
// res.send("<h1> this is user page </h1>");
//});

// ----------------------------------------------------------
// route support a syambol:-
// app.get("/cable.text", (req, res) => {/
// ----------------------------------------------------------
//create parames :-

// app.get("/about/:id" , (req, res)=>{
//  res.send(req.params)
// })

// app.get("/user/:userid/book/:bookid", (req, res) => {
//   res.send(req.params);
// });
// -------------------
//particluar te print karvavu hoy to :-

// app.get("/user/:userid/book/:bookid", (req, res) => {
//   res.send(req.params.userid);
// });

//user id with messsaghe show :-

// app.get("/user/:userid/book/:bookid", (req, res) => {
//   res.send("Book Id :" + req.params.bookid);
// });
// -----------------------------------------------------------
// start the server here:-

// app.listen(3000, () => {
//   console.log("App listening on port 3000!");
// });
