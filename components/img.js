import {BASE_BUCKET_URL} from '../shared/constants/aws-constants';

function getImageUrls(id) {
  const baseUrl = `${BASE_BUCKET_URL}/resized/${id}`;
  const fallbackFormat = '.jpg';
  const formats = ['.webp', fallbackFormat]; // formats in preference order
  const sources = formats.map(format => baseUrl + format);
  const fallback = baseUrl + fallbackFormat;
  return {sources: sources, fallback};
}

function getMimeType(url) {
  const split = url.split('.');
  const format = split[split.length - 1];
  console.log(format);
  switch (format) {
    case 'jpg':
      return 'image/jpeg';
    case 'webp':
      return 'image/webp';
    default:
      return null;
  }
}

export default function Img({id, alt, lazy}) {
  const {sources, fallback} = getImageUrls(id);
  return (
    <picture>
      {sources.map(url => (
        <source srcset={url} type={getMimeType(url)} key={url} />
      ))}
      <img src={fallback} alt={alt} />
    </picture>
  );
}
