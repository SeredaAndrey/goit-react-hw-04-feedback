import styled from '@emotion/styled';

export const ControlsContainer = styled.div`
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

  background-color: ${p => p.theme.color.background};
`;

export const PrimaryTitle = styled.h2`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ControlsButton = styled.button`
  width: ${p => p.theme.sizes.width.button};
  height: ${p => p.theme.sizes.height.button};

  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]};
  }

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.secondary};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${p => {
    switch (p.name) {
      case 'good':
        return p.theme.color.colorGood;
      case 'neutral':
        return p.theme.color.colorNeutral;
      case 'bad':
        return p.theme.color.colorBad;
      default:
        return p.theme.color.backgroundAccent;
    }
  }};
  &:hover,
  &:focus {
    background-color: ${p => {
      switch (p.name) {
        case 'good':
          return p.theme.color.colorGoodHover;
        case 'neutral':
          return p.theme.color.colorNeutralHover;
        case 'bad':
          return p.theme.color.colorBadHover;
        default:
          return p.theme.color.backgroundAccent;
      }
    }};
  }
`;
