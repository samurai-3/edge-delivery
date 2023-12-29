/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate (block) {
  console.log(block);
  const subTitle = document.createElement("h3");
  subTitle.className = "subtitle";
  subTitle.textContent = "This is a dynamically added subtitle";
  block.querySelector("h1")?.insertAdjacentHTML("afterend", subTitle.outerHTML);
}