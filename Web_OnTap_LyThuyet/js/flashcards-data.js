const FLASHCARDS_DATA = [
  {
    "id": "fc_01",
    "chapter": 4,
    "front": "XHTML khác gì so với HTML truyền thống?",
    "back": "XHTML = HTML + XML. Đòi hỏi tính chặt chẽ: tất cả thẻ mở phải có thẻ đóng, tên thẻ và thuộc tính phải viết thường, giá trị thuộc tính phải đặt trong dấu nháy kép, và các thẻ phải lồng nhau tuyệt đối.",
    "tag": "HTML / XHTML"
  },
  {
    "id": "fc_02",
    "chapter": 4,
    "front": "Khi nào nên dùng phương thức GET và khi nào nên dùng POST trong HTML Form?",
    "back": "GET: Nối dữ liệu lên thanh URL (sau dấu ?), giới hạn độ dài < 2048 ký tự, kém bảo mật. Dùng cho tìm kiếm, phân trang.\nPOST: Gửi ngầm trong HTTP Body, không giới hạn dung lượng, an toàn hơn. Dùng cho đăng nhập, gửi file, tạo/sửa dữ liệu.",
    "tag": "Form Method"
  },
  {
    "id": "fc_03",
    "chapter": 4,
    "front": "Phân biệt colspan và rowspan trong bảng HTML?",
    "back": "colspan=\"n\": Gộp n cột lại với nhau theo chiều ngang.\nrowspan=\"n\": Gộp n hàng lại với nhau theo chiều dọc.",
    "tag": "HTML Tables"
  },
  {
    "id": "fc_04",
    "chapter": 4,
    "front": "Để tạo radio button cho phép chọn 1 trong nhiều, cần lưu ý điều gì?",
    "back": "Tất cả các thẻ <input type=\"radio\"> trong cùng một nhóm BẮT BUỘC phải có chung thuộc tính name (ví dụ: name=\"gender\"). Khi đó trình duyệt chỉ cho phép tick chọn 1 nút duy nhất.",
    "tag": "Form Controls"
  },
  {
    "id": "fc_05",
    "chapter": 5,
    "front": "So sánh Canvas và SVG trong HTML5?",
    "back": "Canvas: Đồ họa điểm ảnh (raster/pixels), vẽ bằng JavaScript, không bắt được sự kiện từng hình vẽ con, thích hợp cho game 2D và hiệu ứng chuyển động nhanh.\nSVG: Đồ họa véc-tơ (XML), phóng to không vỡ hình, mỗi hình vẽ là 1 DOM node có thể gắn CSS và sự kiện riêng.",
    "tag": "HTML5 Graphics"
  },
  {
    "id": "fc_06",
    "chapter": 5,
    "front": "Khác biệt giữa localStorage và sessionStorage?",
    "back": "localStorage: Lưu trữ vĩnh viễn trên client cho đến khi bị xóa bởi JS hoặc người dùng, dùng chung giữa mọi tab cùng origin.\nsessionStorage: Chỉ tồn tại trong tab/phiên làm việc hiện tại, đóng tab là mất sạch dữ liệu.",
    "tag": "Web Storage"
  },
  {
    "id": "fc_07",
    "chapter": 5,
    "front": "Các thẻ ngữ nghĩa (Semantic Elements) chính trong HTML5?",
    "back": "<header> (phần đầu trang/bài), <nav> (menu điều hướng), <main> (nội dung chính độc nhất), <section> (khối chuyên đề), <article> (bài viết độc lập), <aside> (cột bên/nội dung phụ), <footer> (chân trang).",
    "tag": "Semantic HTML5"
  },
  {
    "id": "fc_08",
    "chapter": 6,
    "front": "Thứ tự 4 thành phần trong CSS Box Model?",
    "back": "Tính từ trong ra ngoài: Content (nội dung) -> Padding (khoảng đệm trong) -> Border (đường viền) -> Margin (khoảng cách lề ngoài).",
    "tag": "CSS Box Model"
  },
  {
    "id": "fc_09",
    "chapter": 6,
    "front": "Tác dụng của box-sizing: border-box là gì?",
    "back": "Khi đặt border-box, giá trị width và height khai báo đã bao gồm cả padding và border. Giúp kích thước hộp không bị phình to khi thêm padding/border, layout không bị vỡ.",
    "tag": "CSS Box Sizing"
  },
  {
    "id": "fc_10",
    "chapter": 6,
    "front": "Độ ưu tiên (Specificity) trong CSS được tính như thế nào?",
    "back": "!important (cao nhất) > Inline style (1,0,0,0) > ID selector (0,1,0,0) > Class / Attribute / Pseudo-class (0,0,1,0) > Element / Pseudo-element (0,0,0,1) > Universal selector * (0,0,0,0).",
    "tag": "CSS Specificity"
  },
  {
    "id": "fc_11",
    "chapter": 6,
    "front": "Phân biệt position: relative, absolute và fixed?",
    "back": "relative: Dời vị trí so với vị trí ban đầu của chính nó, vẫn giữ chỗ cũ.\nabsolute: Rút khỏi luồng tài liệu, neo tọa độ theo thẻ cha gần nhất có position khác static.\nfixed: Neo cố định theo cửa sổ trình duyệt (viewport), cuộn trang vẫn đứng yên.",
    "tag": "CSS Position"
  },
  {
    "id": "fc_12",
    "chapter": 7,
    "front": "Trong Flexbox, justify-content và align-items điều khiển trục nào?",
    "back": "justify-content: Căn chỉnh các phần tử con dọc theo trục chính (Main Axis - thường là chiều ngang khi flex-direction: row).\nalign-items: Căn chỉnh các phần tử con dọc theo trục vuông góc (Cross Axis - thường là chiều dọc).",
    "tag": "CSS3 Flexbox"
  },
  {
    "id": "fc_13",
    "chapter": 7,
    "front": "Cú pháp đổ bóng box-shadow gồm những tham số nào?",
    "back": "box-shadow: h-offset v-offset blur spread color;\nTrong đó: h-offset (ngang), v-offset (dọc), blur (độ mờ), spread (độ lan tỏa), color (màu sắc).",
    "tag": "CSS3 Box Shadow"
  },
  {
    "id": "fc_14",
    "chapter": 7,
    "front": "Khác biệt giữa transition và animation (@keyframes)?",
    "back": "transition: Cần một sự kiện kích hoạt (như :hover, thay đổi class) để chuyển tiếp giữa 2 trạng thái (từ A đến B).\nanimation: Tự động chạy khi tải trang, có thể lặp vô tận (infinite), điều khiển chuyển động qua nhiều mốc phần trăm (0%, 50%, 100%) mà không cần tương tác người dùng.",
    "tag": "CSS3 Animations"
  },
  {
    "id": "fc_15",
    "chapter": 8,
    "front": "Phân biệt var, let và const trong JavaScript?",
    "back": "var: Function scope, bị hoisting (undefined), cho phép khai báo lại.\nlet: Block scope {}, không cho phép khai báo lại trong cùng scope, có thể gán lại giá trị.\nconst: Block scope {}, hằng số không thể gán lại giá trị mới.",
    "tag": "JS Variables"
  },
  {
    "id": "fc_16",
    "chapter": 8,
    "front": "Khác biệt giữa == và === trong JavaScript?",
    "back": "== (So sánh lỏng): Tự động ép kiểu dữ liệu rồi so sánh giá trị (ví dụ: 5 == '5' là true).\n=== (So sánh nghiêm ngặt): So sánh cả giá trị và kiểu dữ liệu mà không ép kiểu (ví dụ: 5 === '5' là false). Luôn nên dùng ===.",
    "tag": "JS Operators"
  },
  {
    "id": "fc_17",
    "chapter": 8,
    "front": "Phân biệt map() và forEach() trên mảng trong JavaScript?",
    "back": "forEach(): Chỉ duyệt qua từng phần tử để thực hiện hành động, luôn trả về undefined.\nmap(): Duyệt qua từng phần tử và trả về một MẢNG MỚI chứa các giá trị sau khi được biến đổi.",
    "tag": "JS Arrays"
  },
  {
    "id": "fc_18",
    "chapter": 9,
    "front": "DOM là gì? Đối tượng gốc cao nhất trên trình duyệt là gì?",
    "back": "DOM (Document Object Model) là mô hình hướng đối tượng biểu diễn cấu trúc tài liệu HTML dưới dạng cây phân cấp. Đối tượng toàn cục cao nhất là window, trong đó window.document biểu diễn nội dung trang web.",
    "tag": "JS DOM"
  },
  {
    "id": "fc_19",
    "chapter": 9,
    "front": "Phân biệt innerHTML, innerText và textContent?",
    "back": "innerHTML: Đọc/ghi toàn bộ nội dung gồm cả các thẻ HTML con bên trong.\ninnerText: Đọc/ghi nội dung văn bản hiển thị cho người dùng (tính đến CSS ẩn/hiện display:none).\ntextContent: Đọc/ghi toàn bộ nội dung text thuần túy (nhanh hơn innerText, không parse style CSS).",
    "tag": "JS DOM Content"
  },
  {
    "id": "fc_20",
    "chapter": 9,
    "front": "Tác dụng của event.preventDefault() và event.stopPropagation()?",
    "back": "event.preventDefault(): Ngăn chặn hành vi mặc định của trình duyệt (ví dụ: form không reload trang, thẻ a không nhảy link).\nevent.stopPropagation(): Ngăn chặn sự kiện không nổi bọt (bubbling) lên các phần tử cha bên ngoài.",
    "tag": "JS Events"
  },
  {
    "id": "fc_21",
    "chapter": 10,
    "front": "So sánh $(document).ready() và window.onload?",
    "back": "$(document).ready(): Kích hoạt ngay khi cây cấu trúc DOM dựng xong, không cần đợi hình ảnh tải, có thể gọi nhiều lần.\nwindow.onload: Chờ toàn bộ trang (cả hình ảnh nặng, iframe) tải xong hoàn toàn mới chạy, chỉ gán được 1 hàm duy nhất.",
    "tag": "jQuery Ready"
  },
  {
    "id": "fc_22",
    "chapter": 10,
    "front": "Cú pháp cơ bản của jQuery và ý nghĩa của dấu $?",
    "back": "Cú pháp: $(selector).action()\nDấu $ là ký hiệu viết tắt đại diện cho đối tượng thư viện jQuery (tương đương với chữ jQuery).",
    "tag": "jQuery Syntax"
  },
  {
    "id": "fc_23",
    "chapter": 10,
    "front": "Phương thức .val() trong jQuery dùng làm gì?",
    "back": ".val(): Đọc giá trị hiện tại của phần tử Form (input, select, textarea).\n.val('chuoi_moi'): Gán giá trị mới cho phần tử Form đó.",
    "tag": "jQuery Form"
  },
  {
    "id": "fc_24",
    "chapter": 11,
    "front": "TypeScript là gì? Trình duyệt có chạy trực tiếp file .ts được không?",
    "back": "TypeScript là Superset (tập mẹ) của JavaScript bổ sung định kiểu tĩnh (Static Typing). Trình duyệt KHÔNG THỂ chạy trực tiếp file .ts mà phải dùng trình biên dịch tsc để chuyển hóa (transpile) thành file .js trước.",
    "tag": "TypeScript Basics"
  },
  {
    "id": "fc_25",
    "chapter": 11,
    "front": "Phân biệt private và protected trong Class của TypeScript?",
    "back": "private: Thuộc tính/phương thức chỉ có thể được truy xuất bên trong chính lớp khai báo, lớp con kế thừa KHÔNG THỂ truy xuất được.\nprotected: Cho phép truy xuất bên trong chính lớp đó VÀ các lớp con kế thừa (subclass), nhưng bên ngoài vẫn bị chặn.",
    "tag": "TypeScript OOP"
  },
  {
    "id": "fc_26",
    "chapter": 11,
    "front": "Generics trong TypeScript giải quyết vấn đề gì?",
    "back": "Generics (ví dụ <T>) cho phép viết hàm, interface hoặc class có thể làm việc với nhiều kiểu dữ liệu khác nhau mà vẫn giữ trọn vẹn tính an toàn kiểm tra kiểu (Type Safety), thay vì dùng any làm mất kiểm soát lỗi.",
    "tag": "TypeScript Generics"
  }
];
