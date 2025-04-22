const fs = require('fs');

// Enhanced SVG content with better spacing, styling, and animation
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="200" viewBox="0 0 2000 200">
  <style>
    @keyframes scrollText {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .scrolling-text {
      animation: scrollText 15s linear infinite; /* Slower animation for better readability */
      font-family: 'Montserrat', sans-serif;
      font-size: 48px;
      font-weight: 600;
      fill: #0969DA;
      white-space: nowrap;
      letter-spacing: 2px; /* Adds more spacing between characters */
    }
  </style>
  <rect width="2000" height="200" fill="#f5f5f5" /> <!-- Background for better contrast -->
  <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" class="scrolling-text">
    Technologist | Engineering Leader | Tinkerer | Lifelong Learner
  </text>
</svg>
`;

// Save the updated SVG to a file
fs.writeFileSync('dynamic-typing.svg', svgContent);
console.log('SVG file generated successfully!');
