import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useState} from "react";
import ProjectWidget from "./ProjectWidget";

export default function Projects(){
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from("#webdesign", {
            y: -50,
            opacity: 0,
            delay: 0.5,
            duration: 1.5,
            ease: "power1.out"
        })
        gsap.from("#nom", {
            opacity: 0,
            duration: 2,
            ease: "power1.out"
        })

        gsap.from('#welcome', {
            x: "40%",
            scrollTrigger: {
                trigger: "#a-propos",
                scrub: true,
                toggleActions: "play none none reset"
            }
        })
    })

    const [projet, setProjet] = useState([]);
    const [filter, setFilter] = useState("");

    let filtered = projet.filter(c => c.class.includes(filter));

    async function getProjet() {
        try {
            const data = require("../data.json");
            setProjet(data)
        } catch (err) {
            console.error("error CharacterGroup/getMonsters", err)
        }
    }
    useEffect(() => {
        (async () => {
            await getProjet();
        })();
    }, []);

    function handleFilterChange(e) {
            setFilter(e.target.value)

    }
    return(
        <>
            <section id="accueil" className="after:content-[''] bg-fixed after:bg-white after:h-[130px] after:bottom-[-60px] after:w-[115%] after:-rotate-[4.6deg] after:absolute flex justify-center items-center h-screen bg-hero bg-cover bg-bottom-1">
                <div className="flex flex-col justify-center text-center backdrop-blur-sm w-full h-full">
                    <h1 id="nom" className="text-h1 text-white tracking-h1 uppercase font-bold">Mes réalisations</h1>
                    <h3 id="webdesign" className="text-h3 text-white tracking-[20px] uppercase font-thin">Tous mes projets</h3>
                </div>
            </section>

            <section id="a-propos" className="mb-[160px]">
                <h1 id="welcome" className="text-h1 text-left -rotate-[4.6deg] mt-[-55px] uppercase text-red font-light tracking-h1">Résultats de la recherche.</h1>
                <div id="project" className="flex w-[90%] mx-auto mt-[160px] mb-[80px] flex-wrap justify-center">
                    <div className="block w-full text-center">
                        <select id="type" onChange={handleFilterChange} size="4" name="type" data-filter-value="class" data-filter-compare="equal" className="overflow-y-auto focus:outline-none w-[90%] bg-white">
                            <option className="text-h3 text-blue bg-red font-bold uppercase inline-block w-[160px] text-center mx-[64px]" value="">Tous</option>
                            <option className="text-h3 text-blue font-bold uppercase inline-block w-[160px] text-center mx-[64px]" value="Pro">Pro</option>
                            <option className="text-h3 text-blue font-bold uppercase inline-block w-[160px] text-center mx-[64px]" value="études">Etudes</option>
                            <option className="text-h3 text-blue font-bold uppercase inline-block w-[160px] text-center mx-[64px]" value="Autres">Autres</option>
                        </select>
                    </div>
                            {filtered.map(x => <ProjectWidget key={x.name} {...x}/> )}
                    </div>
            </section>
        </>
    )
}