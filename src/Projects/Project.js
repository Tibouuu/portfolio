import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Project(props){
    const article = props.article

    function createMarkup() {
        return { __html: article.description };
    }

    function createRole() {
        return { __html: article.role };
    }

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
        })})
    return(
        <>
            <section id="accueil" className={"after:content-[''] bg-fixed after:bg-white after:h-[130px] after:bottom-[-60px] after:w-[115%] after:-rotate-[4.6deg] after:absolute flex justify-center items-center h-screen bg-cover bg-bottom-1 bg-hero"}>
                <div className="flex flex-col justify-center text-center backdrop-blur-sm w-full h-full">
                    <h1 id="nom" className="text-h1 text-white tracking-h1 uppercase font-bold">{article.name}</h1>
                    <h3 id="webdesign" className="text-h3 text-white tracking-[20px] uppercase font-thin">Projet {article.class}</h3>
                </div>
            </section>

            <section id="projet" className="w-80% mx-auto mb-[160px]">
                <h1 id="welcome"
                    className="text-h1 text-left -rotate-[4.6deg] mt-[-55px] uppercase text-red font-light tracking-h1">{article.subtitle}</h1>
                <div className=" h-[450px]  my-[160px] flex justify-between">
                    <div>
                        <h4 className="text-h4 font-bold text-blue">Type de projet</h4>
                        <p className="text-blue mb-[64px]">{article.categories}</p>
                        <h4 className="text-h4 font-bold text-blue">Statut du projet</h4>
                        <p className="text-blue mb-[64px]">{article.status}</p>
                        <h4 className="text-h4 font-bold text-blue">Nombre de participants</h4>
                        <p className="text-blue mb-[64px]">{article.group} personnes sur le projet</p>
                        <h4 className="text-h4 font-bold text-blue">Date du projet</h4>
                        <p className="text-blue mb-[64px]">{article.date}</p>
                    </div>
                    <div>
                        <img className="w-[600px] object-cover h-full rounded-[16px] border-[2px] border-red" src={article.url}/>
                    </div>
                </div>

                <div>
                    <h2 className="text-h2 text-red uppercase tracking-h2">Description</h2>
                    <p className="text-blue text-justify mt-[24px]" dangerouslySetInnerHTML={createMarkup()}></p>
                    <h4 className="text-h4 font-bold text-blue mt-[48px]">Mon rôle dans le projet</h4>
                    <p className="text-blue mt-[24px] text-justify" dangerouslySetInnerHTML={createRole()}></p>
                </div>
            </section>
        </>
    )
}