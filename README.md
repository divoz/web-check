<!-- These are icon options: (▫️,▸,◦,✅,🔄,·,→,➖,☑️,✨,🚀,🔍,🔑,📦,🛠️,🔧,🟨,💥,🧩,❗️,❌,🔚,🧠) -->

# 🔍 Web Check

![WIP](https://img.shields.io/badge/status-in--progress-yellow)

_A work-in-progress full-stack app for scanning browser security risks._

> _**\*The goal** is to create a real-world tool that puts development and security into practice together.\*_

#

### 🚀 Upcoming Features

_Input and future functionality overview_

▸ Input any website URL and scan for missing security headers  
▸ Clear, readable results shown in the frontend  
▸ Basic security scoring system (in progress)  
▸ Educational hints based on missing headers  
▸ MongoDB integration for scan history (planned)  
▸ User authentication (optional, future)  
▸ More browser-level security checks (e.g. CSP, JS risk patterns)

#

### Project Structure + Tech Stack

```
web-check/
├──  client/     → React app + Tailwind (frontend)
├──  server/     → Express, Axios + MongoDB (backend)
├──  README.md   → Project overview and instructions
```

#

### Getting Started (Local Setup)

```
1. Clone the repo
   git clone https://github.com/divoz/web-check.git
   cd web-check

2. Install and run backend
   cd server
   npm install

3. Install and run the frontend
   cd ../client
   npm install
   npm start
```
