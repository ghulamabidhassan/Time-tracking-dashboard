import jsonFile from "./data.json" assert { type: "json" };

const rightContainer = document.querySelector(".right");

const commonData = jsonFile.map((item) => {
  return item;
});

const dataMap = jsonFile
  .map((items) => {
    const { title, background, image } = items;
    const { weekly } = items.timeframes;

    return `<section class="right-section">
  <article class="right-article-1" style="background-color:${background}">
    <img src="${image}" alt="" class="icons" />
  </article>
  <article class="right-article-2">
    <div class="div-1">
      <h3 class="work"> ${title} </h3>
      <img src="./images/icon-ellipsis.svg" alt="" class="dots" />
    </div>
    <div class="div-2">
      <h3 class="hours"> <span class="daily-hours">${weekly.previous}</span>hrs </h3>
      <p class="last-week">last week - <span class="week-hours">${weekly.previous}</span>hrs</p>
    </div>
  </article>
</section>`;
  })
  .join("");

rightContainer.innerHTML = dataMap;

const days = document.querySelectorAll(".days");
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const hours = document.querySelectorAll(".daily-hours");
const weekHours = document.querySelectorAll(".week-hours");

days.forEach((day) => {
  day.addEventListener("click", function () {
    days.forEach((element) => {
      element.classList.remove("active-white");
      this.classList.add("active-white");
    });
  });
});

daily.addEventListener("click", () => {
  let data = commonData;
  let currentData = [];
  let dailyData = [];

  for (let i = 0; i < data.length; i++) {
    currentData.push(data[i].timeframes.daily);
    dailyData = [...currentData];

    for (let h = 0; h < dailyData.length; h++) {
      hours[h].innerText = dailyData[h].current;
      weekHours[h].innerText = dailyData[h].previous;
    }
  }
});

weekly.addEventListener("click", () => {
  let data = commonData;
  let currentData = [];
  let dailyData = [];

  for (let i = 0; i < data.length; i++) {
    currentData.push(data[i].timeframes.weekly);
    dailyData = [...currentData];

    for (let h = 0; h < dailyData.length; h++) {
      hours[h].innerText = dailyData[h].current;
      weekHours[h].innerText = dailyData[h].previous;
    }
  }
});

monthly.addEventListener("click", () => {
  let data = commonData;
  let currentData = [];
  let dailyData = [];

  for (let i = 0; i < data.length; i++) {
    currentData.push(data[i].timeframes.monthly);
    dailyData = [...currentData];

    for (let h = 0; h < dailyData.length; h++) {
      hours[h].innerText = dailyData[h].current;
      weekHours[h].innerText = dailyData[h].previous;
    }
  }
});
