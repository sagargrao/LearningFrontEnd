# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Run React App Locally
```
# only once
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash &&
# beelow command not needed if "grep nvm ~/.bashrc" :displays nvm details and "command -v nvm" :displays nvm
export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" &&
nvm install --lts
# for every new environment
nvm use --lts
mkdir Downloads/my-react-app-env
cd Downloads/my-react-app-env
npm create vite@latest my-react-app --template react
cd my-react-app/
npm install
npm run dev
# for production: creates /dist folder
npm run build
# npx is used for temporary installation, useful for just to try new packages
npx serve -s build 
```

# Undo Run React App Locally and all installations
```
rm -rf ~/.nvm
sed -i '/NVM_DIR\|nvm.sh\|bash_completion/d' ~/.bashrc
source ~/.bashrc
# Then uninstall node versions (optional):
nvm uninstall <version>
# Remove React project:
rm -rf ~/Downloads/my-react-app-env/my-react-app
# (Optional) Remove local dependencies if project still exists:
cd ~/Downloads/my-react-app-env/my-react-app
rm -rf node_modules package-lock.json
```

# globally install and uninstall serve
```
npm install -g serve   #install
serve -s dist  #use
npm uninstall -g serve   #uninstall
```

# Project Details: From Author Rajes T H
---
## Language Used
JavaScript ← (language)
   ↓
Node.js ← (runs JavaScript outside the browser)
   ↓
React ← (library to build web UIs using JavaScript)


## 📊 **Rendering Flow Diagram**

```
+---------------------------+
|          LOGIN            |
|  [ Admin / User radio ]   |
|  [ Username Input ]       |
|  [ Password Input ]       |
|      [ Login Button ]     |
+-------------+-------------+
              |
              v
+---------------------------+
|     DASHBOARD LAYOUT      |
| [ Sidebar / Top Menu ]    |
|   - Logout Button         |
|                           |
|  +---------------------+  |
|  | Main Content Area   |  |
|  +---------------------+  |
+-------------+-------------+
              |
      +-------+-------+
      |               |
      v               v
+----------------+  +----------------+
| Admin Dashboard|  | User Dashboard |
|                |  |                |
| - Add Student  |  | - View Students|
| - Add Subject  |  | - View Subjects|
| - Add Faculty  |  |                |
| - Associate    |  +----------------+
|   Faculty<>Sub |
+----------------+
              |
              v
+---------------------------+
|  Any page: Logout Click   |
|  => Back to Login Page    |
+---------------------------+
```

**Key Features:**

* **Common Layout** (sidebar/topbar with Logout)
* **Dummy login** just changes state
* **Placeholders** for forms and lists
* **Routing and Navigation**

---

## 🧩 **Project File Structure**

```
src/
├── App.jsx
├── main.jsx
├── context/
│   └── AuthContext.jsx
├── services/
│   └── api.js (placeholders)
├── components/
│   ├── layouts/
│   │   ├── LoginLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── forms/
│   │   ├── AddStudentForm.jsx
│   │   ├── AddSubjectForm.jsx
│   │   ├── AddFacultyForm.jsx
│   │   └── AssociateFacultySubject.jsx
│   └── pages/
│       ├── LoginPage.jsx
│       ├── AdminDashboard.jsx
│       ├── UserDashboard.jsx
│       └── NotFound.jsx
└── routes.jsx
```

---

## 🪜 **Main Logic Overview**

**1. Auth Context:**

* Manages dummy login state
* Exposes `login`, `logout`, `userRole` (admin/user)

**2. Routing:**

* `/` → Login page
* `/admin` → Admin Dashboard
* `/user` → User Dashboard
* `/logout` → resets login state
* 404 fallback

**3. Layouts:**

* **LoginLayout**: Centered form
* **DashboardLayout**: Sidebar + TopBar + Content Area

---

## 🛠️ **Dockerization**

You prefer **Docker Run** over Compose—here’s how:

**Create `Dockerfile`:**

```Dockerfile
# Use Node image to build the app
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and Run Docker Image:**

```bash
# Build image
docker build -t react-frontend .

# Run container
docker run -d -p 8080:80 --name react-frontend-container react-frontend
```

✅ After this, visit `http://localhost:8080` to test your rendering.

---

## 🎯 **What to Expect in Rendering**

**Login Page:**

* Role selector: Admin / User
* Username & Password inputs (placeholders)
* Login button that just calls `setUserRole()`

**Admin Dashboard:**

* Sidebar with:

  * Add Student
  * Add Subject
  * Add Faculty
  * Associate Faculty to Subject
  * Logout
* Clicking a menu renders the form in content area (forms submit but just show “Added” alert)

**User Dashboard:**

* Sidebar with:

  * View Students (placeholder list)
  * View Subjects (placeholder list)
  * Logout

**Logout:**

* Any page → Logout → Login page

---


# Steps to Start Working

## Step 1: Do scaffolding of Folders and Files

✅ Run Project Scafolding Shell Scripts

make it exectable

```bash
chmod +x setup-react.sh &&
chmod +x SccafoldFiles.sh

```
Run
```bash
./setup-react.sh &&
./SccafoldFiles.sh
```

## Step 2: Copy Paste Code in file Codelog to scaffolded Project files

## Step 3: Built and run Docker Container

In your project folder (with Dockerfile):

Build Docker image
```bash
docker build -t react-frontend .
```

Run Docker container (map port 8080 to localhost)
```bash
docker run -d -p 8080:80 --name react-frontend-container react-frontend
```

Sart or Stop Container
```bash
docker stop react-frontend-container
docker start react-frontend-container
```

👉 Open browser: http://localhost:8080

# Git Operations
## Step 1: Initialize the Git repository
```bash
git init 
```

## Step 2: Rename the default branch to 'main'
```bash
git branch -M main
```

## Step 3: Add all files to the staging area
```bash
git add .
```

## Step 4: Commit the changes with a message
```bash
git commit -m "React App without Backend Connected"
```

## Step 5: Log in to GitHub (only needs to be done once)
```bash
gh auth login
```

## Step 6: Create the GitHub repository, link to the local project, and push to GitHub
```bash
gh repo create LearningFrontEnd --public --source=. --remote=origin --confirm
```

## Step 7: Push to GitHub (use 'git push' after setting up remote tracking)
```bash
git push origin main
```

## Additional useful commands: 
```bash
# Clean up reflog and garbage collect
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

# Install Github CLI Steps (ubuntu 22.04)
## Update system (optional but recommended)
sudo apt update && sudo apt upgrade -y

## Install GitHub CLI
sudo apt install gh

#### if above command fails
        Add the GitHub CLI repository
        curl -fsSL https://cli.github.com/packages/githubcli.repo | sudo tee /etc/apt/sources.list.d/github-cli.list

        Import the GPG key
        sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EB3CBB02

        Update package list
        sudo apt update

        Try Again 
        sudo apt install gh


## Verify installation (optional)
gh --version

# Reference
> [!CAUTION]  
> Hackers Caution: Public Links Take the help of Instructors While you click  
> Common README Markups
>> https://support.squarespace.com/hc/en-us/articles/206543587-Markdown-cheat-sheet

