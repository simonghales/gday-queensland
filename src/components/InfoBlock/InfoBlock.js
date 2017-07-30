import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './InfoBlock.css';

class InfoBlock extends Component {

  props: {
    title: string,
    description: string,
    linkLabel: string,
    linkTo: string
  };

  render() {

    const {
      title = 'Commonwealth Games',
      description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aspernatur aut consequatur
            culpa.`,
      linkLabel = 'View events',
    } = this.props;

    return (
      <div className='InfoBlock'>
        <Link to={this.props.linkTo}>
          <div className='InfoBlock__content'>
            <h4 className='InfoBlock__title'>{title}</h4>
            <p className='InfoBlock__description'>{description}</p>
            <div className='InfoBlock__action'>
              <button className='InfoBlock__action__button'>{linkLabel}</button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default InfoBlock;