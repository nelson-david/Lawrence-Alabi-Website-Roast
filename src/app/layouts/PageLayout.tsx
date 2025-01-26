"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import Footer from "../components/navigation/Footer";

const PageLayout = ({ children }: PropsWithChildren) => {
    // const [lenis, setLenis] = useState<Lenis | null>(null);

    // function isMobile() {
    //     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //         navigator.userAgent
    //     );
    // }

    // const raf = useCallback(
    //     (time: number) => {
    //         lenis?.raf(time);
    //         requestAnimationFrame(raf);
    //     },
    //     [lenis]
    // );

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        // if (!lenis) {
        //     if (!isMobile()) {
        //         setLenis(
        //             new Lenis({
        //                 lerp: isMobile() ? 0.2 : 0.1, // Adjust lerp for mobile
        //                 smoothWheel: !isMobile(), // Disable smooth wheel on mobile
        //             })
        //         );

        //         requestAnimationFrame(raf);
        //     } else {
        //         // Fallback to native scrolling on mobile
        //         document.documentElement.style.scrollBehavior = "smooth";
        //     }
        // }

        // return () => {
        //     lenis?.destroy();
        // };
    }, []);

    return (
        <div className="pageLayout">
            <div className="App">{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;
