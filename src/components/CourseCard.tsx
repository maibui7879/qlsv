import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Course } from '../data/student';
import { AppColors } from '../theme/colors';
import { BrowserIcon, DatabaseIcon, GlobeIcon, PhoneIcon, RobotIcon } from './icons';

const COURSE_ICONS = {
  mobile: PhoneIcon,
  database: DatabaseIcon,
  network: GlobeIcon,
  ai: RobotIcon,
  web: BrowserIcon,
};

interface Props {
  item: Course;
  colors: AppColors;
  onPress?: (c: Course) => void;
}

export default function CourseCard({ item, colors, onPress }: Props) {
  const done = item.progress >= 100;
  const Icon = COURSE_ICONS[item.icon];
  return (
    <Pressable
      onPress={() => onPress?.(item)}
      android_ripple={{ color: 'rgba(200,16,46,0.12)' }}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          opacity: pressed ? 0.85 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
      ]}>
      <View style={[styles.accent, { backgroundColor: item.color }]} />
      <View style={[styles.iconBox, { backgroundColor: item.bg }]}>
        <Icon color={item.color} size={26} />
      </View>
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
            {item.name}
          </Text>
          {done && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Đã hoàn thành</Text>
            </View>
          )}
        </View>
        <Text style={[styles.meta, { color: colors.subText }]}>
          {item.code} • {item.lessons} bài học • {item.teacher}
        </Text>
        <View style={styles.progressRow}>
          <View style={[styles.track, { backgroundColor: colors.progressTrack }]}>
            <View
              style={[
                styles.fill,
                {
                  width: `${item.progress}%`,
                  backgroundColor: done ? '#16A34A' : colors.primary,
                },
              ]}
            />
          </View>
          <Text style={[styles.percent, { color: done ? '#16A34A' : colors.primary }]}>
            {item.progress}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  accent: {
    width: 4,
    alignSelf: 'stretch',
    borderRadius: 2,
    marginRight: 10,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginLeft: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    flexShrink: 1,
  },
  badge: {
    backgroundColor: '#E7F6EC',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#16A34A',
    fontSize: 10,
    fontWeight: '700',
  },
  meta: {
    fontSize: 12,
    marginTop: 3,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  track: {
    flex: 1,
    height: 7,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: 7,
    borderRadius: 4,
  },
  percent: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 8,
    minWidth: 38,
    textAlign: 'right',
  },
});
