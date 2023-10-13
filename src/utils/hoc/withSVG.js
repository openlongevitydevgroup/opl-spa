// This HOC takes SVG Content and optional default props
/**
 * @param {React.Component} SvgContent - SVG Icon component to be wrapped containing svg information 
 * @param {Object} defaultSvgProps 
 * @returns {React.Component} - Wrapped SVG component
 */
const withSVG = (SvgContent, defaultSvgProps) => {
  return function SvgComponent(props) {
    const combinedProps = { ...props, ...defaultSvgProps };
    return <SvgContent props={...combinedProps}/>;
  };
};
