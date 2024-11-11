// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan all JS and TS files in src for Tailwind usage
  theme: {
    extend: {
      // Custom Margin Utilities
      margin: {
        320: "320px", // Utility for large margins
      },
      // Custom Width Utilities
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        508: "508px",
        656: "656px",
        880: "880px", // Custom widths for specific components
      },
      // Custom Height Utilities
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh", // 90% viewport height utility
      },
      // Custom Colors
      colors: {
        navBar: "#1d1e25", // Navbar background color
        primary: "#121316", // Primary background color
        textBase: "#8f9091", // Default text color
        darkGray: "#1e1e1e", // Dark gray for backgrounds
        lightGray: "#e5e5e5", // Light gray for backgrounds and text
        accentGray: "#2a2a2a", // Accent gray for additional contrast
        borderGray: "#ccc", // Light border color
        timelineArrow: "rgb(30,30,30)", // Color for timeline arrows
      },
      // Custom Shadows
      boxShadow: {
        timeline: "0px 3px 10px rgba(0,0,0,0.3)", // Subtle shadow for timeline elements
      },
      // Custom Border Radius
      borderRadius: {
        timeline: "8px", // Border radius for timeline elements
      },
      // Custom Padding
      padding: {
        20: "20px", // Padding utility for uniform spacing
      },
      // Custom Font Sizes
      fontSize: {
        heading: "4rem", // Large font size for headings
      },
    },
  },
  plugins: [],
};
