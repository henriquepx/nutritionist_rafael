import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --font: 'Montserrat', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        scroll-behavior: smooth;
        vertical-align: baseline;
        list-style: none;
        text-decoration: none;
        line-height: 1.2;
        font-family: 'Montserrat', sans-serif;
        ::-webkit-scrollbar {
            width: 10px; 
        }
        ::-webkit-scrollbar-thumb {
            background-color: #797979;
        }
        ::-webkit-scrollbar-track {
            background-color: #ffffff; 
        }
    }

    body {
        background-color: #ffffff;
    }
  
`;

/*
Nutricionista clínico e esportivo
- Formado na IBMR Laureate
  CRN 23100547

Te guio no caminho dos seus objetivos:

🍎 Emagrecimento 🏃🏻‍♂
🥑 Hipertrofia 🏋🏻‍♂
🍓 Reeducação alimentar 🙆🏻‍♂
🍋 Qualidade de vida

📍 Atendimento presencial e online

Alcance suas metas sem radicalismo e sem fazer dietas que estão na moda, comigo você terá um planejamento alimentar totalmente individualizado e preparado cuidadosamente para te entregar o resultado que você espera.

Seus objetivos, nossas metas!
Acerte o 🎯

• Agende a sua consulta

*/

export default GlobalStyle;