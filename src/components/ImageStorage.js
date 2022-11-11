import { useState, useEffect } from "react";
import { storage } from "../firebase/firebase-config.js";
import { ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from 'uuid'


async function ImageStorage() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/")

    const uploadImage  = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                var urlName = url;
                console.log(urlName)
                setImageList((prev) => [...prev, url]);
            })
            
        });
    };

    // useEffect(() => {
    //     listAll(imageListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                setImageList((prev) => [...prev, url]); 
    //             })
    //         })
    //     })

    // }, []);
    return (
    <div className= "App">
        
        </div>
    );
}

export default ImageStorage;