import styled from 'styled-components';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const MainContainer = styled.main`
    position: relative;
`
const MainSize = styled.div`
`
const ArrowsToChange = styled.div`
    position: absolute;
    right: 0;
    bottom: 50px;
    background-color: #fff;
    padding: 1rem 3rem;
    display: flex;
    gap: 20px;
`
const DivBgMain = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 70vh;
    background-image: url('/bg.jpg');
`

const Main = () => {
  return (
    <MainContainer>
          <MainSize>
              <ArrowsToChange>
                  <GoArrowLeft size={21} color="#000000" />
                  <GoArrowRight size={21} color="#000000" />
              </ArrowsToChange>
            <DivBgMain></DivBgMain>
        </MainSize>
    </MainContainer>
  )
}

export default Main