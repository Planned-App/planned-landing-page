import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-4 text-gray-800">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                Privacy Policy for Claire Hodgins LLC DBA Planned
            </h1>
            <p className="mb-4 text-base md:text-lg text-justify">
                At Claire Hodgins LLC DBA Planned, we prioritize the protection of your privacy. This privacy policy outlines how we gather, utilize, and safeguard information about you in connection with your subscription to our app, Planned, available on the App Store and Google Play Store.
            </p>

            {/* Information We Collect */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Upon subscribing to Planned, we collect information you provide, such as your name, email address, and phone number. Phone numbers are collected solely to send one-time password codes for secure login; we do not use phone numbers for marketing purposes or sell phone number data. We do not collect any payment information. The payment information is not collected directly by us, as this process is securely managed through Stripe on the web.
            </p>

            {/* How We Use Your Information */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                The information we collect is used to deliver, improve, and personalize our services and to facilitate communication with you. By subscribing, you agree to opt into receiving email communications from Claire Hodgins LLC DBA Planned.
            </p>

            {/* Sharing Your Information */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Sharing Your Information</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Your information may be shared with third-party service providers engaged in activities on our behalf, such as payment processing and email marketing. However, we never share data for marketing or any other purpose.
            </p>

            {/* Canceling Your Subscription */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Canceling Your Subscription</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Subscribers can cancel their subscription at any time to avoid future billing. Simply log into your profile on the app and click ‘cancel subscription’. You can also cancel by emailing us at support@joinplanned.com.
            </p>

            {/* Data Deletion */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Data Deletion</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                If you choose to delete your account, all your data will be permanently removed from our application’s system and database. This process is irreversible, and we will not retain any information beyond what is required by law.
            </p>

            {/* Data Retention */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Data Retention</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. If your account is deleted, all data is permanently erased as stated above.
            </p>

            {/* Data Security */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Data Security</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                We employ robust security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. Safeguarding your data is a top priority for us.
            </p>

            {/* Children’s Privacy */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Children’s Privacy</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                Our services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from minors. If we become aware of such information being collected inadvertently, we will take prompt steps to delete it.
            </p>

            {/* Changes to this Policy */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Changes to this Policy</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                This privacy policy may be updated periodically to reflect changes in our practices, services, or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and indicating the date of the latest revision. Your continued use of our services following the posting of changes signifies your acceptance of those changes.
            </p>

            {/* Contact Us */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                If you have any questions or concerns about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="mb-4 text-base md:text-lg text-justify">
                Claire Hodgins LLC DBA Planned<br />
                Email: support@joinplanned.com<br />
                Address: 501 Union St Ste 545, PMB 718198, Nashville, Tennessee 37219-1876, US
            </p>

            {/* Your Consent */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Your Consent</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                By using Planned, you consent to our privacy policy and agree to its terms.
            </p>

            {/* Governing Law */}
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
            <p className="mb-4 text-base md:text-lg text-justify">
                This privacy policy and any disputes related to it shall be governed by and construed in accordance with the laws of Tennessee, without regard to its conflict of law principles.
            </p>
            <p className="text-base md:text-lg text-justify">
                By subscribing to Planned, you acknowledge that you have read, understood, and agree to this privacy policy. If you do not agree to these terms, please do not use our service.
            </p>
        </div>
    );
};

export default PrivacyPolicy;