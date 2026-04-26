//your JS code here. If required.
// const parag = document.getElementById("status");
const btn = document.getElementById("enterBtn");
btn.onclick  = () => {
	 const oldEl = document.getElementById("status");

    const newEl = document.createElement("h1");
    newEl.id = "status"; // keep same id
    newEl.textContent = "Entered Metaverse";

    oldEl.replaceWith(newEl);
    
}