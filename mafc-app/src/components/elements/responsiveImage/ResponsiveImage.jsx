const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1280,
};

export default function ResponsiveImage({ formats, alt = '', className = '' , singleImgUrl}) {
    if(!formats && !singleImgUrl) return null;
    if (!formats) return <img className={className} src={singleImgUrl} alt={alt} />;

  const desktopImg = formats.large || formats.medium || formats.small || formats.thumbnail;
  const tabletImg = formats.medium || formats.small || formats.thumbnail;
  const mobileImg = formats.small || formats.thumbnail;

  return (
    <picture>
      {desktopImg && (
        <source
          media={`(min-width: ${breakpoints.desktop}px)`}
          srcSet={desktopImg.url}
        />
      )}
      {tabletImg && (
        <source
          media={`(min-width: ${breakpoints.tablet}px)`}
          srcSet={tabletImg.url}
        />
      )}
      {mobileImg && (
        <source
          media={`(min-width: ${breakpoints.mobile}px)`}
          srcSet={mobileImg.url}
        />
      )}
      <img src={mobileImg?.url || tabletImg?.url || desktopImg?.url} alt={alt} className={className} />
    </picture>
  );
}