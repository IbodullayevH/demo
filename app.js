const data_1 = document.getElementById("data_1");
const data_2 = document.getElementById("data_2");
const data_3 = document.getElementById("data_3");

data_1.addEventListener('input', function () {
  let result1 = Array.from(this.value).map((el) => el.codePointAt(0));
  let result2 = String.fromCharCode(...result1)
  data_2.innerText = result1;
  data_3.innerText = result2;
});
