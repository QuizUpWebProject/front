import React, { useState, useRef } from 'react';
import styled from "styled-components";
import StudyWorkItem from './StudyingWorkItem';

export default function StudyWorkSlide() {
  const studyworkItems = Array(0).fill(null);
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
      {studyworkItems && studyworkItems.length > 0 ?(
        <SlideContainer
          ref={containerRef}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onMouseMove={isDrag ? onThrottleDragMove : null}
        >
          <SlideItem>
            {studyworkItems.map((index) => (
              <StudyWorkItem key={index}/>
            ))}
          </SlideItem>
        </SlideContainer>
      ) : (
        <NotStudy>
          학습중인 문제집이 없네요. :(<br></br>
          상단에 위치한 프론트엔드, 백엔드 메뉴를 통해 다른 회원들의 문제집을 학습하고 모범답안까지 확인해보세요.
        </NotStudy>
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

const NotStudy = styled.div`
 line-height: 29px;
 margin-top: 10px;
`;