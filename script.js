let names = ["Zion", "Uduakobong", "Asukwo"];
function display() {
  names.forEach((element) => {
    const display = document.createElement("input");
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    display.value = element;
    display.setAttribute("readonly", true);
    editbtn.addEventListener("click", () => {
      if (editbtn.textContent === "Edit") {
        display.removeAttribute("readonly");
        display.focus();
        editbtn.textContent = "Done";
      } else if (editbtn.textContent === "Done") {
        display.setAttribute("readonly", true);
        //   console.log(display.value);
        editbtn.textContent = "Edit";
        
        index(element);
        function index(element) {
          let no = names.indexOf(element);
          names[no] = display.value;
        }
      }

      // console.log(names);
    });

    const linebreak = document.createElement("br");
    document.body.appendChild(display);
    document.body.appendChild(editbtn);
    document.body.appendChild(linebreak);
  });
}
display();

