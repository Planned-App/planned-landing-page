// app/order/[id]/page.tsx

import { useRouter } from 'next/router';
import React from 'react';

const OrderSuccessPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // To access the dynamic id parameter

    return (
        <div style={{ padding: '20px' }}>
            <h1>Payment Successful!</h1>
            <p>Thank you for your order #{id}. Your payment has been processed successfully.</p>
            {/* Add more details if needed */}
        </div>
    );
};

export default OrderSuccessPage;
