import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/WelcomeServlet")
public class WelcomeServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        HttpSession session = request.getSession(false);
        
        String theme = (session != null) ? (String) session.getAttribute("theme") : "Default";
        String username = (session != null) ? (String) session.getAttribute("username") : "";
        
        
        out.println("<html><body>");
        out.println("<h1>Welcome, " + (username != null ? username : "Guest") + "!</h1>");
        out.println("<p>Your Selected Theme: " + theme + "</p>");
        out.println("</body></html>");
    }
}
