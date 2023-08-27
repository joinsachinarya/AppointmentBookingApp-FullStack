const listItems = document.getElementById("appointements");

const createListItem = (item) => {
  const li = document.createElement("li");
  li.className = "appointement";
  const spanName = document.createElement("span");
  const spanEmail = document.createElement("span");
  const spanDateTime = document.createElement("span");
  const spanMessage = document.createElement("span");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  spanName.textContent = `Name: ${item.name}`;
  spanEmail.textContent = `Email: ${item.email}`;
  spanDateTime.textContent = `Date & Time: ${item.datetime}`;
  spanMessage.textContent = `Message: ${item.message}`;
  deleteButton.textContent = `Delete`;
  editButton.textContent = `Edit`;

  li.appendChild(spanName);
  li.appendChild(spanEmail);
  li.appendChild(spanDateTime);
  li.appendChild(spanMessage);
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  listItems.appendChild(li);
};
const showAppointments = (arr) => {
  arr.forEach((element) => {
    createListItem(element);
  });
};

const fetchAllAppointments = (req, res, next) => {
  // fetch("http://localhost:3000/fetchAllAppointments", {
  //   mode: "no-cors",
  // })
  //   .then((res) => console.log("Res", res))
  //   .catch((err) => {
  //     console.error(err);
  //   });
  axios
    .get("http://localhost:3000/fetchAllAppointments")
    .then((res) => {
      showAppointments(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

document.addEventListener("DOMContentLoaded", fetchAllAppointments);
