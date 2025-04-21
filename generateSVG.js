const fs = require('fs');

// Modify the lines to match your dynamic content
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
    <text x="50%" y="50%" fill="#0969DA" font-size="32" font-family="Montserrat" font-weight="600" alignment-baseline="middle" text-anchor="middle">
        Technologist, Engineering Leader, Tinkerer, Lifelong Learner
    </text>
</svg>
`;

// Save the SVG to a file
fs.writeFileSync('dynamic-typing.svg', svgContent);
console.log('SVG file generated successfully!');
