import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/WelcomeServlet")
public class WelcomeServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = (String) request.getAttribute("username");

        out.println("<html><body>");
        out.println("<h1>Welcome, " + username + "!</h1>");
        out.println("</body></html>");
    }
}
