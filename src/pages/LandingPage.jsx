import Header from '../components/Header'
import Hero from '../components/Hero'
import Specialities from '../components/Specialities'
import Projects from '../components/Projects'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

export default function LandingPage() {
    return (
        <>
            <Header/>
            <Reveal><Hero/></Reveal>
            <Reveal delay="0.05s"><Specialities/></Reveal>
            <Reveal delay="0.05s"><Projects/></Reveal>
            <Reveal delay="0.05s"><CallToAction/></Reveal>
            <Reveal><Footer/></Reveal>
        </>
    )
}
