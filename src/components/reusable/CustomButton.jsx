import React from "react";

const CustomButton = ({ onClick, children, variant }) => {
  const isOutlined = variant === "outlined";

  const styles = {
    button: {
      backgroundColor: isOutlined ? "transparent" : "#7355f7",
      color: isOutlined ? "#7355f7" : "#ffffff",
      padding: "20px 35px",
      border: `1px solid #7355f7`,
      borderRadius: "4px",
      fontWeight: "500",
      fontSize: "15px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      padding: "16px 30px", 
      minWidth: "180px",
      minHeight: "56px", 
      justifyContent: "center",

      gap: "10px",
      overflow: "hidden",
    },
  };

  return (
    <button className="custom-button" style={styles.button} onClick={onClick}>
      {children}
      <i className="fa-solid fa-angle-right animated-end-icon"></i>
    </button>
  );
};

export default CustomButton;
