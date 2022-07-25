//Логика

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
//Кнопки и значения
const decrementBtn = document.querySelector("#counter").firstElementChild;
console.log(decrementBtn);
const incrementBtn = document.querySelector("#counter").lastElementChild;
console.log(incrementBtn);
const valueEl = document.querySelector("#value");
console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  console.log("rkbr");
  counter.decrement();
  valueEl.textContent = counter.value;
});
incrementBtn.addEventListener("click", function () {
  console.log("rkbr");
  counter.increment();
  valueEl.textContent = counter.value;
});
