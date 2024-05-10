//Button
var chatbot = document.getElementById('chatbot');
var phone = document.getElementById('phone');
var phoneHint = document.getElementById('phoneHint');
var chatbotHint = document.getElementById('chatbotHint');
var hint = document.getElementById('hint');
var buttonChatbot = document.getElementById('buttonChatbot');

function ChatbotPhone(element1, element2) {
    if (element1.style.display == "none") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
    }
}

function Hint() {
    hint.style.display = "block";
}

function HintEnd(e) {
    hint.style.display = "none";
}

setInterval(ChatbotPhone, 8000, chatbot, phone);
setInterval(ChatbotPhone, 8000, phoneHint, chatbotHint);
buttonChatbot.addEventListener('mouseover', Hint);
buttonChatbot.addEventListener('mouseout', HintEnd);
