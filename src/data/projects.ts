import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  // --- TIER 1 FEATURED SYSTEMS & BACKEND ---
  {
    id: "supply-lens",
    slug: "supply-lens",
    name: "Supply Lens",
    shortDescription: "Interactive Supply Chain Risk Studio with CognoDB Graph Engine & openCypher Protocol.",
    fullDescription: "Supply Lens is a production-quality supply chain intelligence studio built with Next.js 16, TypeScript, openCypher/Bolt graph protocol, and CognoDB Cloud graph database for real-time shipment graph modeling.",
    category: "full-stack",
    categoryLabel: "Full-Stack & Graph Engine",
    status: "Production Ready",
    year: "2026",
    languages: ["TypeScript"],
    frameworks: ["Next.js 16", "React", "Tailwind CSS", "Recharts"],
    databases: ["CognoDB Cloud (Graph DB)"],
    infrastructure: ["openCypher / Bolt Protocol", "Vercel"],
    technologies: ["Next.js 16", "TypeScript", "CognoDB", "openCypher", "Tailwind CSS", "Recharts"],
    problem: "Global supply chain logistics struggle with complex multi-echelon node dependencies, cycle detection, and real-time risk propagation across global trade routes.",
    solution: "Engineered Supply Lens, using graph database algorithms to model suppliers, routes, and warehouses as interconnected nodes, allowing sub-second graph queries and risk traversal.",
    architecture: "Next.js App Router -> openCypher / Bolt driver client -> CognoDB Graph Database -> Graph traversal query execution -> Recharts interactive risk telemetry dashboard.",
    keyFeatures: [
      "openCypher graph database query execution for supply chain network nodes",
      "Interactive graph traversal for risk bottleneck identification",
      "Real-time shipment delay probability scoring",
      "Supplier dependency tree and cycle analysis",
      "Live production deployment on Vercel"
    ],
    engineeringHighlights: [
      "Modeled supply chain logistics as directed acyclic graphs (DAG) in CognoDB for sub-second node query execution.",
      "Implemented openCypher graph query abstractions to calculate risk impact radius across supplier tiers."
    ],
    challenges: ["Optimizing openCypher graph traversal latency over WebSocket/Bolt protocol connections."],
    outcomes: ["Live deployed production-grade graph analytics application."],
    githubUrl: "https://github.com/Rachit2912/Supply_Lens",
    demoUrl: "https://supply-lens-topaz.vercel.app",
    featured: true,
    priority: 1,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "full-stack",
    cliPath: "~/projects/full-stack/supply-lens",
    cliCommands: {
      open: "cd ~/projects/full-stack/supply-lens",
      cat: "cat ~/projects/full-stack/supply-lens/README.md",
      cd: "cd ~/projects/full-stack/supply-lens"
    },
    readmeContent: `# Supply Lens — Interactive Supply Chain Risk Studio

[![Powered by CognoDB](https://img.shields.io/badge/Database-CognoDB_Cloud-indigo.svg)](https://console.cognodb.com/)
[![Protocol](https://img.shields.io/badge/Protocol-openCypher_/_Bolt-blue.svg)](https://opencypher.org/)
[![Framework](https://img.shields.io/badge/Framework-Next.js_16-black.svg)](https://nextjs.org/)

## Architecture
Supply Lens connects directly to **CognoDB Cloud** using openCypher and the Bolt protocol to perform real-time graph traversal, risk assessment, and supply chain bottleneck discovery.
`
  },
  {
    id: "secure-file-vault",
    slug: "secure-file-vault",
    name: "Secure File Vault System",
    shortDescription: "High-performance encrypted file storage with Go, PostgreSQL SHA-256 deduplication, JWT, and rate limiting.",
    fullDescription: "A secure file storage and sharing application with backend in Go, frontend in React + TypeScript, PostgreSQL for metadata, SHA-256 content deduplication, and quota control.",
    category: "backend",
    categoryLabel: "Backend / Go / Security",
    status: "Production Ready",
    year: "2025",
    languages: ["Go", "TypeScript", "SQL"],
    frameworks: ["React", "Express / Go REST API"],
    databases: ["PostgreSQL"],
    infrastructure: ["Docker", "JWT", "REST API"],
    technologies: ["Go", "React", "TypeScript", "PostgreSQL", "SHA-256", "Docker", "JWT"],
    problem: "Web applications require secure multi-user file storage with strict authentication, payload quota checks, SHA-256 content deduplication, and rate limiting.",
    solution: "Built a Go REST API backend integrated with PostgreSQL for relational metadata, providing SHA-256 hash deduplication to prevent duplicate file blob writes.",
    architecture: "Go HTTP Router -> JWT Authentication Middleware -> Rate Limiter -> SHA-256 Hash Deduplication Engine -> PostgreSQL Indexing -> Docker Container.",
    keyFeatures: [
      "JWT user authentication and session management",
      "Multi-file drag-and-drop upload streaming interface",
      "SHA-256 hash file deduplication engine saving disk storage",
      "Strict MIME type validation and file payload quotas",
      "Rate limiting middleware protecting API endpoints from abuse",
      "Public file sharing with auto-expiring secret links"
    ],
    engineeringHighlights: [
      "Selected Go for concurrent stream processing with low RAM footprint.",
      "Implemented SHA-256 file hashing at storage layer to ensure zero duplicate blob storage across users."
    ],
    challenges: ["Handling multipart file stream uploads efficiently without buffering entire payloads into RAM."],
    outcomes: ["Verified multi-user encrypted storage system with 52+ structured commits."],
    githubUrl: "https://github.com/Rachit2912/Secure-File-Vault-System",
    demoUrl: "https://github.com/Rachit2912/Secure-File-Vault-System",
    featured: true,
    priority: 2,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "backend",
    cliPath: "~/projects/backend/secure-file-vault",
    cliCommands: {
      open: "cd ~/projects/backend/secure-file-vault",
      cat: "cat ~/projects/backend/secure-file-vault/README.md",
      cd: "cd ~/projects/backend/secure-file-vault"
    },
    readmeContent: `# Secure File Vault System

A secure file storage and sharing application with backend in **Go**, frontend in **React + TypeScript**, and **PostgreSQL** as the database.

## Features
- 🔐 JWT Authentication
- 📂 Drag & Drop Upload
- 🧮 SHA-256 File Deduplication
- 🛡 MIME Validation & Quotas
- ⚡ Rate Limiting Middleware
`
  },
  {
    id: "shellb",
    slug: "shellb",
    name: "shellB Shell Engine",
    shortDescription: "Custom Unix REPL command interpreter built in C++ with POSIX system call primitives.",
    fullDescription: "A modern C++ command-line interpreter (REPL) supporting command execution via PATH resolution, process fork/exec, piping (|), and file descriptor I/O redirection.",
    category: "cpp-systems",
    categoryLabel: "C++ Systems & POSIX",
    status: "Stable",
    year: "2025",
    languages: ["C++"],
    frameworks: ["POSIX APIs", "CMake"],
    databases: [],
    infrastructure: ["Linux Kernel System Calls", "CMake"],
    technologies: ["C++17", "CMake", "POSIX APIs", "fork()", "execvp()", "pipe()", "dup2()"],
    problem: "Understanding low-level OS process creation, file descriptor wiring, and signal handling requires building a command shell REPL from POSIX primitives.",
    solution: "Developed shellB, a custom C++ Unix REPL implementing command tokenization, path resolution, process lifecycle control, and I/O redirection.",
    architecture: "REPL Input Buffer -> Tokenizer & AST Parser -> Built-in Command Evaluator -> fork() / execvp() Process Manager -> pipe() & dup2() File Descriptor Plumbing.",
    keyFeatures: [
      "Interactive shell REPL prompt with path context",
      "Built-in commands: cd, pwd, echo, type, exit",
      "External executable binary lookup via PATH resolution",
      "Piping (|) connecting stdout of left process to stdin of right process",
      "File I/O redirection (>, >>, <)",
      "Cross-platform CMake build configuration"
    ],
    engineeringHighlights: [
      "Utilized modern C++ string parsing abstractions with strict memory boundary checks.",
      "Managed POSIX signal routing to prevent child process termination from killing the shell REPL process."
    ],
    challenges: ["Correctly closing unused pipe file descriptors in parent and child processes to avoid hanging buffer reads."],
    outcomes: ["Signature C++ systems project validating low-level Linux systems programming expertise."],
    githubUrl: "https://github.com/Rachit2912/shellB",
    featured: true,
    priority: 3,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "cpp-systems",
    cliPath: "~/projects/cpp-systems/shellb",
    cliCommands: {
      open: "cd ~/projects/cpp-systems/shellb",
      cat: "cat ~/projects/cpp-systems/shellb/README.md",
      cd: "cd ~/projects/cpp-systems/shellb"
    },
    readmeContent: `# shellB // Modern C++ REPL Shell Engine

A basic command-line tool (REPL) that supports executing commands, handling executable paths, and redirecting output to files.

## Features
- **Command Execution**: PATH resolution & execution via fork/exec
- **Piping & Redirection**: Pipe outputs (|) and file redirection (>, >>, <)
- **Built-in Commands**: cd, echo, pwd, type, exit
`
  },
  {
    id: "deribit-oems",
    slug: "deribit-oems",
    name: "Deribit OEMS Trading Engine",
    shortDescription: "High-Performance C++ Order Execution Management System for Deribit Test Exchange.",
    fullDescription: "A high-efficiency trading system implemented in C++20 for Deribit Test Exchange, supporting real-time WebSocket market data streaming, order management, and low-latency order placement.",
    category: "cpp-systems",
    categoryLabel: "C++ Low-Latency Systems",
    status: "Completed",
    year: "2024",
    languages: ["C++"],
    frameworks: ["Boost.Asio", "Boost.Beast"],
    databases: [],
    infrastructure: ["WebSockets", "SSL/TLS", "CMake"],
    technologies: ["C++20", "Boost.Asio", "Boost.Beast", "WebSockets", "JSON", "CMake"],
    problem: "Real-time algorithmic trading requires ultra-low latency WebSocket streaming, instant order entry/cancellation, and non-blocking network socket IO.",
    solution: "Engineered a high-performance C++ Order Execution Management System (OEMS) interfacing directly with the Deribit cryptocurrency derivatives exchange API.",
    architecture: "Boost.Asio Asynchronous Network Event Loop -> Boost.Beast WebSocket Transport -> SSL/TLS Socket -> Real-Time Ticker & Orderbook Parser -> Order Entry Manager.",
    keyFeatures: [
      "Asynchronous WebSocket market data orderbook feed listener",
      "Instant limit/market order placement, amendment, and cancellation",
      "Latency measurement utilities and ticker updates",
      "Boost.Beast SSL/TLS secure socket transport layer",
      "Support for Spot, Futures, and Options markets on Deribit"
    ],
    engineeringHighlights: [
      "Utilized Boost.Asio non-blocking IO routines to prevent thread stalling during network packet processing.",
      "Optimized JSON payload serialization to minimize heap allocations on fast execution paths."
    ],
    challenges: ["Managing WebSocket frame parsing and TLS handshakes inside non-blocking event loops."],
    outcomes: ["Demonstrated systems mastery in C++ low-latency trading infrastructure."],
    githubUrl: "https://github.com/Rachit2912/DeribitOEMS",
    featured: true,
    priority: 4,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "cpp-systems",
    cliPath: "~/projects/cpp-systems/deribit-oems",
    cliCommands: {
      open: "cd ~/projects/cpp-systems/deribit-oems",
      cat: "cat ~/projects/cpp-systems/deribit-oems/README.md",
      cd: "cd ~/projects/cpp-systems/deribit-oems"
    },
    readmeContent: `# Deribit OEMS // High-Performance C++ Trading System

A high-efficiency trading system implemented in C++ designed for Deribit Test. Supports real-time market data processing, order management, and low-latency WebSocket communication.
`
  },
  {
    id: "tcp2http",
    slug: "tcp2http",
    name: "TCP2HTTP Proxy",
    shortDescription: "Go TCP Socket Listener & Raw HTTP/1.1 Stream Translator Proxy.",
    fullDescription: "Low-level network socket translation tool written in Go that listens on raw TCP sockets, parses incoming HTTP byte frames, and forwards requests to target HTTP web servers.",
    category: "backend",
    categoryLabel: "Backend / Go Networking",
    status: "Completed",
    year: "2025",
    languages: ["Go"],
    frameworks: ["Go stdlib net"],
    databases: [],
    infrastructure: ["TCP Sockets", "HTTP/1.1"],
    technologies: ["Go", "TCP Sockets", "HTTP/1.1", "Network Buffers", "Goroutines"],
    problem: "Understanding network protocol boundaries requires translating raw TCP stream byte buffers into structured HTTP/1.1 request/response frames.",
    solution: "Developed TCP2HTTP in Go, a custom network proxy that ingests raw TCP byte streams, parses HTTP packet headers, and forwards requests to target HTTP web servers.",
    architecture: "Raw TCP Socket Listener -> Concurrency Goroutine Pool -> Stream Byte Parser -> HTTP/1.1 Header Extraction -> Forwarding Proxy Client.",
    keyFeatures: [
      "Zero-dependency Go TCP socket server implementation",
      "Raw HTTP/1.1 byte stream header and payload parser",
      "Concurrent non-blocking goroutine worker routines",
      "Detailed socket connection logging"
    ],
    engineeringHighlights: [
      "Avoided higher-level HTTP framework abstractions to directly parse TCP byte buffers for fundamental networking mastery."
    ],
    challenges: ["Correctly handling chunked transfer encoding and EOF byte streams over raw TCP sockets."],
    outcomes: ["High-throughput network protocol translator proxy written in Go."],
    githubUrl: "https://github.com/Rachit2912/TCP2HTTP",
    featured: true,
    priority: 5,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "backend",
    cliPath: "~/projects/backend/tcp2http",
    cliCommands: {
      open: "cd ~/projects/backend/tcp2http",
      cat: "cat ~/projects/backend/tcp2http/README.md",
      cd: "cd ~/projects/backend/tcp2http"
    },
    readmeContent: `# TCP2HTTP Proxy

Low-level Go TCP to HTTP protocol translator and socket tunneling proxy listening on raw TCP streams (\`cmd/tcplistener/main.go\`).
`
  },
  {
    id: "node-atlas",
    slug: "node-atlas",
    name: "Node Atlas",
    shortDescription: "Node.js Codebase Dependency Intelligence & Security Graph Engine in CognoDB.",
    fullDescription: "NodeAtlas connects to GitHub repositories, parses JS/TS dependencies, builds a persistent graph in CognoDB, and provides Dependency Exploration, Cycle Analysis, and Security Impact Analysis.",
    category: "backend",
    categoryLabel: "Backend & Distributed Graphs",
    status: "Active",
    year: "2026",
    languages: ["TypeScript"],
    frameworks: ["Node.js", "Express", "Next.js"],
    databases: ["CognoDB Cloud"],
    infrastructure: ["GitHub API", "Graph Analytics"],
    technologies: ["TypeScript", "Node.js", "CognoDB", "openCypher", "GitHub API"],
    problem: "Complex JavaScript/TypeScript codebases suffer from hidden cyclic dependencies, deeply nested vulnerabilities, and unmapped dependency risk propagation.",
    solution: "Built NodeAtlas, a SaaS dependency graph engine that scans repositories, constructs node dependency graphs in CognoDB, and identifies cyclic references.",
    architecture: "GitHub Repo Parser -> AST Dependency Extractor -> CognoDB Graph Database -> Cycle Analyzer Engine -> Security Vulnerability Impact Traversal.",
    keyFeatures: [
      "Automated GitHub repository dependency tree parser",
      "CognoDB persistent dependency graph construction",
      "Cycle Analyzer detecting circular imports in Node.js packages",
      "Security Impact Analyzer tracing vulnerability radius",
      "Interactive dependency graph visualization"
    ],
    engineeringHighlights: [
      "Implemented graph cycle detection algorithms using openCypher queries over CognoDB Cloud."
    ],
    challenges: ["Parsing deeply nested npm package dependency trees without exceeding memory quotas."],
    outcomes: ["Production SaaS dependency graph intelligence engine."],
    githubUrl: "https://github.com/Rachit2912/node-atlas",
    featured: true,
    priority: 6,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "backend",
    cliPath: "~/projects/backend/node-atlas",
    cliCommands: {
      open: "cd ~/projects/backend/node-atlas",
      cat: "cat ~/projects/backend/node-atlas/README.md",
      cd: "cd ~/projects/backend/node-atlas"
    },
    readmeContent: `# NodeAtlas // Dependency Intelligence & Security Graph

Production-quality SaaS application that connects to GitHub repositories, analyzes JS/TS codebases, and builds persistent dependency graphs in CognoDB.
`
  },
  {
    id: "video-streaming",
    slug: "video-streaming",
    name: "Video Streaming Backend",
    shortDescription: "Node.js & Express video backend with FFmpeg transcoding, stream chunking, and JWT auth.",
    fullDescription: "A backend service for video platforms built with Node.js, Express, MongoDB, and FFmpeg enabling video uploads, transcoding into resolution tiers, and chunked streaming.",
    category: "backend",
    categoryLabel: "Backend & Media Pipelines",
    status: "Completed",
    year: "2025",
    languages: ["JavaScript"],
    frameworks: ["Express.js", "Node.js"],
    databases: ["MongoDB"],
    infrastructure: ["FFmpeg", "Cloudinary"],
    technologies: ["Node.js", "Express.js", "MongoDB", "FFmpeg", "Cloudinary", "JWT", "Multer"],
    problem: "High-definition video streaming requires background media transcoding, multi-resolution chunking, token authentication, and optimized disk streaming.",
    solution: "Architected a full Node.js video platform backend integrated with FFmpeg for background transcoding and MongoDB for video metadata indexing.",
    architecture: "Client Upload -> Multer Middleware -> Cloudinary Buffer -> FFmpeg Transcoding Worker -> MongoDB Metadata Index -> HTTP Chunked Video Piping.",
    keyFeatures: [
      "JWT-authenticated user registration and profile management",
      "FFmpeg integration for video transcoding and thumbnail generation",
      "Chunked HTTP adaptive video streaming pipeline",
      "Cloudinary storage integration",
      "MongoDB indexing for title and tag search"
    ],
    engineeringHighlights: [
      "Used Node.js stream piping to deliver video chunks without buffering entire media files into server memory."
    ],
    challenges: ["Managing background FFmpeg encoding jobs without stalling the Express event loop."],
    outcomes: ["Complete scalable video platform backend API."],
    githubUrl: "https://github.com/Rachit2912/video_streaming_app",
    featured: true,
    priority: 7,
    portfolioTier: "tier1_featured",
    cliCategoryFolder: "backend",
    cliPath: "~/projects/backend/video-streaming",
    cliCommands: {
      open: "cd ~/projects/backend/video-streaming",
      cat: "cat ~/projects/backend/video-streaming/README.md",
      cd: "cd ~/projects/backend/video-streaming"
    },
    readmeContent: `# Video Streaming Backend API

Backend system built using **Node.js**, **Express**, **MongoDB**, and **FFmpeg** enabling video upload, storage, transcoding, and real-time streaming.
`
  },

  // --- SECONDARY TECHNICAL PROJECTS ---
  {
    id: "genai-nutrition-app",
    slug: "genai-nutrition-app",
    name: "GenAI Nutrition App",
    shortDescription: "Streamlit AI app offering personalized diet plans and meal photo recognition powered by Gemini AI.",
    fullDescription: "A GenAI app offering personalized diet plans and nutritional guidance powered by AI, built during the SmartBridge AI/ML Internship. Live on Streamlit Cloud.",
    category: "ai",
    categoryLabel: "AI & Generative AI",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    frameworks: ["Streamlit"],
    databases: [],
    infrastructure: ["Google Gemini API", "Streamlit Cloud"],
    technologies: ["Python", "Streamlit", "Google Gemini AI API", "Pillow"],
    problem: "Manual calorie tracking is tedious; users benefit from instant image-based meal recognition and custom diet advice.",
    solution: "Built a Python Streamlit web app combining computer vision and Google Gemini AI to analyze meal photos and output dietary breakdowns.",
    architecture: "Streamlit UI -> Image Upload -> Google Gemini AI Vision API -> Caloric & Macro Breakdown -> Personal Goal Recommendation Output.",
    keyFeatures: [
      "Instant food photo macro and calorie breakdown",
      "Personalized diet plan generation based on fitness goals",
      "Interactive Streamlit web interface",
      "Live deployment on Streamlit Cloud"
    ],
    engineeringHighlights: ["Enriched visual model prompts to generate accurate nutritional breakdown tables."],
    challenges: ["Handling various food photo angles and multi-item meal detection."],
    outcomes: ["Key project deliverable of SmartBridge AI/ML Internship."],
    githubUrl: "https://github.com/Rachit2912/GenAI-Nutrition-App-",
    demoUrl: "https://nutrition-app.streamlit.app/",
    featured: false,
    priority: 8,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "ai",
    cliPath: "~/projects/ai/genai-nutrition-app",
    cliCommands: {
      open: "cd ~/projects/ai/genai-nutrition-app",
      cat: "cat ~/projects/ai/genai-nutrition-app/README.md",
      cd: "cd ~/projects/ai/genai-nutrition-app"
    },
    readmeContent: `# GenAI Nutrition Application

A GenAI app offering personalized diet plans and nutritional guidance powered by advanced AI technology (Streamlit + Gemini).
`
  },
  {
    id: "blogon",
    slug: "blogon",
    name: "BlogOn AWS Gemini App",
    shortDescription: "Express blog application deployed on AWS EC2 integrating Google Gemini API for AI summarization.",
    fullDescription: "Node.js and Express blogging web application deployed on an AWS EC2 instance, utilizing Google Gemini API to generate dynamic article summaries from text prompts.",
    category: "backend",
    categoryLabel: "Backend & Cloud AI",
    status: "Completed",
    year: "2024",
    languages: ["JavaScript"],
    frameworks: ["Node.js", "Express.js"],
    databases: ["MongoDB"],
    infrastructure: ["AWS EC2", "Google Gemini API"],
    technologies: ["Node.js", "Express.js", "AWS EC2", "Google Gemini API", "Bootstrap"],
    problem: "Readers need quick AI-generated summaries of long blog articles and dynamic text prompts.",
    solution: "Built BlogOn in Node.js/Express, deployed on an AWS EC2 compute instance, connecting directly to Google Gemini API for AI content summarization.",
    architecture: "Express Web App -> AWS EC2 Server Instance -> Google Gemini API Service -> AI Summarization Payload Response.",
    keyFeatures: [
      "AWS EC2 cloud deployment (`ec2-34-235-155-17.compute-1.amazonaws.com`)",
      "Google Gemini API integration for automated article summarization",
      "User blog publishing and comment interaction",
      "Responsive Bootstrap user interface"
    ],
    engineeringHighlights: ["Deployed and configured Node.js server environment directly on AWS EC2 Linux instances."],
    challenges: ["Managing API key security and environment variables in EC2 server deployments."],
    outcomes: ["Live cloud-hosted AI summarization web application."],
    githubUrl: "https://github.com/Rachit2912/BlogOn",
    demoUrl: "http://ec2-34-235-155-17.compute-1.amazonaws.com:3000/",
    featured: false,
    priority: 9,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "backend",
    cliPath: "~/projects/backend/blogon",
    cliCommands: {
      open: "cd ~/projects/backend/blogon",
      cat: "cat ~/projects/backend/blogon/README.md",
      cd: "cd ~/projects/backend/blogon"
    },
    readmeContent: `# BlogOn // AWS EC2 & Gemini API Blog App

Blog App utilizing Google Gemini API for automated AI text summarization, deployed on AWS EC2.
`
  },
  {
    id: "pad4note",
    slug: "pad4note",
    name: "Pad4Note Desktop Editor",
    shortDescription: "Native desktop text editor written in C++ and Qt 6 framework.",
    fullDescription: "Pad4Note is a desktop GUI text editor built with modern C++ and Qt 6, providing file management (new, open, save), custom dark theme styling, and text buffer statistics.",
    category: "cpp-systems",
    categoryLabel: "C++ & Qt Desktop GUI",
    status: "Completed",
    year: "2025",
    languages: ["C++"],
    frameworks: ["Qt 6"],
    databases: [],
    infrastructure: ["QMake / CMake"],
    technologies: ["C++", "Qt 6", "QTextEdit", "Native File Dialogs"],
    problem: "Lightweight, distraction-free desktop note utilities require fast native start times and responsive UI bindings.",
    solution: "Created Pad4Note using C++ and Qt 6, leveraging Qt Signal/Slot event bindings for native file IO handling.",
    architecture: "Qt Main Window GUI -> Qt Signal/Slot Event Loop -> Native C++ File IO Handlers -> Text Buffer State.",
    keyFeatures: [
      "Native desktop GUI application environment",
      "File management: create, open, edit, save text files",
      "Custom dark UI theme with clean typography",
      "Instant character and line count text statistics"
    ],
    engineeringHighlights: ["Utilized Qt Signal/Slot architecture for decoupled GUI event handling."],
    challenges: ["Ensuring cross-platform file path resolution across Windows and Linux."],
    outcomes: ["Clean native desktop application written in C++."],
    githubUrl: "https://github.com/Rachit2912/Pad4Note",
    featured: false,
    priority: 10,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "cpp-systems",
    cliPath: "~/projects/cpp-systems/pad4note",
    cliCommands: {
      open: "cd ~/projects/cpp-systems/pad4note",
      cat: "cat ~/projects/cpp-systems/pad4note/README.md",
      cd: "cd ~/projects/cpp-systems/pad4note"
    },
    readmeContent: `# Pad4Note : Notepad Clone in Qt and C++

Simple notepad application built using Qt 6 and modern C++ with essential text editing functions.
`
  },
  {
    id: "simpsons-character-recognition",
    slug: "simpsons-character-recognition",
    name: "Simpsons Character Recognition",
    shortDescription: "Computer Vision CNN model classifying 55K+ character images with 95% validation accuracy.",
    fullDescription: "Computer vision system trained on Kaggle Simpsons Character Dataset (55,000+ images) using PyTorch/Keras CNNs, achieving 95% classification accuracy across 20+ character classes. Research presented at SCIS 2025.",
    category: "cv",
    categoryLabel: "Computer Vision & Deep Learning",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    frameworks: ["PyTorch", "TensorFlow / Keras", "OpenCV"],
    databases: [],
    infrastructure: ["Kaggle GPU"],
    technologies: ["Python", "PyTorch", "Keras", "OpenCV", "Scikit-Learn"],
    problem: "Multi-class character classification in animated images involves handling variable lighting, occlusions, and severe class distribution imbalances.",
    solution: "Trained a Deep Convolutional Neural Network (CNN) with image data augmentation, reaching 95% validation accuracy.",
    architecture: "Image Preprocessing -> Augmentation Pipeline -> Multi-layer CNN Feature Extractor -> Softmax Classifier -> Evaluation Metrics.",
    keyFeatures: [
      "Custom CNN architecture with Batch Normalization & Dropout",
      "55,000+ Simpsons dataset image preprocessing",
      "95% validation classification accuracy",
      "Research paper foundation presented at SCIS 2025"
    ],
    engineeringHighlights: ["Applied Focal Loss to handle class imbalance in minority character training samples."],
    challenges: ["Preventing overfitting on smaller character categories."],
    outcomes: ["SCIS 2025 research presentation foundation."],
    githubUrl: "https://github.com/Rachit2912/Character-Recognition-in-The-Simpsons-Computer-Vision-Project",
    featured: false,
    priority: 11,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "cv",
    cliPath: "~/projects/cv/simpsons-character-recognition",
    cliCommands: {
      open: "cd ~/projects/cv/simpsons-character-recognition",
      cat: "cat ~/projects/cv/simpsons-character-recognition/README.md",
      cd: "cd ~/projects/cv/simpsons-character-recognition"
    },
    readmeContent: `# Simpsons Character Recognition // Computer Vision

Deep CNN model trained on 55,000+ Simpsons character images reaching 95% classification accuracy.
`
  },
  {
    id: "deepfake-filter",
    slug: "deepfake-filter",
    name: "DeepFake Filter",
    shortDescription: "Real-time OpenCV & dlib 68-point facial landmark warping application.",
    fullDescription: "Real-time computer vision deepfake filter applied on live webcam streams using OpenCV face detection, dlib 68 facial landmark detector, Delaunay triangulation, and Poisson blending.",
    category: "cv",
    categoryLabel: "Computer Vision / Real-Time",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    frameworks: ["OpenCV", "dlib"],
    databases: [],
    infrastructure: ["NumPy"],
    technologies: ["Python", "OpenCV", "dlib", "68 Facial Landmarks", "NumPy"],
    problem: "Real-time facial manipulation requires low-latency landmark tracking, Delaunay triangulation, and seamless boundary blending.",
    solution: "Engineered a real-time CV pipeline utilizing dlib's 68-point detector to map, warp, and blend target faces onto live video frames.",
    architecture: "Webcam Stream -> OpenCV Haar Cascades -> dlib 68-point Detector -> Delaunay Triangulation -> Affine Warp -> Seamless Cloning.",
    keyFeatures: [
      "Real-time 68 facial landmark tracking from live webcam feeds",
      "Delaunay triangulation for face mesh warping",
      "Seamless Poisson cloning for natural skin texture blending",
      "Recorded video demo available on Google Drive"
    ],
    engineeringHighlights: ["Subsampled video frames and calculated triangulation matrices only when tracking confidence dipped."],
    challenges: ["Eliminating boundary flickering during high-speed facial rotation."],
    outcomes: ["Interactive computer vision facial warping filter."],
    githubUrl: "https://github.com/Rachit2912/DeepFake-Filter",
    demoUrl: "https://drive.google.com/file/d/1TLkp1uSyE1lulBe9NCM12O_ZVgOT80bx/view?usp=sharing",
    featured: false,
    priority: 12,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "cv",
    cliPath: "~/projects/cv/deepfake-filter",
    cliCommands: {
      open: "cd ~/projects/cv/deepfake-filter",
      cat: "cat ~/projects/cv/deepfake-filter/README.md",
      cd: "cd ~/projects/cv/deepfake-filter"
    },
    readmeContent: `# DeepFake Filter // Real-Time Computer Vision

Deepfake filter using OpenCV face detection, dlib 68-landmark detector, Delaunay triangulation, and seamless cloning.
`
  },
  {
    id: "yolov9-deepsort",
    slug: "yolov9-deepsort",
    name: "YOLOv9 + DeepSORT Object Tracking",
    shortDescription: "Real-time object detection & tracking pipeline integrated in Google Colab.",
    fullDescription: "Real-time multi-object detection and tracking system combining YOLOv9 for object bounding box detection and DeepSORT for persistent ID tracking across video frames.",
    category: "cv",
    categoryLabel: "Computer Vision / Tracking",
    status: "Completed",
    year: "2024",
    languages: ["Python"],
    frameworks: ["PyTorch", "OpenCV"],
    databases: [],
    infrastructure: ["Google Colab"],
    technologies: ["Python", "YOLOv9", "DeepSORT", "PyTorch", "OpenCV"],
    problem: "Tracking dynamic multi-class objects across video streams with persistent ID assignment during temporal occlusions.",
    solution: "Integrated state-of-the-art YOLOv9 detector with DeepSORT Kalman filter tracking in an interactive Google Colab notebook.",
    architecture: "Video Frames -> YOLOv9 Bounding Box Predictor -> Kalman Filter Trajectory State -> DeepSORT Feature Re-ID -> Persistent Object Tracker.",
    keyFeatures: [
      "YOLOv9 object detection fine-tuning",
      "DeepSORT Kalman filter trajectory estimation",
      "Multi-object persistent ID tracking across frame occlusions",
      "Interactive Google Colab notebook workflow"
    ],
    engineeringHighlights: ["Utilized DeepSORT appearance feature embeddings to preserve IDs during object occlusion."],
    challenges: ["Maintaining real-time processing frame rates."],
    outcomes: ["High-accuracy object detection and tracking pipeline."],
    githubUrl: "https://github.com/Rachit2912/YOLOv9_Deepsort",
    demoUrl: "https://colab.research.google.com/drive/1lp3bGxLWAq26XZmoKZW6vvNaZyXrZIKf?usp=sharing",
    featured: false,
    priority: 13,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "cv",
    cliPath: "~/projects/cv/yolov9-deepsort",
    cliCommands: {
      open: "cd ~/projects/cv/yolov9-deepsort",
      cat: "cat ~/projects/cv/yolov9-deepsort/README.md",
      cd: "cd ~/projects/cv/yolov9-deepsort"
    },
    readmeContent: `# YOLOv9 + DeepSORT Object Tracking

Real-time object detection and tracking pipeline combining YOLOv9 and DeepSORT, provided as an interactive Google Colab notebook.
`
  },
  {
    id: "amazon-ml-challenge",
    slug: "amazon-ml-challenge",
    name: "Amazon ML Challenge 2024 Solution",
    shortDescription: "ML model extracting entity values from product images for Amazon ML Challenge 2024.",
    fullDescription: "Machine learning solution developed by Team Seven Nation Army for the Amazon ML Challenge 2024, extracting text and entity metrics (weight, dimensions, voltage) from e-commerce product images.",
    category: "ml",
    categoryLabel: "Machine Learning & OCR",
    status: "Completed",
    year: "2024",
    languages: ["Python", "Jupyter Notebook"],
    frameworks: ["PyTorch", "EasyOCR / Tesseract", "OpenCV"],
    databases: [],
    infrastructure: ["Jupyter"],
    technologies: ["Python", "PyTorch", "OCR", "OpenCV", "Regex Entity Extractor"],
    problem: "Extracting precise structured entity attributes (weight, volume, dimensions) from noisy e-commerce product packaging images.",
    solution: "Built a hybrid OCR and ML pipeline combining image pre-processing, text detection, and regex entity post-processing.",
    architecture: "Product Image -> Contrast Enhancement -> Text Detection OCR -> Regular Expression Parsing -> Entity Metric Standardizer.",
    keyFeatures: [
      "Image contrast and bounding box preprocessing pipeline",
      "OCR text extraction from packaging labels",
      "Regex-based unit standardization (grams, kg, cm, volts)",
      "Tested on Amazon ML Challenge 2024 competition dataset"
    ],
    engineeringHighlights: ["Customized regex entity parsers to normalize non-standard manufacturer unit formatting."],
    challenges: ["Handling low-resolution label images and glare."],
    outcomes: ["Official competition solution for Amazon ML Challenge 2024."],
    githubUrl: "https://github.com/Rachit2912/Amazon_ML_challenge",
    featured: false,
    priority: 14,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "ml",
    cliPath: "~/projects/ml/amazon-ml-challenge",
    cliCommands: {
      open: "cd ~/projects/ml/amazon-ml-challenge",
      cat: "cat ~/projects/ml/amazon-ml-challenge/README.md",
      cd: "cd ~/projects/ml/amazon-ml-challenge"
    },
    readmeContent: `# Amazon ML Challenge 2024 Solution

Machine learning model extracting entity values (weight, volume, dimensions) from product images.
`
  },
  {
    id: "blogify",
    slug: "blogify",
    name: "Blogify CMS Engine",
    shortDescription: "Full-Stack Express & EJS blogging application with user auth, comments, and Docker.",
    fullDescription: "Full-stack blogging web application built with Node.js, Express, MongoDB, EJS templates, and Docker containerization supporting user authentication, post publishing, and comments.",
    category: "full-stack",
    categoryLabel: "Full-Stack & CMS Engine",
    status: "Completed",
    year: "2025",
    languages: ["JavaScript"],
    frameworks: ["Express.js", "EJS"],
    databases: ["MongoDB"],
    infrastructure: ["Docker"],
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Docker", "Cookie Auth"],
    problem: "Lightweight blogging platforms need fast server-side rendering, session authentication, and containerized deployment.",
    solution: "Developed Blogify using Express MVC architecture, EJS views, and Docker Compose.",
    architecture: "Client Request -> Express Middleware -> Cookie Session Auth -> MongoDB Schema -> EJS Server Rendered HTML.",
    keyFeatures: [
      "User signup, login, and cookie-based authentication",
      "Blog post publishing with cover image upload",
      "Dynamic comment thread under blog posts",
      "Docker containerized setup with Dockerfile"
    ],
    engineeringHighlights: ["Implemented server-side EJS rendering for fast initial page load times."],
    challenges: ["Sanitizing user inputs to prevent XSS injection attacks."],
    outcomes: ["Clean Dockerized full-stack blog application."],
    githubUrl: "https://github.com/Rachit2912/blogify",
    featured: false,
    priority: 15,
    portfolioTier: "tier2_secondary",
    cliCategoryFolder: "full-stack",
    cliPath: "~/projects/full-stack/blogify",
    cliCommands: {
      open: "cd ~/projects/full-stack/blogify",
      cat: "cat ~/projects/full-stack/blogify/README.md",
      cd: "cd ~/projects/full-stack/blogify"
    },
    readmeContent: `# Blogify // Express & EJS Blog App

Full-stack blog application built using Node.js, Express, MongoDB, EJS templating, and Docker.
`
  },

  // --- HOBBY, DOTFILES & FUN EXPERIMENTS ---
  {
    id: "product-explorer",
    slug: "product-explorer",
    name: "Product Explorer",
    shortDescription: "Next.js 14 + Zustand + LocalStorage e-commerce cart interface.",
    fullDescription: "A mini e-commerce web app built with Next.js 14 (App Router), featuring Zustand state management, optimistic UI updates, and LocalStorage cart persistence.",
    category: "full-stack",
    categoryLabel: "Full-Stack & Next.js App Router",
    status: "Completed",
    year: "2025",
    languages: ["TypeScript"],
    frameworks: ["Next.js 14", "React", "Tailwind CSS"],
    databases: ["LocalStorage"],
    infrastructure: ["Vercel"],
    technologies: ["Next.js 14", "TypeScript", "Zustand", "Tailwind CSS"],
    problem: "Demonstrating clean client-side state persistence and optimistic UI cart management in Next.js App Router.",
    solution: "Created Product Explorer with Zustand store subscribers sync'd to LocalStorage.",
    architecture: "Next.js App Router -> Zustand Store -> LocalStorage Sync -> Responsive Tailwind UI.",
    keyFeatures: ["Optimistic UI cart additions", "LocalStorage persistence", "Live Vercel demo"],
    engineeringHighlights: ["Optimistic UI updates for instant feedback on cart actions."],
    challenges: ["Hydration mismatch resolution with LocalStorage in Next.js SSR."],
    outcomes: ["Deployed frontend state management experiment."],
    githubUrl: "https://github.com/Rachit2912/Product-Explorer",
    demoUrl: "https://product-explorer-alpha.vercel.app",
    featured: false,
    priority: 16,
    portfolioTier: "tier3_experiments",
    cliCategoryFolder: "full-stack",
    cliPath: "~/projects/full-stack/product-explorer",
    cliCommands: {
      open: "cd ~/projects/full-stack/product-explorer",
      cat: "cat ~/projects/full-stack/product-explorer/README.md",
      cd: "cd ~/projects/full-stack/product-explorer"
    },
    readmeContent: `# Product Explorer // Next.js & Zustand Cart Demo

Mini e-commerce web application featuring Next.js 14 App Router, Zustand state management, and LocalStorage persistence.
`
  },
  {
    id: "smart-water-bottle",
    slug: "smart-water-bottle",
    name: "Smart Water Bottle System",
    shortDescription: "Python + Arduino IoT hydration tracking system with Flask backend & PyWhatKit WhatsApp alerts.",
    fullDescription: "Full-stack IoT water bottle tracking system built with Arduino C++ sensor logging, Flask REST backend, and PyWhatKit automated WhatsApp hydration reminders.",
    category: "full-stack",
    categoryLabel: "Full-Stack & IoT Systems",
    status: "Completed",
    year: "2024",
    languages: ["Python", "C++", "Arduino C/C++"],
    frameworks: ["Flask", "Arduino C/C++"],
    databases: [],
    infrastructure: ["Arduino", "Serial Port", "IoT Sensors"],
    technologies: ["Arduino", "Arduino C/C++", "Python", "Python Arduino Module", "Flask", "PyWhatKit", "IoT Sensors", "OpenCV"],
    problem: "Automating hydration tracking with hardware weight sensors and automated messaging alerts.",
    solution: "Connected Arduino load cell sensor outputs to Python backend for hydration logging.",
    architecture: "Arduino Load Cell -> Serial Port -> Python Backend -> PyWhatKit WhatsApp Alert.",
    keyFeatures: ["Arduino weight sensor reading", "Python hydration log plotter", "Automated WhatsApp reminders"],
    engineeringHighlights: ["Serial communication reading between Arduino microcontrollers and Python."],
    challenges: ["Handling sensor calibration drift."],
    outcomes: ["Working IoT hydration prototype."],
    githubUrl: "https://github.com/Rachit2912/Smart_Water_Bottle",
    featured: false,
    priority: 17,
    portfolioTier: "tier3_experiments",
    cliCategoryFolder: "full-stack",
    cliPath: "~/projects/full-stack/smart-water-bottle",
    cliCommands: {
      open: "cd ~/projects/full-stack/smart-water-bottle",
      cat: "cat ~/projects/full-stack/smart-water-bottle/README.md",
      cd: "cd ~/projects/full-stack/smart-water-bottle"
    },
    readmeContent: `# Smart Water Bottle System

IoT hydration tracking system combining Arduino C++ hardware sensor logging, Flask backend, and Python WhatsApp reminders.
`
  },
  {
    id: "zomato-clone",
    slug: "zomato-clone",
    name: "Zomato Frontend Clone",
    shortDescription: "Responsive HTML5/CSS3 frontend clone of Zomato website.",
    fullDescription: "A responsive static frontend clone of the Zomato restaurant discovery website built purely with HTML5 and CSS3.",
    category: "developer-tools",
    categoryLabel: "Frontend / HTML & CSS",
    status: "Completed",
    year: "2024",
    languages: ["HTML", "CSS"],
    frameworks: [],
    databases: [],
    infrastructure: ["GitHub Pages"],
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    problem: "Recreating complex commercial web layouts using raw CSS Flexbox and Grid.",
    solution: "Developed a pixel-replica static frontend layout of Zomato.",
    architecture: "HTML5 Semantic Markup -> CSS Grid & Flexbox Layout.",
    keyFeatures: ["Responsive restaurant cards", "GitHub Pages deployment"],
    engineeringHighlights: ["Pure CSS layout without external framework dependencies."],
    challenges: ["Cross-browser CSS media query alignment."],
    outcomes: ["Deployed on GitHub Pages."],
    githubUrl: "https://github.com/Rachit2912/Zomato-FrontEnd-Clone",
    demoUrl: "https://rachit2912.github.io/Zomato-FrontEnd-Clone/",
    featured: false,
    priority: 18,
    portfolioTier: "tier3_experiments",
    cliCategoryFolder: "experiments",
    cliPath: "~/projects/experiments/zomato-clone",
    cliCommands: {
      open: "cd ~/projects/experiments/zomato-clone",
      cat: "cat ~/projects/experiments/zomato-clone/README.md",
      cd: "cd ~/projects/experiments/zomato-clone"
    },
    readmeContent: `# Zomato Frontend Clone

Responsive frontend clone of Zomato built using HTML5 and CSS3.
`
  },
  {
    id: "archlinux-dotfiles",
    slug: "archlinux-dotfiles",
    name: "Arch Linux Hyprland Dotfiles",
    shortDescription: "Personal reproducible Arch Linux ecosystem featuring Hyprland WM, Neovim, and Waybar.",
    fullDescription: "Fully customized, reproducible Arch Linux environment featuring Hyprland window manager, Neovim IDE setup, Waybar, and custom shell/automation scripts.",
    category: "hobby",
    categoryLabel: "Hobby / Arch Linux Dotfiles",
    status: "Active",
    year: "2025",
    languages: ["Lua", "Bash"],
    frameworks: ["Hyprland", "Neovim"],
    databases: [],
    infrastructure: ["Arch Linux", "Waybar"],
    technologies: ["Arch Linux", "Hyprland", "Lua", "Neovim", "Waybar", "Kitty", "Bash"],
    problem: "Maintaining a reproducible, high-performance developer workspace across Linux installations.",
    solution: "Built modular dotfiles with automated installation scripts and Hyprland keybindings.",
    architecture: "Hyprland Config -> Waybar Status Bar -> Neovim Lua Plugins -> Kitty Terminal.",
    keyFeatures: ["Hyprland tiling window manager keybindings", "Lua Neovim IDE setup", "Waybar telemetry widgets"],
    engineeringHighlights: ["Reproducible shell environment configuration."],
    challenges: ["Dual-boot display server compatibility."],
    outcomes: ["Personal Linux development workspace."],
    githubUrl: "https://github.com/Rachit2912/rachit_archlinux-dotfiles",
    featured: false,
    priority: 19,
    portfolioTier: "tier3_experiments",
    cliCategoryFolder: "hobby",
    cliPath: "~/projects/hobby/archlinux-dotfiles",
    cliCommands: {
      open: "cd ~/projects/hobby/archlinux-dotfiles",
      cat: "cat ~/projects/hobby/archlinux-dotfiles/README.md",
      cd: "cd ~/projects/hobby/archlinux-dotfiles"
    },
    readmeContent: `# Arch Linux Dotfiles

Custom Hyprland, Neovim (Lua), Waybar, and Kitty environment for Arch Linux.
`
  }
];
