import { styled } from '@stitches';

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '$12',
  borderRadius: '$full',
  px: '$5',
  gap: '$4',

  background: '$cyan-900',
  fontWeight: '$bold',
  color: '$white',

  transition: 'filter .2s',

  '& svg': {
    boxSize: 28,
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});
