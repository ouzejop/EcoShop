import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <img src="/path-to-logo.png" alt="Logo" />
        </LogoSection>
        <LinksSection>
          <FooterLink href="#">Shop</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
        </LinksSection>
        <SocialSection>
          <SocialIcon href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
        </SocialSection>
      </FooterContent>
      <Copyright>&copy; 2024 Your Company Name. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  img {
    width: 100px;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #0073e6;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 0.875rem;
`;

export default Footer;
