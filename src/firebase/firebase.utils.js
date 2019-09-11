import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAT0gpBdTsMd2uGLzQ355TzEzgmAiP39MI",
    authDomain: "too-far-east.firebaseapp.com",
    databaseURL: "https://too-far-east.firebaseio.com",
    projectId: "too-far-east",
    storageBucket: "too-far-east.appspot.com",
    messagingSenderId: "365336925634",
    appId: "1:365336925634:web:cc35db8ebb35b7e70c325b"
};

export const createUserProfileDocument = async (userAuth, otherData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...otherData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}
	return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj);
	})

	await batch.commit()
}

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth); 
		}, reject)
	});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
