import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Features = () => {
  return (
    <div>
       
      <Link href={route('Home')}>Go to Home</Link>
    </div>
  );
};

export default Features;