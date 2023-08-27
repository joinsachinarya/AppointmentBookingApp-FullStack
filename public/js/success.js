const showLastAppointment = (item) => {
  const success = document.getElementById("success");
  const pTags = success.getElementsByTagName("p");
  pTags[0].textContent = `Name: ${item.name}`;
  pTags[1].textContent = `Email: ${item.email}`;
  pTags[2].textContent = `Date & Time: ${item.datetime}`;
  pTags[3].textContent = `Message: ${item.message}`;
};

const fetchLastAppointment = () => {
  axios
    .get("http://localhost:3000/fetchLastAppointment")
    .then((result) => {
      showLastAppointment(result.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

function goToAllAppointMents() {
  window.location.pathname = "public/html/appointments.html";
}
const goToAllAppointMentsBtn = document
  .getElementById("gtaBTN")
  .addEventListener("click", goToAllAppointMents);
document.addEventListener("DOMContentLoaded", fetchLastAppointment);
