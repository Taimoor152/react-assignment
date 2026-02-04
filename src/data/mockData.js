// Dashboard Data
export const dashboardMetrics = [
  { value: '78.65%', label: 'Overall Progress', color: '#c41e3a' },
  { value: '95', label: 'Total Criteria', color: '#ff9800' },
  { value: '52', label: 'Completed Criteria', color: '#4caf50' },
  { value: '386', label: 'Evidence Documents', color: '#2196f3' },
  { value: '302', label: 'Evidence (Completed)', color: '#4caf50' },
  { value: '258', label: 'Uploaded To DGA', color: '#4caf50' },
];

export const timelineMilestones = [
  { date: 'Mar 17', label: 'Kickoff Workshop', status: 'completed' },
  { date: 'March 18', label: 'Data Collection', status: 'completed' },
  { date: 'May 8', label: 'Initial Phase', status: 'delayed' },
  { date: 'May 9-July 12', label: 'Verification', status: 'delayed' },
  { date: 'July 13', label: 'Completion Reviews', status: 'delayed' },
  { date: 'August 21', label: 'Cycle Conclusion', status: 'delayed' },
];

export const progressCategories = [
  {
    id: 'strategy-planning',
    name: 'Strategy And Planning',
    progress: 97.78,
    color: '#1e3a5f',
    subcategories: [
      { id: 'digital-transformation', name: 'Digital Transformation', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
      ]},
      { id: 'digital-governance', name: 'Digital Governance', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'delayed' },
      ]},
      { id: 'enterprise-arch', name: 'Enterprise Architecture', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'completed' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'completed' },
      ]},
    ],
  },
  {
    id: 'org-culture',
    name: 'Organization And Culture',
    progress: 70.83,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Digital Culture And Environment', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
      ]},
      { name: 'Leadership Development', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'in-progress' },
      ]},
      { name: 'Skills & Capacity Building', circles: [
        { num: 1, status: 'in-progress' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'in-progress' },
      ]},
    ],
  },
  {
    id: 'operations',
    name: 'Operations And Execution',
    progress: 80.00,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Business Processes', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'in-progress' },
      ]},
      { name: 'Business Continuity', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'in-progress' },
        { num: 4, status: 'in-progress' },
        { num: 5, status: 'in-progress' },
        { num: 6, status: 'in-progress' },
        { num: 7, status: 'completed' },
      ]},
    ],
  },
  {
    id: 'business-continuity',
    name: 'Business Continuity',
    progress: 90.59,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Risk Management', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'in-progress' },
      ]},
    ],
  },
  {
    id: 'info-tech',
    name: 'Information Technology',
    progress: 75.00,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Support Systems', circles: [
        { num: 1, status: 'partially-uploaded' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'fully-uploaded' },
        { num: 5, status: 'fully-uploaded' },
      ]},
      { name: 'IT Infrastructure', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'fully-uploaded' },
        { num: 5, status: 'fully-uploaded' },
        { num: 6, status: 'fully-uploaded' },
        { num: 7, status: 'not-started' },
      ]},
      { name: 'Cloud Infrastructure', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
      ]},
    ],
  },
  {
    id: 'governance',
    name: 'Comprehensive Governance',
    progress: 64.44,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Governance Platforms', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'in-progress' },
        { num: 4, status: 'in-progress' },
        { num: 5, status: 'fully-uploaded' },
        { num: 6, status: 'fully-uploaded' },
        { num: 7, status: 'completed' },
        { num: 8, status: 'completed' },
        { num: 9, status: 'not-started' },
      ]},
    ],
  },
  {
    id: 'channels',
    name: 'Channels And Services',
    progress: 100,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Service Quality', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
      ]},
      { name: 'Digital Channels', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'in-progress' },
      ]},
    ],
  },
  {
    id: 'beneficiary',
    name: 'Beneficiary Centralization',
    progress: 60.00,
    color: '#1e3a5f',
    subcategories: [
      { name: 'User Engagement', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'not-started' },
      ]},
      { name: 'User Relationship', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
      ]},
      { name: 'User Experience', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
        { num: 4, status: 'in-progress' },
        { num: 5, status: 'in-progress' },
      ]},
    ],
  },
  {
    id: 'gov-data',
    name: 'Government Data',
    progress: 87.50,
    color: '#1e3a5f',
    subcategories: [
      { name: 'Data Governance', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'delayed' },
      ]},
      { name: 'Data Usage & Availability', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'delayed' },
      ]},
      { name: 'Open Data', circles: [
        { num: 1, status: 'completed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'completed' },
      ]},
    ],
  },
  {
    id: 'research',
    name: 'Research And Innovation',
    progress: 17.65,
    color: '#c41e3a',
    subcategories: [
      { name: 'Innovation', circles: [
        { num: 1, status: 'delayed' },
        { num: 2, status: 'in-progress' },
        { num: 3, status: 'delayed' },
        { num: 4, status: 'in-progress' },
      ]},
      { name: 'Creative Solutions', circles: [
        { num: 1, status: 'in-progress' },
        { num: 2, status: 'in-progress' },
      ]},
    ],
  },
];

export const topLeaders = [
  {
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    score: 96,
    avatar: 'https://ui-avatars.com/api/?name=Ahmed+Al-Ali&background=e8f5e9&color=2e7d32&size=40',
  },
  {
    name: 'Sarah Al-Khaled',
    perspective: 'Beneficiary Perspective',
    score: 94,
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Al-Khaled&background=e3f2fd&color=1565c0&size=40',
  },
  {
    name: 'Mohammad Al-Mansour',
    perspective: 'IT Perspective',
    score: 92,
    avatar: 'https://ui-avatars.com/api/?name=Mohammad+Al-Mansour&background=fff3e0&color=e65100&size=40',
  },
];

export const recentActivities = [
  {
    text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: '5 Mins Ago',
  },
  {
    text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: '20 Mins Ago',
  },
  {
    text: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: '1 Hour Ago',
  },
];

export const performanceData = [
  { month: 'Jan', value: 78 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 68 },
  { month: 'May', value: 82 },
  { month: 'Jun', value: 75 },
  { month: 'Jul', value: 58 },
  { month: 'Aug', value: 85 },
  { month: 'Sep', value: 70 },
  { month: 'Oct', value: 65 },
  { month: 'Nov', value: 78 },
  { month: 'Dec', value: 72 },
];

// Details Page Data
export const criterionDetails = {
  id: 'digital-transformation-strategic-planning',
  category: 'Strategy & Planning',
  title: 'Digital Transformation Strategic Planning',
  description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  evidenceSummary: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  overview: {
    objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
    implementationRequirements: [
      'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
      'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
      'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
    ],
    evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    scope: 'All Government Entities.',
  },
  leaders: [
    {
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: 'https://ui-avatars.com/api/?name=Ahmed+Al-Ali&background=e8f5e9&color=2e7d32&size=40',
    },
    {
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: 'https://ui-avatars.com/api/?name=Ahmed+Al-Ali&background=e8f5e9&color=2e7d32&size=40',
    },
  ],
  evidenceDocuments: [
    {
      number: '5.4.1.1',
      name: 'Digital_Transformation_Plan.Pdf',
      lead: 'Ahmed Khaled',
      preparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Approved',
    },
    {
      number: '5.4.1.2',
      name: 'KPI_Framework.Xlsx',
      lead: 'Mona Hamed',
      preparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review',
    },
    {
      number: '5.4.1.3',
      name: 'Roadmap_Version1.Docx',
      lead: 'Rami AlSharif',
      preparer: 'Rami AlSharif',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'Pending Review',
    },
  ],
  comments: [
    {
      id: 1,
      author: 'Sara Ibrahim',
      initials: 'E',
      date: '2025-08-05',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
    },
    {
      id: 2,
      author: 'Mona Hamed',
      initials: 'M',
      date: '2025-08-05',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
    },
  ],
  recentActivities: [
    {
      text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
      time: '5 Mins Ago',
    },
    {
      text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
      time: '20 Mins Ago',
    },
    {
      text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
      time: '1 Hour Ago',
    },
  ],
};

