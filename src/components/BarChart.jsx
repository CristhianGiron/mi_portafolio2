import React from 'react';

const BarChart = ({ data, width, height }) => {
    const barWidth = width / data.length;
    const maxValue = Math.max(...data.map(item => item.percentaje));

    return (
        <svg width={width} height={height}>
            {data.map((item, index) => {
                const barHeight = (item.percentaje / maxValue) * height;
                return (
                    <g key={index}>
    
                        <rect
                            x={index * barWidth}
                            y={height - barHeight}
                            width={barWidth - 2} // Espacio entre barras
                            height={barHeight}
                            fill={item.color}

                        />
                        <text
                            x={index * barWidth + (barWidth / 2)}
                            y={height - barHeight +10}
                            fill="#fff"
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

export default BarChart;
