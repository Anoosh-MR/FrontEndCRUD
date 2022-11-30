import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const postCollectionRef = collection(db, "posts");
class postDataService {
  addPost = (newPost) => {
    return addDoc(postCollectionRef, newPost);
  };
  updatePost = (id, updatedPost) => {
    const postDoc = doc(db, "posts", id);
    return updateDoc(postDoc, updatedPost);
  };

  deletePost = (id) => {
    const postDoc = doc(db, "posts", id);
    return deleteDoc(postDoc);
  };

  getAllPost = () => {
    return getDocs(postCollectionRef);
  };
  getPost = () => {
    const postDoc = doc(db, "posts", id);
    return getDoc(postDoc);
  };
}

export default new postDataService();
