let myRigContainer = document.querySelector("#previous-rigs-staging-area");
let displayContainer = document.querySelector("#view-rigs-staging-area");

function createRigTiles(id, num) {
  let myCardDiv = document.createElement("div");
  let myCardBodyDiv = document.createElement("div");
  let myCardText = document.createElement("p");

  myCardDiv.classList.add(
    "card",
    "view-rig-card",
    "mx-3",
    "ratio",
    "ratio-1x1",
    "bg-light",
    "rig-tile",
    "m-3"
  );
  myCardDiv.setAttribute("id", id);
  myCardBodyDiv.classList.add(
    "card-body",
    "d-flex",
    "justify-content-center",
    "align-content-center",
    "rig-tile",
    "flex-direction-column"
  );
  myCardBodyDiv.setAttribute("id", id);
  myCardText.classList.add(
    "view-rig-card-text",
    "position-absolute",
    "top-50",
    "start-50",
    "translate-middle",
    "text-light",
    "rig-tile",
    "fs-1"
  );

  myCardText.textContent = num;
  myCardText.setAttribute("id", id);

  myCardBodyDiv.appendChild(myCardText);
  myCardDiv.appendChild(myCardBodyDiv);
  return myCardDiv;
}

window.addEventListener("load", function () {
  setEventDelegateForViewRigTiles();
  this.fetch("/api/rigs/")
    .then((response) => response.json())
    .then((rigs) => {
      for (let i = 0; i < rigs.length; i++) {
        myRigContainer.appendChild(createRigTiles(rigs[i].id, i + 1));
      }
    });
});

function createRigCard(instrument, image, acc1, acc2) {
  let rigCardBack = document.createElement("div");
  let rigCard = document.createElement("div");
  let rigInstrument = document.createElement("p");
  rigInstrument.textContent = instrument;
  let rigImage = document.createElement("img");
  rigImage.setAttribute("src", image);
  let rigAcc1 = document.createElement("p");
  rigAcc1.textContent = acc1;
  let rigAcc2 = document.createElement("p");
  rigAcc2.textContent = acc2;

  rigCardBack.classList.add(
    "w-75",
    "d-flex",
    "flex-row-reverse",
    "justify-content-start",
    "mx-3"
  );
  rigCardBack.id = "display-container";
  rigCardBack.appendChild(rigCard);
  rigCard.id = "view-rig-card-text";

  rigCard.classList.add(
    "mx-3",
    "card-body",
    "d-flex",
    "align-items-center",
    "fs-2",
    "flex-columns",
    "flex-wrap",
    "flex-fill"
  );
  rigImage.id = "rig-card-style";
  rigInstrument.classList.add("fs-1");
  rigInstrument.setAttribute("style", "text-decoration: underline");

  rigCardBack.appendChild(rigImage);
  rigCard.appendChild(rigInstrument);
  rigCard.appendChild(rigAcc1);
  rigCard.appendChild(rigAcc2);

  return rigCardBack;
}

function getAndDisplayRig(id) {
  let myRig;
  let rigImage;
  fetch("/api/rigs/" + id).then((response) =>
    response.json().then((rig) => {
      console.log(rig);
      myRig = rig;
      fetch("/api/instruments").then((response) =>
        response.json().then((instruments) => {
          console.log(instruments);
          for (instrument of instruments) {
            if (myRig.instrument === instrument.model) {
              rigImage = instrument.image;
              displayContainer.append(
                createRigCard(
                  myRig.instrument,
                  rigImage,
                  myRig.accessory1,
                  myRig.accessory2
                )
              );
            }
          }
        })
      );
    })
  );
}

// Setup event Delegates for View Rig Tile
function setEventDelegateForViewRigTiles() {
  myRigContainer.onclick = function (event) {
    let myTile = event.target;

    if (myTile.classList.contains("rig-tile")) {
      displayContainer.innerHTML = "";
      getAndDisplayRig(myTile.parentElement.id);
    }
  };
}
