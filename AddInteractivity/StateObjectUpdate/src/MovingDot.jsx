import { useEffect, useState } from "react";

export default function MovingDot() {
  useEffect(() => {
    let b = document.getElementById("rect").getBoundingClientRect();
    setRectInfo({
      left: b.left,
      top: b.top,
    });
  }, []);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [rectInfo, setRectInfo] = useState(null);

  return (
    <>
      <div
        id="rect"
        onPointerMove={(e) => {
          let newX = e.clientX - (rectInfo.left + 10);
          let newY = e.clientY - (rectInfo.top + 10);
          setPosition((o) => {
            return {
              x: newX,
              y: newY,
            };
          });
        }}
        style={{
          position: "relative",
          width: 400,
          height: 400,
          backgroundColor: "gray",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: 20,
            height: 20,
          }}
        />
      </div>
      <div>
        x:{position.x},y:{position.y}
      </div>
    </>
  );
}
