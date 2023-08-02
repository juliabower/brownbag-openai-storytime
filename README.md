# Storytime app

This project creates AI generated bedtime stories. Originally built from the [twitterbio template](https://www.twitterbio.io/) template on [Vercel](https://www.vercel.com).

## How it works

This project uses the [ChatGPT API](https://openai.com/api/) and the [Vercel AI SDK](https://sdk.vercel.ai/docs) with streaming. It constructs a prompt based on the form and user input, sends it to the ChatGPT API with a Vercel Edge Function, then streams the response back to the application UI.

## Getting started

1. [Create a Vercel account](https://www.vercel.com).
2. [Get an OpenAI key](https://platform.openai.com/account/api-keys).
3. [Download Node LTS](https://nodejs.org/en).
4. [Download and install VSCode](https://code.visualstudio.com/download).
5. Create a new repository based on this template
   - Above the file list, click 'Use this template'.
   - Select 'Create a new repository'.
6. Create a new project in Vercel using your newly created GitHub repo - this will deploy your own version of the storytime app.
   - Note you will need to add your OpenAI key in Vercel - Project -> settings -> environment variables

## Running locally and making changes

After creating your repo, open the integrated terminal in VSCode and clone your repo (find the git url by clicking the 'Code' dropdown button in your repo main view)

```bash
git clone [url]
```

Put your API key in a file called `.env.local`.

Install dependencies.

```bash
npm install
```

Then, run the application in the command line and it will be available at `http://localhost:3000`.

All your changes will be visible locally.

```bash
npm run dev
```

## Commit and deploy changes

Add your changes.

```bash
git add .
```

Commit your changes.

```bash
git commit -m [short description of your change]
```

Push your code changes.

```bash
git push
```

Note: for your first push you will need to use `git push origin main`

If linked correctly, Vercel will deploy this automatically for you.

Send me a message on Slack if you have any issues!
