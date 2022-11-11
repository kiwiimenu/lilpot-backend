import {collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import {useEffect, useState} from 'react';
import {db} from "../firebase/firebase-config.js";
import { Carousel } from "react-bootstrap";
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

function Home() {

    const [postings, setPostings] = useState([]);
    const postingsCollectionRef = collection(db, "menu");

    const sucessToast = () => {
        toast("Sucessfully deleted item")
    }

    useEffect(() => {
        const getPostings = async () => {
            const data = await getDocs(postingsCollectionRef);
            setPostings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPostings();
    }, []);

    const deleteDocument = async (id) => {
        const reference = doc(db, "menu", id);
        await deleteDoc(reference)
        sucessToast();
    }
    // toast.success("Sucessfully Deleted")
    return(
        <div className="posting-grid">
            <>
                <ToastContainer/>
            </>
            {postings.map((postings) => {
                return (
                    <div className="posting-container">
                        {" "}
                        <div style={{width: 375}}>
                            <button className="delete-posting" onClick={() => deleteDocument(postings.id)}>delete</button>
                            <div className="item-name">{postings.itemName}</div>
                            <div className="item-description">{postings.itemDescription}</div>
                            <div className="item-price">{postings.itemPrice}</div>
                            <Carousel>
                                {postings.imageList.map((images) => {
                                    return (
                                        <Carousel.Item>
                                            <img src={images} alt="" height = '500'/>
                                        </Carousel.Item>
                                    );

                                })}
                            </Carousel>
                        </div>
                    </div>
            
                );
            })}
        </div>
    )
}

export default Home;