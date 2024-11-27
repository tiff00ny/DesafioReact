import React from 'react';
import Section from './Section';

const Reviews = () => {
  return (
    <Section title="Reviews" description="What our users say">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellows py-6 px-6 mb-2">
                <div>
                    <i className="fa-solid fa-quote-right text-3xl"></i>
                    <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                </div>
                <div className="flex flex-row pt-5">
                    <img src="./images/iconperson.png" className="w-20 px-4" alt="" />
                    <div>
                        <h1 className="font-bold">Lorem, ipsum.</h1>
                        <h2>Lorem, ipsum dolor.</h2>
                    </div>
                </div>
            </div>

            <div className="bg-yellows py-6 px-6 mb-2">
                <div>
                    <i className="fa-solid fa-quote-right text-3xl"></i>
                    <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt quae
                            aliquid ratione
                            exercitationem, pariatur harum itaque animi saepe aliquam nam beatae nisi natus tenetur ab
                            explicabo
                            mollitia voluptates. Accusamus.</p>
                </div>
                <div className="flex flex-row pt-5">
                    <img src="./images/iconperson.png" className="w-20 px-4" alt=""/>
                    <div>
                        <h1 className="font-bold">Lorem, ipsum.</h1>
                        <h2>Lorem, ipsum dolor.</h2>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
}

export default Reviews;
