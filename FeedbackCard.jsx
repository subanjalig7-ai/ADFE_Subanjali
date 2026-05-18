import { useNavigate } from 'react-router-dom';
import { StarDisplay } from './StarRating';

const LABELS = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };

const AVATAR_COLORS = ['#4f46e5', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0891b2', '#b45309'];

function getAvatarColor(name) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function FeedbackCard({ feedback, onDelete }) {
  const navigate = useNavigate();

  function handleCardClick(e) {
    if (e.target.closest('.card-actions')) return;
    navigate(`/feedback/${feedback.id}`);
  }

  function handleEdit(e) {
    e.stopPropagation();
    navigate(`/feedback/${feedback.id}/edit`);
  }

  function handleDelete(e) {
    e.stopPropagation();
    if (window.confirm(`Delete feedback from "${feedback.participant_name}"?`)) {
      onDelete(feedback.id);
    }
  }

  return (
    <div className="feedback-card" onClick={handleCardClick}>
      <div className="feedback-card-header">
        <div className="participant-block">
          <div
            className="avatar"
            style={{ background: getAvatarColor(feedback.participant_name) }}
          >
            {feedback.participant_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="feedback-participant">{feedback.participant_name}</div>
            <div className="feedback-training">{feedback.training_name}</div>
          </div>
        </div>
        <span className={`rating-badge rating-${feedback.rating}`}>
          {LABELS[feedback.rating]}
        </span>
      </div>

      <StarDisplay rating={feedback.rating} />

      <p className="feedback-comment">{feedback.comments}</p>

      <div className="feedback-footer">
        <span className="feedback-date">{formatDate(feedback.created_at)}</span>
        <div className="card-actions btn-group">
          <button className="btn btn-outline btn-sm" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
