const fs = require('fs');

// Adjusted SVG content with increased font size and added scrolling animation
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="1700" height="500">
  <style>
    @keyframes scrollText {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .scrolling-text {
      animation: scrollText 10s linear infinite;
    }
  </style>
  <text x="50%" y="50%" fill="#0969DA" font-size="64" font-family="Montserrat" font-weight="600" alignment-baseline="middle" text-anchor="middle" class="scrolling-text">
    Technologist, Engineering Leader, Tinkerer, Lifelong Learner
  </text>
</svg>
`;

// Save the updated SVG to a file
fs.writeFileSync('dynamic-typing.svg', svgContent);
console.log('SVG file generated successfully!');
