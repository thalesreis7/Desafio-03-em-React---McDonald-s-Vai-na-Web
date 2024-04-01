import * as S from "../Styles/header_styled";
import logo from "../../assets/logo.svg"
import app from "../../assets/app.svg"
import celular from "../../assets/celular.svg"
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <S.Header>
        <S.Boxapp>
            <Link to="/">
             <img src={logo} alt="Imagem do logo da Mcdonalds" />
            </Link>
            <S.BoxCard>
            <S.App color="#fff">
                <img src={app} alt="Imagem ilustrando um aplicativo de smartphone" />
                <Link to="/appPage">Baixe o App</Link>
            </S.App>
            <S.App color="#FFC72C">
                <Link to="/Pedidos">Peça seu Mequi</Link>
                <img src={celular} alt="Imagem ilustrando um celular"/>
            </S.App>
            </S.BoxCard>
        </S.Boxapp>
    </S.Header>
  )
}
