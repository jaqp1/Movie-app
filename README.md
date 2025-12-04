# 🎬 Movie Browser App

Nowoczesna aplikacja mobilna (Android) do przeglądania i wyszukiwania filmów. Aplikacja oferuje dostęp do ogromnej bazy danych filmowych, system rekomendacji oparty na trendach oraz możliwość tworzenia własnej listy ulubionych produkcji.

## 📱 Zrzuty ekranu

 <img width="250" alt="Zrzut ekranu 2025-12-04 201154" src="https://github.com/user-attachments/assets/2cac7f7c-43bc-4ba6-9327-f61ebda81467" />  <img width="250" alt="Zrzut ekranu 2025-12-04 201315" src="https://github.com/user-attachments/assets/bb84057c-2aac-48a5-803f-d7c0a81685eb" /> <img width="250" alt="Zrzut ekranu 2025-12-04 201333" src="https://github.com/user-attachments/assets/3d0ce383-0670-4741-8595-ec0c98875419" /> 
## ✨ Funkcjonalności

 **🔍 Wyszukiwanie Filmów:** Integracja z zewnętrznym **OMDb API** pozwala na błyskawiczne znajdowanie informacji o filmach, w tym plakatów, opisów, obsady i ocen.
 **🔥 Sekcja "Trending":** Na stronie głównej wyświetlane są filmy, które są najczęściej wyszukiwane przez użytkowników. Logika ta oparta jest o zliczanie zapytań w bazie danych.
 **❤️ Ulubione:** Możliwość dodawania filmów do prywatnej listy ulubionych ("Saved"), aby mieć do nich szybki dostęp.
 **📄 Szczegółowe Informacje:** Pełen podgląd detali filmu, w tym rok produkcji, gatunek, oceny (Star Rating) i opis fabuły.
 **🎨 Nowoczesny UI:** Ciemny motyw (Dark Mode), intuicyjna nawigacja dolna i responsywne karty filmów.

## 🛠️ Tech Stack

Projekt został zbudowany przy użyciu nowoczesnych technologii webowych i mobilnych:

* **Frontend:** [React Native](https://reactnative.dev/) (Expo)
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS dla React Native)
* **Nawigacja:** React Router / Expo Router
* **Baza Danych & Backend:** [Appwrite](https://appwrite.io/)
    * Przechowywanie liczników wyszukiwań (dla sekcji Trending).
    * Przechowywanie listy ulubionych filmów użytkownika.
* **Dane zewnętrzne:** [OMDb API](https://www.omdbapi.com/)

## 🚀 Instalacja i Uruchomienie

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki:

1.  **Sklonuj repozytorium:**
    ```bash
    git clone [https://github.com/twoj-nick/movie-browser-app.git](https://github.com/twoj-nick/movie-browser-app.git)
    cd movie-browser-app
    ```

2.  **Zainstaluj zależności:**
    ```bash
    npm install
    ```

3.  **Skonfiguruj zmienne środowiskowe:**
    Stwórz plik `.env` w głównym katalogu i dodaj swoje klucze API:
    ```env
    EXPO_PUBLIC_OMDB_API_KEY=twoj_klucz_omdb
    EXPO_PUBLIC_APPWRITE_PROJECT_ID=twoj_project_id
    EXPO_PUBLIC_APPWRITE_DATABASE_ID=twoj_database_id
    EXPO_PUBLIC_APPWRITE_COLLECTION_ID=twoj_collection_id
    EXPO_PUBLIC_APPWRITE_SAVED_ID=twoj_savedmovies_id
    ```

4.  **Uruchom aplikację:**
    ```bash
    npx expo start
    ```
    Zeskanuj kod QR aplikacją Expo Go na swoim telefonie z Androidem lub uruchom emulator Android Studio.

## 🗄️ Struktura Bazy Danych (Appwrite)

Aplikacja korzysta z następujących kolekcji w Appwrite:

1.  **Trending Movies:** Przechowuje informacje o wyszukiwanych filmach (`searchTerm`, `count`, `poster_url`, `movie_data`).
2.  **Favorites:** Przechowuje filmy zapisane przez użytkownika.

## Find me:

* GitHub: [@jaqp1](https://github.com/jaqp1)
* LinkedIn: [Jakub Wenek](www.linkedin.com/in/jakub-wenek-7b188b296)

