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
const rigTasks = document.querySelectorAll(".rig-task");
let currentItem = 0;
let currentRigTask = 4;

// Display Next Rig Task and cross off the previous one
function showNextRigTask(index) {
  if (index === 0) {
    rigTasks[index].classList.replace("invisible", "visible");
  } else if (index >= 0) {
    for (let i = 0; i < rigTasks.length; i++)
      if (i < index) {
        rigTasks[i].classList.add("text-decoration-line-through");
        rigTasks[i].classList.replace("invisible", "visible");
      }
    rigTasks[index].classList.replace("invisible", "visible");
  }
}

function getNextRigItem(current) {
  switch (current) {
    case 0:
      getInstruments();
      break;
  }
}

showNextRigTask(currentRigTask);
