/**
 * PROJECTHELP - PROJECT CONFIGURATION
 * Keep only project name and domain
 * No pricing - quotations sent after customer message
 * EDIT: Add new projects by copying and modifying items in the PROJECTS array
 */

export interface Project {
  id: string;
  name: string;
  domain: 'AI/ML' | 'Cybersecurity' | 'DBMS' | 'Web Development' | 'Mobile App' | 'EC' | 'Finance' | 'Cloud Computing' | 'Data Science' | 'IoT' | 'Blockchain' | 'BCom' | 'BBA' | 'Marketing Projects' | 'Other';
}

/**
 * EDIT PROJECTS HERE
 * Add/Remove projects in this array
 * Format: { id: 'unique-id', name: 'Project Name', domain: 'Domain' }
 */
export const mockProjects: Project[] = [
  // AI/ML Projects
  {
    id: 'proj-001',
    name: 'Mini - Sentiment Analysis using NLP',
    domain: 'AI/ML',
  },
  {
    id: 'proj-002',
    name: 'Mini - Image Classification with CNN',
    domain: 'AI/ML',
  },
  {
    id: 'proj-003',
    name: 'Mini - Chatbot Development with LSTM',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004',
    name: 'Mini - Recommendation System Engine',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004a',
    name: 'Mini - Voice Recognition System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004b',
    name: 'Mini - Handwriting Recognition Model',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004c',
    name: 'Mini - Spam Email Classification',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004d',
    name: 'Mini - Movie Recommendation System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004e',
    name: 'Mini - Weather Prediction Model',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004f',
    name: 'Mini - Iris Flower Classification',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004g',
    name: 'Advanced - Speech Emotion Recognition',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004h',
    name: 'Advanced - Fraud Detection in Banking',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004i',
    name: 'Advanced - Medical Image Diagnosis',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004j',
    name: 'Advanced - Time Series Forecasting',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004k',
    name: 'Advanced - Object Detection System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004l',
    name: 'Advanced - Facial Recognition System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004m',
    name: 'Advanced - Reinforcement Learning Game',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004n',
    name: 'Advanced - Sentiment Analysis on Twitter',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004o',
    name: 'Advanced - Stock Price Prediction',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004p',
    name: 'Advanced - Autonomous Vehicle Navigation',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004q',
    name: 'Advanced - Text Generation with GPT',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004r',
    name: 'Advanced - Music Generation Model',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004s',
    name: 'Advanced - Gesture Recognition System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004t',
    name: 'Advanced - Drone Path Planning',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004u',
    name: 'Advanced - Customer Churn Prediction',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004v',
    name: 'Advanced - Traffic Sign Recognition',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004w',
    name: 'Advanced - Crowd Density Estimation',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004x',
    name: 'Advanced - Deepfake Detection',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004y',
    name: 'Advanced - Sentiment-Based Playlist Generator',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004z',
    name: 'Advanced - Disease Prediction Healthcare',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004aa',
    name: 'Advanced - Virtual Try-On with AR',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ab',
    name: 'Advanced - Anomaly Detection System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ac',
    name: 'Advanced - Resume Screening Bot',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ad',
    name: 'Advanced - Chatbot with Context Memory',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ae',
    name: 'Advanced - Fashion Trend Analyzer',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004af',
    name: 'Advanced - Loan Default Prediction',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ag',
    name: 'Advanced - Sentiment Analysis Twitter',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ah',
    name: 'Advanced - Image Captioning System',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004ai',
    name: 'Advanced - Crowd Counting from Video',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004aj',
    name: 'Advanced - Video Action Recognition',
    domain: 'AI/ML',
  },
  // Cybersecurity Projects
  {
    id: 'proj-005',
    name: 'Mini - Network Intrusion Detection System',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-006',
    name: 'Mini - Encryption Algorithm Implementation',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-007',
    name: 'Mini - Vulnerability Assessment Tool',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008',
    name: 'Mini - Multi-factor Authentication System',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008a',
    name: 'Mini - Password Strength Validator',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008b',
    name: 'Mini - SSL Certificate Checker',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008c',
    name: 'Mini - Port Scanner Tool',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008d',
    name: 'Mini - Firewall Rules Analyzer',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008e',
    name: 'Mini - Hash Cracking Simulator',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008f',
    name: 'Mini - VPN Connection Analyzer',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008g',
    name: 'Advanced - DDoS Attack Mitigation',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008h',
    name: 'Advanced - Malware Detection Engine',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008i',
    name: 'Advanced - Penetration Testing Report',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008j',
    name: 'Advanced - Zero-Day Vulnerability Analysis',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008k',
    name: 'Advanced - Blockchain Security Audit',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008l',
    name: 'Advanced - IoT Device Security',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008m',
    name: 'Advanced - Cloud Security Framework',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008n',
    name: 'Advanced - Social Engineering Defense',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008o',
    name: 'Advanced - Ransomware Protection System',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008p',
    name: 'Advanced - Network Segmentation Plan',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008q',
    name: 'Advanced - API Security Testing',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008r',
    name: 'Advanced - Mobile App Security Audit',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008s',
    name: 'Advanced - Quantum-Safe Cryptography',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008t',
    name: 'Advanced - Incident Response Plan',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008u',
    name: 'Advanced - Security Operations Center',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008v',
    name: 'Advanced - Threat Intelligence Platform',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008w',
    name: 'Advanced - Data Exfiltration Prevention',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008x',
    name: 'Advanced - Secure Boot Implementation',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008y',
    name: 'Advanced - Biometric Security System',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008z',
    name: 'Advanced - Compliance Auditing Tool',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008aa',
    name: 'Advanced - Container Security Suite',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ab',
    name: 'Advanced - Supply Chain Verification',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ac',
    name: 'Advanced - Code Obfuscation Tool',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ad',
    name: 'Advanced - Digital Forensics System',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ae',
    name: 'Advanced - Hardware Security Module Integration',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008af',
    name: 'Advanced - Vulnerability Assessment Framework',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ag',
    name: 'Advanced - Network Forensics Analysis',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ah',
    name: 'Advanced - Secure Code Analysis',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008ai',
    name: 'Advanced - Red Team Simulation',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008aj',
    name: 'Advanced - Cyber Insurance Assessment',
    domain: 'Cybersecurity',
  },
  // DBMS Projects
  {
    id: 'proj-009',
    name: 'Mini - E-Commerce Database Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-010',
    name: 'Mini - Hospital Management System Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-011',
    name: 'Mini - Query Optimization & Indexing',
    domain: 'DBMS',
  },
  {
    id: 'proj-012',
    name: 'Mini - NoSQL Database Implementation',
    domain: 'DBMS',
  },
  {
    id: 'proj-012a',
    name: 'Mini - College Management System DB',
    domain: 'DBMS',
  },
  {
    id: 'proj-012b',
    name: 'Mini - Library Database Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-012c',
    name: 'Mini - Banking Transaction DB',
    domain: 'DBMS',
  },
  {
    id: 'proj-012d',
    name: 'Mini - Employee Payroll Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-012e',
    name: 'Mini - Inventory Management DB',
    domain: 'DBMS',
  },
  {
    id: 'proj-012f',
    name: 'Mini - Restaurant Ordering System DB',
    domain: 'DBMS',
  },
  {
    id: 'proj-012g',
    name: 'Advanced - Distributed Database System',
    domain: 'DBMS',
  },
  {
    id: 'proj-012h',
    name: 'Advanced - Data Warehouse Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-012i',
    name: 'Advanced - Database Replication & Failover',
    domain: 'DBMS',
  },
  {
    id: 'proj-012j',
    name: 'Advanced - Sharding Architecture',
    domain: 'DBMS',
  },
  {
    id: 'proj-012k',
    name: 'Advanced - Time-Series Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-012l',
    name: 'Advanced - Graph Database Modeling',
    domain: 'DBMS',
  },
  {
    id: 'proj-012m',
    name: 'Advanced - ETL Pipeline Development',
    domain: 'DBMS',
  },
  {
    id: 'proj-012n',
    name: 'Advanced - Database Performance Tuning',
    domain: 'DBMS',
  },
  {
    id: 'proj-012o',
    name: 'Advanced - Multi-tenant Database Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-012p',
    name: 'Advanced - Real-time Analytics Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-012q',
    name: 'Advanced - Blockchain Data Storage',
    domain: 'DBMS',
  },
  {
    id: 'proj-012r',
    name: 'Advanced - Machine Learning Data Pipeline',
    domain: 'DBMS',
  },
  {
    id: 'proj-012s',
    name: 'Advanced - Document Store Implementation',
    domain: 'DBMS',
  },
  {
    id: 'proj-012t',
    name: 'Advanced - Cache Management System',
    domain: 'DBMS',
  },
  {
    id: 'proj-012u',
    name: 'Advanced - Database Backup & Recovery',
    domain: 'DBMS',
  },
  {
    id: 'proj-012v',
    name: 'Advanced - Columnar Database Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-012w',
    name: 'Advanced - Search Engine Integration',
    domain: 'DBMS',
  },
  {
    id: 'proj-012x',
    name: 'Advanced - Streaming Database Architecture',
    domain: 'DBMS',
  },
  {
    id: 'proj-012y',
    name: 'Advanced - Federated Database Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-012z',
    name: 'Advanced - IoT Data Management',
    domain: 'DBMS',
  },
  {
    id: 'proj-012aa',
    name: 'Advanced - Temporal Database Systems',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ab',
    name: 'Advanced - Geospatial Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ac',
    name: 'Advanced - Vector Database for AI',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ad',
    name: 'Advanced - Database Governance Framework',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ae',
    name: 'Advanced - Polyglot Persistence Architecture',
    domain: 'DBMS',
  },
  {
    id: 'proj-012af',
    name: 'Advanced - OLAP Data Cube Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ag',
    name: 'Advanced - Master Data Management',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ah',
    name: 'Advanced - Data Integration Framework',
    domain: 'DBMS',
  },
  {
    id: 'proj-012ai',
    name: 'Advanced - Blockchain Ledger Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-012aj',
    name: 'Advanced - Time-Dimension Modeling',
    domain: 'DBMS',
  },
  // Web Development Projects
  {
    id: 'proj-013',
    name: 'Mini - Full-Stack E-Commerce Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-014',
    name: 'Mini - Social Media Application',
    domain: 'Web Development',
  },
  {
    id: 'proj-015',
    name: 'Mini - Project Management Tool',
    domain: 'Web Development',
  },
  {
    id: 'proj-016',
    name: 'Mini - Real-time Collaboration Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-016a',
    name: 'Mini - Weather Dashboard App',
    domain: 'Web Development',
  },
  {
    id: 'proj-016b',
    name: 'Mini - Blog Platform with Comments',
    domain: 'Web Development',
  },
  {
    id: 'proj-016c',
    name: 'Mini - Todo List with Categories',
    domain: 'Web Development',
  },
  {
    id: 'proj-016d',
    name: 'Mini - Photo Gallery Application',
    domain: 'Web Development',
  },
  {
    id: 'proj-016e',
    name: 'Mini - Chat Application with WebSocket',
    domain: 'Web Development',
  },
  {
    id: 'proj-016f',
    name: 'Mini - Quiz Application with Scoring',
    domain: 'Web Development',
  },
  {
    id: 'proj-016g',
    name: 'Advanced - Video Streaming Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-016h',
    name: 'Advanced - Job Portal with Filter',
    domain: 'Web Development',
  },
  {
    id: 'proj-016i',
    name: 'Advanced - Real Estate Marketplace',
    domain: 'Web Development',
  },
  {
    id: 'proj-016j',
    name: 'Advanced - Content Management System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016k',
    name: 'Advanced - Online Voting System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016l',
    name: 'Advanced - Fitness Tracking Dashboard',
    domain: 'Web Development',
  },
  {
    id: 'proj-016m',
    name: 'Advanced - Crowdfunding Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-016n',
    name: 'Advanced - Travel Booking System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016o',
    name: 'Advanced - Knowledge Base Wiki',
    domain: 'Web Development',
  },
  {
    id: 'proj-016p',
    name: 'Advanced - Auction Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-016q',
    name: 'Advanced - Code Collaboration IDE',
    domain: 'Web Development',
  },
  {
    id: 'proj-016r',
    name: 'Advanced - Course Learning Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-016s',
    name: 'Advanced - Movie Review Portal',
    domain: 'Web Development',
  },
  {
    id: 'proj-016t',
    name: 'Advanced - Restaurant Reservation System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016u',
    name: 'Advanced - Analytics Dashboard',
    domain: 'Web Development',
  },
  {
    id: 'proj-016v',
    name: 'Advanced - Social Network with Messaging',
    domain: 'Web Development',
  },
  {
    id: 'proj-016w',
    name: 'Advanced - Document Collaboration Editor',
    domain: 'Web Development',
  },
  {
    id: 'proj-016x',
    name: 'Advanced - Appointment Booking System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016y',
    name: 'Advanced - Expense Sharing App',
    domain: 'Web Development',
  },
  {
    id: 'proj-016z',
    name: 'Advanced - Recipe Sharing Network',
    domain: 'Web Development',
  },
  {
    id: 'proj-016aa',
    name: 'Advanced - Music Streaming Service',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ab',
    name: 'Advanced - Event Management Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ac',
    name: 'Advanced - Fitness Community App',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ad',
    name: 'Advanced - Financial Portfolio Manager',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ae',
    name: 'Advanced - Habit Tracking Dashboard',
    domain: 'Web Development',
  },
  {
    id: 'proj-016af',
    name: 'Advanced - NFT Marketplace Frontend',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ag',
    name: 'Advanced - AI Chatbot Interface',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ah',
    name: 'Advanced - Real-time Notification System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016ai',
    name: 'Advanced - Dark Mode Toggle System',
    domain: 'Web Development',
  },
  {
    id: 'proj-016aj',
    name: 'Advanced - Progressive Web App',
    domain: 'Web Development',
  },
  // Mobile App Projects
  {
    id: 'proj-017',
    name: 'Mini - Fitness Tracking Mobile App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-018',
    name: 'Mini - Weather Forecast Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-019',
    name: 'Mini - To-Do List Manager App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020',
    name: 'Mini - Expense Tracker Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020a',
    name: 'Mini - Note Taking App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020b',
    name: 'Mini - Calculator with History',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020c',
    name: 'Mini - Reminder & Notification App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020d',
    name: 'Mini - Habit Tracker App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020e',
    name: 'Mini - Quiz Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020f',
    name: 'Mini - Unit Converter App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020g',
    name: 'Advanced - Online Shopping App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020h',
    name: 'Advanced - Social Networking App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020i',
    name: 'Advanced - Chat & Messaging App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020j',
    name: 'Advanced - Music Player with Playlist',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020k',
    name: 'Advanced - Video Streaming App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020l',
    name: 'Advanced - Photo Editing App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020m',
    name: 'Advanced - Gaming App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020n',
    name: 'Advanced - Food Delivery App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020o',
    name: 'Advanced - Ride Sharing App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020p',
    name: 'Advanced - Hotel Booking App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020q',
    name: 'Advanced - Movie Ticket Booking',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020r',
    name: 'Advanced - Health & Fitness App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020s',
    name: 'Advanced - Banking Mobile App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020t',
    name: 'Advanced - News Reader App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020u',
    name: 'Advanced - Language Learning App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020v',
    name: 'Advanced - Meditation & Mindfulness',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020w',
    name: 'Advanced - Travel Planning App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020x',
    name: 'Advanced - Virtual Assistant App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020y',
    name: 'Advanced - Dating Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020z',
    name: 'Advanced - Job Search Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020aa',
    name: 'Advanced - Real Estate App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ab',
    name: 'Advanced - Portfolio Tracker App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ac',
    name: 'Advanced - Appointment Scheduling',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ad',
    name: 'Advanced - File Sharing Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ae',
    name: 'Advanced - Cryptocurrency Wallet',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020af',
    name: 'Advanced - Augmented Reality App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ag',
    name: 'Advanced - Offline-First App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ah',
    name: 'Advanced - Native Performance Tracker',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020ai',
    name: 'Advanced - Cross-Platform Framework',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020aj',
    name: 'Advanced - Backend Sync Service',
    domain: 'Mobile App',
  },
  // EC Projects
  {
    id: 'proj-021',
    name: 'Smart Irrigation Controller using Sensors',
    domain: 'EC',
  },
  {
    id: 'proj-022',
    name: 'RFID-Based Attendance System',
    domain: 'EC',
  },
  {
    id: 'proj-023',
    name: 'IoT-Based Home Security Alert',
    domain: 'EC',
  },
  {
    id: 'proj-024',
    name: 'Wireless Notice Board with GSM',
    domain: 'EC',
  },
  // Finance Projects
  {
    id: 'proj-025',
    name: 'Investment Portfolio Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-026',
    name: 'Risk Assessment Model for Loans',
    domain: 'Finance',
  },
  {
    id: 'proj-027',
    name: 'Personal Budgeting & Savings Plan',
    domain: 'Finance',
  },
  {
    id: 'proj-028',
    name: 'Mutual Fund Performance Report',
    domain: 'Finance',
  },
  // Cloud Computing Projects
  {
    id: 'proj-029',
    name: 'Mini - Scalable Web Application on AWS',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-030',
    name: 'Mini - Kubernetes Microservices Architecture',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-031',
    name: 'Mini - Serverless Function Implementation',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032',
    name: 'Mini - Cloud Storage Solution',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032a',
    name: 'Mini - Docker Container Setup',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032b',
    name: 'Mini - CI/CD Pipeline Setup',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032c',
    name: 'Mini - Load Balancer Configuration',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032d',
    name: 'Mini - Cloud Database Migration',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032e',
    name: 'Mini - API Gateway Implementation',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032f',
    name: 'Mini - Auto-scaling Setup',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032g',
    name: 'Advanced - Multi-cloud Architecture',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032h',
    name: 'Advanced - Cloud Cost Optimization',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032i',
    name: 'Advanced - Disaster Recovery Plan',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032j',
    name: 'Advanced - Edge Computing Setup',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032k',
    name: 'Advanced - Service Mesh Implementation',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032l',
    name: 'Advanced - Cloud Security Framework',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032m',
    name: 'Advanced - Hybrid Cloud Solution',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032n',
    name: 'Advanced - Serverless Analytics',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032o',
    name: 'Advanced - Cloud-native Application',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032p',
    name: 'Advanced - Database Replication',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032q',
    name: 'Advanced - Terraform IaC Setup',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032r',
    name: 'Advanced - Blockchain on Cloud',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032s',
    name: 'Advanced - Machine Learning Pipeline',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032t',
    name: 'Advanced - Real-time Data Processing',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032u',
    name: 'Advanced - Cloud Compliance Audit',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032v',
    name: 'Advanced - Distributed Cache System',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032w',
    name: 'Advanced - Message Queue Architecture',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032x',
    name: 'Advanced - Monitoring & Logging',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032y',
    name: 'Advanced - Quantum Computing Integration',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032z',
    name: 'Advanced - Fog Computing Setup',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032aa',
    name: 'Advanced - GPU Cluster Management',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ab',
    name: 'Advanced - Containerized Database',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ac',
    name: 'Advanced - Chaos Engineering Practice',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ad',
    name: 'Advanced - FinOps Dashboard',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ae',
    name: 'Advanced - Workload Optimization',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032af',
    name: 'Advanced - Kubernetes Security',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ag',
    name: 'Advanced - Serverless Security',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ah',
    name: 'Advanced - Container Registry Management',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032ai',
    name: 'Advanced - Cloud Migration Strategy',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-032aj',
    name: 'Advanced - Infrastructure Automation',
    domain: 'Cloud Computing',
  },
  // Data Science Projects
  {
    id: 'proj-033',
    name: 'Mini - Stock Market Prediction Model',
    domain: 'Data Science',
  },
  {
    id: 'proj-034',
    name: 'Mini - Customer Segmentation Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-035',
    name: 'Mini - Big Data Processing Pipeline',
    domain: 'Data Science',
  },
  {
    id: 'proj-036',
    name: 'Mini - Data Visualization Dashboard',
    domain: 'Data Science',
  },
  {
    id: 'proj-036a',
    name: 'Mini - Iris Dataset Classification',
    domain: 'Data Science',
  },
  {
    id: 'proj-036b',
    name: 'Mini - Housing Price Prediction',
    domain: 'Data Science',
  },
  {
    id: 'proj-036c',
    name: 'Mini - Titanic Survival Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-036d',
    name: 'Mini - Social Media Analytics',
    domain: 'Data Science',
  },
  {
    id: 'proj-036e',
    name: 'Mini - Product Recommendation',
    domain: 'Data Science',
  },
  {
    id: 'proj-036f',
    name: 'Mini - Web Traffic Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-036g',
    name: 'Advanced - Natural Language Processing',
    domain: 'Data Science',
  },
  {
    id: 'proj-036h',
    name: 'Advanced - Time Series Forecasting',
    domain: 'Data Science',
  },
  {
    id: 'proj-036i',
    name: 'Advanced - Anomaly Detection',
    domain: 'Data Science',
  },
  {
    id: 'proj-036j',
    name: 'Advanced - Predictive Maintenance',
    domain: 'Data Science',
  },
  {
    id: 'proj-036k',
    name: 'Advanced - Deep Learning Image Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-036l',
    name: 'Advanced - Clustering Algorithms',
    domain: 'Data Science',
  },
  {
    id: 'proj-036m',
    name: 'Advanced - Feature Engineering',
    domain: 'Data Science',
  },
  {
    id: 'proj-036n',
    name: 'Advanced - Healthcare Analytics',
    domain: 'Data Science',
  },
  {
    id: 'proj-036o',
    name: 'Advanced - Fraud Detection Model',
    domain: 'Data Science',
  },
  {
    id: 'proj-036p',
    name: 'Advanced - Sports Analytics',
    domain: 'Data Science',
  },
  {
    id: 'proj-036q',
    name: 'Advanced - Sentiment Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-036r',
    name: 'Advanced - Reinforcement Learning',
    domain: 'Data Science',
  },
  {
    id: 'proj-036s',
    name: 'Advanced - Computer Vision Project',
    domain: 'Data Science',
  },
  {
    id: 'proj-036t',
    name: 'Advanced - Causal Inference Study',
    domain: 'Data Science',
  },
  {
    id: 'proj-036u',
    name: 'Advanced - Network Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-036v',
    name: 'Advanced - Bayesian Statistics',
    domain: 'Data Science',
  },
  {
    id: 'proj-036w',
    name: 'Advanced - Text Mining',
    domain: 'Data Science',
  },
  {
    id: 'proj-036x',
    name: 'Advanced - Hyperparameter Tuning',
    domain: 'Data Science',
  },
  {
    id: 'proj-036y',
    name: 'Advanced - AutoML Pipeline',
    domain: 'Data Science',
  },
  {
    id: 'proj-036z',
    name: 'Advanced - Ensemble Methods',
    domain: 'Data Science',
  },
  {
    id: 'proj-036aa',
    name: 'Advanced - Graph Neural Networks',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ab',
    name: 'Advanced - XAI Interpretability',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ac',
    name: 'Advanced - Transfer Learning',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ad',
    name: 'Advanced - Data Quality Assessment',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ae',
    name: 'Advanced - Recommendation System',
    domain: 'Data Science',
  },
  {
    id: 'proj-036af',
    name: 'Advanced - Statistical Hypothesis Testing',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ag',
    name: 'Advanced - A/B Testing Framework',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ah',
    name: 'Advanced - Survival Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-036ai',
    name: 'Advanced - Propensity Scoring',
    domain: 'Data Science',
  },
  {
    id: 'proj-036aj',
    name: 'Advanced - Churn Cohort Analysis',
    domain: 'Data Science',
  },
  // IoT Projects
  {
    id: 'proj-037',
    name: 'Mini - Smart Home Automation System',
    domain: 'IoT',
  },
  {
    id: 'proj-038',
    name: 'Mini - IoT Sensor Monitoring Platform',
    domain: 'IoT',
  },
  {
    id: 'proj-038a',
    name: 'Mini - Environmental Monitoring',
    domain: 'IoT',
  },
  {
    id: 'proj-038b',
    name: 'Mini - Smart Lighting System',
    domain: 'IoT',
  },
  {
    id: 'proj-038c',
    name: 'Mini - Water Tank Monitoring',
    domain: 'IoT',
  },
  {
    id: 'proj-038d',
    name: 'Mini - Security Camera Alert',
    domain: 'IoT',
  },
  {
    id: 'proj-038e',
    name: 'Mini - Weather Station Data',
    domain: 'IoT',
  },
  {
    id: 'proj-038f',
    name: 'Mini - Bluetooth Tracker',
    domain: 'IoT',
  },
  {
    id: 'proj-038g',
    name: 'Mini - Vehicle Tracking System',
    domain: 'IoT',
  },
  {
    id: 'proj-038h',
    name: 'Mini - Health Monitoring Wearable',
    domain: 'IoT',
  },
  {
    id: 'proj-038i',
    name: 'Advanced - Industrial IoT Platform',
    domain: 'IoT',
  },
  {
    id: 'proj-038j',
    name: 'Advanced - Agriculture Monitoring',
    domain: 'IoT',
  },
  {
    id: 'proj-038k',
    name: 'Advanced - Traffic Management System',
    domain: 'IoT',
  },
  {
    id: 'proj-038l',
    name: 'Advanced - Smart City Infrastructure',
    domain: 'IoT',
  },
  {
    id: 'proj-038m',
    name: 'Advanced - Healthcare Monitoring',
    domain: 'IoT',
  },
  {
    id: 'proj-038n',
    name: 'Advanced - Supply Chain Tracking',
    domain: 'IoT',
  },
  {
    id: 'proj-038o',
    name: 'Advanced - Energy Management System',
    domain: 'IoT',
  },
  {
    id: 'proj-038p',
    name: 'Advanced - Predictive Maintenance',
    domain: 'IoT',
  },
  {
    id: 'proj-038q',
    name: 'Advanced - Factory Automation',
    domain: 'IoT',
  },
  {
    id: 'proj-038r',
    name: 'Advanced - Building Automation',
    domain: 'IoT',
  },
  {
    id: 'proj-038s',
    name: 'Advanced - Parking Management IoT',
    domain: 'IoT',
  },
  {
    id: 'proj-038t',
    name: 'Advanced - Water Quality Monitoring',
    domain: 'IoT',
  },
  {
    id: 'proj-038u',
    name: 'Advanced - Air Quality Tracking',
    domain: 'IoT',
  },
  {
    id: 'proj-038v',
    name: 'Advanced - Waste Management IoT',
    domain: 'IoT',
  },
  {
    id: 'proj-038w',
    name: 'Advanced - Retail Analytics System',
    domain: 'IoT',
  },
  {
    id: 'proj-038x',
    name: 'Advanced - Asset Tracking Network',
    domain: 'IoT',
  },
  {
    id: 'proj-038y',
    name: 'Advanced - Occupancy Monitoring',
    domain: 'IoT',
  },
  {
    id: 'proj-038z',
    name: 'Advanced - Connected Vehicle Platform',
    domain: 'IoT',
  },
  {
    id: 'proj-038aa',
    name: 'Advanced - Industrial Sensor Network',
    domain: 'IoT',
  },
  {
    id: 'proj-038ab',
    name: 'Advanced - Edge Computing IoT',
    domain: 'IoT',
  },
  {
    id: 'proj-038ac',
    name: 'Advanced - 5G IoT Application',
    domain: 'IoT',
  },
  {
    id: 'proj-038ad',
    name: 'Advanced - LoRaWAN Network',
    domain: 'IoT',
  },
  {
    id: 'proj-038ae',
    name: 'Advanced - NB-IoT Solution',
    domain: 'IoT',
  },
  {
    id: 'proj-038af',
    name: 'Advanced - Mesh Network Protocol',
    domain: 'IoT',
  },
  {
    id: 'proj-038ag',
    name: 'Advanced - IoT Device Firmware',
    domain: 'IoT',
  },
  {
    id: 'proj-038ah',
    name: 'Advanced - Zigbee Network Design',
    domain: 'IoT',
  },
  {
    id: 'proj-038ai',
    name: 'Advanced - Thread Protocol Implementation',
    domain: 'IoT',
  },
  {
    id: 'proj-038aj',
    name: 'Advanced - Matter Protocol Integration',
    domain: 'IoT',
  },
  {
    id: 'proj-038ak',
    name: 'Advanced - Industrial Control System',
    domain: 'IoT',
  },
  {
    id: 'proj-038al',
    name: 'Advanced - Smart Manufacturing System',
    domain: 'IoT',
  },
  // Blockchain Projects
  {
    id: 'proj-039',
    name: 'Mini - Smart Contract Development',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040',
    name: 'Mini - Cryptocurrency Wallet Application',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040a',
    name: 'Mini - Blockchain Explorer',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040b',
    name: 'Mini - Token Minting System',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040c',
    name: 'Mini - Distributed Ledger',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040d',
    name: 'Mini - NFT Marketplace',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040e',
    name: 'Mini - Voting System Blockchain',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040f',
    name: 'Mini - Supply Chain Tracking',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040g',
    name: 'Mini - Document Verification',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040h',
    name: 'Mini - Payment Gateway Crypto',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040i',
    name: 'Advanced - DeFi Protocol',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040j',
    name: 'Advanced - Decentralized Exchange',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040k',
    name: 'Advanced - Lending Platform',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040l',
    name: 'Advanced - Staking Protocol',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040m',
    name: 'Advanced - Governance Token',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040n',
    name: 'Advanced - Atomic Swaps',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040o',
    name: 'Advanced - Cross-chain Bridge',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040p',
    name: 'Advanced - Sidechain Implementation',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040q',
    name: 'Advanced - Layer-2 Scaling',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040r',
    name: 'Advanced - Zero-Knowledge Proofs',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040s',
    name: 'Advanced - Identity Verification',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040t',
    name: 'Advanced - Supply Chain Security',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040u',
    name: 'Advanced - Medical Records on Blockchain',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040v',
    name: 'Advanced - Real Estate Contracts',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040w',
    name: 'Advanced - Insurance Claims',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040x',
    name: 'Advanced - Blockchain Auditing',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040y',
    name: 'Advanced - Consensus Algorithms',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040z',
    name: 'Advanced - Merkle Tree Implementation',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040aa',
    name: 'Advanced - Smart Contract Optimization',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ab',
    name: 'Advanced - Web3 dApp Development',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ac',
    name: 'Advanced - Blockchain Security Audit',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ad',
    name: 'Advanced - DAO Implementation',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ae',
    name: 'Advanced - Tokenomics Design',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040af',
    name: 'Advanced - Liquidity Pool Design',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ag',
    name: 'Advanced - Yield Farming Strategy',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ah',
    name: 'Advanced - Oracle Integration',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ai',
    name: 'Advanced - Wallet Security Model',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040aj',
    name: 'Advanced - Multi-Signature Contracts',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040ak',
    name: 'Advanced - Bridge Protocol Design',
    domain: 'Blockchain',
  },
  {
    id: 'proj-040al',
    name: 'Advanced - Governance Framework',
    domain: 'Blockchain',
  },
  // BCom Projects
  {
    id: 'proj-041',
    name: 'Mini - Financial Statement Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-042',
    name: 'Mini - Cost Accounting Case Study',
    domain: 'BCom',
  },
  {
    id: 'proj-043',
    name: 'Mini - Income Tax Planning Report',
    domain: 'BCom',
  },
  {
    id: 'proj-044',
    name: 'Mini - Auditing Process Documentation',
    domain: 'BCom',
  },
  {
    id: 'proj-044a',
    name: 'Mini - GST Compliance Report',
    domain: 'BCom',
  },
  {
    id: 'proj-044b',
    name: 'Mini - Inventory Valuation Study',
    domain: 'BCom',
  },
  {
    id: 'proj-044c',
    name: 'Mini - CVP Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-044d',
    name: 'Mini - Payroll Accounting',
    domain: 'BCom',
  },
  {
    id: 'proj-044e',
    name: 'Mini - Receivables Aging',
    domain: 'BCom',
  },
  {
    id: 'proj-044f',
    name: 'Mini - Accounting Cycle Case',
    domain: 'BCom',
  },
  {
    id: 'proj-044g',
    name: 'Advanced - Internal Control Evaluation',
    domain: 'BCom',
  },
  {
    id: 'proj-044h',
    name: 'Advanced - Lease Accounting',
    domain: 'BCom',
  },
  {
    id: 'proj-044i',
    name: 'Advanced - Indirect Tax Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-044j',
    name: 'Advanced - Corporate Governance',
    domain: 'BCom',
  },
  {
    id: 'proj-044k',
    name: 'Advanced - Management Accounting Dashboard',
    domain: 'BCom',
  },
  {
    id: 'proj-044l',
    name: 'Advanced - Working Capital Management',
    domain: 'BCom',
  },
  {
    id: 'proj-044m',
    name: 'Advanced - Capital Structure Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-044n',
    name: 'Advanced - Dividend Policy Study',
    domain: 'BCom',
  },
  {
    id: 'proj-044o',
    name: 'Advanced - Financial Ratios Benchmarking',
    domain: 'BCom',
  },
  {
    id: 'proj-044p',
    name: 'Advanced - Audit Planning Documentation',
    domain: 'BCom',
  },
  {
    id: 'proj-044q',
    name: 'Advanced - Depreciation Methods',
    domain: 'BCom',
  },
  {
    id: 'proj-044r',
    name: 'Advanced - Costing Methods Comparison',
    domain: 'BCom',
  },
  {
    id: 'proj-044s',
    name: 'Advanced - Fund Flow Statement',
    domain: 'BCom',
  },
  {
    id: 'proj-044t',
    name: 'Advanced - Cash Flow Statement',
    domain: 'BCom',
  },
  {
    id: 'proj-044u',
    name: 'Advanced - M&A Accounting',
    domain: 'BCom',
  },
  {
    id: 'proj-044v',
    name: 'Advanced - ERP Accounting Module',
    domain: 'BCom',
  },
  {
    id: 'proj-044w',
    name: 'Advanced - Budgetary Control',
    domain: 'BCom',
  },
  {
    id: 'proj-044x',
    name: 'Advanced - Partnership Accounts',
    domain: 'BCom',
  },
  {
    id: 'proj-044y',
    name: 'Advanced - Company Final Accounts',
    domain: 'BCom',
  },
  {
    id: 'proj-044z',
    name: 'Advanced - Bank Reconciliation',
    domain: 'BCom',
  },
  {
    id: 'proj-044za',
    name: 'Advanced - Revenue Recognition Standards',
    domain: 'BCom',
  },
  {
    id: 'proj-044zb',
    name: 'Advanced - Consolidation Adjustments',
    domain: 'BCom',
  },
  {
    id: 'proj-044zc',
    name: 'Advanced - Transfer Pricing Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-044zd',
    name: 'Advanced - Impairment Testing',
    domain: 'BCom',
  },
  {
    id: 'proj-044ze',
    name: 'Advanced - Fair Value Accounting',
    domain: 'BCom',
  },
  // BBA Projects
  {
    id: 'proj-045',
    name: 'Mini - Business Plan Development',
    domain: 'BBA',
  },
  {
    id: 'proj-046',
    name: 'Mini - Operations Management Case Study',
    domain: 'BBA',
  },
  {
    id: 'proj-047',
    name: 'Mini - Human Resource Strategy Report',
    domain: 'BBA',
  },
  {
    id: 'proj-048',
    name: 'Mini - Entrepreneurship Feasibility Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-048a',
    name: 'Mini - Marketing Mix Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-048b',
    name: 'Mini - SWOT Analysis of Brand',
    domain: 'BBA',
  },
  {
    id: 'proj-048c',
    name: 'Mini - Strategic Management Case',
    domain: 'BBA',
  },
  {
    id: 'proj-048d',
    name: 'Mini - Operations Process Mapping',
    domain: 'BBA',
  },
  {
    id: 'proj-048e',
    name: 'Mini - Supply Chain Optimization',
    domain: 'BBA',
  },
  {
    id: 'proj-048f',
    name: 'Mini - Service Quality Gap Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-048g',
    name: 'Advanced - Sales Forecasting Model',
    domain: 'BBA',
  },
  {
    id: 'proj-048h',
    name: 'Advanced - New Product Launch Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-048i',
    name: 'Advanced - Customer Satisfaction Survey',
    domain: 'BBA',
  },
  {
    id: 'proj-048j',
    name: 'Advanced - Retail Store Layout Optimization',
    domain: 'BBA',
  },
  {
    id: 'proj-048k',
    name: 'Advanced - Logistics Cost Reduction',
    domain: 'BBA',
  },
  {
    id: 'proj-048l',
    name: 'Advanced - CSR Report',
    domain: 'BBA',
  },
  {
    id: 'proj-048m',
    name: 'Advanced - Change Management Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-048n',
    name: 'Advanced - Business Ethics Case',
    domain: 'BBA',
  },
  {
    id: 'proj-048o',
    name: 'Advanced - E-commerce Strategy',
    domain: 'BBA',
  },
  {
    id: 'proj-048p',
    name: 'Advanced - International Market Entry',
    domain: 'BBA',
  },
  {
    id: 'proj-048q',
    name: 'Advanced - Pricing Strategy Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-048r',
    name: 'Advanced - Project Management Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-048s',
    name: 'Advanced - BPR Study',
    domain: 'BBA',
  },
  {
    id: 'proj-048t',
    name: 'Advanced - Franchise Feasibility',
    domain: 'BBA',
  },
  {
    id: 'proj-048u',
    name: 'Advanced - Startup Fundraising Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-048v',
    name: 'Advanced - Brand Loyalty Study',
    domain: 'BBA',
  },
  {
    id: 'proj-048w',
    name: 'Advanced - Leadership Styles Survey',
    domain: 'BBA',
  },
  {
    id: 'proj-048x',
    name: 'Advanced - Employee Engagement Study',
    domain: 'BBA',
  },
  {
    id: 'proj-048y',
    name: 'Advanced - Training Needs Assessment',
    domain: 'BBA',
  },
  {
    id: 'proj-048z',
    name: 'Advanced - Performance Appraisal Design',
    domain: 'BBA',
  },
  {
    id: 'proj-048za',
    name: 'Advanced - Organizational Development',
    domain: 'BBA',
  },
  {
    id: 'proj-048zb',
    name: 'Advanced - Conflict Resolution Strategy',
    domain: 'BBA',
  },
  {
    id: 'proj-048zc',
    name: 'Advanced - Knowledge Management System',
    domain: 'BBA',
  },
  {
    id: 'proj-048zd',
    name: 'Advanced - Quality Management Framework',
    domain: 'BBA',
  },
  {
    id: 'proj-048ze',
    name: 'Advanced - Risk Management Strategy',
    domain: 'BBA',
  },
  {
    id: 'proj-048zf',
    name: 'Advanced - Stakeholder Engagement Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-048zg',
    name: 'Advanced - Crisis Management Protocol',
    domain: 'BBA',
  },
  {
    id: 'proj-048zh',
    name: 'Advanced - Customer Journey Mapping',
    domain: 'BBA',
  },
  {
    id: 'proj-048zi',
    name: 'Advanced - Market Opportunity Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-048zj',
    name: 'Advanced - Innovation Pipeline Development',
    domain: 'BBA',
  },
  // Marketing Projects
  {
    id: 'proj-049',
    name: 'Mini - Digital Marketing Campaign Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-050',
    name: 'Mini - Brand Positioning Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-051',
    name: 'Mini - Consumer Behavior Research',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052',
    name: 'Mini - Market Segmentation Analysis',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052a',
    name: 'Mini - Social Media Content Calendar',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052b',
    name: 'Mini - SEO Audit and Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052c',
    name: 'Mini - Email Marketing Funnel',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052d',
    name: 'Mini - Influencer Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052e',
    name: 'Mini - Product Launch Campaign',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052f',
    name: 'Mini - Customer Persona Development',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052g',
    name: 'Advanced - Video Marketing Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052h',
    name: 'Advanced - Mobile Marketing Campaign',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052i',
    name: 'Advanced - Paid Ads (PPC) Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052j',
    name: 'Advanced - Conversion Rate Optimization',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052k',
    name: 'Advanced - Marketing Analytics Dashboard',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052l',
    name: 'Advanced - Brand Awareness Study',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052m',
    name: 'Advanced - Public Relations Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052n',
    name: 'Advanced - Customer Retention Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052o',
    name: 'Advanced - Loyalty Program Design',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052p',
    name: 'Advanced - Omnichannel Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052q',
    name: 'Advanced - Packaging Design Research',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052r',
    name: 'Advanced - Pricing Perception Study',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052s',
    name: 'Advanced - UGC Campaign Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052t',
    name: 'Advanced - Affiliate Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052u',
    name: 'Advanced - B2B Lead Generation',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052v',
    name: 'Advanced - Marketing Budget Allocation',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052w',
    name: 'Advanced - Market Research Survey',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052x',
    name: 'Advanced - Competitor Benchmarking',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052y',
    name: 'Advanced - Retail Merchandising Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-052z',
    name: 'Advanced - Event Marketing Plan',
    domain: 'Marketing Projects',
  },
  // EC Projects (Extended)
  {
    id: 'proj-053',
    name: 'Mini - Line Follower Robot',
    domain: 'EC',
  },
  {
    id: 'proj-054',
    name: 'Mini - LED Matrix Display Controller',
    domain: 'EC',
  },
  {
    id: 'proj-055',
    name: 'Mini - Temperature Monitoring with LM35',
    domain: 'EC',
  },
  {
    id: 'proj-056',
    name: 'Mini - Touchless Doorbell using IR',
    domain: 'EC',
  },
  {
    id: 'proj-057',
    name: 'Mini - Bluetooth Home Automation',
    domain: 'EC',
  },
  {
    id: 'proj-058',
    name: 'Mini - Smart Street Light using LDR',
    domain: 'EC',
  },
  {
    id: 'proj-059',
    name: 'Mini - Soil Moisture Alarm',
    domain: 'EC',
  },
  {
    id: 'proj-060',
    name: 'Mini - RFID Door Access System',
    domain: 'EC',
  },
  {
    id: 'proj-061',
    name: 'Mini - Digital Stopwatch with 7-Segment',
    domain: 'EC',
  },
  {
    id: 'proj-062',
    name: 'Mini - Vibration Detection Alarm',
    domain: 'EC',
  },
  {
    id: 'proj-063',
    name: 'Advanced - Smart Energy Meter with IoT',
    domain: 'EC',
  },
  {
    id: 'proj-064',
    name: 'Advanced - ECG Signal Acquisition System',
    domain: 'EC',
  },
  {
    id: 'proj-065',
    name: 'Advanced - GSM-Based Vehicle Tracker',
    domain: 'EC',
  },
  {
    id: 'proj-066',
    name: 'Advanced - Smart Parking System',
    domain: 'EC',
  },
  {
    id: 'proj-067',
    name: 'Advanced - Automated Traffic Light Control',
    domain: 'EC',
  },
  {
    id: 'proj-068',
    name: 'Advanced - Drone Telemetry Module',
    domain: 'EC',
  },
  {
    id: 'proj-069',
    name: 'Advanced - Weather Station with LoRa',
    domain: 'EC',
  },
  {
    id: 'proj-070',
    name: 'Advanced - Wearable Health Monitor',
    domain: 'EC',
  },
  {
    id: 'proj-071',
    name: 'Advanced - Biometric Door Lock Controller',
    domain: 'EC',
  },
  {
    id: 'proj-072',
    name: 'Advanced - Gas Leak Detection & Alert',
    domain: 'EC',
  },
  {
    id: 'proj-073',
    name: 'Advanced - Power Factor Monitoring System',
    domain: 'EC',
  },
  {
    id: 'proj-074',
    name: 'Advanced - Voice-Controlled Appliances',
    domain: 'EC',
  },
  {
    id: 'proj-075',
    name: 'Advanced - Smart Waste Bin Level Monitor',
    domain: 'EC',
  },
  {
    id: 'proj-076',
    name: 'Advanced - Fire Detection & Suppression Alert',
    domain: 'EC',
  },
  {
    id: 'proj-077',
    name: 'Advanced - Solar Tracking Controller',
    domain: 'EC',
  },
  {
    id: 'proj-078',
    name: 'Advanced - Campus Security Surveillance Integration',
    domain: 'EC',
  },
  {
    id: 'proj-078a',
    name: 'Advanced - Microwave Motion Detector',
    domain: 'EC',
  },
  {
    id: 'proj-078b',
    name: 'Advanced - Ultrasonic Distance Measurement',
    domain: 'EC',
  },
  {
    id: 'proj-078c',
    name: 'Advanced - Audio Amplifier Circuit',
    domain: 'EC',
  },
  {
    id: 'proj-078d',
    name: 'Advanced - Induction Motor Speed Control',
    domain: 'EC',
  },
  {
    id: 'proj-078e',
    name: 'Advanced - Circuit Protection System',
    domain: 'EC',
  },
  {
    id: 'proj-078f',
    name: 'Advanced - Power Supply Unit Design',
    domain: 'EC',
  },
  {
    id: 'proj-078g',
    name: 'Advanced - FPGA Signal Processing',
    domain: 'EC',
  },
  {
    id: 'proj-078h',
    name: 'Advanced - Digital Signal Filter',
    domain: 'EC',
  },
  {
    id: 'proj-078i',
    name: 'Advanced - Embedded System Design',
    domain: 'EC',
  },
  {
    id: 'proj-078j',
    name: 'Advanced - PCB Layout Optimization',
    domain: 'EC',
  },
  {
    id: 'proj-078k',
    name: 'Advanced - Motor Driver Circuit',
    domain: 'EC',
  },
  {
    id: 'proj-078l',
    name: 'Advanced - Data Logger with SD Card',
    domain: 'EC',
  },
  {
    id: 'proj-078m',
    name: 'Advanced - Wireless Power Transmission',
    domain: 'EC',
  },
  {
    id: 'proj-078n',
    name: 'Advanced - Pulse Width Modulation Control',
    domain: 'EC',
  },
  {
    id: 'proj-078o',
    name: 'Advanced - Analog to Digital Converter',
    domain: 'EC',
  },
  // Finance Projects (Extended)
  {
    id: 'proj-079',
    name: 'Mini - Budget Variance Report',
    domain: 'Finance',
  },
  {
    id: 'proj-080',
    name: 'Mini - Loan EMI Calculator with Scenarios',
    domain: 'Finance',
  },
  {
    id: 'proj-081',
    name: 'Mini - Credit Score Factors Study',
    domain: 'Finance',
  },
  {
    id: 'proj-082',
    name: 'Mini - Break-even Analysis for Startup',
    domain: 'Finance',
  },
  {
    id: 'proj-083',
    name: 'Mini - Ratio Analysis of a Listed Company',
    domain: 'Finance',
  },
  {
    id: 'proj-084',
    name: 'Mini - Cash Flow Forecasting Model',
    domain: 'Finance',
  },
  {
    id: 'proj-085',
    name: 'Mini - Working Capital Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-086',
    name: 'Mini - Stock Price Trend Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-087',
    name: 'Mini - Portfolio Diversification Report',
    domain: 'Finance',
  },
  {
    id: 'proj-088',
    name: 'Mini - Time Value of Money Calculator',
    domain: 'Finance',
  },
  {
    id: 'proj-089',
    name: 'Advanced - Value at Risk (VaR) Model',
    domain: 'Finance',
  },
  {
    id: 'proj-090',
    name: 'Advanced - Options Pricing using Black-Scholes',
    domain: 'Finance',
  },
  {
    id: 'proj-091',
    name: 'Advanced - Credit Risk Scoring Model',
    domain: 'Finance',
  },
  {
    id: 'proj-092',
    name: 'Advanced - Trading Strategy Backtest',
    domain: 'Finance',
  },
  {
    id: 'proj-093',
    name: 'Advanced - Fraud Detection in Transactions',
    domain: 'Finance',
  },
  {
    id: 'proj-094',
    name: 'Advanced - Bank NPA Analysis Dashboard',
    domain: 'Finance',
  },
  {
    id: 'proj-095',
    name: 'Advanced - Capital Budgeting for Expansion',
    domain: 'Finance',
  },
  {
    id: 'proj-096',
    name: 'Advanced - Insurance Premium Pricing Model',
    domain: 'Finance',
  },
  {
    id: 'proj-097',
    name: 'Advanced - Real Estate Investment Feasibility',
    domain: 'Finance',
  },
  {
    id: 'proj-098',
    name: 'Advanced - Cryptocurrency Volatility Study',
    domain: 'Finance',
  },
  {
    id: 'proj-099',
    name: 'Advanced - Macro Indicator Impact Study',
    domain: 'Finance',
  },
  {
    id: 'proj-100',
    name: 'Advanced - Mutual Fund SIP Performance',
    domain: 'Finance',
  },
  {
    id: 'proj-101',
    name: 'Advanced - Corporate Valuation (DCF)',
    domain: 'Finance',
  },
  {
    id: 'proj-102',
    name: 'Advanced - Behavioral Finance Survey',
    domain: 'Finance',
  },
  {
    id: 'proj-103',
    name: 'Advanced - Debt vs Equity Structure Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-104',
    name: 'Advanced - FinTech App Business Model',
    domain: 'Finance',
  },
  {
    id: 'proj-104a',
    name: 'Advanced - Pension Fund Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-104b',
    name: 'Advanced - Commodity Price Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-104c',
    name: 'Advanced - Currency Exchange Forecasting',
    domain: 'Finance',
  },
  {
    id: 'proj-104d',
    name: 'Advanced - Bond Valuation Model',
    domain: 'Finance',
  },
  {
    id: 'proj-104e',
    name: 'Advanced - Private Equity Valuation',
    domain: 'Finance',
  },
  {
    id: 'proj-104f',
    name: 'Advanced - Venture Capital ROI',
    domain: 'Finance',
  },
  {
    id: 'proj-104g',
    name: 'Advanced - Asset-Backed Securities',
    domain: 'Finance',
  },
  {
    id: 'proj-104h',
    name: 'Advanced - Interest Rate Swap Analysis',
    domain: 'Finance',
  },
  {
    id: 'proj-104i',
    name: 'Advanced - Treasury Management',
    domain: 'Finance',
  },
  {
    id: 'proj-104j',
    name: 'Advanced - Environmental Risk Scoring',
    domain: 'Finance',
  },
  {
    id: 'proj-104k',
    name: 'Advanced - Behavioral Economics Study',
    domain: 'Finance',
  },
  // BCom Projects (Extended)
  {
    id: 'proj-105',
    name: 'Mini - GST Compliance Report',
    domain: 'BCom',
  },
  {
    id: 'proj-106',
    name: 'Mini - Inventory Valuation Study',
    domain: 'BCom',
  },
  {
    id: 'proj-107',
    name: 'Mini - Cost-Volume-Profit Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-108',
    name: 'Mini - Payroll Accounting System',
    domain: 'BCom',
  },
  {
    id: 'proj-109',
    name: 'Mini - Receivables Aging Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-110',
    name: 'Mini - Financial Accounting Cycle Case',
    domain: 'BCom',
  },
  {
    id: 'proj-111',
    name: 'Mini - Budgetary Control Report',
    domain: 'BCom',
  },
  {
    id: 'proj-112',
    name: 'Mini - Partnership Accounts Case',
    domain: 'BCom',
  },
  {
    id: 'proj-113',
    name: 'Mini - Company Final Accounts Project',
    domain: 'BCom',
  },
  {
    id: 'proj-114',
    name: 'Mini - Bank Reconciliation Automation',
    domain: 'BCom',
  },
  {
    id: 'proj-115',
    name: 'Advanced - Internal Control Evaluation',
    domain: 'BCom',
  },
  {
    id: 'proj-116',
    name: 'Advanced - Lease Accounting Case Study',
    domain: 'BCom',
  },
  {
    id: 'proj-117',
    name: 'Advanced - Indirect Tax Analysis',
    domain: 'BCom',
  },
  {
    id: 'proj-118',
    name: 'Advanced - Corporate Governance Report',
    domain: 'BCom',
  },
  {
    id: 'proj-119',
    name: 'Advanced - Management Accounting Dashboard',
    domain: 'BCom',
  },
  {
    id: 'proj-120',
    name: 'Advanced - Working Capital Management',
    domain: 'BCom',
  },
  {
    id: 'proj-121',
    name: 'Advanced - Capital Structure Case',
    domain: 'BCom',
  },
  {
    id: 'proj-122',
    name: 'Advanced - Dividend Policy Study',
    domain: 'BCom',
  },
  {
    id: 'proj-123',
    name: 'Advanced - Financial Ratios Benchmarking',
    domain: 'BCom',
  },
  {
    id: 'proj-124',
    name: 'Advanced - Audit Planning Documentation',
    domain: 'BCom',
  },
  {
    id: 'proj-125',
    name: 'Advanced - Depreciation Methods Comparison',
    domain: 'BCom',
  },
  {
    id: 'proj-126',
    name: 'Advanced - Costing Methods Comparison',
    domain: 'BCom',
  },
  {
    id: 'proj-127',
    name: 'Advanced - Fund Flow Statement',
    domain: 'BCom',
  },
  {
    id: 'proj-128',
    name: 'Advanced - Cash Flow Statement Preparation',
    domain: 'BCom',
  },
  {
    id: 'proj-129',
    name: 'Advanced - Merger & Acquisition Accounting',
    domain: 'BCom',
  },
  {
    id: 'proj-130',
    name: 'Advanced - ERP Accounting Module Study',
    domain: 'BCom',
  },
  {
    id: 'proj-130a',
    name: 'Advanced - Forensic Accounting Investigation',
    domain: 'BCom',
  },
  {
    id: 'proj-130b',
    name: 'Advanced - Regulatory Compliance Auditing',
    domain: 'BCom',
  },
  {
    id: 'proj-130c',
    name: 'Advanced - Tax Planning Strategy',
    domain: 'BCom',
  },
  {
    id: 'proj-130d',
    name: 'Advanced - Consolidated Financial Statements',
    domain: 'BCom',
  },
  {
    id: 'proj-130e',
    name: 'Advanced - Valuation for Mergers',
    domain: 'BCom',
  },
  {
    id: 'proj-130f',
    name: 'Advanced - Sustainability Accounting',
    domain: 'BCom',
  },
  {
    id: 'proj-130g',
    name: 'Advanced - Not-for-Profit Accounting',
    domain: 'BCom',
  },
  {
    id: 'proj-130h',
    name: 'Advanced - Securities Market Regulation',
    domain: 'BCom',
  },
  {
    id: 'proj-130i',
    name: 'Advanced - International Accounting Standards',
    domain: 'BCom',
  },
  // BBA Projects (Extended)
  {
    id: 'proj-131',
    name: 'Mini - Marketing Mix Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-132',
    name: 'Mini - SWOT Analysis of a Brand',
    domain: 'BBA',
  },
  {
    id: 'proj-133',
    name: 'Mini - Strategic Management Case',
    domain: 'BBA',
  },
  {
    id: 'proj-134',
    name: 'Mini - Operations Process Mapping',
    domain: 'BBA',
  },
  {
    id: 'proj-135',
    name: 'Mini - Supply Chain Optimization Study',
    domain: 'BBA',
  },
  {
    id: 'proj-136',
    name: 'Mini - Service Quality Gap Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-137',
    name: 'Mini - Leadership Styles Survey',
    domain: 'BBA',
  },
  {
    id: 'proj-138',
    name: 'Mini - Employee Engagement Study',
    domain: 'BBA',
  },
  {
    id: 'proj-139',
    name: 'Mini - Training Needs Assessment',
    domain: 'BBA',
  },
  {
    id: 'proj-140',
    name: 'Mini - Performance Appraisal Design',
    domain: 'BBA',
  },
  {
    id: 'proj-141',
    name: 'Advanced - Sales Forecasting Model',
    domain: 'BBA',
  },
  {
    id: 'proj-142',
    name: 'Advanced - New Product Launch Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-143',
    name: 'Advanced - Customer Satisfaction Survey',
    domain: 'BBA',
  },
  {
    id: 'proj-144',
    name: 'Advanced - Retail Store Layout Optimization',
    domain: 'BBA',
  },
  {
    id: 'proj-145',
    name: 'Advanced - Logistics Cost Reduction Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-146',
    name: 'Advanced - Corporate Social Responsibility Report',
    domain: 'BBA',
  },
  {
    id: 'proj-147',
    name: 'Advanced - Change Management Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-148',
    name: 'Advanced - Business Ethics Case Study',
    domain: 'BBA',
  },
  {
    id: 'proj-149',
    name: 'Advanced - E-commerce Strategy Report',
    domain: 'BBA',
  },
  {
    id: 'proj-150',
    name: 'Advanced - International Market Entry Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-151',
    name: 'Advanced - Pricing Strategy Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-152',
    name: 'Advanced - Project Management Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-153',
    name: 'Advanced - Business Process Reengineering',
    domain: 'BBA',
  },
  {
    id: 'proj-154',
    name: 'Advanced - Franchise Feasibility Study',
    domain: 'BBA',
  },
  {
    id: 'proj-155',
    name: 'Advanced - Startup Fundraising Plan',
    domain: 'BBA',
  },
  {
    id: 'proj-156',
    name: 'Advanced - Brand Loyalty Study',
    domain: 'BBA',
  },
  {
    id: 'proj-156a',
    name: 'Advanced - Supply Chain Resilience',
    domain: 'BBA',
  },
  {
    id: 'proj-156b',
    name: 'Advanced - Organizational Culture Study',
    domain: 'BBA',
  },
  {
    id: 'proj-156c',
    name: 'Advanced - Competitive Strategy Analysis',
    domain: 'BBA',
  },
  {
    id: 'proj-156d',
    name: 'Advanced - Digital Transformation Plan',
    domain: 'BBA',
  },
  // Marketing Projects (Extended)
  {
    id: 'proj-157',
    name: 'Mini - Social Media Content Calendar',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-158',
    name: 'Mini - SEO Audit and Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-159',
    name: 'Mini - Email Marketing Funnel',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-160',
    name: 'Mini - Influencer Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-161',
    name: 'Mini - Product Launch Campaign',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-162',
    name: 'Mini - Customer Persona Development',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-163',
    name: 'Mini - Market Research Survey',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-164',
    name: 'Mini - Competitor Benchmarking',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-165',
    name: 'Mini - Retail Merchandising Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-166',
    name: 'Mini - Event Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-167',
    name: 'Advanced - Video Marketing Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-168',
    name: 'Advanced - Mobile Marketing Campaign',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-169',
    name: 'Advanced - Paid Ads (PPC) Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-170',
    name: 'Advanced - Conversion Rate Optimization',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-171',
    name: 'Advanced - Marketing Analytics Dashboard',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-172',
    name: 'Advanced - Brand Awareness Study',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-173',
    name: 'Advanced - Public Relations Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-174',
    name: 'Advanced - Customer Retention Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-175',
    name: 'Advanced - Loyalty Program Design',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-176',
    name: 'Advanced - Omnichannel Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-177',
    name: 'Advanced - Packaging Design Research',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-178',
    name: 'Advanced - Pricing Perception Study',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-179',
    name: 'Advanced - UGC Campaign Strategy',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-180',
    name: 'Advanced - Affiliate Marketing Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-181',
    name: 'Advanced - B2B Lead Generation Plan',
    domain: 'Marketing Projects',
  },
  {
    id: 'proj-182',
    name: 'Advanced - Marketing Budget Allocation',
    domain: 'Marketing Projects',
  },
];

export const domains = [
  'AI/ML',
  'Cybersecurity',
  'DBMS',
  'Web Development',
  'Mobile App',
  'EC',
  'Finance',
  'Cloud Computing',
  'Data Science',
  'IoT',
  'Blockchain',
  'BCom',
  'BBA',
  'Marketing Projects',
];

export const categories = [
  { id: 'aiml', name: 'AI/ML', icon: '🤖' },
  { id: 'cyber', name: 'Cybersecurity', icon: '🔒' },
  { id: 'dbms', name: 'DBMS', icon: '🗄️' },
  { id: 'web', name: 'Web Development', icon: '🌐' },
  { id: 'mobile', name: 'Mobile App', icon: '📱' },
  { id: 'ec', name: 'EC', icon: '📡' },
  { id: 'finance', name: 'Finance', icon: '💹' },
  { id: 'cloud', name: 'Cloud Computing', icon: '☁️' },
  { id: 'data', name: 'Data Science', icon: '📊' },
  { id: 'iot', name: 'IoT', icon: '📡' },
  { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
  { id: 'bcom', name: 'BCom', icon: '📚' },
  { id: 'bba', name: 'BBA', icon: '🏢' },
  { id: 'marketing', name: 'Marketing Projects', icon: '📣' },
];
