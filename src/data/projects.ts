import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    slug: "supply-lens",
    name: "Supply Lens",
    path: "~/projects/supply-lens",
    tagline: "End-to-End AI-Powered Supply Chain Visibility and Risk Intelligence Platform.",
    tier: "featured",
    domainCategory: "Full Stack",
    status: "Production Ready",
    year: "2026",
    languages: ["TypeScript", "Python"],
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Groq AI", "Recharts"],
    problem: "Global supply chains suffer from fragmented tracking data, delayed risk mitigation, and lack of real-time inventory anomaly detection.",
    solution: "Engineered Supply Lens, a modern full-stack analytics platform delivering real-time shipment monitoring, AI risk scoring, route optimization, and supplier performance tracking.",
    architecture: "Next.js App Router full-stack server architecture -> PostgreSQL database via Prisma ORM -> Groq AI API integration for predictive disruption assessment -> Recharts telemetry UI.",
    keyFeatures: [
      "Real-time shipment tracking dashboard with status indicators",
      "AI-driven route risk & delay probability scoring engine",
      "Interactive data visualizations for inventory throughput and bottlenecks",
      "Supplier quality rating and compliance telemetry",
      "Automated disruption alert notifications"
    ],
    engineeringDecisions: [
      "Leveraged Next.js Server Components and Prisma for zero-latency database query rendering.",
      "Integrated Groq LPU inference for sub-second predictive supply chain disruption analysis."
    ],
    challenges: [
      "Aggregating asynchronous telemetry events without blocking UI rendering pipelines."
    ],
    outcomes: [
      "Full-stack showcase repository with live production deployment potential."
    ],
    repoUrl: "https://github.com/Rachit2912/Supply_Lens",
    liveUrl: "https://github.com/Rachit2912/Supply_Lens",
    commands: {
      open: "cd ~/projects/supply-lens",
      cat: "cat ~/projects/supply-lens/README.md",
      cd: "cd ~/projects/supply-lens"
    },
    readmeContent: `# Supply Lens // AI Supply Chain Risk Intelligence

> AI-powered end-to-end supply chain visibility and risk analytics platform built with Next.js & PostgreSQL.
`
  },
  {
    slug: "secure-file-vault",
    name: "Secure File Vault System",
    path: "~/projects/secure-file-vault",
    tagline: "High-performance encrypted file storage with JWT auth, deduplication, quota control, and rate limiting.",
    tier: "featured",
    domainCategory: "Full Stack",
    status: "Production Ready",
    year: "2025",
    languages: ["Go", "TypeScript", "SQL"],
    technologies: ["Go", "React", "TypeScript", "PostgreSQL", "Docker", "JWT", "REST API"],
    problem: "Modern web applications require secure, authenticated multi-file uploading with strict access control, MIME verification, deduplication, and resource usage quotas.",
    solution: "Engineered a robust full-stack file vault backend in Go with PostgreSQL for metadata storage, paired with a modern React/TypeScript dashboard supporting drag-and-drop uploads and file analytics.",
    architecture: "Go REST API server connected to PostgreSQL for relational metadata. Implements SHA-256 file hash checking for deduplication, multi-part chunked upload processing, rate limiting middleware, and JWT authentication token verification.",
    keyFeatures: [
      "JWT-based user authentication & session management",
      "Multi-file and drag-and-drop upload streaming",
      "SHA-256 hash file deduplication engine to save disk space",
      "Strict MIME type validation and file payload quotas",
      "Rate limiting middleware protecting against abuse",
      "Public file sharing with auto-expiring secret links",
      "Interactive storage statistics dashboard"
    ],
    engineeringDecisions: [
      "Selected Go for backend service to ensure high concurrency, fast startup time, and minimal memory overhead during stream parsing.",
      "Implemented file deduplication at storage layer using SHA-256 content hashes to avoid duplicating identical blobs across users.",
      "Utilized PostgreSQL index structures for instant path lookups and quota query aggregations."
    ],
    challenges: [
      "Handling large stream uploads efficiently without buffering entire files into RAM.",
      "Preventing MIME spoofing attacks through file header payload inspection rather than trusting extensions."
    ],
    outcomes: [
      "52+ structured commits, verified multi-user file isolation, zero-downtime containerized Docker environment."
    ],
    repoUrl: "https://github.com/Rachit2912/Secure-File-Vault-System",
    liveUrl: "https://github.com/Rachit2912/Secure-File-Vault-System",
    commands: {
      open: "cd ~/projects/secure-file-vault",
      cat: "cat ~/projects/secure-file-vault/README.md",
      cd: "cd ~/projects/secure-file-vault"
    },
    readmeContent: `# Secure File Vault System

> High-performance encrypted file storage service built with Go, PostgreSQL, and React.
`
  },
  {
    slug: "node-atlas",
    name: "Node Atlas",
    path: "~/projects/node-atlas",
    tagline: "Distributed Node Topology & Infrastructure Discovery Engine.",
    tier: "featured",
    domainCategory: "Backend & Systems",
    status: "Active",
    year: "2026",
    languages: ["TypeScript"],
    technologies: ["Node.js", "TypeScript", "Distributed Systems", "Graph Algorithms", "REST API"],
    problem: "Visualizing and mapping dynamic cloud node topologies and service dependency graphs across microservices.",
    solution: "Built Node Atlas, a lightweight TypeScript service discovery engine that continuously polls and maps interconnected network nodes and compute instances.",
    architecture: "Node discovery workers poll endpoints -> Directed graph topology engine -> Health metrics aggregation -> REST API exposure.",
    keyFeatures: [
      "Automated node topology discovery and link status mapping",
      "Latency and health metric telemetry tracking",
      "Directed acyclic graph dependency resolution",
      "Fast TypeScript REST API interface"
    ],
    engineeringDecisions: [
      "Utilized breadth-first traversal algorithms to detect network cycles and dependency deadlocks."
    ],
    challenges: ["Handling asynchronous node heartbeats accurately during network partitioning."],
    outcomes: ["Clean TypeScript system mapping tool for distributed microservice architectures."],
    repoUrl: "https://github.com/Rachit2912/node-atlas",
    commands: {
      open: "cd ~/projects/node-atlas",
      cat: "cat ~/projects/node-atlas/README.md",
      cd: "cd ~/projects/node-atlas"
    },
    readmeContent: `# Node Atlas // Distributed Topology Engine
`
  },
  {
    slug: "tcp2http",
    name: "TCP2HTTP Proxy",
    path: "~/projects/tcp2http",
    tagline: "Low-level Go TCP to HTTP protocol translator and socket tunneling proxy.",
    tier: "featured",
    domainCategory: "Backend & Systems",
    status: "Completed",
    year: "2025",
    languages: ["Go"],
    technologies: ["Go (Golang)", "TCP Sockets", "HTTP/1.1", "Network Buffering", "Concurrency"],
    problem: "Understanding networking protocol boundaries requires translating raw TCP stream buffers into structured HTTP/1.1 request/response frames.",
    solution: "Developed TCP2HTTP in Go, a custom network proxy that ingests raw TCP byte streams, parses HTTP packet headers, and forwards requests to target HTTP web servers.",
    architecture: "Raw TCP socket listener -> Concurrency goroutine per connection -> Byte stream HTTP parser -> Target upstream HTTP client proxy -> Bi-directional response piping.",
    keyFeatures: [
      "Zero-dependency Go TCP socket server implementation",
      "HTTP/1.1 header and payload parser written from scratch",
      "Concurrent non-blocking goroutine worker pools",
      "Detailed connection logging and latency stats"
    ],
    engineeringDecisions: [
      "Avoided standard library http server abstractions to directly parse TCP byte buffers for educational network mastery."
    ],
    challenges: ["Correctly handling chunked transfer encodings and EOF byte streams over raw sockets."],
    outcomes: ["High-throughput custom networking proxy in Go."],
    repoUrl: "https://github.com/Rachit2912/TCP2HTTP",
    commands: {
      open: "cd ~/projects/tcp2http",
      cat: "cat ~/projects/tcp2http/README.md",
      cd: "cd ~/projects/tcp2http"
    },
    readmeContent: `# TCP2HTTP // Go Protocol Proxy
`
  },
  {
    slug: "shellb",
    name: "shellB",
    path: "~/projects/shellB",
    tagline: "Custom Unix REPL shell in C++ with process management, pipes, and I/O redirection.",
    tier: "featured",
    domainCategory: "Backend & Systems",
    status: "Stable",
    year: "2025",
    languages: ["C++", "CMake", "Bash"],
    technologies: ["C++17", "CMake", "POSIX APIs", "Linux System Calls", "Bash"],
    problem: "Understanding operating system primitives like process creation, signal handling, environment management, and I/O redirection requires building shell engines from scratch.",
    solution: "Developed shellB, a portable Unix-like REPL command interpreter in modern C++ with system call primitives, built-in commands, piping support, and process lifecycle control.",
    architecture: "Tokenizer and recursive descent parser construct abstract command execution nodes. Process manager forks child processes (\`fork()\`, \`execvp()\`), wires file descriptors via \`pipe()\` and \`dup2()\`, and handles POSIX signals (\`SIGINT\`, \`SIGTSTP\`).",
    keyFeatures: [
      "Interactive REPL prompt with path tracking and user environment context",
      "Built-in commands: cd, pwd, echo, type, exit, history",
      "External executable binary execution via PATH resolution",
      "Piping mechanism (|) connecting stdout of left process to stdin of right process",
      "File I/O redirection (>, >>, <)",
      "CMake build system cross-platform build script support"
    ],
    engineeringDecisions: [
      "Used clean modern C++ string parsing abstractions with strict memory boundary checks.",
      "Implemented signal routing to prevent child process termination from killing the main shell REPL process."
    ],
    challenges: [
      "Correctly closing unused pipe file descriptors in parent and child processes to avoid hanging IO buffers."
    ],
    outcomes: [
      "Signature C++ systems project directly validating Linux operating system expertise."
    ],
    repoUrl: "https://github.com/Rachit2912/shellB",
    commands: {
      open: "cd ~/projects/shellB",
      cat: "cat ~/projects/shellB/README.md",
      cd: "cd ~/projects/shellB"
    },
    readmeContent: `# shellB // C++ Shell Engine

> Custom Unix REPL built in Modern C++ with POSIX system call primitives.
`
  },
  {
    slug: "deribit-oems",
    name: "Deribit OEMS",
    path: "~/projects/deribit-oems",
    tagline: "C++ High-Performance Order Execution Management System connecting to Deribit Exchange.",
    tier: "featured",
    domainCategory: "Backend & Systems",
    status: "Completed",
    year: "2024",
    languages: ["C++"],
    technologies: ["C++20", "Boost.Beast", "Boost.Asio", "WebSockets", "JSON Parser", "CMake"],
    problem: "Real-time algorithmic trading requires ultra-low latency WebSocket connections, instant order placement, market feed parsing, and robust error recovery.",
    solution: "Built a high-performance C++ Order Execution Management System (OEMS) interfacing directly with the Deribit cryptocurrency derivatives exchange WebSocket and REST APIs.",
    architecture: "Asynchronous IO loop managed by Boost.Asio and Boost.Beast. Handles real-time orderbook ticker streaming, automated order entry (limit/market), order amendment, and cancellation with minimal thread contention.",
    keyFeatures: [
      "Asynchronous WebSocket market data orderbook feed listener",
      "Instant limit/market order placement and cancellation",
      "Latency measurement utilities and ticker updates",
      "Boost.Beast SSL/TLS secure socket abstraction layer",
      "Robust error handling and API authentication key exchange"
    ],
    engineeringDecisions: [
      "Utilized asynchronous IO routines to prevent thread blocking during network packets.",
      "Optimized JSON payload serialization to minimize allocation overhead on fast paths."
    ],
    challenges: [
      "Managing WebSocket message framing and TLS handshakes in non-blocking event loops."
    ],
    outcomes: [
      "Demonstrated systems mastery in C++ low-latency trading infrastructure."
    ],
    repoUrl: "https://github.com/Rachit2912/DeribitOEMS",
    commands: {
      open: "cd ~/projects/deribit-oems",
      cat: "cat ~/projects/deribit-oems/README.md",
      cd: "cd ~/projects/deribit-oems"
    },
    readmeContent: `# Deribit Order Execution Management System (OEMS)

> High-performance C++ order execution management system built on Boost.Beast & Boost.Asio.
`
  },
  {
    slug: "video-streaming",
    name: "Video Streaming Platform Backend",
    path: "~/projects/video-streaming",
    tagline: "Scalable Node.js & Express video backend with FFmpeg transcoding, chunked HLS/dash streaming, and RBAC.",
    tier: "featured",
    domainCategory: "Backend & Systems",
    status: "Completed",
    year: "2025",
    languages: ["JavaScript", "Node.js"],
    technologies: ["Node.js", "Express.js", "MongoDB", "FFmpeg", "Cloudinary", "JWT", "RBAC"],
    problem: "Delivering video content requires multi-resolution video encoding, chunked HTTP adaptive streaming, role-based user permissions, and metadata search.",
    solution: "Architected a full video platform backend service utilizing Node.js, Express, and MongoDB, integrating FFmpeg for automatic video transcoding into adaptive resolution streams.",
    architecture: "Client uploads raw video -> Express middleware streams buffer to Cloudinary / storage -> FFmpeg worker transcodes into resolution tiers -> MongoDB stores user/video metadata with JWT RBAC access control.",
    keyFeatures: [
      "JWT-authenticated signup, login, and user profile management",
      "Role-Based Access Control (RBAC) for content management",
      "FFmpeg integration for video transcoding and thumbnail generation",
      "Chunked adaptive HTTP video streaming",
      "MongoDB indexing for title/tag search queries"
    ],
    engineeringDecisions: [
      "Used streams rather than loading full video files into memory to maintain low server RAM consumption.",
      "Implemented RBAC middleware to enforce strict user vs creator vs admin permissions."
    ],
    challenges: [
      "Managing background FFmpeg encoding tasks without stalling Express main event loop."
    ],
    outcomes: [
      "Complete end-to-end video backend pipeline capable of serving stream chunks reliably."
    ],
    repoUrl: "https://github.com/Rachit2912/video_streaming_app",
    commands: {
      open: "cd ~/projects/video-streaming",
      cat: "cat ~/projects/video-streaming/README.md",
      cd: "cd ~/projects/video-streaming"
    },
    readmeContent: `# Video Streaming Platform Backend

> Node.js, Express & MongoDB backend powering adaptive video streaming and user channels.
`
  },
  {
    slug: "blogify",
    name: "Blogify Backend & CMS",
    path: "~/projects/blogify",
    tagline: "Full-Stack Express & EJS blogging application with dynamic markdown publishing and user auth.",
    tier: "secondary",
    domainCategory: "Full Stack",
    status: "Completed",
    year: "2025",
    languages: ["JavaScript"],
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
    problem: "Simple blogging platforms require fast content rendering, secure user authentication, and media uploads.",
    solution: "Developed Blogify using Node.js, Express, MongoDB, and EJS templates for responsive blogging and discussion threads.",
    architecture: "Express MVC pattern connecting MongoDB schemas with EJS server-rendered views.",
    keyFeatures: [
      "User registration and login authentication",
      "Blog post creation with cover image upload",
      "Interactive comment system under blog articles",
      "User profile overview and post management"
    ],
    engineeringDecisions: ["Server-side rendering via EJS for lightweight deployment without client hydration lag."],
    challenges: ["Sanitizing user inputs to prevent XSS vulnerability in blog posts."],
    outcomes: ["Clean full-stack blogging web application."],
    repoUrl: "https://github.com/Rachit2912/blogify",
    commands: {
      open: "cd ~/projects/blogify",
      cat: "cat ~/projects/blogify/README.md",
      cd: "cd ~/projects/blogify"
    },
    readmeContent: `# Blogify // Express Blogging Application
`
  },
  {
    slug: "pad4note",
    name: "Pad4Note Desktop Editor",
    path: "~/projects/pad4note",
    tagline: "Desktop note-taking and editor application written in C++ and Qt framework.",
    tier: "secondary",
    domainCategory: "Desktop Applications (C++)",
    status: "Completed",
    year: "2025",
    languages: ["C++"],
    technologies: ["C++", "Qt 6", "QMake / CMake", "Native GUI"],
    problem: "Lightweight, distraction-free desktop note utilities require fast native start times and responsive UI bindings.",
    solution: "Created Pad4Note, a desktop GUI text editor built with C++ and Qt, offering rich file operations, custom dark UI styling, syntax highlighted modes, and persistent auto-saving.",
    architecture: "Qt Signal/Slot event architecture connecting main window actions to native file IO system handlers.",
    keyFeatures: [
      "Clean native UI desktop environment",
      "File management: create, open, edit, save, save as",
      "Custom themes including dark mode terminal aesthetic",
      "Instant text statistics (character count, line count, word count)"
    ],
    engineeringDecisions: [
      "Leveraged Qt framework for cross-platform Linux/Windows/macOS native compilation."
    ],
    challenges: ["Optimizing memory layout for large text buffer rendering."],
    outcomes: ["Demonstrated native GUI application engineering capabilities in C++."],
    repoUrl: "https://github.com/Rachit2912/Pad4Note",
    commands: {
      open: "cd ~/projects/pad4note",
      cat: "cat ~/projects/pad4note/README.md",
      cd: "cd ~/projects/pad4note"
    },
    readmeContent: `# Pad4Note // C++ Qt Note Editor
`
  },
  {
    slug: "genai-nutrition-app",
    name: "GenAI Nutrition App",
    path: "~/projects/genai-nutrition-app",
    tagline: "AI-driven meal photo recognition and personalized calorie recommendation engine.",
    tier: "secondary",
    domainCategory: "AI / ML / CV",
    status: "Completed",
    year: "2025",
    languages: ["Python", "JavaScript"],
    technologies: ["Python", "Generative AI", "Computer Vision", "React", "Flask / FastAPI"],
    problem: "Manual calorie counting is tedious; users need fast visual meal estimation and customized dietary guidance.",
    solution: "Built a computer vision and LLM powered nutrition app that analyzes food photos, estimates macros, and generates personalized meal recommendations.",
    architecture: "Frontend upload -> Image classification model -> LLM prompt enrichment -> Personal dietary profile matching -> Macro breakdown response.",
    keyFeatures: [
      "Multi-item food recognition from single photo",
      "Automated caloric estimation and macro ratios",
      "Personalized recommendation engine based on user goals",
      "Interactive meal history and summary tracking"
    ],
    engineeringDecisions: [
      "Combined visual feature classification with LLM reasoning for nuanced context awareness."
    ],
    challenges: ["Accurately estimating portion sizes from 2D images."],
    outcomes: ["Direct output of the SmartBridge AI/ML Internship."],
    repoUrl: "https://github.com/Rachit2912/GenAI-Nutrition-App-",
    commands: {
      open: "cd ~/projects/genai-nutrition-app",
      cat: "cat ~/projects/genai-nutrition-app/README.md",
      cd: "cd ~/projects/genai-nutrition-app"
    },
    readmeContent: `# GenAI Nutrition Application
`
  },
  {
    slug: "simpsons-character-recognition",
    name: "Simpsons Character Recognition",
    path: "~/projects/simpsons-character-recognition",
    tagline: "Computer Vision CNN system classifying 55K+ character images with 95% accuracy.",
    tier: "secondary",
    domainCategory: "AI / ML / CV",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    technologies: ["Python", "PyTorch", "TensorFlow / Keras", "OpenCV", "Scikit-Learn"],
    problem: "Multi-class character classification in animated series involves handling variable lighting, occlusions, and imbalanced dataset distributions.",
    solution: "Designed and trained a Convolutional Neural Network (CNN) on 55,000+ Simpsons character images, reaching 95% validation classification accuracy.",
    architecture: "Data ingestion pipeline -> Data augmentation & balancing -> Deep CNN feature extraction -> Softmax classification layer -> Deployment interface.",
    keyFeatures: [
      "Custom CNN architecture tuned with batch normalization and dropout layers",
      "Image augmentation pipeline (rotation, zoom, contrast shifts)",
      "Evaluation metrics suite: Confusion matrix, Precision, Recall, F1-Score",
      "95% validation accuracy across 20+ distinct character categories"
    ],
    engineeringDecisions: [
      "Applied focal loss functions to address severe class imbalance in secondary character samples."
    ],
    challenges: ["Overcoming overfitting on smaller character training sets."],
    outcomes: ["SCIS 2025 research publication / presentation foundation."],
    repoUrl: "https://github.com/Rachit2912/Character-Recognition-in-The-Simpsons-Computer-Vision-Project",
    commands: {
      open: "cd ~/projects/simpsons-character-recognition",
      cat: "cat ~/projects/simpsons-character-recognition/README.md",
      cd: "cd ~/projects/simpsons-character-recognition"
    },
    readmeContent: `# Simpsons Character Recognition
`
  },
  {
    slug: "deepfake-filter",
    name: "DeepFake Filter",
    path: "~/projects/deepfake-filter",
    tagline: "Real-time OpenCV & facial landmark warping application for live video streams.",
    tier: "secondary",
    domainCategory: "AI / ML / CV",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    technologies: ["Python", "OpenCV", "dlib", "68 Facial Landmarks", "NumPy"],
    problem: "Real-time facial manipulation requires low-latency landmark tracking, Delaunay triangulation, and seamless image blending.",
    solution: "Engineered a real-time computer vision pipeline using dlib 68-point facial landmark detector to align, warp, and blend face meshes onto target video feeds.",
    architecture: "Webcam feed -> dlib landmark detection -> Delaunay Triangulation -> Affine transformation matrix -> Seamless clone blending.",
    keyFeatures: [
      "Real-time 68 facial landmark tracking from webcam video stream",
      "Delaunay triangulation for precise mesh warping",
      "Seamless Poisson clone blending for natural skin texture match",
      "Live performance processing loop"
    ],
    engineeringDecisions: [
      "Subsampled video frames and calculated triangulation matrices only when tracking confidence dipped to preserve FPS."
    ],
    challenges: ["Eliminating boundary flickering during high-speed facial rotation."],
    outcomes: ["Interactive computer vision landmark alignment system."],
    repoUrl: "https://github.com/Rachit2912/DeepFake-Filter",
    commands: {
      open: "cd ~/projects/deepfake-filter",
      cat: "cat ~/projects/deepfake-filter/README.md",
      cd: "cd ~/projects/deepfake-filter"
    },
    readmeContent: `# DeepFake Filter // Real-Time CV
`
  },
  {
    slug: "yolov9-deepsort",
    name: "YOLOv9 + DeepSORT Object Tracking",
    path: "~/projects/yolov9-deepsort",
    tagline: "Real-time multi-object detection and tracking pipeline integrated with Google Colab.",
    tier: "secondary",
    domainCategory: "AI / ML / CV",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    technologies: ["Python", "YOLOv9", "DeepSORT", "PyTorch", "OpenCV", "Google Colab"],
    problem: "Tracking multiple dynamic objects across video frames with unique persistent ID assignment.",
    solution: "Integrated state-of-the-art YOLOv9 object detector with DeepSORT tracking algorithm to assign persistent identity tracking vectors across live and recorded video feeds.",
    architecture: "Video input -> YOLOv9 bounding box detection -> Kalman filter estimation -> DeepSORT re-identification feature matching -> ID tracking output.",
    keyFeatures: [
      "YOLOv9 object detection model fine-tuning",
      "DeepSORT Kalman filter trajectory prediction",
      "Multi-target ID persistence across frame occlusions",
      "Google Colab automated notebook execution pipeline"
    ],
    engineeringDecisions: [
      "Utilized DeepSORT appearance feature descriptor embeddings to maintain target IDs during temporary occlusion."
    ],
    challenges: ["Optimizing inference speeds to maintain real-time frame rates."],
    outcomes: ["High-accuracy object detection and tracking workflow."],
    repoUrl: "https://github.com/Rachit2912/YOLOv9_Deepsort",
    commands: {
      open: "cd ~/projects/yolov9-deepsort",
      cat: "cat ~/projects/yolov9-deepsort/README.md",
      cd: "cd ~/projects/yolov9-deepsort"
    },
    readmeContent: `# YOLOv9 + DeepSORT Real-Time Object Tracking
`
  }
];
