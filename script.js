const panelsBtn = document.querySelectorAll("button");

for (let i = 0; i < panelsBtn.length; i++) {
  panelsBtn[i].addEventListener("click", function () {
    const addRemoveBtn = document.querySelector(`.panel${i + 1}-button i`);

    const panelContents = document.querySelector(`#panel-${i + 1}`);
    if (panelContents.classList.contains("hidden")) {
      panelContents.classList.remove("hidden");
      addRemoveBtn.classList.remove("fa-circle-plus");
      addRemoveBtn.classList.add("fa-circle-minus");
    } else {
      panelContents.classList.add("hidden");
      addRemoveBtn.classList.remove("fa-circle-minus");
      addRemoveBtn.classList.add("fa-circle-plus");
    }
  });
}
