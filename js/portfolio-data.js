// EDIT CONTENT HERE / এখান থেকে তথ্য বদলান. Keep names, paths, and URLs accurate.
export const portfolio = {
  // Personal information / ব্যক্তিগত তথ্য
  name: 'Md. Mahabub Hasan Mahin',
  shortName: 'Mahin',
  headline: 'CSE Student | C++ Problem-Solving Learner',
  location: 'Kanchan, Narayanganj, Bangladesh',
  hometown: 'Rangpur, Bangladesh',
  email: 'mahabubhasanmahin231@gmail.com',

  // Hero and About / হোম ও পরিচিতি
  intro:
    'I am a final-semester CSE student at Green University of Bangladesh. I practice problem solving with C++ and am seeking internships in Software Development, IT Support, Technical Operations, or Technical Talent Acquisition.',
  about:
    'I learn through class and personal projects, C++ practice, and selected DSA topics. My knowledge of other programming languages, databases, frameworks, Linux, and networking is foundational or project-based. I am interested in Software Development, IT Support, Technical Operations, and Technical Talent Acquisition internships, where I can learn and support a team.',

  // Profile photo and CV / ছবি ও সিভির ফাইল
  photo: 'assets/images/profile.png',
  resumes: [{ name: 'My CV', path: 'assets/cv/mahin_cv.pdf', downloadName: 'mahin_cv.pdf' }],

  // Current study/research status / চলমান কাজ
  currentFocus: 'Currently working on a research paper.',

  // Optional effects / অ্যানিমেশন: false disables a feature
  effects: {
    reveal: true,
    tilt: true,
    tiltDegrees: 4,
    spotlight: true,
    buttons: true,
    background: true,
  },

  // Public social URLs / সোশ্যাল লিংক
  socials: {
    GitHub: 'https://github.com/mahabubhasanmahin',
    LinkedIn: 'https://linkedin.com/in/md-mahabub-hasan-mahin-54908229a',
    Codeforces: 'https://codeforces.com/profile/MahabubHasanMahin',
    Facebook: 'https://facebook.com/md.mahin.2002',
  },

  // Skill groups / দক্ষতা: keep basic and project-based labels honest
  skills: [
    [
      'Main practice',
      'C++',
      'Ongoing problem-solving practice',
      'Selected DSA topics',
      'OOP Basics',
    ],
    ['Programming · basic skills', 'Python', 'Java', 'C', 'JavaScript', 'PHP', 'SQL'],
    [
      'Web & backend · used in projects',
      'HTML',
      'CSS',
      'Flask',
      'Django Basics',
      'REST APIs',
      'JWT',
      'Firebase',
      'Supabase',
    ],
    ['Databases · used in projects', 'MySQL', 'MongoDB', 'PostgreSQL'],
    ['Networking · basics', 'TCP/IP', 'DNS', 'DHCP', 'LAN/WAN', 'Wi-Fi', 'Java Socket Programming'],
    [
      'Tools & systems · foundational familiarity',
      'Git',
      'GitHub',
      'Ubuntu/Linux CLI',
      'Bash',
      'Windows Troubleshooting',
    ],
  ],

  // Project records / প্রজেক্ট: array order is the display order
  projects: [
    {
      name: 'Alert & Notification System',
      category: 'Systems',
      icon: '⌁',
      description: 'Send alerts between a server and several clients using Java.',
      work: 'A Java server and clients that send and receive alerts.',
      learning: 'Practice focus: sockets, threads, and Java Swing.',
      stack: ['Java', 'Swing', 'Sockets', 'Multithreading'],
      image: 'assets/projects/alert-system.webp',
      repo: 'https://github.com/mahabubhasanmahin/Alert-Notification-System',
      demo: null,
    },
    {
      name: 'Cipher Vault',
      category: 'Backend',
      icon: '⌘',
      description:
        'Encrypt data in the browser, sign in, and share links that expire. Built with Flask and JWT.',
      work: 'Browser encryption, sign-in, and links that expire.',
      learning: 'Practice focus: Web Crypto, JWT, and connecting a browser to Flask.',
      featured: true,
      stack: ['Flask', 'MongoDB', 'Web Crypto API', 'JWT'],
      image: 'assets/projects/cipher-vault.webp',
      repo: 'https://github.com/mahabubhasanmahin/CipherVault',
      demo: 'https://ciphervault22.netlify.app/',
    },
    {
      name: 'FoodieHub',
      category: 'Web',
      icon: '♧',
      description: 'Browse food, sign in, and add items to a cart.',
      work: 'Food browsing, user sign-in, and cart features.',
      learning: 'Practice focus: PHP, database queries, and user sessions.',
      stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      image: 'assets/projects/foodiehub.jpg',
      repo: 'https://github.com/mahabubhasanmahin/FoodieHub',
      demo: 'https://onlinefoodorderingsystemh.netlify.app/',
    },
    {
      name: 'Duplicate File Finder & System Cleaner',
      category: 'Systems',
      icon: '▧',
      description: 'Find possible duplicate files and remove empty files and folders on Linux.',
      work: 'File checks for possible duplicates and empty files or folders.',
      learning: 'Practice focus: Bash, Linux commands, and file hashes.',
      stack: ['Bash', 'Linux CLI', 'MD5'],
      image: 'assets/projects/duplicate-finder.webp',
      repo: 'https://github.com/mahabubhasanmahin/Duplicate-File-Finder-and-Cleaner',
      demo: null,
    },
    {
      name: 'Smart Safety Awareness Network',
      category: 'Web',
      icon: '◎',
      description: 'Send SOS alerts with a location, get updates, and view a safety map.',
      work: 'Location-based SOS alerts, notifications, storage, and maps.',
      learning: 'Practice focus: location access, map tools, and cloud services.',
      featured: true,
      stack: ['JavaScript', 'Firebase', 'Supabase', 'Leaflet.js'],
      image: 'assets/projects/ssan.jpg',
      repo: 'https://github.com/mahabubhasanmahin/Smart-Safety-Awareness-Network',
      demo: 'https://ssan-web-kappa.vercel.app/',
    },
    {
      name: 'AI Face Age Detection',
      category: 'AI / ML',
      icon: '◉',
      description: 'Upload a face photo to get an estimated age range.',
      work: 'A photo upload page and a face age estimation workflow.',
      learning: 'Practice focus: OpenCV, model output, and connecting Python to a web app.',
      featured: true,
      stack: ['Python', 'Flask', 'OpenCV', 'PyTorch', 'PostgreSQL'],
      image: 'assets/projects/face-age.webp',
      repo: 'https://github.com/mahabubhasanmahin/AI_Face_Age_Detection',
      demo: 'https://aifaceage.netlify.app/',
    },
    {
      name: 'E-Learning Quiz Platform',
      category: 'Systems',
      icon: '▤',
      description: 'Take quizzes and store questions and results with Java and MySQL.',
      work: 'Quiz questions, answer checks, and results stored in MySQL.',
      learning: 'Practice focus: Java, SQL, and database-backed apps.',
      stack: ['Java', 'MySQL'],
      image: 'assets/projects/quiz-platform.webp',
      repo: 'https://github.com/mahabubhasanmahin/E-Learning-Quiz-Platform-Java-MySQL-',
      demo: null,
    },
    {
      name: 'Restaurant Management System',
      category: 'Systems',
      icon: '◇',
      description: 'Show a food menu, take orders, and calculate a bill using Assembly.',
      work: 'A menu, order input, and bill calculation in Assembly.',
      learning: 'Practice focus: low-level input, output, and program flow.',
      stack: ['Assembly'],
      image: 'assets/projects/restaurant.webp',
      repo: 'https://github.com/mahabubhasanmahin/Restaurant-Management-System-Assembly-',
      demo: null,
    },
    {
      name: 'BFS Web Crawler',
      category: 'Systems',
      icon: '⌬',
      description: 'Visit web pages and follow their links using the BFS algorithm.',
      work: 'Web page links visited in breadth-first order.',
      learning: 'Practice focus: queues, graphs, and the BFS algorithm.',
      stack: ['Java', 'Algorithms', 'BFS'],
      image: 'assets/projects/bfs-crawler.webp',
      repo: 'https://github.com/mahabubhasanmahin/Algorithm-Project/tree/main/WebCrawler_Using_BFS-20241119T062038Z-001/WebCrawler_Using_BFS',
      demo: null,
    },
    {
      name: 'Smart Crop Recommendation System',
      category: 'AI / ML',
      icon: '♧',
      description: 'Suggest crops based on soil and weather data using machine learning.',
      work: 'Crop suggestions based on soil and weather inputs.',
      learning: 'Practice focus: preparing input data and using model predictions.',
      stack: ['Python', 'Machine Learning'],
      image: 'assets/projects/crop-recommendation.webp',
      repo: 'https://github.com/mahabubhasanmahin/SmartCropRecommendationSystem',
      demo: null,
    },
    {
      name: 'Line Coding Error Simulator',
      category: 'Systems',
      icon: '⌁',
      description: 'Show how digital signals are sent and how noise can cause errors.',
      work: 'Views of digital signals and errors caused by noise.',
      learning: 'Practice focus: line coding, signal plots, and communication basics.',
      stack: ['Digital Communication', 'Signal Simulation'],
      image: 'assets/projects/line-coding.webp',
      repo: 'https://github.com/mahabubhasanmahin/Line-Coding-Error-Simulator',
      demo: null,
    },
  ],

  // Education timeline / শিক্ষা
  education: [
    [
      '2023–Present | Final Semester | Seeking Internship',
      'B.Sc. in Computer Science and Engineering',
      'Green University of Bangladesh',
    ],
    ['2019 — 2021', 'HSC · Science', 'Kerani Hat High School & College, Rangpur'],
  ],

  // Certificate records / সনদ: new entries create new cards automatically
  certifications: [
    {
      date: 'Nov 2024 — Feb 2025',
      title: 'Python (Django) Training · 80 Hours',
      issuer: 'IIT, Jahangirnagar University',
      image: 'assets/certificates/python-django.jpg',
    },
    {
      date: 'September 2025',
      title: 'Cyber Hygiene Training',
      issuer: 'The Asia Foundation & SAJIDA Foundation',
      image: 'assets/certificates/cyber-hygiene.jpg',
    },
    {
      date: '2026',
      title: 'Intra Green Programming Contest',
      issuer: 'Participant',
      image: 'assets/certificates/igpc-2026.jpg',
    },
  ],
};
