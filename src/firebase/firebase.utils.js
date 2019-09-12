import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
	const { title, image } = objectToAdd;
	const newTitle = title.replace(/ /g, '-').toLowerCase();
	const imageType = image.type.split('/')[1];
	const imageRef = storageRef.child(`images/${new Date().toISOString()}_${newTitle}.${imageType}`);
	try {
		const { metadata } = await imageRef.put(image)
		const { fullPath } = metadata;
		const collectionRef = firestore.collection(collectionKey);
		const newDocRef = await collectionRef.doc()
		const objectToSave = { ...objectToAdd, image: fullPath }
		await newDocRef.set(objectToSave)
		return objectToSave
	} catch (err) {
		return err
	}
}

const updatesDate = date => {
	const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
	  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
	];
	const now = new Date(date);
	const y = now.getFullYear();
	const m = now.getMonth();
	const d = now.getDate();
	return `${y}/${months[m]} ${d}`;
}

export const formatUpdates = async snapshot => {
	if (!snapshot) return;
	const promises = snapshot.docs.map(async doc => {
		let update = doc.data();
		const imageUrl = await storageRef.child(update.image).getDownloadURL()
		const date = updatesDate(update.date.toDate())
		return { ...update, date, image: imageUrl}
	})
	return await Promise.all(promises)
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
export const storageRef = firebase.storage().ref();

export default firebase;
