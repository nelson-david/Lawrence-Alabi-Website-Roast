import { socials } from "@/app/data/socials";
import styles from "@/app/styles/navigation.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialWrapper}>
                <ul>
                    {socials.map((social, index: number) => {
                        return (
                            <li key={index}>
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    title={social.name}
                                >
                                    {social.icon}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.titleWrapper}>
                <p>@2025</p>
                <h2 data-aos="zoom-in-up">The Lawrenz</h2>
            </div>
            <div className={styles.creditWrapper}>
                <p>
                    Built with ❤️ by{"  "}
                    <Link href="https://theurban.studio" target="_blank">
                        The Urban Studio
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
