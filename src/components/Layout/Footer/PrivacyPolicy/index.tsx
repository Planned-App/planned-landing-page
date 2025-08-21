"use client";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://healthykitchen.app";
const PAGE_PATH = "/privacy-policy";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Privacy Policy | Healthy Kitchen";
const DESCRIPTION =
  "Read Healthy Kitchen’s Privacy Policy to learn how we collect, use, protect, and manage your information. Includes data retention, deletion, and contact details.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Healthy Kitchen",
    type: "article",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  }
};

const PrivacyPolicy: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: "Planned LLC DBA Healthy Kitchen",
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@healthykitchen.com",
        contactType: "customer support"
      }
    }
  };
  return (
    <main
      className="px-4 md:px-8 lg:px-16 py-4 text-gray-800"
      role="main"
      aria-labelledby="privacy-title"
    >
      <Script
        id="privacy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Privacy Policy for Planned LLC DBA Healthy Kitchen
      </h1>
      <p className="mb-4 text-base md:text-lg text-justify">
        At <strong>Planned LLC DBA Healthy Kitchen</strong>, we prioritize the
        protection of your privacy. This Privacy Policy outlines how we gather,
        utilize, and safeguard information about you in connection with your
        subscription to the Healthy Kitchen: Meal Planner app, available on the
        App Store and Google Play Store.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        When you subscribe to Healthy Kitchen, we collect information you
        provide, such as your name, email address, and phone number.
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg">
        <li>
          Phone numbers are collected solely to send one-time password codes for
          secure login.
          <br />
          <strong>We do not</strong> use phone numbers for marketing purposes or
          sell phone number data.
        </li>
        <li>
          <strong>We do not</strong> collect or store payment information
          directly. All payments are securely processed through{" "}
          <strong>Stripe</strong> on the web.
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        The information we collect is used to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg">
        <li>Deliver, improve, and personalize our services</li>
        <li>Facilitate communication with you</li>
      </ul>
      <p className="mb-4 text-base md:text-lg text-justify">
        By subscribing, you agree to receive email communications from{" "}
        <strong>Planned LLC DBA Healthy Kitchen</strong> related to your
        account, service updates, and marketing materials.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Sharing Your Information
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        Your information may be shared with third-party service providers who
        perform activities on our behalf (e.g., payment processing, email
        marketing).
      </p>
      <p className="mb-4 text-base md:text-lg text-justify">
        <strong>We will never sell or share your personal data</strong> for
        marketing purposes or other unrelated uses.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Canceling Your Subscription
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        Subscribers may cancel their subscription at any time to avoid future
        billing:
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg">
        <li>
          Log into your profile in the app and click{" "}
          <strong>“Cancel Subscription”</strong>
        </li>
        <li>
          <p className="mb-2 text-base md:text-lg">
            Email:{" "}
            <strong>
              <a
                href="mailto:support@healthykitchen.com?subject=Cancel%20Subscription"
                className="text-blue-600 underline"
              >
                support@healthykitchen.com
              </a>
            </strong>
          </p>
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Data Deletion
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        If you choose to delete your account, all your data will be permanently
        removed from our application’s systems and database. This process is{" "}
        <strong>irreversible</strong>, and we will not retain any information
        beyond what is required by law.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Data Retention
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        We retain your information only as long as necessary to fulfill the
        purposes outlined in this policy or as required by law. If your account
        is deleted, all data is permanently erased as stated above.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Data Security
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        We employ robust security measures to protect your information from
        unauthorized access, disclosure, alteration, or destruction.
        Safeguarding your data is a top priority for us.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Imported Recipes
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        Imported recipes, including instructions, images, and captions, are
        stored privately in your account and are{" "}
        <strong>not shared with other users or made publicly available</strong>{" "}
        by Healthy Kitchen.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Children’s Privacy
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        Our services are not intended for individuals under the age of 13, and
        we do not knowingly collect personal information from minors. If we
        become aware that we have collected such information, we will promptly
        delete it.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Changes to this Policy
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        This Privacy Policy may be updated periodically to reflect changes in
        our practices, services, or legal requirements.
      </p>
      <ul className="list-disc pl-6 mb-4 text-base md:text-lg">
        <li>
          Significant changes will be communicated within the app and/or via
          email.
        </li>
        <li>
          Continued use of Healthy Kitchen after changes are posted signifies
          your acceptance of the updated policy.
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Contact Us
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        If you have questions or concerns about this Privacy Policy or our data
        practices, please contact us at:
      </p>
      <p className="mb-2 text-base md:text-lg">
        <strong>Planned LLC DBA Healthy Kitchen</strong>
      </p>
      <p className="mb-2 text-base md:text-lg">
        Email:{" "}
        <strong>
          <a
            href="mailto:support@healthykitchen.com?subject=Support%20Request"
            className="text-blue-600 underline"
          >
            support@healthykitchen.com
          </a>
        </strong>
      </p>
      <p className="mb-4 text-base md:text-lg">
        Address: 501 Union St Ste 545, PMB 718198, Nashville, Tennessee
        37219-1876, US
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Your Consent
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        By using the Healthy Kitchen app, you consent to this Privacy Policy and
        agree to its terms.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
        Governing Law
      </h2>
      <p className="mb-4 text-base md:text-lg text-justify">
        This Privacy Policy and any disputes related to it shall be governed by
        and construed in accordance with the laws of the state of Tennessee,
        without regard to its conflict of law principles.
      </p>
      <p className="mb-4 text-base md:text-lg text-justify">
        By subscribing to Healthy Kitchen, you acknowledge that you have read,
        understood, and agree to this Privacy Policy. If you do not agree,
        please do not use our service.
      </p>
    </main>
  );
};

export default PrivacyPolicy;
