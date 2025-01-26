import { services } from "@/app/data/services";
import ServiceCard from "../card/ServiceCard";
import styles from "@/app/styles/section.module.scss";

const ServicesSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <h2>Services</h2>
            </div>
            <div className={styles.content}>
                {services.map((service, index: number) => {
                    return <ServiceCard key={index} {...service} />;
                })}
            </div>
        </section>
    );
};

export default ServicesSection;
