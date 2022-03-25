import { LogoSvg } from '@assets/images';
import { SignInButton } from '@components/SignInButton';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <LogoSvg />

        <S.NavContainer>
          <S.NavLink active>Home</S.NavLink>
          <S.NavLink>Posts</S.NavLink>
        </S.NavContainer>

        <SignInButton />
      </S.Wrapper>
    </S.Container>
  );
}
