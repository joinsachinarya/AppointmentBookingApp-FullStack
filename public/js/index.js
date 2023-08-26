const addAppointment = (e) => {
  e.preventDefault();
  console.log("added");
};
const deleteAppointment = (req, res, next) => {
  console.log("deleted");
};
const updateAppointment = (req, res, next) => {
  console.log("updated");
};
const fetchAppointment = (req, res, next) => {
  console.log("fetched");
};
const fetchLastAppointment = (req, res, next) => {
  console.log("fetched");
};

const form = document.getElementById("form");
form.addEventListener("submit", addAppointment);
