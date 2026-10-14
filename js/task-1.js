
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of all categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const elements = item.querySelector("ul").children.length;

    console.log(`Categories: ${title}`);
    console.log(`Elements: ${elements}`);
    
});
