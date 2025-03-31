// Java Servlet (WelcomeServlet.java)
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/WelcomeServlet")
public class WelcomeServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        if (name == null || name.isEmpty()) {
            name = "Guest";
        }

        String clientIP = request.getRemoteAddr();

        out.println("<html><body>");
        out.println("<h1>Welcome, " + name + "!</h1>");
        out.println("<p>Your IP Address: " + clientIP + "</p>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
