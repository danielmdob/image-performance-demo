import {API_GATEWAY_URL, BASE_BUCKET_URL} from '../shared/constants/aws-constants';
import fetch from 'node-fetch';

export default function Original({images}) {
  return (
    <div>
      {images.map(imageKey => (
        <img src={`${BASE_BUCKET_URL}/${imageKey}`} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_GATEWAY_URL}/original`);
  const images = await res.json();

  return {
    props: {
      images,
    },
  }
}
