import Image, { StaticImageData } from "next/image";
import styles from "@/app/styles/card.module.scss";

const ServiceCard = ({
    title,
    image,
    description,
    color,
}: {
    title: string;
    image: StaticImageData;
    description: string;
    color: string;
}) => {
    return (
        <div className={styles.serviceCard} data-aos="zoom-in-up">
            <div className={styles.imageWrapper}>
                <Image src={image} alt={title} />
            </div>
            <div
                className={styles.colorWrapper}
                style={{ backgroundColor: `${color}45` }}
            ></div>

            <div className={styles.contentWrapper}>
                <h3>{title}</h3>
            </div>
            {/* <div className={styles.descriptionWrapper}>
                <p>{description}</p>
            </div> */}
        </div>
    );
};

export default ServiceCard;
