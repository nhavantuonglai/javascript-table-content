# Table of Contents Generator

(Original Vietnamese below)

_Table of Contents Generator is a JavaScript package that creates a floating table of contents (TOC) button and panel for web pages. It automatically detects headings (H2, H3, H4) and generates a clickable TOC, enhancing navigation for long content._

## Installation Guide

To install, use npm:

```
npm install table-of-content
```

No additional dependencies are required beyond a modern browser.

## Purpose

– Generate a floating table of contents based on page headings.

– Show, hide the TOC button based on content visibility.

– Provide an interactive TOC panel that closes when clicking outside.

## Workflow

1. Include the package: Add the script to your HTML or import it in your JavaScript project.

2. Automatic activation: The TOC button appears when scrolling over content with the `.prose` class and generates a TOC from headings.

3. Manual control (optional): Use `initTableOfContents()` to start manually or `destroy()` to remove the TOC.

Example usage in HTML:

```
<script src="node_modules/table-of-content/index.js"></script>
```

Example usage in JavaScript:

```
const { initTableOfContents } = require('table-of-content');
initTableOfContents();
toc.destroy();
```

## Contact & Support

– Email: info@nhavantuonglai.com.

– Website: [nhavantuonglai.com](https://nhavantuonglai.com).

If you have any questions or suggestions, feel free to reach out for the fastest support.

Don’t forget to star this repository if you find it useful.

# Trình tạo mục lục

_Trình tạo mục lục là một gói JavaScript tạo ra một nút và bảng mục lục (TOC) nổi cho các trang web. Nó tự động phát hiện các tiêu đề (H2, H3, H4) và tạo ra một TOC có thể nhấp, cải thiện điều hướng cho nội dung dài._

## Hướng dẫn cài đặt

Để cài đặt, sử dụng npm:

```
npm install table-of-content
```

Không yêu cầu thêm thư viện phụ thuộc ngoài trình duyệt hiện đại.

## Công dụng

– Tạo mục lục nổi dựa trên các tiêu đề của trang.

– Hiển thị, ẩn nút TOC dựa trên khả năng hiển thị của nội dung.

– Cung cấp bảng TOC tương tác, đóng lại khi nhấp ra ngoài.

## Flow thao tác

1. Thêm gói: Thêm script vào HTML hoặc nhập vào dự án JavaScript của bạn.

2. Kích hoạt tự động: Nút TOC xuất hiện khi cuộn qua nội dung có lớp `.prose` và tạo TOC từ các tiêu đề.

3. Điều khiển thủ công (tùy chọn): Sử dụng `initTableOfContents()` để bắt đầu thủ công hoặc `destroy()` để xóa TOC.

Ví dụ sử dụng trong HTML:

```
<script src="node_modules/toc-generator/index.js"></script>
```

Ví dụ sử dụng trong JavaScript:

```
const { initTableOfContents } = require('toc-generator');
initTableOfContents();
toc.destroy();
```

## Liên hệ & Hỗ trợ

– Email: info@nhavantuonglai.com.

– Website: [nhavantuonglai.com](https://nhavantuonglai.com).

Nếu bạn có câu hỏi hoặc đề xuất, đừng ngần ngại liên hệ để được hỗ trợ nhanh nhất.

Đừng quên star repository này nếu bạn thấy nó hữu ích.