# Playwright Test Automation Framework

This repository contains an automated testing framework built with Playwright for web application testing.

## 🚀 Features

- Page Object Model (POM) design pattern
- Test execution in multiple browsers (Chromium, Firefox, WebKit)
- Parallel test execution
- Detailed HTML reports
- **Allure Test Reporting** with rich visualizations
- Screenshot capture on test failure
- Environment configuration management
- GitHub Actions CI/CD integration

## 📋 Prerequisites

Before running the tests, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Allure CLI (for local report generation)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Navigate to the project directory:
```bash
cd PlaywrightFrameWork
```

3. Install dependencies:
```bash
npm install
npm playwright install
```

4. Install Allure CLI globally (optional, for local development):
```bash
npm install -g allure-commandline
```

## 🏃‍♂️ Running Tests

### Basic Test Execution

To run all tests:
```bash
npx playwright test
```

To run tests in headed mode:
```bash
npx playwright test --headed
```

To run tests in a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Allure Reporting

To run tests with Allure reporter:
```bash
npm run test:allure
```

To generate and open Allure report:
```bash
npm run allure:generate
npm run allure:open
```

To run tests and automatically generate/open Allure report:
```bash
npm run test:allure:report
```

To serve Allure report (alternative to opening):
```bash
npm run allure:serve
```

## 📊 Reports

### HTML Report (Default)
After running tests, view the HTML report:
```bash
npm run report
```

### Allure Report
The Allure report provides rich test analytics including:
- Test execution trends
- Test case details with steps
- Screenshots and videos on failures
- Environment information
- Test categorization and tagging

## 🔄 GitHub Actions CI/CD

The repository includes a comprehensive GitHub Actions workflow that:

### Features:
- **Multi-browser testing**: Runs tests across Chromium, Firefox, and WebKit
- **Environment selection**: Supports qa, staging, and prod environments
- **Allure reporting**: Generates and uploads Allure reports as artifacts
- **Artifact management**: Uploads test results, screenshots, and reports
- **Combined reporting**: Merges results from all browsers into a single report
- **GitHub Pages deployment**: Automatically deploys Allure reports to GitHub Pages

### Triggering Workflows:
- **Automatic**: Triggers on push/PR to main, master, or develop branches
- **Manual**: Use workflow_dispatch to run tests with custom environment

### Downloading Reports:
1. Go to the Actions tab in your GitHub repository
2. Click on the latest workflow run
3. Scroll down to the "Artifacts" section
4. Download any of the following:
   - `combined-allure-report` - Complete Allure report with all browsers
   - `allure-report-{browser}` - Individual browser reports
   - `playwright-report-{browser}` - Playwright HTML reports
   - `test-results-{browser}` - Raw test results and screenshots

### GitHub Pages Setup (Optional):
To enable automatic deployment of Allure reports to GitHub Pages:
1. Go to repository Settings → Pages
2. Select "GitHub Actions" as the source
3. Reports will be available at: `https://{username}.github.io/{repository}/allure-report/`

## 🧹 Cleanup Commands

Clean up generated files:
```bash
npm run cleanup:all          # Clean all generated files
npm run cleanup:test-results # Clean only test results
npm run cleanup:reports      # Clean only reports
npm run cleanup:allure       # Clean only Allure files
```

## 🌍 Environment Configuration

Set the test environment:
```bash
TEST_ENV=qa npm run test
TEST_ENV=staging npm run test
TEST_ENV=prod npm run test
```

## 📁 Project Structure

```
├── .github/workflows/       # GitHub Actions workflows
├── src/
│   ├── pages/              # Page Object Model classes
│   ├── tests/              # Test specifications
│   ├── setup/              # Test setup and hooks
│   ├── utils/              # Utility functions
│   └── testData/           # Test data and environment configs
├── allure-results/         # Allure test results (generated)
├── allure-report/          # Allure HTML report (generated)
├── playwright-report/      # Playwright HTML report (generated)
├── test-results/           # Test artifacts (generated)
└── playwright.config.js    # Playwright configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests locally
5. Submit a pull request

## 📝 Notes

- The framework automatically captures screenshots on test failures
- Videos are recorded for failed tests
- Allure reports include detailed step-by-step execution
- All reports are retained for 30 days in GitHub Actions artifacts