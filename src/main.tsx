
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

try {
  console.log("Starting application rendering");
  createRoot(document.getElementById("root")!).render(<App />);
  console.log("Application rendered successfully");
} catch (error) {
  console.error("Error rendering application:", error);
}
