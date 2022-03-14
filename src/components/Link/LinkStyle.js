import React from 'react';

const LienStyle = React.forwardRef(({ href, children }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      style={{
        color: '#878787',
        font: 'Arial sans-serif',
        textDecoration: 'underline',
        fontSize: '20px',
      }}
    >
      {children}
    </a>
  );
});

export default LienStyle;
