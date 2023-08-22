const form = document.getElementById("form");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
};

form.addEventListener("click", handleSubmit);
