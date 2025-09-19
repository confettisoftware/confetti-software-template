// Analytics utility functions
// Only works if Google Analytics is configured

export const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

export const trackAppStoreClick = (appName) => {
    trackEvent('app_store_click', {
        app_name: appName,
        event_category: 'engagement',
        event_label: 'download_button'
    });
};

export const trackEmailClick = () => {
    trackEvent('email_click', {
        event_category: 'engagement',
        event_label: 'contact'
    });
};

export const trackPageView = (pageName) => {
    trackEvent('page_view', {
        page_name: pageName,
        event_category: 'navigation'
    });
};
