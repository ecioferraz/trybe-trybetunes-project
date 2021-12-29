import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextInput extends Component {
  render() {
    const { className, dataTestId, labelText, name,
      onChange, placeholder, type, value } = this.props;

    return (
      <>
        { labelText
        && (
          <label htmlFor={ name }>
            { labelText }
            {' '}
          </label>
        )}
        <input
          className={ className }
          data-testid={ dataTestId }
          id={ name }
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          type={ type }
          value={ value }
        />
      </>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  dataTestId: '',
  labelText: '',
  placeholder: '',
  value: '',
};
