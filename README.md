# 🧠 MedBro - Disease Prediction & Recommendation Web App

**MedBro** is a full-stack Machine Learning-powered web application that predicts diseases based on symptoms entered by the user and provides medically relevant recommendations including medications, workouts, precautions, and diets.

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
MedBro-Minor/
├── backend/                 # Express.js backend with ML API integration
│   ├── routes/              # API route for disease prediction
│   └── server.js            # Server entry point
├── public/                  # Static files for the frontend
├── src/                     # Frontend source code (Next.js)
│   ├── components/          # Reusable UI components
│   ├── pages/               # Next.js pages (Home, Result, etc.)
│   └── app/                 # App-level layout and config
├── disease_model.ipynb      # Jupyter notebook for training ML model
├── model.joblib             # Saved ML model
├── dataset.csv              # Symptoms to disease dataset
├── package.json             # Frontend dependencies
├── tsconfig.json            # TypeScript config
└── README.md
```

---

## 🛠️ Installation & Usage

### 1. Clone the repository
```bash
git clone https://github.com/aruppatra04/MedBro-Minor.git
cd MedBro-Minor
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Run the frontend (Next.js)
```bash
npm run dev
```

### 4. Set up backend
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

## 👥 Authors

- [@aruppatra04](https://github.com/aruppatra04)

---

## 📄 License

This project is licensed under the MIT License.
