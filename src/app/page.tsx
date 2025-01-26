import ClientsSection from "./components/section/ClientsSection";
import HeaderSection from "./components/section/HeaderSection";
import ServicesSection from "./components/section/ServicesSection";
import PageLayout from "./layouts/PageLayout";

const Home = () => {
    return (
        <PageLayout>
            <HeaderSection />
            <ServicesSection />
            <ClientsSection />
        </PageLayout>
    );
};

export default Home;
