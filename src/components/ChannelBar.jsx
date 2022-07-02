import React, { Component } from 'react';
import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <div className='channel-container'>
        <DropDown header='Topics' selections='text' />
        <DropDown header='Questions' selections='text' />
        <DropDown header='Random' selections='text' />
      </div>
    </div>
  );
};

const DropDown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'
          }
        >
          {header}
        </h5>
        <FaPlus
          size='12'
          className='text-accent text-opacity-80 my-auto ml-auto'
        />
      </div>
    </div>
  );
};

// const Dropdown = ({ header, selections }) => {
//     const [expanded, setExpanded] = useState(true);

//     return (
//       <div className='dropdown'>
//         <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
//           <ChevronIcon expanded={expanded} />
//           <h5
//             className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
//           >
//             {header}
//           </h5>
//           <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
//         </div>
//         {expanded &&
//           selections &&
//           selections.map((selection) => <TopicSelection selection={selection} />)}
//       </div>
//     );
//   };

const ChevronIcon = ({ expanded }) => {
  const checkedClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={checkedClass} />
  ) : (
    <FaChevronRight size='14' className={checkedClass} />
  );
};

const ChannelBlock = () => (
  <div className='channel-block '>
    <h5 className='channel-block-text'>Channels</h5>
  </div>
);

export default ChannelBar;
