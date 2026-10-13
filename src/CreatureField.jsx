import {useState} from 'react';
import Creature from './Creature.jsx';

function CreatureField() {
    
    const [creatures, setCreatures] = useState([
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ]);


    const handleWakeCreature = (id) => {
        setCreatures(prevCreatures =>
            prevCreatures.map(creature => {
                if (creature.id !== id) {
                    return creature;
                }

                if (!creature.isAwake) {
                    const randomX = Math.floor(Math.random() * 680);
                    const randomY = Math.floor(Math.random() * 640);

                    return {
                        ...creature,
                        isAwake: true,
                        x: randomX,
                        y: randomY
                    };
                }

                return {
                    ...creature,
                    isAwake: false
                };
            })
        );
    };

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    const awakeCount = creatures.filter(
        creature => creature.isAwake
    ).length;
    

    return (
        <div style={fieldStyle}>
            <p style={{ padding: '10px', margin: 0 }}>
                {awakeCount} of {creatures.length} creatures awake
            </p>

            {creatures.map(creature => (
                <Creature
                    key={creature.id}
                    {...creature}
                    onWake={handleWakeCreature}
                />
            ))}
        </div>
    );
}

export default CreatureField;