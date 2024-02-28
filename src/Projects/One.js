import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom' // import useState
import Project from "./Project";
function One() {
    const [article, setArticle] = useState(null)
    let params = useParams()

    async function getArticle() {
        const tmp = require("../data.json")
        setArticle(tmp[params.id])
    } 
    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
getArticle()
}, []);


    if(article == null)
    return <>Wait please</>

    return <Project article={article} />
}

export default  One;