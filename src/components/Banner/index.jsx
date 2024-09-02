import './style.css';
import BannerImage from '../../assets/banner.jpg';
export default function Banner(){
    return <div className='banner h-80 mt-6'>
        <img className='h-full ' src={BannerImage} alt="abs" />
    </div>
}