import React from 'react';
import { Plane, Ticket, Calendar, ThumbsUp, Users } from 'lucide-react';
import videoFile from '../../assets/Ramvid.mp4'; // Adjust the path as needed

const NewsCard: React.FC = () => {
  const title = 'Your Destination Awaits, Book Now';
  const description =
    'Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed facilisis ultrices urna eu. In tellus interdum vel ac massa interdum viverra elementum auctor.';
  const date = 'Dec 10, 2024';
  const url = '/news/project-update';

  return (
    <section className="py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse bg-gray-800 shadow-lg rounded-xl overflow-hidden w-full h-[450px] relative transition-transform duration-300">
          {/* Video on the right */}
          <video
            src={videoFile}
            controls
            className="w-full md:w-1/2 h-full object-cover rounded-xl md:relative absolute top-10 right-0 md:top-0"
          />
          {/* Content on the left */}
          <div className="flex flex-col justify-between p-6 space-y-6 md:space-y-0 flex-grow">
            {/* Title and Date */}
            <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{date}</span>
              </div>
              <a
                href={url}
                className="text-2xl font-semibold text-blue-500 hover:text-blue-600 transition-colors"
              >
                {title}
              </a>
            </div>

            <p className="mt-20 text-sm text-gray-500">{description}</p>

            {/* Additional Info */}
            <div className="flex justify-between mt-4">
              <div className="flex space-x-4">
                <div className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  100% Satisfaction
                </div>
                <div className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-xl font-bold">1M</span>
                  <span className="text-sm">Passengers Served</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <a
                href={url}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Ticket className="w-4 h-4 mr-2" />
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
