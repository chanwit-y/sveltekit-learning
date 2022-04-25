import { app, database } from './init-firebase';
import {
	collection,
	CollectionReference,
	doc,
	getDocs,
	getFirestore,
	setDoc,
	updateDoc,
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

	public static async updateData(
		collectionName: string,
		id: string,
		field: string,
		value: unknown,
		...moreFieldsAndValues: unknown[]
	) {
		const userRef = doc(database, collectionName, id);
		await updateDoc(userRef, field, value, ...moreFieldsAndValues);
	}
}
