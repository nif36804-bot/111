# Random Joke Generator

A simple Next.js application that fetches random jokes from an external API.

## Features

- 🎭 Fetch random jokes on demand
- 🔄 Multiple joke sources (using JokeAPI)
- ⚡ Fast and responsive UI
- 🛡️ Secure API calls through Next.js backend
- 📱 Mobile-friendly design

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000/jokes](http://localhost:3000/jokes) in your browser

## Usage

Click the **"Get a Joke"** button to fetch a random joke. The joke will be displayed on the screen.

## API Integration

This app uses the free **[JokeAPI](https://jokeapi.dev/)** service:

- **Endpoint:** `https://v2.jokeapi.dev/joke/Any`
- **No authentication required**
- **Free to use**

### Supported Joke Categories
- General
- Programming
- Knock-Knock
- Dark
- Spooky
- Christmas

## Project Structure

```
pages/
├── jokes.jsx           # Main joke generator component
└── api/
    └── jokes.js        # API route to fetch jokes
```

## How It Works

1. User clicks the "Get a Joke" button
2. Frontend sends request to `/api/jokes`
3. Backend fetches joke from JokeAPI
4. Response is formatted and returned to frontend
5. Joke is displayed in the UI

## Customization

### Change Joke Category

Modify `pages/api/jokes.js` to use a specific category:

```javascript
// Instead of: /joke/Any
// Use: /joke/Programming
// Or: /joke/Knock-Knock

const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
```

### Add More API Sources

You can integrate multiple joke APIs:

- [Official Joke API](https://official-joke-api.appspot.com/jokes/random)
- [Random User API](https://randomuser.me/api/)
- [Dad Jokes API](https://icanhazdadjoke.com/)

## Deployment

This app is ready to deploy on Vercel:

```bash
git push origin main
```

Vercel will automatically deploy your changes.

## License

MIT License - Feel free to use this project for your own purposes.

## Resources

- [JokeAPI Documentation](https://jokeapi.dev/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [React Hooks](https://react.dev/reference/react)
