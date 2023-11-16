import GamingWrapperLanding from "@/app/components/GamingWrapper/GamingWrapperLanding";
import AdicionarJogoForm from "./AdicionarJogoForm";

export default function GameSection() {
    return(
        <div className="w-full h-full flex flex-wrap gap-4">
            <GamingWrapperLanding 
                Titulo="Final Fantasy 7 Remake" 
                ImageSrc="https://psxbrasil.com.br/wp-content/uploads/2020/12/ff7r-art-tifa-1440x2560-1.jpg"
                Nota={4}
                />
            <GamingWrapperLanding 
                Titulo="Chrono Trigger" 
                ImageSrc="https://e1.pxfuel.com/desktop-wallpaper/697/477/desktop-wallpaper-android-chrono-trigger-mobile-world-trigger-iphone.jpg"
                Nota={5}
                />
            <GamingWrapperLanding 
                Titulo="GTA V" 
                ImageSrc="https://wallpapers.com/images/featured/gta-5-phone-2asv2cebtqhgtrw0.jpg"
                Nota={4}
                />
            <GamingWrapperLanding 
                Titulo="Pokemon Emerald" 
                ImageSrc="https://pbs.twimg.com/media/FiQ4g6_WYAMe-py.jpg"
                Nota={3}
                />
            <GamingWrapperLanding 
                Titulo="Pokemon Fire Red" 
                ImageSrc="https://i.pinimg.com/474x/3c/8f/e2/3c8fe2af4745ea79ef3ec3c19867e4e0.jpg"
                Nota={5}
                />
                
        </div>
    )
}