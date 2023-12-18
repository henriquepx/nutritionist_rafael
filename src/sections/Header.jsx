import styled from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const HeaderSize = styled.div`
    max-width: 1400px;
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
    gap: 15px;
    a {
        cursor: pointer;
    }
`
const TitleHeader = styled.h1`
    font-size: 1.2rem;
    font-weight: 610;
    margin: 0rem 3rem;
`
const NavHeader = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 30px;
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
const Button = styled.button`
  border: none;
  padding: 10px 34px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  &::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: '';
    width: 50%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
  }

  .btn-text {
    color: white;
    mix-blend-mode: difference;
  }

  &::after {
    content: '»';
    color: #000;
    font-size: 1.7rem;
    position: absolute;
    opacity: 0;  
    top: 2px;
    right: -20px;
    transition: 0.8s;
  }

  &:hover {
    &::after {
        opacity: 1;
        right: 10px;
        color: #fff;
    }
    &::before {
      background: black;
      width: 110%;
    }
  }
`;

const Header = () => {
  return (
      <header>
        <HeaderSize>
            <DivIconsHeader>
                <a href="" target='_blank'><FaInstagram size={21} color="#000000" /></a>
                <a href="" target='_blank'><FaWhatsapp size={21} color="#000000" /></a>
            </DivIconsHeader>
            <NavHeader>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <TitleHeader>Rafael - Nutrição</TitleHeader>
                    <li><a href="#">Avaliações</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </NavHeader>
            <Button className="btn">
                <span className="btn-text">Consulta</span>
            </Button>
          </HeaderSize>
    </header>
  )
}

export default Header