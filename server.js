const express = require('express');
const app = express();
const dataClients = require('./dataClients.json')

app.use(express.json());

// GET
app.get("/clients", function(requst, response) {
	response.json(dataClients);
});

// GET:id
app.get("/clients/:id", function(request, response) {
	const { id } = request.params;
	const clientId = dataClients.find(client => client.id == id);

	if (!clientId) return response.status(204).json();
	response.json(clientId);
});


// POST
app.post("/clients", function(request, response) {
	const { name, email } = request.body;
	//salvar
	response.json({ name, email })
});


// PUT
app.put("/clients/:id", function(request, response) {
	const { id } = request.params;
	const clientId = dataClients.find(client => client.id == id);

	if (!clientId) return response.status(204).json();

	const { name, email } = request.body;
	clientId.name = name;
	clientId.email = email;
	response.json(clientId);
});


// DELETE
app.delete("/clients/:id", function(request, response) {
	const { id } = request.params;
	const clientsFiltered = dataClients.filter(client => client.id == id);
	response.json(clientsFiltered);
});



// Servidor, porta 3000.
app.listen(3000, function() {
	console.log("Servidor rodando.");
})







// JSON, users
// https://jsonplaceholder.typicode.com/users
