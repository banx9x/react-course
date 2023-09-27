# Monorepo cho Khóa học React

Dự án này là một monorepo sử dụng [Lerna](https://lerna.js.org/) để quản lý các repo con React được tạo ra trong khóa học của tôi về React. Mục tiêu của dự án này là giúp bạn nắm vững các kiến thức cơ bản và nâng cao về React thông qua các ví dụ thực tế.

## Các Repo Con

Dự án này chứa các repo con sau đây, mỗi repo con tương ứng với một chủ đề hoặc một phần trong khóa học:

1. **[rawg.io](./packages/rawg.io/)**: Repo này chứa dự án là bản sao của trang web chơi game phổ biến [Rawg.io](https://rawg.io/).

2. **Updating...**

## Cách Sử Dụng

Để bắt đầu sử dụng dự án này, bạn có thể làm theo các bước sau:

1. **Clone dự án**: Clone dự án này về máy tính của bạn bằng lệnh sau:

   ```bash
   git clone https://github.com/banx9x/react-course.git
   ```

2. **Cài đặt các dependencies**: Mở terminal trong thư mục gốc của dự án và chạy lệnh sau để cài đặt các phụ thuộc của monorepo:

   ```bash
   npm install
   ```

3. **Chạy repo con cụ thể**: Sử dụng câu lệnh sau, thay thế `project` bằng tên repo con trong `packages`:

   ```bash
   npx lerna run dev --scope project
   ```

4. **Hoặc chạy toàn bộ dự án**: Nếu bạn muốn chạy tất cả các repo con cùng lúc:

   ```bash
   npx lerna run dev
   ```

## Đóng Góp

Nếu bạn muốn đóng góp vào dự án hoặc báo cáo lỗi, bạn có thể mở các pull request hoặc issues trên GitHub của dự án.

## Liên Hệ

Nếu bạn có bất kỳ câu hỏi hoặc ý kiến đóng góp, bạn có thể liên hệ với tôi qua email tại [contact@banx.dev](contact@banx.dev)
