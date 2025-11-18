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

// app.get("/about", (req, res) => {
//   res.send(req.path); // host name return
// });

// -------------------------------------------------------------

// 8. req.protocol :-   give thise http used or https it check adn give what used

// app.get("/about", (req, res) => {
//   res.send(req.protocol); // host name return
// });

// http : not securereq
// https : it secure to compare to http
// -----------------------------------------------------------------------------------

// 9 . secure: - / it cheack whjat prototcal used secure or not

// app.get("/about" , (req, res) =>{
//     res.send(req.secure)

// });

// // ------------------------------------------------------------------------------------------------

// 10 : ROUTE :-

// app.get("/about", (req, res) => {
//   res.send(req.route);
// });

// --------------------------------------------------------------------------------------------------------------------------------------

// -  request methods : -

// 1. req.accepts() : request it  this which formet support  accepts like html , json

// app.get("/about", (req, res) => {
//   if (req.accepts("html")) {
//     res.send("<h1>Hello html</h1>");
//   } else if (req.accepts("json")) {
//     res.send({ message: "Hello json" });
//   } else if (req.accepts("xml")) {
//     res.send("<message>Hello xml</message>");
//   } else {
//     res.send("Content typerr ot  supported");
//   }
// });
// -----------------------------------------------------------------------------------------------------

// 2.req.header : -

// app.get('/about', (req, res) => {
//      res.send(req.headers)   /// this head r full details shiw it  all server all deatiles show itreq.accepts(
//      // );
// });

// // ---
// app.get('/about', (req, res) => {
//      res.send(req.headers.host)   /// this head r full details shiw it  all server all deatiles show itreq.accepts(
//      // );
// });
//  -----------------------------------------------------
//3 . req,get  : same work as headder work



// app.get("/about", (req, res) => {
//   res.send(req.get("Connection"));
//   // res.send(req.get("host"))
// });
// ------------------------------------------------------

// // 4. req. is () :- 


// app.post("/about" ,(req, res) => { 
//      if(req.is('application/json')){
//       res.send("Valid JSON Data")  
//      }else if(req.is('text/html')){
//         res.send("Html dtaa")
//      }else{m   
//         res.status(400).send("Unsupported Content-Type")
//      }
// });
// app.listen(4500, () => {
//   console.log("App listening on port 4500!");
// });

//form data  [passs]

// request form data send  kari shkai
// jtyjjgjghjj
// j

// jgh
// jgh
// jcons Headers
// j
// ghj

// j
// j
const  name = "hell";

console.log(name);

