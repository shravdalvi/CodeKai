// ── Centralized API Configuration ────────────────────────────────────────────
// All backend requests go through this base URL.
// Set VITE_API_URL in your .env file for local dev or in Render's env vars for production.

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Execute code against the backend Piston runner.
 * @param {string} language
 * @param {string} filename
 * @param {string} code
 */
export async function runCode(language, filename, code) {
  const res = await fetch(`${API_URL}/api/execute`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang: language, code }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Code execution failed (${res.status}): ${text}`);
  }

  return res.json();
}

/**
 * Run AI analysis on submitted code via Groq.
 * @param {object} question  - Active question object
 * @param {string} code      - User's code
 * @param {string} language  - Selected language
 * @param {Array}  results   - Test case results
 */
export async function analyzeWithGroq(question, code, language, results) {
  try {
    const res = await fetch(`${API_URL}/api/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, code, language, results }),
    });

    if (!res.ok) {
      console.error(`AI analysis failed (${res.status})`);
      return null;
    }

    return res.json();
  } catch (e) {
    console.error('AI Analysis Error:', e.message);
    return null;
  }
}

export default API_URL;
