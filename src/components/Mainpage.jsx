import { useState } from 'react'
import LeftOfMain from './LeftOfMain'
import RightOfMain from './RightOfMain'

function Mainpage() {
  const [count, setCount] = useState(0)

  return (
    <div className='Mainpage'>
      <LeftOfMain></LeftOfMain>
      <RightOfMain></RightOfMain>
    </div>
  )
}

export default Mainpage
