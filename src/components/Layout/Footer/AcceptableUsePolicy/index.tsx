
'use client';

import React from 'react';

const AcceptableUsePolicy: React.FC = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-4 text-gray-800">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Planned Acceptable Use Policy
            </h1>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC DBA Planned is committed to creating a positive, safe, and beneficial environment for all users of the Planned app. By accessing and using Planned, you agree to follow this Acceptable Use Policy, which outlines guidelines for acceptable conduct and prohibited activities.
            </p>

            {/* Sections */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">1. Compliance with Laws and Regulations</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Users must comply with all applicable local, state, national, and international laws and regulations when using the Planned app.
                The Planned app is not intended for individuals under the age of 13. If you are under the age of 13, you may use the app only with the supervision and consent of a parent or legal guardian.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">2. No User-Generated Content</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Planned does not permit any form of user-generated content. All recipes, meal plans, nutritional information, and other materials available in the app are created and provided solely by Claire Hodgins LLC. Users cannot upload, submit, or share their own content within the app.
                By using Planned, users agree they know they cannot submit, post, or otherwise introduce any user-generated content into the app, as it is not supported or permitted.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">3. Prohibited Conduct</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Harassment and Abuse:</strong> Users must not engage in any form of harassment, abusive behavior, threats, hate speech, discrimination, or promotion of violence, even outside the app, if such behavior harms the Planned community or brand.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>False or Misleading Information:</strong> Users are prohibited from providing false or misleading information, including but not limited to health claims, allergy information, or dietary restrictions.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Impersonation:</strong> Users must not impersonate any person or entity or misrepresent their affiliation with any person or entity, including Planned or Claire Hodgins LLC.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Unlawful Use:</strong> Users must not use the app to engage in illegal activities, promote or facilitate illegal activities, or violate any laws.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Privacy Violations:</strong> Users must respect the privacy of others and refrain from disclosing personal or confidential information of others without permission.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">4. Health and Safety Disclaimer</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Nutritional and Dietary Information:</strong> Planned provides meal plans and nutritional information for general informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Users should consult a healthcare professional regarding any specific health concerns or dietary needs.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Allergen Responsibility:</strong> Users are responsible for reviewing the ingredients of each meal and determining their compatibility with any allergies or dietary restrictions. Planned is not responsible for any allergic reactions or health-related issues resulting from the consumption of meals provided through the app.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                <strong>Instacart Integration:</strong> Grocery delivery services provided through Instacart are subject to Instacart's own terms and conditions. Planned is not responsible for any issues or disputes related to Instacart orders.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                All content within Planned, including but not limited to recipes, meal plans, nutritional information, and design elements, is the exclusive property of Claire Hodgins LLC DBA Planned. Users are prohibited from copying, reproducing, distributing, modifying, or publicly displaying this content without prior written permission from Claire Hodgins LLC.
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                Users are prohibited from using Planned content for commercial purposes or promoting content as their own without appropriate credit and permission.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">6. Account Security</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Users are responsible for maintaining the confidentiality of their account information, including passwords, and are responsible for all activities that occur under their account.
                Users must promptly report any unauthorized access to their account or any suspected breach of security.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">7. Termination of Access</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC reserves the right to suspend or terminate access to Planned for any user who violates this Acceptable Use Policy or engages in behavior that could harm the app’s community, reputation, or integrity.
                Repeated violations or severe misconduct may result in permanent termination of the account and forfeiture of any access to Planned services.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">8. Reporting Violations</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                If you encounter any content or behavior in Planned that violates this Acceptable Use Policy, please report it to our support team at <a href="mailto:support@joinplanned.com" className="text-blue-600 hover:underline">support@joinplanned.com</a>.
                We will review all reports and take appropriate action to address any violations of this policy.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">9. Changes to this Policy</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC reserves the right to modify this Acceptable Use Policy at any time to reflect changes in our practices, services, or legal requirements. Users will be notified of significant changes to this policy within the app, and continued use of the app signifies acceptance of the updated policy.
            </p>

            {/* Final Acknowledgment */}
            <p className="mb-4 text-base md:text-lg text-justify font-semibold">
                By using Planned, you acknowledge that you have read, understood, and agree to abide by this Acceptable Use Policy. Failure to adhere to this policy may result in restrictions on your use of Planned or termination of your account.
            </p>
        </div>
    );
};

export default AcceptableUsePolicy;