function chatBot() {
            let input = document.getElementById("chatBox").value.toLowerCase();
            let response = (input.includes("hello")) ? "Hi!" : "Hello! How can I help you?";
            document.getElementById("chatReply").innerText = response;
        }
