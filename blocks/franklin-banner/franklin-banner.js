import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate (block) {
  const { place, price } = await fetchPlaceholders('');
  console.log(placeholders);
  console.log(block);
  //const 
  const pic = block.querySelector("picture");
  const div = document.createElement("div");
  div.className = "place-price";
  div.innerHTML = `<p><span class='label'>Place:</span><span class='val'>${place}</span></p><p><span class='label'>Price:</span><span class='val'>${price}</span></p>`;
  pic && pic.parentElement.insertBefore(div, pic);
}