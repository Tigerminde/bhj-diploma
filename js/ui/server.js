const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
	res.end('https://bhj-diplom.letsdocode.ru');
});

server.listen(8000, ('http://localhost:8000') => console.log('start'));
