# 🌿 FarmSmart AI - Premium Agricultural Intelligence

**FarmSmart AI** is a professional-grade, nature-inspired agricultural dashboard designed to empower farmers with cutting-edge AI insights. Built for high accessibility, it bridges the gap between complex data and practical farming through a visually stunning, glassmorphic interface and multimodal AI capabilities.

---

## ✨ Key Features

### 1. 🧠 Smart Crop Recommendation
*   **Contextual Analysis**: Recommends the top 3 most profitable crops based on State, District, Soil Type, and Sowing Month.
*   **Profit Projection**: Provides estimated profit ranges in **Indian Rupees (INR)** per acre.
*   **Logic Explanation**: Gives a clear, 1-sentence scientific reason for each recommendation.

### 2. 👁️ Vision AI Soil Detection
*   **Zero-Knowledge Input**: Designed for farmers who don't know their soil name. Users can simply upload a photo of their land soil.
*   **Automatic Identification**: Integrated with **Gemini 1.5 Flash Vision** to detect soil types (Loamy, Clayey, etc.) and automatically populate the form fields.
*   **Voice Confirmation**: Speaks out the detected soil type in the farmer's regional language to ensure clarity for illiterate users.

### 3. 🏥 AI Health Scan (Plant Doctor)
*   **Disease Diagnosis**: Detects crop diseases, pests, and nutrient deficiencies from a simple leaf photo.
*   **Treatment Roadmap**: Provides severity ratings and a structured 3-step actionable treatment plan.
*   **Interactive Scanning**: Features a high-fidelity "Laser Scan" UI animation during analysis.

### 4. 🌍 Native Language & Accessibility
*   **Multilingual Support**: Supports major Indian languages (Hindi, Punjabi, Marathi, Telugu, Bengali, Odia, etc.).
*   **Cloud TTS (Voice Assistant)**: Integrated **Google Translate Cloud TTS** to read recommendations aloud, bypassing local device limitations.
*   **Glassmorphic UI**: High-end aesthetic with rich forest gradients and "Nature-Tech" visual language.

---

## 🛠️ Technical Stack

*   **Logic**: [React.js](https://reactjs.org/) (Vite)
*   **AI Engine**: [Google Gemini 1.5 Flash](https://aistudio.google.com/app/apikey)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Voice**: Google Translate Cloud TTS API

---

## 🚀 Getting Started

### 1. Prerequisites
*   Node.js (v18 or higher)
*   A Google Gemini API Key (get one at [Google AI Studio](https://aistudio.google.com/))

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/farmsmart-ai.git

# Navigate to project folder
cd farmsmart-ui

# Install dependencies
npm install
```

### 3. Configuration
Create a `.env` file in the root directory and add your API Key:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Launch
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 📂 Project Structure

*   `src/pages/Home.jsx`: Premium landing page with grand typography.
*   `src/pages/Form.jsx`: The 2-step wizard containing Soil Vision AI logic.
*   `src/pages/AIScan.jsx`: The crop disease diagnosis interface.
*   `src/pages/Result.jsx`: Displays top picks, dealer maps, and voice options.
*   `src/services/aiService.js`: Core Gemini API implementation for Vision and Text.

---

## 📜 Disclaimer
*This application provides AI-generated agricultural advice for informational purposes. For critical pesticide applications or financial decisions, users are encouraged to consult their local Agricultural Extension Officer or KVK (Krishi Vigyan Kendra).*

---

### Developed for the [Hackathon Name/Event] 🚜
🏆 **Aiming to revolutionize digital inclusion for rural farmers.**
