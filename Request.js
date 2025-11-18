const express = require("express");
const app = express();

// --------------------------------------------------------------------------------------
// 1. req.body :-

app.use(express.json()); //midleware   thorugh  json data share
app.use(express.urlencoded({ extended: false })); // from data pass karva hoy tyarer

app.get("/", (req, res) => {
  res.send("this is the home page");
});

// app.post("/about", (req, res) =>  {   // POST through a create the data
//   res.send(req.body);                            // in body in json and form data and also readb through
// });
// ------------------------------------------------------------------------------------------------------------------

// 2. req.hostname  - show / get  host name   

//     app.get("/about", (req, res) => {
//     res.send(req.hostname); // host name return 
//   });

// ---------------------------------------------------------------------------

//3. req.ip :- it return a ip address :- 

// app.get("/about", (req, res) => {
//   res.send(req.ip); // host name return 
// });

// ----------------------------------------------------------------------------------------
// 4. req.ips :-   multiple server hoy tyare run thai

// app.get("/about", (req, res) => {
//   res.send(req.ips); // host name return 
// });
 
// ----------------------------------------------------------------------

// 5. req.method : -  :  this show with method it hit  like get or post this type  

// app.get("/about", (req, res) => {
//   res.send(req.method); // it show which method through it run like get or post 
// });

// -------------------------------------------------------------------------------------------
// 6. req.originalUrl :-  host name4 pachi je route pass karu ho te show kare 

// app.get("/about", (req, res) => {
//   res.send(req.originalUrl); // host name return 
// }); 

// ---------------------------------------------------------------------------------

// 7.req.path () :- 


app.get("/about", (req, res) => {
  res.send(req.path); // host name return 
}); 



// -----------------------------------------------------------------------------------
app.listen(4500, () => {
  console.log("App listening on port 4500!");
});




//form data  [passs]

// request form data send  kari shkai
 