import jsonFile from "./data.json" assert { type: "json" };

const rightContainer = document.querySelector(".right");

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
      <h3 class="hours">${weekly.current}hrs</h3>
      <p class="last-week">last week - ${weekly.previous}hrs</p>
    </div>
  </article>
</section>`;
  })
  .join("");

rightContainer.innerHTML = dataMap;
