import React from 'react';
// ============================================================================
const Section = ({ id, title, icon, children }) => (
    <section id={id} className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            {React.cloneElement(icon, { className: "mr-3 h-8 w-8 text-blue-600" })}
            {title}
        </h2>
        {children}
    </section>
);

export default Section;

