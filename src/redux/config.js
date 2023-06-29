// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAKNZZAIq5cNo4SM8qHCYGmQVxHz11rtfM',
  authDomain: 'goitfirebasephotobreak.firebaseapp.com',
  databaseURL:
    'https://goitfirebasephotobreak-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'goitfirebasephotobreak',
  storageBucket: 'goitfirebasephotobreak.appspot.com',
  messagingSenderId: '838854632576',
  appId: '1:838854632576:web:00352d4af1a4860345f265',
  measurementId: 'G-HQGTF9SBJ2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
