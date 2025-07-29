// content_script.js

function displayMessageInTextbox(message) {
    // Tìm phần tử textbox (ví dụ: textarea hoặc input) trong HTA
    // Giả sử ID của textbox là "outputTextbox"
    const textbox = document.getElementById('outputTextbox');

    if (textbox) {
        if (textbox.tagName === 'TEXTAREA') {
            textbox.value = message; // Đối với <textarea>
        } else if (textbox.tagName === 'INPUT' && textbox.type === 'text') {
            textbox.value = message; // Đối với <input type="text">
        } else {
            // Nếu là một phần tử khác, có thể bạn muốn thêm nội dung vào đó
            textbox.textContent = message;
        }
        console.log("Message displayed in textbox.");
    } else {
        console.error("Textbox with ID 'outputTextbox' not found.");
        // Nếu không tìm thấy textbox, bạn có thể hiển thị thông báo lỗi hoặc alert
        alert("Không tìm thấy vùng nhập liệu để hiển thị nội dung.");
    }
}

// Hàm chính để thực thi khi script được tải
function runContent() {
    const textToShow = "Đây là nội dung được tải và hiển thị vào textbox!\n\n";
    const moreText = "Phiên bản HTA: 1.0\nNgày: " + new Date().toLocaleDateString();

    displayMessageInTextbox(textToShow + moreText);
}

// Gọi hàm chính để thực thi
runContent();
