// class Button {
//   constructor(name) {
//     this.button = document.createElement("button");
//     this.button.innerHTML = name;
//     document.body.appendChild(this.button);
//   }

//   set width(width) {
//     this.button.style.width = width + "px";
//   }

//   set height(height) {
//     this.button.style.height = height + "px";
//   }

//   get width() {
//     return parseInt(this.button.style.width, 10);
//   }

//   get height() {
//     return parseInt(this.button.style.height, 10);
//   }
// }

var b1 = {

  init(name) {
    this.button = document.createElement("button");
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
  },

  set width(width) {
    this.button.style.width = width + "px";
  },

  set height(height) {
    this.button.style.height = height + "px";
  },

  get width() {
    return parseInt(this.button.style.width, 10);
  },

  get height() {
    return parseInt(this.button.style.height, 10);
  },
};

b1.init('click')
b1.width = 100;
b1.height = 100;

// var b1 = new Button("Click Me!");
// b1.width = 100;
// b1.height = 100;
// console.log(b1.width, b1.height);

// b1.setWidth(100)
// b1.setHeight(100)
