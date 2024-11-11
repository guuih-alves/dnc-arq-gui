import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () =>{
    const { pathname} = useLocation()

    useEffect(() => {             /*para rolar para o topo da página */
        window.scrollTo(0,0)
    },  [pathname])

    return null
}

export default ScrollToTop