"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import Footer from "../components/navigation/Footer";

const PageLayout = ({ children }: PropsWithChildren) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    const raf = useCallback(
        (time: number) => {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        },
        [lenis]
    );

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        if (!lenis) {
            setLenis(new Lenis());
        }

        requestAnimationFrame(raf);

        return () => {
            lenis?.destroy();
        };
    }, [lenis, raf]);

    return (
        <div className="pageLayout">
            <div className="App">{children}</div>
            {/* <Footer /> */}
        </div>
    );
};

export default PageLayout;
