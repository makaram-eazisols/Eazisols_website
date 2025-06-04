import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { colors } from '../color';

function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const requestRef = useRef();
  const timeoutRef = useRef(null);
  const maxTrailLength = 5; // Number of trailing dots
  
  // Use RAF for smoother animation
  const animate = () => {
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start the animation loop
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    // Function to update cursor position
    const updatePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsMoving(true);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set a timeout to detect when mouse stops moving
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        setTrail([]); // Clear the trail when mouse stops
      }, 300); // Adjust this value to control how quickly trail disappears after stopping
      
      // Update trail with new position
      setTrail(prevTrail => {
        // Create a new trail with time-based spacing
        const now = Date.now();
        const newTrail = [...prevTrail, { ...newPosition, time: now }];
        
        // Remove old trail points
        const recentTrail = newTrail.filter(point => 
          now - point.time < 200 // Only keep points from last 200ms
        ).slice(-maxTrailLength);
        
        return recentTrail;
      });
      
      if (!visible) setVisible(true);
    };

    // Function to handle mouse leaving the window
    const handleMouseLeave = () => {
      setVisible(false);
      setTrail([]); // Clear trail when mouse leaves window
    };

    // Function to handle mouse entering the window
    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [visible]);

  // Button color from navbar
  const buttonColor = '#7c4dff';

  return (
    <>
      {/* Render the main cursor dot */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: buttonColor, // Using the Get a Quote button color
          opacity: visible ? 0.7 : 0,
          transition: 'opacity 0.3s ease', // Removed transform transition for immediate response
          boxShadow: `0 0 10px rgba(124, 77, 255, 0.5)`, // Updated shadow color to match
        }}
      />
      
      {/* Render the trail dots only when mouse is moving */}
      {isMoving && trail.map((pos, index) => {
        // Calculate age factor (0 = newest, 1 = oldest)
        const now = Date.now();
        const age = Math.min((now - pos.time) / 200, 1);
        const size = 10 - (age * 8); // Size decreases with age
        
        return (
          <Box
            key={index}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 9998,
              transform: `translate(${pos.x - size/2}px, ${pos.y - size/2}px)`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: buttonColor, // Using the Get a Quote button color
              opacity: visible ? 0.5 * (1 - age) : 0, // Fade out with age
              // No transition for immediate response
            }}
          />
        );
      })}
    </>
  );
}

export default MouseFollower;