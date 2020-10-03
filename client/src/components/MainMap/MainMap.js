import styled from "@emotion/styled";

const MainMap = styled.main`
  height: 60%;
  flex: 1;
  overflow: hidden;
  position: relative;

  .mapboxgl-ctrl-geocoder {
    width: 85%;
  }

  .mapboxgl-ctrl-geocoder--input {
  }

  .mapboxgl-popup-content {
    border-radius: 10px;
    box-shadow: 0.5px 0px 20px 0px rgba(0, 0, 0, 0.3);
  }

  .mapboxgl-popup-close-button {
    right: 6px;
    top: 5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 19px;
  }
`;

export default MainMap;
