const express = require("express");
const app = express();
const port = process.env.PORT;
require("dotenv").config();
const fs = require("fs-extra");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.54hym.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors());
app.use(express.static("photography"));
app.use(fileUpload());




// user schema
const serviceSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  image: String
})

const Service = mongoose.model('Service', serviceSchema)

mongoose.set('strictQuery', false)
mongoose.connect(uri, function (err) {
  if (err) {
    console.log("err", err)
  } else {
    console.log("DB Connection established");
  }
})


// app.post("/add-service", (req, res) => {
//   const service = req.body;
//   servicesCollection.insertOne(service).then((result) => res.send(result));
// });

app.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services)
  } catch (err) {

  }
});

// app.get("/services/:id", (req, res) => {
//   const id = req.params.id;
//   servicesCollection.find({ _id: ObjectId(id) }).toArray((err, service) => {
//     res.send(service);
//   });
// });

// app.post("/take-order", (req, res) => {
//   const data = req.body;
//   ordersCollection.insertOne({ ...data }).then((result) => res.send(result));
// });

// app.post("/orders-by-each-user", (req, res) => {
//   const email = req.body.email;
//   ordersCollection
//     .find({ logged_user_email: email })
//     .toArray((err, orders) => res.send(orders));
// });

// app.post("/orders", (req, res) => {
//   const email = req.body.email;
//   adminCollection.find({ email: email }).toArray((err, adminList) => {
//     if (adminList.length > 0) {
//       ordersCollection.find({}).toArray((err, orders) => res.send(orders));
//     } else {
//       res.send([]);
//     }
//   });
// });

// app.post("/check-access", (req, res) => {
//   const email = req.body.email;
//   adminCollection
//     .find({ email: email })
//     .toArray((err, adminList) => res.send(adminList.length > 0));
// });

// app.patch("/update-order-status", (req, res) => {
//   const { id, status } = req.body;
//   ordersCollection
//     .updateOne({ _id: ObjectId(id) }, { $set: { status: status } })
//     .then((result) => res.send(result));
// });

// app.post("/manage-service", (req, res) => {
//   const email = req.body.email;
//   adminCollection.find({ email: email }).toArray((err, adminList) => {
//     if (adminList.length > 0) {
//       servicesCollection
//         .find({})
//         .toArray((err, services) => res.send(services));
//     } else {
//       res.send([]);
//     }
//   });
// });

// app.delete("/delete-service/:id", (req, res) => {
//   const id = req.params.id;
//   console.log("id", id);
//   servicesCollection
//     .deleteOne({ _id: ObjectId(id) })
//     .then((result) => res.send(result));
// });


app.get("/", (req, res) => {
  res.send("photix server");
});

app.listen(port);
