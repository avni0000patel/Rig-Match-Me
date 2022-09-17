const rigTasks = document.querySelectorAll(".rig-task");
const stagingArea = document.querySelector("#create-rig-staging-area");
const chalkboard = document.querySelector("#chalkboard");
const myGenres = [];
let currentRigTask;
let myCurrentRig = [];

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
    if (index < 4) {
      rigTasks[index].classList.replace("invisible", "visible");
    }
  }
}

// Create and return a Bootstrap formatted card
function createCard(name, desc, picture, type, useBudget, budget, includeBtn) {
  let cardDiv = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardBodyDiv = document.createElement("div");
  let cardTitle = document.createElement("h5");
  let cardText = document.createElement("p");
  let selectButton = document.createElement("a");
  let cardBudget = document.createElement("p");

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
  if (useBudget) {
    cardBudget.classList.add("card-budget", "card-text", "fs-1");
    cardBudget.textContent = budget;
    cardBodyDiv.appendChild(cardBudget);
  }
  if (includeBtn) {
    cardBodyDiv.appendChild(selectButton);
  }
  cardDiv.appendChild(cardBodyDiv);
  return cardDiv;
}

// Add Genres to Staging Area Element
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
            "Genre",
            false,
            "",
            true
          )
        );
      }
      stagingArea.appendChild(genreContainer);
    })
  );
}

// Add Instrument Category to Staging Area Element
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
          createCard(
            types[i],
            "",
            instrumentTypeImages[i],
            "Category",
            false,
            "",
            true
          )
        );
      }
      stagingArea.appendChild(instrumentContainer);
    });
}

// return the Category ID when supplied with a Category name
function getCategoryId(category) {
  let categories = ["Electric Guitar", "Bass Guitar", "Drums"];
  for (let i = 0; i < categories.length; i++) {
    if (category === categories[i]) {
      return i;
    }
  }
}

// Add instrument model to Staging Area Element
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
                  for (let i = 0; i < allInstruments.length; i++) {
                    instrumentContainer.appendChild(
                      createCard(
                        allInstruments[i].model,
                        allInstruments[i].description,
                        allInstruments[i].image,
                        "Model",
                        true,
                        allInstruments[i].budget,
                        true
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

// Return Accessory path
function returnAccessory(category, accNum) {
  switch (accNum) {
    case 1:
      switch (category) {
        case "Electric Guitar":
          return "gamp";
        case "Bass Guitar":
          return "bamp";
        case "Drums":
          return "dpeds";
        default:
          console.log("Something went wrong in the Acc1 Category Switch");
      }
      break;
    case 2:
      switch (category) {
        case "Electric Guitar":
          return "gfx";
        case "Bass Guitar":
          return "bfx";
        case "Drums":
          return "dcymb";
        default:
          console.log("Something went wrong in the Acc2 Category Switch");
      }
    default:
      console.log("Something went wrong in the AccNum Switch");
  }
}

// Add Accessory Set to Staging Area Element
function addAccessory(accNum) {
  let accOneContainer = document.createElement("div");
  accOneContainer.classList.add(
    "container-fluid",
    "d-flex",
    "flex-wrap",
    "justify-content-center"
  );
  let category = localStorage.getItem("rig-category");
  let selectedGenre = localStorage.getItem("rig-genre");
  let accArray = [];
  let accName = returnAccessory(category, accNum);
  let accIdName = `accessory.${accName}_id`;
  let accNameBulk = `bulk${accName}ById`;
  fetch("/api/genres")
    .then((response) => response.json())
    .then((genres) => {
      let genreId;
      for (genre of genres) {
        if (selectedGenre === genre.genre) {
          genreId = genre.id;
        }
      }
      fetch("/api/" + accName + "/genreId/" + genreId)
        .then((response) => response.json())
        .then((accessories) => {
          for (accessory of accessories) {
            accArray.push(eval(accIdName));
          }
          fetch("/api/accessories/" + accNameBulk, {
            method: "POST",
            body: JSON.stringify({ accArray }),
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => response.json())
            .then((accData) => {
              for (acc of accData) {
                accOneContainer.appendChild(
                  createCard(
                    acc.model,
                    acc.description,
                    acc.image,
                    "Accessory",
                    true,
                    acc.budget,
                    true
                  )
                );
              }
              stagingArea.appendChild(accOneContainer);
            });
        });
    });
}

// get One Genre
function getOneGenre(name) {
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
    response.json().then((genres) => {
      let myCard;
      for (let i = 0; i < genres.length; i++) {
        if (name === genres[i].genre) {
          let myGenre = genres[i];
          myCard = createCard(
            name,
            myGenre.description,
            genreImages[i],
            "Genre",
            false,
            "",
            false
          );
        }
      }
      topContainer.appendChild(myCard);
    })
  );
}

// get One Category
function getOneCategory(name) {
  let image;

  switch (name) {
    case "Electric Guitar":
      image = "/images/instrument_types-01.svg";
      break;
    case "Bass Guitar":
      image = "/images/instrument_types-02.svg";
      break;
    case "Drums":
      image = "/images/instrument_types-03.svg";
      break;
    default:
      console.log("Couldn't find your category");
  }

  topContainer.appendChild(
    createCard(name, "", image, "Category", false, "", false)
  );
}

// get One Model
function getOneModel(name) {
  fetch("/api/instruments").then((response) =>
    response.json().then((models) => {
      let myCard;
      for (let i = 0; i < models.length; i++) {
        if (name === models[i].model) {
          myCard = createCard(
            name,
            models[i].description,
            models[i].image,
            "Model",
            true,
            models[i].budget
          );
          topContainer.appendChild(myCard);
        }
      }
    })
  );
}

// get one Accessory
function getOneAccessory(accNum, name, category, selectedGenre) {
  let accName = returnAccessory(category, accNum);
  let accIdName = `accessory.${accName}_id`;
  let accNameBulk = `bulk${accName}ById`;
  let accArray = [];
  fetch("/api/genres").then((response) =>
    response.json().then((genres) => {
      let genreId;
      for (genre of genres) {
        if (selectedGenre === genre.genre) {
          genreId = genre.id;
        }
      }
      fetch("/api/" + accName + "/genreId/" + genreId)
        .then((response) => response.json())
        .then((accessories) => {
          for (accessory of accessories) {
            accArray.push(eval(accIdName));
          }
          fetch("/api/accessories/" + accNameBulk, {
            method: "POST",
            body: JSON.stringify({ accArray }),
            headers: { "Content-Type": "application/json" },
          })
            .then((response) => response.json())
            .then((accData) => {
              let myCard;
              for (let i = 0; i < accData.length; i++) {
                if (name === accData[i].model) {
                  myCard = createCard(
                    name,
                    accData[i].description,
                    accData[i].image,
                    "Accessory",
                    true,
                    accData[i].budget,
                    false
                  );
                }
              }
              topContainer.appendChild(myCard);
            });
        });
    })
  );
}

//Get show save button

let summary = document.createElement("div");
let topContainer = document.createElement("div");
let bottomContainer = document.createElement("div");
summary.classList.add(
  "container-fluid",
  "d-flex",
  "flex-wrap",
  "justify-content-center"
);
topContainer.classList.add(
  "container-fluid",
  "d-flex",
  "flex-nowrap",
  "justify-content-center"
);
bottomContainer.classList.add(
  "container-fluid",
  "d-flex",
  "flex-wrap",
  "justify-content-center",
  "mt-6",
  "flex-column"
);

function showSaveButton() {
  let genre = localStorage.getItem("rig-genre");
  myCurrentRig.push(genre);
  let model = localStorage.getItem("rig-model");
  myCurrentRig.push(model);
  let category = localStorage.getItem("rig-category");
  let acc1 = localStorage.getItem("rig-acc1");
  myCurrentRig.push(acc1);
  let acc2 = localStorage.getItem("rig-acc2");
  myCurrentRig.push(acc2);
  let saveButton = document.createElement("button");
  let startOverButton = document.createElement("button");

  saveButton.classList.add("btn", "btn-success", "btn-lg", "my-3", "fs-3");
  saveButton.setAttribute("type", "button");
  saveButton.textContent = "Save Rig";
  saveButton.id = "select-btn";

  startOverButton.classList.add("btn", "btn-danger", "btn-lg", "mx-y", "fs-3");
  startOverButton.setAttribute("type", "button");
  startOverButton.textContent = "Start Over";
  startOverButton.id = "select-btn";

  getOneGenre(genre);
  getOneCategory(category);
  getOneModel(model);

  getOneAccessory(1, acc1, category, genre);
  getOneAccessory(2, acc2, category, genre);

  bottomContainer.appendChild(saveButton);
  bottomContainer.appendChild(startOverButton);

  chalkboard.appendChild(bottomContainer);
  summary.appendChild(topContainer);

  stagingArea.appendChild(summary);
}

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
      setEventDelegateForModel();
      break;
    case 3:
      addAccessory(1);
      setEventDelegateForAcc1();
      break;
    case 4:
      addAccessory(2);
      setEventDelegateForAcc2();
      break;
    case 5:
      showSaveButton();
      setEventDelegateForSummary();
      break;
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

// Check if currentRigTask exists in Local Storage
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

// Call getCurrentRigTask() when page loads
window.addEventListener("load", function () {
  this.localStorage.removeItem("currentRigTask");
  getCurrentRigTask();
});

// Setup event Delegates for Genre
function setEventDelegateForGenre() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-genre", myButton.parentElement.id);
      nextRigTask();
    }
  };
}

// Setup event Delegates for Category
function setEventDelegateForCategory() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-category", myButton.parentElement.id);
      nextRigTask();
    }
  };
}

// Setup event Delegates for Model
function setEventDelegateForModel() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-model", myButton.parentElement.id);
      nextRigTask();
    }
  };
}

// Setup event Delegates for Accessory 1
function setEventDelegateForAcc1() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-acc1", myButton.parentElement.id);
      nextRigTask();
    }
  };
}

// Setup event Delegates for Accessory 2
function setEventDelegateForAcc2() {
  stagingArea.onclick = function (event) {
    let myButton = event.target;

    if (myButton.id === "select-btn") {
      localStorage.setItem("rig-acc2", myButton.parentElement.id);
      nextRigTask();
    }
  };
}

// Setup event Delegates for Summary
function setEventDelegateForSummary() {
  chalkboard.onclick = function (event) {
    let myButton = event.target;
    console.log("hello");

    if (myButton.id === "select-btn") {
      if (myButton.innerText === "Save Rig") {
        console.log(myCurrentRig);
        fetch("/api/rigs/", {
          method: "POST",
          body: JSON.stringify({ myCurrentRig }),
          headers: { "Content-Type": "application/json" },
        }).then(() => {
          console.log("Rig Submitted");
        });
      } else if (myButton.innerText === "Start Over") {
        console.log("start over");
        localStorage.removeItem("currentRigTask");
        location.reload();
      }
    }
  };
}
