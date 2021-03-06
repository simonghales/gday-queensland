import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './MainNav.css';
import classNames from 'classnames';

class MainNav extends Component {
  render() {
    console.log('main nav props', this.props);
    return (
      <nav className={classNames([
        'MainNav',
        {
          'MainNav--hidden': this.props.page === '/'
        }
      ])}>
        <div className={classNames([
          'MainNav__tab',
          {
            'MainNav__tab--selected': this.props.page === '/home'
          }
        ])}>
          <Link to='/home'>
            <div>
              <div>
                HOME
              </div>
              <div>
                主页
              </div>
            </div>
          </Link>
        </div>
        <div className={classNames([
          'MainNav__tab',
          {
            'MainNav__tab--selected': this.props.page === '/events'
          }
        ])}>
          <Link to='/events'>
            <div>
              <div>
                EVENTS
              </div>
              <div>
                活动
              </div>
            </div>
          </Link>
        </div>
        <div className={classNames([
          'MainNav__tab',
          {
            'MainNav__tab--selected': this.props.page === '/language'
          }
        ])}>
          <Link to='/language'>
            <div>
              <div>
                LANG
              </div>
              <div>
                语言
              </div>
            </div>
          </Link>
        </div>
        {/*<div className='MainNav__tab'>*/}
        {/*<Link to='/language'>*/}
        {/*NAV*/}
        {/*</Link>*/}
        {/*</div>*/}
      </nav>
    );
  }
}

export default MainNav;
// export default withRouter(props => <MainNav {...props}/>);