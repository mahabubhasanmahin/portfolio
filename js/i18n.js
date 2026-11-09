// Each row is [English, বাংলা, 日本語]. Brand names and technology names stay unchanged.
const rows = [
 [
  "Living in",
  "বর্তমানে থাকি",
  "現在の居住地"
 ],
 [
  "Hometown",
  "নিজ শহর",
  "出身地"
 ],
 [
  "Rangpur, Bangladesh",
  "রংপুর, বাংলাদেশ",
  "ロングプール、バングラデシュ"
 ],
 [
  "View image",
  "ছবি বড় করে দেখুন",
  "画像を拡大"
 ],
 [
  "Close image preview",
  "ছবির প্রিভিউ বন্ধ করুন",
  "画像プレビューを閉じる"
 ],
 [
  "Image preview",
  "ছবির প্রিভিউ",
  "画像プレビュー"
 ],
 [
  "DEVELOPER IN PROGRESS",
  "শেখার পথে একজন ডেভেলপার",
  "成長中の開発者"
 ],
 [
  "Source code ↗",
  "সোর্স কোড ↗",
  "ソースコード ↗"
 ],
 [
  "Project screenshot",
  "প্রজেক্টের স্ক্রিনশট",
  "プロジェクトのスクリーンショット"
 ],
 [
  "See the code on GitHub. Some projects also have a live demo.",
  "GitHub-এ কোড দেখুন। কিছু প্রজেক্টের লাইভ ডেমোও আছে।",
  "GitHubでコードを確認できます。一部にはライブデモもあります。"
 ],
 [
  "Suggest crops based on soil and weather data using machine learning.",
  "মেশিন লার্নিং দিয়ে মাটি ও আবহাওয়ার তথ্য অনুযায়ী ফসল সুপারিশ করা হয়।",
  "機械学習で土壌と天気のデータから作物を提案します。"
 ],
 [
  "Show how digital signals are sent and how noise can cause errors.",
  "ডিজিটাল সিগন্যাল কীভাবে পাঠানো হয় এবং নয়েজ কীভাবে ত্রুটি ঘটায় তা দেখায়।",
  "デジタル信号の送信方法と、雑音による誤りを示します。"
 ],
 [
  "Skip to content",
  "মূল কনটেন্টে যান",
  "本文へ移動"
 ],
 [
  "DEVELOPER PORTFOLIO",
  "ডেভেলপার পোর্টফোলিও",
  "開発者ポートフォリオ"
 ],
 [
  "MENU",
  "মেনু",
  "メニュー"
 ],
 [
  "Home",
  "হোম",
  "ホーム"
 ],
 [
  "About me",
  "আমার সম্পর্কে",
  "自己紹介"
 ],
 [
  "Skills",
  "দক্ষতা",
  "スキル"
 ],
 [
  "Projects",
  "প্রজেক্ট",
  "プロジェクト"
 ],
 [
  "Problem solving",
  "সমস্যা সমাধান",
  "問題解決"
 ],
 [
  "Education",
  "শিক্ষা",
  "学歴"
 ],
 [
  "Certificates",
  "সনদ",
  "修了証"
 ],
 [
  "CV",
  "সিভি",
  "履歴書"
 ],
 [
  "Contact",
  "যোগাযোগ",
  "連絡先"
 ],
 [
  "Portfolio",
  "পোর্টফোলিও",
  "ポートフォリオ"
 ],
 [
  "Always learning. Always building.",
  "শিখছি প্রতিদিন। গড়ছি নতুন কিছু।",
  "学び続け、作り続ける。"
 ],
 [
  "Explore my GitHub ↗",
  "আমার GitHub দেখুন ↗",
  "GitHubを見る ↗"
 ],
 [
  "Made with HTML, CSS, and JavaScript.",
  "HTML, CSS ও JavaScript দিয়ে তৈরি।",
  "HTML・CSS・JavaScriptで制作。"
 ],
 [
  "Contact me ↗",
  "যোগাযোগ করুন ↗",
  "連絡する ↗"
 ],
 [
  "LEARNING AND BUILDING",
  "শিখছি ও তৈরি করছি",
  "学んで作る"
 ],
 [
  "Hi, I’m",
  "হ্যালো, আমি",
  "こんにちは。私は"
 ],
 [
  "View projects",
  "প্রজেক্ট দেখুন",
  "プロジェクトを見る"
 ],
 [
  "↓ Download CV",
  "↓ সিভি ডাউনলোড",
  "↓ 履歴書をダウンロード"
 ],
 [
  "PHOTO COMING SOON",
  "ছবি শীঘ্রই যুক্ত হবে",
  "写真は近日公開"
 ],
 [
  "Learning by building",
  "তৈরি করতে করতে শেখা",
  "作りながら学ぶ"
 ],
 [
  "Bangladesh",
  "বাংলাদেশ",
  "バングラデシュ"
 ],
 [
  "Open to internships and junior roles",
  "ইন্টার্নশিপ ও জুনিয়র কাজ খুঁজছি",
  "インターンシップ・初級職を募集中"
 ],
 [
  "Learning something new every day.",
  "প্রতিদিন নতুন কিছু শিখছি।",
  "毎日、新しいことを学ぶ。"
 ],
 [
  "SEE MORE ↓",
  "আরও দেখুন ↓",
  "もっと見る ↓"
 ],
 [
  "CURRENTLY STUDYING",
  "বর্তমানে পড়ছি",
  "現在の専攻"
 ],
 [
  "Computer Science & Engineering",
  "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
  "コンピュータサイエンス・工学"
 ],
 [
  "Green University of Bangladesh",
  "গ্রিন ইউনিভার্সিটি অব বাংলাদেশ",
  "グリーン大学バングラデシュ"
 ],
 [
  "MAIN FOCUS",
  "মূল চর্চা",
  "主な学習分野"
 ],
 [
  "C++ & Problem Solving",
  "C++ ও সমস্যা সমাধান",
  "C++と問題解決"
 ],
 [
  "Practice, learn, and try again.",
  "চর্চা করি, শিখি, আবার চেষ্টা করি।",
  "練習し、学び、また挑戦する。"
 ],
 [
  "HOW I LEARN",
  "যেভাবে শিখি",
  "学び方"
 ],
 [
  "Building projects",
  "প্রজেক্ট তৈরি",
  "プロジェクト制作"
 ],
 [
  "Turn ideas into simple apps.",
  "ভাবনা থেকে ছোট অ্যাপ তৈরি।",
  "アイデアを小さなアプリに。"
 ],
 [
  "01 — ABOUT ME",
  "০১ — আমার সম্পর্কে",
  "01 — 自己紹介"
 ],
 [
  "About me.",
  "আমার সম্পর্কে।",
  "自己紹介。"
 ],
 [
  "What I am learning.",
  "যা শিখছি।",
  "学んでいること。"
 ],
 [
  "ABOUT ME",
  "আমার সম্পর্কে",
  "自己紹介"
 ],
 [
  "MY INTERESTS",
  "আমার আগ্রহ",
  "興味のある分野"
 ],
 [
  "Backend development",
  "ব্যাকএন্ড ডেভেলপমেন্ট",
  "バックエンド開発"
 ],
 [
  "Software development",
  "সফটওয়্যার ডেভেলপমেন্ট",
  "ソフトウェア開発"
 ],
 [
  "C++ problem solving",
  "C++ দিয়ে সমস্যা সমাধান",
  "C++による問題解決"
 ],
 [
  "IT & networking",
  "আইটি ও নেটওয়ার্কিং",
  "IT・ネットワーク"
 ],
 [
  "02 — MY PROJECTS",
  "০২ — আমার প্রজেক্ট",
  "02 — プロジェクト"
 ],
 [
  "My projects.",
  "আমার প্রজেক্ট।",
  "プロジェクト。"
 ],
 [
  "Built while learning.",
  "শিখতে শিখতে তৈরি।",
  "学びながら制作。"
 ],
 [
  "Class and personal projects that help me learn.",
  "ক্লাসের ও নিজের প্রজেক্ট, যেগুলো থেকে শিখছি।",
  "授業や個人で作りながら学んだプロジェクト。"
 ],
 [
  "All projects",
  "সব প্রজেক্ট",
  "すべて"
 ],
 [
  "Backend",
  "ব্যাকএন্ড",
  "バックエンド"
 ],
 [
  "Web",
  "ওয়েব",
  "ウェブ"
 ],
 [
  "AI / ML",
  "এআই / এমএল",
  "人工知能・機械学習"
 ],
 [
  "Systems",
  "সিস্টেম",
  "システム"
 ],
 [
  "PROJECT",
  "প্রজেক্ট",
  "プロジェクト"
 ],
 [
  "Live demo ↗",
  "লাইভ ডেমো ↗",
  "ライブデモ ↗"
 ],
 [
  "Live demo not available",
  "লাইভ ডেমো যুক্ত হয়নি",
  "ライブデモは未公開"
 ],
 [
  "Live demos appear when a verified URL is available.",
  "যাচাইকৃত URL পাওয়া গেলে লাইভ ডেমো যুক্ত করা হবে।",
  "確認済みのURLがある場合にライブデモを表示します。"
 ],
 [
  "Encrypt data in the browser, sign in, and share links that expire. Built with Flask and JWT.",
  "ব্রাউজারে ডেটা এনক্রিপ্ট, সাইন ইন ও নির্দিষ্ট সময় পর বন্ধ হয় এমন লিংক শেয়ার করা যায়। Flask ও JWT ব্যবহার করেছি।",
  "ブラウザーでデータを暗号化し、ログインして期限付きリンクを共有します。FlaskとJWTを使用。"
 ],
 [
  "Send SOS alerts with a location, get updates, and view a safety map.",
  "অবস্থানসহ SOS সতর্কতা পাঠানো, আপডেট পাওয়া ও নিরাপত্তার ম্যাপ দেখা যায়।",
  "位置情報付きSOS通知を送り、更新情報や安全マップを確認できます。"
 ],
 [
  "Upload a face photo to get an estimated age range.",
  "মুখের ছবি আপলোড করে আনুমানিক বয়সের সীমা জানা যায়।",
  "顔写真をアップロードし、おおよその年齢範囲を推定します。"
 ],
 [
  "Browse food, sign in, and add items to a cart.",
  "খাবার দেখা, সাইন ইন ও কার্টে খাবার যোগ করা যায়।",
  "料理を見て、ログインし、カートに追加できます。"
 ],
 [
  "Send alerts between a server and several clients using Java.",
  "Java দিয়ে একটি সার্ভার ও একাধিক ক্লায়েন্টের মধ্যে সতর্কতা পাঠানো যায়।",
  "Javaを使い、サーバーと複数のクライアント間で通知を送ります。"
 ],
 [
  "Take quizzes and store questions and results with Java and MySQL.",
  "Java ও MySQL দিয়ে কুইজ দেওয়া এবং প্রশ্ন ও ফলাফল সংরক্ষণ করা যায়।",
  "JavaとMySQLでクイズを実行し、問題と結果を保存します。"
 ],
 [
  "Show a food menu, take orders, and calculate a bill using Assembly.",
  "Assembly দিয়ে খাবারের মেনু দেখানো, অর্ডার নেওয়া ও বিল হিসাব করা যায়।",
  "Assemblyで料理のメニューを表示し、注文を受け、会計を計算します。"
 ],
 [
  "Visit web pages and follow their links using the BFS algorithm.",
  "BFS অ্যালগরিদম দিয়ে ওয়েব পেজ দেখা ও তাদের লিংক অনুসরণ করা যায়।",
  "BFSアルゴリズムでウェブページを訪れ、リンクをたどります。"
 ],
 [
  "Find possible duplicate files and remove empty files and folders on Linux.",
  "Linux-এ সম্ভাব্য একই ফাইল খুঁজে পাওয়া এবং খালি ফাইল ও ফোল্ডার মুছে ফেলা যায়।",
  "Linuxで重複の可能性があるファイルを探し、空のファイルやフォルダーを整理します。"
 ],
 [
  "03 — MY SKILLS",
  "০৩ — আমার দক্ষতা",
  "03 — スキル"
 ],
 [
  "Tools I use.",
  "যেসব টুল ব্যবহার করি।",
  "使っているツール。"
 ],
 [
  "Skills I am learning.",
  "যেসব দক্ষতা শিখছি।",
  "学んでいるスキル。"
 ],
 [
  "I learn these skills through practice and small projects.",
  "চর্চা ও ছোট প্রজেক্টের মাধ্যমে এই দক্ষতাগুলো শিখছি।",
  "練習と小さなプロジェクトを通して学んでいます。"
 ],
 [
  "SKILLS",
  "দক্ষতা",
  "スキル"
 ],
 [
  "Main skills",
  "মূল দক্ষতা",
  "主なスキル"
 ],
 [
  "Programming · basic skills",
  "প্রোগ্রামিং · প্রাথমিক দক্ষতা",
  "プログラミング · 基礎"
 ],
 [
  "Web & backend · used in projects",
  "ওয়েব ও ব্যাকএন্ড · প্রজেক্টে ব্যবহার করেছি",
  "ウェブ・バックエンド · プロジェクトで使用"
 ],
 [
  "Databases · used in projects",
  "ডেটাবেস · প্রজেক্টে ব্যবহার করেছি",
  "データベース · プロジェクトで使用"
 ],
 [
  "Networking · basics",
  "নেটওয়ার্কিং · প্রাথমিক ধারণা",
  "ネットワーク · 基礎"
 ],
 [
  "Developer tools",
  "ডেভেলপমেন্ট টুল",
  "開発ツール"
 ],
 [
  "Problem Solving",
  "সমস্যা সমাধান",
  "問題解決"
 ],
 [
  "Some DSA topics",
  "কিছু DSA বিষয়",
  "DSAの一部の分野"
 ],
 [
  "OOP Basics",
  "OOP-এর প্রাথমিক ধারণা",
  "OOPの基礎"
 ],
 [
  "Django Basics",
  "Django-এর প্রাথমিক ধারণা",
  "Djangoの基礎"
 ],
 [
  "Windows Troubleshooting",
  "Windows সমস্যা নির্ণয়",
  "Windowsのトラブルシューティング"
 ],
 [
  "04 — PROBLEM SOLVING",
  "০৪ — সমস্যা সমাধান",
  "04 — 問題解決"
 ],
 [
  "Learning C++,",
  "C++ শিখছি,",
  "C++を学び、"
 ],
 [
  "one problem at a time.",
  "একটি একটি সমস্যা সমাধান করে।",
  "一問ずつ解く。"
 ],
 [
  "I solve problems with C++ to learn algorithms, data structures, and clear ways to think.",
  "অ্যালগরিদম, ডেটা স্ট্রাকচার ও পরিষ্কারভাবে ভাবতে শেখার জন্য C++ দিয়ে সমস্যা সমাধান করি।",
  "C++で問題を解き、アルゴリズム、データ構造、分かりやすい考え方を学んでいます。"
 ],
 [
  "Find me on Codeforces ↗",
  "Codeforces প্রোফাইল দেখুন ↗",
  "Codeforcesを見る ↗"
 ],
 [
  "● Learning in progress",
  "● শেখা চলছে",
  "● 学習中"
 ],
 [
  "05 — EDUCATION",
  "০৫ — শিক্ষা",
  "05 — 学歴"
 ],
 [
  "Education",
  "শিক্ষা",
  "学歴"
 ],
 [
  "06 — TRAINING AND CERTIFICATES",
  "০৬ — প্রশিক্ষণ ও সনদ",
  "06 — 研修と修了証"
 ],
 [
  "Training and certificates",
  "প্রশিক্ষণ ও সনদ",
  "研修と修了証"
 ],
 [
  "B.Sc. in Computer Science and Engineering",
  "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ে বিএসসি",
  "コンピュータサイエンス・工学 学士課程"
 ],
 [
  "2019 — 2021",
  "২০১৯ — ২০২১",
  "2019年 — 2021年"
 ],
 [
  "HSC · Science",
  "এইচএসসি · বিজ্ঞান",
  "HSC · 理系"
 ],
 [
  "Kerani Hat High School & College, Rangpur",
  "কেরানী হাট হাই স্কুল অ্যান্ড কলেজ, রংপুর",
  "ケラニハット高校・カレッジ、ロングプール"
 ],
 [
  "Nov 2024 — Feb 2025",
  "নভেম্বর ২০২৪ — ফেব্রুয়ারি ২০২৫",
  "2024年11月 — 2025年2月"
 ],
 [
  "Python (Django) Training · 80 Hours",
  "Python (Django) প্রশিক্ষণ · ৮০ ঘণ্টা",
  "Python（Django）研修 · 80時間"
 ],
 [
  "IIT, Jahangirnagar University",
  "আইআইটি, জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
  "ジャハンギルナガル大学 IIT"
 ],
 [
  "September 2025",
  "সেপ্টেম্বর ২০২৫",
  "2025年9月"
 ],
 [
  "Cyber Hygiene Training",
  "সাইবার হাইজিন প্রশিক্ষণ",
  "サイバーハイジーン研修"
 ],
 [
  "The Asia Foundation & SAJIDA Foundation",
  "দ্য এশিয়া ফাউন্ডেশন ও সাজিদা ফাউন্ডেশন",
  "アジア財団・SAJIDA財団"
 ],
 [
  "2026",
  "২০২৬",
  "2026年"
 ],
 [
  "Intra Green Programming Contest",
  "ইন্ট্রা গ্রিন প্রোগ্রামিং কনটেস্ট",
  "Intra Greenプログラミングコンテスト"
 ],
 [
  "Participant",
  "অংশগ্রহণকারী",
  "参加者"
 ],
 [
  "07 — MY CV",
  "০৭ — আমার সিভি",
  "07 — 履歴書"
 ],
 [
  "My CV",
  "আমার সিভি",
  "履歴書"
 ],
 [
  "Download my CV to read about my education, skills, and projects.",
  "আমার শিক্ষা, দক্ষতা ও প্রজেক্ট জানতে সিভি ডাউনলোড করুন।",
  "学歴、スキル、プロジェクトについては履歴書をご覧ください。"
 ],
 [
  "My CV",
  "আমার সিভি",
  "履歴書"
 ],
 [
  "PDF document",
  "পিডিএফ ডকুমেন্ট",
  "PDFファイル"
 ],
 [
  "PDF not supplied",
  "সিভি শীঘ্রই যুক্ত হবে",
  "履歴書は近日公開"
 ],
 [
  "Download ↓",
  "ডাউনলোড ↓",
  "ダウンロード ↓"
 ],
 [
  "08 — CONTACT ME",
  "০৮ — যোগাযোগ",
  "08 — 連絡先"
 ],
 [
  "Want to work together?",
  "একসঙ্গে কাজ করতে চান?",
  "一緒に働きませんか？"
 ],
 [
  "Send me a message.",
  "আমাকে মেসেজ দিন।",
  "メッセージを送ってください。"
 ],
 [
  "Contact me about internships, junior roles, or working on a project together.",
  "ইন্টার্নশিপ, জুনিয়র কাজ বা একসঙ্গে প্রজেক্ট করতে যোগাযোগ করুন।",
  "インターンシップ、初級職、共同プロジェクトについてご連絡ください。"
 ],
 [
  "Built with HTML, CSS, and JavaScript.",
  "HTML, CSS ও JavaScript দিয়ে তৈরি।",
  "HTML・CSS・JavaScriptで制作。"
 ],
 [
  "Switch to light theme",
  "লাইট থিম চালু করুন",
  "ライトテーマに切り替え"
 ],
 [
  "Switch to dark theme",
  "ডার্ক থিম চালু করুন",
  "ダークテーマに切り替え"
 ],
 [
  "Main navigation",
  "মূল নেভিগেশন",
  "メインナビゲーション"
 ],
 [
  "Filter projects",
  "প্রজেক্ট ফিল্টার",
  "プロジェクトの絞り込み"
 ],
 [
  "Back to top",
  "উপরে ফিরে যান",
  "先頭に戻る"
 ],
 [
  "Mahin home",
  "মাহিনের হোমপেজ",
  "Mahinのホーム"
 ],
 [
  "Switch theme",
  "থিম পরিবর্তন করুন",
  "テーマを切り替え"
 ],
 [
  "Illustrative C++ code",
  "উদাহরণমূলক C++ কোড",
  "C++コードの例"
 ],
 [
  "Md. Mahabub Hasan Mahin",
  "মোঃ মাহাবুব হাসান মাহিন",
  "エムディー・マハブブ・ハサン・マヒン"
 ],
 [
  "projects shown",
  "টি প্রজেক্ট দেখানো হচ্ছে",
  "件のプロジェクトを表示"
 ],
 [
  "View certificate",
  "সনদ দেখুন",
  "修了証を見る"
 ],
 [
  "Download certificate",
  "সনদ ডাউনলোড",
  "修了証をダウンロード"
 ],
 [
  "Certificate image not added",
  "সনদের ছবি যুক্ত হয়নি",
  "修了証の画像は未追加"
 ],
 [
  "Image not available",
  "ছবিটি পাওয়া যাচ্ছে না",
  "画像を表示できません"
 ],
 [
  "Loading image…",
  "ছবি লোড হচ্ছে…",
  "画像を読み込み中…"
 ],
 [
  "This image could not load. Please try again.",
  "ছবিটি লোড হয়নি। আবার চেষ্টা করুন।",
  "画像を読み込めませんでした。もう一度お試しください。"
 ],
 [
  "Close",
  "বন্ধ করুন",
  "閉じる"
 ],
 [
  "Featured projects",
  "নির্বাচিত প্রজেক্ট",
  "注目のプロジェクト"
 ],
 [
  "More projects",
  "আরও প্রজেক্ট",
  "その他のプロジェクト"
 ],
 [
  "Project details",
  "প্রজেক্টের বিস্তারিত",
  "プロジェクトの詳細"
 ],
 [
  "What it does",
  "যা করে",
  "できること"
 ],
 [
  "My work",
  "আমার কাজ",
  "取り組んだ内容"
 ],
 [
  "What I learned",
  "যা শিখেছি",
  "学んだこと"
 ],
 [
  "Open menu",
  "মেনু খুলুন",
  "メニューを開く"
 ],
 [
  "Close menu",
  "মেনু বন্ধ করুন",
  "メニューを閉じる"
 ],
 [
  "Currently working on a research paper.",
  "বর্তমানে একটি গবেষণাপত্র নিয়ে কাজ করছি।",
  "現在、研究論文に取り組んでいます。"
 ],
 [
  "Browser encryption, sign-in, and links that expire.",
  "ব্রাউজারে এনক্রিপশন, সাইন ইন এবং নির্দিষ্ট সময় পর বন্ধ হয় এমন লিংক।",
  "ブラウザーでの暗号化、ログイン、期限付きリンク。"
 ],
 [
  "Practice focus: Web Crypto, JWT, and connecting a browser to Flask.",
  "চর্চার বিষয়: Web Crypto, JWT এবং ব্রাউজারের সঙ্গে Flask সংযোগ।",
  "練習した分野：Web Crypto、JWT、ブラウザーとFlaskの接続。"
 ],
 [
  "Location-based SOS alerts, notifications, storage, and maps.",
  "অবস্থানভিত্তিক SOS সতর্কতা, নোটিফিকেশন, স্টোরেজ ও ম্যাপ।",
  "位置情報付きSOS、通知、保存機能、地図。"
 ],
 [
  "Practice focus: location access, map tools, and cloud services.",
  "চর্চার বিষয়: অবস্থানের অনুমতি, ম্যাপ টুল ও ক্লাউড সার্ভিস।",
  "練習した分野：位置情報の取得、地図ツール、クラウドサービス。"
 ],
 [
  "A photo upload page and a face age estimation workflow.",
  "ছবি আপলোডের পেজ ও মুখের ছবি থেকে বয়স অনুমানের ধাপ।",
  "写真アップロード画面と顔画像からの年齢推定の流れ。"
 ],
 [
  "Practice focus: OpenCV, model output, and connecting Python to a web app.",
  "চর্চার বিষয়: OpenCV, মডেলের ফল এবং ওয়েব অ্যাপের সঙ্গে Python সংযোগ।",
  "練習した分野：OpenCV、モデルの出力、Pythonとウェブアプリの接続。"
 ],
 [
  "Food browsing, user sign-in, roles, and cart features.",
  "খাবার দেখা, ব্যবহারকারীর সাইন ইন, ভূমিকা ও কার্ট সুবিধা।",
  "料理の閲覧、ログイン、ユーザー権限、カート機能。"
 ],
 [
  "Practice focus: PHP, database queries, and user sessions.",
  "চর্চার বিষয়: PHP, ডেটাবেস কুয়েরি ও ইউজার সেশন।",
  "練習した分野：PHP、データベースのクエリ、ユーザーセッション。"
 ],
 [
  "A Java server and clients that send and receive alerts.",
  "সতর্কতা পাঠানো ও পাওয়ার জন্য Java সার্ভার ও ক্লায়েন্ট।",
  "通知を送受信するJavaのサーバーとクライアント。"
 ],
 [
  "Practice focus: sockets, threads, and Java Swing.",
  "চর্চার বিষয়: সকেট, থ্রেড ও Java Swing।",
  "練習した分野：ソケット、スレッド、Java Swing。"
 ],
 [
  "Quiz questions, answer checks, and results stored in MySQL.",
  "কুইজের প্রশ্ন, উত্তর যাচাই ও MySQL-এ ফল সংরক্ষণ।",
  "クイズの問題、解答判定、MySQLへの結果保存。"
 ],
 [
  "Practice focus: Java, SQL, and database-backed apps.",
  "চর্চার বিষয়: Java, SQL ও ডেটাবেসযুক্ত অ্যাপ।",
  "練習した分野：Java、SQL、データベース連携アプリ。"
 ],
 [
  "A menu, order input, and bill calculation in Assembly.",
  "Assembly দিয়ে মেনু, অর্ডার নেওয়া ও বিল হিসাব।",
  "Assemblyによるメニュー、注文入力、会計計算。"
 ],
 [
  "Practice focus: low-level input, output, and program flow.",
  "চর্চার বিষয়: লো-লেভেল ইনপুট, আউটপুট ও প্রোগ্রামের ধাপ।",
  "練習した分野：低水準の入出力、プログラムの流れ。"
 ],
 [
  "Web page links visited in breadth-first order.",
  "ব্রেডথ-ফার্স্ট ক্রমে ওয়েব পেজের লিংক দেখা।",
  "幅優先順でウェブページのリンクを訪問。"
 ],
 [
  "Practice focus: queues, graphs, and the BFS algorithm.",
  "চর্চার বিষয়: কিউ, গ্রাফ ও BFS অ্যালগরিদম।",
  "練習した分野：キュー、グラフ、BFSアルゴリズム。"
 ],
 [
  "File checks for possible duplicates and empty files or folders.",
  "সম্ভাব্য ডুপ্লিকেট এবং খালি ফাইল বা ফোল্ডার পরীক্ষা।",
  "重複の可能性や、空のファイル・フォルダーの確認。"
 ],
 [
  "Practice focus: Bash, Linux commands, and file hashes.",
  "চর্চার বিষয়: Bash, Linux কমান্ড ও ফাইল হ্যাশ।",
  "練習した分野：Bash、Linuxコマンド、ファイルハッシュ。"
 ],
 [
  "Crop suggestions based on soil and weather inputs.",
  "মাটি ও আবহাওয়ার তথ্য অনুযায়ী ফসলের সুপারিশ।",
  "土壌と天気の入力に基づく作物の提案。"
 ],
 [
  "Practice focus: preparing input data and using model predictions.",
  "চর্চার বিষয়: ইনপুট ডেটা প্রস্তুত করা ও মডেলের অনুমান ব্যবহার।",
  "練習した分野：入力データの準備とモデルの予測の利用。"
 ],
 [
  "Views of digital signals and errors caused by noise.",
  "ডিজিটাল সিগন্যাল ও নয়েজের কারণে হওয়া ত্রুটি দেখা।",
  "デジタル信号と雑音による誤りの表示。"
 ],
 [
  "Practice focus: line coding, signal plots, and communication basics.",
  "চর্চার বিষয়: লাইন কোডিং, সিগন্যাল প্লট ও যোগাযোগের প্রাথমিক ধারণা।",
  "練習した分野：ライン符号化、信号のグラフ、通信の基礎。"
 ],
 [
  "View CV",
  "সিভি দেখুন",
  "履歴書を見る"
 ],
 [
  "CV preview",
  "সিভির প্রিভিউ",
  "履歴書のプレビュー"
 ],
 [
  "Close CV preview",
  "সিভির প্রিভিউ বন্ধ করুন",
  "履歴書のプレビューを閉じる"
 ],
 [
  "CV document",
  "সিভি ডকুমেন্ট",
  "履歴書ファイル"
 ],
 [
  "Open PDF ↗",
  "পিডিএফ খুলুন ↗",
  "PDFを開く ↗"
 ],
 [
  "If the preview does not appear, open the PDF.",
  "প্রিভিউ না এলে পিডিএফ খুলুন।",
  "プレビューが表示されない場合はPDFを開いてください。"
 ],
 [
  "Looking for an intern? Let’s talk ↗",
  "ইন্টার্ন খুঁজছেন? যোগাযোগ করুন ↗",
  "インターンをお探しですか？ご連絡ください ↗"
 ],
 [
  "CSE Student | C++ Problem-Solving Learner",
  "সিএসই শিক্ষার্থী | C++ দিয়ে সমস্যা সমাধান শিখছি",
  "情報工学の学生 | C++で問題解決を学習中"
 ],
 [
  "I am a final-semester CSE student at Green University of Bangladesh. I practice problem solving with C++ and am seeking internships in Software Development, IT Support, Technical Operations, or Technical Talent Acquisition.",
  "আমি গ্রিন ইউনিভার্সিটি অব বাংলাদেশের শেষ সেমিস্টারের সিএসই শিক্ষার্থী। C++ দিয়ে সমস্যা সমাধান চর্চা করি এবং সফটওয়্যার ডেভেলপমেন্ট, আইটি সাপোর্ট, টেকনিক্যাল অপারেশনস অথবা টেকনিক্যাল ট্যালেন্ট অ্যাকুইজিশনে ইন্টার্নশিপ খুঁজছি।",
  "グリーン大学バングラデシュで情報工学を学ぶ最終学期の学生です。C++で問題解決を練習し、ソフトウェア開発、ITサポート、技術運用、技術人材採用のインターンシップを探しています。"
 ],
 [
  "I learn through class and personal projects, C++ practice, and selected DSA topics. My knowledge of other programming languages, databases, frameworks, Linux, and networking is foundational or project-based. I am interested in Software Development, IT Support, Technical Operations, and Technical Talent Acquisition internships, where I can learn and support a team.",
  "ক্লাস ও ব্যক্তিগত প্রজেক্ট, C++ চর্চা এবং DSA-এর নির্বাচিত বিষয় শেখার মাধ্যমে এগিয়ে যাচ্ছি। অন্যান্য প্রোগ্রামিং ভাষা, ডেটাবেস, ফ্রেমওয়ার্ক, Linux ও নেটওয়ার্কিংয়ে আমার পরিচিতি প্রাথমিক বা প্রজেক্টভিত্তিক। সফটওয়্যার ডেভেলপমেন্ট, আইটি সাপোর্ট, টেকনিক্যাল অপারেশনস এবং টেকনিক্যাল ট্যালেন্ট অ্যাকুইজিশন ইন্টার্নশিপে আগ্রহী, যেখানে শিখতে ও দলকে সহায়তা করতে পারব।",
  "授業や個人のプロジェクト、C++の練習、DSAの一部の分野を通して学んでいます。他のプログラミング言語、データベース、フレームワーク、Linux、ネットワークの知識は基礎的、またはプロジェクトを通して得たものです。学びながらチームを支えられるソフトウェア開発、ITサポート、技術運用、技術人材採用のインターンシップに関心があります。"
 ],
 [
  "Kanchan, Narayanganj, Bangladesh",
  "কাঞ্চন, নারায়ণগঞ্জ, বাংলাদেশ",
  "カンチャン、ナラヤンガンジ、バングラデシュ"
 ],
 [
  "Kanchan, Narayanganj",
  "কাঞ্চন, নারায়ণগঞ্জ",
  "カンチャン、ナラヤンガンジ"
 ],
 [
  "2023–Present | Final Semester | Seeking Internship",
  "২০২৩–বর্তমান | শেষ সেমিস্টার | ইন্টার্নশিপ খুঁজছি",
  "2023年–現在 | 最終学期 | インターンシップを希望"
 ],
 [
  "Main practice",
  "মূল চর্চা",
  "主に練習している分野"
 ],
 [
  "Ongoing problem-solving practice",
  "নিয়মিত সমস্যা সমাধানের চর্চা",
  "継続的な問題解決の練習"
 ],
 [
  "Selected DSA topics",
  "DSA-এর নির্বাচিত বিষয়",
  "DSAの一部の分野"
 ],
 [
  "Tools & systems · foundational familiarity",
  "টুল ও সিস্টেম · প্রাথমিক পরিচিতি",
  "ツールとシステム · 基礎的な知識"
 ],
 [
  "Software Development",
  "সফটওয়্যার ডেভেলপমেন্ট",
  "ソフトウェア開発"
 ],
 [
  "IT Support",
  "আইটি সাপোর্ট",
  "ITサポート"
 ],
 [
  "Technical Operations",
  "টেকনিক্যাল অপারেশনস",
  "技術運用"
 ],
 [
  "Technical Talent Acquisition",
  "টেকনিক্যাল ট্যালেন্ট অ্যাকুইজিশন",
  "技術人材採用"
 ],
 [
  "Seeking an internship",
  "ইন্টার্নশিপ খুঁজছি",
  "インターンシップを探しています"
 ],
 [
  "Contact me about Software Development, IT Support, Technical Operations, or Technical Talent Acquisition internships.",
  "সফটওয়্যার ডেভেলপমেন্ট, আইটি সাপোর্ট, টেকনিক্যাল অপারেশনস অথবা টেকনিক্যাল ট্যালেন্ট অ্যাকুইজিশন ইন্টার্নশিপের বিষয়ে যোগাযোগ করুন।",
  "ソフトウェア開発、ITサポート、技術運用、技術人材採用のインターンシップについてご連絡ください。"
 ],
 [
  "Project features",
  "প্রজেক্টের বৈশিষ্ট্য",
  "プロジェクトの機能"
 ],
 [
  "Practice topics",
  "চর্চার বিষয়",
  "練習のテーマ"
 ],
 [
  "Food browsing, user sign-in, and cart features.",
  "খাবার দেখা, ব্যবহারকারীর সাইন-ইন ও কার্টের সুবিধা।",
  "料理の閲覧、ユーザーのログイン、カート機能。"
 ],
 [
  "Language",
  "ভাষা",
  "言語"
 ],
 [
  "Alert & Notification System",
  "অ্যালার্ট ও নোটিফিকেশন সিস্টেম",
  "アラート・通知システム"
 ],
 [
  "Duplicate File Finder & System Cleaner",
  "একই ফাইল খোঁজা ও সিস্টেম পরিষ্কারের টুল",
  "重複ファイル検出・システム整理ツール"
 ],
 [
  "Smart Safety Awareness Network",
  "স্মার্ট সেফটি অ্যাওয়ারনেস নেটওয়ার্ক",
  "安全情報共有ネットワーク"
 ],
 [
  "AI Face Age Detection",
  "কৃত্রিম বুদ্ধিমত্তায় মুখের বয়স অনুমান",
  "AIによる顔の年齢推定"
 ],
 [
  "E-Learning Quiz Platform",
  "অনলাইন শিক্ষার কুইজ প্ল্যাটফর্ম",
  "学習用クイズプラットフォーム"
 ],
 [
  "Restaurant Management System",
  "রেস্তোরাঁ ব্যবস্থাপনা সিস্টেম",
  "レストラン管理システム"
 ],
 [
  "BFS Web Crawler",
  "BFS দিয়ে ওয়েব পেজ খোঁজার টুল",
  "BFSウェブクローラー"
 ],
 [
  "Smart Crop Recommendation System",
  "উপযুক্ত ফসল পরামর্শের সিস্টেম",
  "適切な作物の推薦システム"
 ],
 [
  "Line Coding Error Simulator",
  "লাইন কোডিংয়ের ত্রুটি অনুকরণ",
  "ライン符号化の誤りシミュレーター"
 ],
 [
  "Sockets",
  "সকেট",
  "ソケット"
 ],
 [
  "Multithreading",
  "একাধিক থ্রেডে কাজ",
  "マルチスレッド"
 ],
 [
  "Algorithms",
  "অ্যালগরিদম",
  "アルゴリズム"
 ],
 [
  "Machine Learning",
  "মেশিন লার্নিং",
  "機械学習"
 ],
 [
  "Digital Communication",
  "ডিজিটাল যোগাযোগ",
  "デジタル通信"
 ],
 [
  "Signal Simulation",
  "সিগন্যাল অনুকরণ",
  "信号シミュレーション"
 ],
 [
  "Java Socket Programming",
  "Java সকেট প্রোগ্রামিং",
  "Javaソケットプログラミング"
 ],
 [
  "Portrait of Md. Mahabub Hasan Mahin",
  "মোঃ মাহাবুব হাসান মাহিনের ছবি",
  "エムディー・マハブブ・ハサン・マヒンの写真"
 ],
 [
  "Md. Mahabub Hasan Mahin | CSE Student & Developer Portfolio",
  "মোঃ মাহাবুব হাসান মাহিন | সিএসই শিক্ষার্থী ও ডেভেলপার পোর্টফোলিও",
  "エムディー・マハブブ・ハサン・マヒン | 情報工学の学生・開発ポートフォリオ"
 ],
 [
  "Md. Mahabub Hasan",
  "মোঃ মাহাবুব হাসান",
  "エムディー・マハブブ・ハサン"
 ],
 [
  "Mahin",
  "মাহিন",
  "マヒン"
 ]
];
const dictionary=new Map(rows.map(([en,bn,ja])=>[en,{en,bn,ja}]));
const originals=new WeakMap();const originalAttrs=new WeakMap();
let language='en';
export function translate(text){
 if(typeof text!=='string')return text;
 const direct=dictionary.get(text)?.[language];if(direct)return direct;
 const count=text.match(/^(\d+) projects shown$/);
 if(count){const number=new Intl.NumberFormat(language==='bn'?'bn-BD':language==='ja'?'ja-JP':'en-US').format(Number(count[1]));return language==='bn'?number+'টি প্রজেক্ট দেখানো হচ্ছে':language==='ja'?number+'件のプロジェクトを表示':number+' projects shown';}
 return text.split(' — ').map(part=>dictionary.get(part)?.[language]||part).join(' — ');
}
export function translatePage(root=document.body){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:node=>node.parentElement.closest('script,style,code,pre,select')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 for(const node of nodes){if(!originals.has(node))originals.set(node,node.textContent);const source=originals.get(node);const value=source.trim();const translated=translate(value);if(translated!==value||node.textContent!==source)node.textContent=source.replace(value,translated);}
 root.querySelectorAll('[aria-label],[title],[alt]').forEach(node=>{if(!originalAttrs.has(node))originalAttrs.set(node,{});const saved=originalAttrs.get(node);for(const attr of ['aria-label','title','alt']){if(!node.hasAttribute(attr)||node.hasAttribute('data-i18n-dynamic')||(node.id==='theme-toggle'&&attr==='aria-label'))continue;const explicit=node.getAttribute('data-i18n-'+attr);if(explicit){node.setAttribute(attr,translate(explicit));continue;}if(!saved[attr])saved[attr]=node.getAttribute(attr);node.setAttribute(attr,translate(saved[attr]));}});
}
export function initLanguage(){
 const select=document.querySelector('#language-select');const pageTitle=document.title;
 const optionLabels={en:['English','বাংলা','日本語'],bn:['ইংরেজি','বাংলা','জাপানি'],ja:['英語','ベンガル語','日本語']};try{const stored=localStorage.getItem('mahin-language');if(['en','bn','ja'].includes(stored))language=stored;}catch{}
 function apply(){document.documentElement.lang=language;document.title=translate(pageTitle);select.value=language;[...select.options].forEach((option,index)=>{option.textContent=optionLabels[language][index];});translatePage();document.dispatchEvent(new CustomEvent('languagechange'));}
 select.addEventListener('change',()=>{language=select.value;try{localStorage.setItem('mahin-language',language);}catch{}apply();});apply();
}
