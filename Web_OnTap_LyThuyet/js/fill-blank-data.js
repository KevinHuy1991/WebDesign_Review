const FILL_BLANK_QUESTIONS = [
  {
    "id": "fb_c4_01",
    "chapter": 4,
    "topic": "Định nghĩa HTML",
    "type": "theory",
    "difficulty": "Cơ bản",
    "prompt": "Điền từ còn thiếu vào định nghĩa: HTML là viết tắt của HyperText {{BLANK}} Language.",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Nhập từ khóa tiếng Anh...",
        "answers": [
          "Markup",
          "markup"
        ],
        "hint": "Có nghĩa là 'đánh dấu', bắt đầu bằng chữ M"
      }
    ],
    "explanation": "HTML là viết tắt của **HyperText Markup Language** (Ngôn ngữ đánh dấu siêu văn bản), dùng để xây dựng cấu trúc của trang web."
  },
  {
    "id": "fb_c4_02",
    "chapter": 4,
    "topic": "Chuẩn XHTML",
    "type": "theory",
    "difficulty": "Cơ bản",
    "prompt": "Theo định nghĩa trong giáo trình, chuẩn XHTML là sự kết hợp giữa HTML và ngôn ngữ {{BLANK}}.",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Tên ngôn ngữ viết tắt 3 chữ cái...",
        "answers": [
          "XML",
          "xml"
        ],
        "hint": "Extensible Markup Language, viết tắt gồm 3 chữ cái X..."
      }
    ],
    "explanation": "XHTML = **HTML + XML**. XHTML đòi hỏi tính chặt chẽ: tất cả thẻ mở phải có thẻ đóng, tên thẻ viết thường, giá trị thuộc tính phải đặt trong dấu ngoặc kép."
  },
  {
    "id": "fb_c4_03",
    "chapter": 4,
    "topic": "Thẻ liên kết neo (Anchor)",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền giá trị thuộc tính để mở liên kết trong một tab hoặc cửa sổ trình duyệt mới:",
    "codeSnippet": "<a href=\"https://fit.utc2.edu.vn\" target=\"{{BLANK}}\">Trang chủ UTC2</a>",
    "blanks": [
      {
        "placeholder": "Giá trị của target...",
        "answers": [
          "_blank",
          "blank"
        ],
        "hint": "Bắt đầu bằng dấu gạch dưới _, có nghĩa là 'trống'"
      }
    ],
    "explanation": "Thuộc tính `target=\"_blank\"` chỉ thị cho trình duyệt mở trang web được liên kết trong một tab mới hoặc cửa sổ mới (mặc định là `_self` mở trong tab hiện tại)."
  },
  {
    "id": "fb_c4_04",
    "chapter": 4,
    "topic": "Form Upload File",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Khi xây dựng form có chức năng tải file (upload), thuộc tính enctype bắt buộc phải có giá trị là gì?",
    "codeSnippet": "<form action=\"upload.php\" method=\"post\" enctype=\"{{BLANK}}\">\n  <input type=\"file\" name=\"fileUpload\" />\n  <input type=\"submit\" value=\"Tải lên\" />\n</form>",
    "blanks": [
      {
        "placeholder": "Giá trị enctype...",
        "answers": [
          "multipart/form-data",
          "multipart/form-data;"
        ],
        "hint": "Bắt đầu bằng chữ 'multi', phân cách bởi dấu gạch chéo /"
      }
    ],
    "explanation": "Khi form có control `<input type=\"file\">`, bắt buộc phải đặt `enctype=\"multipart/form-data\"` và `method=\"post\"` để dữ liệu file nhị phân được chia thành nhiều phần truyền về server."
  },
  {
    "id": "fb_c4_05",
    "chapter": 4,
    "topic": "Gộp ô trong bảng HTML",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền thuộc tính để gộp 3 cột lại với nhau theo chiều ngang trong thẻ tiêu đề bảng:",
    "codeSnippet": "<tr>\n  <th {{BLANK}}=\"3\">Bảng Điểm Tổng Hợp</th>\n</tr>",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính gộp cột...",
        "answers": [
          "colspan",
          "COLSPAN"
        ],
        "hint": "Viết tắt của 'Column Span'"
      }
    ],
    "explanation": "Thuộc tính `colspan=\"n\"` dùng để gộp n cột lại với nhau theo chiều ngang. Để gộp n hàng theo chiều dọc, ta dùng thuộc tính `rowspan=\"n\"`."
  },
  {
    "id": "fb_c4_06",
    "chapter": 4,
    "topic": "Form Phương thức truyền dữ liệu",
    "type": "theory",
    "difficulty": "Cơ bản",
    "prompt": "Trong thẻ `<form>`, phương thức {{BLANK}} sẽ đính kèm các đối số trực tiếp lên thanh địa chỉ URL sau dấu hỏi chấm (?), bị giới hạn chiều dài và kém bảo mật.",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Tên phương thức HTTP (3 chữ cái)...",
        "answers": [
          "GET",
          "get"
        ],
        "hint": "Phương thức đối lập với POST, gồm 3 chữ cái G..."
      }
    ],
    "explanation": "Phương thức **GET** truyền dữ liệu trên URL nên người dùng nhìn thấy rõ các tham số, bị giới hạn độ dài URL (dưới 2048 ký tự). Ngược lại, phương thức **POST** đóng gói dữ liệu ngầm trong HTTP Body và không bị giới hạn."
  },
  {
    "id": "fb_c4_07",
    "chapter": 4,
    "topic": "Nhóm Radio Button",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Để người dùng chỉ được phép chọn duy nhất 1 trong 2 nút radio (Nam hoặc Nữ), 2 thẻ input này bắt buộc phải có thuộc tính gì giống nhau?",
    "codeSnippet": "<input type=\"radio\" {{BLANK}}=\"gender\" value=\"nam\" /> Nam\n<input type=\"radio\" {{BLANK}}=\"gender\" value=\"nu\" /> Nữ",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính...",
        "answers": [
          "name",
          "NAME"
        ],
        "hint": "Tên định danh của trường nhập liệu (4 chữ cái)"
      }
    ],
    "explanation": "Các nút `<input type=\"radio\">` trong cùng một nhóm bắt buộc phải có cùng thuộc tính `name`. Khi đó, trình duyệt sẽ tự động chỉ cho phép chọn duy nhất 1 nút tại một thời điểm."
  },
  {
    "id": "fb_c4_08",
    "chapter": 4,
    "topic": "Thẻ nhãn Label và liên kết Form Field",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền thuộc tính của thẻ label để khi nhấp vào chữ 'Họ và tên', con trỏ sẽ tự động focus vào ô input:",
    "codeSnippet": "<label {{BLANK}}=\"txtHoTen\">Họ và tên:</label>\n<input type=\"text\" id=\"txtHoTen\" name=\"fullname\" />",
    "blanks": [
      {
        "placeholder": "Thuộc tính liên kết của label...",
        "answers": [
          "for",
          "FOR"
        ],
        "hint": "Từ khóa tiếng Anh có nghĩa là 'dành cho' (3 chữ cái)"
      }
    ],
    "explanation": "Thuộc tính `for=\"id_cua_input\"` trên thẻ `<label>` liên kết nhãn với thẻ input có `id` tương ứng, cải thiện đáng kể trải nghiệm người dùng trên máy tính và điện thoại."
  },
  {
    "id": "fb_c4_09",
    "chapter": 4,
    "topic": "Khung nhóm Fieldset & Tiêu đề",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thẻ HTML dùng để đặt tiêu đề cho khung nhóm fieldset:",
    "codeSnippet": "<fieldset>\n  <{{BLANK}}>Thông Tin Cá Nhân</{{BLANK}}>\n  <p>Nhập email: <input type=\"text\" /></p>\n</fieldset>",
    "blanks": [
      {
        "placeholder": "Tên thẻ tiêu đề...",
        "answers": [
          "legend",
          "LEGEND"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'huyền thoại' hoặc 'chú giải' (6 chữ cái)"
      }
    ],
    "explanation": "Thẻ `<legend>` luôn là phần tử con đầu tiên bên trong `<fieldset>` dùng để gán tiêu đề nhãn cho toàn bộ khung nhóm viền đó."
  },
  {
    "id": "fb_c4_10",
    "chapter": 4,
    "topic": "Thẻ hình ảnh & Thuộc tính bắt buộc cho trợ năng",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thuộc tính dùng để hiển thị văn bản thay thế khi hình ảnh bị lỗi hoặc cho trình đọc màn hình:",
    "codeSnippet": "<img src=\"logo_utc2.png\" {{BLANK}}=\"Logo Trường ĐH Giao Thông Vận Tải - Phân hiệu UTC2\" />",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính...",
        "answers": [
          "alt",
          "ALT"
        ],
        "hint": "Viết tắt của 'Alternative text' (3 chữ cái)"
      }
    ],
    "explanation": "Thuộc tính `alt` (Alternative text) cung cấp văn bản thay thế khi hình ảnh không tải được và là tiêu chuẩn bắt buộc trong chuẩn XHTML cũng như khả năng tiếp cận (Accessibility - a11y)."
  },
  {
    "id": "fb_c5_01",
    "chapter": 5,
    "topic": "Thẻ cấu trúc ngữ nghĩa Header & Nav",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thẻ ngữ nghĩa HTML5 chuyên dụng để chứa các liên kết điều hướng menu của trang web:",
    "codeSnippet": "<{{BLANK}}>\n  <a href=\"#home\">Trang chủ</a>\n  <a href=\"#about\">Giới thiệu</a>\n  <a href=\"#contact\">Liên hệ</a>\n</{{BLANK}}>",
    "blanks": [
      {
        "placeholder": "Tên thẻ HTML5...",
        "answers": [
          "nav",
          "NAV"
        ],
        "hint": "Viết tắt của Navigation (3 chữ cái)"
      }
    ],
    "explanation": "Thẻ `<nav>` trong HTML5 đại diện cho một khối chứa các liên kết điều hướng quan trọng của trang web, thay thế cho cách viết cũ `<div class=\"nav\">`."
  },
  {
    "id": "fb_c5_02",
    "chapter": 5,
    "topic": "Thẻ cấu trúc ngữ nghĩa Nội dung phụ Aside",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thẻ ngữ nghĩa HTML5 dùng để định nghĩa phần nội dung phụ (sidebar, quảng cáo, bài viết liên quan):",
    "codeSnippet": "<{{BLANK}}>\n  <h3>Tin nổi bật</h3>\n  <p>Lịch thi học kỳ môn Thiết kế Web...</p>\n</{{BLANK}}>",
    "blanks": [
      {
        "placeholder": "Tên thẻ HTML5...",
        "answers": [
          "aside",
          "ASIDE"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'bên cạnh', bắt đầu bằng chữ 'a' (5 chữ cái)"
      }
    ],
    "explanation": "Thẻ `<aside>` đại diện cho phần nội dung có liên quan gián tiếp hoặc phụ trợ cho nội dung chính xung quanh (thường dùng làm sidebar cột bên hoặc hộp ghi chú)."
  },
  {
    "id": "fb_c5_03",
    "chapter": 5,
    "topic": "Đa phương tiện Video HTML5",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên thuộc tính để hiển thị ảnh đại diện (ảnh bìa) của video trước khi người dùng bấm phát:",
    "codeSnippet": "<video width=\"640\" height=\"360\" controls {{BLANK}}=\"banner.jpg\">\n  <source src=\"movie.mp4\" type=\"video/mp4\" />\n</video>",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính ảnh bìa...",
        "answers": [
          "poster",
          "POSTER"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'áp phích' / 'poster' (6 chữ cái)"
      }
    ],
    "explanation": "Thuộc tính `poster=\"url_anh\"` trong thẻ `<video>` chỉ định một hình ảnh sẽ được hiển thị trong khung video trong khi video đang tải hoặc trước khi người dùng bấm Play."
  },
  {
    "id": "fb_c5_04",
    "chapter": 5,
    "topic": "Đồ họa Canvas Context 2D",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên phương thức của phần tử Canvas để lấy ngữ cảnh vẽ đồ họa 2 chiều bằng JavaScript:",
    "codeSnippet": "const canvas = document.getElementById(\"myCanvas\");\nconst ctx = canvas.{{BLANK}}(\"2d\");\nctx.fillStyle = \"blue\";\nctx.fillRect(0, 0, 100, 100);",
    "blanks": [
      {
        "placeholder": "Tên phương thức...",
        "answers": [
          "getContext",
          "getcontext",
          "getContext()"
        ],
        "hint": "Bắt đầu bằng chữ 'get', tiếp theo là từ 'Context'"
      }
    ],
    "explanation": "Phương thức `canvas.getContext('2d')` trả về đối tượng vẽ 2D rendering context, cung cấp các thuộc tính và hàm để vẽ đường thẳng, hình chữ nhật, hình tròn và điểm ảnh."
  },
  {
    "id": "fb_c5_05",
    "chapter": 5,
    "topic": "Lưu trữ Web Storage Client",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Để lưu dữ liệu vĩnh viễn trên trình duyệt của máy khách (không bị mất khi đóng tab), ta sử dụng đối tượng nào?",
    "codeSnippet": "{{BLANK}}.setItem(\"authToken\", \"xyz123abc\");\nconst token = {{BLANK}}.getItem(\"authToken\");",
    "blanks": [
      {
        "placeholder": "Tên đối tượng Web Storage...",
        "answers": [
          "localStorage",
          "window.localStorage"
        ],
        "hint": "Gồm từ 'local' và 'Storage' viết dính liền theo camelCase"
      }
    ],
    "explanation": "`localStorage` lưu trữ dữ liệu không có thời hạn hết hạn (vĩnh viễn cho đến khi bị xóa bằng code hoặc xóa dữ liệu duyệt web). Khác với `sessionStorage` chỉ tồn tại trong phiên tab hiện tại."
  },
  {
    "id": "fb_c5_06",
    "chapter": 5,
    "topic": "Loại Input mới: Số nguyên và giới hạn",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền loại type và thuộc tính để chỉ cho phép nhập số từ 1 đến 100:",
    "codeSnippet": "<input type=\"{{BLANK}}\" min=\"1\" max=\"100\" step=\"1\" />",
    "blanks": [
      {
        "placeholder": "Tên giá trị type...",
        "answers": [
          "number",
          "NUMBER"
        ],
        "hint": "Từ tiếng Anh chỉ 'số' (6 chữ cái)"
      }
    ],
    "explanation": "`<input type=\"number\">` tạo ô nhập số, kết hợp với các thuộc tính `min, max, step` để giới hạn khoảng giá trị hợp lệ."
  },
  {
    "id": "fb_c5_07",
    "chapter": 5,
    "topic": "Hình minh họa Figure & Chú thích",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên thẻ HTML5 dùng để đặt dòng chú thích cho hình ảnh nằm bên trong thẻ <figure>:",
    "codeSnippet": "<figure>\n  <img src=\"chart.png\" alt=\"Biểu đồ phân tích\" />\n  <{{BLANK}}>Hình 1: Biểu đồ tăng trưởng sinh viên</{{BLANK}}>\n</figure>",
    "blanks": [
      {
        "placeholder": "Tên thẻ chú thích...",
        "answers": [
          "figcaption",
          "FIGCAPTION"
        ],
        "hint": "Ghép giữa 'fig' (figure) và 'caption' (chú thích)"
      }
    ],
    "explanation": "Thẻ `<figcaption>` dùng để chứa dòng mô tả chú thích đi kèm cho phần tử cha `<figure>`, giúp trang web có cấu trúc ngữ nghĩa chuẩn xác."
  },
  {
    "id": "fb_c5_08",
    "chapter": 5,
    "topic": "Thuộc tính Placeholder trong Form",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thuộc tính dùng để hiển thị dòng chữ mờ gợi ý trong ô input trước khi người dùng gõ phím:",
    "codeSnippet": "<input type=\"email\" {{BLANK}}=\"ví dụ: sinhvien@utc2.edu.vn\" required />",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính gợi ý...",
        "answers": [
          "placeholder",
          "PLACEHOLDER"
        ],
        "hint": "Từ tiếng Anh ghép giữa 'place' và 'holder' (11 chữ cái)"
      }
    ],
    "explanation": "Thuộc tính `placeholder` cung cấp dòng gợi ý ngắn gọn hiển thị mờ trong ô nhập liệu và sẽ tự động biến mất ngay khi người dùng bắt đầu nhập ký tự."
  },
  {
    "id": "fb_c6_01",
    "chapter": 6,
    "topic": "Liên kết CSS bên ngoài (External CSS)",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền giá trị thuộc tính rel vào thẻ link để nhúng file CSS ngoại trú vào trang HTML:",
    "codeSnippet": "<head>\n  <link {{BLANK}}=\"stylesheet\" href=\"css/style.css\" />\n</head>",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính quan hệ...",
        "answers": [
          "rel",
          "REL"
        ],
        "hint": "Viết tắt của Relationship (3 chữ cái)"
      }
    ],
    "explanation": "Thuộc tính `rel=\"stylesheet\"` khai báo mối quan hệ giữa tài liệu hiện tại và file được liên kết là một bảng định kiểu CSS."
  },
  {
    "id": "fb_c6_02",
    "chapter": 6,
    "topic": "Mô hình hộp CSS Box Model",
    "type": "theory",
    "difficulty": "Cơ bản",
    "prompt": "Mô hình hộp CSS (Box Model) bao gồm 4 thành phần tính từ trong ra ngoài lần lượt là: Content, {{BLANK}}, Border và Margin.",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Thành phần thứ 2...",
        "answers": [
          "Padding",
          "padding"
        ],
        "hint": "Khoảng đệm nằm giữa nội dung và đường viền (7 chữ cái)"
      }
    ],
    "explanation": "Thứ tự 4 lớp từ trong ra ngoài của CSS Box Model là: **Content** (Nội dung) -> **Padding** (Khoảng đệm trong) -> **Border** (Đường viền) -> **Margin** (Khoảng cách lề ngoài)."
  },
  {
    "id": "fb_c6_03",
    "chapter": 6,
    "topic": "Độ ưu tiên cao nhất: !important",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền từ khóa đặc biệt trong CSS giúp quy tắc định kiểu này có độ ưu tiên cao nhất, ghi đè lên mọi quy tắc khác:",
    "codeSnippet": "p {\n  color: #10b981 {{BLANK}};\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa ưu tiên tối cao...",
        "answers": [
          "!important",
          "! important"
        ],
        "hint": "Bắt đầu bằng dấu chấm than ! và từ 'important'"
      }
    ],
    "explanation": "`!important` là cờ chỉ thị độ ưu tiên tối thượng trong CSS. Nó sẽ ghi đè cả Inline style và ID selector. Tuy nhiên nên hạn chế lạm dụng vì gây khó khăn cho việc bảo trì mã nguồn sau này."
  },
  {
    "id": "fb_c6_04",
    "chapter": 6,
    "topic": "Thuộc tính Box-Sizing",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền giá trị thuộc tính để width và height đã bao gồm cả phần padding và border, không làm phình kích thước hộp:",
    "codeSnippet": "* {\n  box-sizing: {{BLANK}};\n}",
    "blanks": [
      {
        "placeholder": "Giá trị box-sizing...",
        "answers": [
          "border-box",
          "border-box;"
        ],
        "hint": "Gồm từ 'border' và 'box' nối nhau bằng dấu gạch ngang"
      }
    ],
    "explanation": "`box-sizing: border-box;` là chuẩn thiết kế giao diện hiện đại, giúp tổng chiều rộng của khối luôn đúng bằng `width` khai báo, không bị cộng dồn thêm padding và border."
  },
  {
    "id": "fb_c6_05",
    "chapter": 6,
    "topic": "Định vị tuyệt đối Position Absolute",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Để một phần tử con định vị `position: absolute` có thể neo tọa độ theo phần tử cha, phần tử cha phải có thuộc tính position là gì?",
    "codeSnippet": ".parent {\n  position: {{BLANK}}; /* Làm mốc tọa độ cho con */\n}\n.child {\n  position: absolute;\n  top: 0;\n  right: 0;\n}",
    "blanks": [
      {
        "placeholder": "Giá trị position của thẻ cha...",
        "answers": [
          "relative",
          "RELATIVE"
        ],
        "hint": "Định vị tương đối (8 chữ cái)"
      }
    ],
    "explanation": "Kỹ thuật kinh điển: Cha `position: relative` - Con `position: absolute`. Phần tử con sẽ lấy khung bao của cha làm gốc tọa độ (0, 0) để căn chỉnh top/right/bottom/left."
  },
  {
    "id": "fb_c6_06",
    "chapter": 6,
    "topic": "Căn giữa phần tử khối bằng Margin",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền giá trị margin để căn giữa một khối có kích thước xác định theo chiều ngang:",
    "codeSnippet": ".container {\n  width: 960px;\n  margin: 0 {{BLANK}};\n}",
    "blanks": [
      {
        "placeholder": "Giá trị tự động...",
        "answers": [
          "auto",
          "AUTO"
        ],
        "hint": "Từ tiếng Anh chỉ 'tự động' (4 chữ cái)"
      }
    ],
    "explanation": "`margin: 0 auto;` (margin trên/dưới = 0, lề trái và phải tự động chia đều khoảng cách còn thừa) dùng để canh giữa một khối block theo chiều ngang."
  },
  {
    "id": "fb_c6_07",
    "chapter": 6,
    "topic": "Xóa dòng chảy Clear Float",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền thuộc tính CSS dùng để hủy bỏ dòng chảy tràn (chống trôi chữ) sau các phần tử đã áp dụng `float: left` hoặc `float: right`:",
    "codeSnippet": ".clearfix {\n  {{BLANK}}: both;\n}",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính CSS...",
        "answers": [
          "clear",
          "CLEAR"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'xóa / làm sạch' (5 chữ cái)"
      }
    ],
    "explanation": "Thuộc tính `clear: both;` (hoặc `clear: left; / clear: right;`) dùng để ngăn không cho phần tử đứng kế bên các phần tử trôi nổi phía trước."
  },
  {
    "id": "fb_c6_08",
    "chapter": 6,
    "topic": "Độ ưu tiên của Bộ chọn ID so với Class",
    "type": "theory",
    "difficulty": "Cơ bản",
    "prompt": "Trong CSS Specificity, bộ chọn ID (#myId) có điểm số ưu tiên cao hơn bộ chọn {{BLANK}} (.myClass).",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Tên loại bộ chọn (tiếng Anh hoặc Việt)...",
        "answers": [
          "Class",
          "class",
          "lớp"
        ],
        "hint": "Bắt đầu bằng dấu chấm . trong CSS"
      }
    ],
    "explanation": "Bộ chọn ID có điểm ưu tiên là (0, 1, 0, 0), trong khi bộ chọn Class chỉ có điểm ưu tiên là (0, 0, 1, 0). Do đó ID luôn ghi đè định dạng của Class."
  },
  {
    "id": "fb_c7_01",
    "chapter": 7,
    "topic": "Bo góc tròn hoàn hảo Border-Radius",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền giá trị vào thuộc tính border-radius để biến một avatar hình vuông có width=height thành hình tròn hoàn hảo:",
    "codeSnippet": ".avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: {{BLANK}};\n}",
    "blanks": [
      {
        "placeholder": "Giá trị phần trăm...",
        "answers": [
          "50%",
          "50 %"
        ],
        "hint": "Nửa phần trăm: 5..."
      }
    ],
    "explanation": "Khi một phần tử có tỉ lệ 1:1 (chiều rộng bằng chiều cao), đặt `border-radius: 50%;` sẽ bo tròn đều các góc tạo thành hình tròn hoàn hảo."
  },
  {
    "id": "fb_c7_02",
    "chapter": 7,
    "topic": "Bố cục Flexbox: Căn chỉnh trục chính",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thuộc tính Flexbox dùng để căn chỉnh và phân bổ khoảng cách các phần tử con dọc theo trục chính (Main Axis):",
    "codeSnippet": ".navbar {\n  display: flex;\n  {{BLANK}}: space-between;\n  align-items: center;\n}",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính Flexbox...",
        "answers": [
          "justify-content",
          "justifycontent"
        ],
        "hint": "Bắt đầu bằng từ 'justify', nối với từ 'content'"
      }
    ],
    "explanation": "`justify-content` căn chỉnh các phần tử trên trục chính (Main Axis). Ví dụ `space-between` đẩy phần tử đầu sang sát mép trái, phần tử cuối sang sát mép phải."
  },
  {
    "id": "fb_c7_03",
    "chapter": 7,
    "topic": "Bố cục Flexbox: Căn chỉnh trục vuông góc",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thuộc tính Flexbox dùng để căn giữa các phần tử theo trục vuông góc (Cross Axis - thường là chiều dọc):",
    "codeSnippet": ".container {\n  display: flex;\n  justify-content: center;\n  {{BLANK}}: center;\n}",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính...",
        "answers": [
          "align-items",
          "alignitems"
        ],
        "hint": "Bắt đầu bằng 'align', nối với 'items'"
      }
    ],
    "explanation": "`align-items: center;` căn giữa tất cả các con theo trục vuông góc (Cross Axis). Kết hợp với `justify-content: center;` tạo nên kỹ thuật căn giữa tuyệt đối nhanh nhất trong CSS."
  },
  {
    "id": "fb_c7_04",
    "chapter": 7,
    "topic": "Hoạt ảnh CSS3 @keyframes",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền từ khóa CSS3 dùng để định nghĩa các mốc khung hình chuyển động của hoạt ảnh (animation):",
    "codeSnippet": "@{{BLANK}} spinAnimation {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
    "blanks": [
      {
        "placeholder": "Quy tắc @ (từ khóa)...",
        "answers": [
          "keyframes",
          "KEYFRAMES"
        ],
        "hint": "Ghép giữa 'key' (khóa) và 'frames' (khung hình)"
      }
    ],
    "explanation": "`@keyframes` định nghĩa chuỗi hoạt ảnh chuyển đổi các thuộc tính CSS qua từng mốc thời gian (như 0%, 50%, 100% hoặc from... to)."
  },
  {
    "id": "fb_c7_05",
    "chapter": 7,
    "topic": "Biến đổi 2D Transform: Xoay",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền hàm biến đổi 2D dùng để xoay phần tử 45 độ theo chiều kim đồng hồ:",
    "codeSnippet": ".icon-gear:hover {\n  transform: {{BLANK}}(45deg);\n}",
    "blanks": [
      {
        "placeholder": "Tên hàm biến đổi...",
        "answers": [
          "rotate",
          "ROTATE"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'xoay vòng' (6 chữ cái)"
      }
    ],
    "explanation": "Hàm `rotate(angle)` trong thuộc tính `transform` xoay phần tử một góc xác định quanh tâm (đơn vị deg - degree hoặc rad)."
  },
  {
    "id": "fb_c7_06",
    "chapter": 7,
    "topic": "Phần tử giả Pseudo-element ::before",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Khi sử dụng phần tử giả ::before hoặc ::after, thuộc tính nào là BẮT BUỘC phải khai báo để phần tử ảo này hiển thị?",
    "codeSnippet": ".badge::before {\n  {{BLANK}}: \"\"; /* Thuộc tính bắt buộc */\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: red;\n}",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính bắt buộc...",
        "answers": [
          "content",
          "CONTENT"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'nội dung' (7 chữ cái)"
      }
    ],
    "explanation": "Khi dùng `::before` hoặc `::after`, thuộc tính `content: \"\"` là bắt buộc. Nếu thiếu thuộc tính này, trình duyệt sẽ hoàn toàn không tạo và hiển thị phần tử giả."
  },
  {
    "id": "fb_c7_07",
    "chapter": 7,
    "topic": "Truy vấn Media Queries cho di động",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền từ khóa CSS để viết truy vấn đáp ứng cho màn hình có chiều rộng tối đa 768px:",
    "codeSnippet": "@{{BLANK}} screen and (max-width: 768px) {\n  .sidebar { display: none; }\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa @ quy vấn...",
        "answers": [
          "media",
          "MEDIA"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'truyền thông / đa phương tiện' (5 chữ cái)"
      }
    ],
    "explanation": "Quy tắc `@media` là trái tim của Responsive Web Design, áp dụng các khối lệnh CSS riêng biệt tùy theo kích thước màn hình hoặc thiết bị hiển thị."
  },
  {
    "id": "fb_c7_08",
    "chapter": 7,
    "topic": "Bộ chọn con trực tiếp trong CSS3",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền ký hiệu bộ chọn con trực tiếp (chỉ chọn con cấp 1 ngay dưới, không chọn cháu chắt):",
    "codeSnippet": "ul {{BLANK}} li {\n  font-weight: bold;\n}",
    "blanks": [
      {
        "placeholder": "Ký hiệu toán tử bộ chọn con...",
        "answers": [
          ">"
        ],
        "hint": "Ký hiệu dấu lớn hơn >"
      }
    ],
    "explanation": "Toán tử `>` là bộ chọn con trực tiếp (Child Combinator). Khác với khoảng trắng (Descendant Selector) chọn mọi cấp hậu duệ, `parent > child` chỉ chọn các phần tử con ngay dưới."
  },
  {
    "id": "fb_c7_09",
    "chapter": 7,
    "topic": "Lớp giả chọn hàng chẵn lẻ :nth-child",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền từ khóa vào lớp giả :nth-child() để tô màu nền cho tất cả các hàng chẵn trong bảng:",
    "codeSnippet": "tbody tr:nth-child({{BLANK}}) {\n  background-color: #f1f5f9;\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa hàng chẵn...",
        "answers": [
          "even",
          "2n"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'chẵn' (4 chữ cái), hoặc công thức 2n"
      }
    ],
    "explanation": "`:nth-child(even)` (hoặc `2n`) chọn các phần tử con ở chỉ số chẵn (2, 4, 6...). Để chọn hàng lẻ, ta dùng `:nth-child(odd)` hoặc `2n+1`."
  },
  {
    "id": "fb_c8_01",
    "chapter": 8,
    "topic": "Khai báo hằng số trong ES6",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền từ khóa khai báo biến hằng số trong chuẩn ES6 mà sau khi gán giá trị sẽ không thể gán lại:",
    "codeSnippet": "{{BLANK}} PI = 3.14159;\n// PI = 3.15; // Báo lỗi TypeError!",
    "blanks": [
      {
        "placeholder": "Từ khóa hằng số...",
        "answers": [
          "const",
          "CONST"
        ],
        "hint": "Viết tắt của 'constant' (5 chữ cái)"
      }
    ],
    "explanation": "Từ khóa `const` (Constant) trong ES6 dùng để khai báo biến có giá trị không đổi sau lần gán đầu tiên và có phạm vi khối (Block Scope)."
  },
  {
    "id": "fb_c8_02",
    "chapter": 8,
    "topic": "Toán tử so sánh nghiêm ngặt",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền toán tử so sánh nghiêm ngặt trong JavaScript để kiểm tra bằng cả về giá trị lẫn kiểu dữ liệu mà không tự ép kiểu:",
    "codeSnippet": "if (age {{BLANK}} \"20\") {\n  console.log(\"Cùng kiểu và cùng giá trị!\");\n}",
    "blanks": [
      {
        "placeholder": "Toán tử so sánh (3 ký tự)...",
        "answers": [
          "==="
        ],
        "hint": "Ba dấu bằng liên tiếp ==="
      }
    ],
    "explanation": "Toán tử `===` (Strict Equality) so sánh cả giá trị và kiểu dữ liệu. Ví dụ `5 === '5'` sẽ trả về `false`, trong khi `5 == '5'` trả về `true` do toán tử `==` tự động ép kiểu chuỗi thành số."
  },
  {
    "id": "fb_c8_03",
    "chapter": 8,
    "topic": "Kiểu dữ liệu đặc biệt NaN",
    "type": "theory",
    "difficulty": "Trung bình",
    "prompt": "Trong JavaScript, khi thực hiện phép toán không hợp lệ (ví dụ: `10 * 'abc'`), kết quả trả về là giá trị {{BLANK}} (Not-a-Number).",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Giá trị đặc biệt viết tắt...",
        "answers": [
          "NaN",
          "nan"
        ],
        "hint": "Viết tắt 3 chữ cái của Not-a-Number (N...)"
      }
    ],
    "explanation": "`NaN` (Not-a-Number) đại diện cho một phép toán số học không hợp lệ. Điều thú vị là `typeof NaN` trong JavaScript vẫn trả về kiểu `'number'`."
  },
  {
    "id": "fb_c8_04",
    "chapter": 8,
    "topic": "Hộp thoại xác nhận Confirm",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên hàm hộp thoại có sẵn hiển thị hai nút OK và Cancel để người dùng xác nhận thao tác:",
    "codeSnippet": "if (window.{{BLANK}}(\"Bạn có chắc chắn muốn xóa bài viết này không?\")) {\n  xoaBaiViet();\n}",
    "blanks": [
      {
        "placeholder": "Tên hàm hộp thoại...",
        "answers": [
          "confirm",
          "CONFIRM"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'xác nhận' (7 chữ cái)"
      }
    ],
    "explanation": "Hàm `confirm(thong_diep)` mở hộp thoại tương tác với hai nút OK (trả về `true`) và Cancel (trả về `false`), chặn luồng thực thi cho đến khi người dùng lựa chọn."
  },
  {
    "id": "fb_c8_05",
    "chapter": 8,
    "topic": "Thêm phần tử vào cuối Mảng (push)",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức của Mảng (Array) dùng để thêm một hoặc nhiều phần tử mới vào vị trí cuối cùng của mảng:",
    "codeSnippet": "let dsDiem = [7, 8, 9];\ndsDiem.{{BLANK}}(10); // dsDiem lúc này là [7, 8, 9, 10]",
    "blanks": [
      {
        "placeholder": "Tên phương thức mảng...",
        "answers": [
          "push",
          "PUSH"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'đẩy vào' (4 chữ cái)"
      }
    ],
    "explanation": "Phương thức `array.push(item)` thêm phần tử vào cuối mảng và trả về độ dài mới của mảng. Để xóa phần tử ở cuối mảng, ta dùng phương thức `pop()`."
  },
  {
    "id": "fb_c8_06",
    "chapter": 8,
    "topic": "Biến đổi Mảng với hàm map()",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên phương thức của mảng dùng để lặp qua từng phần tử và trả về một mảng mới chứa các giá trị đã được biến đổi:",
    "codeSnippet": "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.{{BLANK}}(n => n * 2); // [2, 4, 6, 8]",
    "blanks": [
      {
        "placeholder": "Tên phương thức mảng...",
        "answers": [
          "map",
          "MAP"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'ánh xạ' (3 chữ cái)"
      }
    ],
    "explanation": "`array.map(callback)` duyệt qua từng phần tử và tạo ra một **mảng mới** có cùng số phần tử với giá trị trả về từ hàm biến đổi, không làm thay đổi mảng ban đầu."
  },
  {
    "id": "fb_c8_07",
    "chapter": 8,
    "topic": "Thoát khỏi cấu trúc Switch-Case",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền từ khóa bắt buộc phải có ở cuối mỗi nhánh 'case' trong cấu trúc switch để ngăn không cho lệnh bị trôi sang case tiếp theo:",
    "codeSnippet": "switch (day) {\n  case 1:\n    console.log(\"Chủ Nhật\");\n    {{BLANK}};\n  case 2:\n    console.log(\"Thứ Hai\");\n    {{BLANK}};\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa ngắt lệnh...",
        "answers": [
          "break",
          "BREAK"
        ],
        "hint": "Từ tiếng Anh chỉ 'ngắt / bẻ gãy' (5 chữ cái)"
      }
    ],
    "explanation": "Từ khóa `break` dùng để lập tức thoát khỏi khối lệnh `switch...case`. Nếu quên từ khóa này, trình duyệt sẽ tiếp tục thực thi các câu lệnh ở các case bên dưới (hiện tượng Fall-through)."
  },
  {
    "id": "fb_c8_08",
    "chapter": 8,
    "topic": "Hàm mũi tên Arrow Function ES6",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền ký hiệu mũi tên trong cú pháp khai báo Arrow Function của chuẩn ES6:",
    "codeSnippet": "const tinhTong = (a, b) {{BLANK}} a + b;",
    "blanks": [
      {
        "placeholder": "Ký hiệu mũi tên (2 ký tự)...",
        "answers": [
          "=>"
        ],
        "hint": "Dấu bằng và dấu lớn hơn =>"
      }
    ],
    "explanation": "Cú pháp Arrow Function `(params) => expression` mang lại cách viết hàm ngắn gọn trong ES6 và không tự định nghĩa ngữ cảnh con trỏ `this` riêng."
  },
  {
    "id": "fb_c8_09",
    "chapter": 8,
    "topic": "Xóa phần tử đầu tiên của Mảng",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên phương thức dùng để xóa và trả về phần tử nằm ở vị trí đầu tiên (chỉ số 0) của một mảng:",
    "codeSnippet": "let fruits = [\"Táo\", \"Cam\", \"Chuối\"];\nlet first = fruits.{{BLANK}}(); // first là \"Táo\", mảng còn [\"Cam\", \"Chuối\"]",
    "blanks": [
      {
        "placeholder": "Tên phương thức...",
        "answers": [
          "shift",
          "SHIFT"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'dịch chuyển' (5 chữ cái)"
      }
    ],
    "explanation": "`shift()` xóa phần tử đầu mảng và dời tất cả các phần tử sau về một nấc. Ngược lại, `unshift(item)` dùng để thêm phần tử vào đầu mảng."
  },
  {
    "id": "fb_c9_01",
    "chapter": 9,
    "topic": "Truy xuất phần tử theo ID",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức DOM dùng để tìm kiếm phần tử HTML duy nhất thông qua định danh ID của nó:",
    "codeSnippet": "const titleElem = document.{{BLANK}}(\"mainTitle\");",
    "blanks": [
      {
        "placeholder": "Tên phương thức DOM...",
        "answers": [
          "getElementById",
          "getelementbyid"
        ],
        "hint": "Quy tắc camelCase: get Element By Id"
      }
    ],
    "explanation": "`document.getElementById('id_name')` là phương thức truy xuất nhanh nhất để lấy phần tử có id khớp trên trang web (trả về `null` nếu không tìm thấy)."
  },
  {
    "id": "fb_c9_02",
    "chapter": 9,
    "topic": "Truy xuất phần tử với QuerySelector",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức DOM trả về phần tử đầu tiên thỏa mãn bộ chọn CSS truyền vào:",
    "codeSnippet": "const activeBtn = document.{{BLANK}}(\".btn.active\");",
    "blanks": [
      {
        "placeholder": "Tên phương thức...",
        "answers": [
          "querySelector",
          "queryselector"
        ],
        "hint": "Gồm từ 'query' và 'Selector' viết theo camelCase"
      }
    ],
    "explanation": "`document.querySelector('css_selector')` nhận vào chuỗi CSS Selector bất kỳ và trả về Element đầu tiên tìm thấy. Để lấy toàn bộ danh sách, ta dùng `querySelectorAll()`."
  },
  {
    "id": "fb_c9_03",
    "chapter": 9,
    "topic": "Thay đổi mã HTML con với innerHTML",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thuộc tính DOM dùng để lấy hoặc thiết lập mã HTML nằm bên trong một phần tử:",
    "codeSnippet": "document.getElementById(\"contentBox\").{{BLANK}} = \"<h3>Tiêu đề mới</h3>\";",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính DOM...",
        "answers": [
          "innerHTML",
          "innerhtml"
        ],
        "hint": "Gồm từ 'inner' và 'HTML' (viết HOA HTML)"
      }
    ],
    "explanation": "Thuộc tính `innerHTML` cho phép đọc hoặc gán trực tiếp chuỗi HTML và trình duyệt sẽ phân tích cú pháp để render các thẻ con. Khác với `textContent` chỉ gán văn bản thô."
  },
  {
    "id": "fb_c9_04",
    "chapter": 9,
    "topic": "Đổi màu nền qua thuộc tính style",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên thuộc tính style trong JavaScript (theo quy tắc camelCase) để thay đổi màu nền của phần tử thành màu đỏ:",
    "codeSnippet": "const box = document.getElementById(\"box\");\nbox.style.{{BLANK}} = \"red\";",
    "blanks": [
      {
        "placeholder": "Tên thuộc tính style camelCase...",
        "answers": [
          "backgroundColor",
          "backgroundcolor"
        ],
        "hint": "background-color trong CSS chuyển thành camelCase trong JS"
      }
    ],
    "explanation": "Trong JavaScript, các thuộc tính CSS có dấu gạch ngang sẽ được chuyển thành định dạng **camelCase** (ví dụ `background-color` -> `backgroundColor`, `font-size` -> `fontSize`)."
  },
  {
    "id": "fb_c9_05",
    "chapter": 9,
    "topic": "Đăng ký sự kiện với addEventListener",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức DOM chuẩn để gắn một hàm xử lý sự kiện vào nút bấm:",
    "codeSnippet": "const submitBtn = document.getElementById(\"btnSubmit\");\nsubmitBtn.{{BLANK}}(\"click\", function() {\n  alert(\"Đã bấm nút!\");\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức gắn sự kiện...",
        "answers": [
          "addEventListener",
          "addeventlistener"
        ],
        "hint": "Quy tắc camelCase: add Event Listener"
      }
    ],
    "explanation": "`addEventListener('event_type', callback)` là chuẩn đăng ký sự kiện tốt nhất, cho phép gắn nhiều hàm xử lý độc lập cho cùng một sự kiện và quản lý cơ chế nổi bọt (bubbling)."
  },
  {
    "id": "fb_c9_06",
    "chapter": 9,
    "topic": "Ngăn chặn hành vi mặc định Event PreventDefault",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên phương thức của đối tượng event dùng để ngăn chặn hành vi mặc định của trình duyệt (như không reload trang khi submit form):",
    "codeSnippet": "form.addEventListener(\"submit\", function(e) {\n  e.{{BLANK}}(); // Ngăn trình duyệt reload lại trang\n  xuLyDangNhap();\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức ngăn chặn...",
        "answers": [
          "preventDefault",
          "preventdefault",
          "preventDefault()"
        ],
        "hint": "Gồm từ 'prevent' (ngăn chặn) và 'Default' (mặc định)"
      }
    ],
    "explanation": "`event.preventDefault()` hủy bỏ hành vi mặc định của sự kiện nếu nó có thể hủy được (ví dụ: submit form không tải lại trang, click vào thẻ `<a>` không chuyển link)."
  },
  {
    "id": "fb_c9_07",
    "chapter": 9,
    "topic": "Bật/Tắt Class với classList",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên phương thức của classList để tự động thêm class nếu chưa có, hoặc xóa class đi nếu đã có sẵn (bật/tắt trạng thái):",
    "codeSnippet": "const menu = document.getElementById(\"mobileMenu\");\nmenu.classList.{{BLANK}}(\"show\");",
    "blanks": [
      {
        "placeholder": "Tên phương thức bật tắt...",
        "answers": [
          "toggle",
          "TOGGLE"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'chuyển đổi / công tắc' (6 chữ cái)"
      }
    ],
    "explanation": "`element.classList.toggle('className')` kiểm tra xem phần tử đã có class đó chưa: nếu có thì xóa đi, nếu chưa có thì thêm vào, cực kỳ thuận tiện khi làm nút đóng mở menu."
  },
  {
    "id": "fb_c9_08",
    "chapter": 9,
    "topic": "Tạo phần tử HTML mới createElement",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức DOM dùng để tạo mới một phần tử thẻ HTML vào bộ nhớ:",
    "codeSnippet": "const newParagraph = document.{{BLANK}}(\"p\");\nnewParagraph.textContent = \"Đoạn văn được tạo động!\";\ndocument.body.appendChild(newParagraph);",
    "blanks": [
      {
        "placeholder": "Tên phương thức tạo thẻ...",
        "answers": [
          "createElement",
          "createelement"
        ],
        "hint": "Gồm từ 'create' và 'Element' viết theo camelCase"
      }
    ],
    "explanation": "`document.createElement(tagName)` tạo ra một đối tượng Element Node mới trong bộ nhớ. Sau đó ta có thể dùng `appendChild()` hoặc `insertBefore()` để đưa nó vào cây DOM hiển thị."
  },
  {
    "id": "fb_c9_09",
    "chapter": 9,
    "topic": "Lặp vô tận theo chu kỳ với setInterval",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên hàm BOM của window dùng để thực thi lặp đi lặp lại một hàm sau mỗi khoảng thời gian mili-giây (thường dùng làm đồng hồ):",
    "codeSnippet": "window.{{BLANK}}(function() {\n  capNhatDongHo();\n}, 1000); // Lặp lại mỗi 1 giây",
    "blanks": [
      {
        "placeholder": "Tên hàm hẹn giờ lặp lại...",
        "answers": [
          "setInterval",
          "setinterval"
        ],
        "hint": "Gồm từ 'set' và 'Interval' viết theo camelCase"
      }
    ],
    "explanation": "`setInterval(func, delay)` gọi hàm `func` lặp lại liên tục sau mỗi `delay` mili-giây cho đến khi bị hủy bởi hàm `clearInterval(timerId)`."
  },
  {
    "id": "fb_c9_10",
    "chapter": 9,
    "topic": "Dừng nổi bọt sự kiện stopPropagation",
    "type": "code",
    "difficulty": "Nâng cao",
    "prompt": "Điền phương thức của đối tượng event dùng để ngăn chặn sự kiện không tiếp tục nổi bọt (bubbling) lên các thẻ cha bên ngoài:",
    "codeSnippet": "childBtn.addEventListener(\"click\", function(event) {\n  event.{{BLANK}}();\n  console.log(\"Chỉ xử lý ở con, không nổi bọt lên cha!\");\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức dừng nổi bọt...",
        "answers": [
          "stopPropagation",
          "stoppropagation",
          "stopPropagation()"
        ],
        "hint": "Gồm từ 'stop' và 'Propagation' (sự lan truyền)"
      }
    ],
    "explanation": "`event.stopPropagation()` ngăn không cho sự kiện lan truyền tiếp tục lên cây phân cấp DOM (pha nổi bọt - Event Bubbling), giúp tránh các hiệu ứng kích hoạt ngoài ý muốn ở phần tử bao ngoài."
  },
  {
    "id": "fb_c10_01",
    "chapter": 10,
    "topic": "Sự kiện sẵn sàng DOM trong jQuery",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức của jQuery được kích hoạt ngay khi cấu trúc DOM đã tải xong mà không cần chờ hình ảnh:",
    "codeSnippet": "$(document).{{BLANK}}(function() {\n  console.log(\"jQuery đã sẵn sàng thực thi!\");\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức sẵn sàng...",
        "answers": [
          "ready",
          "READY"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'sẵn sàng' (5 chữ cái)"
      }
    ],
    "explanation": "`$(document).ready(handler)` thực thi ngay khi cây DOM được xây dựng xong, nhanh hơn nhiều so với `window.onload` phải đợi toàn bộ tài nguyên hình ảnh tải xong."
  },
  {
    "id": "fb_c10_02",
    "chapter": 10,
    "topic": "Đọc và gán giá trị Form trong jQuery",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức jQuery dùng để lấy hoặc thiết lập giá trị nhập liệu của một ô input/select/textarea:",
    "codeSnippet": "const user = $(\"#txtUser\").{{BLANK}}();\n$(\"#txtUser\").{{BLANK}}(\"Gia tri moi\");",
    "blanks": [
      {
        "placeholder": "Tên phương thức rút gọn...",
        "answers": [
          "val",
          "val()"
        ],
        "hint": "Viết tắt của 'value' (3 chữ cái)"
      }
    ],
    "explanation": "Phương thức `.val()` trong jQuery là viết tắt của value: khi gọi `.val()` không tham số là getter (đọc giá trị), khi truyền tham số `.val('abc')` là setter (gán giá trị mới)."
  },
  {
    "id": "fb_c10_03",
    "chapter": 10,
    "topic": "Hiệu ứng mờ dần trong jQuery",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức jQuery dùng để làm mờ dần một phần tử cho đến khi biến mất hoàn toàn:",
    "codeSnippet": "$(\"#alertBox\").{{BLANK}}(\"slow\");",
    "blanks": [
      {
        "placeholder": "Tên phương thức làm mờ biến mất...",
        "answers": [
          "fadeOut",
          "fadeout"
        ],
        "hint": "Gồm từ 'fade' và 'Out' theo camelCase"
      }
    ],
    "explanation": "`.fadeOut(speed)` làm giảm dần độ mờ (opacity) của phần tử về 0 rồi ẩn đi (`display: none`). Ngược lại, `.fadeIn(speed)` làm hiện dần phần tử."
  },
  {
    "id": "fb_c10_04",
    "chapter": 10,
    "topic": "Hiệu ứng trượt đóng mở SlideToggle",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức jQuery dùng để bật/tắt hiệu ứng trượt (nếu đang đóng thì trượt mở ra, nếu đang mở thì trượt đóng lại):",
    "codeSnippet": "$(\".faq-question\").click(function() {\n  $(this).next(\".faq-answer\").{{BLANK}}(400);\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức trượt đóng mở...",
        "answers": [
          "slideToggle",
          "slidetoggle"
        ],
        "hint": "Ghép giữa 'slide' và 'Toggle'"
      }
    ],
    "explanation": "`.slideToggle(duration)` là phương thức hoàn hảo để làm menu Dropdown và Accordion trong jQuery mà không cần tự tính toán trạng thái ẩn/hiện."
  },
  {
    "id": "fb_c10_05",
    "chapter": 10,
    "topic": "Gán sự kiện với phương thức on()",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Kể từ jQuery 1.7+, phương thức nào được xem là tiêu chuẩn duy nhất để gắn kết sự kiện vào các phần tử:",
    "codeSnippet": "$(\"#btnCalculate\").{{BLANK}}(\"click\", function() {\n  tinhToanKetQua();\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức gắn sự kiện (2 chữ cái)...",
        "answers": [
          "on",
          "ON"
        ],
        "hint": "Từ tiếng Anh gồm 2 chữ cái: o..."
      }
    ],
    "explanation": "`.on()` là phương thức đăng ký sự kiện tổng quát và mạnh mẽ nhất của jQuery, thay thế cho các phương thức cũ như `bind(), live(), delegate()`."
  },
  {
    "id": "fb_c10_06",
    "chapter": 10,
    "topic": "Gọi AJAX tổng quát trong jQuery",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền cú pháp gọi hàm AJAX tổng quát của jQuery:",
    "codeSnippet": "$.{{BLANK}}({\n  url: \"api/getdata.php\",\n  method: \"GET\",\n  dataType: \"json\",\n  success: function(data) {\n    hienThiDuLieu(data);\n  }\n});",
    "blanks": [
      {
        "placeholder": "Tên phương thức AJAX...",
        "answers": [
          "ajax",
          "AJAX"
        ],
        "hint": "Từ viết tắt của Asynchronous JavaScript and XML"
      }
    ],
    "explanation": "`$.ajax({ settings })` là hàm AJAX nền tảng của jQuery, cho phép tinh chỉnh toàn bộ các thông số như URL, phương thức (GET/POST), kiểu dữ liệu (json, html, xml), hàm callback success và error."
  },
  {
    "id": "fb_c10_07",
    "chapter": 10,
    "topic": "Chèn nội dung vào cuối phần tử: append",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền tên phương thức jQuery dùng để chèn thêm một phần tử con vào vị trí CUỐI CÙNG bên trong phần tử được chọn:",
    "codeSnippet": "$(\"#danhSachSV\").{{BLANK}}(\"<li>Sinh viên mới</li>\");",
    "blanks": [
      {
        "placeholder": "Tên phương thức chèn cuối...",
        "answers": [
          "append",
          "APPEND"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'nối thêm vào đuôi' (6 chữ cái)"
      }
    ],
    "explanation": "`.append(content)` thêm nội dung vào cuối cùng bên trong phần tử. Để chèn vào đầu tiên bên trong phần tử, ta dùng phương thức `.prepend(content)`."
  },
  {
    "id": "fb_c10_08",
    "chapter": 10,
    "topic": "Bộ lọc jQuery: Chọn phần tử đầu tiên",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền bộ lọc chỉ số trong jQuery để chỉ chọn duy nhất phần tử `<tr>` đầu tiên trong bảng:",
    "codeSnippet": "$(\"table tr:{{BLANK}}\").css(\"background-color\", \"#3b82f6\");",
    "blanks": [
      {
        "placeholder": "Bộ lọc vị trí...",
        "answers": [
          "first",
          "first()",
          "eq(0)"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'đầu tiên' (5 chữ cái)"
      }
    ],
    "explanation": "Bộ lọc `:first` chọn phần tử đầu tiên trong tập hợp. Để chọn phần tử cuối cùng, ta dùng `:last`. Để chọn theo chỉ số bất kỳ, dùng `:eq(index)`."
  },
  {
    "id": "fb_c10_09",
    "chapter": 10,
    "topic": "Hoạt ảnh biến đổi kích thước: animate",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền tên phương thức jQuery dùng để tạo hoạt ảnh biến đổi tùy biến các thuộc tính CSS nhận giá trị số:",
    "codeSnippet": "$(\"#box\").{{BLANK}}({\n  width: \"300px\",\n  height: \"200px\",\n  opacity: 0.5\n}, 1000);",
    "blanks": [
      {
        "placeholder": "Tên phương thức hoạt ảnh...",
        "answers": [
          "animate",
          "ANIMATE"
        ],
        "hint": "Từ tiếng Anh chỉ 'hoạt ảnh / hoạt hình' (7 chữ cái)"
      }
    ],
    "explanation": "`.animate({ properties }, duration)` thực hiện chuyển đổi mượt mà các thuộc tính CSS số học. Lưu ý: jQuery mặc định không hỗ trợ animate thuộc tính màu nền nếu không cài thêm Color plugin."
  },
  {
    "id": "fb_c11_01",
    "chapter": 11,
    "topic": "Bản chất ngôn ngữ TypeScript",
    "type": "theory",
    "difficulty": "Cơ bản",
    "prompt": "TypeScript là một {{BLANK}} (tập mẹ cú pháp) của JavaScript, được phát triển và duy trì bởi tập đoàn Microsoft.",
    "codeSnippet": null,
    "blanks": [
      {
        "placeholder": "Thuật ngữ tiếng Anh (8 chữ cái)...",
        "answers": [
          "superset",
          "Superset"
        ],
        "hint": "Ghép giữa từ 'super' và 'set' (tập mẹ)"
      }
    ],
    "explanation": "TypeScript là một **Superset** của JavaScript, nghĩa là tất cả cú pháp JavaScript đều hoàn toàn hợp lệ trong TypeScript, nhưng TypeScript bổ sung thêm hệ thống định kiểu tĩnh (Static Typing)."
  },
  {
    "id": "fb_c11_02",
    "chapter": 11,
    "topic": "Trình biên dịch TypeScript Compiler",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền câu lệnh command line của trình biên dịch TypeScript dùng để chuyển mã từ file main.ts sang main.js:",
    "codeSnippet": "$ {{BLANK}} main.ts",
    "blanks": [
      {
        "placeholder": "Tên lệnh biên dịch (3 chữ cái)...",
        "answers": [
          "tsc",
          "TSC"
        ],
        "hint": "Viết tắt của TypeScript Compiler (3 chữ cái)"
      }
    ],
    "explanation": "`tsc` (TypeScript Compiler) là trình biên dịch dịch mã nguồn `.ts` sang mã JavaScript chuẩn `.js` để trình duyệt hoặc Node.js có thể chạy được."
  },
  {
    "id": "fb_c11_03",
    "chapter": 11,
    "topic": "Kiểu trả về của hàm không có return",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền kiểu dữ liệu trả về cho một hàm chỉ in thông báo ra console mà không trả về bất kỳ giá trị nào:",
    "codeSnippet": "function logMessage(msg: string): {{BLANK}} {\n  console.log(\"Log: \" + msg);\n}",
    "blanks": [
      {
        "placeholder": "Kiểu dữ liệu hàm rỗng...",
        "answers": [
          "void",
          "VOID"
        ],
        "hint": "Từ tiếng Anh chỉ sự 'trống rỗng / vô hiệu' (4 chữ cái)"
      }
    ],
    "explanation": "Kiểu `void` được dùng để chỉ định rằng một hàm không trả về bất kỳ giá trị nào (không có lệnh `return` hoặc chỉ có `return;`)."
  },
  {
    "id": "fb_c11_04",
    "chapter": 11,
    "topic": "Định nghĩa Interface",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền từ khóa dùng để định nghĩa khuôn mẫu giao diện cấu trúc đối tượng trong TypeScript:",
    "codeSnippet": "{{BLANK}} SinhVien {\n  id: number;\n  hoTen: string;\n  diemTB: number;\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa định nghĩa giao diện...",
        "answers": [
          "interface",
          "INTERFACE"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'giao diện' (9 chữ cái)"
      }
    ],
    "explanation": "`interface` dùng để định nghĩa một hợp đồng cấu trúc (shape/contract) cho các đối tượng hoặc cho các lớp (classes) thực thi thông qua từ khóa `implements`."
  },
  {
    "id": "fb_c11_05",
    "chapter": 11,
    "topic": "Thuộc tính chỉ đọc Readonly trong Interface",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền từ khóa đứng trước tên thuộc tính trong Interface để ngăn không cho phép sửa đổi giá trị của nó sau khi khởi tạo:",
    "codeSnippet": "interface NguoiDung {\n  {{BLANK}} maDinhDanh: string; /* Chỉ đọc, không sửa đổi */\n  ten: string;\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa chỉ đọc...",
        "answers": [
          "readonly",
          "READONLY"
        ],
        "hint": "Ghép giữa từ 'read' và 'only'"
      }
    ],
    "explanation": "Từ khóa `readonly` đánh dấu thuộc tính chỉ có thể được gán giá trị khi đối tượng được khởi tạo lần đầu tiên, mọi thao tác gán lại sau đó sẽ bị trình biên dịch tsc báo lỗi ngay."
  },
  {
    "id": "fb_c11_06",
    "chapter": 11,
    "topic": "Thuộc tính tùy chọn Optional Property",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền ký hiệu vào sau tên thuộc tính để khai báo rằng thuộc tính email là tùy chọn (có thể có hoặc không):",
    "codeSnippet": "interface KhachHang {\n  id: number;\n  name: string;\n  email{{BLANK}}: string; /* Thuộc tính tùy chọn */\n}",
    "blanks": [
      {
        "placeholder": "Ký hiệu tùy chọn...",
        "answers": [
          "?"
        ],
        "hint": "Dấu hỏi chấm ?"
      }
    ],
    "explanation": "Dấu hỏi chấm `?` đặt sau tên thuộc tính trong Interface (hoặc tham số của hàm) biểu thị rằng thuộc tính này là tùy chọn (optional), có thể nhận giá trị hoặc `undefined`."
  },
  {
    "id": "fb_c11_07",
    "chapter": 11,
    "topic": "Kiểu hợp Union Type",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền toán tử để khai báo mã hóa đơn có thể là kiểu chuỗi (string) HOẶC kiểu số (number):",
    "codeSnippet": "let maHoaDon: string {{BLANK}} number;\nmaHoaDon = \"HD-999\"; // Hợp lệ\nmaHoaDon = 999;      // Cũng hợp lệ",
    "blanks": [
      {
        "placeholder": "Toán tử Union (1 ký tự)...",
        "answers": [
          "|"
        ],
        "hint": "Dấu gạch đứng |"
      }
    ],
    "explanation": "Toán tử gạch đứng `|` biểu diễn **Union Type** trong TypeScript, cho phép một biến hoặc tham số có thể nhận một trong nhiều kiểu dữ liệu được chỉ định."
  },
  {
    "id": "fb_c11_08",
    "chapter": 11,
    "topic": "Quyền truy cập Private trong Class",
    "type": "code",
    "difficulty": "Trung bình",
    "prompt": "Điền từ khóa phân quyền truy cập (Access Modifier) để thuộc tính bí mật chỉ có thể truy xuất BÊN TRONG chính lớp đó, lớp con hay bên ngoài đều không thấy:",
    "codeSnippet": "class TaiKhoanNganHang {\n  public chuTaiKhoan: string;\n  {{BLANK}} soDu: number; /* Riêng tư tuyệt đối */\n\n  constructor(chu: string, sodu: number) {\n    this.chuTaiKhoan = chu;\n    this.soDu = sodu;\n  }\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa riêng tư...",
        "answers": [
          "private",
          "PRIVATE"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'riêng tư' (7 chữ cái)"
      }
    ],
    "explanation": "Từ khóa `private` khóa chặt thuộc tính/phương thức, chỉ cho phép truy cập bên trong nội bộ lớp khai báo. Khác với `protected` vẫn cho phép các lớp con kế thừa truy cập."
  },
  {
    "id": "fb_c11_09",
    "chapter": 11,
    "topic": "Kiểu tổng quát Generics",
    "type": "code",
    "difficulty": "Nâng cao",
    "prompt": "Điền ký hiệu biến kiểu tổng quát (Type Parameter) vào hàm đảo mảng để bảo toàn tính an toàn kiểu:",
    "codeSnippet": "function layPhanTuDau<{{BLANK}}>(danhSach: {{BLANK}}[]): {{BLANK}} {\n  return danhSach[0];\n}",
    "blanks": [
      {
        "placeholder": "Ký tự kiểu tổng quát thường dùng...",
        "answers": [
          "T",
          "t"
        ],
        "hint": "Chữ cái viết tắt của Type (1 chữ cái T)"
      }
    ],
    "explanation": "Ký hiệu `<T>` là tham số kiểu đại diện trong **Generics**, giúp hàm hoặc lớp có thể làm việc linh hoạt với bất kỳ kiểu dữ liệu nào mà vẫn giữ nguyên tính an toàn kiểm tra kiểu tĩnh của TypeScript."
  },
  {
    "id": "fb_c11_10",
    "chapter": 11,
    "topic": "Kế thừa Lớp với extends",
    "type": "code",
    "difficulty": "Cơ bản",
    "prompt": "Điền từ khóa để lớp SinhVien kế thừa tất cả thuộc tính và phương thức từ lớp cha Nguoi:",
    "codeSnippet": "class SinhVien {{BLANK}} Nguoi {\n  major: string;\n}",
    "blanks": [
      {
        "placeholder": "Từ khóa kế thừa...",
        "answers": [
          "extends",
          "EXTENDS"
        ],
        "hint": "Từ tiếng Anh có nghĩa là 'mở rộng' (7 chữ cái)"
      }
    ],
    "explanation": "Từ khóa `extends` dùng cho sự kế thừa (Inheritance) giữa các Class hoặc mở rộng Interface trong TypeScript và JavaScript ES6."
  }
];
