import React from 'react';

const form = props => {
  return <form onSubmit={props.submit}>{props.children}</form>;
};

export default form;
