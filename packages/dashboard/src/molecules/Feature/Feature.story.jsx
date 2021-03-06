import React from 'react';
import Feature from './Feature';
import Story from '@lskjs/dev/Story';

const articles = [
  {
    icon: '123',
    header: 'RESPONSIVE DESIGN',
    content1: 'mobile-ready design adopt to ',
    content2: 'any device',
    center: true,
  },
];

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/Feature', module)
    .add('Default', () => (
      <Story>
        <Feature {...articles[0]} />
      </Story>
    ))
);
