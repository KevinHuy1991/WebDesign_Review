const QUIZ_DATA = [
  {
    "id": "qz_01",
    "chapter": 4,
    "question": "Thẻ nào sau đây là thẻ tự đóng (thẻ đơn) trong HTML?",
    "options": [
      "<p>",
      "<div>",
      "<br>",
      "<span>"
    ],
    "answer": 2,
    "explanation": "Thẻ `<br>` (hoặc chuẩn XHTML `<br />`) là thẻ đơn tự đóng không có thẻ đóng `</br>`."
  },
  {
    "id": "qz_02",
    "chapter": 4,
    "question": "Để mở một liên kết trong tab mới, ta dùng thuộc tính nào của thẻ <a>?",
    "options": [
      "target='_self'",
      "target='_blank'",
      "target='_parent'",
      "target='_newtab'"
    ],
    "answer": 1,
    "explanation": "`target=\"_blank\"` là thuộc tính quy định mở tài liệu trong cửa sổ hoặc tab mới."
  },
  {
    "id": "qz_03",
    "chapter": 4,
    "question": "Khi trong form có ô tải file <input type='file'>, thuộc tính enctype của thẻ <form> bắt buộc phải là gì?",
    "options": [
      "application/x-www-form-urlencoded",
      "text/plain",
      "multipart/form-data",
      "file/binary"
    ],
    "answer": 2,
    "explanation": "Bắt buộc phải đặt `enctype=\"multipart/form-data\"` để dữ liệu nhị phân của tệp tin được truyền tải chính xác."
  },
  {
    "id": "qz_04",
    "chapter": 5,
    "question": "Thẻ HTML5 nào sau đây đại diện cho nội dung chính duy nhất của toàn bộ tài liệu?",
    "options": [
      "<article>",
      "<section>",
      "<main>",
      "<content>"
    ],
    "answer": 2,
    "explanation": "`<main>` chứa nội dung trọng tâm độc nhất của trang, mỗi trang chỉ được có 1 thẻ `<main>` duy nhất."
  },
  {
    "id": "qz_05",
    "chapter": 5,
    "question": "Dữ liệu lưu trữ trong localStorage của HTML5 sẽ bị xóa khi nào?",
    "options": [
      "Ngay khi người dùng đóng tab hiện tại",
      "Sau 24 giờ kể từ khi lưu",
      "Chỉ khi có lệnh xóa bằng JavaScript hoặc người dùng xóa cache trình duyệt",
      "Khi khởi động lại máy tính"
    ],
    "answer": 2,
    "explanation": "`localStorage` lưu trữ vĩnh viễn không có thời hạn tự hết hạn, khác với `sessionStorage` bị xóa khi đóng tab."
  },
  {
    "id": "qz_06",
    "chapter": 6,
    "question": "Thứ tự các lớp của CSS Box Model tính từ trong ra ngoài là gì?",
    "options": [
      "Content -> Margin -> Border -> Padding",
      "Content -> Padding -> Border -> Margin",
      "Padding -> Content -> Border -> Margin",
      "Border -> Padding -> Content -> Margin"
    ],
    "answer": 1,
    "explanation": "Thứ tự chuẩn từ trong ra ngoài: Content (nội dung) -> Padding (đệm trong) -> Border (viền) -> Margin (lề ngoài)."
  },
  {
    "id": "qz_07",
    "chapter": 6,
    "question": "Trong các bộ chọn sau, bộ chọn nào có độ ưu tiên (Specificity) cao nhất?",
    "options": [
      "p (Element selector)",
      ".btn-primary (Class selector)",
      "#headerLogo (ID selector)",
      "* (Universal selector)"
    ],
    "answer": 2,
    "explanation": "ID selector có điểm ưu tiên (0, 1, 0, 0), cao hơn Class selector (0, 0, 1, 0) và Tag selector (0, 0, 0, 1)."
  },
  {
    "id": "qz_08",
    "chapter": 6,
    "question": "Thuộc tính position nào neo phần tử cố định theo cửa sổ màn hình (viewport) và không bị di chuyển khi cuộn trang?",
    "options": [
      "relative",
      "absolute",
      "fixed",
      "static"
    ],
    "answer": 2,
    "explanation": "`position: fixed` định vị phần tử cố định theo khung nhìn của trình duyệt, đứng yên khi cuộn trang."
  },
  {
    "id": "qz_09",
    "chapter": 7,
    "question": "Trong bố cục Flexbox, thuộc tính nào dùng để căn chỉnh các phần tử con dọc theo trục chính (Main Axis)?",
    "options": [
      "align-items",
      "justify-content",
      "align-content",
      "flex-wrap"
    ],
    "answer": 1,
    "explanation": "`justify-content` căn chỉnh trên trục chính (Main Axis), còn `align-items` căn chỉnh trên trục vuông góc (Cross Axis)."
  },
  {
    "id": "qz_10",
    "chapter": 7,
    "question": "Thẻ <meta> nào bắt buộc phải có để trang web hiển thị đúng tỷ lệ trên thiết bị di động (Responsive)?",
    "options": [
      "<meta name='mobile' content='yes'>",
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
      "<meta name='screen' content='responsive'>",
      "<meta name='device' content='auto'>"
    ],
    "answer": 1,
    "explanation": "Thẻ meta viewport `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` quy định tỷ lệ hiển thị chuẩn trên màn hình di động."
  },
  {
    "id": "qz_11",
    "chapter": 8,
    "question": "Kết quả của biểu thức sau trong JavaScript là gì: 5 == '5' và 5 === '5'?",
    "options": [
      "Cả hai đều trả về true",
      "Cả hai đều trả về false",
      "5 == '5' là true; 5 === '5' là false",
      "5 == '5' là false; 5 === '5' là true"
    ],
    "answer": 2,
    "explanation": "Toán tử `==` tự ép kiểu chuỗi thành số nên `5 == '5'` là true. Toán tử `===` so sánh cả kiểu dữ liệu (number vs string) nên `5 === '5'` là false."
  },
  {
    "id": "qz_12",
    "chapter": 8,
    "question": "Phương thức nào dùng để thêm một phần tử vào vị trí CUỐI CÙNG của một Mảng trong JavaScript?",
    "options": [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    "answer": 0,
    "explanation": "`array.push(item)` thêm vào cuối mảng. `unshift()` thêm vào đầu. `pop()` xóa cuối. `shift()` xóa đầu."
  },
  {
    "id": "qz_13",
    "chapter": 9,
    "question": "Phương thức nào của đối tượng event dùng để ngăn không cho trình duyệt thực hiện hành vi mặc định (như submit form gây tải lại trang)?",
    "options": [
      "event.stopPropagation()",
      "event.preventDefault()",
      "event.stopDefault()",
      "event.cancelBubble()"
    ],
    "answer": 1,
    "explanation": "`event.preventDefault()` ngăn chặn hành vi mặc định của trình duyệt."
  },
  {
    "id": "qz_14",
    "chapter": 9,
    "question": "Để thay đổi màu nền của một thẻ div có id='box' thành màu xanh lục bằng JavaScript DOM, cú pháp nào đúng?",
    "options": [
      "document.getElementById('box').style.background-color = 'green';",
      "document.getElementById('box').style.backgroundColor = 'green';",
      "document.getElementById('box').css('background-color', 'green');",
      "document.getElementById('box').color = 'green';"
    ],
    "answer": 1,
    "explanation": "Trong JavaScript, các thuộc tính CSS có gạch ngang được chuyển thành dạng camelCase: `backgroundColor`."
  },
  {
    "id": "qz_15",
    "chapter": 10,
    "question": "Sự kiện $(document).ready() trong jQuery có ưu điểm gì so với window.onload của JavaScript thuần?",
    "options": [
      "Chỉ thực thi khi toàn bộ hình ảnh nặng đã tải xong",
      "Thực thi ngay khi cấu trúc cây DOM được dựng xong mà không cần đợi hình ảnh tải xong",
      "Chỉ gọi được một lần duy nhất trong toàn bộ project",
      "Chỉ hoạt động trên trình duyệt Google Chrome"
    ],
    "answer": 1,
    "explanation": "`$(document).ready()` chạy ngay khi DOM sẵn sàng, giúp trang web tương tác nhanh hơn rất nhiều."
  },
  {
    "id": "qz_16",
    "chapter": 10,
    "question": "Trong jQuery, phương thức nào dùng để lấy giá trị nhập vào của một ô input?",
    "options": [
      ".value()",
      ".text()",
      ".val()",
      ".html()"
    ],
    "answer": 2,
    "explanation": "Phương thức `.val()` trong jQuery dùng để đọc hoặc gán giá trị cho các điều khiển Form."
  },
  {
    "id": "qz_17",
    "chapter": 11,
    "question": "TypeScript là gì?",
    "options": [
      "Một ngôn ngữ hoàn toàn mới không liên quan đến JavaScript",
      "Một framework thư viện UI tương tự như React",
      "Một Superset (tập mẹ cú pháp) của JavaScript bổ sung hệ thống kiểu tĩnh",
      "Một hệ quản trị cơ sở dữ liệu"
    ],
    "answer": 2,
    "explanation": "TypeScript do Microsoft phát triển là tập mẹ (Superset) của JavaScript, bổ sung kiểm tra kiểu tĩnh (Static Type Checking)."
  },
  {
    "id": "qz_18",
    "chapter": 11,
    "question": "Từ khóa nào trong Class TypeScript cho phép thuộc tính được truy xuất ở cả lớp hiện tại VÀ các lớp con kế thừa, nhưng cấm bên ngoài?",
    "options": [
      "public",
      "private",
      "protected",
      "readonly"
    ],
    "answer": 2,
    "explanation": "`protected` cho phép lớp con kế thừa truy cập nhưng ngăn chặn truy cập trực tiếp từ các đối tượng bên ngoài."
  }
];
