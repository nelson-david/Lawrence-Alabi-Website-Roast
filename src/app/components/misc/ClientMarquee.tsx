"use client";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-marquee-slider";
import styles from "@/app/styles/misc.module.scss";
import { clients } from "@/app/data/clients";

const ClientMarquee = () => {
    return (
        <div className={styles.clientMarquee}>
            <Marquee
                velocity={130}
                direction="rtl"
                scatterRandomly={false}
                resetAfterTries={1}
                onInit={() => {}}
                onFinish={() => {}}
            >
                <div className={styles.content}>
                    {clients.map(
                        (
                            client: { image: StaticImageData; name: string },
                            index: number
                        ) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.singleClient}
                                >
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                    />
                                </div>
                            );
                        }
                    )}
                </div>
                <></>
            </Marquee>
        </div>
    );
};

export default ClientMarquee;
