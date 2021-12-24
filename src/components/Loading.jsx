import React from 'react';
import PropTypes from 'prop-types';
import '../styles/loading.css';

export default function Loading({ className }) {
  return (
    <section className={ className }>
      <h3>Carregando...</h3>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};
