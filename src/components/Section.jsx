import React from 'react';

const Section = ({ title, description, children }) => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl text-black mb-6 text-center font-bold dark:text-dark-text">{title}</h1>
      <p className="text-center mb-4 dark:text-dark-text">{description}</p>
      {children}
    </section>
  );
}

export default Section;
