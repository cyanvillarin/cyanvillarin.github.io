// index.js
// Created by Cyan Villarin
// Created on Jul 5, 2024
// cyanvillarin.github.io

document.addEventListener("DOMContentLoaded", function() {
    const lang = getLang();

    const projects = [
        {
            id: 'project1',
            title: 'Mercari iOS App',
            title_ja: 'メルカリ iOSアプリ',
            link: 'https://apps.apple.com/jp/app/id667861049',
            description: `An iOS app, with over <a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">22 million</a> monthly active users, that allows for buying and selling used items, as well as cryptocurrencies like Bitcoin and Ethereum. Key contributions include: developed new features for Auto-Investing (つみたて), CARF (Common Reporting Framework for tax compliance), and Account Opening with Coincheck, refactored various screens from V1 TCA-like Architecture Pattern into V2 <a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>, migrated Design System from DS3 to DS4, migrated unit tests from XCTest to Swift Testing, led the GetDx virtual team for developer experience improvements, served as member of the Laplace Log Schema team, learned advanced git operations (rebase, amend, cherry-pick, squash, force-push), utilized Trunk-based development with small PRs (~200 lines to master) and RemoteConfigs to enable/disable features, and performed code reviews. This is also where I adopted <a href='https://docs.anthropic.com/en/docs/claude-code/overview'>Claude Code AI</a> as a core part of my development workflow — using it for feature implementation, code reviews, test writing, and building custom slash commands that automate the full development lifecycle from task pickup to PR creation. Additionally deepened expertise in SwiftUI, Swift Concurrency (async/await), Widgets, and WidgetKit.`,
            description_ja: `月間アクティブユーザー<a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">2,200万人</a>以上を持つ、中古品の売買やビットコイン・イーサリアムなどの暗号資産取引が可能なiOSアプリ。主な貢献：つみたて（Auto-Investing）機能、CARF（税務コンプライアンスのための共通報告フレームワーク）、Coincheckとの口座開設機能の新規開発、各画面のV1 TCAライクアーキテクチャパターンからV2 <a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>へのリファクタリング、デザインシステムDS3からDS4への移行、ユニットテストのXCTestからSwift Testingへの移行、GetDxバーチャルチームの開発者体験改善のリード、Laplace Log Schemaチームのメンバー、高度なgit操作（rebase、amend、cherry-pick、squash、force-push）の習得、小規模PR（約200行でmasterへ）によるトランクベース開発とRemoteConfigsによる機能のON/OFF、コードレビューの実施。また、ここで<a href='https://docs.anthropic.com/en/docs/claude-code/overview'>Claude Code AI</a>を開発ワークフローの中核として導入し、機能実装、コードレビュー、テスト作成、タスク取得からPR作成までの開発ライフサイクルを自動化するカスタムスラッシュコマンドの構築に活用。さらにSwiftUI、Swift Concurrency（async/await）、Widgets、WidgetKitの専門性を深めた。`,
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
            title_ja: 'Bunpo iOSアプリ',
            link: 'https://apps.apple.com/us/app/bunpo-learn-japanese/id1279720052',
            description: `A language learning iOS app serving over 40,000 monthly active users across Japanese, Korean, and French language courses. Led the implementation of the Quiz Tracing feature, enabling interactive character learning through touch-based tracing mechanics.`,
            description_ja: `日本語、韓国語、フランス語のコースを提供し、月間4万人以上のアクティブユーザーを持つ語学学習iOSアプリ。タッチベースのトレーシング機能によるインタラクティブな文字学習を可能にするQuiz Tracing機能の実装をリードした。`,
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
            title_ja: '楽天カード iOSアプリ',
            link: 'https://apps.apple.com/jp/app/id570105907',
            description: `A credit card management iOS app serving over <a href="https://rakuten.today/blog/q3-fy2023-results.html">40 million</a> monthly active users. Core features include credit statement viewing, campaign management, Rakuten points tracking, revolving payment applications, and payment method updates. Managed App Store release procedures and production monitoring.`,
            description_ja: `月間<a href="https://rakuten.today/blog/q3-fy2023-results.html">4,000万人</a>以上のアクティブユーザーを持つクレジットカード管理iOSアプリ。利用明細の確認、キャンペーン管理、楽天ポイントの追跡、リボ払い申請、支払い方法の変更などの主要機能を担当。App Storeのリリース手順と本番環境の監視も管理した。`,
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
            title_ja: 'LookMe for Family iOSアプリ',
            link: 'https://apps.apple.com/jp/app/id1576141035',
            description: `A parent-facing iOS app for kindergarten and nursery school communication. Enables parents to access real-time information including meal records, body temperature logs, daily activities, and school announcements, facilitating seamless home-school connectivity.`,
            description_ja: `幼稚園・保育園の保護者向けiOSアプリ。食事記録、体温ログ、日々の活動、園からのお知らせなどのリアルタイム情報にアクセスでき、家庭と園のシームレスな連携を実現する。`,
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
            title_ja: 'LookMe Note iOSアプリ',
            link: 'https://apps.apple.com/jp/app/id1576141035',
            description: `A teacher-facing iOS app for kindergarten and nursery school administration. Streamlines daily data entry including meal tracking, body temperature monitoring, and sleep position documentation. Features integrated announcement broadcasting capabilities for parent communication.`,
            description_ja: `幼稚園・保育園の教員向けiOSアプリ。食事記録、体温管理、午睡チェックなどの日常業務のデータ入力を効率化。保護者へのお知らせ配信機能も備えている。`,
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
            title_ja: 'Globe At Home iOSアプリ',
            link: 'https://itunes.apple.com/ph/app/globe-at-home/id1274352325?mt=8',
            description: `A telecommunications management iOS app enabling users to monitor data usage, view billing statements, purchase volume boosts and add-ons, and redeem promotional offers. Developed within a large-scale Agile environment comprising 40 team members across 5 Scrum teams, including developers, QA engineers, business analysts, and project managers.`,
            description_ja: `データ使用量の監視、請求書の確認、ボリュームブーストやアドオンの購入、プロモーションオファーの利用を可能にする通信管理iOSアプリ。5つのスクラムチーム、40名のメンバー（開発者、QAエンジニア、ビジネスアナリスト、プロジェクトマネージャー）による大規模アジャイル環境で開発した。`,
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
            title_ja: 'TennisTrainer iOSアプリ',
            description: `A sports training iOS app enabling users to upload tennis practice session recordings and receive professional coaching insights. Developed using Agile methodologies within an 8-person cross-functional team.`,
            description_ja: `テニスの練習セッションの録画をアップロードし、プロのコーチングインサイトを受け取れるスポーツトレーニングiOSアプリ。8名のクロスファンクショナルチームでアジャイル手法を用いて開発した。`,
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
            title_ja: 'Dailydronez iOSアプリ',
            description: `A social media iOS app for the Dailydronez platform, specializing in drone photography and videography content sharing. Developed using Agile methodologies within a 6-person team.`,
            description_ja: `ドローンによる写真・動画コンテンツの共有に特化したDailydronezプラットフォームのソーシャルメディアiOSアプリ。6名のチームでアジャイル手法を用いて開発した。`,
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
            title_ja: 'Chatzone iOSアプリ',
            link: 'https://apps.apple.com/us/app/chatzone-private-rooms/id1551793873',
            description: `A privacy-focused ephemeral messaging iOS app where all messages are encrypted before being sent and automatically deleted after the session ends. Users create or join private rooms via room codes or QR code scanning, and can share encrypted text messages and photos in real time. Recently upgraded the encryption method from AES-128 to Diffie-Hellman key exchange, enabling secure shared secret generation without transmitting keys over the network. Also implemented Firebase Realtime Database security rules to enforce room-level access control, anonymous authentication, and secret whitelist validation. Completed a full migration from UIKit Storyboards to SwiftUI across all screens (SelectionView, ConnectionView, MessagesView, AboutView, and Modals), replaced CocoaPods with Swift Package Manager for all dependencies (Firebase, Google AdMob, Lottie). Configured Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution, and handled the full App Store submission flow including metadata, screenshots, keywords, promotional copy, encryption compliance (ITSAppUsesNonExemptEncryption), and review guidelines. Development was driven by an Obsidian + Claude Code workflow — all tasks, migration plans, and learnings were tracked in an Obsidian vault that Claude Code reads directly as a local knowledge base, enabling AI-assisted feature implementation, code generation, and iterative development across the entire project.`,
            description_ja: `プライバシー重視のエフェメラルメッセージングiOSアプリ。すべてのメッセージは暗号化されてから送信され、セッション終了後に自動的に削除される。ルームコードまたはQRコードスキャンでプライベートルームを作成・参加し、暗号化されたテキストメッセージや写真をリアルタイムで共有可能。最近、暗号化方式をAES-128からDiffie-Hellman鍵交換にアップグレードし、ネットワーク上で鍵を送信せずに安全な共有シークレットの生成を実現。また、Firebase Realtime Databaseセキュリティルールを実装し、ルームレベルのアクセス制御、匿名認証、シークレットホワイトリスト検証を強化。全画面（SelectionView、ConnectionView、MessagesView、AboutView、Modals）をUIKit StoryboardsからSwiftUIへ完全移行し、すべての依存関係（Firebase、Google AdMob、Lottie）をCocoaPodsからSwift Package Managerに置き換えた。Xcode Cloud CI/CDによる自動ビルド、テスト、TestFlight配信を構成し、メタデータ、スクリーンショット、キーワード、プロモーションコピー、暗号化コンプライアンス（ITSAppUsesNonExemptEncryption）、審査ガイドラインを含むApp Store申請フロー全体を対応。開発はObsidian + Claude Codeワークフローで推進し、すべてのタスク、移行計画、学びをObsidian Vaultで管理。Claude Codeがローカルのナレッジベースとして直接読み込むことで、AI支援による機能実装、コード生成、プロジェクト全体の反復開発を実現した。`,
            technologies: [
                "SwiftUI",
                "MVVM",
                "Combine",
                "Diffie-Hellman Key Exchange",
                "Xcode Cloud",
                "Firebase Analytics",
                "Firebase Realtime Database",
                "Firebase RemoteConfigs",
                "Firebase Cloud Messaging",
                "Google AdMob",
                "Lottie",
                "Swift Package Manager",
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
                "assets/own-apps/1-chatzone/chatzone-6.png"
            ]
        },
        {
            id: 'myApp2',
            title: 'UAAP Sports iOS App',
            title_ja: 'UAAP Sports iOSアプリ',
            link: 'https://apps.apple.com/us/app/uaap-sports/id1407677138',
            description: `A sports information iOS app providing real-time UAAP team standings, roster information, and player statistics with popularity rankings. Full-stack personal project encompassing both iOS client development and backend API implementation.`,
            description_ja: `UAAPのチーム順位、ロスター情報、人気ランキング付き選手統計をリアルタイムで提供するスポーツ情報iOSアプリ。iOSクライアント開発とバックエンドAPI実装の両方を含むフルスタック個人プロジェクト。`,
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
            title_ja: 'Emotions iOSアプリ',
            link: 'https://apps.apple.com/us/app/emotions-quotes-and-stats/id1550042237',
            description: `A social sentiment iOS app enabling users to explore and share emotional states within a community. Features contextual quote delivery based on selected emotions, fostering emotional awareness and connection.`,
            description_ja: `コミュニティ内で感情状態を探索・共有できるソーシャルセンチメントiOSアプリ。選択した感情に基づくコンテキスト別の名言配信機能により、感情の気づきとつながりを育む。`,
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
            title_ja: 'Savings - 資産を記録',
            link: 'https://apps.apple.com/us/app/savings-track-your-money/id6760301607',
            description: `A personal asset tracking iOS app for recording snapshots of total assets over time and visualizing financial progress. Features interactive charts across multiple time periods (1W, 1M, 3M, 6M, 1Y, All), home screen widgets showing latest balance and savings chart, support for 16 currencies, and privacy-first design with all data stored on-device via SwiftData. Configured with Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution. Prepared for App Store submission with full metadata, keywords, and promotional copy.`,
            description_ja: `総資産のスナップショットを時系列で記録し、財務の進捗を可視化する個人資産管理iOSアプリ。複数の期間（1W、1M、3M、6M、1Y、All）にわたるインタラクティブチャート、最新残高と貯蓄チャートを表示するホーム画面ウィジェット、16通貨のサポート、SwiftDataによるオンデバイスデータ保存のプライバシーファーストな設計が特徴。Xcode Cloud CI/CDによる自動ビルド、テスト、TestFlight配信を構成し、メタデータ、キーワード、プロモーションコピーを含むApp Store申請を準備した。`,
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
            title_ja: 'Earnings – 給料を追跡',
            link: 'https://apps.apple.com/us/app/earnings-realtime-tracking/id6760335853',
            description: `A real-time earnings tracker iOS app that shows exactly how much money users have earned since starting their job, updating live to the second. Set income, working days, and hours once, and the app calculates precise workday-based earnings. Features home screen widgets, a live per-second rate animation, and progress views for the current hour, day, week, month, or year. Configured with Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution. Prepared for App Store submission with full metadata, keywords, and promotional copy.`,
            description_ja: `仕事開始からの稼ぎを秒単位でリアルタイム表示する収入トラッカーiOSアプリ。収入、勤務日、勤務時間を一度設定するだけで、営業日ベースの正確な収入を計算する。ホーム画面ウィジェット、秒単位のライブレートアニメーション、現在の時間・日・週・月・年の進捗ビューが特徴。Xcode Cloud CI/CDによる自動ビルド、テスト、TestFlight配信を構成し、App Store申請を準備した。`,
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
            title_ja: 'Mazda スマホ壁紙',
            link: 'https://mazdaphonewallpapers.web.app',
            description: `A curated gallery website offering free high-resolution Mazda phone wallpapers. Each wallpaper is crafted at full 1320×2868px resolution to fit modern iPhone screens perfectly. Built as a clean, browseable gallery with individual wallpaper pages.`,
            description_ja: `高解像度のマツダスマホ壁紙を無料で提供するキュレーションギャラリーサイト。各壁紙は1320×2868pxのフル解像度で作成され、最新のiPhone画面にぴったりフィットする。個別の壁紙ページを持つクリーンで閲覧しやすいギャラリーとして構築。`,
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
            title_ja: 'Mazda Universe ブログ',
            link: 'https://mazdauniverse.web.app',
            description: `A blog website dedicated to Mazda cars, featuring articles on ownership tips, accessories, and driving experiences. Each article has its own page with cover image, table of contents, and related links. Built with plain HTML and CSS for fast, lightweight delivery.`,
            description_ja: `マツダ車に特化したブログサイト。オーナーシップのコツ、アクセサリー、ドライブ体験に関する記事を掲載。各記事にはカバー画像、目次、関連リンク付きの個別ページがある。高速で軽量な配信のためにプレーンHTMLとCSSで構築。`,
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
            title_ja: 'Eyes of the Gods',
            link: 'https://eyesofthegods.web.app',
            description: `A theatrical web app styled as a global surveillance dashboard. Features a 3D interactive globe powered by Three.js and globe.gl, with clickable location nodes that open live YouTube video feeds styled as spy-cam surveillance streams.`,
            description_ja: `グローバル監視ダッシュボード風のシアトリカルなWebアプリ。Three.jsとglobe.glによる3Dインタラクティブ地球儀を搭載し、クリック可能なロケーションノードからスパイカム風のライブYouTube動画フィードを開く。`,
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
            title_ja: 'UAAP Sports iOSアプリ',
            link: 'https://apps.apple.com/us/app/uaap-sports/id1407677138',
            description: `A sports information iOS app providing real-time UAAP team standings, roster information, and player statistics with popularity rankings. Full-stack personal project encompassing both iOS client development and backend API implementation.`,
            description_ja: `UAAPのチーム順位、ロスター情報、人気ランキング付き選手統計をリアルタイムで提供するスポーツ情報iOSアプリ。iOSクライアント開発とバックエンドAPI実装の両方を含むフルスタック個人プロジェクト。`,
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
            title_ja: 'Emotions iOSアプリ',
            link: 'https://apps.apple.com/us/app/emotions-quotes-and-stats/id1550042237',
            description: `A social sentiment iOS app enabling users to explore and share emotional states within a community. Features contextual quote delivery based on selected emotions, fostering emotional awareness and connection.`,
            description_ja: `コミュニティ内で感情状態を探索・共有できるソーシャルセンチメントiOSアプリ。選択した感情に基づくコンテキスト別の名言配信機能により、感情の気づきとつながりを育む。`,
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
            title_ja: 'Happisa iOSアプリ',
            link: 'https://apps.apple.com/bn/app/happisa-worlds-happiness/id1551291796',
            description: `A global happiness tracking iOS app facilitating emotional awareness and community connection. Users submit their happiness status with optional reasoning, enabling exploration of worldwide sentiment patterns and shared experiences.`,
            description_ja: `感情の気づきとコミュニティのつながりを促進するグローバル幸福度トラッキングiOSアプリ。ユーザーは任意の理由付きで幸福度を送信し、世界中のセンチメントパターンや共有体験を探索できる。`,
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
        const title = (lang === 'ja' && project.title_ja) ? project.title_ja : project.title;
        const description = (lang === 'ja' && project.description_ja) ? project.description_ja : project.description;

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
            <h4><a href="${project.link}">${title}</a></h4>
            <p class="text-black-50 mb-0" style="margin-top: 0.625rem;">
                <em>${technologiesList}</em>
            </p>
            <p class="text-black-50 mb-0" style="margin-top: 0.625rem;">
                ${description}
            </p>
        `;
    }

    projects.forEach(createProject);
    myApps.forEach(createProject);
});