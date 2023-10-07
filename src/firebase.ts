import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
	apiKey: 'AIzaSyCghesAqdvmIcnVvAc9oanMhjY8efN6vY0',

	authDomain: 'stopgg.firebaseapp.com',

	projectId: 'stopgg',

	storageBucket: 'stopgg.appspot.com',

	messagingSenderId: '929946792108',

	appId: '1:929946792108:web:11e643f9409d2ef273ef09'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

export const storage = getStorage(app);

export const functions = getFunctions(app);
//connectFunctionsEmulator(functions, "localhost", 5001);
export const getTournament = httpsCallable(functions, "getTournament");