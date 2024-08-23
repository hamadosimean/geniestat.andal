import React, { useState, useEffect } from "react";

const TypingEffect = ({ texts, typingSpeed = 100, delay = 5000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let typingInterval;

    if (!isDeleting) {
      typingInterval = setInterval(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        if (displayedText.length === currentText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    } else {
      typingInterval = setInterval(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          clearInterval(typingInterval);
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, typingSpeed);
    }

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, delay]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
