import React from 'react';
import PropTypes from 'prop-types';
import '../styles/loading.css';

export default function Loading({ className, heart }) {
  return (
    <section className={ className }>
      { heart ? (
        <div class="rhombus2">
          <div class="circle21"></div>
          <div class="circle22"></div>
        </div>
        // <div class="lds-heart">
        //   <div></div>
        // </div>
      ) : (
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
      ) }
    </section>
  );
}

Loading.propTypes = {
  className: PropTypes.string.isRequired,
  heart: PropTypes.bool.isRequired,
};
