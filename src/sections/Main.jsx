import { useState } from 'react';
import styled from 'styled-components';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const MainContainer = styled.main`
  position: relative;
`;

const MainSize = styled.div``;

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
  height: 70vh;
  background-image: url('/bg.jpg');
`;

const DivBgMainText = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding-top: 14rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 65ch;
    margin: 5px 0;
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
        <DivBgMain>
          <DivBgMainText>
            <h1>NUTRIÇÃO LEVE E OBJETIVA</h1>
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
      </MainSize>
    </MainContainer>
  );
};

export default Main;
