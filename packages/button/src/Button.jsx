import React, { PureComponent } from 'react';
import autobind from '@lskjs/autobind';
import CheckIcon from 'react-icons2/mdi/check';
import CloseIcon from 'react-icons2/mdi/close';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import If from 'react-if';
import filterProps from '@lskjs/utils/filterProps';
import isTouchDevice from '@lskjs/utils/isTouchDevice';
import LoadingDots from './components/LoadingDots';
import {
  Btn,
  Text,
  Icon,
  State,
  Ripple,
  RippleCircle,
} from './Button.styles';

class Button extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    bordered: PropTypes.bool,
    borderColor: PropTypes.string,
    size: PropTypes.oneOf([
      'extraSmall',
      'verySmall',
      'small',
      'default',
      'large',
      'extraLarge',
    ]),
    paint: PropTypes.oneOf([
      'default',
      'primary',
      'warning',
      'danger',
      'info',
      'common',
      'success',
      'transparent',
      'transparentDark',
    ]),
    state: PropTypes.oneOf([
      'processing', 'progress',
      'success',
      'error',
      'ready', null,
    ]),
    view: PropTypes.oneOf([
      'solid',
      'text',
      'base',
      'shadow',
      'youtube',
      'empty',
      'transparent',
      'transparentDark',
    ]),
    type: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    componentClass: PropTypes.any,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    new: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    iconLeft: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    iconRight: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    contentSuccess: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    contentProcessing: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    contentError: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    textSuccess: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    textProcessing: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    textError: PropTypes.any,
    autoMobile: PropTypes.bool,
    rounded: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    colors: PropTypes.object,
    isRipple: PropTypes.bool,
    mobileView: PropTypes.bool,
    onlyIcon: PropTypes.bool,
  }

  static defaultProps = {
    size: 'default',
    paint: 'default',
    view: 'solid',
    bordered: false,
    borderColor: null,
    type: 'button',
    style: {},
    componentClass: 'button',
    onClick: null,
    block: false,
    disabled: false,
    new: false,
    className: null,
    icon: null,
    iconLeft: null,
    iconRight: null,
    children: null,
    state: null,
    contentSuccess: null,
    contentProcessing: null,
    contentError: null,
    textSuccess: null,
    textProcessing: null,
    textError: null,
    autoMobile: false,
    rounded: false,
    colors: null,
    mobileView: false,
    onlyIcon: false,
    isRipple: !isTouchDevice(),
  }

  constructor(props) {
    super(props);
    this.state = {
      isRippleActive: false,
    };
    this.ripple = React.createRef();
  }

  componentDidMount() {
    const { disabled, isRipple } = this.props;
    if (typeof window !== 'undefined') {
      if (!disabled && isRipple) {
        const condition = this.isBrowser('safari') || this.isBrowser('firefox');
        this.ripple.current.addEventListener(condition ? 'click' : 'mousedown', this.clickListener);
      }
    }
  }

  componentWillUnmount() {
    const { disabled, isRipple } = this.props;
    if (typeof window !== 'undefined') {
      if (!disabled && isRipple) {
        const condition = this.isBrowser('safari') || this.isBrowser('firefox');
        this.ripple.current.removeEventListener(condition ? 'click' : 'mousedown', this.clickListener);
      }
    }
  }

  getPropsState() {
    const { state } = this.props;
    if (state === 'processing' || state === 'progress') {
      return 'processing';
    }
    if (state === 'ready' || state === null) {
      return 'ready';
    }
    return state;
  }

  @autobind
  getButtonStateTheme() {
    const {
      paint,
      contentError,
      contentProcessing,
      contentSuccess,
      textError,
      textProcessing,
      textSuccess,
    } = this.props;
    switch (this.getPropsState()) {
      case 'processing':
        return {
          paint,
          content: contentProcessing || (
            <React.Fragment>
              <Icon direction={textProcessing ? 'left' : 'single'}>
                <LoadingDots />
              </Icon>
              {textProcessing}
            </React.Fragment>
          ),
        };
      case 'success':
        return {
          // paint: 'success',
          paint: 'primary',
          content: contentSuccess || (
            <React.Fragment>
              <Icon direction={textSuccess ? 'left' : 'single'}>
                <CheckIcon size={32} />
              </Icon>
              {textSuccess}
            </React.Fragment>
          ),
        };
      case 'error':
        return {
          paint: 'danger',
          content: contentError || (
            <React.Fragment>
              <If condition={!textError}>
                <Icon direction={textError ? 'left' : 'single'}>
                  <CloseIcon />
                </Icon>
              </If>
              {textError}
            </React.Fragment>
          ),
        };
      default:
        return {
          paint,
        };
    }
  }

  @autobind
  clickListener(e) {
    const { disabled, isRipple } = this.props;
    if (!disabled && isRipple) {
      this.circle.style.top = `${e.offsetY}px`;
      this.circle.style.left = `${e.offsetX}px`;
      this.setState({ isRippleActive: true });
    }
  }

  isBrowser(name) {
    return document.documentElement.className.includes(name);
  }

  @autobind
  endAnimationRipple() {
    const { disabled, isRipple } = this.props;
    if (!disabled && isRipple) {
      this.setState({ isRippleActive: false });
    }
  }

  @autobind
  renderIcon(icon, dir) {
    return (
      <Icon direction={dir}>
        {icon}
      </Icon>
    );
  }

  render() {
    const { isRippleActive } = this.state;
    let { paint, disabled } = this.props;
    const {
      children,
      view,
      size,
      block,
      state,
      onClick,
      autoMobile,
      componentClass,
      className,
      icon,
      iconLeft,
      iconRight,
      bordered,
      borderColor,
      rounded,
      new: isNew,
      type,
      style,
      colors,
      onlyIcon,
      mobileView,
      isRipple,
      ...props
    } = this.props;
    const tag = componentClass || 'button';
    const icoLeft = icon || iconLeft;
    let iconDirection = null;
    if (iconLeft) iconDirection = 'left';
    if (iconRight) iconDirection = 'right';
    if (icon) iconDirection = 'single';
    let content = '';
    ({
      paint,
      disabled = disabled,
      content,
    } = this.getButtonStateTheme());
    const buttonProps = omit(props, [
      'contentSuccess',
      'contentProcessing',
      'contentError',
      'textSuccess',
      'textProcessing',
      'textError',
    ]);
    return (
      <Btn
        type={type}
        mobileView={mobileView}
        componentClass={tag}
        bordered={bordered}
        borderColor={borderColor}
        rounded={rounded}
        size={size}
        paint={paint}
        view={view}
        block={block}
        disabled={this.getPropsState() === 'ready' && disabled}
        new={isNew}
        state={this.getPropsState()}
        auto={autoMobile}
        className={className}
        iconDirection={iconDirection}
        onlyIcon={onlyIcon || (icon && !children)}
        onClick={!disabled ? onClick : null}
        twoIcons={icoLeft && iconRight}
        style={style}
        colors={colors}
        {...filterProps(buttonProps, tag)}
        // {...buttonProps}
      >
        <If condition={!disabled && isRipple}>
          <Ripple
            ref={this.ripple}
            active={isRippleActive}
          >
            <RippleCircle
              ref={(el) => { this.circle = el; }}
              onAnimationEnd={this.endAnimationRipple}
            />
          </Ripple>
        </If>
        <State
          size={size}
          paint={paint}
          view={view}
          state={state}
          rounded={rounded}
          iconDirection="left"
          bordered={bordered}
          borderColor={borderColor}
          visible={state && state !== 'ready'}
        >
          {content}
        </State>
        {icoLeft && this.renderIcon(icoLeft, icon ? 'single' : 'left')}
        {children && <Text>{children}</Text>}
        {iconRight && this.renderIcon(iconRight, 'right')}
      </Btn>
    );
  }
}

export default Button;
