import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import Avatar from '@lskjs/ui/Avatar';
import UserTitle from '../../atoms/UserTitle';
import UserPosition from '../../atoms/UserPosition';
import AvatarWrapper from '../../atoms/AvatarWrapper';
import Card from '../../atoms/Card';

class UserCard extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    componentClass: PropTypes.any,
    href: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.string,
    position: PropTypes.string,
    backgroundColor: PropTypes.string,
    footer: PropTypes.any,
  };
  static defaultProps = {
    id: null,
    title: null,
    avatar: null,
    position: null,
    href: null,
    backgroundColor: null,
    componentClass: 'a',
    footer: null,
  }
  render() {
    const {
      id,
      componentClass,
      href,
      title,
      avatar,
      position,
      backgroundColor,
      footer,
      ...props
    } = this.props;
    return (
      <Card componentClass={componentClass} href={href} {...props}>
        <AvatarWrapper>
          <Avatar
            id={id}
            title={title}
            src={avatar}
            size={80}
            innerStyle={{ border: '6px solid #d68345' }}
            backgroundColor={backgroundColor}
          />
        </AvatarWrapper>
        <If condition={!!title}>
          <UserTitle>{title}</UserTitle>
        </If>
        <If condition={!!position}>
          <UserPosition>{position}</UserPosition>
        </If>
        <If condition={!!footer}>
          {footer}
        </If>
      </Card>
    );
  }
}

export default UserCard;
