/**
 * PROJECTHELP - PROJECT CONFIGURATION
 * Keep only project name and domain
 * No pricing - quotations sent after customer message
 * EDIT: Add new projects by copying and modifying items in the PROJECTS array
 */

export interface Project {
  id: string;
  name: string;
  domain: 'AI/ML' | 'Cybersecurity' | 'DBMS' | 'Web Development' | 'Mobile App' | 'Cloud Computing' | 'Data Science' | 'IoT' | 'Blockchain' | 'Other';
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
    name: 'Sentiment Analysis using NLP',
    domain: 'AI/ML',
  },
  {
    id: 'proj-002',
    name: 'Image Classification with CNN',
    domain: 'AI/ML',
  },
  {
    id: 'proj-003',
    name: 'Chatbot Development with LSTM',
    domain: 'AI/ML',
  },
  {
    id: 'proj-004',
    name: 'Recommendation System Engine',
    domain: 'AI/ML',
  },
  // Cybersecurity Projects
  {
    id: 'proj-005',
    name: 'Network Intrusion Detection System',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-006',
    name: 'Encryption Algorithm Implementation',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-007',
    name: 'Vulnerability Assessment Tool',
    domain: 'Cybersecurity',
  },
  {
    id: 'proj-008',
    name: 'Multi-factor Authentication System',
    domain: 'Cybersecurity',
  },
  // DBMS Projects
  {
    id: 'proj-009',
    name: 'E-Commerce Database Design',
    domain: 'DBMS',
  },
  {
    id: 'proj-010',
    name: 'Hospital Management System Database',
    domain: 'DBMS',
  },
  {
    id: 'proj-011',
    name: 'Query Optimization & Indexing',
    domain: 'DBMS',
  },
  {
    id: 'proj-012',
    name: 'NoSQL Database Implementation',
    domain: 'DBMS',
  },
  // Web Development Projects
  {
    id: 'proj-013',
    name: 'Full-Stack E-Commerce Platform',
    domain: 'Web Development',
  },
  {
    id: 'proj-014',
    name: 'Social Media Application',
    domain: 'Web Development',
  },
  {
    id: 'proj-015',
    name: 'Project Management Tool',
    domain: 'Web Development',
  },
  {
    id: 'proj-016',
    name: 'Real-time Collaboration Platform',
    domain: 'Web Development',
  },
  // Mobile App Projects
  {
    id: 'proj-017',
    name: 'Fitness Tracking Mobile App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-018',
    name: 'Weather Forecast Application',
    domain: 'Mobile App',
  },
  {
    id: 'proj-019',
    name: 'To-Do List Manager App',
    domain: 'Mobile App',
  },
  {
    id: 'proj-020',
    name: 'Expense Tracker Application',
    domain: 'Mobile App',
  },
  // Cloud Computing Projects
  {
    id: 'proj-021',
    name: 'Scalable Web Application on AWS',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-022',
    name: 'Kubernetes Microservices Architecture',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-023',
    name: 'Serverless Function Implementation',
    domain: 'Cloud Computing',
  },
  {
    id: 'proj-024',
    name: 'Cloud Storage Solution',
    domain: 'Cloud Computing',
  },
  // Data Science Projects
  {
    id: 'proj-025',
    name: 'Stock Market Prediction Model',
    domain: 'Data Science',
  },
  {
    id: 'proj-026',
    name: 'Customer Segmentation Analysis',
    domain: 'Data Science',
  },
  {
    id: 'proj-027',
    name: 'Big Data Processing Pipeline',
    domain: 'Data Science',
  },
  {
    id: 'proj-028',
    name: 'Data Visualization Dashboard',
    domain: 'Data Science',
  },
  // IoT Projects
  {
    id: 'proj-029',
    name: 'Smart Home Automation System',
    domain: 'IoT',
  },
  {
    id: 'proj-030',
    name: 'IoT Sensor Monitoring Platform',
    domain: 'IoT',
  },
  // Blockchain Projects
  {
    id: 'proj-031',
    name: 'Smart Contract Development',
    domain: 'Blockchain',
  },
  {
    id: 'proj-032',
    name: 'Cryptocurrency Wallet Application',
    domain: 'Blockchain',
  },
];

export const domains = [
  'AI/ML',
  'Cybersecurity',
  'DBMS',
  'Web Development',
  'Mobile App',
  'Cloud Computing',
  'Data Science',
  'IoT',
  'Blockchain',
];

export const categories = [
  { id: 'aiml', name: 'AI/ML', icon: '🤖' },
  { id: 'cyber', name: 'Cybersecurity', icon: '🔒' },
  { id: 'dbms', name: 'DBMS', icon: '🗄️' },
  { id: 'web', name: 'Web Development', icon: '🌐' },
  { id: 'mobile', name: 'Mobile App', icon: '📱' },
  { id: 'cloud', name: 'Cloud Computing', icon: '☁️' },
  { id: 'data', name: 'Data Science', icon: '📊' },
  { id: 'iot', name: 'IoT', icon: '📡' },
  { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
];
