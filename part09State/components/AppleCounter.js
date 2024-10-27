// Declarative Programming
import React, { useState } from 'react'; // Import React and useState
import {Button} from './Button'; // Import Button component
import {LeftArrow} from '../assests/images/left-arrow.png'; // Import images
import {RightArrow} from '../assests/images/right-arrow.png';
import {AppleBasket} from './AppleBasket'; // Import AppleBasket component

import './AppleCounter.css'; // Import CSS for styling

const AppleCounter = () => {
  const totalAppleCount = 10; // Total number of apples

  // useState hooks to manage the state of rightAppleCount and leftAppleCount
  const [rightAppleCount, SetRightAppleCount] = useState(0); // Right basket apple count
  const [leftAppleCount, SetLeftAppleCount] = useState(totalAppleCount - rightAppleCount); // Left basket apple count

  // Function to handle click on the left arrow button
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      SetRightAppleCount(rightAppleCount - 1); // Decrease apples in right basket
      SetLeftAppleCount(leftAppleCount + 1); // Increase apples in left basket
    }
  };

  // Function to handle click on the right arrow button
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      SetRightAppleCount(rightAppleCount + 1); // Increase apples in right basket
      SetLeftAppleCount(leftAppleCount - 1); // Decrease apples in left basket
    }
  };

  return (
    <>
      <section>
        {/* Rendering left basket */}
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />

        {/* Left Arrow Button */}
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />

        {/* Right Arrow Button */}
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />

        {/* Rendering right basket */}
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>

      {/* Button to trigger re-rendering */}
      <p style={{ textAlign: 'center', marginTop: '32px' }}>
        <button onClick={() => {}}>Re - Render</button>
      </p>
    </>
  );
};

export default AppleCounter;
