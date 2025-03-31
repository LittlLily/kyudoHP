// client/src/MemberManagement.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MemberManagement({ operator }) {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [memberForm, setMemberForm] = useState({
    id: null,
    name: '',
    generation: '',
    "party": '',
    gender: '',
    department: '',
    "post": ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [logs, setLogs] = useState([]);

  // 部員一覧を取得する
  const fetchMembers = () => {
    fetch('/api/members')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching members:', error));
  };

  // 操作ログ一覧を取得する
  const fetchLogs = () => {
    fetch('/api/memberLogs')
      .then(response => response.json())
      .then(data => setLogs(data))
      .catch(error => console.error('Error fetching logs:', error));
  };

  useEffect(() => {
    fetchMembers();
    fetchLogs();
  }, []);

  // フォームリセット
  const resetForm = () => {
    setMemberForm({ id: null, name: '', generation: '', "party": '', "post": '', gender: '', department: '' });
    setIsEditing(false);
  };

  // 新規作成または更新処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // 編集の場合：PUT リクエスト（operator を送信）
      fetch(`/api/members/${memberForm.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: memberForm.name,
          generation: Number(memberForm.generation),
          party: memberForm.party,
          post: memberForm.post,
          gender: memberForm.gender,
          department: memberForm.department,
          operator // ログとして送信
        })
      })
        .then(response => response.json())
        .then(updatedMember => {
          setMembers(members.map(m => (m.id === updatedMember.id ? updatedMember : m)));
          resetForm();
          fetchLogs();
        })
        .catch(error => {
          console.error('Error updating member:', error);
          setMessage('更新中にエラーが発生しました');
        });
    } else {
      // 新規追加の場合：POST リクエスト（operator を送信）
      fetch('/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: memberForm.name,
          generation: Number(memberForm.generation),
          party: memberForm.party,
          post: memberForm.post,
          gender: memberForm.gender,
          department: memberForm.department,
          operator // ログとして送信
        })
      })
        .then(response => response.json())
        .then(newMember => {
          setMembers([...members, newMember]);
          resetForm();
          fetchLogs();
        })
        .catch(error => {
          console.error('Error creating member:', error);
          setMessage('追加中にエラーが発生しました');
        });
    }
  };

  // 編集開始：対象部員の情報をフォームにセット
  const handleEdit = (member) => {
    setMemberForm(member);
    setIsEditing(true);
  };

  // 削除処理（DELETE リクエストの場合、operator を送信）
  const handleDelete = (id) => {
    fetch(`/api/members/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ operator })
    })
      .then(response => response.json())
      .then(deletedMember => {
        setMembers(members.filter(m => m.id !== deletedMember.id));
        fetchLogs();
      })
      .catch(error => {
        console.error('Error deleting member:', error);
        setMessage('削除中にエラーが発生しました');
      });
  };

  // 年齢の大きい順（降順）に並び替えた部員一覧を生成
  const sortedMembers = [...members].sort((a, b) => b.generation - a.generation);

  return (
    <div style={{ padding: '20px' }}>
      <h1>部員管理</h1>
      <button onClick={() => navigate('/dashboard')}>ダッシュボードに戻る</button>
      
      {/* 部員情報の追加・編集フォーム */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div>
          <label>名前: </label>
          <input
            type="text"
            value={memberForm.name}
            onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
            required
          />
        </div>       
        <div>
          <label>性別: </label>
          <input
            type="text"
            value={memberForm.gender}
            onChange={(e) => setMemberForm({ ...memberForm, gender: e.target.value })}
            required
          />
        </div>
        <div>
          <label>学科: </label>
          <input
            type="text"
            value={memberForm.department}
            onChange={(e) => setMemberForm({ ...memberForm, department: e.target.value })}
            required
          />
        </div>
        <div>
          <label>世代: </label>
          <input
            type="number"
            value={memberForm.generation}
            onChange={(e) => setMemberForm({ ...memberForm, generation: e.target.value })}
            required
          />
        </div>
        <div>
          <label>流派: </label>
          <input
            type="text"
            value={memberForm.party}
            onChange={(e) => setMemberForm({ ...memberForm, party: e.target.value })}
            required
          />
        </div> 
        <div>
          <label>役職: </label>
          <input
            type="text"
            value={memberForm.post}
            onChange={(e) => setMemberForm({ ...memberForm, post: e.target.value })}
            required
          />
        </div> 
        <button type="submit">{isEditing ? '更新' : '追加'}</button>
        {isEditing && <button type="button" onClick={resetForm}>キャンセル</button>}
      </form>
      {message && <p>{message}</p>}
      
      {/* 部員一覧：年齢の大きい順に表示 */}
      <h2 style={{ marginTop: '20px' }}>部員一覧（年齢の大きい順）</h2>
      <ul>
        {sortedMembers.map(member => (
          <li key={member.id}>
            {member.name} - {member.gender} - {member.department} - 第{member.generation}代 - {member.party} - {member.post}
            <button onClick={() => handleEdit(member)} style={{ marginLeft: '10px' }}>
              編集
            </button>
            <button onClick={() => handleDelete(member.id)} style={{ marginLeft: '5px' }}>
              削除
            </button>
          </li>
        ))}
      </ul>
      
      {/* 操作ログ一覧（最新ログが一番上に表示） */}
      <h2 style={{ marginTop: '20px' }}>操作ログ</h2>
      <ul style={{ height: '80px', overflow: 'auto' }}>
        {logs.map((log, index) => (
          <li key={index}>
            {log.timestamp} - {log.operator} が {log.memberName} の {log.operation} を実施
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberManagement;
