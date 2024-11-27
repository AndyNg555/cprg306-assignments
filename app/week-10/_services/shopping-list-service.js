import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
export const getItems = async (userId) => {
    try {
        const items = [];
        const itemsRef = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsRef);
        const querySnapshot = await getDocs(itemsQuery);

        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        return items;
    } catch (error) {
        console.error("Error fetching items: ", error);
        throw error;
    }
};
export const addItem = async (userId, item) => {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw error;
    }
};