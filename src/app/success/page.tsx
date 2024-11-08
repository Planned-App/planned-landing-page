import { useEffect } from 'react';

const Success = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-md shadow-lg text-center">
        <h1 className="text-xl font-bold">Payment Successful</h1>
        <p>Thank you for your purchase!</p>
        <p>Your account is being set up.</p>
      </div>
    </div>
  );
};

export default Success;
