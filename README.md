# Spotlight Social Media App 📱

A modern social media application built with [Expo](https://expo.dev), [React Native](https://reactnative.dev), and [Convex](https://convex.dev). This app allows users to share posts, follow others, like and comment on posts, and receive notifications.

## Features 🚀

- **Authentication**: Secure login with Google using [Clerk](https://clerk.dev).
- **Feed**: View posts from users, including images, captions, likes, and comments.
- **Stories**: Horizontal scrollable stories section.
- **Profile Management**: Edit profile, view user profiles, and follow/unfollow users.
- **Post Creation**: Upload images and add captions to create posts.
- **Bookmarks**: Save posts for later viewing.
- **Notifications**: Get notified for likes, comments, and follows.
- **Responsive Design**: Works seamlessly on Android, iOS, and web.


## Getting Started 🛠️

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Convex CLI](https://docs.convex.dev/cli)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social_media_app.git
   cd social_media_app

2. Install dependencies:

   ```bash
   npm install

3. Collecting workspace informationHere is a suggested README.md file for your GitHub project:

```markdown
# Social Media App 📱

A modern social media application built with [Expo](https://expo.dev), [React Native](https://reactnative.dev), and [Convex](https://convex.dev). This app allows users to share posts, follow others, like and comment on posts, and receive notifications.

## Features 🚀

- **Authentication**: Secure login with Google using [Clerk](https://clerk.dev).
- **Feed**: View posts from users, including images, captions, likes, and comments.
- **Stories**: Horizontal scrollable stories section.
- **Profile Management**: Edit profile, view user profiles, and follow/unfollow users.
- **Post Creation**: Upload images and add captions to create posts.
- **Bookmarks**: Save posts for later viewing.
- **Notifications**: Get notified for likes, comments, and follows.
- **Responsive Design**: Works seamlessly on Android, iOS, and web.

## Project Structure 📂

```
.
├── app/                     # Main application directory
│   ├── (auth)/              # Authentication screens
│   ├── (tabs)/              # Tab-based navigation screens
│   ├── user/                # User profile screens
│   ├── _layout.tsx          # Root layout for the app
│   ├── index.tsx            # Default redirect to login
├── components/              # Reusable UI components
├── constants/               # Static constants (e.g., theme, mock data)
├── convex/                  # Convex server functions and schema
├── styles/                  # Style definitions for screens and components
├── assets/                  # Static assets (images, fonts, etc.)
├── .expo/                   # Expo-specific configurations
├── .vscode/                 # VS Code workspace settings
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Getting Started 🛠️

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Convex CLI](https://docs.convex.dev/cli)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social_media_app.git
   cd social_media_app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file and add the following:

   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   EXPO_PUBLIC_CONVEX_URL=your-convex-url
   CLERK_WEBHOOK_SECRET=your-clerk-webhook-secret
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   Use the Expo Go app or an emulator to preview the app.

## Scripts 📜

- `npm start`: Start the Expo development server.
- `npm run android`: Run the app on an Android emulator.
- `npm run ios`: Run the app on an iOS simulator.
- `npm run web`: Run the app in a web browser.
- `npm test`: Run tests with Jest.
- `npm run lint`: Lint the codebase.

## Technologies Used 🛠️

- **Frontend**: React Native, Expo, TypeScript
- **Backend**: Convex
- **Authentication**: Clerk
- **State Management**: Convex React
- **Styling**: React Native Stylesheets
- **Other Libraries**:
  - `expo-image-picker`: For selecting images.
  - `expo-secure-store`: For secure token storage.
  - `date-fns`: For date formatting.

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License 📄

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments 🙌

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [Convex](https://convex.dev)
- [Clerk](https://clerk.dev)

## Screenshots 📸

