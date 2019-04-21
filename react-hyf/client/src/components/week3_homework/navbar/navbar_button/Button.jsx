import React from 'react';

export default function Button({ imgUrl, imgAlt }) {
  return (
    <div>
      <button>
        <img src={imgUrl} width="24" height="24" alt={imgAlt} />
      </button>
    </div>
  );
}
