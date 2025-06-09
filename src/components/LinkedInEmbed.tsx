import React, { useEffect } from 'react';

interface LinkedInEmbedProps {
  embedSrc: string;
  previewHeight?: number;   
  expandedHeight?: number; 
  expanded: boolean;
  onToggle: () => void;
}

const LinkedInEmbed: React.FC<LinkedInEmbedProps> = ({
  embedSrc,
  previewHeight = 300,
  expandedHeight = 800,
  expanded,
  onToggle,
}) => {
  useEffect(() => {
    if ((window as any).IN?.parse) {
      (window as any).IN.parse();
    }
  }, [embedSrc]);

  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{
          height: expanded ? expandedHeight : previewHeight,
        }}
      >
        <iframe
          src={embedSrc}
          className="w-full block"
          style={{
            height: expandedHeight,   // always full height
          }}
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          loading="lazy"
          title="Embedded LinkedIn post"
        />
      </div>
      <button
        className="w-full py-2 text-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-b-xl focus:outline-none transition duration-200"
        onClick={onToggle}
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
};

export default LinkedInEmbed;
