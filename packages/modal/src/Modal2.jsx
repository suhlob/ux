/** @jsx jsx */
/* eslint import/no-extraneous-dependencies: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { jsx, Global } from '@emotion/core';
import If from 'react-if';
import noop from 'lodash/noop';
import uniq from 'lodash/uniq';
import filter from 'lodash/filter';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import merge from 'lodash/merge';
import autobind from '@lskjs/autobind';
import ReactModal from 'react-modal';
import sizes from '@lskjs/utils/sizes';
import isTouchDevice from '@lskjs/utils/isTouchDevice';
import ModalSubtitle from './components/ModalSubtitle';
import ModalDescription from './components/ModalDescription';
import ModalContent from './components/ModalContent';
import ModalFooter from './components/ModalFooter';
import ModalImage from './components/ModalImage';
import ModalHelp from './components/ModalHelp';
import ModalScroll from './components/ModalScroll';
import ModalTitle from './components/ModalTitle';
import ModalTrigger from './components/ModalTrigger';
import ModalInner from './components/ModalInner';
import ModalCloseIcon from './components/ModalCloseIcon';

import {
  bodyModalStyle,
  modalStyle,
  modalSmall,
  modalNormal,
  modalLarge,
  InnerWrapper,
} from './Modal2.styles';

import { Provider } from './Modal2.context';

const reactModalProps = [
  'isOpen',
  'onAfterOpen',
  'onRequestClose',
  'closeTimeoutMS',
  'style',
  'contentLabel',
  'portalClassName',
  'overlayClassName',
  'className',
  'bodyOpenClassName',
  'htmlOpenClassName',
  'ariaHideApp',
  'shouldFocusAfterRender',
  'shouldCloseOnOverlayClick',
  'shouldCloseOnEsc',
  'shouldReturnFocusAfterClose',
  'role',
  'parentSelector',
  'aria',
  'data',
  'overlayRef',
  'contentRef',
];

ReactModal.defaultStyles = {
  overlay: {
    ...ReactModal.defaultStyles.overlay,
    backgroundColor: 'rgba(0,0,0,.3)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2030,
  },
  content: {
    ...ReactModal.defaultStyles.content,
    background: 'none',
    border: 'none',
    padding: '20px 15px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

if (typeof (window) !== 'undefined') {
  ReactModal.setAppElement('body');
}

class Modal2 extends PureComponent {
  static Title = ModalTitle;
  static Subtitle = ModalSubtitle;
  static Image = ModalImage;
  static Content = ModalContent;
  static Description = ModalDescription;
  static Help = ModalHelp;
  static Scroll = ModalScroll;
  static Footer = ModalFooter;
  static Trigger = ModalTrigger;
  static InnerWrapper = InnerWrapper;
  static CloseIcon = ModalCloseIcon;
  static Inner = ModalInner;
  static defaultStyles = ReactModal.defaultStyles;

  static propTypes = {
    defaultVisible: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
    Title: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Subtitle: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Image: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Description: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Help: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Scroll: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Trigger: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Inner: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    InnerWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    CloseIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    className: PropTypes.string,
    size: PropTypes.oneOf(uniq(filter(sizes, e => typeof e === 'string'))),
    trigger: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    innerRef: PropTypes.func,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    whiteTheme: PropTypes.bool,
  }

  static defaultProps = {
    defaultVisible: false,
    onOpen: null,
    onClose: null,
    closable: true,
    Title: null,
    Subtitle: null,
    Image: null,
    Content: null,
    Description: null,
    Help: null,
    Scroll: null,
    Footer: null,
    Trigger: null,
    Inner: null,
    InnerWrapper: null,
    CloseIcon: null,
    className: null,
    size: sizes.medium,
    trigger: null,
    innerRef: null,
    style: {},
    whiteTheme: false,
  }

  constructor(props) {
    super(props);
    this.state = { visible: props.defaultVisible, counter: 1 };
  }

  static getDerivedStateFromProps(props) {
    if (typeof props.visible === 'undefined') return null;
    return {
      visible: props.visible,
    };
  }

  componentDidMount() {
    // TODO: Hack. Убрать когда-нибудь
    /* eslint-disable */
    if (isTouchDevice()) {
      setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 500);
    }
    /* eslint-enable */
  }

  @autobind
  toggle() {
    if (this.state.visible) {
      if (this.props.closable) this.close();
    } else {
      this.open();
    }
  }

  @autobind
  open() {
    this.setState({ visible: true });
    if (this.props.onOpen) this.props.onOpen();
  }
  @autobind
  close() {
    // if (!this.props.closable) return;
    this.setState({ visible: false });
    if (this.props.onClose) this.props.onClose();
  }

  render() {
    const Modal = {
      Title: this.props.Title || this.constructor.Title,
      Subtitle: this.props.Subtitle || this.constructor.Subtitle,
      Image: this.props.Image || this.constructor.Image,
      Content: this.props.Content || this.constructor.Content,
      Description: this.props.Description || this.constructor.Description,
      Help: this.props.Help || this.constructor.Help,
      Scroll: this.props.Scroll || this.constructor.Scroll,
      Footer: this.props.Footer || this.constructor.Footer,
      Trigger: this.props.Trigger || this.constructor.Trigger,
      Inner: this.props.Inner || this.constructor.Inner,
      InnerWrapper: this.props.InnerWrapper || this.constructor.InnerWrapper,
      CloseIcon: this.props.CloseIcon || this.constructor.CloseIcon,
    };
    const {
      className,
      size = 'default',
      closable = true,
      trigger,
      innerRef,
      style,
      ...props
    } = this.props;
    const modal = this;
    if (innerRef) innerRef(this);
    return (
      <Provider value={{ modal, Modal }}>
        <Global
          styles={{
            '.bodyModal': bodyModalStyle,
          }}
        />
        <React.Fragment>
          <ReactModal
            ref={closable ? (e) => { this._modal = e; } : noop}
            contentRef={closable ? (e) => {
              if (typeof window !== 'undefined' && e) {
                e.onclick = (event) => {
                  if (!event || !event.target || !event.target.className) return;
                  const str = event.target.className;
                  if (typeof str !== 'string') return;
                  if (str.includes('ReactModal__Content')) {
                    if (this._modal && this._modal.portal) {
                      this._modal.portal.shouldClose = true;
                      this._modal.portal.handleOverlayOnClick(event);
                    }
                  }
                };
              }
            } : noop}
            isOpen={this.state.visible}
            onRequestClose={closable && this.close}
            bodyOpenClassName="bodyModal"
            htmlOpenClassName="bodyModal"
            style={merge(style, Modal2.defaultStyles)}
            {...pick(props, reactModalProps)}
          >
            <span style={{ opacity: 0 }}>{this.state.counter}</span>
            <div
              aria-hidden
              css={[
                className,
                modalStyle,
                sizes.is(size, 'small') ? modalSmall : null,
                sizes.is(size, 'medium') ? modalNormal : null,
                sizes.is(size, 'large') ? modalLarge : null,
              ]}
            >
              {/* <If condition={closable}> */}
              <Modal.CloseIcon onClick={this.close} whiteTheme={!!this.props.whiteTheme} />
              {/* </If> */}
              <Modal.InnerWrapper>
                <Modal.Inner {...omit(props, reactModalProps)} />
              </Modal.InnerWrapper>
            </div>
          </ReactModal>
          <If condition={!!trigger}>
            <Modal.Trigger type="open">{trigger}</Modal.Trigger>
          </If>
        </React.Fragment>
      </Provider>
    );
  }
}


export default Modal2;
