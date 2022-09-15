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
const stagingArea = document.querySelector("#create-rig-staging-area");

let currentRigTask = 0;

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

  selectButton.id = "select-btn";

  cardDiv.classList.add("card", "staging-card", "mx-4", "my-4");
  cardImage.classList.add("card-img-top");
  cardBodyDiv.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "align-items-center",
    "text-light",
    "bg-dark",
    "justify-content-between",
    "text-center"
  );
  cardTitle.classList.add("card-title", "fs-2");
  cardText.classList.add("card-text", "fs-6");
  selectButton.classList.add("btn", "btn-primary", "fs-2");

  cardImage.setAttribute("src", picture);
  cardTitle.textContent = name;
  cardText.textContent = desc;
  selectButton.textContent = "Select this Genre";

  cardDiv.appendChild(cardImage);
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardText);
  cardBodyDiv.appendChild(selectButton);
  cardDiv.appendChild(cardBodyDiv);
  return cardDiv;
}

function addGenres() {
  let genreContainer = document.createElement("div");
  genreContainer.classList.add(
    "container-fluid",
    "d-flex",
    "flex-wrap",
    "justify-content-center"
  );
  let genreImages = [
    "/images/genres-01.svg",
    "/images/genres-07.svg",
    "/images/genres-02.svg",
    "/images/genres-03.svg",
    "/images/genres-04.svg",
    "/images/genres-05.svg",
    "/images/genres-06.svg",
  ];
  fetch("/api/genres").then((response) =>
    response.json().then((allGenres) => {
      for (let i = 0; i < allGenres.length; i++) {
        genreContainer.appendChild(
          createCard(
            allGenres[i].genre,
            allGenres[i].description,
            genreImages[i]
          )
        );
      }
      stagingArea.appendChild(genreContainer);
    })
  );
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
setupStagingArea(currentRigTask);
