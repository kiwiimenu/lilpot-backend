import React, { useState, useEffect } from "react"
import {db} from "../firebase/firebase-config.js";
import {addDoc, collection} from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from 'uuid'
import { storage } from "../firebase/firebase-config.js";

function Edit() {
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const postingsCollectionRef = collection(db, "menu");

    const createPosting = async () => {
        await addDoc(postingsCollectionRef, {
            itemName: itemName, 
            imageList: imageList, 
            itemDescription: itemDescription,
            itemPrice: itemPrice,
            })
        setImageList([])
        setItemName('')
        setItemDescription('')
        setItemPrice('')
    }

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
    return (
        <div>
            <div>
                <div>enter item name</div>
                <form value={itemName} onChange={e=>setItemName(e.target.value)}>
                    <input type="text" className="item-name-field" />
                </form>
            </div>

            <div>
                <div>enter item description</div>
                <form value={itemDescription} onChange={e=>setItemDescription(e.target.value)}>
                    <input type="text" className="item-description-field" />
                </form>
            </div>

            <div>
                <div>enter item price</div>
                <form value={itemPrice} onChange={e=>setItemPrice(e.target.value)}>
                    <input type="text" className="item-price-field" />
                </form>
            </div>

            <div>
                <input type = "file" onChange={(event) => {setImageUpload(event.target.files[0])}}/> 
                <button class="btn btn-primary" type="submit" onClick={uploadImage}>Upload Image</button>
            </div>



            <div>
                <button onClick={createPosting}>submit</button>
            </div>
            {imageList.map((url) => {
                return <img src={url} alt="" className="single-image"/>;
            })}
        </div>
        
    )
}

export default Edit;