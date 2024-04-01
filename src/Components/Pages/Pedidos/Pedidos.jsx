import Footer from "../../Footer/Footer";
import * as S from "../../Styles/pedidos_styled"
import logo2 from "../../../assets/logo2.svg"
import backgroundpedidos from "../../../assets/backgroundpedidos.png"
import { Link } from "react-router-dom";
// import mcflurry from "../../../assets/mcflurry.png"

export default function Pedidos() {
  return (
    <>
      <S.Header>
        <div>
            <Link to="/">
             <img src={logo2} alt="Logotipo do McDonal'ds em vermelho" />
            </Link>
        </div>
        <S.Navegation>
            <S.BoxLi>
                <li>Café da Manha</li>
                <li>Promoções</li>
                <li>Menu</li>
                <li>Meus Pedidos</li>
            </S.BoxLi>
        </S.Navegation>
      </S.Header>
      <S.Section>
         <img src={backgroundpedidos} alt="Imagem de hamburguers do McDonald's" />
      </S.Section>
      <S.SectionTwo>
        
      </S.SectionTwo>
      <Footer/>
    </>
  )
}
