"use client";

import React, { useState } from 'react';
import ScrollContent from '@/components/scrollcontent';
import PieChart from '@/components/circulardiv';
import './globals.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="scroll-content-container">
        <ScrollContent
          totalIndexes={10}
          onIndexChange={(index) => setActiveIndex(index)} // Update active index
        />
      </div>

      <div className="cirdiv">
        <PieChart activeIndex={activeIndex - 5} />
      </div>
    </>
  );
}

export default App;
