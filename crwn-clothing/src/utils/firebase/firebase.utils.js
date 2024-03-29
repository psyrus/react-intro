import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut
} from 'firebase/auth';

import {
  arrayUnion, collection, doc,
  getDoc, getDocs, getFirestore, query, runTransaction, setDoc, updateDoc, writeBatch
} from 'firebase/firestore';

const firebaseConfig = require('./firebase.config.json');

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const updateCategoryItem = async (collectionKey, updatedItem) => {
  const categoryDocRef = doc(db, 'categories', collectionKey);
  await runTransaction(db, async (transaction) => {
    const categoryDoc = await getDoc(categoryDocRef);
    if (!categoryDoc.exists()) {
      throw new Error(`${collectionKey} document does not exist!`);
    }
    const currentData = categoryDoc.data();
    if (updatedItem.id) {
      const updatedData = currentData.items.map(item => item.id === updatedItem.id ? updatedItem : item)
      await updateDoc(categoryDocRef, {
        items: updatedData
      })
    } else {
      // Get the existing collection
      // Add the new one in the lastID slot + 1
      let highestIdItem = -1;
      for (let index = 0; index < currentData.items.length; index++) {
        const element = currentData.items[index];
        highestIdItem = Math.max(highestIdItem, element.id);
      }
      updatedItem['id'] = highestIdItem + 1
      await updateDoc(categoryDocRef, {
        items: arrayUnion(updatedItem)
      })
    }
  })
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  documentNameField
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj[documentNameField].toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const createUserDocumentfromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) {
    throw new Error('Need userAuth');
  }
  const userDocRef = doc(db, 'users', userAuth.uid);
  let userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: createdAt,
        ...additionalInformation,
      });
      userSnapShot = await getDoc(userDocRef);
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }

  return userSnapShot.data();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('Need both email and password');
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInLegacy = async (email, password) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error Occurred.', errorCode, errorMessage);
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth, (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  })
};