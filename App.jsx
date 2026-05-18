import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SubmitFeedback from './pages/SubmitFeedback';
import FeedbackList from './pages/FeedbackList';
import FeedbackDetails from './pages/FeedbackDetails';
import EditFeedback from './pages/EditFeedback';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/submit" element={<SubmitFeedback />} />
            <Route path="/feedback" element={<FeedbackList />} />
            <Route path="/feedback/:id" element={<FeedbackDetails />} />
            <Route path="/feedback/:id/edit" element={<EditFeedback />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
