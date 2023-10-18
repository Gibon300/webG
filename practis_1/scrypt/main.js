let home = document.querySelector("#bandle");
let episodes = document.querySelector("#episodes");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

let arrNavElem = [home, episodes, about, contact];

let navbar = document.querySelectorAll("a");
let arr = [];
for (let i = 0; i <= 3; i++) {
  arr.push(navbar[i]);
}
console.log(arr[0].href);
console.log(arr[0].href.indexOf("#"));
console.log(arr[0].href.slice(arr[0].href.indexOf("#")));
let options = {
  // родитель целевого элемента - область просмотра
  root: null,
  // без отступов
  rootMargin: "0px",
  // процент пересечения - половина изображения
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  // для каждой записи-целевого элемента
  entries.forEach((entry) => {
    // если элемент является наблюдаемым
    if (entry.isIntersecting) {
      const elem = entry.target;
      // выводим информацию в консоль - проверка работоспособности наблюдателя
      console.log(elem);
      // меняем фон контейнера
      elem.classList.add("active");
      for (let i = 0; i <= 3; i++) {
        if (arr[i].href.slice(arr[i].href.indexOf("#") + 1) == elem.id) {
          arr[i].classList.add("active");
          if (i == 0) {
            arr[i + 1].classList.remove("active");
          } else if (i == 3) {
            arr[i - 1].classList.remove("active");
          } else {
            arr[i + 1].classList.remove("active");
            arr[i - 1].classList.remove("active");
          }
        }
      }
    }
  });
}, options);

for (let elem of arrNavElem) {
  observer.observe(elem);
}
