import React from 'react';
import { useCircularInputContext } from 'your-circular-input-library';

const CustomComponent = () => {
  const { getPointFromValue, value } = useCircularInputContext();
  const { x, y } = getPointFromValue();

  return (
    <text x={x} y={y} style={{ pointerEvents: 'none' }}>
      {Math.round(value * 100)}
    </text>
  );
};

export default CustomComponent;
