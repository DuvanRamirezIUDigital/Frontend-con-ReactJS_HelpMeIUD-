import { useEffect } from 'react';

const BubbleEffect = () => {
  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
      bubble.classList.add('bubble-animation');
    });
  }, []);

  return (
    <div className="bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
};

export default BubbleEffect;
