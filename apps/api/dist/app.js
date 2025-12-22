import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
// Serve static files from the React app
const distPath = path.join(__dirname, '../../web/dist');
app.use(express.static(distPath));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Serving static files from ${distPath}`);
});
