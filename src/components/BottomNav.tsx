import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppColors } from '../theme/colors';
import { BookIcon, HomeIcon, TaskIcon, UserIcon } from './icons';

export type TabIcon = 'home' | 'book' | 'task' | 'user';

export interface TabItem {
  id: string;
  label: string;
  icon: TabIcon;
}

export const TABS: TabItem[] = [
  { id: 'home', label: 'Trang chủ', icon: 'home' },
  { id: 'courses', label: 'Môn học', icon: 'book' },
  { id: 'tasks', label: 'Bài tập', icon: 'task' },
  { id: 'profile', label: 'Cá nhân', icon: 'user' },
];

const TAB_ICONS = {
  home: HomeIcon,
  book: BookIcon,
  task: TaskIcon,
  user: UserIcon,
};

interface Props {
  colors: AppColors;
  active: string;
  onChange: (id: string) => void;
}

export default function BottomNav({ colors, active, onChange }: Props) {
  return (
    <View style={[styles.bar, { backgroundColor: colors.bottomNavBg, borderTopColor: colors.border }]}>
      {TABS.map(t => {
        const isActive = t.id === active;
        const Icon = TAB_ICONS[t.icon];
        return (
          <Pressable
            key={t.id}
            onPress={() => onChange(t.id)}
            android_ripple={{ color: 'rgba(200,16,46,0.15)', borderless: true }}
            style={styles.tab}>
            <Icon
              color={isActive ? colors.bottomNavActive : colors.bottomNavInactive}
              size={22}
            />
            <Text
              style={[
                styles.label,
                { color: isActive ? colors.bottomNavActive : colors.bottomNavInactive },
              ]}>
              {t.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 14,
    paddingHorizontal: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  label: {
    fontSize: 11,
    marginTop: 3,
    fontWeight: '600',
  },
});
