import { useMediaQuery } from 'react-responsive';
import Enter from '../enter/enter.component';
import './video-section.scss';

const Video = () => {
    const isMobile = useMediaQuery({ maxWidth: 500 });
    console.log(isMobile)
    return (
    <div className='video-section'>
        <Enter enterStyle='fade-up' duration='1000ms'>
            <div className='video'>
                <iframe width={isMobile ? "560" : "853"} height={isMobile ? "315" : "480"} src="https://www.youtube.com/embed/Ny2v5gV00ko?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Enter>
    </div>
)}

export default Video;