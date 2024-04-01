
import * as S from "../Styles/main_styled"
import sofa from "../../assets/sofa.svg"
import restaurant from "../../assets/restaurant.svg"
import banner from "../../assets/banner.svg"
import bigmac from "../../assets/bigmac.svg"
import batata from "../../assets/batata.svg"
import sorvete from "../../assets/sorvete.svg"
import Card from "../Card/Card"
import { useEffect, useState } from "react"


export default function Main() {

  const [item, setItem] = useState(bigmac)
  const [backcolor, Setbackcolor] = useState("#FEB706")
  const [color, Setcolor] = useState("#DB0007")
  const [pColor, SetpColor] = useState("#FFFF")

  useEffect(()=>{
    if(item === bigmac){
      Setbackcolor();
    }else if (item === batata){
      Setbackcolor("#DB0007");
    }else if (item === sorvete){
      Setbackcolor("#FFFF")
    }
  },[item]);

  useEffect(()=>{
    if(item === bigmac){
      Setcolor();
    }else if(item === batata){
      Setcolor("#FEB706");
    }
  },[item]);

  useEffect(()=>{
    if(item === bigmac){
      SetpColor();
    }else if(item === batata){
      SetpColor();
    }else if(item === sorvete){
      SetpColor("#DB0007");
    }
  },[item]);
  return (
    <main>
      <S.Section  style={{ backgroundColor: backcolor}}>
        <S.BoxRequests>
          <img src={item} alt=" Imagem de um BigMac" />
        <S.BoxText> 
          <S.Text style={{ color: pColor}}>bateu aquela</S.Text>
          <S.Text style={{ color: pColor}}><span style={{ color: color}}>#fome</span> de <span style={{ color: color}}>méqui</span>?</S.Text>
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
        <Card image={sofa} text={"Que tal  um #MéquiNoSofa?"} buttonText={"Clique aqui"}/>
        <Card image={restaurant} text={"Venha conheçer nossa loja"} buttonText={"Clique aqui"}/>
        <Card image={banner} text={"Confira as medidas que o Méqui adotou!"} buttonText={"Clique aqui"}/>
      </S.BoxCard>
      </S.Promotion>
    </main>
  )
}
