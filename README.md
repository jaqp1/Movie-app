# 🎬 Movie Browser App

A modern mobile application (Android) for browsing and searching for movies. The app offers access to an extensive movie database, a recommendation system based on trends, and the ability to create your own list of favorite productions.

## 📱 Screenshots

 <img width="250" alt="Screenshot 2025-12-04 201154" src="https://github.com/user-attachments/assets/2cac7f7c-43bc-4ba6-9327-f61ebda81467" />  <img width="250" alt="Screenshot 2025-12-04 201315" src="https://github.com/user-attachments/assets/bb84057c-2aac-48a5-803f-d7c0a81685eb" /> <img width="250" alt="Screenshot 2025-12-04 201333" src="https://github.com/user-attachments/assets/3d0ce383-0670-4741-8595-ec0c98875419" /> 
## ✨ Features

 **🔍 Movie Search:** Integration with the external **OMDb API** allows for instant finding of movie information, including posters, descriptions, cast, and ratings.<br>
 **🔥 "Trending" Section:** The home page displays movies that are most frequently searched by users. This logic is based on counting queries in the database. <br>
 **❤️ Favorites:** Ability to add movies to a private list of favorites ("Saved") for quick access. <br>
 **📄 Detailed Information:** Full view of movie details, including release year, genre, ratings (Star Rating), and plot summary. <br>
 **🎨 Modern UI:** Dark Mode, intuitive bottom navigation, and responsive movie cards. <br>

## 🛠️ Tech Stack

The project was built using modern web and mobile technologies:

* **Frontend:** [React Native](https://reactnative.dev/) (Expo)
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
* **Navigation:** React Router / Expo Router
* **Database & Backend:** [Appwrite](https://appwrite.io/)
    * Storing search counters (for the Trending section).
    * Storing the user's list of favorite movies.
* **External Data:** [OMDb API](https://www.omdbapi.com/)

## 🚀 Installation and Setup

To run the project locally, follow the steps below:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jaqp1/Movie-app.git](https://github.com/jaqp1/Movie-app.git)
    cd first-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create an `.env` file in the main directory and add your API keys:
    ```env
    EXPO_PUBLIC_OMDB_API_KEY=your_omdb_key
    EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
    EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
    EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
    EXPO_PUBLIC_APPWRITE_SAVED_ID=your_savedmovies_id
    ```

4.  **Run the application:**
    ```bash
    npx expo start
    ```
    Scan the QR code with the Expo Go app on your Android phone or run the Android Studio emulator.

## 🗄️ Database Structure (Appwrite)

The application uses the following collections in Appwrite:

1.  **Trending Movies:** Stores information about searched movies (`searchTerm`, `count`, `poster_url`, `movie_data`).
2.  **Favorites:** Stores movies saved by the user.

## Find me:

* GitHub: [@jaqp1](https://github.com/jaqp1)
* LinkedIn: [Jakub Wenek](www.linkedin.com/in/jakub-wenek-7b188b296)
