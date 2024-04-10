function getCurrentDate() {
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;
  return formattedDate;
}

export { getCurrentDate };
