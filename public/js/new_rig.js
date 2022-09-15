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
const myGenres = [];
let currentRigTask;

// Set Next Rig Task
function nextRigTask() {
  currentRigTask = currentRigTask + 1;
  localStorage.setItem("currentRigTask", currentRigTask);
  clearStagingArea();
  showNextRigTask(currentRigTask);
  setupStagingArea(currentRigTask);
}

//Clear stagingArea
function clearStagingArea() {
  stagingArea.innerHTML = "";
}

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

function createCard(name, desc, picture, type) {
  let cardDiv = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardBodyDiv = document.createElement("div");
  let cardTitle = document.createElement("h5");
  let cardText = document.createElement("p");
  let selectButton = document.createElement("a");

  selectButton.id = "select-btn";
  cardBodyDiv.id = name;

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
  selectButton.textContent = "Select this " + type;

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
        myGenres.push(allGenres[i].genre);
        genreContainer.appendChild(
          createCard(
            allGenres[i].genre,
            allGenres[i].description,
            genreImages[i],
            "Genre"
          )
        );
      }
      stagingArea.appendChild(genreContainer);
    })
  );
}

function addInstrumentCategory() {
  let instrumentContainer = document.createElement("div");
  instrumentContainer.classList.add(
    "container-fluid",
    "d-flex",
    "flex-wrap",
    "justify-content-center"
  );
  let instrumentTypeImages = [
    "/images/instrument_types-01.svg",
    "/images/instrument_types-02.svg",
    "/images/instrument_types-03.svg",
  ];

  fetch("/api/instruments/types")
    .then((response) => response.json())
    .then((types) => {
      for (let i = 0; i < types.length; i++) {
        instrumentContainer.appendChild(
          createCard(types[i], "", instrumentTypeImages[i], "Category")
        );
      }
      stagingArea.appendChild(instrumentContainer);
    });
}

function getCategoryId(category) {
  let categories = ["Electric Guitar", "Bass Guitar", "Drums"];
  for (let i = 0; i < categories.length; i++) {
    if (category === categories[i]) {
      return i;
    }
  }
}

function addInstrumentModel() {
  let instrumentContainer = document.createElement("div");
  instrumentContainer.classList.add(
    "container-fluid",
    "d-flex",
    "flex-wrap",
    "justify-content-center"
  );
  let instrumentType = localStorage.getItem("rig-category");
  let selectedGenre = localStorage.getItem("rig-genre");
  fetch("/api/genres").then((response) =>
    response.json().then((allGenres) => {
      for (genre of allGenres) {
        if (genre.genre === selectedGenre) {
          fetch("/api/instgenre/byGenre:" + genre.id)
            .then((response) => response.json())
            .then((instrumentsByGenre) => {
              let instruments = [];
              for (instrument of instrumentsByGenre) {
                instruments.push(instrument.instrument_id);
              }
              fetch("/api/instruments/bulkGetById", {
                method: "POST",
                body: JSON.stringify({ instruments, instrumentType }),
                headers: { "Content-Type": "application/json" },
              })
                .then((response) => response.json())
                .then((allInstruments) => {
                  console.log(allInstruments);
                  for (let i = 0; i < allInstruments.length; i++) {
                    instrumentContainer.appendChild(
                      createCard(
                        allInstruments[i].model,
                        allInstruments[i].description,
                        allInstruments[i].image,
                        "Model"
                      )
                    );
                  }
                  stagingArea.appendChild(instrumentContainer);
                });
            });
        }
      }
    })
  );
}

function addFirstAccessory() {}

function addSecondAccessory() {}

// Set up Staging Area
function setupStagingArea(currentTask) {
  switch (currentTask) {
    case 0:
      addGenres();
      setEventDelegateForGenre();
      break;
    case 1:
      addInstrumentCategory();
      setEventDelegateForCategory();
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
      console.log(currentTask);
      console.log("Something weird happened...");
  }
}

// Check for existing local storage
function verifyLocalStorageExists() {
  if (localStorage.getItem("currentRigTask") === null) {
    return false;
  } else {
    return true;
  }
}

function getCurrentRigTask() {
  if (verifyLocalStorageExists()) {
    currentRigTask = localStorage.getItem("currentRigTask");
    showNextRigTask(currentRigTask);
    setupStagingArea(currentRigTask);
  } else {
    currentRigTask = 0;
    showNextRigTask(currentRigTask);
    setupStagingArea(currentRigTask);
  }
}

getCurrentRigTask();

// Setup event Delegates
function setEventDelegateForGenre() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-genre", myButton.parentElement.id);
      nextRigTask();
    }
  };
}

function setEventDelegateForCategory() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-category", myButton.parentElement.id);
      console.log(myButton.parentElement.id);
      nextRigTask();
    }
  };
}

function setEventDelegateForModel() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-model", myButton.parentElement.id);
      console.log(myButton.parentElement.id);
      nextRigTask();
    }
  };
}
