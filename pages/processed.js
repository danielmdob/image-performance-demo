import fetch from 'node-fetch';
import Img from '../components/img';
import {API_GATEWAY_URL} from '../shared/constants/aws-constants';

export default function Processed({images}) {
  console.log(images);
  return (
    <div>
      {images.map(imageId => (
        <Img id={imageId} key={imageId} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_GATEWAY_URL}/resized`);
  const images = await res.json();

  return {
    props: {
      images,
    },
  }
}
