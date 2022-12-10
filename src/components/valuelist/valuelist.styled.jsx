import styled from '@emotion/styled';

export const List = styled.ul`
  width: ${p => p.theme.sizes.width.container};
  height: ${p => p.theme.sizes.height.container};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[9]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};

  align-items: center;
  justify-content: center;

  background-color: ${p => {
    switch (p.color) {
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

  display: flex;

  height: ${p => p.theme.sizes.height.totalItem};
  width: ${p => p.theme.sizes.width.totalItem};

  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.secondary};
`;
export const Value = styled.span`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;
