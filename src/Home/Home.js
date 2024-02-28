import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ProjectWidget from "../Projects/ProjectWidget";
import SelectionList from "../Projects/SelectionList";

function Home() {
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
            x: "30%",
            scrollTrigger: {
                trigger: "#a-propos",
                scrub: true,
                toggleActions: "play none none reset"
            }
        })

        gsap.from("#presentation", {
            scrollTrigger: "#soif",
            y: "100px",
            opacity: 0,
            duration: 1,
            delay: 0.5
        })

        gsap.from("#beforepres", {
            scrollTrigger: "#soif",
            width: "10px",
            height: "10px",
            opacity: 0,
            delay: 0.75,
            duration: 2,
            ease: "power1.out"
        })

        gsap.from("#afterpres", {
            scrollTrigger: "#soif",
            width: "10px",
            height: "10px",
            opacity: 0,
            delay: 0.75,
            duration: 2,
            ease: "power1.out"
        })

        gsap.from("#bio-logo", {
            scrollTrigger: "#bio",
            x: "-100px",
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        })

        gsap.from("#bio-title", {
            scrollTrigger: "#bio",
            x: "100px",
            y: "-50px",
            opacity: 0,
            duration: 1,
            delay: 0.25,
            ease: "power1.out"
        })

        gsap.from("#bio-text", {
            scrollTrigger: "#bio",
            x: "100px",
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power1.out"
        })

        gsap.from("#bio", {
            scrollTrigger: "#bio",
            y: "100px",
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power1.out"
        })
        let image = document.getElementById("bio-logo")
        image.onmousemove = (e) => {
            gsap.to(image, {
                x: e.movementX*1.2,
                y: e.movementY*1.2,
            })

        }
        image.onmouseout = (e) => {
            gsap.to(image, {
                x: 0,
                y: 0
            })

        }
        let boutons = document.getElementsByClassName("cta")
        for(let bouton of boutons){
            bouton.onmouseover = () => {
                gsap.to(".cta", {
                    background: "linear-gradient(to bottom left, rgba(204, 38, 78, 0) 0%, rgba(204, 38, 78, 0) 0%, #CC264E 0%, #CC264E 100%)",
                    textShadow: '-2px 2px 0 rgba(63, 70, 104, 1)',
                    duration: 0.5,
                    ease: "power1.out"
                })
            }

            gsap.to(".cta", {
                background: "linear-gradient(to bottom left, rgba(204, 38, 78, 0) 0%, rgba(204, 38, 78, 0) 50%, #CC264E 50%, #CC264E 100%)",
                textShadow: '-1px 2px 0 rgba(204, 38, 78, 1)',
                duration: 0.5,
                ease: "power1.out"
            })

            bouton.onmouseout = () => {
                gsap.to(".cta", {
                    background: "linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, #CC264E 50%, #CC264E 100%)",
                    duration: 0.5,
                    textShadow: '-1px 2px 0 rgba(204, 38, 78, 1)',
                    ease: "power1.out"
                })
            }
        }

        let boutons2 = document.getElementsByClassName("cta2")
        for(let bouton of boutons2){
            bouton.onmouseover = () => {
                gsap.to(".cta2", {
                    background: "linear-gradient(to bottom left, rgba(204, 38, 78, 0) 0%, rgba(204, 38, 78, 0) 0%, #CC264E 0%, #CC264E 100%)",
                    textShadow: '-2px 2px 0 rgba(233, 234, 236, 1)',
                    duration: 0.5,
                    ease: "power1.out"
                })
            }

            gsap.to(".cta2", {
                background: "linear-gradient(to bottom left, rgba(204, 38, 78, 0) 0%, rgba(204, 38, 78, 0) 50%, #CC264E 50%, #CC264E 100%)",
                textShadow: '-1px 2px 0 rgba(204, 38, 78, 1)',
                duration: 0.5,
                ease: "power1.out"
            })

            bouton.onmouseout = () => {
                gsap.to(".cta2", {
                    background: "linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, #CC264E 50%, #CC264E 100%)",
                    duration: 0.5,
                    textShadow: '-1px 2px 0 rgba(204, 38, 78, 1)',
                    ease: "power1.out"
                })
            }
        }

        let nombres = document.getElementById("numbers").querySelectorAll("h1")

        for(let number of nombres){
            gsap.from(number, {
                y: -200,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#trigger-numbers",
                    onEnter: nombre,
                }
            })
            function nombre() {
                let cpt = 0;
                let duree = 0.5;
                let n = number.textContent
                let delta = Math.ceil((duree * 1000) / n); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
                function countdown() {
                    number.innerHTML = ++cpt;
                    if (cpt < n) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
                        setTimeout(countdown, delta);
                    }
                }
                setTimeout(countdown, delta)
            }
        }

        let subtitles = document.getElementById("numbers").querySelectorAll("h3")
        let delay = 0
        for(let subtitle of subtitles){
            gsap.from(subtitle, {
                y: -30,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#trigger-numbers",
                },
                delay: delay+=0.5
            })
        }

        gsap.from("#web-logo", {
            scrollTrigger: "#web",
            x: "100px",
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        })

        gsap.from("#web-title", {
            scrollTrigger: "#web",
            x: "-100px",
            y: "-50px",
            opacity: 0,
            duration: 1,
            delay: 0.25,
            ease: "power1.out"
        })

        gsap.from("#web-text", {
            scrollTrigger: "#web",
            x: "-100px",
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power1.out"
        })

        gsap.from("#web", {
            scrollTrigger: "#web",
            y: "100px",
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power1.out"
        })
        document.getElementById("web-logo").onmousemove = (e) => {
            gsap.to("#web-logo", {
                x: e.movementX*1.2,
                y: e.movementY*1.2,
            })

        }
        document.getElementById("web-logo").onmouseout = (e) => {
            gsap.to("web-logo", {
                x: 0,
                y: 0
            })

        }
    })

    return (
        <>
            <section id="accueil" className="bg-fixed bg-center flex justify-center items-center h-screen bg-hero bg-cover bg-bottom-1">
                <div className="relative flex flex-col justify-center sm:text-center backdrop-blur-sm w-full h-full">
                    <h1 id="nom" className="text-h3 md:text-h2 lg:text-h1 text-white tracking-h1 uppercase font-bold ml-[32px] sm:ml-0">Thibaut Debroucke</h1>
                    <h3 id="webdesign" className="text-nav md:text-h4 lg:text-h3 text-white tracking-[12px] sm:tracking-[20px] uppercase font-thin ml-[32px] sm:ml-0">Webdesigner</h3>
                    <div className="absolute bottom-[0] bg-diag mt-[-32px] z-50 w-full h-[7.5vw]"></div>
                </div>
            </section>
            <section id="a-propos" className="mb-[160px]">
                <h1 id="welcome" className="overflow-x-hidden text-h3 md:text-h2 lg:text-h1 text-left ml-[-100px] -rotate-[4.5deg] mt-0 sm:mt-[-20px] md:mt-[-40px] lg:mt-[-55px] uppercase text-red whitespace-nowrap font-book font-light tracking-h1">Bienvenue sur mon portfolio.</h1>
                <div id="presentation" className="mt-[160px] p-4 sm:p-[40px] w-[95%] sm:w-[70%] md:w-[90%] lg:w-[75%] xl:w-[60%] mx-auto text-justify relative">
                    <div id="beforepres" className="w-[140px] sm:w-[280px] rounded-bl-[16px] border-red border-b-[2px] border-l-[2px] absolute left-0 bottom-0 h-[140px] sm:h-full"></div>
                    <div id="afterpres" className="w-[140px] sm:w-[280px] rounded-tr-[16px] border-red border-t-[2px] border-r-[2px] absolute right-0 top-0 h-[140px] sm:h-full"></div>
                    <h4 className="text-p sm:text-h4 font-bold text-blue pb-[16px]">Bonjour,</h4>
                    <p id='soif' className="text-[12px] sm:text-p text-grey font-regular ">
                        Je suis <strong className="font-bold text-blue">Thibaut Debroucke</strong>, étudiant de 20 ans en
                        troisième année de <strong className="font-bold text-blue">BUT MMI</strong> à l’IUT de Lens, dans la
                        région du Pas-de-Calais. Doté d'une grande imagination, j'aime laisser parler ma créativité sous
                        différentes formes et l'exploiter grâce aux compétences que j'acquiers au fil de ma formation. Ce qui me permet de
                        produire des réalisations graphiques originales et innovantes. Prêt d'entrer en Mastère User Experience à l'ESD de Toulouse, je suis actuellement à la recherche
                        d’une <strong className="text-blue">alternance</strong> de deux
                        ans avec laquelle je pourrais proposer mes compétences et développer une nouvelle expérience
                        professionnelle enrichissante.
                    </p>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row pb-[160px] items-center justify-center relative after:content-[''] after:bg-grey after:h-full after:top-[130px] sm:after:top-[242px] after:z-[-1] after:w-full after:absolute">
                <div className="absolute top-[122px] sm:top-[194px] z-[-1] bg-diagblue mt-[-32px] z-50 w-full h-[40px] sm:h-[80px]"></div>
                <img id="bio-logo" className="relative drop-shadow-img w-[75%] md:w-[625px] lg:w-[475px] xl:w-[550px] lg:mr-[40px]" src="/img/profil.png"/>
                    <div className="w-[90%] sm:w-[75%] lg:w-[475px] xl:w-[550px] mt-[40px] lg:mt-0 lg:ml-[40px]">
                        <h2 id="bio-title" className="text-sub sm:text-h3 xl:text-h2 text-red uppercase tracking-h2">Soif de création</h2>
                        <div id="bio-text">
                            <p className="text-[12px] sm:text-p mt-[24px] text-justify text-white lg:text-grey">Actuellement en alternance dans le webdesign
                                et la communication, je vise à obtenir mon BUT MMI avant d’enrichir mes
                                connaissances en poursuivant mes études dans l'expérience utilisateur.</p>
                            <p className="text-[12px] sm:text-p mt-[24px] text-justify text-white">Proposer des designs adaptés à chaque
                                personne est ce que j’aime le plus dans ce métier. Après mes études, j’ai comme objectif
                                de travailler en tant qu'UX/UI Designer, pour permettre à de futurs clients de
                                trouver l’identité visuelle qui leur ressemble vraiment.</p>
                        </div>
                        <div id="bio" className="cta relative text-white inline-block px-[25px] py-[20px] mt-[24px] bg-cta">
                            <a href="/img/CV%20Thibaut%20Debroucke.pdf" className="text-nav sm:text-h4 text-white font-bold uppercase">Voir mon CV</a>
                        </div>
                    </div>
            </section>

            <section id="numbers" className="bg-grey relative mb-[160px]">
                <div className="flex sm:flex-row flex-col justify-center">
                    <div className="flex flex-col items-center my-4 sm:my-0 mx-4 lg:mx-12 xl:mx-8">
                        <h1 className="number text-[96px] xl:text-[128px] text-red font-bold drop-shadow-number hover:drop-shadow-numberhover transition-all duration-500 ease-out">4</h1>
                        <h3 className="text-sub xl:text-h3 text-white text-center uppercase font-bold">Projets étudiants</h3>
                    </div>
                    <div className="flex flex-col items-center my-4 sm:my-0 mx-4 lg:mx-12 xl:mx-8">
                        <h1 className="number text-[96px] xl:text-[128px] text-red font-bold drop-shadow-number hover:drop-shadow-numberhover transition-all duration-500 ease-out">2</h1>
                        <h3 className="text-sub xl:text-h3 text-white text-center uppercase font-bold">Projets pros</h3>
                    </div>
                    <div className="flex flex-col items-center my-4 sm:my-0 mx-4 lg:mx-12 xl:mx-8">
                        <h1 className="number text-[96px] xl:text-[128px] text-red font-bold drop-shadow-number hover:drop-shadow-numberhover transition-all duration-500 ease-out">3</h1>
                        <h3 className="text-sub xl:text-h3 text-white text-center uppercase font-bold">années d'études</h3>
                    </div>
                    <div id="trigger-numbers"></div>
                </div>
                <div className="pt-[160px] relative z-10 flex flex-col lg:flex-row justify-center items-center">
                    <div className=" w-[90%] sm:w-[75%] lg:w-[475px] xl:w-[550px] lg:mr-[40px] mb-[40px] lg:mb-0">
                        <h2 id="web-title" className="text-h4 sm:text-h3 xl:text-h2 text-red uppercase tracking-h2">Le web facile</h2>
                        <div id="web-text">
                            <p className="text-[12px] sm:text-p mt-[24px] text-justify text-white">Créer des sites web avec des designs
                                esthétiques est une chose importante, mais apprendre à adopter les diverses visions de
                                leurs utilisateurs pour livrer des produits accessibles et adaptés à chacun est un
                                travail essentiel qui me passionne.</p>
                            <p className="text-[12px] sm:text-p mt-[24px] text-justify text-white lg:text-grey">
                                Depuis plusieurs années, j’apprends à concevoir des expériences digitales cohérentes par
                                le biais de travaux pertinents, qui mettent en pratique des compétences cruciales dans
                                le domaine.</p>
                        </div>
                        <div id="web" className="cta2 relative inline-block px-[25px] py-[20px] mt-[24px] bg-cta"><a
                            href="/realisations" className="text-nav sm:text-h4 text-white lg:text-grey font-bold uppercase">Mes projets</a></div>
                    </div>
                    <img id="web-logo" className="relative drop-shadow-img w-[75%] lg:ml-[40px] rounded-[195px] md:w-[625px] lg:w-[475px] xl:w-[550px]" src="/img/marche.png"/>
                </div>
            </section>

            <section id="realisations" className="relative text-center mb-[160px] after:content-[''] after:bg-white after:h-[100px] sm:after:h-[200px] after:top-[-220px] sm:after:top-[-350px] xl:after:top-[-330px] after:left-0 after:z-0 after:w-full after:absolute">
                <div className="absolute xl:top-[-410px] top-[-300px] sm:top-[-430px] z-0 bg-diag w-full h-[80px]"></div>
                <h1 className="text-h3 md:text-h2 lg:text-h1 m-0 text-center uppercase text-red font-light tracking-h1">Mes réalisations</h1>
                <h4 className="text-nav sm:text-h4 text-center font-bold text-blue">Une sélection de mes projets les plus créatifs et enrichissants.</h4>
                <div id="project" className="flex w-[90%] mx-auto my-[80px] flex-wrap justify-center">
                    <SelectionList />
                </div>
                <div className="cta2 inline-block px-[25px] py-[20px] bg-cta"><a href="/realisations" className="text-h4 text-grey text-center font-bold uppercase">Voir plus</a></div>
            </section>

            <section id="competences" className="text-center">
                <p className="text-grey text-center w-[80%] lg:w-[60%] mx-auto mb-[80px]">Il est important d’avoir un panel
                    de <strong>compétences techniques</strong> large pour pouvoir répondre
                    à de nombreux besoins différents. Mais pour se démarquer, ces compétences se doivent d’être
                    reliées par des <strong>atouts</strong>.</p>
                <img className="-rotate-90 sm:rotate-0 sm:mx-auto" src="/img/Graphe.svg"/>

            </section>

            <section id="contact" className="flex w-full items-center bg-grey mt-[250px] text-center lg:text-left justify-center lg:justify-between relative">
                <div className="absolute top-[-40px] sm:top-[-80px] z-0 bg-diagblue w-full h-[40px] sm:h-[80px]"></div>
                <div className="lg:pl-[128px]">
                    <h3 className="text-h4 sm:text-h3 text-red uppercase font-bold mb-[64px]">Contactez-moi</h3>
                    <div className="mb-[64px]">
                        <p className="text-white">Appelez-moi au</p>
                        <h3 className="text-nav sm:text-h4 md:text-h3 text-white uppercase font-bold">07 62 33 48 58</h3>
                    </div>
                    <div className="mb-[64px]">
                        <p className="text-white">Envoyez-moi un mail à l'adresse</p>
                        <h3 className="text-nav sm:text-h4 md:text-h3 text-white font-bold">thibautdebroucke@gmail.com</h3>
                    </div>
                    <div className="mb-[64px]">
                        <p className="text-white">Retrouvez-moi sur</p>
                        <h3 className="text-nav sm:text-h4 md:text-h3 text-white uppercase font-bold">Linkedin</h3>
                    </div>
                </div>
                <img className="hidden lg:block" src="/img/moi.png"/>
            </section>
        </>
    )
}

export default Home;