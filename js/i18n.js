// Each row is [English, বাংলা, 日本語]. Brand names and technology names stay unchanged.
const rows = [
["Living in","বর্তমানে থাকি","現在の居住地"],["Hometown","নিজ শহর","出身地"],["Rangpur, Bangladesh","রংপুর, বাংলাদেশ","ロングプール、バングラデシュ"],
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
  "Dhaka, BD",
  "ঢাকা, বাংলাদেশ",
  "ダッカ、バングラデシュ"
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
  "CSE Student | C++ Problem Solver | Learning Software Development",
  "সিএসই শিক্ষার্থী | C++ সমস্যা সমাধানকারী | সফটওয়্যার ডেভেলপমেন্ট শিখছি",
  "情報工学の学生 | C++で問題解決 | ソフトウェア開発を学習中"
 ],
 [
  "I study computer science and build small software projects. I enjoy solving problems with C++ and learning backend development.",
  "আমি কম্পিউটার বিজ্ঞান পড়ছি এবং ছোট সফটওয়্যার প্রজেক্ট তৈরি করি। C++ দিয়ে সমস্যা সমাধান করতে ও ব্যাকএন্ড ডেভেলপমেন্ট শিখতে ভালো লাগে।",
  "情報工学を学び、小さなソフトウェアを作っています。C++で問題を解き、バックエンド開発を学ぶことが好きです。"
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
  "I am a Computer Science and Engineering student at Green University of Bangladesh. I learn by building class and personal projects, practicing C++, and trying new tools. I am looking for an internship or a junior role where I can learn and help a team.",
  "আমি গ্রিন ইউনিভার্সিটি অব বাংলাদেশের কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ের শিক্ষার্থী। ক্লাসের ও নিজের প্রজেক্ট তৈরি, C++ চর্চা এবং নতুন টুল ব্যবহার করে শিখি। এমন ইন্টার্নশিপ বা জুনিয়র কাজ খুঁজছি, যেখানে শিখতে ও দলকে সাহায্য করতে পারব।",
  "グリーン大学バングラデシュで情報工学を学んでいます。授業や個人のプロジェクト、C++の練習、新しいツールを使うことで学んでいます。学びながらチームに役立てるインターンシップや初級職を探しています。"
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
  "AI / ML"
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
  "2023 — Expected 2027",
  "২০২৩ — সম্ভাব্য ২০২৭",
  "2023年 — 2027年卒業予定"
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
  "Dhaka, Bangladesh",
  "ঢাকা, বাংলাদেশ",
  "ダッカ、バングラデシュ"
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
  "Md. Mahabub Hasan Mahin"
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
 ]
];
const dictionary=new Map(rows.map(([en,bn,ja])=>[en,{en,bn,ja}]));
const originals=new WeakMap();const originalAttrs=new WeakMap();
let language='en';
export function translate(text){return dictionary.get(text)?.[language]||text;}
export function translatePage(root=document.body){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:node=>node.parentElement.closest('script,style,code,pre,select')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 for(const node of nodes){if(!originals.has(node))originals.set(node,node.textContent);const source=originals.get(node);const value=source.trim();if(dictionary.has(value))node.textContent=source.replace(value,translate(value));}
 root.querySelectorAll('[aria-label],[title],[alt]').forEach(node=>{if(!originalAttrs.has(node))originalAttrs.set(node,{});const saved=originalAttrs.get(node);for(const attr of ['aria-label','title','alt']){if(!node.hasAttribute(attr)||(node.id==='theme-toggle'&&attr==='aria-label'))continue;if(!saved[attr])saved[attr]=node.getAttribute(attr);node.setAttribute(attr,translate(saved[attr]));}});
}
export function initLanguage(){
 const select=document.querySelector('#language-select');try{const stored=localStorage.getItem('mahin-language');if(['en','bn','ja'].includes(stored))language=stored;}catch{}
 function apply(){document.documentElement.lang=language;select.value=language;translatePage();document.dispatchEvent(new CustomEvent('languagechange'));}
 select.addEventListener('change',()=>{language=select.value;try{localStorage.setItem('mahin-language',language);}catch{}apply();});apply();
}
