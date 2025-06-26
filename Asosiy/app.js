const { createServer } = require('node:http');
const fs = require('node:fs');
const { path } = require('node:path');
const { formidable } = require('formidable');
const { log } = require('node:console');

const PORT = 3002;
const uploadDir = (__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
}

const server = createServer(async (req, res) => {
    const method = req.method;
    const url = req.url;
    if (method == 'POST' && url.startsWith('/upload')) {
        const form = formidable({
            uploadDir: uploadDir,
            keepExtensions: true,
            maxFileSize: 200 * 1024 * 1024
        })
        form.parse(req, (err, _, files) => {
            if (err) {
                res.writeHead(201, { "content-type": 'application/json' });
                return res.end(JSON.stringify({
                    statusCode: 500,
                    error: err.message
                }))
            }
            console.log(files);
            

        })


    }
})

server.listen(PORT, () => console.log(`Server is runing ${PORT}`))