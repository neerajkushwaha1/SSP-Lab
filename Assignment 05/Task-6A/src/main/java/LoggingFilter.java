import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;

@WebFilter("/*")
public class LoggingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
            throws IOException, ServletException {
        
        HttpServletRequest req = (HttpServletRequest) request;
        String ipAddress = request.getRemoteAddr();
        String requestURL = req.getRequestURL().toString();
        String currentTime = new Date().toString();

        System.out.println("IP Address: " + ipAddress + " | URL: " + requestURL + " | Time: " + currentTime);

        chain.doFilter(request, response);
    }
}
