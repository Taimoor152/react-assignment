# TAHWUL Dashboard - React Assignment

A comprehensive React dashboard application for **"TAHWUL - Enabling Digital Transformation"** built as part of a frontend development assessment.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-6.20.0-CA4245?logo=react-router)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Screenshots

### Screen 1: Dashboard
- Project Timeline with milestone indicators
- Key Metrics cards (6 statistics)
- Progress Status grid with 10 category columns
- Compliance Score & Audit Readiness gauges
- Top Performing Leaders & Recent Activities

### Screen 2: Details Page - Overview Tab
- Back navigation with page title
- Evidence summary cards
- Structured content sections (Objective, Requirements, Scope)
- Leaders section

### Screen 3: Details Page - Evidence Tab
- Evidence documents table with sortable columns
- Status badges (Approved, Pending Review)
- Comments section with Post Comment form
- Recent Activities sidebar

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/React-assignment.git
```

2. **Navigate to the project directory**
```bash
cd React-assignment
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm start
```

5. **Open in browser**
```
http://localhost:3000
```

---

## 🗂️ Project Structure

```
React-assignment/
├── public/
│   └── index.html
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Layout/          # Shared layout wrapper
│   │   ├── Sidebar/         # Navigation sidebar
│   │   ├── Header/          # Top header with search
│   │   ├── ProjectTimeline/ # Timeline visualization
│   │   ├── KeyMetrics/      # Statistics cards
│   │   ├── ProgressStatus/  # Category grid with sub-component
│   │   ├── ComplianceScore/ # Gauge chart component
│   │   ├── TopLeaders/      # Leaders list
│   │   ├── RecentActivities/# Activity feed
│   │   ├── PerformanceChart/# Bar chart (Recharts)
│   │   ├── AuditReadiness/  # Readiness gauge
│   │   └── BottomBar/       # Bottom notification bar
│   │
│   ├── pages/               # Page/Screen components
│   │   ├── Dashboard/       # Screen 1 - Main dashboard
│   │   └── DetailsPage/     # Screens 2 & 3
│   │       ├── EvidenceTable.js
│   │       └── CommentsSection.js
│   │
│   ├── data/
│   │   └── mockData.js      # Static/mock JSON data
│   │
│   ├── App.js               # Main app with routing
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point
│   └── index.css            # Base styles
│
├── package.json
├── .gitignore
└── README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React 18 | UI Library with Hooks |
| React Router v6 | Client-side routing |
| Recharts | Chart visualization |
| CSS3 | Styling (Grid, Flexbox) |
| SVG | Custom icons & gauges |

---

## 📱 Features

- ✅ **3 Complete Screens** matching the design
- ✅ **Responsive Design** - Desktop, Tablet, Mobile
- ✅ **Component-based Architecture** - Reusable components
- ✅ **React Router** - Navigation between pages
- ✅ **Mock Data** - Static JSON for demonstration
- ✅ **Modern UI** - Clean design with proper spacing
- ✅ **Interactive Elements** - Tabs, clickable items, hover states
- ✅ **Charts** - Bar chart with Recharts library
- ✅ **SVG Icons** - Custom icons throughout

---

## 🔗 Routes

| Route | Screen | Description |
|-------|--------|-------------|
| `/` | Dashboard | Main dashboard with all widgets |
| `/details/:id` | Details Page | Overview & Evidence tabs |

---

## 📊 Navigation Flow

```
Dashboard (/)
    │
    │  Click any subcategory in Progress Status
    ▼
Details Page (/details/strategy-planning)
    │
    ├── [Overview] tab  ← Default view
    │
    └── [Evidence] tab  ← Click to switch
```

---

## 🎨 Design Specifications

**Color Palette:**
- Primary Navy: `#1e3a5f`
- Success Green: `#4caf50`
- Warning Orange: `#ff9800`
- Danger Red: `#f44336`
- Background: `#f5f7f9`

**Responsive Breakpoints:**
- Desktop: `> 1200px`
- Tablet: `768px - 1200px`
- Mobile: `< 768px`

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm build` | Build for production |
| `npm test` | Run tests |

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Design provided as part of the assessment
- Built with React and modern web technologies
