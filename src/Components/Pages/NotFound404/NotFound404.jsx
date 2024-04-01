import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import bigmac from "../../../assets/bigmac.svg"
import * as S from "../../Styles/notfound404_styled"
import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <>
      <Header/>
      <S.Section>
        <S.BoxError>
            <S.Fig>
                <p>4</p>
                <img src={bigmac} alt="Imagem erro 404" />
                <p>4</p> 
            </S.Fig>
            <S.H2>ooops!</S.H2>
            <S.Text>parece que a página que voçê está procurando não existe.</S.Text>
            <Link to="/">
                <S.Btn>Voltar</S.Btn>
            </Link>
        </S.BoxError>
      </S.Section>
      <Footer/>
    </>
  )
}
