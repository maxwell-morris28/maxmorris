import './Banner.css'

function Banner(props) {
    return (
        <div className="container">
            <h1>{props.pageName}</h1>
        </div>

    );
}

export default Banner
