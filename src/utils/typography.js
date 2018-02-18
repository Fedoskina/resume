import React from 'react';
import Typography from 'typography';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

import usWebStandardsTheme from 'typography-theme-us-web-design-standards'

const typography = new Typography(Object.assign({}, usWebStandardsTheme, {
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2.25,
  plugins: [],
  overrideStyles: ({ rhythm, scale }, options, styles) => ({
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${16 / 16 * 100}%`,
      },
    },
  }),
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'h1,h2,h3,h4': {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    // 'html': {
    //   background: '#d6d6d6',
    //   height: '100%'
    // },
    // 'body': {
    //   border: '10px solid #d6d6d6',
    //   background: '#fff',
    //   minHeight: '100%'
    // }
  })
}));

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
