
import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 2);
  const restablecer = () => setCount(0);

  return (
    <div className="flex space-x-2">
      <button 
        className="bg-blue-500 text-white p-2 rounded" 
        onClick={incrementar}
      >
        Incrementar
      </button>
      <button 
        className="bg-red-500 text-white p-2 rounded" 
        onClick={restablecer}
      >
        Restablecer
      </button>
      <span className="text-xl font-bold">{count}</span>
    </div>
  );
}

export default Contador;
