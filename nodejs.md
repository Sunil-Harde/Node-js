How do you start your Node.js application?”

To start a Node.js application, I first create an entry file like server.js or app.js. Then I set up Express, configure middleware, define routes, and finally start the server using app.listen() with a specific port. After that, I run the application using node filename.js or using npm scripts like npm start.


To start my Node.js application, I usually create an entry point like server.js. I configure Express, middleware such as JSON parsing and CORS, connect to the database, register routes, and then start the server using app.listen() with a port from environment variables. For development, I use nodemon, and I run the application using npm scripts.



middleware 

Middleware is a function that executes between the request and response cycle. In my projects, I have used Express middleware for authentication, request validation, and centralized error handling.

“What is the startup flow of your backend?”

I usually start by loading environment variables, initialize Express, apply global middleware, connect to MongoDB, register modular routes, configure centralized error handling, and start the server only after successful database connection.



“What happens if MongoDB is down and your server is running?”

If MongoDB is down and the server is running, the server will still run but database-related APIs will fail. Because the application cannot connect to MongoDB, it will throw errors when trying to fetch or save data. To handle this, I use proper error handling and try to start the server only after a successful database connection.



“How do you handle database connection failure?”

I handle database connection failure by using try-catch or .catch() while connecting to the database. If the connection fails, I log the error and prevent the server from starting. I also return proper error responses for API requests and can retry the connection if needed.


“Have you faced buffering timed out error? Why does it happen?

Yes, I have faced the buffering timed out error. It usually happens when MongoDB is not connected but the application tries to perform database operations. Mongoose buffers the queries, and if the connection is not established within the time limit, it throws a buffering timed out error.



know telll me what is time limit is buffring

The default buffering time limit in Mongoose is 10 seconds. If MongoDB is not connected within this time and queries are waiting, Mongoose throws a buffering timed out error.

    know tell me you can change that buffring time 

Yes, we can change the buffering time in Mongoose using the bufferTimeoutMS option while connecting to MongoDB.

Example
mongoose.connect(DB_URL, {
  bufferTimeoutMS: 20000
});

“Is it okay to start the server before database connection?

It’s technically possible, but not recommended. If MongoDB is not connected, database queries will fail. So I prefer starting the server only after the database connects successfully.



“How do you make sure APIs don’t fail at startup?

I ensure APIs don’t fail at startup by connecting to the database first and starting the server only after the connection is successful. I also use proper error handling for safety.


”
“What will happen if frontend sends a request when DB is not connected?”

The request will reach the backend, but since the database is not connected, database queries will fail. The API will return an error response, usually a 500 status code.


“Explain how you manage dependencies like database in backend.

I manage database dependency by connecting to MongoDB during startup, using environment variables, and starting the server only after the connection is successful. I also handle errors to prevent API failures.



“How do you write production-ready server startup code?

i write production-ready startup code by loading environment variables, connecting to MongoDB, handling connection errors, and starting the server only after the database is ready. This prevents API failures at startup.

I connect the database first and then start the server

.
Because backend APIs depend on the database.
If the server starts before the DB and a request comes early, i

t can cause errors.
So I start the server only after successful DB connection.

”

What is Node.js and why do we use it?

How does Node.js work?

What is the event-driven architecture in Node.js?

What is non-blocking I/O?

Difference between Node.js and JavaScript in the browser

What is npm?

What is package.json?

What are modules in Node.js?

Difference between CommonJS and ES Modules

What is the event loop?

➡ Total: 10 questions

2️⃣ Core Modules

Node.js has built-in modules.

What are core modules in Node.js?

What is the fs module?

What is the path module?

What is the http module?

What is the os module?

➡ Total: 5 questions

3️⃣ Express.js (Very Important)

Most Node backends use Express.js.

What is Express.js?

Why do we use Express.js?

What is middleware in Express?

What are routes in Express?

What is app.use()?

What is next() in middleware?

Difference between application middleware and router middleware

➡ Total: 7 questions

4️⃣ API Development

Important for backend developers.

What is a REST API?

REST API is an architectural style where the client communicates with the server using HTTP methods such as GET, POST, PUT, and DELETE. It treats data as resources and each resource is accessed using a URL.

What are HTTP methods (GET, POST, PUT, DELETE)?

Difference between PUT vs PATCH

What is status code in HTTP?

How do you send JSON response in Node?

➡ Total: 5 questions

5️⃣ Database (MongoDB Integration)

Node developers usually connect with MongoDB.

How do you connect Node.js with MongoDB?

What is Mongoose?

What is a schema in Mongoose?

A Mongoose schema defines the structure of documents, including fields, types, default values, and validations. It helps enforce data consistency in MongoDB.

What is a model in Mongoose?

What are CRUD operations?

➡ Total: 5 questions

6️⃣ Authentication

Very common in MERN interviews.

What is authentication vs authorization?

What is JWT?

How do you implement JWT authentication in Node?

What is bcrypt?

Why do we hash passwords?

➡ Total: 5 questions

7️⃣ Error Handling & Security

How do you handle errors in Express?

What is try/catch in async code?

What is CORS?

What is dotenv and why do we use it?

What are environment variables?

➡ Total: 5 questions

8️⃣ Advanced Node.js

Some companies ask these.

What is clustering in Node.js?

What are streams in Node.js?

What is buffer?

What is process object?

What is child process?



How do you implement authentication in your backend?
Which authentication method did you use (JWT / session)?
Where do you store JWT token?
How do you protect routes?
What is access token and refresh token?
How do you implement role-based authorization?
What happens if token expires?
How do you verify JWT?
Difference between session and JWT?
How do you handle logout?