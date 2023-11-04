import { useState } from 'react'


function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className='Home'>
            <div className='Homepagecontent'>
                <h1>Welcome to the Crewmate <br /> Creator!</h1>
                <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
                <div className='image-box'>
                    <img src="src/Photos/avengers-endgame-ver2-poster-button-1552573654882.jpg" alt="Pictures of the avengers" />
                </div>
            </div>
        </div>
    )
}

export default Home
