import { useEffect, useRef } from 'react';

function Test() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  console.log('canVas', canvasRef);

  // 점을 10개 우선 그린다
  // setInterval(1000)마다 점끼리 선을 연결한다
  //
  useEffect(() => {
    console.log('canVas2222', canvasRef);
    //  getContext returns an object with tools (methods) for drawing.
    const context = canvasRef?.current?.getContext('2d');
    if (!context) return;
    // The x-coordinate of the rectangle's top-left corner.
    // The y-coordinate of the rectangle's top-left corner.
    // width: the width of the rectable
    // height: The height of the rectangle.
    context.rect(10, 10, 100, 100);

    context.fill();
    console.log(context.isPointInPath(50, 50)); // true
    console.log(context.isPointInPath(100, 130)); // false
  }, []);
  return (
    <canvas
      ref={canvasRef}
      height={500}
      width={1000}
      style={{ background: 'blue' }}
    />
  );
}

export default Test;
