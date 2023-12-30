import { useState } from 'react';
import styled from 'styled-components';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const MainContainer = styled.main`
  position: relative;
  overflow: hidden;
`;
const MainSize = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;
const ArrowsToChange = styled.div`
  position: absolute;
  right: 0;
  bottom: 50px;
  background-color: #fff;
  padding: 1rem 3rem;
  display: flex;
  gap: 20px;
`;

const PagesToChange = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  background-color: #fff;
  padding: 1rem 1.4rem;
  display: flex;
  gap: 10px;
`;

const DivBgMain = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 60vh;
  background-image: url('/emagrecimento.jpg');
  display: ${(props) => (props.currentPage === 1 ? 'block' : 'none')};
`;

const DivBgMain2 = styled(DivBgMain)`
  background-image: url('/hipertrofia.jpg');
  display: ${(props) => (props.currentPage === 2 ? 'block' : 'none')};
`;

const DivBgMain3 = styled(DivBgMain)`
  background-image: url('/qualidadevida.jpg');
  display: ${(props) => (props.currentPage === 3 ? 'block' : 'none')};
`;


const DivBgMainText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(0, 0, 0, .5);
  width: 50%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem;
  h1 {
    color: #fff;
    font-size: 2.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  p {
    color: #fff;
    font-size: 1rem;
    max-width: 80ch;
    margin: 0 auto;
  }
`;
const DivBgMainText2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgb(0, 0, 0, .5);
  width: 50%;
  margin: 10rem 0rem 0rem 10rem;
  padding: 2rem;
  h1 {
    color: #fff;
    font-size: 2.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  p {
    color: #fff;
    font-size: 1rem;
    max-width: 80ch;
    margin: 0 auto;
  }
`;


const DivBgMainText3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgb(0, 0, 0, .3);
  width: 50%;
  margin: 10rem 0rem 0rem 7rem;
  padding: 2rem;
  h1 {
    color: #fff;
    font-size: 2.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  p {
    color: #fff;
    font-size: 1rem;
    max-width: 80ch;
    margin: 0 auto;
  }
`;


const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleArrowClick = (increment) => {
    const newPage = currentPage + increment;

    if (newPage >= 1 && newPage <= 3) {
      setCurrentPage(newPage);
    }
  };

  return (
    <MainContainer>
      <MainSize>
        <DivBgMain currentPage={currentPage}>
          <DivBgMainText>
            <h1>Frase 1</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              deleniti unde eaque totam eligendi a, nobis asperiores soluta
              numquam vitae nam porro expedita maxime iure eum itaque officia
              fuga delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              vero. Sapiente quas nulla doloremque laborum!
            </p>
          </DivBgMainText>
        </DivBgMain>

        <DivBgMain2 currentPage={currentPage}>
          <DivBgMainText2>
            <h1>Frase 2</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              deleniti unde eaque totam eligendi a, nobis asperiores soluta
              numquam vitae nam porro expedita maxime iure eum itaque officia
              fuga delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              vero. Sapiente quas nulla doloremque laborum!
            </p>
          </DivBgMainText2>
        </DivBgMain2>

        <DivBgMain3 currentPage={currentPage}>
          <DivBgMainText3>
            <h1>Frase 3</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              deleniti unde eaque totam eligendi a, nobis asperiores soluta
              numquam vitae nam porro expedita maxime iure eum itaque officia
              fuga delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              vero. Sapiente quas nulla doloremque laborum!
            </p>
          </DivBgMainText3>
        </DivBgMain3>

      </MainSize>

      <PagesToChange>
        <p>{`0${currentPage}`}</p>
        <p>/</p>
        <p>03</p>
      </PagesToChange>
      <ArrowsToChange>
        <GoArrowLeft
          size={21}
          color="#000000"
          style={{ cursor: 'pointer' }}
          onClick={() => handleArrowClick(-1)}
        />
        <GoArrowRight
          size={21}
          color="#000000"
          style={{ cursor: 'pointer' }}
          onClick={() => handleArrowClick(1)}
        />
      </ArrowsToChange>
    </MainContainer>
  );
};

export default Main;
