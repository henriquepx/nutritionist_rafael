import styled from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const HeaderSize = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
`
const DivIconsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    a {
        cursor: pointer;
    }
`
const TitleHeader = styled.h1`
    font-size: 1.2rem;
    font-weight: 610;
`
const NavHeader = styled.div`
    ul {
        display: flex;
        gap: 10px;
        li {
            a {
                color: #000;
                font-weight: 500;
                &:visited {
                    color: #000;
                }
            }
        }
    }
`

const Header = () => {
  return (
      <header>
          <HeaderSize>
              <DivIconsHeader>
                  <a href="" target='_blank'><FaInstagram /></a>
                  <a href="" target='_blank'><FaWhatsapp /></a>
              </DivIconsHeader>
              <TitleHeader>Rafael</TitleHeader>
              <NavHeader>
                  <ul>
                      <li><a href="#">Sobre</a></li>
                      <li><a href="#">Serviços</a></li>
                      <li><a href="#">Avaliações</a></li>
                      <li><a href="#">Contato</a></li>
                  </ul>
              </NavHeader>
          </HeaderSize>
    </header>
  )
}

export default Header