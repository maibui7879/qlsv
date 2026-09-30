import React from 'react';
import { StyleSheet, View } from 'react-native';

// Khung 24x24 có scale theo size, giúp icon dùng chung nhiều nơi
function Box({ size = 24, children }: { size?: number; children: React.ReactNode }) {
  const s = size / 24;
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: 24, height: 24, transform: [{ scale: s }] }}>{children}</View>
    </View>
  );
}

// Icon mặt trời: vòng tròn đặc + 8 tia
export function SunIcon({ color = '#FFFFFF' }: { color?: string }) {
  return (
    <View style={styles.sunBox}>
      <View style={[styles.sunCore, { backgroundColor: color }]} />
      <View style={[styles.rayV, styles.rayN, { backgroundColor: color }]} />
      <View style={[styles.rayV, styles.rayS, { backgroundColor: color }]} />
      <View style={[styles.rayH, styles.rayE, { backgroundColor: color }]} />
      <View style={[styles.rayH, styles.rayW, { backgroundColor: color }]} />
      <View style={[styles.rayV, styles.rayNE, { backgroundColor: color }]} />
      <View style={[styles.rayV, styles.raySE, { backgroundColor: color }]} />
      <View style={[styles.rayV, styles.raySW, { backgroundColor: color }]} />
      <View style={[styles.rayV, styles.rayNW, { backgroundColor: color }]} />
    </View>
  );
}

// Icon mặt trăng: hình lưỡi liềm ghép từ 2 hình tròn.
// cutout phải trùng màu nền phía sau để tạo vết khoét liền mạch.
export function MoonIcon({ color = '#FFFFFF', cutout }: { color?: string; cutout: string }) {
  return (
    <View style={styles.moonBox}>
      <View style={[styles.moonDisc, { backgroundColor: color }]} />
      <View style={[styles.moonCut, { backgroundColor: cutout }]} />
    </View>
  );
}

// Kính lúp tìm kiếm: vòng tròn + tay cầm
export function SearchIcon({ color, size = 20 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.searchRing, { borderColor: color }]} />
      <View style={[styles.searchHandle, { backgroundColor: color }]} />
    </Box>
  );
}

// Nhà: mái tam giác + thân
export function HomeIcon({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.homeRoof, { borderBottomColor: color }]} />
      <View style={[styles.homeBody, { backgroundColor: color }]} />
    </Box>
  );
}

// Sách: bìa viền + gáy sách
export function BookIcon({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.bookCover, { borderColor: color }]} />
      <View style={[styles.bookSpine, { backgroundColor: color }]} />
    </Box>
  );
}

// Bài tập: bảng kẹp + dòng kẻ
export function TaskIcon({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.taskBoard, { borderColor: color }]} />
      <View style={[styles.taskClip, { backgroundColor: color }]} />
      <View style={[styles.taskLine1, { backgroundColor: color }]} />
      <View style={[styles.taskLine2, { backgroundColor: color }]} />
    </Box>
  );
}

// Hoàn thành: vòng tròn + dấu tick
export function CheckIcon({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.checkRing, { borderColor: color }]} />
      <View style={[styles.checkSeg1, { backgroundColor: color }]} />
      <View style={[styles.checkSeg2, { backgroundColor: color }]} />
    </Box>
  );
}

// Cá nhân: đầu + vai
export function UserIcon({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.userHead, { backgroundColor: color }]} />
      <View style={[styles.userBody, { backgroundColor: color }]} />
    </Box>
  );
}

// Chuông thông báo
export function BellIcon({ color = '#FFFFFF', size = 22 }: { color?: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.bellKnob, { backgroundColor: color }]} />
      <View style={[styles.bellBody, { backgroundColor: color }]} />
      <View style={[styles.bellRim, { backgroundColor: color }]} />
      <View style={[styles.bellClap, { backgroundColor: color }]} />
    </Box>
  );
}

// Điện thoại: khung viền + loa + nút home
export function PhoneIcon({ color, size = 26 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.phoneFrame, { borderColor: color }]} />
      <View style={[styles.phoneSpeaker, { backgroundColor: color }]} />
      <View style={[styles.phoneHome, { backgroundColor: color }]} />
    </Box>
  );
}

// Cơ sở dữ liệu: hình trụ
export function DatabaseIcon({ color, size = 26 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.dbBody, { borderColor: color }]} />
      <View style={[styles.dbTop, { borderColor: color }]} />
      <View style={[styles.dbMid, { borderBottomColor: color }]} />
    </Box>
  );
}

// Mạng: địa cầu (vòng ngoài + xích đạo + kinh tuyến)
export function GlobeIcon({ color, size = 26 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.globeRing, { borderColor: color }]} />
      <View style={[styles.globeEq, { backgroundColor: color }]} />
      <View style={[styles.globeMer, { borderColor: color }]} />
    </Box>
  );
}

// AI: đầu robot + ăng-ten + mắt
export function RobotIcon({ color, size = 26 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.robotAntDot, { backgroundColor: color }]} />
      <View style={[styles.robotAnt, { backgroundColor: color }]} />
      <View style={[styles.robotEarL, { backgroundColor: color }]} />
      <View style={[styles.robotEarR, { backgroundColor: color }]} />
      <View style={[styles.robotHead, { borderColor: color }]} />
      <View style={[styles.robotEyeL, { backgroundColor: color }]} />
      <View style={[styles.robotEyeR, { backgroundColor: color }]} />
      <View style={[styles.robotMouth, { backgroundColor: color }]} />
    </Box>
  );
}

// Web: cửa sổ trình duyệt
export function BrowserIcon({ color, size = 26 }: { color: string; size?: number }) {
  return (
    <Box size={size}>
      <View style={[styles.webFrame, { borderColor: color }]} />
      <View style={[styles.webDot1, { backgroundColor: color }]} />
      <View style={[styles.webDot2, { backgroundColor: color }]} />
      <View style={[styles.webDot3, { backgroundColor: color }]} />
      <View style={[styles.webBar, { backgroundColor: color }]} />
    </Box>
  );
}

const styles = StyleSheet.create({
  sunBox: { width: 24, height: 24 },
  sunCore: { position: 'absolute', left: 6, top: 6, width: 12, height: 12, borderRadius: 6 },
  rayV: { position: 'absolute', width: 2, height: 4, borderRadius: 1 },
  rayH: { position: 'absolute', width: 4, height: 2, borderRadius: 1 },
  rayN: { left: 11, top: 1 },
  rayS: { left: 11, top: 19 },
  rayE: { left: 19, top: 11 },
  rayW: { left: 1, top: 11 },
  rayNE: { left: 17, top: 3, transform: [{ rotate: '45deg' }] },
  raySE: { left: 17, top: 16, transform: [{ rotate: '-45deg' }] },
  raySW: { left: 5, top: 16, transform: [{ rotate: '45deg' }] },
  rayNW: { left: 5, top: 3, transform: [{ rotate: '-45deg' }] },
  moonBox: { width: 24, height: 24 },
  moonDisc: { position: 'absolute', left: 2, top: 3.5, width: 17, height: 17, borderRadius: 8.5 },
  moonCut: { position: 'absolute', left: 8, top: 1.5, width: 14, height: 14, borderRadius: 7 },
  searchRing: { position: 'absolute', left: 3, top: 3, width: 12, height: 12, borderRadius: 6, borderWidth: 2.5 },
  searchHandle: { position: 'absolute', left: 14, top: 12, width: 2.5, height: 7, borderRadius: 1.25, transform: [{ rotate: '45deg' }] },
  homeRoof: { position: 'absolute', left: 2, top: 4, width: 0, height: 0, backgroundColor: 'transparent', borderLeftWidth: 10, borderRightWidth: 10, borderBottomWidth: 9, borderLeftColor: 'transparent', borderRightColor: 'transparent' },
  homeBody: { position: 'absolute', left: 6, top: 12, width: 12, height: 8.5, borderRadius: 1 },
  bookCover: { position: 'absolute', left: 5.5, top: 3.5, width: 13, height: 17, borderWidth: 2, borderRadius: 2 },
  bookSpine: { position: 'absolute', left: 9, top: 5.5, width: 2, height: 13, borderRadius: 1 },
  taskBoard: { position: 'absolute', left: 5, top: 4.5, width: 14, height: 16.5, borderWidth: 2, borderRadius: 2 },
  taskClip: { position: 'absolute', left: 9, top: 2.5, width: 6, height: 4, borderRadius: 1.5 },
  taskLine1: { position: 'absolute', left: 8, top: 10.5, width: 8, height: 2, borderRadius: 1 },
  taskLine2: { position: 'absolute', left: 8, top: 14, width: 8, height: 2, borderRadius: 1 },
  checkRing: { position: 'absolute', left: 3, top: 3, width: 18, height: 18, borderRadius: 9, borderWidth: 2 },
  checkSeg1: { position: 'absolute', left: 8, top: 12, width: 2.5, height: 5, borderRadius: 1.25, transform: [{ rotate: '45deg' }] },
  checkSeg2: { position: 'absolute', left: 12.5, top: 8, width: 2.5, height: 9, borderRadius: 1.25, transform: [{ rotate: '-40deg' }] },
  userHead: { position: 'absolute', left: 7.5, top: 3, width: 9, height: 9, borderRadius: 4.5 },
  userBody: { position: 'absolute', left: 3, top: 13, width: 18, height: 9, borderTopLeftRadius: 9, borderTopRightRadius: 9 },
  bellKnob: { position: 'absolute', left: 10, top: 1.5, width: 3.5, height: 3.5, borderRadius: 1.75 },
  bellBody: { position: 'absolute', left: 5, top: 5, width: 14, height: 11, borderRadius: 5 },
  bellRim: { position: 'absolute', left: 3.5, top: 16, width: 17, height: 2.5, borderRadius: 1.25 },
  bellClap: { position: 'absolute', left: 10, top: 19, width: 4, height: 4, borderRadius: 2 },
  phoneFrame: { position: 'absolute', left: 6, top: 2, width: 12, height: 20, borderWidth: 2, borderRadius: 3 },
  phoneSpeaker: { position: 'absolute', left: 10, top: 4.5, width: 4, height: 2, borderRadius: 1 },
  phoneHome: { position: 'absolute', left: 10.75, top: 18, width: 2.5, height: 2.5, borderRadius: 1.25 },
  dbTop: { position: 'absolute', left: 4, top: 3, width: 16, height: 7, borderWidth: 2, borderRadius: 3.5 },
  dbBody: { position: 'absolute', left: 4, top: 6.5, width: 16, height: 12, borderWidth: 2, borderTopWidth: 0, borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
  dbMid: { position: 'absolute', left: 4, top: 11, width: 16, height: 5, borderBottomWidth: 2, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  globeRing: { position: 'absolute', left: 3, top: 3, width: 18, height: 18, borderRadius: 9, borderWidth: 2 },
  globeEq: { position: 'absolute', left: 5, top: 11, width: 14, height: 2, borderRadius: 1 },
  globeMer: { position: 'absolute', left: 7.5, top: 5, width: 9, height: 14, borderWidth: 2, borderRadius: 4.5 },
  robotAntDot: { position: 'absolute', left: 10.5, top: 1, width: 3, height: 3, borderRadius: 1.5 },
  robotAnt: { position: 'absolute', left: 11, top: 3.5, width: 2, height: 4, borderRadius: 1 },
  robotEarL: { position: 'absolute', left: 1.5, top: 10.5, width: 2.5, height: 5, borderRadius: 1.25 },
  robotEarR: { position: 'absolute', left: 20, top: 10.5, width: 2.5, height: 5, borderRadius: 1.25 },
  robotHead: { position: 'absolute', left: 4, top: 7.5, width: 16, height: 12, borderWidth: 2, borderRadius: 3 },
  robotEyeL: { position: 'absolute', left: 8, top: 11.5, width: 2.5, height: 2.5, borderRadius: 1.25 },
  robotEyeR: { position: 'absolute', left: 13.5, top: 11.5, width: 2.5, height: 2.5, borderRadius: 1.25 },
  robotMouth: { position: 'absolute', left: 9, top: 15.5, width: 6, height: 2, borderRadius: 1 },
  webFrame: { position: 'absolute', left: 3, top: 5, width: 18, height: 14, borderWidth: 2, borderRadius: 2 },
  webDot1: { position: 'absolute', left: 6, top: 7.5, width: 2, height: 2, borderRadius: 1 },
  webDot2: { position: 'absolute', left: 9, top: 7.5, width: 2, height: 2, borderRadius: 1 },
  webDot3: { position: 'absolute', left: 12, top: 7.5, width: 2, height: 2, borderRadius: 1 },
  webBar: { position: 'absolute', left: 5, top: 11, width: 14, height: 2, borderRadius: 1 },
});
