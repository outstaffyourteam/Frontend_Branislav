# Trump vs Biden

## Project Overview

This project is an application developed with Next.js that fetches news articles related to presidential candidates — Donald Trump and Joe Biden via an external API. The primary purpose of the application is to analyze the sentiment of the news articles and categorize it into either positive or negative.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- TypeScript
- Lucide Icons
- MUI Charts
- Shadcn UI

## Installation and Usage

Follow the steps below to install and operate the project:

1. **Clone the repository**

```bash
git clone https://github.com/outstaffyourteam/Frontend_Branislav.git
```

2. **Install dependencies**

```bash
pnpm install
```

3.  **Add environment variables**

Create a `.env.local` file in the root directory of the project and add the following environment variables:

```
NEXT_PUBLIC_WEBZ_API_KEY=your_api_key
NEXT_PUBLIC_API_URL="https://api.webz.io"
```

Replace `your_api_key` with your actual API key.

4.  **Start the development server**

```bash
pnpm dev
```
