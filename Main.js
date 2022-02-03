const express = require("express");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./Users");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var DBUrl =
  "mongodb+srv://test:1234@cluster0.9c0ug.mongodb.net/PaymentServer?retryWrites=true&w=majority";
mongoose
  .connect(DBUrl)
  .then(() => {
    console.log("DB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userids = [];

app.post("/create", (req, res) => {
  const t = new User(req.body);
  t.save().then((e) => res.send(e._id));
});


app.get("/payment/:id", (req, res)=> {
  const id = req.params.id; 
   User.findOne({'_id':id}).exec((e, f)=> {
     f.isPaymentMade = true;
     f.save();
     res.send({});
   })
})

app.get("/refer/:first/:second", (req, res) => {
  const first = req.params.first;
  const second = req.params.second;

  const firstUser = User.findOne({ _id: first });
  const secondUser = User.findOne({ _id: second });
  firstUser.exec((e, f) => {
    secondUser.exec((e, s) => {
      if (s.isPaymentMade == true) {
        f.totalEarnings += 10;
        f.ReferredUser = s;
      }

      f.save();
      console.log({ f, s });
    });
  });
  res.send({});
});

app.listen(5000, () => {
  console.log("listening at port 5000");
});
