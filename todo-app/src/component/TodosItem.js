import React from 'react';
import Fade from 'react-reveal/Fade';


//Component
import EditForm from './EditForm';
import DisplayForm from './DisplayForm';

import { observer, inject } from 'mobx-react'

@inject('TodoStore')
@observer
export default class TodosItem extends React.Component {

  render() {
    const { isEditing } = this.props.TodoStore;
    return (
      <div>
        {
          isEditing ?
            <EditForm />
            :
            <Fade>
              <DisplayForm />
            </Fade>
        }
      </div>
    );
  }
}

