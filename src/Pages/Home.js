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

        <div style={{textAlign:'center', backgroundColor:'black', height:'300px', color:'white'}}>
            <h1 style={{color:'white', marginTop:'center'}} >About us</h1>
            <p style={{marginLeft:'300px',marginRight:'300px'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        </div>
 
        <MyFooter></MyFooter>
        </>
    )
}

export default Home