import Footer from '@/components/Layout/Footer';
import AcceptableUsePolicy from '@/components/Layout/Footer/AcceptableUsePolicy';
import HeaderMenuv2 from '@/components/Layout/HeaderMenuv2';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <HeaderMenuv2 />
            <AcceptableUsePolicy />
            <Footer />
        </>

    )
}

export default PrivacyPolicyPage;