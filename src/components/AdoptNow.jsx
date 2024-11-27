import React from 'react';
import Section from './Section';


const AdoptNow = () => {
  return (
    <Section title="Adopt Now" description="Find your new best friend today!">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellows p-4 flex flex-col md:flex-row items-center">
                <div className="flex flex-col md:w-1/2">
                    <h2 className="text-xl text-white font-bold">Archie and siblings</h2>
                    <button className="border py-2 px-3 mt-3 text-white font-bold hover:bg-black hover:bg-opacity-30">Adopt now</button>
                </div>
                <img src="./images/4.png" className="md:w-1/2 w-full pt-4 md:pt-0" alt="" />
            </div>
            <div className="bg-purples p-4 flex flex-col md:flex-row items-center">
            <div className="flex flex-col md:w-1/2">
                    <h2 className="text-xl text-white font-bold ">Archie and siblings</h2>
                    <button className="border py-2 px-3 mt-3 text-white font-bold  hover:bg-black hover:bg-opacity-30">Adopt now</button>
                </div>
                <img src="./images/2.png" className="md:w-1/2 w-full pt-4 md:pt-0" alt=""/>
            </div>
            <div className="bg-greens p-4 flex flex-col md:flex-row items-center">
                <div className="flex flex-col md:w-1/2">
                    <h2 className="text-xl text-white font-bold ">Archie and siblings</h2>
                    <button className="border py-2 px-3 mt-3 text-white font-bold  hover:bg-black hover:bg-opacity-30">Adopt now</button>
                </div>
                <img src="./images/3.png" className="md:w-1/2 w-full pt-4 md:pt-0" alt=""/>
            </div>      
      </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"> 
            <div className="bg-reds p-4 flex flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-1/2">
                    <h2 className="text-xl text-white font-bold ">Archie and siblings</h2>
                    <button className="border py-2 px-3 text-white font-bold  mt-3 hover:bg-black hover:bg-opacity-30">Adopt now</button>
                </div>
                <img src="./images/1.png" className="md:w-1/2 w-full pt-4 md:pt-0" alt=""/>
            </div>
               
            <div className="bg-indigos p-4 flex flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-1/2">
                    <h2 className="text-xl text-white font-bold ">Archie and siblings</h2>
                    <button className="border py-2 px-3 mt-3 text-white font-bold  hover:bg-black hover:bg-opacity-30">Adopt now</button>
                </div>
                <img src="./images/5.png" className="md:w-1/2 w-full pt-4 md:pt-0" alt=""/>
            </div>
        </div>
    </Section>
  );
}

export default AdoptNow;
