import React from 'react';
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './App.css';

function Navbar() {
  return (
    <div className='container'>
      
        <div className='navbar'>
          <h2><MdMenu /></h2>
          <h2><FaHome /></h2>
          <h2><MdSubscriptions /></h2>
          <h2><SiYoutubeshorts /></h2>
          <h2><FaHistory /></h2>
          <h2><MdOutlinePlaylistPlay /></h2>
          <h2><IoIosMusicalNotes /></h2>
          <h2><MdOutlineVideoLibrary /></h2>
        </div>
        <div className='body'>
        <div className='main'>
          <h2 className='icon'><FaYoutube /> </h2>
          <h1>YouTube</h1>
          <div className='search-box'>
            <input type='text' placeholder='Search' />
            <FaSearch className='search-icon' />
            <FaMicrophone className='mic' />
          </div>
        </div>
      

      <div className='video-grid'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className='video-card' key={index}>
            <img
              src={`https://via.placeholder.com/320x180.png?text=Thumbnail+${index + 1}`}
              alt={`Thumbnail ${index + 1}`}
            />
            <h4>Video Title {index + 1}</h4>
            <p>Channel Name</p>
            <p>100K views • 1 day ago</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Navbar;
