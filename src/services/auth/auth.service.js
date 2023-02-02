import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

import { firebaseConfig } from "../../../env";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequests = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
