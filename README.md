This is a solution to the [Tech book club landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tech-book-club-landing-page-fZQidjHU73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Project Overview

This project consists of a responsive web design utilizing **SASS (Syntactically Awesome Stylesheets)** compiled into CSS. The layout features a modern design with a consistent use of spacing, typography, and color themes. Below is an overview of the project's structure and key components.

---

## Features

1. **Responsive Grid Layout:**

   - The layout is designed using CSS Grid for responsive design.
   - Utilizes a maximum width of 1170px and a flexible grid system to adapt to different screen sizes.

2. **Custom Variables:**

   - The project uses CSS custom properties (variables) for consistent spacing, colors, and typography.
   - These variables allow for easy theming and maintainability.

3. **Typography and Fonts:**

   - Includes custom font-face declarations for "Inter" and "Martian Mono" fonts.
   - Consistent typography with scalable font sizes for responsiveness.

4. **Reusable Components:**

   - Modular and reusable CSS classes for buttons, lists, grids, and more.
   - Button styles include `btn-primary` and `btn-white`, supporting hover effects.

5. **Theming:**

   - Modern color palette featuring primary, secondary, and neutral tones.
   - Gradients and transparency effects for a polished design.

6. **Accessibility and Scalability:**

   - Focus on semantic and scalable design elements.
   - Uses `rem` units for font sizes and spacing for better scalability.

7. **Custom Media Queries:**
   - Media queries for breakpoint-based styles ensure seamless adaptation to varying screen sizes.

---

## CSS Structure

### Base Styles

- **Box Sizing:**
  ```scss
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ```
- **Root Variables:**
  All custom properties are declared in `:root` for easy access.
  ```scss
  :root {
    --color-primary: #062630;
    --color-secondary: #fea36f;
    --spacing-lg: 1.2rem;
    ...
  }
  ```

### Components

- **Buttons:**
  Reusable button styles with hover effects.

  ```scss
  .btn {
    border-radius: var(--spacing-md);
    display: inline-block;
    font-size: 1.6rem;
    ...
  }
  .btn-primary:hover {
    background: linear-gradient(90deg, var(--color-secondary-lit), var(--color-gray-lit2));
  }
  ```

- **Lists:**
  Custom styles for ordered and unordered lists.
  ```scss
  .list {
    list-style: none;
  }
  .list--tick li::before {
    content: url('../assets/images/icon-check.svg');
  }
  ```

### Layout

- **Grid System:**
  Flexible grid system with column configuration.

  ```scss
  .grid {
    display: grid;
    gap: var(--spacing-5xl);
  }
  ```

- **Wrapper:**
  Centralized container with a maximum width.
  ```scss
  .wrapper {
    max-width: 117rem;
    margin-inline: auto;
  }
  ```

### Media Queries

- Breakpoints are defined for mid-sized (48rem) and large screens (77.9375rem).
  ```scss
  @media screen and (min-width: 48rem) {
    .grid--cols-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  ```

## File Structure

```
├── assets
│   ├── fonts
│   ├── images
├── styles.scss
├── styles.css
├── index.html
└── README.md
```

---

## Future Enhancements

- Add more interactive components.
- Include additional themes or color palettes.
- Optimize for performance and accessibility.

---

## Acknowledgments

This project was designed to demonstrate modern CSS practices and responsive design principles. Suggestions and contributions are welcome!
