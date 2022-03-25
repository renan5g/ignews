import { styled } from '@stitches';

export const Container = styled('header', {
  height: '$20',
  borderBottom: '$borderWidths$thin solid $colors$gray-800',
});

export const Wrapper = styled('div', {
  maxWidth: '$maxWidth',
  height: '$20',
  margin: '0 auto',
  px: '$8',

  display: 'flex',
  alignItems: 'center',

  '& button': {
    marginLeft: 'auto',
  },
});

export const NavContainer = styled('nav', {
  marginLeft: '$20',
  height: '$20',
});

export const NavLink = styled('a', {
  display: 'inline-block',
  position: 'relative',

  px: '$2',
  height: '$20',
  lineHeight: '$space$20',
  color: '$gray-300',

  transition: 'color .2s',

  '& + a': {
    marginLeft: '$6',
  },

  '&:hover': {
    color: '$white',
  },

  variants: {
    active: {
      true: {
        color: '$gray-100',
        fontWeight: '$bold',

        '&::after': {
          content: '',
          position: 'absolute',
          width: '$sizes$full',
          height: 3,
          bottom: 1,
          left: 0,
          borderRadius: '$xs $xs 0 0',
          background: '$yellow-500',
        },
      },
    },
  },
});
