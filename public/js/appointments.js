const fetchAllAppointments = (req, res, next) => {
  fetch("http://localhost:3000/fetchAllAppointments", {
    mode: "no-cors",
  })
    .then((res) => console.log("Res", res))
    .catch((err) => {
      console.error(err);
    });
  // axios
  //   .get("http://localhost:3000/fetchAllAppointments")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
};

document.addEventListener("DOMContentLoaded", fetchAllAppointments);
