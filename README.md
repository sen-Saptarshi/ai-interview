# Interview Prep

## Overview

Interview Prep is a web application designed to help users prepare for job interviews. It provides features such as mock interviews, feedback on technical and soft skills, and a user-friendly interface for accessing interview resources.

## Features

- **Mock Interviews**: Simulate real-time interviews with professional question flow and instant feedback.
- **Feedback System**: Receive detailed feedback on various categories like Communication Skills, Technical Knowledge, and more.
- **User Authentication**: Secure login and sign-up using Firebase authentication.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Tech Stack Visualization**: View tech stack icons for each interview role.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Firebase, Node.js
- **APIs**: Deepgram for transcription, OpenAI for interview models
- **State Management**: React Hook Form

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sen-Saptarshi/ai-interview.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ai-interview
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

## Environment Variables

Please make sure to add the following environment variables to your `.env` file. A sample `.env.example` file is provided.

- `NEXT_PUBLIC_BASE_URL=""`  # Firebase Server Config
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID=""`
- `NEXT_PUBLIC_FIREBASE_PRIVATE_KEY=""`
- `NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL=""`
- `NEXT_PUBLIC_FIREBASE_API_KEY=""`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""`
- `NEXT_PUBLIC_FIREBASE_APP_ID=""`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""`
- `GOOGLE_GENERATIVE_AI_API_KEY=""`  # Google Generative AI
- `NEXT_PUBLIC_VAPI_WEB_TOKEN=""`
- `NEXT_PUBLIC_VAPI_WORKFLOW_ID=""`  # VAPI AI

- Sign up or log in to access the interview preparation features.
- Navigate to the interview section to start a mock interview.
- View feedback and suggestions for improvement after completing an interview.

## Contact

For questions or feedback, please contact [saptarshisen0@gmail.com](mailto:saptarshisen0@gmail.com).
