HTML Structure
Your navigation includes two key parts:

A standard menu (<ul class="menu">) for desktop view.

A hamburger button (<button class="hamburger">) that toggles visibility.

A mobile menu (<ul class="mobile-menu">) that appears when the hamburger is clicked.

Each page (like index.html, about.html, etc.) should include this same structure to ensure consistency.

CSS Behavior
The .hamburger is hidden by default and shown only on smaller screens using a media query (@media (max-width: 700px)).

The .mobile-menu is also hidden by default (display: none) and revealed by toggling a .show class.

Transitions and hover effects are styled for visual feedback.

JavaScript Logic
The script listens for a click on the hamburger button.

When clicked, it toggles the .active class on the button and the .show class on the mobile menu.

This triggers the CSS to display the mobile menu.

Reusability Across Pages
To make the menu work on all pages:

Use the same HTML nav structure.

Link the same styles.css and script.js files.

Ensure IDs and classes (hamburger, mobileMenu) are consistent.