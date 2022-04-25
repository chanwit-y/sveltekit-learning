import config from './config';
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

export const app = initializeApp(config);
export const database = getFirestore(app);

// export const initFirebase = async () => {
// 	// if (typeof window !== 'undefined') {
// 	// 	const fb: any = await (await import('firebase/app')).default;
// 	// 	await import('firebase/auth');
// 	// 	await import('firebase/firestore');
// 	// 	fb.initializeApp(config);
// 	// 	return;
// 	// }

// 	// console.log("none init firebase");
	
// 	// const fb: any = await import('firebase');
// 	// if (fb.apps.length == 0) {
// 	// 	fb.initializeApp(config);
// 	// 	return;
// 	// }
// };
