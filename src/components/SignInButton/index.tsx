import { CloseIcon, GithubIcon } from '@assets/icons';
import { theme } from '@stitches';
import * as S from './styles';

export function SignInButton() {
  const isSigned = true;

  return isSigned ? (
    <S.Container>
      <GithubIcon color={theme.colors['green-500']} />
      Renan Alves
      <CloseIcon color="#737380" />
    </S.Container>
  ) : (
    <S.Container>
      <GithubIcon color={theme.colors['yellow-500']} />
      Sing in with Github
    </S.Container>
  );
}
