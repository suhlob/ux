import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import PriceConverter from './PriceConverter';
import FormDebug from '../../FormDebug';

const PriceConverterFormView = (props) => {
  return (
    <Form>
      <Field {...props.control('priceConverter')} />
      <FormDebug {...props} />
    </Form>
  );
};

const PriceConverterForm = createForm({
  view: PriceConverterFormView,
  controls: {
    priceConverter: {
      title: 'PriceConverter',
      component: PriceConverter,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls_remove', module)
    .add('PriceConverter ', () => {
      return (
        <Story>
          <PriceConverterForm />
        </Story>
      );
    });
