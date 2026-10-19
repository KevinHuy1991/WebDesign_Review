const CHEATSHEET_DATA = [
  {
    "category": "HTML",
    "name": "<a>",
    "syntax": "<a href=\"url\" target=\"_blank\">",
    "desc": "Tạo siêu liên kết, target='_blank' mở trong tab mới."
  },
  {
    "category": "HTML",
    "name": "<img>",
    "syntax": "<img src=\"path\" alt=\"mô tả\" />",
    "desc": "Chèn hình ảnh, thuộc tính alt bắt buộc cho SEO & trợ năng."
  },
  {
    "category": "HTML",
    "name": "<table>",
    "syntax": "<table>, <tr>, <th>, <td>",
    "desc": "Tạo bảng dữ liệu. Gộp cột dùng colspan='n', gộp hàng dùng rowspan='n'."
  },
  {
    "category": "HTML",
    "name": "<form>",
    "syntax": "<form action=\"xuly\" method=\"post\" enctype=\"multipart/form-data\">",
    "desc": "Biểu mẫu thu thập dữ liệu. Upload file bắt buộc method post và multipart/form-data."
  },
  {
    "category": "HTML",
    "name": "<input>",
    "syntax": "<input type=\"text|password|radio|checkbox|file|submit\">",
    "desc": "Các điều khiển nhập liệu form cơ bản."
  },
  {
    "category": "HTML",
    "name": "<select>",
    "syntax": "<select><option value='1'>Mục 1</option></select>",
    "desc": "Hộp danh sách chọn thả xuống (Dropdown list)."
  },
  {
    "category": "HTML",
    "name": "<fieldset>",
    "syntax": "<fieldset><legend>Tiêu đề</legend>...</fieldset>",
    "desc": "Tạo khung viền nhóm các điều khiển và tiêu đề cho nhóm."
  },
  {
    "category": "HTML5",
    "name": "<header>, <nav>, <main>",
    "syntax": "Semantic structural elements",
    "desc": "Thẻ ngữ nghĩa phần đầu trang, menu điều hướng và nội dung chính duy nhất."
  },
  {
    "category": "HTML5",
    "name": "<section>, <article>, <aside>, <footer>",
    "syntax": "Semantic content elements",
    "desc": "Phân đoạn chuyên đề, bài viết độc lập, cột bên phụ trợ và chân trang."
  },
  {
    "category": "HTML5",
    "name": "<video>, <audio>",
    "syntax": "<video controls poster=\"thumb.jpg\"><source src=\"...\"></video>",
    "desc": "Phát đa phương tiện bản địa không cần flash plugin."
  },
  {
    "category": "HTML5",
    "name": "<canvas>",
    "syntax": "canvas.getContext('2d')",
    "desc": "Vẽ đồ họa điểm ảnh 2D bằng JavaScript."
  },
  {
    "category": "HTML5",
    "name": "localStorage",
    "syntax": "localStorage.setItem('k', 'v') / getItem('k')",
    "desc": "Lưu trữ dữ liệu vĩnh viễn trên client (~5MB)."
  },
  {
    "category": "CSS",
    "name": "Box Model",
    "syntax": "margin -> border -> padding -> content",
    "desc": "Mô hình hộp 4 lớp. Chuẩn hóa bằng box-sizing: border-box;"
  },
  {
    "category": "CSS",
    "name": "position",
    "syntax": "static | relative | absolute | fixed",
    "desc": "Định vị tọa độ không gian. Cha relative - con absolute."
  },
  {
    "category": "CSS",
    "name": "display",
    "syntax": "block | inline | inline-block | flex | none",
    "desc": "Cách thức hiển thị dòng chảy của phần tử."
  },
  {
    "category": "CSS",
    "name": "Độ ưu tiên (Specificity)",
    "syntax": "!important > Inline > ID > Class > Tag > *",
    "desc": "Quy tắc giải quyết xung đột kiểu dáng giữa các bộ chọn."
  },
  {
    "category": "CSS3",
    "name": "border-radius",
    "syntax": "border-radius: 8px; / border-radius: 50%;",
    "desc": "Bo góc tròn phần tử, 50% tạo hình tròn hoàn hảo."
  },
  {
    "category": "CSS3",
    "name": "box-shadow",
    "syntax": "box-shadow: h-off v-off blur spread color;",
    "desc": "Đổ bóng phần tử có chiều sâu nổi."
  },
  {
    "category": "CSS3",
    "name": "linear-gradient",
    "syntax": "background: linear-gradient(135deg, #6366f1, #a855f7);",
    "desc": "Màu nền chuyển sắc theo hướng hoặc góc độ."
  },
  {
    "category": "CSS3",
    "name": "transform 2D",
    "syntax": "translate(x,y) | rotate(deg) | scale(s) | skew(a)",
    "desc": "Dịch chuyển, xoay, phóng to/thu nhỏ, làm nghiêng phần tử."
  },
  {
    "category": "CSS3",
    "name": "transition",
    "syntax": "transition: all 0.3s ease-in-out;",
    "desc": "Tạo chuyển tiếp biến đổi mượt mà giữa các trạng thái."
  },
  {
    "category": "CSS3",
    "name": "@keyframes & animation",
    "syntax": "@keyframes name { from{} to{} }",
    "desc": "Định nghĩa hoạt ảnh tự động chạy lặp theo nhiều khung hình."
  },
  {
    "category": "CSS3",
    "name": "Flexbox",
    "syntax": "display: flex; justify-content: ...; align-items: ...;",
    "desc": "Hệ thống bố cục 1 chiều linh hoạt căn chỉnh khoảng cách và chia cột."
  },
  {
    "category": "CSS3",
    "name": "@media",
    "syntax": "@media screen and (max-width: 768px) { ... }",
    "desc": "Truy vấn truyền thông cho thiết kế đáp ứng Responsive Web Design."
  },
  {
    "category": "JavaScript",
    "name": "var / let / const",
    "syntax": "const PI = 3.14; let count = 0;",
    "desc": "Khai báo biến. const không đổi, let có phạm vi khối block scope."
  },
  {
    "category": "JavaScript",
    "name": "== vs ===",
    "syntax": "5 == '5' (true) vs 5 === '5' (false)",
    "desc": "So sánh bằng. === so sánh cả giá trị và kiểu dữ liệu nghiêm ngặt."
  },
  {
    "category": "JavaScript",
    "name": "Array methods",
    "syntax": "arr.push(), pop(), shift(), unshift(), slice(), splice()",
    "desc": "Các hàm thêm, xóa, trích xuất phần tử của mảng."
  },
  {
    "category": "JavaScript",
    "name": "map(), filter()",
    "syntax": "arr.map(fn) / arr.filter(fn)",
    "desc": "Biến đổi mảng hoặc lọc các phần tử thỏa điều kiện ra mảng mới."
  },
  {
    "category": "JavaScript",
    "name": "Arrow Function",
    "syntax": "const add = (a, b) => a + b;",
    "desc": "Cú pháp hàm mũi tên ngắn gọn trong ES6, không có this riêng."
  },
  {
    "category": "JS DOM",
    "name": "getElementById()",
    "syntax": "document.getElementById('id')",
    "desc": "Truy xuất phần tử duy nhất theo ID nhanh nhất."
  },
  {
    "category": "JS DOM",
    "name": "querySelector()",
    "syntax": "document.querySelector('.nav > li.active')",
    "desc": "Truy xuất phần tử đầu tiên khớp bộ chọn CSS bất kỳ."
  },
  {
    "category": "JS DOM",
    "name": "innerHTML vs textContent",
    "syntax": "elem.innerHTML = '<b>Hi</b>' / elem.textContent",
    "desc": "Ghi đè mã HTML con hoặc gán văn bản thô thuần túy."
  },
  {
    "category": "JS DOM",
    "name": "style & classList",
    "syntax": "elem.style.color = 'red'; elem.classList.toggle('show');",
    "desc": "Thao tác style động camelCase và bật/tắt class CSS."
  },
  {
    "category": "JS DOM",
    "name": "addEventListener()",
    "syntax": "elem.addEventListener('click', handler)",
    "desc": "Phương thức đăng ký sự kiện tiêu chuẩn."
  },
  {
    "category": "JS DOM",
    "name": "preventDefault()",
    "syntax": "event.preventDefault()",
    "desc": "Ngăn chặn hành vi mặc định của trình duyệt (như reload form)."
  },
  {
    "category": "JS DOM",
    "name": "setInterval()",
    "syntax": "setInterval(fn, 1000) / clearInterval(id)",
    "desc": "Thực thi hàm lặp lại sau mỗi chu kỳ mili-giây (đồng hồ)."
  },
  {
    "category": "jQuery",
    "name": "$(document).ready()",
    "syntax": "$(function() { /* code */ });",
    "desc": "Kích hoạt ngay khi cây DOM dựng xong, không đợi hình ảnh."
  },
  {
    "category": "jQuery",
    "name": "val()",
    "syntax": "$('#input').val() / $('#input').val('123')",
    "desc": "Đọc hoặc gán giá trị cho điều khiển Form."
  },
  {
    "category": "jQuery",
    "name": "fadeIn() / fadeOut()",
    "syntax": "$('#box').fadeIn('slow') / fadeOut('fast')",
    "desc": "Hiệu ứng mờ dần hiện ra hoặc biến mất."
  },
  {
    "category": "jQuery",
    "name": "slideToggle()",
    "syntax": "$('.panel').slideToggle(300)",
    "desc": "Hiệu ứng trượt đóng mở làm Accordion hoặc Dropdown menu."
  },
  {
    "category": "jQuery",
    "name": "$.ajax()",
    "syntax": "$.ajax({ url, method, dataType, success })",
    "desc": "Gọi HTTP request bất đồng bộ không cần tải lại trang."
  },
  {
    "category": "TypeScript",
    "name": "tsc",
    "syntax": "tsc app.ts",
    "desc": "Lệnh biên dịch mã TypeScript sang JavaScript."
  },
  {
    "category": "TypeScript",
    "name": "interface",
    "syntax": "interface User { id: number; name: string; email?: string; }",
    "desc": "Định nghĩa khuôn mẫu hợp đồng cấu trúc đối tượng."
  },
  {
    "category": "TypeScript",
    "name": "readonly & optional (?)",
    "syntax": "readonly id: number; age?: number;",
    "desc": "Thuộc tính chỉ đọc không thể sửa và thuộc tính tùy chọn."
  },
  {
    "category": "TypeScript",
    "name": "Union type (|)",
    "syntax": "let id: string | number;",
    "desc": "Kiểu hợp cho phép biến nhận 1 trong nhiều kiểu."
  },
  {
    "category": "TypeScript",
    "name": "Access Modifiers",
    "syntax": "public, protected, private",
    "desc": "Kiểm soát quyền truy cập thuộc tính/phương thức trong OOP."
  },
  {
    "category": "TypeScript",
    "name": "Generics <T>",
    "syntax": "function getFirst<T>(arr: T[]): T",
    "desc": "Hàm hoặc class tổng quát an toàn kiểu."
  }
];
