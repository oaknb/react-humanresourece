import React from 'react'
import MyFooter from '../Components/Footer'
import HomePageSlider from '../Components/HomePageSlider'
import MyLayout from '../Components/Layout'
import UserComments from '../Components/UserComments'
import HomeAdvice from '../Components/HomeAdvice'







function Home() {
    return (
<>
        <MyLayout></MyLayout>
        <div>
            <HomePageSlider></HomePageSlider>
            <hr className="home-top__seperator" />
            <HomeAdvice></HomeAdvice>
         <UserComments></UserComments>

        

        </div>
 
        <MyFooter></MyFooter>
        </>
    )
}

export default Home