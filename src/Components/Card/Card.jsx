/* eslint-disable react/prop-types */
import * as S from "../Styles/card_styled"

export default function Card(props) {
  return (
    <S.Card>
      <img src={props.image} alt="" />
      <p>{props.text}</p>
      <button>{props.buttonText}</button>
    </S.Card>
  )
}
