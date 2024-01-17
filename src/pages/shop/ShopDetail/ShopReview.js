// CommentForm.js

import React, { useState } from 'react';


const CommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 덧글 생성
    const newComment = { id: Date.now(), name, comment };

    // 이전 덧글들에 새로운 덧글 추가
    setComments([...comments, newComment]);

    // 폼 초기화
    setName('');
    setComment('');
  };

  return (
    <div className="comment-container">
      <h2>댓글 작성</h2>
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          댓글:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            required
          ></textarea>
        </label>

        <button type="submit">댓글 작성</button>
      </form>

      <div className="comment-list">
        <h3>댓글 목록</h3>
        {comments.map((c) => (
          <div key={c.id} className="comment-item">
            <strong>{c.name}:</strong> {c.comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
