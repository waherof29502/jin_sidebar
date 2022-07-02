import React from 'react';
import {
  SideBar,
  ChannelBar,
  ContentContainer,
  TopNavigation,
} from './components';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
