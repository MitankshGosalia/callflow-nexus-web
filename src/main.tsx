
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Wrap the App component in a try-catch to detect rendering errors
try {
  createRoot(document.getElementById("root")!).render(<App />);
} catch (error) {
  console.error("Error rendering application:", error);
}
