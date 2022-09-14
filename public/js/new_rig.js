// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const genre = document.querySelector("#genre").value.trim();

//   const response = await fetch(`/api/rig`, {
//     method: "POST",
//     body: JSON.stringify({ genre }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     document.location.replace("/homepage");
//   } else {
//     alert(response.statusText);
//   }
// };

// document
//   .querySelector(".new-rig-form")
//   .addEventListener("submit", newFormHandler);

const genreDropdown = document.querySelector("#genre");
let currentItem = 0;
console.log(genreDropdown);

function getInstruments() {
  fetch("/");
}

function getNextRigItem(current) {
  switch (current) {
    case 0:
      getInstruments();
      break;
  }
}

genreDropdown.addEventListener("change", function logChange(event) {
  console.log(event.target.value);
});
