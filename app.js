let data = "";
const wrapper = document.getElementById("wrapper");

async function myFunction() {
  const response = await fetch(
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events"
  );
  return await response.json();
  //   return data;
}

console.log(myFunction());

myFunction().then((response) => {
  console.log(response.data);
  response.data.forEach((i) => {
    createEventCard(i);
  });
});

function createEventCard(info) {
  const ele = document.createElement("div");
  const nameEle = document.createElement("h2");
  const descEle = document.createElement("p");
  const delBut = document.createElement("button");
  nameEle.innerHTML = info.name;
  descEle.innerHTML = `Date: ${info.dates}<br> Time:${info.times}<br> Location:${info.locations}<br> Description: ${info.description}<br>`;
  delBut.textContent = "Delete Event";
  delBut.addEventListener("click", async () => {
    await deleteApiEle(info.id);
    ele.remove();
  });
  ele.appendChild(nameEle);
  ele.appendChild(descEle);
  ele.appendChild(delBut);
  wrapper.appendChild(ele);
}
async function deleteApiEle(elementId) {
  myFunction().then((response) => {
    response.data.forEach((item) => {});
  });
}
