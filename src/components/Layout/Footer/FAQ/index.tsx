"use client";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://healthykitchen.app";
const PAGE_PATH = "/faq";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "FAQ | Healthy Kitchen";
const DESCRIPTION =
  "Find answers to common questions about Healthy Kitchen — meal planning, recipes, grocery list, Instacart integration, subscriptions, and more.";

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
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  }
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      q: "What is Planned?",
      a: "Planned is a meal planning app designed to make healthy eating easy and stress-free. It offers weekly dinner plans, customizable meal plans, a smart grocery list, grocery delivery, and a library of over 200 recipes."
    },
    {
      q: "How does the weekly meal plan work?",
      a: "Each week, Claire Hodgins creates a curated dinner plan you can adopt as-is or customize with over 200 high-protein dinner recipes. You can also add breakfast, lunch, and snacks."
    },
    {
      q: "How does the grocery list work?",
      a: "Planned’s grocery list compiles ingredients from your plan, lets you add extra items, and integrates with Instacart for delivery."
    },
    {
      q: "Can I customize my meal plan?",
      a: "Yes! You can add, swap, or remove recipes to suit your tastes and dietary needs, and adjust serving sizes with ingredients and nutrition updated automatically."
    },
    {
      q: "How can I cancel my subscription?",
      a: "You can cancel anytime via your profile settings or by emailing support@joinplanned.com for help."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
  return (
    <main
      className="px-4 md:px-8 lg:px-16 py-4 text-gray-800"
      role="main"
      aria-labelledby="faq-title"
    >
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <h1
          id="faq-title"
          className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left"
        >
          Planned FAQ
        </h1>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>What is Planned?</strong> Planned is a meal planning app
          designed to make healthy eating easy and stress-free. Planned offers
          recommended weekly dinner plans created by founder Claire Hodgins, the
          ability to customize your own weekly meal plan, a smart grocery list,
          and grocery delivery through Instacart and other integrations. With
          over 200 dinner recipes and a library of breakfast, lunch, and snack
          options, Planned suits busy individuals, couples, and families looking
          for healthy meals without hassle.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>How does the weekly meal plan work?</strong> Each week, Claire
          Hodgins creates a curated dinner plan. You can add it to your meal
          plan as-is or customize it by choosing from over 200 high-protein
          dinner recipes. Additionally, you can add breakfast, lunch, and snacks
          from our library of 100+ recipes.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>How does the grocery list work?</strong> Planned&rsquo;s
          grocery list automatically compiles all the ingredients you need for
          your weekly plan, organizing them in an easy-to-follow list. You can
          also add extra items to your list if you wish to get things other than
          what&rsquo;s on your meal plan. For added convenience, Planned offers
          grocery delivery through Instacart and other integrations, saving you
          time and ensuring you have everything for your planned meals. You may
          organize the grocery list by date range if you rather shop for a few
          days at once rather than for a whole week.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Is it only dinner recipes?</strong> No, Planned includes
          recipes for breakfast, lunch, snacks, and dinner. The recommended
          weekly plan provides dinners only, but you can add recipes to your
          personal meal plan for other meals to create a complete plan for
          yourself.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Can I customize my meal plan?</strong> Absolutely! Planned is
          designed for flexibility. You can add, swap, or remove recipes to suit
          your tastes and dietary needs, and adjust serving sizes with
          ingredients and nutritional info updated automatically.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Can I swap ingredients in recipes?</strong> Yes! Many recipes
          provide swap options, allowing you to replace an ingredient with an
          alternative, such as switching chicken for tofu.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>What kind of recipes are available on Planned?</strong>{" "}
          Planned offers over 200 dinner recipes and 100+ options for breakfast,
          lunch, and snacks. All recipes are high in protein, use clean
          ingredients, and take 30 minutes or less to prepare, making nutritious
          eating quick, easy, and delicious. We will be adding new recipes every
          month!
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Can I use Planned without the meal plan feature?</strong> Yes,
          even if you&rsquo;re not using the meal plan, you&rsquo;ll have access
          to all recipes anytime with cooking instructions. Browse the
          collection and choose what you want to make for dinner! We also have a
          feature called &rsquo;cooking mode&rsquo; which ensures your phone
          screen will stay on while you&rsquo;re cooking.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Does Planned have recipe categories and subfolders?</strong>{" "}
          Yes! Recipes are organized into main categories and subfolders. For
          example, within “Dinner,” you&rsquo;ll find subfolders like “Chicken
          Dinners” to help you quickly locate recipes.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Can I filter recipes by dietary needs or preferences?</strong>{" "}
          Yes, Planned allows you to filter recipes by dietary categories,
          including High Protein, Low Carb, Gluten-Free, Dairy-Free, Egg-Free,
          No Added Sugar, Nut-Free, Kid-Friendly, Vegetarian, Vegan, and
          Pescatarian.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Can I customize the serving sizes?</strong> Yes! You can
          adjust serving sizes for each recipe, and the app will update
          ingredient quantities accordingly.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Will Planned release more features in the future?</strong>{" "}
          Yes! We&rsquo;re continuously working on new features. If there are
          any feature ideas you have that will make your life easier, please
          tell us at{" "}
          <a
            href="mailto:support@joinplanned.com"
            className="text-blue-600 hover:underline"
          >
            support@joinplanned.com
          </a>
          !
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>How often are new recipes added?</strong> Claire and the team
          regularly add new recipes, at least once per month, so you&rsquo;ll
          always have fresh options to explore.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Is the nutritional information accurate?</strong> Nutritional
          info is provided for general purposes and is sourced from a reliable
          database. For precise dietary needs, consult a nutrition professional.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Are Planned meal plans created by a nutritionist?</strong> No,
          the meal plans are curated by Claire Hodgins for general use and are
          not created by a certified nutritionist. Consult a healthcare
          professional if you have specific dietary needs.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>What do I do if I have allergies?</strong> We provide clear
          ingredient lists, but it&rsquo;s each user&rsquo;s responsibility to
          review recipes for potential allergens. For serious allergies, consult
          a healthcare professional.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>
            What should I do if I experience an issue with my Instacart order?
          </strong>{" "}
          Since Instacart is a third-party service, direct any issues with
          orders to Instacart&rsquo;s customer support. Planned cannot resolve
          Instacart-related issues.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>How can I cancel my subscription?</strong> You can cancel your
          subscription anytime by logging into your profile and selecting
          “Cancel Subscription” or emailing us at{" "}
          <a
            href="mailto:support@joinplanned.com"
            className="text-blue-600 hover:underline"
          >
            support@joinplanned.com
          </a>{" "}
          for assistance.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>Can I get a refund if I cancel my subscription?</strong> All
          sales are final, but if you encounter an issue, reach out to{" "}
          <a
            href="mailto:support@joinplanned.com"
            className="text-blue-600 hover:underline"
          >
            support@joinplanned.com
          </a>{" "}
          to see if you qualify for a refund.
        </p>

        <p className="mb-4 text-base md:text-lg text-justify">
          <strong>How secure is my information on Planned?</strong> We
          prioritize your privacy and use robust security measures. Payment
          information is securely handled by Stripe, and we don&rsquo;t retain
          it. Personal information is used solely to improve our services.
        </p>
    </main>
  );
};

export default FAQ;
