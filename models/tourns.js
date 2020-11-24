var mongoose = require("mongoose");
var connec = require("./connection");

var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));

var connectionString = connec.connectionString2;
mongoose.connect(connectionString, { useNewUrlParser: true });

var mySchema = mongoose.Schema(
  {
    name: { type: String },
    casino: { type: String },
    country:{type:String},
    region:{type:String},
    area: { type: String },
    city: { type: String },
    starting: { type: Number },
    roundLength: { type: Number },
    score:{type:Number},
    perDollar:{type:Number},
    buyIn: { type: Number },
    allBlinds:{type:Object},
    resultLength: { type: Number },
    perDollar: { type: Number },
    level:{type:Number},
    notes:{type:String},
    occurance:{type:String}
  
    
    
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("tourns", mySchema);
