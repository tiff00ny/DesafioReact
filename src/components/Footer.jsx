import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-greens dark:bg-dark-header text-white flex flex-col justify-center items-center font-raleway py-6 px-6">
      <div className="text-2xl pb-4 flex space-x-4">
        <i className="fa-brands fa-facebook p-3 cursor-pointer"></i>
        <i className="fa-brands fa-instagram p-3 cursor-pointer"></i>
        <i className="fa-brands fa-tiktok p-3 cursor-pointer"></i>
        <i className="fa-solid fa-envelope p-3 cursor-pointer"></i>
      </div>
      <div className="flex flex-col items-center">
        <h1>© Copyright 2024</h1>
        <p className="text-center">ASOCIACIÓN CONEXION, Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
