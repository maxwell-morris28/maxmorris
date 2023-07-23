import { Link } from 'react-router-dom';


function BackButton() {
    return (
        <Link to='../'><div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '20px'}}>
            <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 2L3 23.5L31 43" stroke="white" strokeWidth="3"/>
            </svg>
            <h2>Back</h2>
        </div></Link>
    )
}

export default BackButton