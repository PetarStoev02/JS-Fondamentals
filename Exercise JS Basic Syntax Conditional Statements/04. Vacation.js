function solve(numPeople, typePeople, dayOfWeek) {
  let totalPrize = 0;
  if (typePeople == "Students") {
    if (dayOfWeek == "Friday") {
      totalPrize += numPeople * 8.45;
    }
    if (dayOfWeek == "Saturday") {
      totalPrize += numPeople * 9.8;
    }
    if (dayOfWeek == "Sunday") {
      totalPrize += numPeople * 10.46;
    }
  } else if (typePeople == "Business") {
    if (dayOfWeek == "Friday") {
      totalPrize += numPeople * 10.9;
    }
    if (dayOfWeek == "Saturday") {
      totalPrize += numPeople * 15.6;
    }
    if (dayOfWeek == "Sunday") {
      totalPrize += numPeople * 16;
    }
  } else if (typePeople == "Regular") {
    if (dayOfWeek == "Friday") {
      totalPrize += numPeople * 15;
    }
    if (dayOfWeek == "Saturday") {
      totalPrize += numPeople * 20;
    }
    if (dayOfWeek == "Sunday") {
      totalPrize += numPeople * 22.5;
    }
  }

  if (typePeople == "Students") {
    if (numPeople >= 30) {
      totalPrize -= totalPrize * 0.15;
    }
  } else if (typePeople == "Business") {
    if (numPeople >= 100) {
      
      if (dayOfWeek == "Friday") {
        totalPrize -= 10* 10.9;
      }
      if (dayOfWeek == "Saturday") {
        totalPrize -= 10* 15.6;
      }
      if (dayOfWeek == "Sunday") {
        totalPrize -= 10* 16;
      }
    }
  }else if (typePeople == "Regular") {
    if (numPeople >= 10&&numPeople<=20) {
        totalPrize -= totalPrize * 0.05;
      }

  }

  console.log(`Total price: ${totalPrize.toFixed(2)}`);
}
solve(101,
    "Business",
    "Saturday");
