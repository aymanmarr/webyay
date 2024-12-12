import React from 'react';
import { ExternalLink, Calendar, ThumbsUp, Users } from 'lucide-react';

// Import the video from assets
import videoFile from '../../assets/Ramvid.mp4'; // Adjust the path as needed

const NewsCard: React.FC = () => {
  const title = 'Your Destination Awaits, Book Now';
  const description = 'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu. In tellus interdum vel ac massa interdum viverra elementum auctor.';
  const date = 'Dec 10, 2024';
  const url = '/news/project-update';

  return (
    <section style={{ paddingTop: '3rem', paddingBottom: '3rem', color: '#2d3748' }}>
  <div style={{ margin: '0 auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row', // Set the layout to row for side-by-side alignment
        backgroundColor: '#2d3748',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '25px',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        width: '80%',
        height: '450px',
        margin: '0 auto',
        position: 'relative', // Make the parent relative for absolute positioning to work
      }}
    >
      {/* Video on the left */}
      <video
        src={videoFile}
        style={{
          width: '50%', // Resize the video width
          height: '350px', // Resize the video height
          objectFit: 'cover', // Make sure it covers the area
          borderRadius: '30px',
          position: 'absolute', // Enable absolute positioning
          top: '10%', // Adjust top position to move the video down or up
          right: '50px', // Adjust right position to move the video left or right
        }}
        controls
      />

      {/* Content on the right */}
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        {/* Title and date at the top right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#a0aec0', marginBottom: '0.25rem' }}>
            <Calendar style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
            <span>{date}</span>
          </div>
          <a
            href={url}
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#4299e1',
              textDecoration: 'none',
              transition: 'color 0.2s',
              position: 'absolute', // Enable absolute positioning
              top: '30%', // Adjust top position to move the video down or up
              right: '735px',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#2b6cb0')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#4299e1')}
          >
            {title}
          </a>
          <p style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.5rem',width:'42%',  position: 'absolute', // Enable absolute positioning
          top: '40%', // Adjust top position to move the video down or up
right: '640px',  }}>{description}</p>

          {/* Button directly under the title */}
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href={url}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: '#e53e3e',
                borderRadius: '8px',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2b6cb0')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e53e3e')}
            >
              <ExternalLink style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
              Read More
            </a>
          </div>
        </div>

        {/* Additional info below */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                backgroundColor: '#38a169',
                color: '#fff',
                borderRadius: '12px',
              }}
            >
              <ThumbsUp style={{ width: '16px', height: '46px', marginRight: '0.5rem' }} />
              100% Satisfaction
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                backgroundColor: '#3182ce',
                color: '#fff',
                borderRadius: '12px',
              }}
            >
              <Users style={{ width: '16px', height: '46px', marginRight: '0.5rem' }} /><span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                1M</span>
              <span><br/><br/>Passengers Served</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default NewsCard;
