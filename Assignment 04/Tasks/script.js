function bmiCalc() {
            let w = prompt("Enter weight (kg):");
            let h = prompt("Enter height (m):");
            let bmi = w / (h * h);
            alert("Your BMI: " + bmi.toFixed(2));
        }

        function tempConvert() {
            let c = prompt("Enter Celsius temperature:");
            let f = (c * 9/5) + 32;
            alert(c + "°C = " + f + "°F");
        }

        function showAlert() { alert("This is an alert!"); }
        function confirmDelete() { confirm("Are you sure to delete?"); }
        function askName() {
            let name = prompt("Enter your name:");
            if (name) alert("Hello, " + name);
        }

        function changeMsg() { document.getElementById("msg").innerText = "Text Updated!"; }
        function hoverEffect(el) { el.innerText = "Hovered!"; }
        function resetHover(el) { el.innerText = "Hover"; }

        function addItem() {
            let item = document.getElementById("itemInput").value;
            if (item) {
                let li = document.createElement("li");
                li.innerText = item;
                document.getElementById("list").appendChild(li);
            }
        }

        function checkForm() {
            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            let email = document.getElementById("userEmail").value;
            let password = document.getElementById("userPass").value;

            if (!email.match(emailPattern)) {
                document.getElementById("errorMsg").innerText = "Invalid Email!";
                return false;
            }
            if (!password.match(passPattern)) {
                document.getElementById("errorMsg").innerText = "Weak Password!";
                return false;
            }
            alert("Form Submitted!");
            return true;
        }

        document.getElementById("dateTime").innerText = new Date().toLocaleString();
        function randomNumber() { document.getElementById("rand").innerText = Math.floor(Math.random() * 100); }

        function getWeather() {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true")
                .then(response => response.json())
                .then(data => document.getElementById("weatherInfo").innerText = "Temp: " + data.current_weather.temperature + "°C");
        }

        
