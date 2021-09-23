import React from 'react'
import MyFooter from '../Components/Footer'
import MyLayout from '../Components/Layout'
import UserComments from '../Components/UserComments'






function Home() {
    return (
<>
        <MyLayout></MyLayout>
        <div>
         <UserComments></UserComments>

         

        </div>

        <MyFooter></MyFooter>
        </>
    )
}

export default Home