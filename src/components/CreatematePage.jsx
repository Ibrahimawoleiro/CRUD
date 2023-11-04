import { useState } from 'react'


function CreatematePage() {
    const [count, setCount] = useState(0)

    return (
        <div className='CreatematePage'>
            <h1>Create a New CrewMate</h1>
            <div className='image-box'>
                <img src="src/Photos/avengers.webp" alt="Image of avengers"/>
            </div>
            <form action="">
                    <div className='crewmateFeature'>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" placeholder="Enter crewmate's name"></input>
                    </div>
                    <div className='crewmateFeature'>
                        <label htmlFor="Speed(mph)">Speed (mph): </label><br />
                        <input type="text" id="name" placeholder='Enter speed in mph'></input>
                    </div>
                    <div className='character'>
                    <h3>Characters: </h3><br />
                        <div>
                        <input type="radio" name="character" id="Hulk" value="Hulk" />
                        <label htmlFor="Hulk"> Hulk </label><br />

                        <input type="radio" name="character" id="Spider-man" value="Spider-man" />
                        <label htmlFor="Spider-man"> Spider-man</label><br />

                        <input type="radio" name="character" id="Arrow" />
                        <label htmlFor="Arrow">Arrow</label><br />

                        <input type="radio" name="character" id="Black Widow" />
                        <label htmlFor="Black Widow">The Black Widow</label><br />

                        <input type="radio" name="character" id="Thor" />
                        <label htmlFor="Thor">Thor</label><br />

                        <input type="radio" name="character" id="Captain America" />
                        <label htmlFor="Captain America">Captain America</label><br />

                        <input type="radio" name="character" id="Black Panther" />
                        <label htmlFor="Black Panther">Black Panther</label><br />

                        <input type="radio" name="character" id="Iron Man" />
                        <label htmlFor="Iron Man">Iron Man</label>

                        </div>

                    </div><br />
                    <input type="Submit"  value="Create a Crewmate"/>
                </form>

        </div>
    )
}

export default CreatematePage