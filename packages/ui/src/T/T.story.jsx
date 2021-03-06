import React from 'react';
import Story from '@lskjs/dev/Story';
import T from './T';

export default ({ storiesOf }) => (
  storiesOf('ui/T', module)
    .add('empty', () => (
      <Story>
        <T name="test.key" />
      </Story>
    ))
);
