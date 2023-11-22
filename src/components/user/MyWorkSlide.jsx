import React, { useState, useRef } from 'react';
import styled from "styled-components";
import MyWorkItem from './MyWorkItem';

export default function MyWorkSlide() {
  const myworkItems = Array(5).fill(null);
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  
  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + containerRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  }
  const onDragMove = e => {
    if(isDrag) {
      const {scrollWidth, clientWidth, scrollLeft} = containerRef.current;
      containerRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX); 
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft); 
      }
    }
  }

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 50;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div>
      {myworkItems && (
        <SlideContainer
          ref={containerRef}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onMouseMove={isDrag ? onThrottleDragMove : null}
        >
          <SlideItem>
            {myworkItems.map((index) => (
              <MyWorkItem key={index}/>
            ))}
          </SlideItem>
        </SlideContainer>
      )}
    </div>
  );
};

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 1090px; 
`;

const SlideItem= styled.div`
  display: flex;
  gap: 30px;
`;