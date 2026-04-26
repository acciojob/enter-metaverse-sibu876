//your JS code here. If required.
const parag = document.getElementById("status");
const btn = document.getElementById("enterBtn");
btn.onclick  = () => {
	const heading = document.createElement("h1");
	heading.textContent = "Entered Metaverse";
	parag.replaceWith(heading);
    
}