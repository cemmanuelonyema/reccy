import React from 'react';
import './BtnLink.scss';

export const BtnLink = ({ children, href }) => {
      return (
            <a href={href} target="_blank" className="btnLink">
                  {children}
            </a>
      );
};
