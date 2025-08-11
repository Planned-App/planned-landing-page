import Footer from '@/components/Layout/Footer';
import PrivacyPolicy from '@/components/Layout/Footer/PrivacyPolicy';
import RecipeImportPolicy from '@/components/Layout/Footer/RecipeImportPolicy';
import HeaderMenuv2 from '@/components/Layout/HeaderMenuv2';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <HeaderMenuv2 />
            <RecipeImportPolicy />
            <Footer />
        </>

    )
}

export default PrivacyPolicyPage;