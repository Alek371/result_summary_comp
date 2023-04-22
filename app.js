const creteDataElement = (data) => {
  const dataElement = document.createElement("li");
  dataElement.style.backgroundColor = `${data.color}15`;
  const imgElement = document.createElement("img");
  imgElement.src = data.icon;
  const dataCategoryElement = document.createElement("span");
  dataCategoryElement.classList.add("data-category");
  dataCategoryElement.style.color = `${data.color}`;
  dataCategoryElement.innerText = data.category;
  const scoreElement = document.createElement("span");
  scoreElement.classList.add("score-element");
  scoreElement.innerText = data.score;
  const byhadretElement = document.createElement("span");
  byhadretElement.classList.add("byhadret-element");
  byhadretElement.innerText = "/ 100";

  dataElement.appendChild(imgElement);
  dataElement.appendChild(dataCategoryElement);
  dataElement.appendChild(scoreElement);
  dataElement.appendChild(byhadretElement);

  return dataElement;
};

const createListElement = (datas) => {
  const listElement = document.createElement("ul");
  datas.forEach((data) => {
    listElement.appendChild(creteDataElement(data));
  });
  return listElement;
};
const renderData = (datas) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createListElement(datas));
  console.log(datas);
};

console.log("Oddzielny plik JavaScript");

let datas;

fetch("./data.json")
  .then((res) => res.json())
  .then((dataRaw) => {
    datas = dataRaw.map((data) => {
      return {
        category: data.category,
        score: data.score,
        icon: data.icon,
        color: data.color,
      };
    });
    renderData(datas);
  });
