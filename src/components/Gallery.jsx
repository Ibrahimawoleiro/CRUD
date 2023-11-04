import { useState } from "react"
function Gallery() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="Gallery_header">
        <h1>Your Crewmate Gallery</h1>
        <div className="grid">
            <div className="One">

            </div>
            <div className="Two">

            </div>
        </div>
     </div>
    </>
  )
}

export default Gallery
