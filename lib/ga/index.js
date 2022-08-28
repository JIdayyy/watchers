/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// log the pageview with their URL
export const pageview = (url) => {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag("event", action, params);
};
