export const LightColors = {
  mode: 'light' as const,
  primary: '#D71920', 
  primaryDark: '#A50E13',
  primarySoft: '#FDECEF',
  background: '#F2F3F5',
  card: '#FFFFFF',
  text: '#1A1A1A',
  subText: '#6B7280',
  border: '#E5E7EB',
  progressTrack: '#EDEDEF',
  bottomNavBg: '#FFFFFF',
  bottomNavActive: '#C8102E',
  bottomNavInactive: '#9CA3AF',
  shadow: '#000',
};

export const DarkColors = {
  mode: 'dark' as const,
  primary: '#E33445',
  primaryDark: '#C8102E',
  primarySoft: '#3A1D22',
  background: '#121214',
  card: '#1E1E24',
  text: '#FFFFFF',
  subText: '#A1A1AA',
  border: '#2E2E36',
  progressTrack: '#2E2E36',
  bottomNavBg: '#1E1E24',
  bottomNavActive: '#E33445',
  bottomNavInactive: '#71717A',
  shadow: '#000',
};

export type AppColors = typeof LightColors | typeof DarkColors;
