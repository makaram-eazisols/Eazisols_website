import React, { useState } from 'react';

const CustomButton = ({ onClick, children, variant, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isOutlined = variant === 'outlined';

  const styles = {
    button: {
      backgroundColor: isOutlined
        ? 'transparent'
        : isHovered
        ? '#4b24f5'
        : '#7355f7',
      color: isOutlined
        ? isHovered
          ? '#ffffff'
          : '#7355f7'
        : '#ffffff',
      padding: '20px 35px',
      border: `1px solid #7355f7`,
      borderRadius: '4px',
      fontWeight: '500',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      lineHeight: '1.2',
    },
    icon: {
      marginRight: children ? '8px' : '0px',
      display: 'inline-flex',
    },
  };

  return (
    <button
      onClick={onClick}
      style={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <span style={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
