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

  deleteButton.addEventListener("click", () => deleteAppointment(item.id));
  editButton.addEventListener("click", () => editAppointment(item.id));

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

const deleteAppointment = (id) => {
  let confirm = window.confirm("Are you sure you want to delete this item?");
  confirm
    ? axios({
        method: "delete",
        url: `http://localhost:3000/deleteAppointment/${id}`,
      })
        .then((result) => {
          console.log("Item deleted", result);
        })
        .catch((err) => console.error(err))
    : console.log("Item deletion canceled.");
  window.location.reload();
};
const editAppointment = (id) => {
  console.log("item updated", id);
};

document.addEventListener("DOMContentLoaded", fetchAllAppointments);
