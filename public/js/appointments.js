// const axios = require("axios");

const fetchAllAppointments = (req, res, next) => {
  //   axios
  //     .get("http://localhost:3000/fetchAllAppointments")
  //     .then((res) => {
  //       console.log("all appointments", res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  fetch("http://localhost:3000/fetchAllAppointments", {
    mode: "no-cors",
  })
    .then((res) => console.log("re", res))
    .catch((err) => {
      console.error(err);
    });
};

document.addEventListener("DOMContentLoaded", fetchAllAppointments);
