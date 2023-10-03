import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './carsLayout.css'
import 'boxicons'

export default function Cars(props){
    return(
        <div className="carlayout">
            <div className='externallink'>
            <box-icon name='link-external'></box-icon>
            </div>
            <div className="carimg">
            <LazyLoadImage
                alt={props.image}
                height={270}
                width={340} 
                src={props.image} 
                effect='blur'
                />
            </div>
            <div className="cardetails">
                <div className="innercardetails">
                     <p><b>{props.name}</b></p>
                     <p>{props.year}</p>
                </div>
                
                <small>Class : {props.class}</small>
            
                <div className='cardBtn'>
                <p><b>${((props.price)*10).toLocaleString('US-en')}</b></p>
                <button>Know more</button>
                </div>
                
            </div>

        </div>
    )
}