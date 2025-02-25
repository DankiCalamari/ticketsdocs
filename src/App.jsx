import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <aside className="w-64 h-screen bg-white dark:bg-dark-bg border-r border-gray-200 dark:border-dark-border fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-heading">Ticket System</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card dark:text-dark-text transition-colors duration-200">
                Getting Started
              </Link>
            </li>
            <li>
              <Link to="/installation" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card dark:text-dark-text transition-colors duration-200">
                Installation
              </Link>
            </li>
            <li>
              <Link to="/configuration" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card dark:text-dark-text transition-colors duration-200">
                Configuration
              </Link>
            </li>
            <li>
              <Link to="/api" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card dark:text-dark-text transition-colors duration-200">
                API Reference
              </Link>
            </li>
            <li>
              <Link to="/production" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card dark:text-dark-text transition-colors duration-200">
                Production Deployment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

const MainContent = () => (
  <main className="ml-64 p-8 max-w-4xl mx-auto">
    <Routes>
      <Route path="/" element={
        <div className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to Ticket System
          </h1>
          
          <p className="text-lg mb-8">
            This documentation will help you get started with the Ticket System,
            a comprehensive solution for managing support tickets and customer service.
          </p>
          
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="mb-6">
            The Ticket System consists of two main components:
          </p>
          
          <ul className="list-disc pl-8 mb-8 space-y-2">
            <li>A React-based frontend client application</li>
            <li>A Node.js backend server with Express</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-6">Features</h2>
          <ul className="list-disc pl-8 mb-8 space-y-2">
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

          <h2 className="text-3xl font-semibold mb-6">System Requirements</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Minimum Hardware Requirements
            </h3>
            
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>CPU: 2 cores</li>
              <li>RAM: 4GB</li>
              <li>Storage: 10GB available space</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">
              Supported Browsers
            </h3>
            
            <ul className="list-disc pl-8 space-y-2">
              <li>Chrome (latest 2 versions)</li>
              <li>Firefox (latest 2 versions)</li>
              <li>Safari (latest 2 versions)</li>
              <li>Edge (latest 2 versions)</li>
            </ul>
          </div>
        </div>
      } />
      
      <Route path="/installation" element={
        <div className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">
            Installation Guide
          </h1>
          
          <p className="text-lg mb-8">
            Follow this comprehensive guide to set up the Ticket System in your environment.
          </p>
          
          <h2 className="text-3xl font-semibold mb-6">Prerequisites</h2>
          <ul className="list-disc pl-8 mb-8 space-y-2">
            <li>Node.js (v14 or higher)</li>
            <li>PostgreSQL (v12 or higher)</li>
            <li>Git</li>
            <li>PM2 (for production deployment)</li>
          </ul>

          <h2 className="text-3xl font-semibold mb-6">Database Setup</h2>
          <ol className="list-decimal pl-8 mb-8 space-y-6">
            <li>
              <p className="font-semibold mb-2">Install PostgreSQL:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  # For Ubuntu/Debian<br/>
                  sudo apt-get update<br/>
                  sudo apt-get install postgresql postgresql-contrib<br/>
                  <br/>
                  # For CentOS/RHEL<br/>
                  sudo dnf install postgresql postgresql-server<br/>
                  sudo postgresql-setup --initdb<br/>
                  sudo systemctl start postgresql<br/>
                  sudo systemctl enable postgresql
                </div>
              </div>
            </li>
            
            <li>
              <p className="font-semibold mb-2">Create Database:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  sudo -u postgres psql<br/>
                  <br/>
                  -- Create the database<br/>
                  CREATE DATABASE ticketing;
                </div>
              </div>
            </li>
            
            <li>
              <p className="font-semibold mb-2">Set Up Database User:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  -- Create a new user with secure password<br/>
                  CREATE USER ticketing_user WITH PASSWORD 'secure_password';<br/>
                  <br/>
                  -- Grant necessary permissions<br/>
                  GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO ticketing_user;
                </div>
              </div>
            </li>
          </ol>

          <h2 className="text-3xl font-semibold mb-6">Environment Configuration</h2>
          <p className="mb-4">
            Create a <code>.env</code> file in the root directory of the backend server with the following configuration:
          </p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-primary-500">
            <div className="font-mono text-sm bg-gray-50 p-3 rounded">
              ##################################### <br/>
              # Server Configuration <br/>
              ##################################### <br/>
              NODE_ENV=production <br/>
              PORT=3000 <br/>
              <br/>
              ##################################### <br/>
              # Database Configuration <br/>
              ##################################### <br/>
              DATABASE_URL=postgresql://ticketing_user:secure_password@localhost:5432/ticketing <br/>
              <br/>
              ##################################### <br/>
              # Azure AD SSO Configuration <br/>
              ##################################### <br/>
              AZURE_CLIENT_ID=your_azure_client_id <br/>
              AZURE_CLIENT_SECRET=your_azure_client_secret <br/>
              AZURE_TENANT_ID=your_azure_tenant_id <br/>
              <br/>
              ##################################### <br/>
              # Email Configuration <br/>
              ##################################### <br/>
              # SMTP Server Settings <br/>
              SMTP_HOST=smtp.office365.com <br/>
              SMTP_PORT=587 <br/>
              <br/>
              # SMTP Authentication <br/>
              SMTP_USER=your_email@domain.com <br/>
              SMTP_CLIENT_ID=your_smtp_client_id <br/>
              SMTP_CLIENT_SECRET=your_smtp_client_secret <br/>
              <br/>
              ##################################### <br/>
              # Security Configuration <br/>
              ##################################### <br/>
              # JWT Authentication <br/>
              JWT_SECRET=your_secure_jwt_secret <br/>
              <br/>
              # CORS Settings <br/>
              CORS_ORIGIN=https://yourdomain.com
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl font-semibold">Configuration Details</h3>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                <strong>Server Configuration:</strong>
                Basic server settings including environment and port
              </li>
              <li>
                <strong>Database Configuration:</strong>
                PostgreSQL connection string with credentials
              </li>
              <li>
                <strong>Azure AD SSO:</strong>
                Required for Single Sign-On integration
              </li>
              <li>
                <strong>Email Configuration:</strong>
                SMTP settings for sending notifications
              </li>
              <li>
                <strong>Security:</strong>
                JWT secret for token signing and CORS settings
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Backend Setup</h2>
          <ol className="list-decimal pl-8 mb-8 space-y-6">
            <li>
              <p className="font-semibold mb-2">Install Dependencies:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  cd server
                  npm install
                </div>
              </div>
            </li>
            
            <li>
              <p className="font-semibold mb-2">Build the Backend:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  npm run build
                </div>
              </div>
            </li>
            
            <li>
              <p className="font-semibold mb-2">Set up Process Manager (PM2):</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  # Install PM2 globally<br/>
                  npm install -g pm2<br/>
                  <br/>
                  # Start the application<br/>
                  pm2 start src/index.js --name "ticketing-api"<br/>
                  <br/>
                  # Ensure PM2 starts on system boot<br/>
                  pm2 startup<br/>
                  pm2 save
                </div>
              </div>
            </li>
          </ol>

          <h2 className="text-3xl font-semibold mb-6">Frontend Setup</h2>
          <ol className="list-decimal pl-8 mb-8 space-y-6">
            <li>
              <p className="font-semibold mb-2">Install Dependencies:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  cd client<br/>
                  npm install
                </div>
              </div>
            </li>
            
            <li>
              <p className="font-semibold mb-2">Build the Frontend:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  npm run build
                </div>
              </div>
            </li>
          </ol>

          <h2 className="text-3xl font-semibold mb-6">Maintenance Tasks</h2>
          <ul className="list-disc pl-8 mb-8 space-y-2">
            <li>Monitor disk space and logs daily</li>
            <li>Review and rotate API keys every 90 days</li>
            <li>Update dependencies monthly</li>
            <li>Monitor database performance weekly</li>
            <li>Review security alerts and patches as they arrive</li>
            <li>Perform database vacuum and analyze weekly</li>
            <li>Review application logs daily</li>
            <li>Test backup restoration monthly</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-700">
              Note: Remember to replace placeholder values (passwords, API keys) with your actual production values.
              Keep all sensitive information secure and never commit them to version control.
            </p>
          </div>
        </div>
      } />
      
      <Route path="/configuration" element={
        <div className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">
            Configuration
          </h1>
          
          <p className="text-lg mb-8">
            Learn how to configure the Ticket System.
          </p>
          
          <h2 className="text-3xl font-semibold mb-6">Environment Variables</h2>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-primary-500">
            <div className="font-mono text-sm bg-gray-50 p-3 rounded">
              ##################################### <br/>
              # Server Configuration <br/>
              ##################################### <br/>
              NODE_ENV=production <br/>
              PORT=3000 <br/>
              <br/>
              ##################################### <br/>
              # Database Configuration <br/>
              ##################################### <br/>
              DATABASE_URL=postgresql://ticketing_user:secure_password@localhost:5432/ticketing <br/>
              <br/>
              ##################################### <br/>
              # Azure AD SSO Configuration <br/>
              ##################################### <br/>
              AZURE_CLIENT_ID=your_azure_client_id <br/>
              AZURE_CLIENT_SECRET=your_azure_client_secret <br/>
              AZURE_TENANT_ID=your_azure_tenant_id <br/>
              <br/>
              ##################################### <br/>
              # Email Configuration <br/>
              ##################################### <br/>
              # SMTP Server Settings <br/>
              SMTP_HOST=smtp.office365.com <br/>
              SMTP_PORT=587 <br/>
              <br/>
              # SMTP Authentication <br/>
              SMTP_USER=your_email@domain.com <br/>
              SMTP_CLIENT_ID=your_smtp_client_id <br/>
              SMTP_CLIENT_SECRET=your_smtp_client_secret <br/>
              <br/>
              ##################################### <br/>
              # Security Configuration <br/>
              ##################################### <br/>
              # JWT Authentication <br/>
              JWT_SECRET=your_secure_jwt_secret <br/>
              <br/>
              # CORS Settings <br/>
              CORS_ORIGIN=https://yourdomain.com
            </div>
          </div>
        </div>
      } />
      
      <Route path="/api" element={
        <div className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">
            API Reference
          </h1>
          
          <p className="text-lg mb-8">
            Complete reference for the Ticket System REST API endpoints.
          </p>
          
          <h2 className="text-3xl font-semibold mb-6">Authentication</h2>
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-primary-500">
            <div className="font-mono text-sm bg-gray-50 p-3 rounded">
              POST /api/auth/login<br/>
              <br/>
              Request Body:<br/>
              {`{
  "email": "user@example.com",
  "password": "your_password"
}`}
            </div>
          </div>
        </div>
      } />
      
      <Route path="/production" element={
        <div className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">
            Production Deployment
          </h1>
          
          <p className="text-lg mb-8">
            Guide for deploying the Ticket System to production.
          </p>
          
          <h2 className="text-3xl font-semibold mb-6">Build Steps</h2>
          <ol className="list-decimal pl-8 mb-8 space-y-6">
            <li>
              <p className="font-semibold mb-2">Build the application:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  npm run build
                </div>
              </div>
            </li>
            <li>
              <p className="font-semibold mb-2">Deploy to production server:</p>
              <div className="bg-white dark:bg-dark-card shadow-md rounded-lg p-6 mb-4 border-l-4 border-primary-500 dark:border-primary-400">
                <div className="font-mono text-sm bg-gray-50 dark:bg-dark-bg p-3 rounded">
                  npm run deploy
                </div>
              </div>
            </li>
          </ol>
        </div>
      } />
    </Routes>
  </main>
)

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App