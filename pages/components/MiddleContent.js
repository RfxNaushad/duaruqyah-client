import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCommentDots,
  faShareAlt,
  faThumbsUp,
  faPlayCircle,
  faPauseCircle
} from '@fortawesome/free-solid-svg-icons';
import AudioPlayer from './AudioPlayer'; // Your audio player component

const MiddleContent = ({ filteredDuas }) => {
  // ... Other logic for playing audio

  return (
    <div className="p-4 space-y-4">
      {filteredDuas.length > 0 ? (
        filteredDuas.map((dua) => (
          <div key={dua.dua_id} className="p-4 border-2 border-gray-200 rounded-md shadow-sm">
            <h2 className="text-green-500 font-semibold mb-1 flex items-center">
              <FontAwesomeIcon icon={faBookmark} className="mr-2 text-black" />
              {dua.dua_name_en}
            </h2>
            <p className="mb-4 text-black">{dua.top_en}</p>
            <div className="mb-4">
              <p className="text-lg text-black">{dua.dua_arabic}</p>
              {/* Arabic text styling */}
            </div>
            {dua.transliteration_en? <p className="mb-4 text-black">Transliteration:{dua.transliteration_en}</p> : ''}
            {dua.translation_en? <p className="mb-4 text-black">Translation:{dua.translation_en}</p> : ''}
            <div className="border-t border-dashed border-gray-300 pt-2">
              <span className="text-sm  text-green-500">Reference:</span>
              <p className="text-sm text-black">{dua.refference_en}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              {/* Audio Player - Assuming you are using a custom audio player */}
              <AudioPlayer audioSrc={dua.audio} />
              <div className="flex">
                <FontAwesomeIcon icon={faThumbsUp} className="text-gray-400 mx-1 cursor-pointer" />
                <FontAwesomeIcon icon={faCommentDots} className="text-gray-400 mx-1 cursor-pointer" />
                <FontAwesomeIcon icon={faShareAlt} className="text-gray-400 mx-1 cursor-pointer" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-black">Select a dua from category</p>
      )}
    </div>
  );
};

export default MiddleContent;