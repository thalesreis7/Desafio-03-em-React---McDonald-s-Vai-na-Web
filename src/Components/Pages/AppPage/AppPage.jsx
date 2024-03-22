import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import appbackground from "../../../assets/appbackground.png";
import * as S from "./appPage_styled";
import Card from "../../Card/Card";
import appgoogle from "../../../assets/appgoogle.jpg"
import appios from "../../../assets/appios.jpg"

export default function AppPage() {
  return (
    <>
      <Header />
      <S.Section>
        <S.Figcaption>
          <img src={appbackground} alt="Imagem informando sobre o download do app McDonal'ds"/>
        </S.Figcaption>
        <S.Boxinfo>
          <S.H2>McDonald&apos;s App</S.H2>
          <S.Text>Baixe o aplicativo e seja o primeiro a saber de tudo. Fique por dentro de todas as nossas novidades!</S.Text>
        </S.Boxinfo>
      </S.Section>
      <S.SectionTwo>
        <S.BoxCard>
            <S.SecondBox>
             <Card image={appgoogle} text={"Android"}/>
            </S.SecondBox>
            <S.SecondBox>
             <Card  image={appios} text={"IOS"}/> 
            </S.SecondBox>
        </S.BoxCard>
      </S.SectionTwo>
      <Footer />
    </>
  );
}
