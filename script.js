//your JS code here. If required.
// const parag = document.getElementById("status");
const btn = document.getElementById("enterBtn");
btn.onclick  = () => {
	 const parag = document.getElementById("status");

    const heading = document.createElement("h1");
    heading.textContent = "Entered Metaverse";

    parag.innerHTML = ""; // clear existing text
    parag.appendChild(heading);
    
}