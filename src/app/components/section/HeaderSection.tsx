import Image from "next/image";
import styles from "@/app/styles/section.module.scss";
import HeroImg from "@/assets/images/hero.webp";

const HeaderSection = () => {
    return (
        <section className={styles.headerSection}>
            <div className={styles.titleWrapper}>
                <h1 gt-aos="fade-up">Lawrence Alabi</h1>

                <div className={styles.titleDescription}>
                    <p gt-aos="fade-up">
                        Expert in <span>Copy Writing</span>
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
