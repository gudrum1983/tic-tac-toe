export type TOKEN_SIZE = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TokenSize = Exclude<TOKEN_SIZE, 'none'>;

export type TokenRadius = Exclude<TOKEN_SIZE, 'none'>;