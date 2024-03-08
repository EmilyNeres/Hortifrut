import styled, { createGlobalStyle, css } from "styled-components" //importa funcionalidades da biblioteca styled-components, que permite criar componentes estilizados em React.

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box; 
  font-family: sans-serif;
}
`
// Mixin para centralizar e alinhar itens
const Display = css`
display: flex;
align-items: center;
justify-content: center;
`

//estilo para a seção principal 
export const Main = styled.main`
background-color: #F66000;
height: 100vh;
`

//estilo do titulo
export const H1 = styled.h1`
color: white;
width: 31.9vw;
font-weight: 200;
font-size: 5rem;
${Display}
flex-direction: column;
`

//Define estilos para caixa1 da página
export const BoxOne = styled.div`
height: 45vh;
width: 40.8vw;
${Display}
flex-direction: column;
align-items: end;
justify-content: space-around;
gap: 30px;
h2{
    color: white;
    font-size: 3rem;
    font-weight: 200;
    width: 31.9vw;
}
`
export const Boxtwo = styled.div`
height: 50vh;
width: 100%;
${Display}
flex-wrap: wrap;
justify-content: space-evenly;
`

// Estilo para a área de exibição dos produtos
export const BoxItem = styled.div`
height: 50vh;
width: 48vw;
${Display}
flex-wrap: wrap;
justify-content: space-evenly;
img{
    width: 10vw;
    border-radius: 10px;
    cursor: pointer;
}
`
export const Carrinho = styled.div`
width: 27.5vw;
height: 80vh;
border-radius: 120px;
${Display}
justify-content: space-around;
flex-direction: column;
background-color: #F7E0CE;
position: absolute;
bottom: 0vh;
`

// Estilo para o contêiner do carrinho
export const Ancora = styled.div`
position: relative;
width: 30vw;
height: 50vh;
`

 // Estilo para a área secundária de exibição do carrinho
export const SecondCarrinho = styled.div`
width: 22.2vw;
height: 48vh;
background-color: #D3C5BB;
border-radius: 80px;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
 h3 {
  width: 12vw;
  height: 7vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.1rem;
}
img{
    width: 10vw;
    border-radius: 10px;
}

`

// Estilo para os botões de adicionar e remover produtos
export const MaisEmenos = styled.div`
 width: 12vw;
  height: 7vh;
  border-radius: 100px;
  background-color: #D3C5BB;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button{
    border-radius: 100px;
    width: 30px;
    height: 30px;
    border: solid 1px;
    font-size: 1.5rem;
    background-color: #D3C5BB;
    cursor: pointer;
  }
`