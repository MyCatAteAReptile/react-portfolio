export const breakpoints = {
    vp1440: 1440,
    vp768: 768,
    vp320: 320
};

export const viewports = {
    tablet: `(max-width: ${breakpoints.vp1440 - 1}px)`,
    mobile: `(max-width: ${breakpoints.vp768 - 1}px)`,
};