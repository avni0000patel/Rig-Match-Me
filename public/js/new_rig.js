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
const stagingArea = document.querySelectorAll("#create-rig-staging-area");

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

function createCard(name, desc, picture) {
  let cardDiv = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardBodyDiv = document.createElement("div");
  let cardTitle = document.createElement("h5");
  let cardText = document.createElement("p");
  let selectButton = document.createElement("a");

  cardDiv.classList.add("card");
  cardImage.classList.add("card-img-top");
  cardBodyDiv.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");
  selectButton.classList.add("btn", "btn-primary");

  cardImage.setAttribute("src", picture);
  cardTitle.textContent = name;
  cardText.textContent = desc;

  cardDiv.appendChild(cardImage);
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardText);
  cardBodyDiv.appendChild(selectButton);
  cardDiv.appendChild(cardBodyDiv);
}

function addGenre() {
  let genreContainer = document.createElement("div");
}

function addInstrumentCategory() {}

function addInstrumentModel() {}

function addFirstAccessory() {}

function addSecondAccessory() {}

function setupStagingArea(currentTask) {
  switch (currentTask) {
    case 0:
      addGenres();
      break;
    case 1:
      addInstrumentCategory();
      break;
    case 2:
      addInstrumentModel();
      break;
    case 3:
      addFirstAccessory();
      break;
    case 4:
      addSecondAccessory();
    default:
      console.log("Something weird happened...");
  }
}

showNextRigTask(currentRigTask);
