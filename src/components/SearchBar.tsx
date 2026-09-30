import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AppColors } from '../theme/colors';
import { SearchIcon } from './icons';

interface Props {
  colors: AppColors;
  value: string;
  onChange: (t: string) => void;
  inputRef?: React.RefObject<React.ComponentRef<typeof TextInput> | null>;
}

export default function SearchBar({ colors, value, onChange, inputRef }: Props) {
  return (
    <View
      style={[
        styles.box,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}>
      <View style={styles.iconWrap}>
        <SearchIcon color={colors.subText} size={18} />
      </View>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChange}
        placeholder="Tìm kiếm môn học..."
        placeholderTextColor={colors.subText}
        style={[styles.input, { color: colors.text }]}
        returnKeyType="search"
      />
      {value.length > 0 ? (
        <Pressable onPress={() => onChange('')} accessibilityLabel="Xóa tìm kiếm">
          <Text style={[styles.clear, { color: colors.primary }]}>Xóa</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 4,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  iconWrap: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 10,
  },
  clear: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
  },
});
