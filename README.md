# Parabank Playwright BDD Automation Framework

This project is an **end-to-end automation testing framework** built using **Playwright** and **Cucumber (BDD)** for the [Parabank demo application](https://parabank.parasoft.com/parabank/index.htm).

It follows a **Page Object Model (POM)** design pattern and integrates **Behavior-Driven Development (BDD)** using Gherkin syntax for better readability and collaboration between QA and non-technical stakeholders.

---

## Framework Overview

**Tech Stack:**
- **Playwright** – for fast and reliable browser automation  
- **Cucumber.js** – for BDD (Given/When/Then style scenarios)  
- **Page Object Model (POM)** – for clean, maintainable test structure  
- **HTML Reports** – auto-generated after each run  
- **Node.js + npm** – dependency management  

---

## 🗂️ Folder Structure

```
parabank-playwright-bdd/
│
├── 📁 features/                     # Gherkin feature files
│   ├── signup_login.feature
│
├── 📁 pages/                        # Page Object Model classes
│   ├── HomePage.js
│   ├── RegisterPage.js
│   ├── AccountPage.js
│
├── 📁 step-definitions/             # Step definitions mapped to feature files
│   ├── signupLoginSteps.js
│
├── 📁 support/                      # Hooks, config, environment setup
│   ├── hooks.js
│
├── 📁 reports/                      # HTML/JSON reports generated after test run
│
├── 📄 cucumber.js                   # Cucumber configuration
├── 📄 package.json                  # Node.js dependencies and scripts
├── 📄 README.md                     # Project documentation
├── 📄 .gitignore                    # Ignore unnecessary files like node_modules
└── 📁 test-data/                    # Test data files (Excel, JSON, etc.)
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/PalanchawarSudheerKumar/parabank-playwright-bdd.git
cd parabank-playwright-bdd
```

### 2️⃣ Install dependencies
Ensure you have **Node.js (>= 18)** installed, then run:
```bash
npm install
```

### 3️⃣ Verify Playwright browsers are installed
```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit required for tests.

---

## 🚀 Running the Tests

### ▶️ Run all scenarios
```bash
npx cucumber-js
```

### 🕶️ Run in headless mode
```bash
set PLAYWRRIGHT_HEADLESS=true && npx cucumber-js
```
*(Use `export` instead of `set` on macOS/Linux.)*

---
