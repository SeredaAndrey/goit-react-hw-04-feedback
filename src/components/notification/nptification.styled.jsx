import styled from '@emotion/styled';

export const Message = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: ${p => p.theme.sizes.width.container};
  height: ${p => p.theme.sizes.height.container};

  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[9]};

  padding-top: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.secondary};

  background-color: ${p => p.theme.color.background};
`;
