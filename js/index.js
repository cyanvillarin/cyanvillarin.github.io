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
            description: `An iOS app, with over <a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">22 million</a> monthly active users, that allows for buying and selling used items, as well as cryptocurrencies like Bitcoin and Ethereum. Key contributions include: refactored V1 TCA-like Architecture Pattern into V2 Atoms, developed new features for Account Opening with Coincheck, learned advanced git operations (rebase, amend, cherry-pick, squash, force-push), utilized Trunk-based development with small PRs (~200 lines to master) and RemoteConfigs to enable/disable features, and performed code reviews.`,
            technologies: [
                "SwiftUI",
                "<a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>",
                "TCA-like Architecture Pattern",
                "Swift Concurrency, Combine",
                "GitHub CICD",
                "Dependency Injection",
                "Datadog",
                "Playbook",
                "Wireframe",
                "AppIntents",
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
            description: `An iOS app, with over <a href="https://rakuten.today/blog/q3-fy2023-results.html">40 million</a> monthly active users, that allows users to see credit statement bills, see campaigns, see Rakuten points, apply for revolving payment, and change their payment methods for the RakutenCard credit card. Handled App Store release procedures and monitoring.`,
            technologies: [
                "UIKit, SwiftUI",
                "MVVM",
                "Widgets",
                "Swift Concurrency, Combine",
                "XCTests",
                "Firebase SDK",
                "Kibana"
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
            description: `An iOS app that allows parents of kindergarten/nursery students to see details from school. They can see details like the food their children ate, their kids' body temperature, and other info. They can also see announcements from the school via the app.`,
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

    // My Apps data
    const myApps = [
        {
            id: 'myApp1',
            title: 'Chatzone iOS App',
            link: 'https://apps.apple.com/us/app/chatzone-private-rooms/id1551793873',
            description: `This app is a secured disappearing messages app. Use it to send sensitive information to other people without worrying about your messages being saved somewhere else.`,
            technologies: [
                "UIKit",
                "MVVM",
                "Xcode Cloud",
                "Firebase SDK"
            ],
            carouselId: 'myAppsCarouselInner1',
            images: [
                "assets/own-apps/1-chatzone/chatzone-0.png",
                "assets/own-apps/1-chatzone/chatzone-1.png",
                "assets/own-apps/1-chatzone/chatzone-2.png",
                "assets/own-apps/1-chatzone/chatzone-3.png",
                "assets/own-apps/1-chatzone/chatzone-4.png",
                "assets/own-apps/1-chatzone/chatzone-5.png",
                "assets/own-apps/1-chatzone/chatzone-6.png",
                "assets/own-apps/1-chatzone/chatzone-7.png",
                "assets/own-apps/1-chatzone/chatzone-8.png"
            ]
        },
        {
            id: 'myApp2',
            title: 'UAAP Sports iOS App',
            link: 'https://apps.apple.com/us/app/uaap-sports/id1407677138',
            description: `An iOS app that keeps you updated with the UAAP teams' current score standing and roster. Users are also able to view the information on each player, as well as view the most popular players. This is a personal project of mine, so I did the development for both the iOS client and the backend API.`,
            technologies: [
                "UIKit",
                "Alamofire",
                "RealmSwift",
                "Firebase SDK"
            ],
            carouselId: 'myAppsCarouselInner2',
            images: [
                "assets/own-apps/2-uaap-sports/uaap-sports-0.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-1.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-2.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-3.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-4.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-5.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-6.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-7.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-8.png",
                "assets/own-apps/2-uaap-sports/uaap-sports-9.png"
            ]
        },
        {
            id: 'myApp3',
            title: 'Emotions iOS App',
            link: 'https://apps.apple.com/us/app/emotions-quotes-and-stats/id1550042237',
            description: `This app allows the user to see how other people are feeling. It also displays a quote that is relevant to the emotion that he/she has selected.`,
            technologies: [
                "UIKit",
                "Firebase SDK"
            ],
            carouselId: 'myAppsCarouselInner3',
            images: [
                "assets/own-apps/3-emotions/emotions-1.png",
                "assets/own-apps/3-emotions/emotions-2.png",
                "assets/own-apps/3-emotions/emotions-3.png"
            ]
        },
        {
            id: 'myApp4',
            title: 'Happisa iOS App',
            link: 'https://apps.apple.com/bn/app/happisa-worlds-happiness/id1551291796',
            description: `This app is just a simple app in which you can answer if you are happy or not. You also choose to input the reason as to why you chose that answer. Lastly, you will be able to see other people's reasons as to why they're happy or not.`,
            technologies: [
                "UIKit",
                "Firebase SDK"
            ],
            carouselId: 'myAppsCarouselInner4',
            images: [
                "assets/own-apps/4-happisa/happisa-1.png",
                "assets/own-apps/4-happisa/happisa-2.png",
                "assets/own-apps/4-happisa/happisa-3.png"
            ]
        }
    ];

    function createProject(project) {
        const projectContainer = document.getElementById(project.id);
        const carouselInner = document.getElementById(project.carouselId);
        const technologiesList = project.technologies.join(', ');

        // Separate videos and images
        const videos = project.images.filter(src =>
            src.endsWith('.mov') || src.endsWith('.mp4') || src.endsWith('.webm')
        );
        const images = project.images.filter(src =>
            !src.endsWith('.mov') && !src.endsWith('.mp4') && !src.endsWith('.webm')
        );

        let isFirstSlide = true;

        // Create carousel items for videos (1 video per slide)
        videos.forEach(videoSrc => {
            const itemDiv = document.createElement('div');
            itemDiv.className = `carousel-item ${isFirstSlide ? 'active' : ''}`;
            isFirstSlide = false;

            const videoRow = document.createElement('div');
            videoRow.className = 'd-flex justify-content-center';

            const videoContainer = document.createElement('div');
            videoContainer.className = 'px-2';

            const video = document.createElement('video');
            video.className = 'img-fluid carousel-img';
            video.src = videoSrc;
            video.controls = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;

            videoContainer.appendChild(video);
            videoRow.appendChild(videoContainer);
            itemDiv.appendChild(videoRow);
            carouselInner.appendChild(itemDiv);
        });

        // Create carousel items for images (grouping 5 images per slide)
        for (let i = 0; i < images.length; i += 5) {
            const itemDiv = document.createElement('div');
            itemDiv.className = `carousel-item ${isFirstSlide ? 'active' : ''}`;
            isFirstSlide = false;

            const imgRow = document.createElement('div');
            imgRow.className = 'd-flex justify-content-center';

            // Add up to 5 images per carousel item
            for (let j = i; j < i + 5 && j < images.length; j++) {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'px-2';

                const img = document.createElement('img');
                img.className = 'img-fluid carousel-img';
                img.src = images[j];

                imgContainer.appendChild(img);
                imgRow.appendChild(imgContainer);
            }

            itemDiv.appendChild(imgRow);
            carouselInner.appendChild(itemDiv);
        }

        // Update project title, technologies, and description
        const projectTitle = projectContainer.querySelector('.featured-text');
        projectTitle.innerHTML = `
            <h4><a href="${project.link}">${project.title}</a></h4>
            <p class="text-black-50 mb-0 mt-2">
                Technologies used: ${technologiesList}
            </p>
            <p class="text-black-50 mb-0 mt-2">
                ${project.description}
            </p>
        `;
    }

    projects.forEach(createProject);
    myApps.forEach(createProject);
});