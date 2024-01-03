import styled from 'styled-components';
import { FaWhatsapp, FaFacebook, FaInstagram, FaComment } from 'react-icons/fa'

const FooterContainer = styled.footer`
    height: 40vh;
    background-color: #000;
    color: #fff;
    padding: 1.5rem .5rem;
    a {
        color: #fff;
    }
`
const FooterSize = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
`
const DivSeparateTopics = styled.div`
    h1 {
            font-size: 1.2rem;
            margin-bottom: .5rem;
        }
        a {
            color: gray;
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0;
        }
        div {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0;
        }
        p {
            color: gray;
            display: flex;
        }
`

const Footer = () => {
  return (
      <FooterContainer>
          <FooterSize>
            <DivSeparateTopics>
                <h1>Navegação</h1>
                <nav>
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Avaliações</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </DivSeparateTopics>
            <DivSeparateTopics>
                  <h1>Contato</h1>
                  <p>Envie uma mensagem, não perca essa oportunidade</p>
                  <div>
                      <FaComment />
                      <p>nutricionistarafaelpereira@gmail.com</p>
                  </div>
            </DivSeparateTopics>
            <DivSeparateTopics>
                  <h1>Mídias sociais</h1>
                  <a href="#" target='_blank'>
                      <FaWhatsapp />
                      <p>Envie uma mensagem</p>
                  </a>
                  <a href="#" target='_blank'>
                      <FaFacebook />
                      <p>Rafael Pereira</p>
                  </a>
                  <a href="#" target='_blank'>
                      <FaInstagram />
                      <p>@nutrirafaelpereira</p>
                  </a>
            </DivSeparateTopics>
          </FooterSize>
    </FooterContainer>
  )
}

export default Footer