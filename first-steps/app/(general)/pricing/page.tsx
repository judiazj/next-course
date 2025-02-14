
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  keywords: ['Pricing', 'products']
}

const PricingPage = () => {
  return (
    <h1>The pricing of page is ${40 * 5}</h1>
  );
}

export default PricingPage;