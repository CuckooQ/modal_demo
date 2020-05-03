var openBtn = document.querySelector(".open");
var closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const demo = document.querySelector(".demo");

const handleOpenBtnClick = () => {
    // modal open
    modal.classList.add("show");
}

const handleCloseBtnClick = () => {
    // modal close
    modal.classList.remove("show");
}

const handleModalOutsideClick = () => {
    // modal close
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
        }
      }
}

const init = () => {
    // setting
    openBtn.addEventListener("click", handleOpenBtnClick);
    closeBtn.addEventListener("click", handleCloseBtnClick);
    modal.addEventListener("click", handleModalOutsideClick);
    
    // demo message tags setting
    for(var i=0; i<100;i++) {
        var p = document.createElement("p");
        p.classList.add("message");
        demo.appendChild(p);
    }
}

init();
