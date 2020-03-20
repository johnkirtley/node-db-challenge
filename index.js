const server = require('./server');

const PORT = process.env.DB_ENV || 5000;

server.listen(PORT, () => {
	console.log(`=== Running on port ${PORT}  ===`);
});
