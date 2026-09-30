import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COURSES, STUDENT } from '../data/student';
import { AppColors } from '../theme/colors';
import { BellIcon, MoonIcon, SearchIcon, SunIcon } from './icons';

interface Props {
  colors: AppColors;
  isDark: boolean;
  onToggleTheme: () => void;
  onSearchPress: () => void;
  hasUnread?: boolean;
}

export default function Header({
  colors,
  isDark,
  onToggleTheme,
  onSearchPress,
  hasUnread = true,
}: Props) {
  const done = COURSES.filter(c => c.progress >= 100).length;
  return (
    <View style={[styles.wrap, { backgroundColor: colors.primary }]}>
      <View style={styles.row}>
        {/* Avatar - bắt buộc dùng Image theo yêu cầu */}
        <Image source={{ uri: STUDENT.avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.greeting}>{STUDENT.greeting}</Text>
          <Text style={styles.name} numberOfLines={1}>
            {STUDENT.name}
          </Text>
          <View style={styles.msvRow}>
            <Text style={styles.msv} numberOfLines={1}>
              {STUDENT.studentId}
            </Text>
            <View style={styles.pill}>
              <Text style={[styles.pillText, { color: colors.primary }]}>
                {done}/{COURSES.length}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <Pressable
            onPress={onToggleTheme}
            android_ripple={{ color: 'rgba(255,255,255,0.3)', borderless: true }}
            style={[styles.sqBtn, { backgroundColor: colors.primaryDark }]}
            accessibilityLabel="Đổi chế độ sáng tối">
            {isDark ? <SunIcon /> : <MoonIcon cutout={colors.primaryDark} />}
          </Pressable>
          <Pressable
            onPress={onSearchPress}
            android_ripple={{ color: 'rgba(255,255,255,0.3)', borderless: true }}
            style={[styles.sqBtn, { backgroundColor: colors.primaryDark }]}
            accessibilityLabel="Tìm kiếm">
            <SearchIcon color="#FFFFFF" size={20} />
          </Pressable>
          <Pressable
            onPress={() => Alert.alert('Thông báo', 'Bạn có 3 thông báo mới')}
            android_ripple={{ color: 'rgba(255,255,255,0.3)', borderless: true }}
            style={[styles.sqBtn, { backgroundColor: colors.primaryDark }]}
            accessibilityLabel="Thông báo">
            <BellIcon size={20} />
            {hasUnread && <View style={styles.dot} />}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 52,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#D1D5DB',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  greeting: {
    color: '#FFD9DE',
    fontSize: 13,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  msvRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  msv: {
    color: '#FFFFFF',
    fontSize: 13,
    flexShrink: 1,
  },
  pill: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 8,
  },
  pillText: {
    fontSize: 13,
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sqBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#FFD60A',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});
