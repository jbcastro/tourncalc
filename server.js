const express = require("express");
var cors = require("cors");

const path = require("path");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
// var tournsMethods = require("./models/tournsMethods");
// var Tourns = require("./models/tourns");
var tournsMethods = require("./models/tournsMethods");
var Tourns = require("./models/tourns");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine("html", require("ejs").renderFile);

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "./client/public"));
// app.use(express.static(path.join(__dirname, "client/build")));
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", function (req, res) {
  res.render("index", {});
});
app.get("/api", (req, res, next) => {
  tournsMethods
    .getAll()
    .then((items) => {
      // res.sendFile("home", { wines: JSON.stringify(items) });
      res.send({ express: items });
    })
    .catch((err) => {
      return next(err);
    });
});

app.get("/api/get", (req, res, next) => {
  tournsMethods
    .getOne(req.query._id)
    .then((items) => {
      res.send({ express: items });
    })
    .catch((err) => {
      return next(err);
    });
});
app.get("/api/delete", (req, res, next) => {
  tournsMethods
    .killOne(req.query._id)
    .then((items) => {
      res.send({ express: items });
    })
    .catch((err) => {
      return next(err);
    });
});

app.post("/api/add/", (req, res, next) => {
  if (!req.body._id) {
    let casino = new Tourns({
     name:req.body.name,
     casino:req.body.casino,
     country:req.body.country,
     region:req.body.region,
     area:req.body.area,
     city:req.body.city,
     starting:req.body.starting,
     roundLength:req.body.roundLength,
     score:req.body.score,
     buyIn:req.body.buyIn,
     allBlinds:req.body.allBlinds,
     resultLength:req.body.resultLength,
     perDollar:req.body.perDollar,
     level:req.body.level,
     notes:req.body.notes,
     occurance:req.body.occurance
    });

    casino.save((err, newCasino) => {
      if (err) return next(err);
      return res.json({ updated: 0, _id: newCasino._id });
    });
  } else {
    Tourns.updateOne(
      { _id: req.body._id },
      {
     name:req.body.name,
     casino:req.body.casino,
     country:req.body.country,
     region:req.body.region,
     area:req.body.area,
     city:req.body.city,
     starting:req.body.starting,
     roundLength:req.body.roundLength,
     score:req.body.score,
     buyIn:req.body.buyIn,
     allBlinds:req.body.allBlinds,
     resultLength:req.body.resultLength,
     perDollar:req.body.perDollar,
     level:req.body.level,
     notes:req.body.notes,
     occurance:req.body.occurance
      },
      (err, result) => {
        if (err) return next(err);
        res.json({ updated: result.nModified, _id: req.body._id });
      }
    );
  }
});
