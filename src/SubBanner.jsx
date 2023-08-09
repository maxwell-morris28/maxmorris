import BackButton from './BackButton';
import './Banner.css';
import './SubBanner.css';

function SubBanner(props) {
    return (
        <div className='subBannerContainer'>
            <div id='backPosition'>
                <BackButton />
            </div>
            <div className="container">
                <h1>{props.pageName}</h1>
            </div>
        </div>

    );
}

export default SubBanner