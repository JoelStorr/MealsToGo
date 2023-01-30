import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

import { firebaseConfig } from "../../../env";

const app = initializeApp(firebaseConfig);

export const loginRequests = (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};
