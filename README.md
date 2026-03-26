# Simple CV Layout

![Main Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@d77a8b07ed911a2d03864544c2aabd624aef4566/uploads/2026-03-26T16-10-11-066Z-d362cwbk1.png)

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

## Screenshots

![Main Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@d77a8b07ed911a2d03864544c2aabd624aef4566/uploads/2026-03-26T16-10-11-066Z-d362cwbk1.png)

![Main Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@47aecfbd453f18fc75aff0cbd385ef46af6a6817/uploads/2026-03-26T16-14-19-342Z-t132koj49.png)

![Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@d90102ef5bb816bce74e849e479a622c9c2a20e3/uploads/2026-03-26T16-15-18-222Z-r89dhjuy6.png)

![Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@64f774e200554340f55abd28ba45440751bd25cd/uploads/2026-03-26T16-16-08-952Z-outzjutv1.png)

![Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@d399974d4cb28b244726b350613f7592e361c9ab/uploads/2026-03-26T16-17-25-467Z-eeqgr8n08.png)

![Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@189e37e603c4b65706fee77b1511a1689b8be95e/uploads/2026-03-26T16-17-53-841Z-vuvc75bg7.png)

![Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@eaaa360b6cb50db43017e95aef5367425ae88113/uploads/2026-03-26T16-18-51-451Z-i0tpuq9eu.png)

![Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@04827e9e1a087acb40944eb84e243de7d956ac2e/uploads/2026-03-26T16-19-15-018Z-wb9xc4yev.png)

![Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7d3f1369e8c77dc79f79709176a4d309f2b04e92/uploads/2026-03-26T16-20-00-348Z-7m32p8yj2.png)

![Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@648ee4df0413859530c8ccd5889670406a1d0d3f/uploads/2026-03-26T16-21-05-506Z-kl08ucbtx.png)

![Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@a923e409e162bcf06d32187320f7b0768314c5ca/uploads/2026-03-26T16-21-27-765Z-e4m6gmyng.png)

![Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@1efe3a03bd9df63f8fad54de2e6680f58223d47d/uploads/2026-03-26T16-21-46-728Z-f30fyexjc.png)

![Light](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7eebcba14e0faa52d3e1c82d38cf187036fd2d54/uploads/2026-03-26T16-22-04-508Z-uflhmvfuu.png)

![Dark](https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@497a8a0b74da1cf4caee2bb5e8e48eb62904d7ce/uploads/2026-03-26T16-22-23-639Z-v7ti6hkbm.png)
