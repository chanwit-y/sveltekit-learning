import { app, database } from './init-firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
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
import { encode } from 'blurhash';

export class FireStore {
	private static _firestore = getFirestore(app);
	private static _createCollection<T = DocumentData>(collectionName: string) {
		return collection(this._firestore, collectionName) as CollectionReference<T>;
	}

	private static async _addData(collectionName: string, data: any) {
		const userRef = doc(this._createCollection(`${collectionName}`));
		await setDoc(userRef, data);
	}

	private static async _updateData(
		collectionName: string,
		id: string,
		field: string,
		value: unknown,
		...moreFieldsAndValues: unknown[]
	) {
		const userRef = doc(database, collectionName, id);
		await updateDoc(userRef, field, value, ...moreFieldsAndValues);
	}

	public static async getAll(collectionName: string) {
		const docDatum = await getDocs(this._createCollection(collectionName));
		return docDatum.docs.map((doc) => doc.data());
	}

	public static async uploadFile(id: string, userId: string, pic: File) {
		const mainPicturePath = `/${userId}/${id}.${pic.name.split('.').pop()}`;
		const storage = getStorage();
		const dataRef = ref(storage, mainPicturePath);
		const uploadResult = await uploadBytes(dataRef, pic);

		console.log(uploadResult);

		// const b = await getBytes(ref(storage, dataRef.fullPath));
		// console.log(b);
		const downloadurl = await getDownloadURL(ref(storage, dataRef.fullPath));
		// const buffer = await sharp(downloadurl).grayscale().toBuffer();

		// console.log(buffer);
		
		// const uint8 = new Uint8ClampedArray(buffer);
		// const blurhash = encode(uint8, 400, 400, 4, 4);
		// console.log(blurhash);

		return {
			name: dataRef.name,
			fullPath: dataRef.fullPath,
			// downloadurl,
			// blurhash
		};
	}
}
