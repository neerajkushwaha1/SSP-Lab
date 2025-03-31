<!DOCTYPE html>
<html>
<head>
    <title>Task 5</title>
</head>
<body>
    <h1>Login</h1>
    <form action="LoginServlet" method="post">
        <label>Username: </label>
        <input type="text" name="username" required><br>
        <label>Password: </label>
        <input type="password" name="password" required><br>
        <button type="submit">Login</button>
    </form>

    <p style="color: red;">
        <% if (request.getParameter("error") != null) { %>
            Invalid Username or Password. Please try again.
        <% } %>
   	</p>
</body>
</html>
