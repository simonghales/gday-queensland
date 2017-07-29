import React, {Component} from 'react';
import './HomeScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import InfoBlock from '../InfoBlock/InfoBlock';
import IntroBlock from '../IntroBlock/IntroBlock';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

class HomeScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <div className='HomeScreen'>
          <IntroBlock/>
          <div>
            <InfoBlock/>
            <InfoBlock title='Free things to do'/>
            <InfoBlock title='Places to eat'/>
            <InfoBlock title='Learn some Aussie phrases'/>
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;