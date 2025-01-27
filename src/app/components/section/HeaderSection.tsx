"use client";

import Image from "next/image";
import styles from "@/app/styles/section.module.scss";
import HeroImg from "@/assets/images/hero.webp";
import { TypeAnimation } from "react-type-animation";

const HeaderSection = () => {
    return (
        <section className={styles.headerSection}>
            <div className={styles.titleWrapper}>
                <h1 gt-aos="fade-up">Lawrence Alabi</h1>

                <div className={styles.titleDescription}>
                    <p gt-aos="fade-up">
                        Expert in{" "}
                        <TypeAnimation
                            sequence={[
                                "Copy writing",
                                1400, // Waits 1s
                                "Branding",
                                1400, // Waits 1s
                                "Voice over",
                                1400, // Waits 1s
                                "Video Editing",
                                1400, // Waits 1s
                                "Cinematography",
                                1400, // Waits 1s
                            ]}
                            wrapper="span"
                            style={{ color: "#3d5af1" }}
                            speed={50}
                            repeat={Infinity}
                        />{" "}
                    </p>
                </div>
            </div>

            <div className={styles.imageWrapper}>
                <Image
                    src={HeroImg}
                    alt={"The Lawrence Alabi"}
                    gt-aos="zoom-in-up"
                />
            </div>

            <div className={styles.descriptionWrapper}>
                <p gt-aos="flip-up">
                    I'm Lawrence Alabi a leading brand strategist and content
                    creator in Nigeria
                </p>
            </div>
        </section>
    );
};

export default HeaderSection;
