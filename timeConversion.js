function timeConversion(s) {
  const isAM = s.includes("AM");
  const currentHour = s.substring(0, 2);

  //remove AM or PM suffix
  const removeSuffix = (value) => {
    return value.slice(0, -2);
  };

  const getNewHour = (value) => {
    //case hour is equal 12 and is AM time
    if (isAM && value === "12") {
      return "00";
    }

    //case hour is equal 12 and is PM time
    if (!isAM && value === "12") {
      return "12";
    }

    //case hour is PM time
    if (!isAM) {
      return Number(value) + 12;
    }

    //don't need to change hour
    return value;
  };

  return removeSuffix(s).replace(currentHour, getNewHour(currentHour));
}

console.log(timeConversion("12:05:45PM"));
