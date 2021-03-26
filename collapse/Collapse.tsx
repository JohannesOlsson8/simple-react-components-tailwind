import React, { useState } from 'react';
import { ChevronDown } from 'heroicons-react';

interface ICollapse {
  label: string;
}

export const Collapse: React.FC<ICollapse> = (props) => {
  const [showElement, setShowElement] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <button
        onClick={() => setShowElement(!showElement)}
        aria-expanded={showElement}
        className="flex w-full items-center p-2 focus:ring-2 focus:ring-fuchsia-500 ring-inset outline-none"
      >
        <ChevronDown className={`${!showElement ? 'transform -rotate-90' : ''} mr-3`} />
        {props.label}
      </button>
      {showElement && <div className="p-2">{props.children}</div>}
    </div>
  );
};
