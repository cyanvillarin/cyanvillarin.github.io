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
                "XCTest",
                "XCUITest"
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
            title: 'Bunpo iOS App',
            link: 'https://apps.apple.com/us/app/bunpo-learn-japanese/id1279720052',
            description: `An iOS app, with over 40 thousand monthly active users, that allows users to learn different languages like Japanese, Korean, and French. I was the one who implemented the Quiz Tracing feature of the app, where the user will be able to learn a character by tracing it.`,
            technologies: [
                "SwiftUI",
                "MVVM",
                "Swift Concurrency",
                "Dependency Injection",
                "Firebase SDK"
            ],
            carouselId: 'carouselInner2',
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
        },
        {
            id: 'project3',
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
            carouselId: 'carouselInner3',
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
            id: 'project4',
            title: 'LookMe for Family iOS App',
            link: 'https://apps.apple.com/jp/app/id1576141035',
            description: `An iOS app that allows parents of kindergarten/nursery students to see details from school. They can see details like the food their children ate, their kids’ body temperature, and other info. They can also see announcements from the school via the app.`,
            technologies: [
                "UIKit",
                "MVVM",
                "RxSwift",
                "XCTests",
                "Firebase SDK"
            ],
            carouselId: 'carouselInner4',
            images: [
                "assets/other-apps/4-lookme-family/lookme-family-1.png",
                "assets/other-apps/4-lookme-family/lookme-family-2.png",
                "assets/other-apps/4-lookme-family/lookme-family-3.png",
                "assets/other-apps/4-lookme-family/lookme-family-4.png",
                "assets/other-apps/4-lookme-family/lookme-family-5.png",
                "assets/other-apps/4-lookme-family/lookme-family-6.png",
                "assets/other-apps/4-lookme-family/lookme-family-7.png",
                "assets/other-apps/4-lookme-family/lookme-family-8.png",
                "assets/other-apps/4-lookme-family/lookme-family-9.png",
                "assets/other-apps/4-lookme-family/lookme-family-10.png",
                "assets/other-apps/4-lookme-family/lookme-family-11.png",
                "assets/other-apps/4-lookme-family/lookme-family-12.png",
                "assets/other-apps/4-lookme-family/lookme-family-13.png",
                "assets/other-apps/4-lookme-family/lookme-family-14.png",
                "assets/other-apps/4-lookme-family/lookme-family-15.png",
                "assets/other-apps/4-lookme-family/lookme-family-16.png",
                "assets/other-apps/4-lookme-family/lookme-family-17.png"
            ]
        },
        {
            id: 'project5',
            title: 'LookMe Note iOS App',
            link: 'https://apps.apple.com/jp/app/id1576141035',
            description: `An iOS app that allows kindergarten/nursery teachers to input data about students like what they ate, body temperature, and sleeping positions. It also allows the users to send announcements via the app.`,
            technologies: [
                "UIKit",
                "MVVM",
                "RxSwift",
                "XCTests",
                "Firebase SDK"
            ],
            carouselId: 'carouselInner5',
            images: [
                "assets/other-apps/5-lookme-note/lookme-note-1.png",
                "assets/other-apps/5-lookme-note/lookme-note-2.png",
                "assets/other-apps/5-lookme-note/lookme-note-3.png",
                "assets/other-apps/5-lookme-note/lookme-note-4.png",
                "assets/other-apps/5-lookme-note/lookme-note-5.png",
                "assets/other-apps/5-lookme-note/lookme-note-6.png",
                "assets/other-apps/5-lookme-note/lookme-note-7.png",
                "assets/other-apps/5-lookme-note/lookme-note-8.png"
            ]
        },
        {
            id: 'project6',
            title: 'Globe At Home iOS App',
            link: 'https://itunes.apple.com/ph/app/globe-at-home/id1274352325?mt=8',
            description: `An iOS app that allows users to track their data usage, view their bill, acquire volume boosts & add-ons, and redeem freebies on special events. This project involved 40 people (inclusive of developers, QAs, BAs, project managers) divided into 5 scrum teams. We used Agile as a Software Development Methodology.`,
            technologies: [
                "UIKit",
                "MVC",
                "RealmSwift",
                "Alamofire",
                "SwiftyJSON"
            ],
            carouselId: 'carouselInner6',
            images: [
                "assets/other-apps/6-globe-at-home/globe-at-home-1.png",
                "assets/other-apps/6-globe-at-home/globe-at-home-2.png",
                "assets/other-apps/6-globe-at-home/globe-at-home-3.png",
                "assets/other-apps/6-globe-at-home/globe-at-home-4.png",
                "assets/other-apps/6-globe-at-home/globe-at-home-5.png"
            ],
        },
        {
            id: 'project7',
            title: 'TennisTrainer iOS App',
            description: `An iOS app that allows users to upload their tennis practice session recordings and view insights from professional tennis coaches. This project involved 8 people, and we used Agile as our Software Development Methodology.`,
            technologies: [
                "UIKit",
                "MVC",
                "RealmSwift",
                "Alamofire",
                "AWSS3"
            ],
            carouselId: 'carouselInner7',
            images: [
                "assets/other-apps/7-tennis-trainer/tennis-trainer-1.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-2.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-3.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-4.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-5.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-6.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-7.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-8.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-9.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-10.png",
                "assets/other-apps/7-tennis-trainer/tennis-trainer-11.png"
            ]
        },
        {
            id: 'project8',
            title: 'Dailydronez iOS App',
            description: `An iOS app for Dailydronez, a social platform for showcasing drone videos and photos. This project involved 6 people. We used Agile as our Software Development Methodology.`,
            technologies: [
                "Objective-C",
                "MVC",
                "SQLite"
            ],
            carouselId: 'carouselInner8',
            images: [
                "assets/other-apps/8-dailydronez/dailydronez-1.png",
                "assets/other-apps/8-dailydronez/dailydronez-2.png",
                "assets/other-apps/8-dailydronez/dailydronez-3.png",
                "assets/other-apps/8-dailydronez/dailydronez-4.png",
                "assets/other-apps/8-dailydronez/dailydronez-5.png",
                "assets/other-apps/8-dailydronez/dailydronez-6.png",
                "assets/other-apps/8-dailydronez/dailydronez-7.png"
            ],
            appLink: "https://apps.apple.com/us/app/dailydronez/id1261225498"
        }
    ];

    function createProject(project) {
        const projectContainer = document.getElementById(project.id);
        const carouselInner = document.getElementById(project.carouselId);
        const technologiesList = project.technologies.map(tech => `・${tech}<br>`).join('');

        // Create carousel items (grouping 3 images per slide)
        for (let i = 0; i < project.images.length; i += 3) {
            const itemDiv = document.createElement('div');
            itemDiv.className = `carousel-item ${i === 0 ? 'active' : ''}`;

            const imgRow = document.createElement('div');
            imgRow.className = 'd-flex justify-content-center';

            // Add up to 3 images per carousel item
            for (let j = i; j < i + 3 && j < project.images.length; j++) {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'px-2'; // Small spacing between images

                const img = document.createElement('img');
                img.className = 'img-fluid carousel-img';
                img.src = project.images[j];

                imgContainer.appendChild(img);
                imgRow.appendChild(imgContainer);
            }

            itemDiv.appendChild(imgRow);
            carouselInner.appendChild(itemDiv);
        }

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