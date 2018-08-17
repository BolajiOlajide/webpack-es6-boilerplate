import axios from "axios";
import slug from "slug";
import { uniq } from 'lodash';


const age = [1,1,2,3,19,2,34,34,10,90];
console.log(uniq(age));
console.log(process.env.NAME);

const name = document.getElementById("name");
const button = document.getElementById("theme-changer");
const body = document.getElementsByTagName("body")[0];


name.textContent = "My name is Bolaji Olajide";
button.addEventListener("click", function() {
	if ((!(body.style.background)) || (body.style.background === "rgb(255, 255, 255)")) {
		body.style = "background: #0b0b0b;color: #FFF;";
		button.innerHTML = "Dark Mode: On!"
		return false;
	}
	body.style = "color: #0b0b0b;background: #FFF;"
	button.innerHTML = "Dark Mode: Off!"
	return false;
});
