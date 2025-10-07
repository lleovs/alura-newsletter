import { BellIcon } from "@heroicons/react/24/solid";
import logoMergulhador from "../assets/icone-mergulhador.svg";
import {useState} from "react";

export default function Newsletter() {
    const [inputIsFocus, setInputIsFocus] = useState(false);

    return(
            <div className="grid auto-rows-max lg:grid-cols-2 gap-4 h-max bg-white w-auto mx-4 items-center justify-center rounded-2xl font-display md:lg:border md:lg:border-(--dark-blue) drop-shadow-2xl">
                <div className="bg-(--dark-blue) flex justify-center items-center p-2 rounded-t-2xl border-0 lg:rounded-l-2xl lg:rounded-r-none">
                    <img className="hidden lg:block w-72 h-[450px]" src={logoMergulhador} alt="Imagem de um capaçete de mergulho" />
                </div>
                <div className="flex flex-col justify-center items-center p-4 lg:py-4 lg:pr-4 h-full gap-6 group">
                    <BellIcon stroke="#061E3C" fill="#C5DFFF" className={`h-12 w-12 hover:animate-shake-bell ${inputIsFocus ? "animate-shake-bell" : "animate-none"}`} />
                     <div className="flex flex-col text-center w-full">
                        <p className="text-4xl font-bold mb-2 px-1">Alura Newsletter</p>
                        <p className="text-xl text-gray-700mb-2">Mergulhe em uma plataforma que respira tecnologia!</p>
                    </div>
                    <form className="flex flex-col justify-between w-full">
                        <label  className="text-md mb-2 sm:pl-0.5 font-bold text-gray-700" htmlFor="email">Email:</label>
                        <input onFocus={() => setInputIsFocus(true)} on onBlur={() => setInputIsFocus(false)} className="text-lg mb-4 w-full h-8 pl-2 py-2 rounded border border-gray-200 shadow focus:outline-none hover:border-(--light-blue) hover:ring-1 hover:ring-(--dark-blue) focus:ring-(--dark-blue) focus:ring-1 focus:border-(--dark-blue)" type="text" id="email" placeholder="Digite seu email"/>
                        <button id="submit" type="#" className="bg-(--dark-blue) font-black rounded-full w-full text-white h-12 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-(--hover-blue) shadow-xl">Increver-se</button>
                    </form>
                </div>
            </div>
    );
}