/* Theme switcher using vanilla JavaScript.
  The selected theme is applied through the data-theme attribute.
  localStorage remembers the user's choice between page visits. 
  */

// Find the theme button and the root HTML element.
const themeToggle = document.querySelector("#theme-toggle");
const rootElement = document.documentElement;

// Read the previously saved theme, defaulting to light mode.
const savedTheme = localStorage.getItem("portfolio-theme");
const startingTheme = savedTheme === "dark" ? "dark" : "light";

// Apply the chosen theme and update the button's accessibility labels.
function applyTheme(theme) {
    if (theme === "dark") {
        rootElement.setAttribute("data-theme", "dark");

        themeToggle.textContent = "Light mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light theme"
        );
        themeToggle.setAttribute("aria-pressed", "true");
    } else {
        rootElement.removeAttribute("data-theme");

        themeToggle.textContent = "Dark mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );
        themeToggle.setAttribute("aria-pressed", "false");
    }
}

// Apply the saved theme when the page loads.
applyTheme(startingTheme);

// Switch themes when the visitor clicks the button.
themeToggle.addEventListener("click", function () {
    const darkThemeIsActive =
        rootElement.getAttribute("data-theme") === "dark";

    // Determine which theme should be activated next.
    const nextTheme = darkThemeIsActive ? "light" : "dark";

    // Save the preference and apply the selected theme.
    localStorage.setItem("portfolio-theme", nextTheme);
    applyTheme(nextTheme);
});
