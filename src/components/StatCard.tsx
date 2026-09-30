import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stat } from '../data/student';
import { AppColors } from '../theme/colors';
import { BookIcon, CheckIcon, TaskIcon } from './icons';

const STAT_ICONS = {
  book: BookIcon,
  task: TaskIcon,
  check: CheckIcon,
};

export default function StatCard({ item, colors }: { item: Stat; colors: AppColors }) {
  const Icon = STAT_ICONS[item.icon];
  return (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[styles.iconBox, { backgroundColor: item.bg }]}>
        <Icon color={item.color} size={22} />
      </View>
      <Text style={[styles.value, { color: colors.text }]}>{item.value}</Text>
      <Text style={[styles.title, { color: colors.subText }]}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  value: {
    fontSize: 20,
    fontWeight: '800',
  },
  title: {
    fontSize: 11,
    marginTop: 2,
    textAlign: 'center',
  },
});
