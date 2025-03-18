# Personal Finance Visualizer

📌 Overview

The Personal Finance Visualizer is a web application designed to help users track their financial transactions, set budgets, and visualize spending patterns. It provides interactive charts and insights to improve financial planning and management.

# vercel link -

# Frontend - https://finance-frontend-sparsh.vercel.app/
# Backend - https://finance-backend-sparsh.vercel.app/


🚀 Features -

📊 Transaction Tracking: Add, update, and delete income/expenses.

💰 Budget Management: Set and compare budgets for different categories.

📈 Financial Insights: View spending trends with interactive charts.

🔄 Real-time Updates: Automatically refresh data after transactions.

📆 Monthly Summary: Compare actual expenses with budgeted amounts.


🛠️ Tech Stack-

Frontend: React.js, Next.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Charts & Visualization: Chart.js / Recharts

API Handling: Axios

🔧 Installation & Setup

Clone the repository:

git clone https://github.com/sparshspradhan/finance-frontend.git
cd frontend

Install dependencies:

npm install

Set up environment variables:

Create a .env.local file in the root directory.

Add the following variables:

NEXT_PUBLIC_API_BASE_URL=http://localhost:5008

Start the development server:

npm run dev

Run the backend (if applicable):

cd backend
npm start or node server.js

Open the app in your browser:

Visit http://localhost:3000

📌 API Endpoints

Method

Endpoint

Description

GET

/transactions

Fetch all transactions

POST

/transactions

Add a new transaction

PUT

/transactions/:id

Update a transaction

DELETE

/transactions/:id

Delete a transaction

GET

/summary

Get financial summary

🖥️ Project Structure

personal-finance-visualizer/
├── backend/
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactions.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── components/
│   │   ├── TransactionForm.js
│   │   ├── TransactionList.js
│   │   └── Charts.js
│   ├── pages/
│   │   └── index.js
│   ├── utils/
│   │   └── api.js
│   ├── package.json
│   └── tailwind.config.js
├── .env
└── README.md

# In Frontend we have-
📦 personal-finance-visualizer
 ┣ 📂 components        # Reusable UI components
 ┣ 📂 pages             # Next.js pages
 ┣ 📂 utils             # Helper functions & API calls
 ┣ 📂 styles            # Global styles & Tailwind config
 ┣ 📜 package.json      # Project metadata & dependencies
 ┣ 📜 README.md         # Project documentation

🎨 UI Components

TransactionForm: Handles transaction inputs.

TransactionList: Displays transaction history.

BudgetForm: Allows users to set budgets.

BudgetComparisonChart: Compares actual vs. budgeted spending.

Insights: Provides financial analysis and suggestions.

# ✅ Commands to Run the Project
Start MongoDB (if not already running):

mongod

# Run Backend:

cd backend
npm install
npm start or node server.js

Run Frontend:


# cd frontend:

npm install
npm run dev

