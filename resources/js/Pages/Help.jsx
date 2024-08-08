import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Help = () => {
  return (
    <div>
      <h1>Help Page</h1>
      <Link href={route('home')}>Go to Home</Link>
    </div>
  );
};

export default Help;