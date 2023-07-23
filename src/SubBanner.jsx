import BackButton from './BackButton';
import './Banner.css'

function SubBanner(props) {
    return (
        <div>
            <div style={{position:'absolute', top: '3%', left: '2%'}}>
                <BackButton />
            </div>
            <div className="container">
                <h1>{props.pageName}</h1>
            </div>
        </div>

    );
}

export default SubBanner