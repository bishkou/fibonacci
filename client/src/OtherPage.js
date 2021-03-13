import React from 'react';
import { Link } from 'react-router-dom';

const fn = () => {
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default fn
