import { db } from '../db';

export const sendMessage =  (text) => {
    console.log("here");
    const item = {
            name: text,
            key: Math.random().toString()
        }
        db.collection('Items').add(item).then(() => console.log("sent: " + text));
    }