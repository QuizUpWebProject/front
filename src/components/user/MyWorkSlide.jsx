import React, { useState, useRef } from 'react';
import styled from "styled-components";
import MyWorkItem from './MyWorkItem';

export default function MyWorkSlide() {
  const myworkItems = Array(0).fill(null);
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
      {myworkItems && myworkItems.length > 0 ? (
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
      ) : (
        <NotWork>
          CS면접 지식을 공유할 수 있는 나만의 문제집을 문제집 만들기를 통해 만들어 보세요.<br></br>
          문제집에서 제작된 문제들과 답변들은 공개 형식으로 다른 회원들이 문제와 답안을 공유할 수 있습니다.
        </NotWork>
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

const NotWork = styled.div`
 line-height: 29px;
 margin-top: 10px;
`;