import { AvatarSvg } from '@assets/images';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Hero>
        <span>👏 Hey, Welcome!</span>

        <h1>
          News about <br /> the <span>React</span> world.
        </h1>

        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
      </S.Hero>

      <AvatarSvg />
    </S.Container>
  );
}
