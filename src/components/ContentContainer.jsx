import React from 'react';
import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';

const ContentContainer = () => {
  return (
    <div className='content-container h-screen'>
      <TopNavigation />
      <div className='content-list'>
        <Post name='Tonic' timestamp='22 hours ago' text='I dont know' />
        <Post name='Fizz' timestamp='2 hours ago' text='I dont know' />

        <Post name='Gimlet' timestamp='12 hours ago' text='I dont know' />
      </div>
      <BottomBar />
    </div>
  );
};

// const PlusIcon = () => (
//   <BsPlusCircleFill
//     size='22'
//     className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
//   />
// );

const BottomBar = () => (
  <div className='bottom-bar'>
    <BsPlusCircleFill
      size='22'
      className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
    />
    <input
      type='text'
      placeholder='Enter message...'
      className='bottom-bar-input'
    />
  </div>
);

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt=''
          className='avatar'
        />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

export default ContentContainer;
