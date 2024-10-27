import leftArrow from '../assests/images/left-arrow.png';
import RightArrow from '../assests/images/right-arrow.png';
import {Button} from './Button';
import {AppleBasket} from "./AppleBasket"

import './AppleBasket.css';


export const AppleCounter=()=>{
    
        return (
            <section>
                <AppleBasket appleCount={10} basketName="Basket 1" />
                <Button imagesUrl={leftArrow}/>
                <Button imagesUrl={RightArrow}/>
                <AppleBasket appleCount={0} basketName="Basket 2" />
            </section>
          )
    
}