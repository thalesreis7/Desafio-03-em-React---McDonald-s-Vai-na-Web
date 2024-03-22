
import * as S from "./main_styled"
import sofa from "../../assets/sofa.svg"
import restaurant from "../../assets/restaurant.svg"
import banner from "../../assets/banner.svg"
import bigmac from "../../assets/bigmac.svg"
import batata from "../../assets/batata.svg"
import sorvete from "../../assets/sorvete.svg"
import Card from "../Card/Card"
import { useState } from "react"


export default function Main() {

  const [item, setItem] = useState(bigmac)

  return (
    <main>
      <S.Section>
        <S.BoxRequests>
          <img src={item} alt=" Imagem de um BigMac" />
        <S.BoxText> 
          <S.Text>bateu aquela</S.Text>
          <S.Text><span>#fome</span> de <span>méqui</span>?</S.Text>
        </S.BoxText> 
        </S.BoxRequests>
        <S.BoxImages>
          <img onClick={()=>{setItem(bigmac)}} src={bigmac} alt="Imagem  de um BigMac" />
          <img onClick={()=>{setItem(batata)}} src={batata} alt="Imagem de um pacote de batata frita" />
          <img onClick={()=>{setItem(sorvete)}} src={sorvete} alt="Imagem de um sorvete de casquinha" />
        </S.BoxImages>
      </S.Section>
      <S.Promotion>
        <h2>promoção</h2>
      <S.BoxCard>
        <Card image={sofa} text={"Que tal  um #MéquiNoSofa?"} />
        <Card image={restaurant} text={"Venha conheçer nossa loja"} />
        <Card image={banner} text={"Confira as medidas que o Méqui adotou!"} />
      </S.BoxCard>
      </S.Promotion>
    </main>
  )
}
