//La longitude
//θa latitude
//Lb longitude
//θb latitude
//R radius of the earth =
//β = bearing

//formula
//X = cos θb * sin ∆L
//Y = cos θa * sin θb – sin θa * cos θb * cos ∆L
//β = atan2(X,Y)

//this will eventually be where you are
pointA = {
  la: 39.099912,
  lo: -94.581213,
};

//this will eventually be where you want to go
pointB = {
  la: 38.627089,
  lo: -90.200203,
};

const findLatitudinalDifference = (x, y) => {
  if (x - y < 0) {
    return (x - y) * -1;
  } else {
    return x - y;
  }
};

const radians = (x) => {
  return (x * Math.PI) / 180;
};

const degrees = (x) => {
  return (x * 180) / Math.PI;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const findBearing = (pointA, pointB) => {
  latitudinalDiff = findLatitudinalDifference(pointB.lo, pointA.lo);

  x = Math.cos(radians(pointB.la)) * Math.sin(radians(latitudinalDiff));

  y =
    Math.cos(radians(pointA.la)) * Math.sin(radians(pointB.la)) -
    Math.sin(radians(pointA.la)) *
      Math.cos(radians(pointB.la)) *
      Math.cos(radians(latitudinalDiff));

  bearing = degrees(Math.atan2(x, y));

  setInterval(() => {
    console.log(bearing);
  }, 2000);
};

findBearing(pointA, pointB);
