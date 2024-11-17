import Footer from '@/components/Layout/Footer';
import AcceptableUsePolicy from '@/components/Layout/Footer/AcceptableUsePolicy';
import FAQ from '@/components/Layout/Footer/FAQ';
import HeaderMenuv2 from '@/components/Layout/HeaderMenuv2';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <HeaderMenuv2 />
            <FAQ />
            <Footer />
        </>

    )
}

export default PrivacyPolicyPage;