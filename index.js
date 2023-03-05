var button = document.getElementById("mybutton");
button.onclick = () => {
  console.log("started click event");

  var arr = [1, 2, 3, 4, 5];
  arr.forEach((item) => {
    console.log(item);
  });

  console.log("ended click event");
};
