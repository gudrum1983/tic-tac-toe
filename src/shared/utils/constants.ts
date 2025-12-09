import type { Themes } from '@types';

export const PLAYERS = {
  'X': 'X',
  'O': 'O',
};

export const THEMES: Themes = [
  { name: 'theme-light', label: 'Светлая тема' },
  { name: 'theme-dark', label: 'Темная тема' },
] as const;