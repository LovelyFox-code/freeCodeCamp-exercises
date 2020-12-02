function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    
    // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period
    //Add orbitalPeriod property
    item.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));;
    //Delete the avgAlt property
    console.log(item.orbitalPeriod);
    delete item.avgAlt;
  });

    return arr;
  }
  
 console.log(orbitalPeriod(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])));

  