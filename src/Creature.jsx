import {useState}from 'react';

function Creature(props) {
    // const [x, setX] = useState(props.x);
    // const [y, setY] = useState(props.y);

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer'
        
    };

    //let [isAwake, setIsAwake] = useState(false);

    const handleClick = () => {
        props.onWake(props.id);
    };

    let currentImage = props.isAwake ? props.awakeImageUrl : props.sleepImageUrl;

    return  (
        <div style={style} onClick={handleClick}>
            <img src={currentImage} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
