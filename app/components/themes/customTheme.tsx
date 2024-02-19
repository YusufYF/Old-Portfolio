import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      ".infinitescroll": {
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "nowrap",
      },
      ".infinitescroll-box": {
        animation: "10s scroll infinite linear",
        display: "inline-block",
      },
      ".handwave": {
        animation: "wave 8s infinite ease-out",
      },

      ".surname": {
        animation: "1.8s appearname",
      },

      ".blob": { boxShadow: "300px 300px 50px grey" },
      ".im": {
        animation: "0.8s imappear",
      },

      "@keyframes appearname": {
        "0%": {
          transform: "scale(1,1) skewX(0deg)",
          opacity: "0",
        },
        "50%": {
          transform: "scale(1,1) skewX(0deg)",
          opacity: "0",
        },
        "60%": {
          transform: "scale(1,1) skewX(0deg) translateX(100%)",
          opacity: "0",
        },
        "70%": { transform: "scale(2,1) skewX(-20deg) translateX(0%)" },
        "80%": { transform: "scale(0.9,1) skewX(15deg)", opacity: "1" },
        "85%": { transform: "scale(1.1,1) skewX(-10deg)" },
        "90%": { transform: "scale(0.95,1) skewX(10deg)" },
        "100%": { transform: "scale(1,1) skewX(0deg)" },
      },

      "@keyframes imappear": {
        "0%": {
          transform: "translateY(50%)",
          opacity: "0",
        },
        "50%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },

      "@keyframes wave": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "3%": {
          transform: "rotate(15deg)",
        },
        "6%": {
          transform: "rotate(-5deg)",
        },
        "9%": {
          transform: "rotate(15deg)",
        },
        "12%": {
          transform: "rotate(-3deg)",
        },
        "15%": {
          transform: "rotate(15deg)",
        },
        "18%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(0deg)",
        },
      },

      "@keyframes scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
        animationDirection: "alternate",
      },
    },
  },
});

export default theme;
