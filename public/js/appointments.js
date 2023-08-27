const listItems = document.getElementById("appointements");

const createListItem = (item) => {
  const li = document.createElement("li");
  li.className = "appointement";

  const createSpan = (content) => {
    const span = document.createElement("span");
    span.textContent = content;
    return span;
  };

  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  deleteButton.textContent = `Delete`;
  editButton.textContent = `Edit`;

  li.appendChild(createSpan(` ${item.id}:`));
  li.appendChild(createSpan(`Name: ${item.name}`));
  li.appendChild(createSpan(`Email: ${item.email}`));
  li.appendChild(createSpan(`Date & Time: ${item.datetime}`));
  li.appendChild(createSpan(`Message: ${item.message}`));
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
