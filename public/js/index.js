const addAppointment = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const datetime = e.target.datetime.value;
  const message = e.target.message.value;
  axios
    .post("http://localhost:3000/addAppointment", {
      name: name,
      email: email,
      datetime: datetime,
      message: message,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  window.location.pathname = "/public/html/success.html";
};

const form = document.getElementById("form");
form.addEventListener("submit", addAppointment);
