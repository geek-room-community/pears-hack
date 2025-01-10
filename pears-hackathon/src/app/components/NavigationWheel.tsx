'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Code, Home, Info, Trophy, Users, Mail, Star, BookOpen } from 'lucide-react';

const NavigationWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Highlights', path: '/highlights', icon: Star },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Prizes', path: '/prizes', icon: Trophy },
  ];

  {/* we have to correct the radius and position them accordingly */}

  const handleNavClick = (index: number, path: string) => {
    let newRotation = -(index * 60);
    while (newRotation < -180) newRotation += 360;
    while (newRotation > 180) newRotation -= 360;
    
    setRotation(newRotation);
    setActiveIndex(index);
    router.push(path);
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-1/2">
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        {/* Main wheel container */}
        <div className="relative h-[85vh] w-[85vh]">
          {/* Grey semi-circle */}
          <div 
            className="absolute right-0 top-0 h-full w-1/2 rounded-l-[42.5vh] bg-gradient-to-l from-[#1E1E1E] to-[#242424]"
            style={{ 
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.3s ease-out',
              transformOrigin: 'right center'
            }}
          >
            {/* Navigation items - i have made them rotate acc to degree */}
            {navItems.map((item, index) => {
              const angle = index * 60;
              const Icon = item.icon;
              
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(index, item.path)}
                  className={`absolute left-4 h-16 w-16 -translate-x-full
                    rounded-full duration-300 hover:scale-110
                    ${activeIndex === index ? 'border-2 border-[#98ff98] shadow-[0_0_15px_rgba(152,255,152,0.3)]' : ''}`}
                  style={{
                    top: '50%',
                    transform: `
                      translateY(-50%)
                      rotate(${angle}deg)
                      translateY(-42.5vh)
                      rotate(-${angle}deg)
                    `
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <Icon className="h-6 w-6 text-[#98ff98]" />
                    <span className="text-xs text-[#98ff98]">{item.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Earth implemenation to be done */}
          <div className="absolute right-0 top-1/2 flex h-64 w-64 -translate-y-1/2 translate-x-32 items-center justify-center rounded-full border-2 border-[#98ff98] bg-[#1a1a1a] shadow-[0_0_20px_rgba(152,255,152,0.15)]">
            <div className="text-2xl text-[#98ff98]">EARTH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationWheel;