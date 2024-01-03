import styled from 'styled-components';

const AreasContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 50px;

  margin-bottom: 10rem;
`
const SelectedArea = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    img {
        height: 400px;
    }
`
const TextSelectedArea = styled.div`
    text-align: left;
`
const TextSelectedAreaL = styled(TextSelectedArea)`
    text-align: right;
`

const AreasWork = () => {
  return (
      <AreasContainer>
          <SelectedArea>
              <TextSelectedAreaL>
                  <h1>Emagrecimento</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem, accusamus eius fugit iusto ut hic inventore laborum explicabo velit?</p>
              </TextSelectedAreaL>
              <img src="photo1.jpg" alt="" />
          </SelectedArea>
          <SelectedArea>
                <img src="photo3.jpg" alt="" />
              <TextSelectedArea>
                  <h1>Hipertrofia</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem, accusamus eius fugit iusto ut hic inventore laborum explicabo velit?</p>
              </TextSelectedArea>
          </SelectedArea>
          <SelectedArea>
              <TextSelectedAreaL>
                  <h1>Reducação Alimentar</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem, accusamus eius fugit iusto ut hic inventore laborum explicabo velit?</p>
              </TextSelectedAreaL>
              <img src="photo4.jpg" alt="" />
        </SelectedArea>
      </AreasContainer>
  )
}

export default AreasWork