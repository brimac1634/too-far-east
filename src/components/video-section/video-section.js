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
                <iframe width={isMobile ? width : "853"} height={isMobile ? height : "480"} src="https://www.youtube.com/embed/Ny2v5gV00ko?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
)}

export default VideoSection;