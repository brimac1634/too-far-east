import { useMediaQuery } from 'react-responsive';
import { GALLERY_SECTION_WIDTH } from '../../pages/homepage/homepage.component';
import { useWindowSize } from '../../utils';
import './video-section.scss';

const VIDEO_RATIO_MULTIPLE = .5625;
const VideoSection = () => {
    const [width] = useWindowSize();
    const isMobile = width < GALLERY_SECTION_WIDTH;
    const height = width * VIDEO_RATIO_MULTIPLE;

    return (
        <div className='video'>
            <div className='video-inner'>
                <iframe width={isMobile ? width : "853"} height={isMobile ? height : "480"} src="https://www.youtube.com/embed/OFobug5d74M?controls=0" title="Too Far East Barber Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
)}

export default VideoSection;