import styled from 'styled-components';
import customColors from '../../styles/customColors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
      display: block;
      z-index: 4;
  `}
`;

export const Container = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffffff;
  }
`;

export const MyName = styled.div`
  font-size: 24px;
  color: ${customColors.white};
`;

export const Anchor = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
