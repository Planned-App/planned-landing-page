'use client';

import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-4 text-gray-800">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Planned Terms of Service
            </h1>
            <p className="mb-4 text-base md:text-lg text-justify">
                Welcome to Planned, a healthy meal plan subscription service provided by Claire Hodgins LLC on the Planned App. These Terms of Service govern your use of our website and mobile application. By using our service, you agree to be bound by these terms and conditions.
            </p>
            
            {/* Nutritional Information Disclaimer */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Nutritional Information Disclaimer</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Our meal plans are not designed by a certified nutritionist or dietitian, and we do not claim to aid in weight loss or treat any medical conditions. The nutritional information provided is for general informational purposes only. We make no representations or warranties regarding the completeness, accuracy, reliability, suitability, or availability of the nutritional information, recipes, or meal plans.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                Recipes tagged in the app as vegan, vegetarian, or by any other diet type are based on our own categorizations and assumptions. While we strive for accuracy and use common knowledge, Claire Hodgins LLC is not responsible for any inaccuracies in these tags. Users are encouraged to review ingredients and consult with a nutrition professional if specific dietary needs are required. Claire Hodgins LLC does not make any dietary claims or assurances regarding the accuracy of diet-type labels or nutritional benefits associated with them.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                All nutrient and macro information, including calories, is sourced from an online database. While we strive for accuracy, Claire Hodgins LLC is not liable for any inaccuracies in caloric content or other nutritional values. We do not claim any guarantee on caloric amounts or macronutrient calculations. As always, we recommend doing your own due diligence if caloric amounts seem inaccurate. If you have specific dietary requirements, please consult with a nutrition professional.
            </p>
            
            {/* Allergen Disclaimer */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Allergen Disclaimer</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC acknowledges the seriousness of food allergies and intolerances. While we strive to accommodate various dietary needs, it is ultimately the responsibility of the subscriber to ensure that our meals align with their specific allergies or dietary restrictions. We cannot guarantee that our meals are free from allergens such as nuts, gluten, dairy, or other potential allergens.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                By subscribing to our service, you agree that it is your responsibility to review the ingredients of each meal and verify their compatibility with your dietary needs. Claire Hodgins LLC shall not be held liable for any allergic reactions or adverse health effects resulting from consuming our meals. If you have concerns about allergies or dietary restrictions, we strongly recommend consulting with a healthcare professional before using our service. By continuing to use our service, you acknowledge and accept the risks associated with meals that may contain allergens.
            </p>

            {/* Instacart Partnership Disclaimer */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Instacart Partnership Disclaimer</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Our service includes integration with Instacart to facilitate grocery deliveries. Claire Hodgins LLC is not responsible for any issues, errors, or delays in Instacart orders. Instacart is a third-party service, and all orders, payments, and interactions with Instacart are subject to their own terms and conditions. By using the Instacart integration within Planned, you agree that any concerns or issues with your grocery orders should be directed to Instacart.
            </p>

            {/* Liability Disclaimer */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Liability Disclaimer</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC and its employees, officers, directors, affiliates, agents, contractors, licensors, or service providers will not be held responsible for any negative reactions, illnesses, or inaccuracies in macro nutritional information arising from the consumption of meals provided through Planned. By subscribing to our service, you acknowledge and agree to assume all risks associated with the consumption of meals provided.
            </p>

            {/* Marketing Consent */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Marketing Consent</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                By subscribing to our service, you consent to receive marketing materials from Claire Hodgins LLC, including but not limited to newsletters, promotional offers, and updates about our products and services.
            </p>

            {/* Refund Policy */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Refund Policy</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                All sales are final, and there are no refunds. If you cancel your subscription, you will not receive a refund for any remaining days or meals left in your subscription.
            </p>

            {/* Membership Materials */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Membership Materials</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                All membership materials, including but not limited to meal plans, recipes, and nutritional information, are for your personal use only and may not be reproduced for publication, personal, or commercial use without permission from Claire Hodgins LLC. Publication or promotion of recipes for the intent of sale or self-advertisement may result in legal action.
            </p>

            {/* Termination of Membership */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Termination of Membership</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                You may cancel your membership at any time. Upon cancellation, you will be immediately removed from the app and will no longer have access to meal plans, recipes, or other membership materials.
            </p>

            {/* Changes to this Policy */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Changes to this Policy</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC reserves the right to modify this Privacy Policy at any time to reflect changes in our practices, services, or legal requirements. Users will be notified of significant changes to this policy within the app, and continued use of the app signifies acceptance of the updated policy.
            </p>

            {/* Governing Law */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                These Terms of Service shall be governed by and construed in accordance with the laws of the state of Tennessee, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms of Service shall be brought exclusively in the federal or state courts located in Nashville, Tennessee, and each party irrevocably consents to the jurisdiction of such courts.
            </p>

            {/* Acceptance of Terms and Release of Liability */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Acceptance of Terms and Release of Liability</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                By signing up for, subscribing to, or using the Planned app and its services, you are acknowledging that you have read, understood, and agree to these Terms of Service in their entirety. You accept full responsibility for all risks associated with using the app, including any adverse reactions to meals, inaccuracies in nutritional information, and any issues related to third-party services such as Instacart.
            </p>
            <p className="text-base md:text-lg text-justify">
                By subscribing to and using Planned, you agree to release Claire Hodgins LLC, its employees, officers, directors, affiliates, agents, contractors, licensors, and service providers from any and all liability for harm, injury, or damages resulting from your use of the app and its meal plans. If you do not agree to these terms, please refrain from using Planned.
            </p>
        </div>
    );
};

export default TermsOfService;