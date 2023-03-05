class Button {
  constructor(name) {
    this.button = document.createElement("button");
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
  }

  onClick(fn) {
    this.button.onclick = fn;
  }
}

class GreenButton extends Button {
  onClick(fn) {
    this.button.onclick = function () {
      this.button.style.background = "green";
      fn();
    }.bind(this);
  }
}

var b1 = new GreenButton("GButton");
b1.onClick(function () {
  console.log("clicked");
});
