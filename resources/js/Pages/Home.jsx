import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Home = () => {
  return (
    <div>
     
      <Link href={route('\Welcome.jsx')}></Link>
    </div>
  );
};

export default Home;