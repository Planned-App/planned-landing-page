'use client'
// pages/subscription.tsx

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

const SubscriptionForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [promoCode, setPromoCode] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // Implement payment confirmation process here
    console.log('Submit payment');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name on card
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <CardElement className="p-2 border rounded-md" />
      </div>
      <div>
        <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700">
          Promo code
        </label>
        <input
          type="text"
          id="promoCode"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded-md shadow-sm mt-4"
        disabled={!stripe}
      >
        Start Subscription
      </button>
    </form>
  );
};

const MembershipOptions: React.FC = () => (
  <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
    <h2 className="text-lg font-bold">Select membership</h2>
    <button className="w-full bg-green-100 text-green-800 p-3 rounded-md text-left">
      Annual - $90 / year
    </button>
    <button className="w-full bg-green-100 text-green-800 p-3 rounded-md text-left">
      Monthly - $12 / month
    </button>
    <p className="text-xs text-gray-600">
      Save 15% by choosing the annual membership.
    </p>
  </div>
);

const SubscriptionPage: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <MembershipOptions />
        <div className="bg-white p-6 rounded-lg border shadow-md">
          <SubscriptionForm />
        </div>
      </div>
    </Elements>
  );
};

export default SubscriptionPage;
