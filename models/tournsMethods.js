var Tourns = require("../models/tourns.js");

exports.getAll = () => {
  return Tourns.find({}, (err, result) => {
    if (err) {
      return err;
    }

    console.log(result);

    return result;
  });
};

exports.getOne = (tourns1) => {
  return Tourns.findOne({ _id: tourns1 }, (err, result) => {
    if (err) {
      return err;
    }
    console.log(result);
    return result;
  });
};

exports.addOne = (
  name1,
  casino1,
  country1,
  region1,
  area1,
  city1,
  starting1,
  roundLength1,
  score1,
  buyIn1,
  allBlinds1,
  resultLength1,
  perDollar1,
  level1,
  notes1,
  occurance1,
  startTime1
  
  
  
  
) => {
  return Tourns.create(
    {
      name: name1,
      casino: casino1,
      country: country1,
      region: region1,
      area: area1,
      city: city1,
      starting: starting1,
      roundLength: roundLength1,
      
      score: score1,
      buyIn: buyIn1,
      allBlinds:allBlinds1,
      resultLength:resultLength1,
      perDollar: perDollar1,
      level:level1,
      notes:notes1,
      occurance:occurance1,
      startTime:startTime1
      
    },
    (err, result) => {
      if (err) throw err;
      return result;
    }
  );
};

exports.killOne = (tourns1) => {
  return Tourns.findOne({ _id: tourns1 }, (err, result) => {
    if (err) throw err;

    result.remove(function (err) {
      if (err) throw err;
      //console.log(tourns1);
    });
  });
};
