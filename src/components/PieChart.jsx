import React from 'react';

const PieChart = ({ data, width, height }) => {
  const radius = Math.min(width, height) / 2;
  const total = data.reduce((sum, item) => sum + item.percentaje, 0);
  let startAngle = 0;

  const calculateArc = (value) => {
    const angle = (value / total) * 2 * Math.PI;
    const endAngle = startAngle + angle;
    const x1 = radius + radius * Math.cos(startAngle - Math.PI / 2);
    const y1 = radius + radius * Math.sin(startAngle - Math.PI / 2);
    const x2 = radius + radius * Math.cos(endAngle - Math.PI / 2);
    const y2 = radius + radius * Math.sin(endAngle - Math.PI / 2);
    const largeArcFlag = angle > Math.PI ? 1 : 0;
    const arcPath = `M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    startAngle = endAngle;
    return arcPath;
  };

  const calculateLabelPosition = (start, end) => {
    const middleAngle = (start + end) / 2;
    const x = radius + (radius * 0.6) * Math.cos(middleAngle - Math.PI / 2);
    const y = radius + (radius * 0.6) * Math.sin(middleAngle - Math.PI / 2);
    return { x, y };
  };


  let startAngleForLabels = 0; // Reiniciar startAngle para las etiquetas

  return (
    <svg width={width} height={height}>
      {data.map((item, index) => {
        const angle = (item.percentaje / total) * 2 * Math.PI;
        const arcPath = calculateArc(item.percentaje);
        const labelPosition = calculateLabelPosition(startAngleForLabels, startAngleForLabels + angle);
        startAngleForLabels += angle; // Actualizar startAngle para la siguiente partición
        return (
          <g key={index}>
            <path d={arcPath} fill={item.color} stroke="#fff" strokeWidth="1" />
            <text
              x={labelPosition.x}
              y={labelPosition.y}
              fill="#000"
              fontSize="12"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {item.percentaje}%
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default PieChart;


