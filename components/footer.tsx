import styles from "./footer.module.scss";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                name,
                email,
                message,
            });
            console.log("Document written with ID: ", docRef.id);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerSplitter}>
                    <div>
                        <span className={styles.spellet}>SKIEN</span>
                        <div className={styles.adresser}>
                            <p><b>Besøksadresse</b> <span><br/>Gråstein VGS.<br/> 3712 Skien</span></p><br/>
                            <p><b>Postadresse</b> <span><br/>Borgevegen 41<br/> 3712 Skien</span></p>
                        </div>
                    </div>
                    <div id="kontakt">
                        <div className={styles.inputForm} >
                            <label htmlFor="name">Navn</label>
                            <input onChange={(event) => setName(event.target.value)} type="text" id="name" name="name" placeholder="Navnet ditt.."/>
                            <label htmlFor="e-mail">E-post</label>
                            <input onChange={(event) => setEmail(event.target.value)}  type="text" id="e-mail" name="e-mail" placeholder="E-posten din.."/>
                            <small>Vi deler ikke e-posten din med andre.</small><br/><br/>
                            <label htmlFor="message">Melding</label>
                            <textarea onChange={(event) => setMessage(event.target.value)} id="message" name="message" placeholder="Skriv noe.."/>
                            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleSubmit(event)} value="Kontakt">Kontakt</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <span className={styles.arre}>
                    Utviklet av <a className={styles.arre} href="https://www.instagram.com/eirikaarre/">Eirik Aarrestad</a>
                </span>
            </div>
        </>
    )
}

export default Footer;
