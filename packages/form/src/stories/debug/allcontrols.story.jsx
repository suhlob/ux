import React from 'react';
import Story from '@lskjs/dev/Story';
import AllControlsForm from './AllControlsForm';

export default ({ storiesOf }) =>
  storiesOf('form/debug', module)
    .add('allcontrols', () => {
      return (
        <Story>
          <AllControlsForm />
        </Story>
      );
    });

