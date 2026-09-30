# QLSV - App Quản lý Sinh viên (React Native CLI)

Tham khảo giao diện app S-Link PTIT trong `src/preference/` (3 ảnh mẫu).
Phong cách: header đỏ, sheet trắng bo góc chồng lên header, icon hộp hồng, navbar trắng chữ đỏ.
Toàn bộ giao diện tiếng Việt có dấu, không dùng emoji.

## Roadmap đã triển khai

1. **Phase 0 - Khởi tạo**: React Native CLI 0.87.1, package `com.qlsv`, TypeScript, FlatList + Pressable + StyleSheet + Flexbox.
2. **Phase 1 - Header (a)**: lời chào, họ tên, MSSV, Image avatar, nút chuông thông báo + toggle Dark Mode (icon mặt trời/mặt trăng tự vẽ bằng View).
3. **Phase 2 - Thống kê (b)**: 3x StatCard (Tổng môn / Bài tập / Hoàn thành) có icon React, số liệu, tiêu đề.
4. **Phase 3 - Tìm kiếm (c)**: TextInput placeholder "Tìm kiếm môn học...", icon kính lúp, bo góc 14.
5. **Phase 4 - Môn học (d)**: FlatList 5 môn, mỗi môn có icon React riêng, tên, mã, GV, số bài học, % + thanh tiến độ (View lồng nhau). Nhấn vào có ripple + scale + Alert. Tiến độ 100% hiện badge "Đã hoàn thành".
6. **Phase 5 - BottomNav (e)**: 4 tab Trang chủ / Môn học / Bài tập / Cá nhân với icon React, tab active màu đỏ, chỉ UI không chuyển màn hình.
7. **Phase 6 - Nâng cao**: tách `src/components/*`, `src/theme/colors.ts` (Light/Dark), `src/data/student.ts`, lọc theo từ khóa, Dark Mode full app.

## Cấu trúc

```
App.tsx
src/
  theme/colors.ts
  data/student.ts       <- đổi tên thật ở STUDENT
  components/icons.tsx  <- bộ icon React tự vẽ (View, không emoji, không lib ngoài)
  components/Header.tsx
  components/StatCard.tsx
  components/SearchBar.tsx
  components/CourseCard.tsx
  components/BottomNav.tsx
```

## Chạy app

```bash
npm start
# nhảy riêng:
npx react-native run-android
```

Cần Android Studio + SDK + emulator/device. iOS cần Xcode (macOS).

## Đổi tên sinh viên

Sửa `STUDENT` trong `src/data/student.ts`.
