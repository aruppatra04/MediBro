# 🧠 MediBro - Disease Prediction & Recommendation Web App

**MediBro** is a full-stack Machine Learning-powered web application that predicts diseases based on symptoms entered by the user and provides medically relevant recommendations including medications, workouts, precautions, and diets.

---

## 🚀 Features

- Predicts disease based on entered symptoms
- Provides:
  - Disease description
  - Medications and diet tips
  - Workouts and precautions
- Fast ML inference using pre-trained models
- Clean and responsive UI (Next.js + Tailwind CSS)
- Express.js backend with Python integration

---

## 🧩 Tech Stack

| Area       | Tech                     |
|------------|--------------------------|
| Frontend   | Next.js, TypeScript, Tailwind CSS |
| Backend    | Node.js, Express.js      |
| ML Model   | Python, scikit-learn, XGBoost |
| Data Tools | Pandas, NumPy            |
| Deployment | Localhost (dev mode)     |

---

## 📁 Project Structure

```
project-root/
├── backend/                             # Backend logic for disease prediction and recommendations
│   ├── datasets/                        # Contains all CSV datasets used for prediction and recommendations
│   │   ├── description.csv              # Description of diseases
│   │   ├── diets.csv                    # Recommended diets per disease
│   │   ├── medications.csv              # Medications per disease
│   │   ├── precautions.csv              # Precautions for each disease
│   │   ├── symtoms.csv                  # List of symptoms
│   │   ├── training.csv                 # Training data for the ML model
│   │   └── workout.csv                  # Workout recommendations per disease
│   ├── model/
│   │   └── xgb_regressor.pkl            # Trained XGBoost model for disease prediction
│   ├── .gitignore                       # Git ignore rules for backend
│   ├── diseaseInfo.py                  # Returns detailed disease info based on prediction
│   ├── disease_prediction.ipynb        # Jupyter Notebook for model development and training
│   ├── package-lock.json               # Auto-generated for locking dependencies
│   ├── package.json                    # Backend dependencies and scripts
│   ├── recomended.py                   # Returns diet, medication, workout, precautions for a disease
│   └── server.js                       # Express.js server handling API requests
│
├── public/                             # Public assets like images and icons for frontend
│   ├── 24.avif                          # Various images used in the frontend UI
│   ├── favicon-32x32.png                # Favicon for the website
│   ├── favicon.ico                      # Favicon
│   ├── img1.avif                        # General UI image
│   ├── img2.jpg                         # General UI image
│   ├── img3.jpg                         # General UI image
│   ├── img4.jpg                         # General UI image
│   ├── logo.jpg                         # Logo image
│   ├── logo2.png                        # Alternate logo
│   ├── logo5.png                        # Alternate logo
│   ├── logonew1.png                     # Final/updated logo
│   ├── meds rec.jpg                     # Image representing medical recommendations
│   ├── sec.jpeg                         # Security-related image
│   ├── symp.jpg                         # Symptoms-related illustration
│   ├── trust.png                        # Trust-related icon
│   └── user frie.png                    # User-friendly design image
│
├── src/                                # Frontend (Next.js) source files
│   ├── app/                             # App routing and pages
│   │   ├── about/
│   │   │   └── page.tsx                # About page component
│   │   ├── contact/
│   │   │   └── page.tsx                # Contact page component
│   │   ├── workplace/
│   │   │   └── page.tsx                # Workplace-related page
│   │   ├── NavBar.tsx                  # Navigation bar component
│   │   ├── globals.css                 # Global styles
│   │   ├── layout.tsx                  # Layout file wrapping all pages
│   │   ├── not-found.tsx               # Custom 404 error page
│   │   └── page.tsx                    # Main (home) page
│   ├── lib/
│   │   └── utils.ts                    # Utility functions used across frontend
│
├── .gitignore                          # Ignore rules for the entire project
├── README.md                           # Project documentation
├── components.json                     # UI components configuration
├── eslint.config.mjs                   # ESLint config for code linting
├── next.config.ts                      # Next.js configuration
├── package-lock.json                   # Lock file for frontend dependencies
├── package.json                        # Frontend project dependencies
├── postcss.config.mjs                  # PostCSS configuration for styling
└── tsconfig.json                       # TypeScript configuration

```

---

## 🛠️ Installation & Usage

### 1. Fork the repository
Fork the repository to your GitHub account by clicking the **"Fork"** button at the top right of the [original repo](https://github.com/aruppatra04/MediBro).

### 2. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/MedBro-Minor.git
cd MedBro-Minor
```
### 3. Install frontend dependencies
```bash
npm install
```
### 4. Run the frontend (Next.js)
```bash
npm run dev
```
### 5. Set up backend
In a separate terminal:
```bash
cd backend
npm install
node server.js
```
> Make sure your Python model is already trained and exported to `model.joblib`.

### 5. Access the app
Go to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 ML Model Info

- Input: User symptoms
- Output: Disease classification (multi-class)
- Algorithms used: Random Forest, XGBoost
- Exported with `joblib` and used via an API bridge

---

## 📬 API Endpoint

### POST `/predict`
**Body:**
```json
{
  "symptoms": ["headache", "fever", "nausea"]
}
```

**Response:**
```json
{
  "disease": "Typhoid",
  "description": "...",
  "medications": [...],
  "workout": [...],
  "diet": [...],
  "precautions": [...]
}
```

---

## 📌 Notes

- This project is for **educational purposes**.
- It should not be considered a substitute for real medical consultation.

---
