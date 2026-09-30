import React, { useMemo, useRef, useState } from 'react';
import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from './src/components/BottomNav';
import CourseCard from './src/components/CourseCard';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import StatCard from './src/components/StatCard';
import { COURSES, STATS } from './src/data/student';
import { DarkColors, LightColors } from './src/theme/colors';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('home');
  const searchRef = useRef<React.ComponentRef<typeof TextInput>>(null);

  const colors = isDark ? DarkColors : LightColors;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return COURSES;
    }
    return COURSES.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.teacher.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
        <StatusBar barStyle="light-content" />
        {/* a. Header kiểu S-Link */}
        <Header
          colors={colors}
          isDark={isDark}
          onToggleTheme={() => setIsDark(v => !v)}
          onSearchPress={() => searchRef.current?.focus()}
        />

        {/* Sheet trắng bo góc chồng lên header */}
        <View style={[styles.sheet, { backgroundColor: colors.card }]}>
          <FlatList
            data={filtered}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            ListHeaderComponent={
              <View>
                {/* b. Thống kê */}
                <View style={styles.statsRow}>
                  {STATS.map(s => (
                    <StatCard key={s.id} item={s} colors={colors} />
                  ))}
                </View>

                {/* c. Tìm kiếm */}
                <SearchBar
                  colors={colors}
                  value={query}
                  onChange={setQuery}
                  inputRef={searchRef}
                />

                {/* Tiêu đề danh sách */}
                <View style={styles.sectionRow}>
                  <Text style={[styles.sectionTitle, { color: colors.text }]}>
                    Môn học của bạn
                  </Text>
                  <Text style={[styles.sectionMore, { color: colors.primary }]}>
                    Xem tất cả
                  </Text>
                </View>
                {filtered.length === 0 && (
                  <Text style={[styles.empty, { color: colors.subText }]}>
                    Không tìm thấy môn học phù hợp.
                  </Text>
                )}
              </View>
            }
            renderItem={({ item }) => (
              <CourseCard
                item={item}
                colors={colors}
                onPress={c => Alert.alert(c.name, `${c.code} • ${c.progress}% hoàn thành`)}
              />
            )}
          />
        </View>

        {/* e. Thanh điều hướng */}
        <BottomNav colors={colors} active={tab} onChange={setTab} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  sheet: {
    flex: 1,
    marginTop: -28,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
  },
  sectionMore: {
    fontSize: 13,
    fontWeight: '600',
  },
  empty: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 13,
  },
});

export default App;
