import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import './PerformanceChart.css';
import { performanceData } from '../../data/mockData';

const PerformanceChart = () => {
  return (
    <div className="performance-chart">
      <h2 className="section-title">12-Month Performance</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e8e8" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#666' }}
            />
            <YAxis 
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#666' }}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={30}>
              {performanceData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.value < 50 ? '#f44336' : '#1e3a5f'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
