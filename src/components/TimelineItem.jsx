import React from 'react';
import { MapPin } from 'lucide-react';
// ============================================================================
const TimelineItem = ({ date, title, subtitle, location, description }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        <div className="absolute left-0 top-4 h-full w-0.5 bg-gray-200 group-last:h-0"></div>
        <div className="absolute left-[-6px] top-4 h-3 w-3 rounded-full bg-blue-600 border-2 border-white"></div>
        <p className="text-sm font-medium text-gray-500 mb-1">{date}</p>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-md font-medium text-gray-600">{subtitle}</p>
        {location && <p className="text-sm text-gray-500 flex items-center mt-1"><MapPin size={14} className="mr-1.5"/>{location}</p>}
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);


export default TimelineItem;