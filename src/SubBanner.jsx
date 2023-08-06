import BackButton from './BackButton';
import './Banner.css'

function SubBanner(props) {
    return (
        <div className='subBannerContainer'>
            <div style={{position:'absolute', top: '15%', left: '2%'}}>
                <BackButton />
            </div>
            <div className="container">
                <h1>{props.pageName}</h1>
            </div>
        </div>

    );
}

export default SubBanner