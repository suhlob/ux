import React from 'react';
import PropTypes from 'prop-types';
import Files from './FilesBase';

import DefaultBody from './DefaultBody';
import DefaultFooter from './DefaultFooter';

// eslint-disable-next-line prettier/prettier
const getArray = val => (
  // eslint-disable-next-line prettier/prettier
  val == null ? [] : ( // eslint-disable-line no-nested-ternary 
    Array.isArray(val) ? val : [val] // eslint-disable-line prettier/prettier
  )
);

const FilesUploader = ({ field, form, onError, components, isMulti, hasCropper, CropperComponent, ...props }) => {
  // console.log(1111, { field });
  // const defaultValue = field.value;
  const Body = components.Body || FilesUploader.defaultProps.components.Body;
  const Footer = components.Footer || FilesUploader.defaultProps.components.Footer;
  return (
    <Files
      // {...field}
      value2={field.value}
      {...props}
      hasCropper={hasCropper}
      CropperComponent={CropperComponent}
      multiple={isMulti}
      onSubmit={incomeValues => {
        if (incomeValues && incomeValues.type === 'remove') {
          if (isMulti) {
            form.setFieldValue(
              field.name,
              (field.value || []).filter(
                item => !(item && (item === incomeValues.src || item.src === incomeValues.src)),
              ),
            );
          } else if (incomeValues.src === field.value) {
            form.setFieldValue(field.name, null);
          }
          return;
        }
        if (incomeValues === null) {
          if (isMulti) {
            form.setFieldValue(field.name, []);
          } else {
            form.setFieldValue(field.name, null);
          }
          return;
        }

        if (!isMulti) {
          form.setFieldValue(field.name, incomeValues);
          return;
        }
        const values = [...getArray(field.value), ...getArray(incomeValues)];
        // console.log('field.value', field.value);
        // console.log('getArray(field.value)', getArray(field.value));
        // console.log('incomeValues', incomeValues);
        // console.log('getArray(incomeValues)', getArray(incomeValues));
        // {incomeValues, values},

        form.setFieldValue(field.name, values);
      }}
      // onError={() => onError?.(form.errors[field.name])} // this.globalError
      // validationState={form.errors[field.name] ? 'error' : null}
      // files={field.value}
      onBlur={null}
      footer={Footer}
    >
      {Body}
    </Files>
  );
};

FilesUploader.propTypes = {
  components: PropTypes.shape({
    Body: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  }),
  hasCropper: PropTypes.bool,
  isMulti: PropTypes.bool,
  form: PropTypes.objectOf(Object).isRequired,
  field: PropTypes.objectOf(Object).isRequired,
  CropperComponent: PropTypes.elementType,
  onError: PropTypes.func,
};

FilesUploader.defaultProps = {
  components: {
    Body: DefaultBody,
    Footer: DefaultFooter,
  },
  isMulti: false,
  hasCropper: false,
  CropperComponent: undefined,
  onError: null,
};

export default FilesUploader;
