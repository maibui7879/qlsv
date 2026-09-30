export type StatIcon = 'book' | 'task' | 'check';

export interface Stat {
  id: string;
  value: string;
  title: string;
  icon: StatIcon;
  color: string;
  bg: string;
}

export type CourseIcon = 'mobile' | 'database' | 'network' | 'ai' | 'web';

export interface Course {
  id: string;
  name: string;
  code: string;
  lessons: number;
  progress: number; 
  icon: CourseIcon;
  color: string;
  bg: string;
  teacher: string;
}

export const STUDENT = {
  greeting: 'Xin chào',
  name: 'Bùi Đức Mạnh',
  studentId: 'MSV: B23DCCC107',
  avatar:
    'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/637684649_924824026902658_8128592194137443217_n.jpg?stp=dst-jpg_tt6&cstp=mx448x450&ctp=s200x200&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHyTBSMqVtAuhT0CEPWmcTGZMiOuDLzaO1kyI64MvNo7SFDqdq0ALf1MnFWdLIWh6P_RbQN0LmVBPoZMBBdBRu4&_nc_ohc=mRGOaDlzHcIQ7kNvwHhJ5OL&_nc_oc=AdpbE6nNAxXtdcCBKNkfyl8qGtTMR9s0s5EMcCO-N_rTitZkxjfs-97v__GPQwo5Wzo&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=kktAIjPzNuPNcz98c6h6Jw&_nc_ss=7b2a8&oh=00_AQNyhX3xx9vORLFtbgRcAPM3MVqYTi5xWVlFItlFBLcrgA&oe=6AC274EA',
};

export const STATS: Stat[] = [
  { id: '1', value: '8', title: 'Tổng môn học', icon: 'book', color: '#C8102E', bg: '#FDECEF' },
  { id: '2', value: '24', title: 'Số bài tập', icon: 'task', color: '#D97706', bg: '#FFF4DE' },
  { id: '3', value: '3', title: 'Đã hoàn thành', icon: 'check', color: '#16A34A', bg: '#E7F6EC' },
];

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Lập trình ứng dụng di động đa nền tảng',
    code: 'INT3315',
    lessons: 12,
    progress: 100,
    icon: 'mobile',
    color: '#C8102E',
    bg: '#FDECEF',
    teacher: 'ThS. Trần Văn A',
  },
  {
    id: '2',
    name: 'Cơ sở dữ liệu',
    code: 'INT2207',
    lessons: 15,
    progress: 75,
    icon: 'database',
    color: '#2563EB',
    bg: '#E8F0FE',
    teacher: 'TS. Nguyễn Thị B',
  },
  {
    id: '3',
    name: 'Mạng máy tính',
    code: 'INT2211',
    lessons: 10,
    progress: 45,
    icon: 'network',
    color: '#D97706',
    bg: '#FFF4DE',
    teacher: 'ThS. Lê Văn C',
  },
  {
    id: '4',
    name: 'Trí tuệ nhân tạo',
    code: 'INT3401',
    lessons: 14,
    progress: 30,
    icon: 'ai',
    color: '#7C3AED',
    bg: '#EDE9FE',
    teacher: 'PGS. Phạm Văn D',
  },
  {
    id: '5',
    name: 'Lập trình Web',
    code: 'INT3306',
    lessons: 16,
    progress: 60,
    icon: 'web',
    color: '#16A34A',
    bg: '#E7F6EC',
    teacher: 'ThS. Hoàng Thị E',
  },
];
