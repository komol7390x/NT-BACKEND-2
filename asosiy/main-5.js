const { createServer } = require('node:http');
const { read, write } = require('./file.js');

const server = createServer(async (req, res) => {
    // create start
    if (req.method === 'POST' && req.url === '/user') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const users = await read();
                const newUser = {
                    id: !users?.length ? 1 : users.at(-1)?.id + 1,
                    ...JSON.parse(body)
                };
                users.push(newUser);
                write(users);
                res.writeHead(201, { "content-type": "application/json" });
                return res.end(JSON.stringify({
                    statusCode: 201,
                    message: 'success',
                    data: newUser
                }));
            } catch (error) {
                res.writeHead(500, { "content-type": "application/json" });
                return res.end(JSON.stringify({
                    statusCode: 500,
                    message: error.message
                }));
            }
        });
    }
    // create end


    // read all start
    if (req.method === 'GET' && req.url === '/user') {
        const users = await read();
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify({
            statusCode: 200,
            message: 'success',
            data: users
        }));
    }
    // read all end


    // read by id start
    if (req.method === 'GET' && req.url.startsWith('/user/id')) {
        const id = req.url.split('/')[3];
        const users = await read();
        const user = users.find(user => user.id === +id);
        if (!user) {
            res.writeHead(404, { "content-type": "application/json" });
            return res.end(JSON.stringify({
                statusCode: 404,
                message: `User not found by ID ${id}`
            }));
        }
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify({
            statusCode: 200,
            message: 'success',
            data: user
        }));
    }
    // read by id end


    // update start
    if (req.method === 'PUT' && req.url.startsWith('/user/id')) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const id = req.url.split('/')[3];
                const users = await read();
                const index = users.findIndex(user => user.id === +id);
                if (index === -1) {
                    res.writeHead(404, { "content-type": "application/json" });
                    return res.end(JSON.stringify({
                        statusCode: 404,
                        message: `User not found by ID ${id}`
                    }));
                }
                const user = { id: users[index].id, ...JSON.parse(body) };
                users[index] = user;
                await write(users);
                res.writeHead(200, { "content-type": "application/json" });
                return res.end(JSON.stringify({
                    statusCode: 200,
                    message: 'success',
                    data: user
                }));
            } catch (error) {
                res.writeHead(500, { "content-type": "application/json" });
                return res.end(JSON.stringify({
                    statusCode: 500,
                    message: error.message
                }));
            }
        });
    }
    // update end


    // delete start
    if (req.method === 'DELETE' && req.url.startsWith('/user/id')) {
        const id = req.url.split('/')[3];
        const users = await read();
        const index = users.findIndex(user => user.id === +id);
        if (index === -1) {
            res.writeHead(404, { "content-type": "application/json" });
            return res.end(JSON.stringify({
                statusCode: 404,
                message: `User not found by ID ${id}`
            }));
        }
        users.splice(index, 1);
        await write(users);
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify({
            statusCode: 200,
            message: 'success',
            data: {}
        }));
    }
    // delete end
});

server.listen(2000, () => console.log('server running on port 2000'));