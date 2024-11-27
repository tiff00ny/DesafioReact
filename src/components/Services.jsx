import React from 'react';
import Section from './Section';

const Services = () => {
  return (
    <Section title="Our Services" description="Check out our amazing services">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-bold text-2xl dark:text-dark-text">#01</h2>
                <p className="dark:text-dark-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aspernatur...</p>
            </div>
            <div className="flex flex-col items-center text-center"> 
                <h2 className="font-bold text-2xl dark:text-dark-text">#02</h2>
                <p className="dark:text-dark-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima harum dolor aliquam expedita id amet.</p>
            </div>
            <div className="flex flex-col items-center text-center"> 
                <h2 className="font-bold text-2xl dark:text-dark-text">#03</h2>
                <p className="dark:text-dark-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolor ut nisi iste error in!</p>
            </div>
            <div className="flex flex-col items-center text-center"> 
                <h2 className="font-bold text-2xl dark:text-dark-text">#04</h2>
                <p className="dark:text-dark-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto nesciunt dolorum, tenetur distinctio quisquam.</p>
            </div>
            <div className="flex justify-center">
                 <img src="./images/foto1.png" className="w-full" alt="" />
            </div>
        </div>
    </Section>
  );
}

export default Services;
