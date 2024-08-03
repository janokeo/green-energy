
const content = [
    {
        headingContent: "Install Solar Panels",
        bodyText: "Solar panels provide a renewable source of energy that can significantly reduce electricity bills.",
        imgUrl: "img/solar-panels.jpg",
        imgAlt: "Solar Panels"
    },
    {
        headingContent: "Use Energy-Efficient Appliances",
        bodyText: "Energy-efficient appliances use less electricity and can help lower your utility bills.",
        imgUrl: "img/appliance.jpg",
        imgAlt: "Energy Efficient Appliances"
    },
    {
        headingContent: "Switch to LED Lighting",
        bodyText: "LED lighting is more energy-efficient and has a longer lifespan compared to traditional lighting.",
        imgUrl: "img/led-light.jpg",
        imgAlt: "LED Lighting"
    }
];

function changeContent(index) {
    // Update content container with new content
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = `
        <h1>${content[index].headingContent}</h1>
        <img src="${content[index].imgUrl}" alt="${content[index].imgAlt}">
        <p>${content[index].bodyText}</p>
    `;

    // Update active button style
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.removeAttribute('id'));
    buttons[index].id = 'active-button';
}

// Preload images
function preloader() {
    const imagesList = [
        "./img/solar-panel.jpg",
        "./img/led-light.jpg",
        "./img/appliance.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}

window.addEventListener("load", preloader);
