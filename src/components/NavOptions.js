import React, { useEffect, useState } from 'react'
import NavCard from './NavCard'
import '..//styles/NavOption.css'



const NavOptions = ({ miphones, redmiphones, tv, laptops, fitnessAndLifeStyle, home, audio, accessories }) => {

    const [miphonesToggle, setMiPhoneToggle] = useState(false)
    const [redmiphonesToggle, setRedmiPhoneToggle] = useState(false)
    const [tvToggle, setTvToggle] = useState(false)
    const [laptopsToggle, setLaptopToggle] = useState(false)
    const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false)
    const [homeToggle, setHomeToggle] = useState(false)
    const [audioToggle, setAudioToggle] = useState(false)
    const [accessoriesToggle, setAccessoriesToggle] = useState(false)


    useEffect(() => {
        if (window.location.pathname === '/miphones') {
            return setMiPhoneToggle(true)
        }
        if (window.location.pathname === '/redmiphones') {
            return setRedmiPhoneToggle(true)
        }
        if (window.location.pathname === '/tv') {
            return setTvToggle(true)
        }
        if (window.location.pathname === '/laptops') {
            return setLaptopToggle(true)
        }
        if (window.location.pathname === '/lifestyle') {
            return setFitnessAndLifeStyleToggle(true)
        }
        if (window.location.pathname === '/home') {
            return setHomeToggle(true)
        }
        if (window.location.pathname === '/audio') {
            return setAudioToggle(true)
        }
        if (window.location.pathname === '/accessories') {
            return setAccessoriesToggle(true)
        }


    }, [])


    return (
        <div className='NavOptions'>
            {miphonesToggle ? miphones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {redmiphonesToggle ? redmiphones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {tvToggle ? tv.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {laptopsToggle ? laptops.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {homeToggle ? home.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {audioToggle ? audio.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {accessoriesToggle ? accessories.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
        </div>
    )
}

export default NavOptions