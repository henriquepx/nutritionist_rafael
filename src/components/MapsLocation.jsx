import styled from 'styled-components';

const MapsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;

    margin-bottom: 3rem;
`;

const MapIframe = styled.iframe`
    max-width: 800px;
    width: 100%;
    height: 350px;
    border: 0;
`;

const MapsLocation = () => {
    return (
        <MapsContainer>
            <MapIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.716527055232!2d-43.31374638799323!3d-22.849974935758933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ca2b750670d%3A0x71642697486b8e2b!2sCarioca%20Offices!5e0!3m2!1spt-BR!2sbr!4v1704236492289!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></MapIframe>
            <MapIframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.8609549779903!2d-43.31249428799347!3d-22.844633235568434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d4a7a2493f3%3A0xde5f6d002b963d52!2sINSTITUTO%20CARLA%20VEIGA!5e0!3m2!1spt-BR!2sbr!4v1704236563950!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></MapIframe>
        </MapsContainer>
    );
};

export default MapsLocation;
