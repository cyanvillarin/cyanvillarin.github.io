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
            description: `An iOS app, with over <a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">22 million</a> monthly active users, that allows for buying and selling used items, as well as cryptocurrencies like Bitcoin and Ethereum. Key contributions include: developed new features for Auto-Investing (つみたて), CARF (Crypto-Asset Reporting Framework), and Account Opening with Coincheck, refactored various screens from V1 TCA-like Architecture Pattern into V2 <a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>, migrated Design System from DS3 to DS4, migrated unit tests from XCTest to Swift Testing, led the GetDx virtual team for developer experience improvements, served as member of the Laplace Log Schema team, learned advanced git operations (rebase, amend, cherry-pick, squash, force-push), utilized Trunk-based development with small PRs (~200 lines to master) and RemoteConfigs to enable/disable features, and performed code reviews. This is also where I adopted <a href='https://docs.anthropic.com/en/docs/claude-code/overview'>Claude Code AI</a> as a core part of my development workflow — using it for feature implementation, code reviews, test writing, and building custom slash commands that automate the full development lifecycle from task pickup to PR creation. Additionally deepened expertise in SwiftUI, Swift Concurrency (async/await), Widgets, and WidgetKit.`,
            description_ja: `月間アクティブユーザー<a href="https://www.morningstar.com/company-reports/1223104-mercari-is-still-focused-on-growth-but-maintaining-healthy-margins">2,200万人</a>以上を持つ、中古品の売買やビットコイン・イーサリアムなどの暗号資産取引が可能なiOSアプリ。主な貢献：つみたて（Auto-Investing）機能、CARF（暗号資産報告フレームワーク）、Coincheckとの口座開設機能の新規開発、各画面のV1 TCAライクアーキテクチャパターンからV2 <a href='https://github.com/ra1028/swiftui-atom-properties'>Atoms</a>へのリファクタリング、デザインシステムDS3からDS4への移行、ユニットテストのXCTestからSwift Testingへの移行、GetDxバーチャルチームの開発者体験改善のリード、Laplace Log Schemaチームのメンバー、高度なgit操作（rebase、amend、cherry-pick、squash、force-push）の習得、小規模PR（約200行でmasterへ）によるトランクベース開発とRemoteConfigsによる機能のON/OFF、コードレビューの実施。また、ここで<a href='https://docs.anthropic.com/en/docs/claude-code/overview'>Claude Code AI</a>を開発ワークフローの中核として導入し、機能実装、コードレビュー、テスト作成、タスク取得からPR作成までの開発ライフサイクルを自動化するカスタムスラッシュコマンドの構築に活用。さらにSwiftUI、Swift Concurrency（async/await）、Widgets、WidgetKitの専門性を深めた。`,
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
            title: 'Chatzone App (iOS & Android)',
            title_ja: 'Chatzone アプリ（iOS・Android）',
            platforms: [
                {
                    id: 'myApp1-ios',
                    name: 'iOS',
                    name_ja: 'iOS版',
                    link: 'https://apps.apple.com/us/app/chatzone-private-rooms/id1551793873',
                    description: `A privacy-focused ephemeral messaging iOS app where all messages are encrypted before being sent and automatically deleted after the session ends. Users create or join private rooms via room codes or QR code scanning, and can share encrypted text messages and photos in real time. Recently replaced hardcoded AES-128 keys with Diffie-Hellman key exchange (ECDH via CryptoKit) to securely derive AES-GCM encryption keys without transmitting secrets over the network. Also implemented Firebase Realtime Database security rules to enforce room-level access control, anonymous authentication, and secret whitelist validation. Completed a full migration from UIKit Storyboards to SwiftUI across all screens (SelectionView, ConnectionView, MessagesView, AboutView, and Modals), replaced CocoaPods with Swift Package Manager for all dependencies (Firebase, Google AdMob, Lottie). Configured Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution, and handled the full App Store submission flow including metadata, screenshots, keywords, promotional copy, encryption compliance (ITSAppUsesNonExemptEncryption), and review guidelines. Monetized with Google AdMob using production-safe ad testing hygiene: debug builds load Google's sample ad units while physical test devices are registered account-wide in the AdMob console, so real ads are never clicked during development. Development was driven by an Obsidian + Claude Code workflow — all tasks, migration plans, and learnings were tracked in an Obsidian vault that Claude Code reads directly as a local knowledge base, enabling AI-assisted feature implementation, code generation, and iterative development across the entire project.`,
                    description_ja: `プライバシー重視のエフェメラルメッセージングiOSアプリ。すべてのメッセージは暗号化されてから送信され、セッション終了後に自動的に削除される。ルームコードまたはQRコードスキャンでプライベートルームを作成・参加し、暗号化されたテキストメッセージや写真をリアルタイムで共有可能。最近、ハードコードされたAES-128鍵をDiffie-Hellman鍵交換（CryptoKitによるECDH）に置き換え、ネットワーク上で秘密鍵を送信せずにAES-GCM暗号化鍵を安全に導出する仕組みを実現。また、Firebase Realtime Databaseセキュリティルールを実装し、ルームレベルのアクセス制御、匿名認証、シークレットホワイトリスト検証を強化。全画面（SelectionView、ConnectionView、MessagesView、AboutView、Modals）をUIKit StoryboardsからSwiftUIへ完全移行し、すべての依存関係（Firebase、Google AdMob、Lottie）をCocoaPodsからSwift Package Managerに置き換えた。Xcode Cloud CI/CDによる自動ビルド、テスト、TestFlight配信を構成し、メタデータ、スクリーンショット、キーワード、プロモーションコピー、暗号化コンプライアンス（ITSAppUsesNonExemptEncryption）、審査ガイドラインを含むApp Store申請フロー全体を対応。Google AdMobによる収益化では、本番環境に安全な広告テスト運用を実践：デバッグビルドはGoogleのサンプル広告ユニットを読み込み、実機はAdMobコンソールにアカウントレベルで登録することで、開発中に実際の広告をクリックしてしまうことを防止。開発はObsidian + Claude Codeワークフローで推進し、すべてのタスク、移行計画、学びをObsidian Vaultで管理。Claude Codeがローカルのナレッジベースとして直接読み込むことで、AI支援による機能実装、コード生成、プロジェクト全体の反復開発を実現した。`,
                    technologies: [
                        "SwiftUI",
                        "MVVM",
                        "Combine",
                        "AES-GCM Encryption",
                        "Diffie-Hellman Key Exchange (ECDH)",
                        "Xcode Cloud",
                        "Firebase Analytics",
                        "Firebase Realtime Database",
                        "Firebase RemoteConfigs",
                        "Firebase Cloud Messaging",
                        "Firebase Crashlytics",
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
                    id: 'myApp1-android',
                    name: 'Android',
                    name_ja: 'Android版',
                    link: 'https://play.google.com/store/apps/details?id=com.inspiralists.chatzone',
                    note: 'currently in closed testing on Google Play — public release coming soon',
                    note_ja: '現在Google Playでクローズドテスト中 — 一般公開は近日予定',
                    description: `The Android version of Chatzone, currently in active development, bringing the same privacy-focused ephemeral messaging experience to Android devices. Built with Kotlin and Jetpack Compose (Material 3) using MVVM architecture with Navigation Compose, it connects to the same Firebase Realtime Database backend as the iOS app, so iOS and Android users can create and join the same private rooms via room codes or QR code scanning (QR generation via ZXing). Implements the identical cross-platform security model as the iOS version — X25519 Diffie-Hellman key exchange with HKDF-SHA256 key derivation (RFC 5869), implemented to be byte-compatible with iOS CryptoKit's AES-GCM combined format (nonce + ciphertext + tag) — so messages stay encrypted end-to-end across platforms without transmitting secrets over the network, and are automatically deleted after the session ends. Uses Firebase anonymous authentication and Remote Config, with Lottie animations and Coil image loading. Released to Google Play (internal testing track) under my own developer account through a fastlane-automated pipeline: signed AAB uploads using a self-managed upload keystore under Play App Signing, and the full store listing (descriptions, framed screenshots, feature graphic) synced from version-controlled metadata via fastlane supply. Completed the entire Play Console compliance pass — Data safety declarations verified against Google's official Mobile Ads SDK and Firebase disclosure documentation, the Advertising ID declaration, content rating, and target audience — plus AdMob monetization with an interstitial ad unit, account-level test-device registration (instead of per-app code), and app-ads.txt publisher verification. Development follows the same Obsidian + Claude Code workflow used on the iOS app, with all tasks, plans, and learnings tracked in an Obsidian vault that Claude Code reads directly as a local knowledge base — including a reusable Google Play publishing playbook distilled from this launch for the next Android apps.`,
                    description_ja: `現在開発中のChatzone Android版。プライバシー重視のエフェメラルメッセージング体験をAndroidデバイスにも提供する。KotlinとJetpack Compose（Material 3）を使用しMVVMアーキテクチャとNavigation Composeで構築され、iOSアプリと同じFirebase Realtime Databaseバックエンドに接続するため、iOSとAndroidのユーザーがルームコードやQRコードスキャン（ZXingによるQR生成）で同じプライベートルームを作成・参加できる。iOS版と同一のクロスプラットフォームセキュリティモデル — X25519 Diffie-Hellman鍵交換とHKDF-SHA256鍵導出（RFC 5869）を、iOS CryptoKitのAES-GCM combined形式（nonce + 暗号文 + タグ）とバイト互換になるよう実装 — により、ネットワーク上で秘密鍵を送信せずにメッセージはプラットフォームを越えてエンドツーエンドで暗号化され、セッション終了後に自動的に削除される。Firebase匿名認証とRemote Configを使用し、LottieアニメーションとCoil画像読み込みにも対応。自身のデベロッパーアカウントでGoogle Play（内部テストトラック)にリリースし、fastlaneで自動化されたパイプラインを構築：Play App Signing下で自己管理のアップロードキーストアによる署名済みAABアップロード、バージョン管理されたメタデータからfastlane supplyでストア掲載情報（説明文、フレーム付きスクリーンショット、フィーチャーグラフィック）を同期。Play Consoleのコンプライアンス対応も完遂 — GoogleのMobile Ads SDKとFirebaseの公式開示ドキュメントに照らして検証したデータセーフティ申告、広告ID申告、コンテンツレーティング、ターゲット層設定 — さらにAdMobによる収益化（インタースティシャル広告ユニット、アプリごとのコードではなくアカウントレベルのテストデバイス登録、app-ads.txtパブリッシャー検証）にも対応。開発はiOSアプリと同じObsidian + Claude Codeワークフローで推進し、すべてのタスク、計画、学びをObsidian Vaultで管理。Claude Codeがローカルのナレッジベースとして直接読み込むことで、AI支援による機能実装と反復開発を実現 — 今回のローンチから得た知見は、次のAndroidアプリのための再利用可能なGoogle Play公開プレイブックとしてまとめている。`,
                    technologies: [
                        "Kotlin",
                        "Jetpack Compose (Material 3)",
                        "MVVM",
                        "Navigation Compose",
                        "AES-GCM Encryption",
                        "Diffie-Hellman Key Exchange (X25519 ECDH)",
                        "HKDF-SHA256 Key Derivation",
                        "Firebase Authentication",
                        "Firebase Analytics",
                        "Firebase Realtime Database",
                        "Firebase RemoteConfigs",
                        "Firebase Crashlytics",
                        "Google AdMob",
                        "fastlane (supply)",
                        "Google Play Console",
                        "Play App Signing",
                        "Lottie",
                        "Coil",
                        "ZXing (QR Code Generation)",
                        "Gradle (Kotlin DSL)",
                        "Android Studio"
                    ],
                    carouselId: 'myAppsCarouselInner1Android',
                    images: [
                        "assets/own-apps/1-chatzone/android/chatzone-android-0.png",
                        "assets/own-apps/1-chatzone/android/chatzone-android-1.png",
                        "assets/own-apps/1-chatzone/android/chatzone-android-2.png",
                        "assets/own-apps/1-chatzone/android/chatzone-android-3.png",
                        "assets/own-apps/1-chatzone/android/chatzone-android-4.png",
                        "assets/own-apps/1-chatzone/android/chatzone-android-5.png"
                    ]
                }
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
            title: 'Savings - Track Your Money (iOS & Android)',
            title_ja: 'Savings - 資産を記録（iOS・Android）',
            platforms: [
                {
                    id: 'myApp5-ios',
                    name: 'iOS',
                    name_ja: 'iOS版',
                    link: 'https://apps.apple.com/us/app/savings-track-your-money/id6760301607',
                    description: `A personal asset tracking iOS app for recording snapshots of total assets over time and visualizing financial progress. Features interactive charts across multiple time periods (1W, 1M, 3M, 6M, 1Y, All), home screen widgets showing latest balance and savings chart, support for 16 currencies, and privacy-first design with all data stored on-device via SwiftData. Configured with Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution. Prepared for App Store submission with full metadata, keywords, and promotional copy.`,
                    description_ja: `総資産のスナップショットを時系列で記録し、財務の進捗を可視化する個人資産管理iOSアプリ。複数の期間（1W、1M、3M、6M、1Y、All）にわたるインタラクティブチャート、最新残高と貯蓄チャートを表示するホーム画面ウィジェット、16通貨のサポート、SwiftDataによるオンデバイスデータ保存のプライバシーファーストな設計が特徴。Xcode Cloud CI/CDによる自動ビルド、テスト、TestFlight配信を構成し、メタデータ、キーワード、プロモーションコピーを含むApp Store申請を準備した。`,
                    technologies: [
                        "SwiftUI",
                        "SwiftData",
                        "Swift Charts",
                        "WidgetKit",
                        "Xcode Cloud",
                        "Firebase Crashlytics",
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
                    id: 'myApp5-android',
                    name: 'Android',
                    name_ja: 'Android版',
                    link: 'https://play.google.com/store/apps/details?id=com.inspiralists.savings',
                    note: 'currently in closed testing on Google Play — public release coming soon',
                    note_ja: '現在Google Playでクローズドテスト中 — 一般公開は近日予定',
                    description: `The Android version of Savings, currently in active development, bringing the same personal asset tracking experience to Android devices. Built with Kotlin and Jetpack Compose (Material 3) using MVVM architecture, it recreates the iOS app feature for feature — interactive savings charts across six time periods with drag-to-inspect selection (drawn on a custom Compose Canvas, since Android has no Swift Charts equivalent), savings goal progress, quick add/subtract adjustments, 29 currencies, and privacy-first on-device storage via Room. Home screen widgets are rebuilt with Jetpack Glance, rendering the chart to a Bitmap and refreshing on every data change, mirroring the iOS WidgetKit widgets. Uploaded to the Google Play Store under my own developer account, going through the full publishing pipeline — app signing, release tracks, store listing, and Play Console review.`,
                    description_ja: `現在開発中のSavings Android版。個人資産管理の体験をAndroidデバイスにも提供する。KotlinとJetpack Compose（Material 3）を使用しMVVMアーキテクチャで構築され、iOSアプリの機能を余すことなく再現 — 6つの期間にわたるインタラクティブな貯蓄チャート（ドラッグで各エントリを確認可能。AndroidにはSwift Chartsに相当するものがないため、Compose Canvasで独自に描画）、貯蓄目標の進捗、加算・減算によるクイック調整、29通貨のサポート、Roomによるプライバシーファーストなオンデバイス保存。ホーム画面ウィジェットはJetpack Glanceで再構築し、チャートをBitmapに描画してデータ変更のたびに更新することで、iOSのWidgetKitウィジェットと同等の体験を実現した。自身のデベロッパーアカウントでGoogle Play Storeにアップロードし、アプリ署名、リリーストラック、ストア掲載情報、Play Consoleの審査まで、公開パイプライン全体を経験した。`,
                    technologies: [
                        "Kotlin",
                        "Jetpack Compose (Material 3)",
                        "Jetpack Glance (Widgets)",
                        "MVVM",
                        "Room Database",
                        "Firebase Analytics",
                        "Firebase Crashlytics",
                        "Google AdMob",
                        "Gradle (Kotlin DSL)",
                        "Android Studio",
                        "Google Play Console"
                    ],
                    carouselId: 'myAppsCarouselInner5Android',
                    images: [
                        "assets/own-apps/5-savings/android/savings-android-0.png",
                        "assets/own-apps/5-savings/android/savings-android-1.png",
                        "assets/own-apps/5-savings/android/savings-android-2.png",
                        "assets/own-apps/5-savings/android/savings-android-3.png",
                        "assets/own-apps/5-savings/android/savings-android-4.png",
                        "assets/own-apps/5-savings/android/savings-android-5.png"
                    ]
                }
            ]
        },
        {
            id: 'myApp6',
            title: 'Earnings – Track Your Pay (iOS & Android)',
            title_ja: 'Earnings – 給料を追跡（iOS・Android）',
            platforms: [
                {
                    id: 'myApp6-ios',
                    name: 'iOS',
                    name_ja: 'iOS版',
                    link: 'https://apps.apple.com/us/app/earnings-realtime-tracking/id6760335853',
                    description: `A real-time earnings tracker iOS app that shows exactly how much money users have earned since starting their job, updating live to the second. Set income, working days, and hours once, and the app calculates precise workday-based earnings. Features home screen widgets, a live per-second rate animation, and progress views for the current hour, day, week, month, or year. Configured with Xcode Cloud CI/CD for automated builds, testing, and TestFlight distribution. Prepared for App Store submission with full metadata, keywords, and promotional copy.`,
                    description_ja: `仕事開始からの稼ぎを秒単位でリアルタイム表示する収入トラッカーiOSアプリ。収入、勤務日、勤務時間を一度設定するだけで、営業日ベースの正確な収入を計算する。ホーム画面ウィジェット、秒単位のライブレートアニメーション、現在の時間・日・週・月・年の進捗ビューが特徴。Xcode Cloud CI/CDによる自動ビルド、テスト、TestFlight配信を構成し、App Store申請を準備した。`,
                    technologies: [
                        "SwiftUI",
                        "SwiftData",
                        "WidgetKit",
                        "Xcode Cloud",
                        "Firebase Crashlytics",
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
                    id: 'myApp6-android',
                    name: 'Android',
                    name_ja: 'Android版',
                    link: 'https://play.google.com/store/apps/details?id=com.inspiralists.earnings',
                    note: 'currently in closed testing on Google Play — public release coming soon',
                    note_ja: '現在Google Playでクローズドテスト中 — 一般公開は近日予定',
                    description: `The Android version of Earnings, a pixel-faithful port of the iOS app built with Kotlin and Jetpack Compose (Material 3). It recreates the live per-second earnings counter, workday-based rate calculations, and progress views for the current hour, day, week, month, or year. The iOS WidgetKit extension was ported to Jetpack Glance as three home screen widgets — total earned, period progress (configurable per widget instance), and earning rate — kept in sync with the app. Firebase Analytics events mirror the iOS implementation exactly, so both platforms report into the same streams. Prepared for Google Play submission with a fastlane pipeline that uploads the full store listing and release builds.`,
                    description_ja: `iOSアプリを忠実に移植したEarnings Android版。KotlinとJetpack Compose（Material 3）で構築し、秒単位のライブ収入カウンター、営業日ベースのレート計算、現在の時間・日・週・月・年の進捗ビューを再現。iOSのWidgetKit拡張をJetpack Glanceに移植し、累計収入・期間進捗（ウィジェットごとに設定可能）・収入レートの3つのホーム画面ウィジェットとしてアプリと同期させた。Firebase Analyticsのイベントは iOS版と完全に一致させ、両プラットフォームで同じ計測を実現。fastlaneでストア掲載情報とリリースビルドをアップロードするパイプラインを構築し、Google Play申請を準備した。`,
                    technologies: [
                        "Kotlin",
                        "Jetpack Compose (Material 3)",
                        "Jetpack Glance (Widgets)",
                        "Firebase Analytics",
                        "Firebase Crashlytics",
                        "Google AdMob",
                        "fastlane",
                        "Gradle (Kotlin DSL)",
                        "Google Play Console"
                    ],
                    carouselId: 'myAppsCarouselInner6Android',
                    images: [
                        "assets/own-apps/6-earnings/android/earnings-android-0.png",
                        "assets/own-apps/6-earnings/android/earnings-android-1.png",
                        "assets/own-apps/6-earnings/android/earnings-android-2.png",
                        "assets/own-apps/6-earnings/android/earnings-android-3.png",
                        "assets/own-apps/6-earnings/android/earnings-android-4.png",
                        "assets/own-apps/6-earnings/android/earnings-android-5.png",
                        "assets/own-apps/6-earnings/android/earnings-android-6.png"
                    ]
                }
            ]
        },
        {
            id: 'myApp10',
            title: 'Tally – Daily Counter (iOS & Android)',
            title_ja: 'Tally – デイリーカウンター（iOS・Android）',
            platforms: [
                {
                    id: 'myApp10-ios',
                    name: 'iOS',
                    name_ja: 'iOS版',
                    note: 'currently in TestFlight — App Store listing prepared',
                    note_ja: '現在TestFlightで配信中 — App Store申請準備済み',
                    description: `A private daily counter iOS app for tracking anything you repeat — pushups, glasses of water, pages read. Each tally carries its own daily target, per-tap amount, unit label and colour, and tapping a card fills a coloured progress bar until it flips into a checkmark. A Log tab pages back through earlier days to fix a missed entry, a Charts tab plots each tally over a week, month, year or lifetime with a goal line and a daily-average chip, and Settings covers editing, drag-reordering, theme, week start and file-based backup/restore. Counting runs in both directions — a header toggle flips taps between add and subtract, press-and-hold logs an arbitrary amount, and counts can never fall below zero. Built entirely in SwiftUI with no UIKit anywhere, backed by SwiftData in an App Group shared with WidgetKit widgets that log a tap or show the week without opening the app, using App Intents for the interactive widget buttons. The charts are drawn by hand in SwiftUI over pure-Swift date maths rather than Swift Charts. A few details worth calling out: the Log tab is a hand-built 366-page pager, chosen after <code>TabView(.page)</code> committed its selection mid-animation and stuttered on every date switch; all week and goal maths runs on integer local epoch days with a <code>DateComponents</code>-built 1970 reference, because <code>Date(timeIntervalSince1970: 0)</code> lands a day early in any time zone behind UTC; and widget timeline entries carry value-type snapshots rather than SwiftData models, since a model's context will not outlive the timeline. The clamp keeping counts non-negative is pinned by unit tests against an in-memory store and was validated by deliberately breaking it. Analytics is designed so that no user-authored text — tally names, unit labels — can ever leave the device, only enum raw values, counts and booleans, which is what makes the App Store privacy answers verifiable rather than aspirational.`,
                    description_ja: `繰り返す行動を記録するプライバシー重視のデイリーカウンターiOSアプリ。腕立て伏せ、水を飲んだ杯数、読んだページ数など、何でも数えられる。各タリーには1日の目標、1タップあたりの加算量、単位ラベル、カラーを設定でき、カードをタップすると色付きのプログレスバーが伸び、目標達成でチェックマークに変わる。Logタブでは過去の日付をページ送りして記録漏れを修正でき、Chartsタブでは週・月・年・全期間の推移を目標ラインと日平均チップ付きで表示。Settingsでは編集、ドラッグでの並べ替え、テーマ、週の開始曜日、ファイルベースのバックアップ／復元に対応する。カウントは双方向で、ヘッダーのトグルでタップを加算・減算に切り替えられ、長押しで任意の数値を記録でき、カウントがゼロを下回ることはない。UIKitを一切使わずSwiftUIのみで構築し、App Group内のSwiftDataをWidgetKitウィジェットと共有することで、アプリを開かずにタップ記録や週の確認ができる（インタラクティブなウィジェットボタンにはApp Intentsを使用）。チャートはSwift Chartsを使わず、純粋なSwiftの日付計算の上にSwiftUIで手描きしている。技術的な工夫として、Logタブは366ページの自前ページャーで実装した（<code>TabView(.page)</code>はアニメーション途中で選択を確定するため、日付を切り替えるたびにカクついた）。週や目標の計算はすべてローカルのエポック日を整数で扱い、1970年の基準日を<code>DateComponents</code>から生成している（<code>Date(timeIntervalSince1970: 0)</code>はUTCより後ろのタイムゾーンでは1日ずれるため）。ウィジェットのタイムラインエントリはSwiftDataモデルではなく値型のスナップショットを持たせている（モデルのコンテキストはタイムラインより長く生存しないため）。カウントを非負に保つクランプはインメモリストアに対するユニットテストで固定し、あえてクランプを壊して検証した。アナリティクスは、タリー名や単位ラベルといったユーザーが入力したテキストが端末外に出ないよう設計し、enumの生値・カウント・真偽値のみを送信することで、App Storeのプライバシー申告を検証可能なものにしている。`,
                    technologies: [
                        "SwiftUI",
                        "SwiftData",
                        "Observation (@Observable)",
                        "WidgetKit",
                        "App Intents (Interactive Widgets)",
                        "App Groups",
                        "Custom SwiftUI-drawn Charts",
                        "Firebase Analytics",
                        "Firebase Crashlytics",
                        "Swift Package Manager",
                        "XCTest",
                        "XCUITest",
                        "Xcode Build System"
                    ],
                    carouselId: 'myAppsCarouselInner10',
                    images: [
                        "assets/own-apps/10-tally/tally-0.png",
                        "assets/own-apps/10-tally/tally-1.png",
                        "assets/own-apps/10-tally/tally-2.png",
                        "assets/own-apps/10-tally/tally-3.png",
                        "assets/own-apps/10-tally/tally-4.png"
                    ]
                },
                {
                    id: 'myApp10-android',
                    name: 'Android',
                    name_ja: 'Android版',
                    link: 'https://play.google.com/store/apps/details?id=com.inspiralists.tally',
                    description: `The Android version of Tally — the same product, written natively in Kotlin and Jetpack Compose (Material 3) rather than shared across platforms. Same daily tallies with targets, per-tap amounts, units and colours; same Log, Charts and Settings tabs; same both-directions counting with a non-negative clamp, enforced here in SQL, which is why it needs an instrumented test rather than a JVM one. Persistence is Room with KSP codegen and a hand-written migration, settings live in DataStore, and home screen widgets are rebuilt with Jetpack Glance. The backup format is deliberately wire-compatible with iOS — same format string, same version gate, same normalisation — with tests pinning the identifiers so a rename cannot silently break a cross-platform restore, and the colour system is ported bit-for-bit between the two: ink flips to white below 0.45 relative luminance and the track tints toward the swatch by 0.35 tapering to 0.08, separating by chroma rather than lightness. The app ships with zero third-party SDKs and requests zero runtime permissions, so the Play listing's "no ads, no tracking, nothing leaves your phone" claim is backed by the dependency list itself. Dependency injection is a hand-rolled service locator rather than Hilt or Koin — a deliberate, documented choice at this size. A custom backup agent checkpoints Room's write-ahead log before the system copies the database, startup is modelled as an explicit state machine, and releases are automated with fastlane, uploading signed builds and the full Play listing under my own developer account with Play App Signing holding the real key.`,
                    description_ja: `Tally Android版。共通コードではなく、KotlinとJetpack Compose（Material 3）でネイティブに書き起こした同一プロダクト。目標・1タップあたりの加算量・単位・カラーを持つデイリータリー、Log／Charts／Settingsの各タブ、双方向のカウントと非負クランプまでiOS版と同じ。ただしクランプはSQL側で保証しているため、JVMテストではなくインストルメンテーションテストで検証している。永続化はKSPコード生成と手書きマイグレーションを伴うRoom、設定はDataStore、ホーム画面ウィジェットはJetpack Glanceで再構築。バックアップ形式はiOSとバイナリ互換になるよう設計し（同じフォーマット文字列、同じバージョンゲート、同じ正規化）、識別子をテストで固定することでリネームによるクロスプラットフォーム復元の破損を防いでいる。カラーシステムも両OSで完全に一致させ、相対輝度0.45を下回るとインクを白に反転し、トラックはスウォッチ方向に0.35から0.08へ逓減させて着色することで、明度ではなく彩度で差をつけている。サードパーティSDKは一切使わず、実行時パーミッションも一切要求しないため、Playストアの「広告なし・トラッキングなし・データは端末外に出ない」という説明は依存関係そのもので裏付けられている。DIはHiltやKoinではなく自前のサービスロケーターを採用（この規模では意図的な選択として文書化）。独自のバックアップエージェントがシステムによるDBコピー前にRoomのWALをチェックポイントし、起動フローは明示的なステートマシンとしてモデル化。リリースはfastlaneで自動化し、自身のデベロッパーアカウントで署名済みビルドとPlayストア掲載情報一式をアップロードしている（実際の署名鍵はPlay App Signingが保持）。`,
                    technologies: [
                        "Kotlin",
                        "Jetpack Compose (Material 3)",
                        "MVVM",
                        "Kotlin Flows / StateFlow",
                        "Room Database (KSP)",
                        "DataStore Preferences",
                        "Jetpack Glance (Widgets)",
                        "Navigation Compose",
                        "kotlinx.serialization",
                        "Manual DI (Service Locator)",
                        "fastlane (supply)",
                        "Play App Signing",
                        "Google Play Console",
                        "Gradle (Kotlin DSL)",
                        "JUnit4, Espresso, Compose UI Test",
                        "Android Studio"
                    ],
                    carouselId: 'myAppsCarouselInner10Android',
                    images: [
                        "assets/own-apps/10-tally/android/tally-android-0.png",
                        "assets/own-apps/10-tally/android/tally-android-1.png",
                        "assets/own-apps/10-tally/android/tally-android-2.png",
                        "assets/own-apps/10-tally/android/tally-android-3.png",
                        "assets/own-apps/10-tally/android/tally-android-4.png"
                    ]
                }
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

    function renderCarousel(project) {
        const carouselInner = document.getElementById(project.carouselId);

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
    }

    function createProject(project) {
        const projectContainer = document.getElementById(project.id);
        const title = (lang === 'ja' && project.title_ja) ? project.title_ja : project.title;
        const projectTitle = projectContainer.querySelector('.featured-text');

        // Projects with platform subsections (e.g. iOS / Android)
        if (project.platforms) {
            projectTitle.innerHTML = `
                <h4>${title}</h4>
            `;

            project.platforms.forEach(platform => {
                const platformContainer = document.getElementById(platform.id);
                const platformName = (lang === 'ja' && platform.name_ja) ? platform.name_ja : platform.name;
                const platformHeading = platform.link ? `<a href="${platform.link}">${platformName}</a>` : platformName;
                const platformNote = (lang === 'ja' && platform.note_ja) ? platform.note_ja : platform.note;
                const platformNoteHtml = platformNote ? ` <small class="text-muted">— ${platformNote}</small>` : '';
                const platformDescription = (lang === 'ja' && platform.description_ja) ? platform.description_ja : platform.description;
                const platformTechnologies = platform.technologies.join(', ');

                platformContainer.querySelector('.featured-text').innerHTML = `
                    <h5 style="margin-top: 0.9375rem;">${platformHeading}${platformNoteHtml}</h5>
                    <p class="text-black-50 mb-0" style="margin-top: 0.625rem;">
                        <em>${platformTechnologies}</em>
                    </p>
                    <p class="text-black-50 mb-0" style="margin-top: 0.625rem;">
                        ${platformDescription}
                    </p>
                `;

                renderCarousel(platform);
            });
            return;
        }

        const technologiesList = project.technologies.join(', ');
        const description = (lang === 'ja' && project.description_ja) ? project.description_ja : project.description;

        renderCarousel(project);

        // Update project title, technologies, and description
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