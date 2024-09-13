// index.js
// Created by Cyan Villarin
// Created on Jul 5, 2024
// cyanvillarin.github.io

document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            id: 'project1',
            title: 'Mercari iOS App',
            link: 'https://apps.apple.com/jp/app/id667861049',
            description: `An iOS app, with over <a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">22 million</a> monthly active users, that allows for buying and selling used items, as well as cryptocurrencies like Bitcoin and Ethereum. Developed mainly on the つみたて auto-investment feature of the app.`,
            technologies: [
                "SwiftUI",
                "<a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>",
                "Swift Concurrency, Combine",
                "GitHub CICD",
                "Dependency Injection",
                "XCTests",
                "Firebase SDK"
            ],
            carouselId: 'carouselInner1',
            images: [
                "assets/other-apps/1-mercari/mercari-0.png",
                "assets/other-apps/1-mercari/mercari-1.png",
                "assets/other-apps/1-mercari/mercari-2.png",
                "assets/other-apps/1-mercari/mercari-3.png",
                "assets/other-apps/1-mercari/mercari-4.png",
                "assets/other-apps/1-mercari/mercari-5.png",
                "assets/other-apps/1-mercari/mercari-6.png",
                "assets/other-apps/1-mercari/mercari-7.png",
                "assets/other-apps/1-mercari/mercari-8.png",
                "assets/other-apps/1-mercari/mercari-9.png",
                "assets/other-apps/1-mercari/mercari-10.png",
                "assets/other-apps/1-mercari/mercari-11.png"
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
            ],
            carouselId: 'carouselInner2',
            images: [
                "assets/other-apps/2-rakuten-card/rakuten-0.png",
                "assets/other-apps/2-rakuten-card/rakuten-1.png",
                "assets/other-apps/2-rakuten-card/rakuten-2.png",
                "assets/other-apps/2-rakuten-card/rakuten-3.png",
                "assets/other-apps/2-rakuten-card/rakuten-4.png",
                "assets/other-apps/2-rakuten-card/rakuten-5.png"
            ]
        },
        {
            id: 'project3',
            title: 'Bunpo iOS App',
            link: 'https://apps.apple.com/us/app/bunpo-learn-japanese/id1279720052',
            description: `An iOS app, with over 40 thousand monthly active users, that allows users to learn different languages like Japanese, Korean, and French. I was the one who implemented the Quiz Tracing feature of the app, where the user will be able to learn a character by tracing it.`,
            technologies: [
                "UIKit, SwiftUI",
                "MVVM",
                "Swift Concurrency",
                "Dependency Injection",
                "Firebase SDK"
            ],
            carouselId: 'carouselInner3',
            images: [
                "assets/other-apps/3-bunpo/bunpo-0.png",
                "assets/other-apps/3-bunpo/bunpo-1.png",
                "assets/other-apps/3-bunpo/bunpo-2.png",
                "assets/other-apps/3-bunpo/bunpo-3.png",
                "assets/other-apps/3-bunpo/bunpo-4.png",
                "assets/other-apps/3-bunpo/bunpo-5.png",
                "assets/other-apps/3-bunpo/bunpo-6.png",
                "assets/other-apps/3-bunpo/bunpo-7.png",
                "assets/other-apps/3-bunpo/bunpo-8.png"
            ]
        }
    ];

    function createProject(project) {
        const projectContainer = document.getElementById(project.id);
        const carouselInner = document.getElementById(project.carouselId);
        const technologiesList = project.technologies.map(tech => `・${tech}<br>`).join('');

        // Create carousel items
        project.images.forEach((src, index) => {
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

        // Update project information
        const projectText = projectContainer.querySelector('.featured-text');
        projectText.innerHTML = `
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

    projects.forEach(createProject);
});