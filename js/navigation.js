// ================================= //
// ===== GET DOCUMENT ELEMENTS ===== //
// ================================= //
const bttn = document.querySelector(".nav-bttn");
const panel = document.getElementById("nav-dropdown");
const parent = document.querySelector(".dropdown-parent");

// ================================================= //
// ===== FUNCTIONS TO CONTROL PANEL VISIBILITY ===== //
// ================================================= //
// Shows panel && updates aria-expanded state of button
function openNav() {
    bttn.setAttribute("aria-expanded", "true");
    // match actual size of bttn (so button can dynamically resize)
    bttn.style.backgroundColor = '#bf0d3e';
    panel.style.width = window.getComputedStyle(bttn).getPropertyValue("width");
    panel.style.display = "initial";
}
// Hides panel && updates aria-expanded state of button
function closeNav() {
    bttn.setAttribute("aria-expanded", "false");
    panel.style.display = "none";
    bttn.style.backgroundColor = '#00205b';
}
// Opens or closes panel based on current aria-expanded state
function toggleNav() {
    var isOpen = bttn.getAttribute("aria-expanded");
    isOpen === "false" ? openNav() : closeNav();
}

// ======================== //
// ===== MOUSE EVENTS ===== //
// ======================== //
bttn.addEventListener("mouseover", () => openNav());
bttn.addEventListener("mouseout", (e) => {
    // check if the mouse is over the panel before closing
    var currentNode = document.elementFromPoint(e.clientX, e.clientY);
    if (currentNode != parent && !parent.contains(currentNode)) {
        closeNav();
    }
});
panel.addEventListener("mouseout", (e) => {
    // check if the mouse is over the panel before closing
    var currentNode = document.elementFromPoint(e.clientX, e.clientY);
    if (currentNode != parent && !parent.contains(currentNode)) {
        closeNav();
    }
});

// ================================== //
// ===== KEYBOARD ACCESSIBILITY ===== //
// ================================== //
// "click" also works for "Space" and "Enter"
bttn.addEventListener("click", () => toggleNav());

// Close panel when "Escape" or "Backspace" is pressed and shift focus back to button
window.addEventListener("keyup", (e) => {
    if ((e.key === "Escape" || e.key === "Backspace") && bttn.getAttribute("aria-expanded") === "true") {
        closeNav();
        bttn.focus();
    }
});

// Close panel when focus is lost but do NOT shift focus 
window.addEventListener("focusin", () => {
    if (bttn.getAttribute("aria-expanded") === "true") {
        var listItems = panel.childNodes; 
        var hasActive = false;
        listItems.forEach(function(node) {
            if (node.contains(document.activeElement) || document.activeElement.nodeName === bttn.nodeName) {
                hasActive = true;
            }
        });
        if (!hasActive) {
            closeNav();
        }
    } else {
        if (document.activeElement.nodeName === bttn.nodeName) {
            bttn.style.backgroundColor = '#bf0d3e';
        } else {
            bttn.style.backgroundColor = '#00205b';
        }
    }
});