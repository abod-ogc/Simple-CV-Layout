# Simple CV Layout

A clean, responsive, single-page CV/resume template built with pure HTML, CSS, and vanilla JavaScript. It features a modern design, dark/light theme toggling, and interactive elements to create a professional online presence.

## Features

-   **Fully Responsive Design**: Adapts seamlessly to all screen sizes, from mobile devices to desktops. A slide-out navigation bar is provided for smaller screens.
-   **Theme Toggling**: Switch between dark and light modes. The user's preference is saved in `localStorage` for a consistent experience across sessions.
-   **Smooth Scrolling Navigation**: A fixed navigation bar allows for smooth scrolling to different sections of the CV.
-   **Active Section Highlighting**: The navigation link for the currently viewed section is automatically highlighted as you scroll.
-   **Interactive Elements**:
    -   Expandable "Experience" blocks to show or hide details.
    -   Pure CSS "donut" charts for skills, easily updatable via CSS custom properties.
-   **Modern CSS**: Utilizes modern CSS features like Flexbox, Grid, `conic-gradient`, and custom properties (variables) for easy theme customization.
-   **No Dependencies**: Built with just vanilla JavaScript, HTML, and CSS. No frameworks or libraries are required.

## Technologies Used

-   HTML5
-   CSS3
-   Vanilla JavaScript (ES6)

## How to Use

To use this template for your own CV:

1.  **Get the code**:
    Clone or download this repository to your local machine.

2.  **Edit Content**:
    Open `index.html` and replace the placeholder text with your personal information in the following sections:
    -   `#about`
    -   `#skills`
    -   `#experience`
    -   `#projects`
    -   `#education`

3.  **Update Image**:
    Replace the placeholder avatar in `Images/MyImage.jpg` with your own picture.

4.  **Customize Styles (Optional)**:
    -   Open `style.css`.
    -   You can easily change the color scheme, fonts, and spacing by modifying the CSS custom properties within the `:root` selector at the top of the file.

    ```css
    :root {
        --primary: #eee8e8;
        --front: #f3f3f3;
        --accent: #7e7a74;
        --text: #333;
        /* ... and so on */
    }
    ```

5.  **Deploy**:
    Upload the `CV Layout` directory to any static site hosting service like GitHub Pages, Netlify, or Vercel.

## Code Highlights

### Theme Management (`app.js`)

The theme is managed by setting a `data-theme` attribute on the `<html>` element. JavaScript handles toggling the theme and persisting the choice in `localStorage`.

```javascript
function applyTheme(Theme)
{
    localStorage.setItem(THEME_KEY, Theme);
    root.setAttribute("data-theme", Theme);
    ThemeToggle.innerText = Theme == "dark" ? "Light Mode" : "Dark Mode";
}
```

### Active Section Highlighting (`app.js`)

The `IntersectionObserver` API is used to efficiently detect which section is currently in the viewport and update the active state of the corresponding navigation button.

```javascript
const SectionsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(isScrollingManually)
            return;

        if (entry.isIntersecting){
            id = entry.target.id;

            NavBtn.forEach((btn) => {
                id == btn.getAttribute("href").substring(1) ? btn.classList.add("active") : btn.classList.remove("active");
            });
        }
    });
}, {threshold: 1});

sections.forEach((section) => {
    SectionsObserver.observe(section);
});
```

### Pure CSS Skill Donuts (`style.css`)

The circular progress indicators for skills are created using a `conic-gradient`. The percentage value is set directly in the HTML via an inline style for the `--value` custom property.

**HTML:**
```html
<div class="skill" style="--value: 90;">
    <span>90%</span>
</div>
```

**CSS:**
```css
.skill{
    --value: 0;
    /* ... other styles */
    background: conic-gradient(var(--text) calc(var(--value) * 1%), var(--primary) 0);
};
```
## Starter File

You can download the starter file to build this template from scratch.

[Click here to download](https://drive.google.com/file/d/1ROuJYhl2DS6bUw0UUNdnVF_yIwPTDnKP/view?usp=drivesdk)
