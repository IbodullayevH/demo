const data_1 = document.getElementById("data_1");
const data_2 = document.getElementById("data_2");
const data_3 = document.getElementById("data_3");
const data_4 = document.getElementById("data_4");
// console.log(data_3.value);

data_1.addEventListener("input", function () {
  let result1 = Array.from(data_1.value).map((el) => el.codePointAt(0));
  data_2.innerText = result1;
});

data_3.addEventListener("input", function () {
  let result2 = String(data_3.value);
  let result3 = result2.split(",").map((el) => parseInt(el.trim(), 10));
  let result4 = result3.map((el) => String.fromCharCode(el)).join("");

  data_4.innerText = result4;
});
