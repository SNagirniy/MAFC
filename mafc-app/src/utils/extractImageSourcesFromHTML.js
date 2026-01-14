import sanitizeHtml from 'sanitize-html';

 function extractImageSourcesFromHTML(html) {
  const clean = sanitizeHtml(html, {
    allowedTags: ['img'],
    allowedAttributes: {
      img: ['src'],
    },
  });

  const srcMatches = [...clean.matchAll(/<img[^>]*src="([^"]*)"/g)];
  const srcList = srcMatches.map(match => match[1]);

  return srcList;
};

export default extractImageSourcesFromHTML;