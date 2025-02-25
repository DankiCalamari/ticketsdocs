import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Sidebar = () => (
  <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 overflow-y-auto">
    <div className="p-6">
      <h1 className="text-xl font-bold text-gray-900">Ticket System</h1>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-100">Getting Started</Link>
          </li>
          <li>
            <Link to="/installation" className="block p-2 rounded hover:bg-gray-100">Installation</Link>
          </li>
          <li>
            <Link to="/configuration" className="block p-2 rounded hover:bg-gray-100">Configuration</Link>
          </li>
          <li>
            <Link to="/api" className="block p-2 rounded hover:bg-gray-100">API Reference</Link>
          </li>
          <li>
            <Link to="/production" className="block p-2 rounded hover:bg-gray-100">Production Deployment</Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
)

const MainContent = () => (
  <main className="ml-64 p-8">
    <Routes>
      <Route path="/" element={
        <div>
          <h1 className="text-3xl font-bold mb-6">Welcome to Ticket System</h1>
          <p className="mb-6">This documentation will help you get started with the Ticket System, a comprehensive solution for managing support tickets and customer service.</p>
          
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">The Ticket System consists of two main components:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>A React-based frontend client application</li>
            <li>A Node.js backend server with Express</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>User authentication and authorization</li>
            <li>Ticket creation and management</li>
            <li>Real-time updates using WebSocket</li>
            <li>Email notifications for ticket updates</li>
            <li>Customizable workflows and status transitions</li>
            <li>Role-based access control</li>
            <li>Advanced ticket filtering and search</li>
            <li>File attachments support</li>
            <li>Audit logging</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Minimum Hardware Requirements</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>CPU: 2 cores</li>
              <li>RAM: 4GB</li>
              <li>Storage: 10GB available space</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Supported Browsers</h3>
            <ul className="list-disc pl-6">
              <li>Chrome (latest 2 versions)</li>
              <li>Firefox (latest 2 versions)</li>
              <li>Safari (latest 2 versions)</li>
              <li>Edge (latest 2 versions)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Quick Start Guide</h2>
          <ol className="list-decimal pl-6">
            <li className="mb-2">Follow the installation guide to set up the system</li>
            <li className="mb-2">Configure your environment variables</li>
            <li className="mb-2">Create an admin account using the CLI tool</li>
            <li className="mb-2">Log in to the admin dashboard</li>
            <li className="mb-2">Set up your organization structure and user roles</li>
            <li>Start managing tickets!</li>
          </ol>
        </div>
      } />
      <Route path="/production" element={
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Production Deployment Guide</h1>
          
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Node.js (v14 or higher)</li>
            <li>Git</li>
            <li>GitHub account with repository access</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Build and Deploy</h2>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <p>Build the documentation site:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>npm run build</code>
              </pre>
            </li>
            <li className="mb-4">
              <p>The build output will be in the `dist` directory. You can deploy to GitHub Pages using the provided script:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>npm run deploy</code>
              </pre>
            </li>
            <li>
              <p>After deployment, your documentation will be available at:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>https://[your-github-username].github.io/rentickets/</code>
              </pre>
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">Manual Deployment</h2>
          <p>If you prefer to deploy to your own web server:</p>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <p>Build the site:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>npm run build</code>
              </pre>
            </li>
            <li className="mb-4">
              <p>Copy the contents of the `dist` directory to your web server's root directory.</p>
            </li>
            <li>
              <p>Configure your web server (e.g., Nginx) to serve the static files:</p>
              <pre className="bg-gray-100 p-4 rounded-lg mb-4">
                <code>{`server {
    listen 80;
    server_name yourdomain.com;

    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}`}</code>
              </pre>
            </li>
          </ol>
        </div>
      } />
      <Route path="/installation" element={
        <div>
          <h1 className="text-3xl font-bold mb-6">Installation Guide</h1>
          <p className="mb-6">Follow these steps to set up the Ticket System in your environment.</p>
          
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Node.js (v14 or higher)</li>
            <li>MySQL (v8 or higher)</li>
            <li>Git</li>
            <li>Redis (v6 or higher) for caching and real-time features</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Setup Steps</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">1. Clone and Setup</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              {`# Clone the repository
git clone https://github.com/DankiCalamari/rentickets.git

# Navigate to project directory
cd rentickets

# Install dependencies
npm install`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">2. Local Development</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              {`# Start the development server
npm run dev

# The documentation site will be available at http://localhost:3002`}
            </pre>

            <h3 className="text-lg font-semibold mb-2">3. Build and Deploy</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4">
              {`# Build the documentation site
npm run build

# Deploy to GitHub Pages
npm run deploy`}
            </pre>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Common Issues</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold">Database Connection Errors</h4>
              <p>If you encounter database connection issues:</p>
              <ul className="list-disc pl-6">
                <li>Verify MySQL is running</li>
                <li>Check database credentials in example.env</li>
                <li>Ensure database exists and is accessible</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">WebSocket Connection Issues</h4>
              <p>If real-time updates are not working:</p>
              <ul className="list-disc pl-6">
                <li>Check Redis connection</li>
                <li>Verify WebSocket port is not blocked</li>
                <li>Check browser console for connection errors</li>
              </ul>
            </div>
          </div>
        </div>
      } />
      <Route path="/configuration" element={
        <div>
          <h1>Configuration</h1>
          <p>Learn how to configure the Ticket System to match your organization's needs.</p>
          
          <h2>Environment Variables</h2>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4">
            {`# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ticket_system

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

# Redis Configuration
REDIS_URL=redis://localhost:6379

# Email Configuration
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_CLIENT_ID=your_smtp_client_id
SMTP_CLIENT_SECRET=your_smtp_client_secret`}
          </pre>

          <h2>Custom Workflows</h2>
          <p>You can customize ticket workflows by modifying the workflow configuration file:</p>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4">
            {`// workflows.config.js
module.exports = {
  states: ['Open', 'In Progress', 'Review', 'Closed'],
  transitions: [
    { from: 'Open', to: 'In Progress' },
    { from: 'In Progress', to: 'Review' },
    { from: 'Review', to: 'Closed' },
    { from: 'Review', to: 'In Progress' }
  ],
  roles: {
    agent: ['Open', 'In Progress', 'Review'],
    supervisor: ['Open', 'In Progress', 'Review', 'Closed']
  }
}`}
          </pre>
        </div>
      } />
      <Route path="/api" element={
        <div>
          <h1>API Reference</h1>
          <p>Complete reference for the Ticket System REST API endpoints.</p>

          <h2>Authentication</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Login</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-2">
              {`POST /api/auth/login

Request Body:
{
  "email": "user@example.com",
  "password": "your_password"
}

Response:
{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "role": "agent"
  }
}`}
            </pre>
          </div>

          <h2>Tickets</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Create Ticket</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-2">
              {`POST /api/tickets

Request Headers:
Authorization: Bearer jwt_token

Request Body:
{
  "title": "Issue with login",
  "description": "Unable to login to the application",
  "priority": "high",
  "category": "technical"
}

Response:
{
  "id": 1,
  "title": "Issue with login",
  "status": "Open",
  "created_at": "2024-01-20T10:00:00Z"
}`}
            </pre>

            <h3 className="text-lg font-semibold mt-4">List Tickets</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-2">
              {`GET /api/tickets

Request Headers:
Authorization: Bearer jwt_token

Query Parameters:
status - Filter by status
page - Page number
limit - Items per page

Response:
{
  "tickets": [...],
  "total": 100,
  "page": 1,
  "limit": 10
}`}
            </pre>
          </div>
        </div>
      } />
    </Routes>
  </main>
)

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App