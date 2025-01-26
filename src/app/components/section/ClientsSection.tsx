import styles from "@/app/styles/section.module.scss";
import ClientMarquee from "../misc/ClientMarquee";

const ClientsSection = () => {
    return (
        <section className={styles.clientsSection}>
            <div className={styles.header}>
                <h2>Clients</h2>
            </div>
            <div className={styles.content}>
                <ClientMarquee />
            </div>
        </section>
    );
};

export default ClientsSection;
