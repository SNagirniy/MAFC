import sanitizeHtml from 'sanitize-html';
import striptags from 'striptags';

function formatPreviewText(html, maxLength = 110) {
  const cleaned = sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {},
    exclusiveFilter: (frame) => frame.tag === 'img',
  });

  const text = striptags(cleaned);

  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '…'
    : text;
}

export default formatPreviewText;