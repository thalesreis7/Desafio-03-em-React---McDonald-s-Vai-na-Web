import * as S from "../Styles/footer_styled"
import logo from "../../assets/logo.svg"
import playstore from "../../assets/playstore.svg"
import appstore from "../../assets/appstore.svg"

export default function Footer() {
  return (
    <S.Footer>
      <S.Copy>
        <img src={logo} alt="Logo do McDonald's" />
        <p> © McDonald&apos;s  2024</p>
      </S.Copy>
      <S.Boxmobile>
        <img src={playstore} alt="Imagem da PlayStore" />
        <img src={appstore} alt="Imagem da AppStore" />
      </S.Boxmobile>
    </S.Footer>
  )
}
