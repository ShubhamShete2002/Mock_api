const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/test-code', (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required' });
  }

  const mockResponse = {
    testCases: [
      `Test 1: Validate basic functionality of ${language} code.`,
      `Test 2: Check edge cases in ${language} code.`,
    ],
    suggestions: 'Consider adding more error handling and unit tests.',
  };

  res.status(200).json(mockResponse);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
