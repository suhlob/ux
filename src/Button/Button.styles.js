import styled, { css, keyframes } from 'react-emotion';
import createDynamicTag from '../utils/createDynamicTag';
import removeProps from '../utils/removeProps';
import theme from '../utils/theme';

const iconLeft = css`
  margin-right: 8px;
`;

const iconRight = css`
  margin-left: 8px;
`;

const iconSingle = css`
  margin-left: 0;
  margin-right: 0;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Text = styled('span')`

`;


export const Icon = styled(removeProps('div', ['direction', 'spin']))`
  display: flex;
  margin-top: 0;
  ${(props) => {
    switch (props.direction) {
      case 'left': return iconLeft;
      case 'right': return iconRight;
      case 'single': return iconSingle;
      default: return '';
    }
  }}

  ${props => (props.spin && `
    > svg {
      animation: ${rotate} .6s linear infinite;
    }
  `)}
`;

const largeSize = props => css`
  ${props.new ? `
    padding: 15px 16px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: -0.1px;
  ` : `
    padding: 15px 16px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: -0.1px;
  `}
`;

const defaultSize = css`
  padding: 12px 17px 14px 16px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  min-width: 104px;
`;

const smallSize = css`
  padding: 9px 12px;
  min-width: 48px;

  font-size: 11px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
`;

const iconButtonLeft = props => css`
  display: flex;
  align-items: center;
  ${props.size === 'large' && `
    padding-left: 9px;
    padding-top: 9px;
    padding-bottom: 9px;

    ${Icon} {
      font-size: 24px;
    }
  `}
  ${props.size === 'default' && `
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 12px;

    ${Icon} {
      font-size: 22px;
    }
  `}
  ${props.size === 'small' && `
    padding-left: 9px;
    padding-top: 6px;
    padding-bottom: 6px;

    ${Icon} {
      font-size: 20px;
    }
  `}
`;

const iconButtonRight = props => css`
  display: flex;
  align-items: center;
  ${props.size === 'large' && `
    padding-top: 9px;
    padding-bottom: 9px;
    padding-right: 9px;

    ${Icon} {
      font-size: 24px;
    }
  `}
  ${props.size === 'default' && `
    padding-right: 12px;
    padding-top: 9px;
    padding-bottom: 9px;

    ${Icon} {
      font-size: 22px;
    }
  `}
  ${props.size === 'small' && `
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 6px;

    ${Icon} {
      font-size: 20px;
    }
  `}
`;

const iconButtonSingle = props => css`
  display: flex;
  align-items: center;
  ${props.size === 'large' && `
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    padding-right: 12px !important;
    padding-left: 12px !important;

    ${Icon} {
      font-size: 20px;
    }
  `}
  ${props.size === 'default' && `
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    padding-right: 10px !important;
    padding-left: 10px !important;

    ${Icon} {
      font-size: 20px;
    }
  `}
  ${props.size === 'small' && `
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    padding-right: 8px !important;
    padding-left: 8px !important;

    ${Icon} {
      font-size: 18px;
    }
  `}
`;


const viewSolidDisabled = css`
  background-color: rgb(243, 243, 243) !important;
  color: rgb(158, 158, 158) !important;
  &:hover,
  &:active,
  &:focus {
    background-color: rgb(243, 243, 243) !important;
    color: rgb(158, 158, 158) !important;
  }
`;

const defaultSolidTheme = props => css`
  color: #4a4a4a;
  background-color: #fff;

  &:hover {
    color: #4a4a4a;
    background-color: #fff;
  }

  &:active {
    color: #4a4a4a;
    background-color: #f0f0f0;
  }

  ${props.disabled && `
    color: rgba(74, 74, 74, 0.5) !important;
    background-color: rgba(255, 255, 255, 0.5) !important;
    &:hover,
    &:focus,
    &:active {
      color: rgba(74, 74, 74, 0.5) !important;
      background-color: rgba(255, 255, 255, 0.5) !important;
    }
  `}
`;

const primarySolidTheme = css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkPrimary};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkPrimary};
  }
`;

const dangerSolidTheme = css`
  color: ${theme.colors.main};
  background-color: ${theme.colors.darkerBackground};

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.danger};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkDanger};
  }
`;

const warningSolidTheme = css`
  color: #4a4a4a;
  background-color: ${theme.colors.warning};

  &:hover {
    color: #4a4a4a;
    background-color: ${theme.colors.darkWarning};
  }

  &:active {
    color: #4a4a4a;
    background-color: ${theme.colors.darkWarning};
  }
`;

const infoSolidTheme = css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkPrimary};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkPrimary};
  }
`;

const successSolidTheme = css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.success};

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkSuccess};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkSuccess};
  }
`;

const viewTextDisabled = css`
  color: rgba(74, 74, 74, 0.5) !important;
  background-color: transparent !important;
  &:hover,
  &:active {
    color: rgba(74, 74, 74, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(74, 74, 74, 0.5) !important;
    background-color: rgba(155, 155, 155, 0.12) !important;
  }
`;

const defaultTextTheme = css`
  color: #4a4a4a;
  background-color: transparent;

  &:hover {
    color: #4a4a4a;
    background-color: rgba(130, 130, 139, 0.08);
  }

  &:active {
    color: #4a4a4a;
    background-color: rgba(130, 130, 139, 0.08);
  }
`;

const primaryTextTheme = css`
  color: ${theme.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.lighterPrimary};
  }

  &:active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.lighterPrimary};
  }
`;

const dangerTextTheme = css`
  color: ${theme.colors.danger};
  background-color: transparent;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.danger};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.danger};
  }
`;

const warningTextTheme = css`
  color: ${theme.colors.warning};
  background-color: transparent;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.warning};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.warning};
  }
`;

const infoTextTheme = css`
  color: ${theme.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`;

const successTextTheme = css`
  color: ${theme.colors.success};
  background-color: transparent;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
  }
`;

const viewTransparentDisabled = css`
  color: rgba(255, 255, 255, 0.5) !important;
  background-color: transparent !important;
  &:hover,
  &:active {
    color: rgba(255, 255, 255, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(255, 255, 255, 0.5) !important;
    background-color: rgba(255, 255, 255, 0.16) !important;
  }
`;


const transparentTheme = css`
  color: #fff;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.16);
  }

  &:active {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.16);
  }
`;


const dynamicTag = createDynamicTag('button');
const filteredTag = removeProps(dynamicTag, [
  'new',
  'iconDirection',
  'paint',
  'view',
  'size',
  'block',
  'onlyIcon',
  'twoIcons',
]);

export const Btn = styled(filteredTag)`
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  text-align: center;
  justify-content: center;
  pointer-events: auto;

  ${(props) => {
    if (props.bordered) {
      return `
        box-shadow: 0 0 0 1px;
      `;
    }
    return '';
  }}

  ${(props) => {
    if (props.auto) {
      return `
        @media screen and (max-width: 768px) {
          ${Text} {
            display: none;
          }
          ${Icon} {
            margin-left: 0;
          }
          display: flex;
          align-items: center;
          ${props.size === 'large' && `
            padding-top: 9px;
            padding-bottom: 9px;
            padding-right: 9px;
            padding-left: 9px;

            ${Icon} {
              font-size: 24px;
            }
          `}
          ${props.size === 'default' && `
            padding-top: 8px;
            padding-bottom: 8px;
            padding-right: 8px;
            padding-left: 8px;

            ${Icon} {
              font-size: 22px;
            }
          `}
          ${props.size === 'small' && `
            padding-top: 6px;
            padding-bottom: 6px;
            padding-right: 6px;
            padding-left: 6px;

            ${Icon} {
              font-size: 20px;
            }
          `}
          padding: 11px 12px;
          min-width: auto;
          border-radius: 100px;
        }
      `;
    }
    return '';
  }}
  ${props => (props.new
    ? `font-family: ${props.theme.fontFamily};`
    : `font-family: ${props.theme.fontFamily};`)}

  transition: color .2s ease, background-color .2s ease;
  will-change: color, background-color;

  &:hover {
    cursor: pointer;
  }
  ${(props) => {
    switch (props.size) {
      case 'large': return largeSize;
      case 'small': return smallSize;
      default: return defaultSize;
    }
  }}
  ${(props) => {
    switch (props.iconDirection) {
      case 'left': return iconButtonLeft;
      case 'right': return iconButtonRight;
      case 'single': return iconButtonSingle;
      default: return '';
    }
  }}
  ${(props) => {
    if (props.disabled) {
      switch (props.view) {
        case 'solid': return viewSolidDisabled;
        case 'text': return viewTextDisabled;
        case 'transparent': return viewTransparentDisabled;
        default: return '';
      }
    } else if (props.view === 'solid') {
      switch (props.paint) {
        case 'primary': return primarySolidTheme;
        case 'info': return infoSolidTheme;
        case 'warning': return warningSolidTheme;
        case 'danger': return dangerSolidTheme;
        case 'success': return successSolidTheme;
        default: return defaultSolidTheme;
      }
    } else if (props.view === 'text') {
      switch (props.paint) {
        case 'primary': return primaryTextTheme;
        case 'info': return infoTextTheme;
        case 'warning': return warningTextTheme;
        case 'danger': return dangerTextTheme;
        case 'success': return successTextTheme;
        default: return defaultTextTheme;
      }
    } else if (props.view === 'transparent') {
      return transparentTheme;
    } else {
      return '';
    }
  }}
  ${props => (props.disabled && `
    cursor: not-allowed !important;
  `)}
  ${props => (props.block && `
    width: 100%;
  `)}
  ${props => ((props.block && props.twoIcons) && `
    ${Icon} {
      &:not(:last-child) {
        margin-right: auto !important;
      }
      &:last-child {
        margin-left: auto !important;
      }
    }
  `)}
  ${props => ((props.block && props.iconDirection === 'right') && `
    margin-left: auto;
  `)}
  ${props => (props.onlyIcon && `
    min-width: auto;
    border-radius: 50px;
  `)}
  ${props => ((props.view === 'transparent' && props.state === 'processing') && `
    color: transparent !important;
  `)}
`;

export const RippleCircle = styled('span')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .25);
`;

const aRipple = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    width: 200%;
    padding-bottom: 200%;
    opacity: 0;
  }
`;


export const Ripple = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  ${props => (props.active && `
    ${RippleCircle} {
      animation: ${aRipple} .4s ease-in;
    }`
  )}
`;

export const State = styled(removeProps('div', ['size', 'disabled', 'visible', 'paint', 'iconDirection']))`
  position: absolute;
  display: block;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  cursor: default !important;
  border-radius: 3px;
  ${(props) => {
    if (props.bordered) {
      return `
        box-shadow: inset 0 0 0 1px #fff;
      `;
    }
    return '';
  }}

  opacity: ${p => (p.visible ? 1 : 0)};
  visibility: ${p => (p.visible ? 'visible' : 'hidden')};

  transition: color .2s ease-in-out,
              background-color .2s ease-in-out,
              opacity .2s ease-in-out,
              visibility .2s ease-in-out;
  will-change: background-color, color, opacity, visibility;

  justify-content: center;
  ${(props) => {
    switch (props.iconDirection) {
      case 'left': return iconButtonLeft;
      case 'right': return iconButtonRight;
      case 'single': return iconButtonSingle;
      default: return '';
    }
  }}
  ${(props) => {
    switch (props.size) {
      case 'large': return largeSize;
      case 'small': return smallSize;
      default: return defaultSize;
    }
  }}
  ${(props) => {
    if (props.disabled) return viewSolidDisabled;
    switch (props.paint) {
      case 'primary': return primarySolidTheme;
      case 'info': return infoSolidTheme;
      case 'warning': return warningSolidTheme;
      case 'danger': return dangerSolidTheme;
      case 'success': return successSolidTheme;
      default: return defaultSolidTheme;
    }
  }}
  ${props => ((props.view === 'transparent' && props.state === 'processing') && `
    background-color: transparent !important;
  `)}
`;