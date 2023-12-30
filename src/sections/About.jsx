import styled from 'styled-components';

const AboutContainer = styled.div`
  height: 80vh;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  padding: 7rem 0rem;
  display: flex;
  gap: 60px;
`
const ImgRafael = styled.img`
  border-radius: 50%;
  height: 220px;
`
const AboutTextContainer = styled.div`
  h3 {
    text-transform: uppercase;
    font-size: .8rem;
  }
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1rem;
  }
`
const TextIntroductionAbout = styled.div`
  p {
    margin: 13px 0;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <ImgRafael src="rafael.jpg" alt="Rafael Foto" />
      <AboutTextContainer>
        <h3>Sobre minha trajetória</h3>
        <h1>Nutricionista Carioca</h1>
        <TextIntroductionAbout>
          <p>Eu me chamo Rafael Francisco, sou nutricionista clínico com uma pegada integrativa. </p>
          <p>Meu trabalho com a nutrição tem o foco no emagrecimento e na hipertrofia; porém, desenvolvo uma visão holística, buscando qualidade de vida e saúde para todo o corpo.</p>
          <p>Desenvolvo um trabalho com meus clientes de conscientização e reeducação alimentar; onde eles são orientados a comer de forma saudável e equilibrada. Neste processo de reeducação alimentar e conscientização, eles se deparam com os malefícios dos alimentos industrializados para a saúde; demonstro também a diferença entre alimento e subproduto alimentício, adquirindo consciência é possível escolher o que se deseja para sua vida e ser saudável.</p>
        </TextIntroductionAbout>
      </AboutTextContainer>
    </AboutContainer>
  )
}

export default About