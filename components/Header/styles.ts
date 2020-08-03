import styled from 'styled-components';
import customColors from '../../styles/customColors';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 6rem;
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
  padding: 0.5rem 0;
  display: flex;
  background: #542;
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

export const Hamburger = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			right: 18%;
			top: 1.4rem;

			@media (max-width: 960px) {
				right: 35%;
			}

			@media (max-width: 600px) {
				right: 66%;
			}
	`}
`;

export const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: #FFF;
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;

	@media (max-width: 600px){
		width: 1.6rem;
	}

	${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
    transform: translateY(8px) rotate(-135deg);
    background-color: #96F3B2;
	`}

	${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
			transform: scale(0);
	`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
      transform: translateY(-6px) rotate(-45deg);
      background-color: #96F3B2;
	`}
`;

export const Sidebar = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: ${customColors.menu};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;
