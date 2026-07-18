// i18n.js
// Created by Cyan Villarin
// Language support for cyanvillarin.github.io

const translations = {
    en: {
        // Nav
        "nav.about": "About Me",
        "nav.workflow": "My Workflow",
        "nav.company-apps": "Company Apps",
        "nav.my-apps": "My Apps",
        "nav.blogs": "My Tech Blogs",
        "nav.contact": "Contact Me",

        // Masthead
        "masthead.subtitle": "SENIOR MOBILE APP ENGINEER",
        "masthead.cta": "Learn more",

        // About
        "about.greeting": "Greetings!",
        "about.bio": `I am a Senior Mobile App Engineer, based in Japan, with over 8 years of professional experience building customer-facing iOS apps using Swift. In 2026, I expanded into Android development as well — an expansion greatly accelerated by AI-assisted workflows. I now have my own Google Play Store developer account with three Android apps uploaded: Chatzone, Earnings, and Savings (all currently in active development). Learning everything needed to publish an app to the Google Play Store — app signing, release tracks, store listings, and Play Console review — was a genuinely fun experience. I specialize in creating apps that deliver meaningful impact to users' lives, particularly for large-scale user bases where attention to detail and reliability are critical. As a strong advocate of Agile Scrum methodologies, I believe in iterative development and continuous improvement. Beyond mobile development, I maintain a keen curiosity for UI/UX design principles, database architecture, and backend development, actively learning how these systems work to facilitate smooth project execution.`,
        "about.github": `At work, we leverage GitHub for version control and collaborative development. The above snapshots of my GitHub contributions reflect consistent engagement with code review, feature development, and collaborative engineering practices.`,
        "about.interests": `I maintain a keen interest in health and fitness, recognizing that personal well-being is fundamental to both personal and professional excellence. Beyond technology, I cultivate curiosity in diverse fields including astronomy and marine biology. I have several iOS apps available on the <a href="https://apps.apple.com/us/developer/cyan-villarin/id1407677137">App Store</a>, all optimized for both iPhone and iPad platforms, and Android apps on the Google Play Store under my own developer account.`,

        // My Workflow
        "workflow.title": "My Workflow",
        "workflow.intro": `Over the past year, AI has become a core part of how I work. Rather than treating it as a novelty, I've spent time learning to use it efficiently — studying different prompting techniques, discovering what kinds of tasks AI handles well versus poorly, and building structured workflows around its strengths. The result is that I get significantly more done per day, with AI handling the repetitive and mechanical parts of development so I can stay focused on architecture, product decisions, and code quality. The rest of this section describes the specific tools and systems I've built around that philosophy.`,
        "workflow.obsidian.title": "Obsidian as a Second Brain",
        "workflow.obsidian.body": `My entire knowledge base lives in an <a href="https://obsidian.md" target="_blank">Obsidian</a> vault — SwiftUI patterns, Japanese study notes, car records, project todos, engineering references, and curated shortcut sheets for Xcode, macOS, shell, and Chrome, all in one place. Keeping shortcuts written down and readily accessible means less time spent remembering key bindings and more time in flow. The vault is stored in <strong>iCloud Drive</strong> for seamless sync across all my devices, and also pushed to <strong>GitHub</strong> as a version-controlled backup. A root-level <code>index.md</code> lists every note with a one-line summary, making lookup fast without scanning the entire vault. Since everything is stored as plain Markdown files on disk, the vault works fully offline — I can browse and read my notes anytime without an internet connection, and Claude Code can read directly from it the same way, treating it as a local knowledge base that's always available regardless of connectivity.`,
        "workflow.vault-claude.title": "Vault-Powered Claude Code",
        "workflow.vault-claude.body": `My global AI configuration is managed entirely from within the vault. <code>~/.claude/CLAUDE.md</code> (which tells Claude Code how to behave across all projects) is a symlink pointing to <code>Setup/CLAUDE.md</code> inside the vault. Likewise, <code>~/.claude/commands/</code> is symlinked to the vault's <code>Claude Code Commands/</code> folder — so every custom slash command is just a Markdown file in Obsidian. Editing a command in the vault makes it instantly available in Claude Code with no restarts or manual syncing needed.`,
        "workflow.commands.title": "Custom Slash Commands",
        "workflow.commands.intro": "A library of custom slash commands drives the full development lifecycle:",
        "workflow.commands.list": `<li><strong>/start-claude</strong> — loads project context, reads the relevant CLAUDE.md files, and explores the codebase before any session begins</li>
                    <li><strong>/work-on-todos</strong> — reads all vault todo lists across every project, spawns up to 3 parallel <a href="https://ghostty.org" target="_blank">Ghostty</a> terminal sessions (one per repo), implements features autonomously using Claude Code, commits each change, and creates a pull request per task — all without switching windows manually</li>
                    <li><strong>/commit</strong> — stages changes and creates a commit following project-specific conventions</li>
                    <li><strong>/create-pr</strong> — pushes the branch and opens a pull request with a structured description</li>
                    <li><strong>/commit-then-deploy</strong> — commits all changes and deploys to Firebase Hosting in a single command</li>
                    <li><strong>/whats-our-todos</strong> — surfaces all pending tasks across every project's todo file in the vault</li>
                    <li><strong>/add-knowledge</strong> — saves a new learning or pattern directly into the vault so it's available in future sessions</li>
                    <li><strong>/orchestrate-build-uploads-ios-android</strong> — ships every app on both platforms in one run: builds signed Android AABs and uploads them to Google Play internal testing via fastlane, then version-bumps, tags, and pushes each iOS app so Xcode Cloud delivers it to TestFlight</li>`,
        "workflow.worktrees.title": "Git Worktrees for Parallel Ticket Work",
        "workflow.worktrees.body": `At work, I maintain up to <strong>10 active git worktrees</strong> simultaneously, each on its own branch and ticket. This lets me switch context instantly — no stashing, no waiting for builds to settle — while AI agents work independently in each worktree. Two custom commands keep this manageable:`,
        "workflow.worktrees.list": `<li><strong>/show-worktrees</strong> — lists all active worktrees with their branch, status, and associated ticket at a glance</li>
                    <li><strong>/cleanup-worktrees</strong> — resets a finished worktree by detaching its HEAD, freeing the branch name so a fresh branch can be checked out there for the next ticket without deleting and recreating the worktree</li>`,
        "workflow.worktrees.bazel": `Since the project uses <strong>Bazel</strong> as its build system, all worktrees are configured to share the Bazel cache of the main repository. This means 10 worktrees do not mean 10× the storage — incremental build artifacts are reused across all of them, keeping disk usage lean while still getting full parallel builds.`,
        "workflow.android.title": "Expanding into Android with AI",
        "workflow.android.body": `AI hasn't just made me faster at iOS — it has expanded what I can build. In 2026 I started Android development, and with AI-assisted workflows flattening the Kotlin and Jetpack Compose learning curve, I was able to move at a pace that would have taken far longer on my own. I created my own <strong>Google Play Store developer account</strong> and uploaded three Android apps — <strong>Chatzone</strong>, <strong>Earnings</strong>, and <strong>Savings</strong> — learning the full publishing pipeline along the way: app signing, release tracks, store listings, content ratings, and Play Console review. It was a genuinely fun experience, and it means I can now deliver the same product on both iOS and Android. Along the way I learned how Google Play's <strong>testing tracks</strong> really work as a pipeline: <strong>internal testing</strong> (effectively Android's TestFlight — builds visible only to opted-in testers, installed through the real store), then <strong>closed testing</strong> (where a new developer account must maintain 12+ opted-in testers for a continuous 14-day window before it can even apply for production access), and finally <strong>production</strong>. It's a far more gated path than the App Store's, and understanding it end-to-end now shapes how I plan every release.`,
        "workflow.release.title": "One-Command Release Trains",
        "workflow.release.body": `On release days, a single custom command — <strong>/orchestrate-build-uploads-ios-android</strong> — ships every app on both platforms in one run. In one session it released <strong>six builds</strong>: three Android apps built as signed AABs and uploaded to the Google Play <strong>internal testing</strong> track, and three iOS apps version-bumped, tagged, and handed to <strong>Xcode Cloud</strong> for TestFlight delivery. The two pipelines could not be more different, and the command encodes both: Android releases go through <strong>fastlane supply</strong>, authenticated with a <strong>Google Play service account</strong> (a JSON key with account-level access to the Play Android Developer API), which makes uploading builds, store listings, screenshots, and changelogs fully scriptable; iOS releases are triggered purely by pushing a release tag, with Xcode Cloud building in the cloud and injecting production signing keys through CI environment variables — no local archive ever needed. Hard-won details are captured in a vault playbook the command reads before acting: Play's strict first-upload ordering (the first AAB must land on a track before any store listing can attach to it), upload-keystore management with Play App Signing, the new-app review submission flow, and the realization that internal testing is effectively <strong>Android's TestFlight</strong> — builds visible only to opted-in testers, installed through the real store. Every release train benefits from the lessons of the previous one.`,
        "workflow.connected.title": "Everything Connected",
        "workflow.connected.body": `The vault is the single source of truth for both human knowledge and AI behavior. When Claude Code needs context — architecture patterns, project conventions, or past decisions — it reads the vault first. New learnings flow back into the vault so they're available in every future session. This creates a feedback loop where the AI gets more effective over time, grounded in real project history rather than starting fresh each conversation.`,

        // Section titles
        "section.company-apps": "Company Apps",
        "section.my-apps": "My Apps",
        "section.blogs": "My Tech Blogs",

        // Contact
        "contact.linkedin": "LinkedIn",
        "contact.github": "GitHub",
        "contact.email": "Email",
        "contact.mobile": "Mobile",
        "contact.address": "Address",
        "contact.address.value": "Fukuoka City, Japan",

        // Footer
        "footer.copyright": "Copyright © Cyan Villarin 2025"
    },
    ja: {
        // Nav
        "nav.about": "自己紹介",
        "nav.workflow": "ワークフロー",
        "nav.company-apps": "会社アプリ",
        "nav.my-apps": "個人アプリ",
        "nav.blogs": "技術ブログ",
        "nav.contact": "連絡先",

        // Masthead
        "masthead.subtitle": "シニア モバイルアプリ エンジニア",
        "masthead.cta": "詳しく見る",

        // About
        "about.greeting": "はじめまして！",
        "about.bio": `日本在住のシニアモバイルアプリエンジニアです。Swiftを用いたユーザー向けiOSアプリの開発において、8年以上の実務経験を持っています。2026年からは、AI支援ワークフローによって大きく加速されたことで、Android開発にも領域を広げました。現在は自身のGoogle Play Storeデベロッパーアカウントを持ち、Chatzone、Earnings、Savingsの3つのAndroidアプリをアップロードしています（いずれも現在開発中）。アプリ署名、リリーストラック、ストア掲載情報、Play Consoleの審査など、Google Play Storeへのアプリ公開に必要なことを一から学ぶのは、とても楽しい経験でした。特に大規模なユーザー基盤を持つアプリにおいて、細部へのこだわりと信頼性を重視した開発を専門としています。アジャイルスクラム手法を強く支持しており、反復的な開発と継続的な改善を信念としています。モバイル開発以外にも、UI/UXデザインの原則、データベースアーキテクチャ、バックエンド開発にも関心を持ち、プロジェクトの円滑な進行のためにこれらのシステムの仕組みを積極的に学んでいます。`,
        "about.github": `業務ではGitHubをバージョン管理と共同開発に活用しています。上記のGitHubコントリビューションのスナップショットは、コードレビュー、機能開発、チーム開発への継続的な取り組みを反映しています。`,
        "about.interests": `健康とフィットネスに強い関心を持っており、心身の健康が個人的にも仕事においても重要な基盤であると考えています。テクノロジー以外にも、天文学や海洋生物学など多様な分野に好奇心を持っています。iPhoneとiPadの両方に最適化された複数のiOSアプリを<a href="https://apps.apple.com/us/developer/cyan-villarin/id1407677137">App Store</a>で公開しているほか、自身のデベロッパーアカウントでAndroidアプリもGoogle Play Storeに公開しています。`,

        // My Workflow
        "workflow.title": "ワークフロー",
        "workflow.intro": `この1年で、AIは私の仕事の中核となりました。目新しさとして扱うのではなく、効率的に使う方法を学ぶことに時間を費やしました。様々なプロンプティング技法を研究し、AIが得意とするタスクとそうでないタスクを見極め、AIの強みを活かした体系的なワークフローを構築しました。その結果、1日あたりの生産性が大幅に向上し、AIが反復的で機械的な開発作業を担当することで、私はアーキテクチャ、プロダクトの意思決定、コード品質に集中できるようになりました。以下のセクションでは、その哲学に基づいて構築した具体的なツールとシステムについて説明します。`,
        "workflow.obsidian.title": "第二の脳としてのObsidian",
        "workflow.obsidian.body": `私のナレッジベース全体は<a href="https://obsidian.md" target="_blank">Obsidian</a>のVaultに集約されています。SwiftUIのパターン、日本語学習ノート、車の記録、プロジェクトのTodo、エンジニアリングリファレンス、Xcode・macOS・シェル・Chromeのショートカット集など、すべてが一箇所にあります。ショートカットを記録して即座にアクセスできるようにすることで、キーバインドを思い出す時間を減らし、フロー状態を維持します。Vaultは<strong>iCloud Drive</strong>に保存し、すべてのデバイス間でシームレスに同期。さらに<strong>GitHub</strong>にもバージョン管理されたバックアップとしてプッシュしています。ルートレベルの<code>index.md</code>に全ノートの一行サマリーがあり、Vault全体をスキャンせずに素早く検索できます。すべてがディスク上のプレーンなMarkdownファイルなので、Vaultは完全にオフラインで動作します。インターネット接続なしでもいつでもノートを閲覧でき、Claude Codeも同様にローカルのナレッジベースとして直接読み込めます。`,
        "workflow.vault-claude.title": "Vault連携のClaude Code",
        "workflow.vault-claude.body": `グローバルなAI設定はすべてVault内で管理しています。<code>~/.claude/CLAUDE.md</code>（Claude Codeの全プロジェクトでの動作を指定するファイル）は、Vault内の<code>Setup/CLAUDE.md</code>へのシムリンクです。同様に、<code>~/.claude/commands/</code>もVaultの<code>Claude Code Commands/</code>フォルダーにシムリンクされており、カスタムスラッシュコマンドはすべてObsidian内のMarkdownファイルです。Vault内でコマンドを編集すると、再起動や手動同期なしで即座にClaude Codeで利用可能になります。`,
        "workflow.commands.title": "カスタムスラッシュコマンド",
        "workflow.commands.intro": "カスタムスラッシュコマンドのライブラリが開発ライフサイクル全体を駆動します：",
        "workflow.commands.list": `<li><strong>/start-claude</strong> — プロジェクトのコンテキストを読み込み、関連するCLAUDE.mdファイルを読み、セッション開始前にコードベースを探索します</li>
                    <li><strong>/work-on-todos</strong> — Vault内の全プロジェクトのTodoリストを読み込み、最大3つの並列<a href="https://ghostty.org" target="_blank">Ghostty</a>ターミナルセッション（リポジトリごと）を起動し、Claude Codeで自律的に機能を実装、各変更をコミットし、タスクごとにプルリクエストを作成します。手動でウィンドウを切り替える必要はありません</li>
                    <li><strong>/commit</strong> — 変更をステージングし、プロジェクト固有の規約に従ってコミットを作成します</li>
                    <li><strong>/create-pr</strong> — ブランチをプッシュし、構造化された説明付きでプルリクエストを作成します</li>
                    <li><strong>/commit-then-deploy</strong> — すべての変更をコミットし、Firebase Hostingにデプロイします</li>
                    <li><strong>/whats-our-todos</strong> — Vault内の全プロジェクトのTodoファイルから保留中のタスクを一覧表示します</li>
                    <li><strong>/add-knowledge</strong> — 新しい学びやパターンをVaultに直接保存し、将来のセッションで利用可能にします</li>
                    <li><strong>/orchestrate-build-uploads-ios-android</strong> — 全アプリを両プラットフォームで一括リリース：署名済みAndroid AABをビルドしてfastlaneでGoogle Play内部テストにアップロードし、各iOSアプリのバージョン更新・タグ付け・プッシュを行い、Xcode Cloud経由でTestFlightに配信します</li>`,
        "workflow.worktrees.title": "並列チケット作業のためのGit Worktrees",
        "workflow.worktrees.body": `業務では、最大<strong>10個のアクティブなgit worktree</strong>を同時に維持し、それぞれが独自のブランチとチケットで作業しています。stashやビルドの待機なしに瞬時にコンテキストを切り替えられ、AIエージェントが各worktreeで独立して作業します。2つのカスタムコマンドでこれを管理しています：`,
        "workflow.worktrees.list": `<li><strong>/show-worktrees</strong> — すべてのアクティブなworktreeのブランチ、ステータス、関連チケットを一覧表示します</li>
                    <li><strong>/cleanup-worktrees</strong> — 完了したworktreeのHEADをデタッチしてリセットし、ブランチ名を解放して、worktreeを削除・再作成せずに新しいブランチをチェックアウトできるようにします</li>`,
        "workflow.worktrees.bazel": `プロジェクトは<strong>Bazel</strong>をビルドシステムとして使用しており、すべてのworktreeはメインリポジトリのBazelキャッシュを共有するよう設定されています。10個のworktreeがストレージの10倍を意味するわけではなく、インクリメンタルビルドのアーティファクトがすべてで再利用され、完全な並列ビルドを維持しながらディスク使用量を抑えています。`,
        "workflow.android.title": "AIでAndroidへ領域拡大",
        "workflow.android.body": `AIは私のiOS開発を速くしただけでなく、作れるものの幅を広げてくれました。2026年からAndroid開発を始め、AI支援ワークフローがKotlinとJetpack Composeの学習曲線を平坦にしてくれたおかげで、独学では遥かに時間がかかったはずのペースで進めることができました。自身の<strong>Google Play Storeデベロッパーアカウント</strong>を作成し、<strong>Chatzone</strong>、<strong>Earnings</strong>、<strong>Savings</strong>の3つのAndroidアプリをアップロード。その過程で、アプリ署名、リリーストラック、ストア掲載情報、コンテンツレーティング、Play Consoleの審査など、公開パイプライン全体を学びました。とても楽しい経験であり、今では同じプロダクトをiOSとAndroidの両方で提供できるようになりました。その過程で、Google Playの<strong>テストトラック</strong>がパイプラインとして機能する仕組みも学びました：まず<strong>内部テスト</strong>（実質的に「AndroidのTestFlight」— オプトインしたテスターにのみ表示され、本物のストア経由でインストールされる）、次に<strong>クローズドテスト</strong>（新規デベロッパーアカウントは、12人以上のオプトイン済みテスターを連続14日間維持して初めて本番公開の申請が可能になる）、そして<strong>本番リリース</strong>です。App Storeよりも遥かにゲートの多いパスであり、これをエンドツーエンドで理解したことが、今ではすべてのリリース計画の土台になっています。`,
        "workflow.release.title": "ワンコマンドのリリーストレイン",
        "workflow.release.body": `リリース日には、カスタムコマンド<strong>/orchestrate-build-uploads-ios-android</strong>ひとつで、すべてのアプリを両プラットフォームに一括で出荷します。あるセッションでは<strong>6つのビルド</strong>をリリースしました：3つのAndroidアプリを署名済みAABとしてビルドしてGoogle Playの<strong>内部テスト</strong>トラックへアップロードし、3つのiOSアプリをバージョン更新・タグ付けして<strong>Xcode Cloud</strong>経由でTestFlightへ配信。この2つのパイプラインは全く異なり、コマンドは両方を体系化しています。Androidのリリースは<strong>fastlane supply</strong>で行い、<strong>Google Playサービスアカウント</strong>（Play Android Developer APIへのアカウントレベル権限を持つJSONキー）で認証することで、ビルド、ストア掲載情報、スクリーンショット、変更履歴のアップロードを完全にスクリプト化。iOSのリリースはリリースタグのプッシュだけでトリガーされ、Xcode Cloudがクラウド上でビルドし、本番署名キーはCI環境変数から注入されます — ローカルでのアーカイブは一切不要です。Playの厳格な初回アップロード順序（最初のAABがトラックに載るまでストア掲載情報はアップロードできない）、Play App Signingと連携したアップロード鍵の管理、新規アプリの審査提出フロー、そして内部テストが実質的に<strong>「AndroidのTestFlight」</strong>である（オプトインしたテスターにのみ表示され、本物のストア経由でインストールされる）という気づきなど、苦労して得た知見はVaultのプレイブックに記録され、コマンドが実行前にそれを読み込みます。毎回のリリーストレインが、前回の学びを引き継いでいきます。`,
        "workflow.connected.title": "すべてが繋がる",
        "workflow.connected.body": `Vaultは人間の知識とAIの動作の両方にとっての唯一の情報源です。Claude Codeがコンテキスト（アーキテクチャパターン、プロジェクトの規約、過去の決定）を必要とするとき、まずVaultを読みます。新しい学びはVaultにフィードバックされ、将来のすべてのセッションで利用可能になります。これにより、AIが毎回ゼロから始めるのではなく、実際のプロジェクト履歴に基づいて時間とともにより効果的になるフィードバックループが生まれます。`,

        // Section titles
        "section.company-apps": "会社アプリ",
        "section.my-apps": "個人アプリ",
        "section.blogs": "技術ブログ",

        // Contact
        "contact.linkedin": "LinkedIn",
        "contact.github": "GitHub",
        "contact.email": "メール",
        "contact.mobile": "電話番号",
        "contact.address": "住所",
        "contact.address.value": "福岡市、日本",

        // Footer
        "footer.copyright": "Copyright © Cyan Villarin 2025"
    }
};

function getLang() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') === 'ja' ? 'ja' : 'en';
}

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update language toggle
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.textContent = lang === 'en' ? '日本語' : 'English';
        toggle.href = lang === 'en' ? '?lang=ja' : '?lang=en';
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", function() {
    applyTranslations(getLang());
});
