import java.io.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet("/SessionServlet")
public class SessionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username = request.getParameter("username");
        String theme = request.getParameter("theme");

        HttpSession session = request.getSession();
        session.setAttribute("username", username);
        session.setAttribute("theme", theme);

        response.sendRedirect("WelcomeServlet");
    }
}
