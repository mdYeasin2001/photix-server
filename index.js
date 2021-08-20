const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();
const fs = require("fs-extra");
const cors = require("cors");
const fileUpload = require("express-fileupload");
var ObjectId = require("mongodb").ObjectId;

const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.54hym.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors());
app.use(express.static("photography"));
app.use(fileUpload());

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  console.log("connect err", err);
  const servicesCollection = client.db("PhotixDB").collection("services");
  const ordersCollection = client.db("PhotixDB").collection("orders");
  const adminCollection = client.db("PhotixDB").collection("adminList");
  // perform actions on the collection object
  app.post("/add-service", (req, res) => {
    const file = req.files.image;
    const price = req.body.price;
    const title = req.body.title;
    const description = req.body.description;
    //   console.log(image, price, title, description);
    const filePath = `${__dirname}/photography/${file.name}`;
    file.mv(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send({ massage: "Failed to upload image!" });
      }
      const newImage = fs.readFileSync(filePath);
      const encodedImage = newImage.toString("base64");
      const image = {
        contentType: file.mimetype,
        size: file.size,
        img: Buffer(encodedImage, "base64"),
      };
      servicesCollection
        .insertOne({ title, price, description, image })
        .then((result) => {
          fs.remove(filePath, (err) => {
            if (err) {
              console.log(err);
            }
          });
          res.send(result);
          console.log(result);
        });
    });
  });

  app.get("/services", (req, res) => {
    servicesCollection.find({}).toArray((err, service) => {
      res.send(service);
    });
  });

  app.get("/services/:id", (req, res) => {
    const id = req.params.id;
    servicesCollection.find({ _id: ObjectId(id) }).toArray((err, service) => {
      res.send(service);
    });
  });

  app.post("/take-order", (req, res) => {
    const data = req.body;
    ordersCollection.insertOne({ ...data }).then((result) => res.send(result));
  });

  app.post("/orders-by-each-user", (req, res) => {
    const email = req.body.email;
    ordersCollection
      .find({ logged_user_email: email })
      .toArray((err, orders) => res.send(orders));
  });

  app.post("/orders", (req, res) => {
    const email = req.body.email;
    adminCollection.find({ email: email }).toArray((err, adminList) => {
      if (adminList.length > 0) {
        ordersCollection.find({}).toArray((err, orders) => res.send(orders));
      } else {
        res.send([]);
      }
    });
  });

  app.post("/check-access", (req, res) => {
    const email = req.body.email;
    adminCollection
      .find({ email: email })
      .toArray((err, adminList) => res.send(adminList.length > 0));
  });

  app.patch("/update-order-status", (req, res) => {
    const { id, status } = req.body;
    ordersCollection
      .updateOne({ _id: ObjectId(id) }, { $set: { status: status } })
      .then((result) => res.send(result));
  });

  app.post("/manage-service", (req, res) => {
    const email = req.body.email;
    adminCollection.find({ email: email }).toArray((err, adminList) => {
      if (adminList.length > 0) {
        servicesCollection
          .find({})
          .toArray((err, services) => res.send(services));
      } else {
        res.send([]);
      }
    });
  });

  app.delete("/delete-service/:id", (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    servicesCollection
      .deleteOne({ _id: ObjectId(id) })
      .then((result) => res.send(result));
  });
});

app.get("/", (req, res) => {
  res.send("photix server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
