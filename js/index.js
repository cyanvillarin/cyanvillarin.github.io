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
            description: `An iOS app, with over <a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">22 million</a> monthly active users, that allows for buying and selling used items, as well as cryptocurrencies like Bitcoin and Ethereum. Key contributions include: refactored V1 TCA-like Architecture Pattern into V2 <a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>, migrated Design System from DS3 to DS4, migrated unit tests from XCTest to Swift Testing, developed new features for Account Opening with Coincheck, led the GetDx virtual team for developer experience improvements, served as member of the Laplace Log Schema team, learned advanced git operations (rebase, amend, cherry-pick, squash, force-push), utilized Trunk-based development with small PRs (~200 lines to master) and RemoteConfigs to enable/disable features, and performed code reviews.`,
            technologies: [
                "SwiftUI",
                "Atoms",
                "TCA-like Architecture Pattern",
                "Swift Concurrency, Combine",
                "GitHub CICD",
                "Dependency Injection",
                "Datadog",
                "Playbook",
                "Wireframe",
                "AppIntents",
                "Swift Testing",
                "XCUITest",
                "Bazel Build System",
                "Charles",
                "Claude Code",
                "Cursor",
                "Devin",
                "JIRA"
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
            description: `A language learning iOS app serving over 40,000 monthly active users across Japanese, Korean, and French language courses. Led the implementation of the Quiz Tracing feature, enabling interactive character learning through touch-based tracing mechanics.`,
            technologies: [
                "SwiftUI",
                "MVVM",
                "Swift Concurrency",
                "Dependency Injection",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Swift Package Manager",
                "Xcode Build System"
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
            description: `A credit card management iOS app serving over <a href="https://rakuten.today/blog/q3-fy2023-results.html">40 million</a> monthly active users. Core features include credit statement viewing, campaign management, Rakuten points tracking, revolving payment applications, and payment method updates. Managed App Store release procedures and production monitoring.`,
            technologies: [
                "UIKit, SwiftUI",
                "MVVM",
                "Widgets",
                "Swift Concurrency, Combine",
                "XCTests",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Kibana",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A parent-facing iOS app for kindergarten and nursery school communication. Enables parents to access real-time information including meal records, body temperature logs, daily activities, and school announcements, facilitating seamless home-school connectivity.`,
            technologies: [
                "UIKit",
                "MVVM",
                "RxSwift",
                "XCTests",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Bitrise CICD",
                "GitLab",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A teacher-facing iOS app for kindergarten and nursery school administration. Streamlines daily data entry including meal tracking, body temperature monitoring, and sleep position documentation. Features integrated announcement broadcasting capabilities for parent communication.`,
            technologies: [
                "UIKit",
                "MVVM",
                "RxSwift",
                "XCTests",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Bitrise CICD",
                "GitLab",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A telecommunications management iOS app enabling users to monitor data usage, view billing statements, purchase volume boosts and add-ons, and redeem promotional offers. Developed within a large-scale Agile environment comprising 40 team members across 5 Scrum teams, including developers, QA engineers, business analysts, and project managers.`,
            technologies: [
                "UIKit",
                "MVC",
                "RealmSwift",
                "Alamofire",
                "SwiftyJSON",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A sports training iOS app enabling users to upload tennis practice session recordings and receive professional coaching insights. Developed using Agile methodologies within an 8-person cross-functional team.`,
            technologies: [
                "UIKit",
                "MVC",
                "RealmSwift",
                "Alamofire",
                "AWSS3",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A social media iOS app for the Dailydronez platform, specializing in drone photography and videography content sharing. Developed using Agile methodologies within a 6-person team.`,
            technologies: [
                "Objective-C",
                "MVC",
                "SQLite",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A secure ephemeral messaging iOS app designed for privacy-focused communication. Features automatic message deletion to ensure sensitive information is not persistently stored, providing users with enhanced security for confidential exchanges.`,
            technologies: [
                "UIKit",
                "MVVM",
                "Xcode Cloud",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Google AdMob",
                "Xcode Build System"
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
            description: `A sports information iOS app providing real-time UAAP team standings, roster information, and player statistics with popularity rankings. Full-stack personal project encompassing both iOS client development and backend API implementation.`,
            technologies: [
                "UIKit",
                "Alamofire",
                "RealmSwift",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A social sentiment iOS app enabling users to explore and share emotional states within a community. Features contextual quote delivery based on selected emotions, fostering emotional awareness and connection.`,
            technologies: [
                "UIKit",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Xcode Build System"
            ],
            carouselId: 'myAppsCarouselInner3',
            images: [
                "assets/own-apps/3-emotions/emotions-1.png",
                "assets/own-apps/3-emotions/emotions-2.png",
                "assets/own-apps/3-emotions/emotions-3.png"
            ]
        },
        {
            id: 'myApp5',
            title: 'Savings - Track Your Money',
            link: '#',
            description: `A personal asset tracking iOS app for recording snapshots of total assets over time and visualizing financial progress. Features interactive charts across multiple time periods (1W, 1M, 3M, 6M, 1Y, All), home screen widgets showing latest balance and savings chart, support for 16 currencies, and privacy-first design with all data stored on-device via SwiftData. Configured with Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution. Prepared for App Store submission with full metadata, keywords, and promotional copy.`,
            technologies: [
                "SwiftUI",
                "SwiftData",
                "Swift Charts",
                "WidgetKit",
                "Xcode Cloud",
                "Google AdMob",
                "Xcode Build System"
            ],
            carouselId: 'myAppsCarouselInner5',
            images: [
                "assets/own-apps/5-savings/savings-0.png",
                "assets/own-apps/5-savings/savings-1.png",
                "assets/own-apps/5-savings/savings-2.png",
                "assets/own-apps/5-savings/savings-3.png",
                "assets/own-apps/5-savings/savings-4.png",
                "assets/own-apps/5-savings/savings-5.png"
            ]
        },
        {
            id: 'myApp6',
            title: 'Earnings – Track Your Pay',
            link: '#',
            description: `A real-time earnings tracker iOS app that shows exactly how much money users have earned since starting their job, updating live to the second. Set income, working days, and hours once, and the app calculates precise workday-based earnings. Features home screen widgets, a live per-second rate animation, and progress views for the current hour, day, week, month, or year. Configured with Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution. Prepared for App Store submission with full metadata, keywords, and promotional copy.`,
            technologies: [
                "SwiftUI",
                "SwiftData",
                "WidgetKit",
                "Xcode Cloud",
                "Google AdMob",
                "Xcode Build System"
            ],
            carouselId: 'myAppsCarouselInner6',
            images: [
                "assets/own-apps/6-earnings/earnings-0.png",
                "assets/own-apps/6-earnings/earnings-1.png",
                "assets/own-apps/6-earnings/earnings-2.png",
                "assets/own-apps/6-earnings/earnings-3.png",
                "assets/own-apps/6-earnings/earnings-4.png",
                "assets/own-apps/6-earnings/earnings-5.png",
                "assets/own-apps/6-earnings/earnings-6.png"
            ]
        },
        {
            id: 'myApp7',
            title: 'Mazda Phone Wallpapers',
            link: 'https://mazdaphonewallpapers.web.app',
            description: `A curated gallery website offering free high-resolution Mazda phone wallpapers. Each wallpaper is crafted at full 1320×2868px resolution to fit modern iPhone screens perfectly. Built as a clean, browseable gallery with individual wallpaper pages.`,
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Firebase Hosting"
            ],
            carouselId: 'myAppsCarouselInner7',
            imagesPerSlide: 1,
            images: [
                "assets/own-apps/7-mazda-wallpapers/mazda-wallpapers-0.png",
                "assets/own-apps/7-mazda-wallpapers/mazda-wallpapers-1.png",
                "assets/own-apps/7-mazda-wallpapers/mazda-wallpapers-2.png",
                "assets/own-apps/7-mazda-wallpapers/mazda-wallpapers-3.png"
            ]
        },
        {
            id: 'myApp8',
            title: 'Mazda Universe Blog',
            link: 'https://mazdauniverse.web.app',
            description: `A blog website dedicated to Mazda cars, featuring articles on ownership tips, accessories, and driving experiences. Each article has its own page with cover image, table of contents, and related links. Built with plain HTML and CSS for fast, lightweight delivery.`,
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Firebase Hosting"
            ],
            carouselId: 'myAppsCarouselInner8',
            imagesPerSlide: 1,
            images: [
                "assets/own-apps/8-mazda-blog/mazda-blog-0.png",
                "assets/own-apps/8-mazda-blog/mazda-blog-1.png",
                "assets/own-apps/8-mazda-blog/mazda-blog-2.png",
                "assets/own-apps/8-mazda-blog/mazda-blog-3.png",
                "assets/own-apps/8-mazda-blog/mazda-blog-4.png",
                "assets/own-apps/8-mazda-blog/mazda-blog-5.png"
            ]
        },
        {
            id: 'myApp9',
            title: 'Eyes of the Gods',
            link: 'https://eyesofthegods.web.app',
            description: `A theatrical web app styled as a global surveillance dashboard. Features a 3D interactive globe powered by Three.js and globe.gl, with clickable location nodes that open live YouTube video feeds styled as spy-cam surveillance streams.`,
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Three.js",
                "globe.gl",
                "Firebase Hosting"
            ],
            carouselId: 'myAppsCarouselInner9',
            imagesPerSlide: 1,
            images: [
                "assets/own-apps/9-eyes-of-gods/eyes-0.png",
                "assets/own-apps/9-eyes-of-gods/eyes-1.png",
                "assets/own-apps/9-eyes-of-gods/eyes-2.png"
            ]
        },
        {
            id: 'myApp2',
            title: 'UAAP Sports iOS App',
            link: 'https://apps.apple.com/us/app/uaap-sports/id1407677138',
            description: `A sports information iOS app providing real-time UAAP team standings, roster information, and player statistics with popularity rankings. Full-stack personal project encompassing both iOS client development and backend API implementation.`,
            technologies: [
                "UIKit",
                "Alamofire",
                "RealmSwift",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "CocoaPods",
                "Xcode Build System"
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
            description: `A social sentiment iOS app enabling users to explore and share emotional states within a community. Features contextual quote delivery based on selected emotions, fostering emotional awareness and connection.`,
            technologies: [
                "UIKit",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Xcode Build System"
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
            description: `A global happiness tracking iOS app facilitating emotional awareness and community connection. Users submit their happiness status with optional reasoning, enabling exploration of worldwide sentiment patterns and shared experiences.`,
            technologies: [
                "UIKit",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Xcode Build System"
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

        // Show placeholder if no media at all
        if (videos.length === 0 && images.length === 0) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'carousel-item active';

            const row = document.createElement('div');
            row.className = 'd-flex justify-content-center';

            const count = project.placeholderCount || 1;
            const isWeb = count === 2;

            for (let i = 0; i < count; i++) {
                const col = document.createElement('div');
                col.className = 'px-2';

                const placeholder = document.createElement('div');
                if (isWeb) {
                    placeholder.style.cssText = 'display:flex;align-items:center;justify-content:center;width:calc(50vw - 4rem);max-width:480px;height:280px;background:#f0f0f0;border-radius:8px;color:#999;font-size:0.9rem;letter-spacing:0.05em;';
                } else {
                    placeholder.style.cssText = 'display:flex;align-items:center;justify-content:center;width:200px;height:430px;background:#f0f0f0;border-radius:8px;color:#999;font-size:0.9rem;letter-spacing:0.05em;';
                }
                placeholder.textContent = 'Coming soon';

                col.appendChild(placeholder);
                row.appendChild(col);
            }

            itemDiv.appendChild(row);
            carouselInner.appendChild(itemDiv);
        }

        // Create carousel items for images
        const perSlide = project.imagesPerSlide || 5;
        for (let i = 0; i < images.length; i += perSlide) {
            const itemDiv = document.createElement('div');
            itemDiv.className = `carousel-item ${isFirstSlide ? 'active' : ''}`;
            isFirstSlide = false;

            const imgRow = document.createElement('div');
            imgRow.className = 'd-flex justify-content-center';

            for (let j = i; j < i + perSlide && j < images.length; j++) {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'px-2';

                const img = document.createElement('img');
                img.className = project.imagesPerSlide ? 'img-fluid carousel-img-web' : 'img-fluid carousel-img';
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
            <p class="text-black-50 mb-0" style="margin-top: 0.625rem;">
                <em>${technologiesList}</em>
            </p>
            <p class="text-black-50 mb-0" style="margin-top: 0.625rem;">
                ${project.description}
            </p>
        `;
    }

    projects.forEach(createProject);
    myApps.forEach(createProject);
});