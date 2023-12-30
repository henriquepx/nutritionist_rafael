import styled from 'styled-components';

const WppLocal = styled.a`
    position: fixed;
    right: 1%;
    bottom: 2%;
    z-index: 999;
    img {
        height: 50px;
    }
`

const Wpp = () => {
  return (
      <WppLocal href='https://wa.me/5521981033649?text=Ol%C3%A1%2C+Rafael.+Gostaria+de+uma+consulta%21' target='_blank'>
          <img src="./wpp.png" alt="Wpp" />
    </WppLocal>
  )
}

export default Wpp