import React from 'react'
import Navbar from './navbar/page'
import HomeSection from './home/page'
import About from './aboutus/page'
import Career from './career/page'
import Services from './services/page'
import SupportMERN from './support/page'
import ContactMERN from './contact/page'

const page = () => {
  return (
    <div>
<Navbar/>
<HomeSection/>
<About/>
<Career/>
<Services/>
<SupportMERN/>
<ContactMERN/> 
 </div>
  )
}

export default page

 

