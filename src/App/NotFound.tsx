import React from 'react';

const css: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const NotFound: React.FC = () => (
  <div data-cy="not-found-page" style={css}>
    <h1>Page Not Found</h1>
  </div>
);
