const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const fs = require("fs-extra");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.54hym.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
}));
app.use(express.static("photography"));
app.use(fileUpload());




// service schema
const serviceSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  image: String,
})
const Service = mongoose.model('Service', serviceSchema);

// order schema
const orderSchema = new mongoose.Schema({
  name: String,
  order_email: String,
  address: String,
  phone: String,
  service: Object,
  status: String,
  logged_user_email: String,
})

const Order = mongoose.model('Order', orderSchema);

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    default: 'user'
  }
})

const User = mongoose.model('User', userSchema)

mongoose.set('strictQuery', false)
mongoose.connect(uri, function (err) {
  if (err) {
    console.log("err", err)
  } else {
    console.log("DB Connection established");
  }
})

app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.json({
      status: 'fail',
      message: 'All input fields are required!'
    })
  }

  User.create(req.body)
    .then(result => {
      res.json({
        status: 'success',
        data: {
          user: result
        }
      })
    })
    .catch(err => {
      if (err.code === 11000) {
        const key = Object.keys(err.keyValue)[0]
        const message = `Duplicated ${key} value: "${err.keyValue[key]}". Please use another value!`
        return res.json({
          status: 'fail',
          message,
        })
      }
    })
})

app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.json({
      status: 'fail',
      message: 'All input fields are required!'
    })
  }
  User
    .findOne({ email, password })
    .then(result => {
      if (!result) {
        return res.json({
          status: 'fail',
          message: 'Invalid email or password!'
        })
      }
      res.json({
        status: 'success',
        data: {
          user: result
        }
      })
    })
})


app.post("/api/add-service", async (req, res) => {
  const service = await Service.create(req.body);
  res.json({
    status: 'success',
    data: {
      service
    }
  })
});

app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services)
  } catch (err) {

  }
});

app.get("/api/services/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const service = await Service.findById(id);
    res.send(service)
  } catch (err) {

  }
});

app.post("/api/take-order", async (req, res) => {
  const order = await Order.create(req.body);
  res.json({
    status: 'success',
    data: {
      order
    }
  })
});

app.post("/api/orders-by-each-user", async (req, res) => {
  const email = req.body.email;
  const orders = await Order.find({ logged_user_email: email })
  res.json({
    status: 'success',
    data: {
      orders
    }
  })
});

app.post("/api/orders", async (req, res) => {
  const email = req.body.email;
  const orders = await Order.find();
  res.json({
    status: 'success',
    data: {
      orders
    }
  })
});

app.patch("/api/update-order-status", async (req, res) => {
  const { id, status } = req.body;
  const order = await Order.findByIdAndUpdate(id, { status: status });
  res.json({
    status: 'success',
    data: {
      order
    }
  })
});

app.post("/api/manage-service", async (req, res) => {
  const email = req.body.email;
  const services = await Service.find();
  res.json({
    status: 'success',
    data: {
      services
    }
  })
});

app.delete("/api/delete-service/:id", async (req, res) => {
  const id = req.params.id;
  const service = await Service.findByIdAndDelete(id);
  if (!service) {
    return res.json({
      status: 'fail',
      message: "failed to delete service!"
    })
  }
  res.json({
    status: 'success',
    data: null
  })
});


app.get("/", (req, res) => {
  res.send("photix server");
});

app.listen(port);
