import {gsap} from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {Link} from "react-router-dom";

export default function Menu(){
    /*var rule = CSSRulePlugin.getRule('header a::after');
    gsap.registerPlugin(CSSRulePlugin)
    onscroll = () => {
        if(window.pageYOffset > 500 && window.pageYOffset < 1500 || window.pageYOffset > 2500 && window.pageYOffset < 5100){
            gsap.to("header a", {
                color: "#3F4668",
            })
            gsap.to(rule, {
                cssRule: {
                    "background-color": "#3F4668"
                }
            })
        } else {
            gsap.to("header a", {
                color: "#E9EAEC",
            })
            gsap.to(rule, {
                cssRule: {
                    "background-color": "#E9EAEC"
                }
            })
        }
    }*/

    function openMenuNav(){
        let tab = document.querySelectorAll("nav a")
            document.querySelector('header')?.classList.add("backdrop-blur-[2px]")
            gsap.to("#menu", {
                rotate: 360,
                duration: 0.5,
                opacity: 0
            })
            gsap.to("#clear", {
                rotate: 180,
                duration: 0.5,
                opacity: 1,
                delay: 0.2,
                display: "flex"
            })
            let delai = 0
            tab.forEach(function (a) {
                gsap.to(a, {
                    opacity: 1,
                    display: "inline-block",
                    top: 0,
                    duration: 0.5,
                    delay: delai,
                    ease: "power2.out"
                })
                delai +=0.2
            })
    }

    openMenuNav()

    function closeMenuNav(){
        let tab = document.querySelectorAll("nav a")
            gsap.to("#menu", {
                rotate: 0,
                duration: 0.5,
                delay: 0.2,
                opacity: 1
            })
            gsap.to("#clear", {
                rotate: -180,
                duration: 0.5,
                opacity: 0,
                display: "none"
            })
            let delai = 0
            tab.forEach(function (a) {
                gsap.to(a, {
                    opacity: 0,
                    display: "hidden",
                    top: "-80px",
                    duration: 0.5,
                    delay: delai,
                    ease: "power1.inOut"
                })
                delai +=0.2
            })
            document.querySelector("header")?.classList.remove("backdrop-blur-[2px]")
    }
    closeMenuNav()

    return(
        <header className="fixed flex items-center justify-between w-full top-0 z-50 p-[24px]">
            <div className="flex items-center">
                <img className="h-[64px] mr-[48px]" src="/img/logo.svg"/>
                <nav className="relative grow flex justify-around">
                    <div className="text-center "><Link className="hidden [text-shadow:_1px_1px_3px_rgb(0_0_0_/_100%)] relative top-[-80px] pr-[50px] xl:pr-[80px] w-full font-nav  transition-all duration-250 hover:tracking-h3 uppercase text-white font-light after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:hover:w-menu after:absolute  after:left-0 after:bottom-0 after:h-[1px]" to="/">Accueil</Link></div>
                    <div className="text-center"><a href="/#a-propos" className="hidden [text-shadow:_1px_1px_3px_rgb(0_0_0_/_100%)] relative top-[-80px] pr-[50px] xl:pr-[80px] w-full font-nav  transition-all duration-250 hover:tracking-h3 uppercase text-white font-light after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:hover:w-menu after:absolute after:left-0 after:bottom-0 after:h-[1px]">à propos</a></div>
                    <div className="text-center"><Link className="hidden [text-shadow:_1px_1px_3px_rgb(0_0_0_/_100%)] relative top-[-80px] pr-[50px] xl:pr-[80px] w-full font-nav  transition-all duration-250 hover:tracking-h3 uppercase text-white font-light after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:hover:w-menu after:absolute  after:left-0 after:bottom-0 after:h-[1px]" to="/Realisations">Réalisations</Link></div>
                    <div className="text-center"><a href="/#competences" className="hidden [text-shadow:_1px_1px_3px_rgb(0_0_0_/_100%)] relative top-[-80px] pr-[50px] xl:pr-[80px] w-full font-nav  transition-all duration-250 hover:tracking-h3 uppercase text-white font-light after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:hover:w-menu after:absolute  after:left-0 after:bottom-0 after:h-[1px]">Compétences</a></div>
                    <div className="text-center"><a href="/#contact" className="hidden [text-shadow:_1px_1px_3px_rgb(0_0_0_/_100%)] relative top-[-80px] pr-[50px] xl:pr-[80px] w-full font-nav transition-all duration-250 hover:tracking-h3 uppercase text-white font-light after:content-[''] after:transition-all after:duration-500 after:w-0 after:hover:w-full after:hover:w-menu after:absolute after:left-0 after:bottom-0 after:h-[1px]">Contact</a></div>
                </nav>
            </div>
            <img id="menu" onClick={openMenuNav} className="h-[64px] absolute right-[24px] cursor-pointer" src="/img/menu.svg"/>
            <div id="clear" onClick={closeMenuNav} className="w-[64px] h-[64px] opacity-0 hidden cursor-pointer justify-center items-center"><img className="relative my-auto" src="/img/clear.svg"/></div>
        </header>
    )
}