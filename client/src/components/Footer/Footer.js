import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import doichelivingSrc from "../../assets/images/doicheliving-logo.png";

const StyledFooter = styled.nav`
  box-shadow: var(--shadow-up);
  max-height: 15%;
  display: flex;
  justify-content: space-around;
  background-color: var(--color-white);
  border-radius: 10px 10px 0px 0px;
  border-top: 1px solid var(--color-grayborder);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={doichelivingSrc} alt="" />
      <img src={doichelivingSrc} alt="" />
      <img src={doichelivingSrc} alt="" />
      <img src={doichelivingSrc} alt="" />
    </StyledFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.array,
};

export default Footer;
