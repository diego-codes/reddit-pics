# Reddit Pics

This app was built as a programming challenge for [Assembly](joinassembly). You may find a live demo [here](https://reddit-pics.vercel.app/).

## Running locally

### Prerequisites

To run this application locally, you should have the following tool versions:

- node `v15.5.1`
- npm `v7.3.0`

### Installation

If you have the appropriate tool versions, you can start by installing the dependencies first:

```bash
npm install
```

### Running locally

To run the application locally, run the following command:

```bash
npm run dev
```

After the application builds, you may go to http://localhost:3000/ to see it.

### Running tests

There aren't a lot of unit tests, but if you wish you run the test, run the following command:

```bash
npm test
```

## About application

This simple application takes post information from the [r/pics](https://reddit.com/r/pics) subreddit and displays them in a gallery. Some of the features to note are:

- Search for pics by their title
- Infinitely scrolling gallery

### The tech stack

This application was built using:

- Next.js
- React
- React query
- Styled components
- Typescript
- Jest & React testing library

### Future improvements

There are some aspects of the application that I would work on if I had more time:

- Add more unit tests.
- Create end-to-end tests.
- Add Reddit sorting options in the gallery view like "new", "hot", "best", and "rising".
- Better loading states using skeletons for the layout that is loading.
- Have higher-quality thumbnail images.
- Handle loading errors and let the user know how to resolve the problem.
- User Reddit's various image resolution sizes to serve the user the appropriate image for their device's size.
