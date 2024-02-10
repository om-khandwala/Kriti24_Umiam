import React from 'react';

function HorizontalLine({color}) {
    return (
        <hr style={{ margin: '0', border: 'none', borderBottom: `1px solid ${color}` }} />
    );
}

export default HorizontalLine;
