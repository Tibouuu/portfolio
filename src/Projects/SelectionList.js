import {useEffect, useState} from "react";
import ProjectWidget from "./ProjectWidget";

export default function SelectionList(){
    const [projet, setProjet] = useState([]);

    async function getProjet() {
        try {
            const data = require("../data.json");
            setProjet(data)
        } catch (err) {
            console.error("error SelectionList/getProjet", err)
        }
    }
    useEffect(() => {
        (async () => {
            await getProjet();
        })();
    }, []);

    return(
        <>
            {projet.map(x => <ProjectWidget key={x.name} {...x} />)}
        </>
    )
}