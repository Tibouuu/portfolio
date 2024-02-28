import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function ProjectWidget(props){

    return(
        <div id="projet" className="drop-shadow-img relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-[16px] m-[12px]">
            <div id="hoverprojet" className=" flex flex-col border-red hover:border-[2px] items-center justify-center w-full h-full transition-all rounded-[16px] sm:rounded-full sm:hover:rounded-[16px] transition-all sm:scale-75 sm:hover:scale-100 bg-grey-trans sm:hover:bg-grey-trans absolute">
                    <p id="hoverclass" className="font-light font-[16px] text-white uppercase">{props.class}</p>
                    <h4 className="text-nav sm:text-h4 font-bold text-white m-0">{props.name}</h4>
            <div className="relative">
                <Link to={"/Project/"+props.id}><img className="transition-all hover:pl-[12px]" src="/img/subdirectory_right.svg"/></Link>
            </div>
            </div>
            <img className="h-full aspect-square object-cover rounded-[16px]" src={props.url}/>
        </div>
    )
}