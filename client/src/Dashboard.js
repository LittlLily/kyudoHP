// client/src/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard({ operator }) {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('/api/members')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching members:', error));
  }, []);

  // 各学科ごとの部員数を集計
  const departmentData = members.reduce((acc, member) => {
    acc[member.department] = (acc[member.department] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(departmentData),
    datasets: [
      {
        label: '部員数',
        data: Object.values(departmentData),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ダッシュボード</h1>
      <p>ようこそ、{operator}さん</p>
      <div style={{ marginBottom: '20px' }}>
        <Bar data={chartData} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/tool/account-management')}>アカウント管理へ</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/tool/member-management')}>部員管理へ</button>
      </div>
    </div>
  );
}

export default Dashboard;
