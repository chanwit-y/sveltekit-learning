import { app } from './init-firebase';
import {
	collection,
	CollectionReference,
	doc,
	getDocs,
	getFirestore,
	setDoc,
	type DocumentData
} from 'firebase/firestore';

export class FireStore {
	private static _firestore = getFirestore(app);
	private static _createCollection<T = DocumentData>(collectionName: string) {
		return collection(this._firestore, collectionName) as CollectionReference<T>;
	}

	public static async getAll(collectionName: string) {
		const docDatum = await getDocs(this._createCollection(collectionName));
		return docDatum.docs.map((doc) => doc.data());
	}

	public static async addData(collectionName: string, data: any) {
		const userRef = doc(this._createCollection(`${collectionName}`));
		await setDoc(userRef, data);
	}
}
