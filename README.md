# 🧑‍💻 Kooltype

A clean, modern, and customizable **typing test website** built with **Next.js, React, TypeScript, and Tailwind CSS**.

✨ Inspired by the minimalist design and functionality of **Monkeytype**.

---

## ✨ Features

-   **Multiple Test Modes**
    -   **Time Mode:** Test how many words you can type in a set duration (15, 30, 60, 120 seconds).
    -   **Words Mode:** Test how fast you can type a specific number of words (10, 25, 50, 100).

-   **Customizable Word Lists**
    Choose from different dictionaries to vary difficulty:
    -   English 100 (Top 100 common words)
    -   English 500
    -   English 1000
    -   English 5000

-   **Live Stats**
    -   ⌨️ **WPM (Words Per Minute)**
    -   🎯 **Accuracy (%)**

-   **Customizable Themes**
    -   Personalize the look & feel with a single click
    -   Includes several preset themes

-   **Scrolling Text Area**
    -   Clean three-line typing view
    -   Smooth scrolling as you type

-   **Responsive Design**
    -   Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

-   **Framework:** Next.js (with App Router)
-   **Library:** React
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **Deployment:** Vercel (recommended)

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### ✅ Prerequisites

-   Node.js (v18.x or later)
-   npm, yarn, or pnpm

### ⚡ Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/kooltype.git](https://github.com/your-username/kooltype.git)
    ```

2.  **Navigate to the project folder**
    ```bash
    cd kooltype
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open in browser**
    Visit → `http://localhost:3000`

### 📂 Project Structure

The project follows the Next.js App Router structure with a `src` directory:

```bash
src/
├── app/              # Main application pages and layout
├── components/       # Reusable React components
├── constants/        # Site-wide constants (themes, word lists)
└── contexts/         # React Context for state management (e.g., themes)

```

### 🙏 Acknowledgements

Heavily inspired by the fantastic typing experience of Monkeytype.