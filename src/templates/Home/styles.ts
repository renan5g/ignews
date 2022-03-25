import { styled } from '@stitches';

export const Container = styled('main', {
  maxWidth: '$maxWidth',
  margin: '0 auto',
  px: '$8',
  height: 'calc(100vh - 5rem)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Hero = styled('section', {
  maxWidth: '600px',

  '& > span': {
    fontSize: '$2xl',
    fontWeight: '$bold',
  },

  '& h1': {
    fontSize: '$8xl',
    lineHeight: '$fontSizes$8xl',
    fontWeight: '$black',

    marginTop: '$6',

    '& span': {
      color: '$cyan-500',
    },
  },

  '& p': {
    fontSize: '$2xl',
    lineHeigth: '$fontSizes$5xl',
    marginTop: '$6',

    '& span': {
      color: '$cyan-500',
      fontWeight: '$bold',
    },
  },
});
