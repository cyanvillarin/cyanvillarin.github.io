// index.js
// Created by Cyan Villarin
// Created on Jul 5, 2024
// cyanvillarin.github.io

document.addEventListener("DOMContentLoaded", function() {
    const carousels = [
        {
            id: 'carouselInner1',
            images: [
                "assets/other-apps/1-mercari/mercari-0.png",
                "assets/other-apps/1-mercari/mercari-1.png",
                "assets/other-apps/1-mercari/mercari-2.png"
            ]
        },
        {
            id: 'carouselInner2',
            images: [
                "assets/other-apps/2-rakuten-card/rakuten-0.png",
                "assets/other-apps/2-rakuten-card/rakuten-1.png",
                "assets/other-apps/2-rakuten-card/rakuten-2.png",
                "assets/other-apps/2-rakuten-card/rakuten-3.png",
                "assets/other-apps/2-rakuten-card/rakuten-4.png",
                "assets/other-apps/2-rakuten-card/rakuten-5.png"
            ]
        }
    ];

    const projects = [
        {
            id: 'project1',
            title: 'Mercari iOS App',
            link: 'https://apps.apple.com/jp/app/id667861049',
            description: `An iOS app, with over <a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">22 million</a> monthly active users, that allows for buying and selling used items, as well as cryptocurrencies like Bitcoin and Ethereum.`,
            technologies: [
                "SwiftUI",
                "<a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>",
                "Swift Concurrency, Combine",
                "GitHub CICD",
                "Dependency Injection",
                "XCTests",
                "Firebase SDK"
            ]
        },
        {
            id: 'project2',
            title: 'RakutenCard iOS App',
            link: 'https://apps.apple.com/jp/app/id570105907',
            description: `An iOS app, with over <a href="https://rakuten.today/blog/q3-fy2023-results.html">40 million</a> monthly active users, that allows users to see credit statement bills, see campaigns, see Rakuten points, apply for revolving payment, and change their payment methods for the RakutenCard credit card.`,
            technologies: [
                "UIKit, SwiftUI",
                "MVVM",
                "Widgets",
                "Swift Concurrency, Combine",
                "XCTests",
                "Firebase SDK"
            ]
        }
    ];

    function createCarousel(carousel) {
        const carouselInner = document.getElementById(carousel.id);
        carousel.images.forEach((src, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;

            const imgContainer = document.createElement('div');
            imgContainer.className = 'd-flex justify-content-center align-items-center carousel-img-container';

            const img = document.createElement('img');
            img.className = 'img-fluid mb-3 mb-lg-0 carousel-img';
            img.src = src;

            imgContainer.appendChild(img);
            itemDiv.appendChild(imgContainer);
            carouselInner.appendChild(itemDiv);
        });
    }

    function createProject(project) {
        const projectContainer = document.getElementById(project.id).querySelector('.featured-text');
        const technologiesList = project.technologies.map(tech => `・${tech}<br>`).join('');

        projectContainer.innerHTML = `
            <h4><a href="${project.link}">${project.title}</a></h4>
            <p class="text-black-50 mb-0">
                ${project.description}
                <br><br>
                Technologies used:
                <br>
                ${technologiesList}
            </p>
        `;
    }

    carousels.forEach(createCarousel);
    projects.forEach(createProject);
});