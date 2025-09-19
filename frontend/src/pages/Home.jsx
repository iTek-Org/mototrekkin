import React from 'react'
import ServiceCenter from '../components/ServiceCenter'
import RiderTraining from '../components/RiderTraining'
import MotorcycleTyres from '../components/MotorcycleTyres'
import OffroadEvent from '../components/OffroadEvent'
import OnroadEvent from '../components/OnroadEvent'
import RidingGear from '../components/RidingGear'
import SafetySystem from '../components/SafetySystem'
import RiderHelmet from '../components/RiderHelmet'
import HearingProtection from '../components/HearingProtection'
import GearGrid from '../components/GearGrid'
import ProductShowcase from '../components/ProductShowcase'


const Home = () => {
  return (
    <div>
   <ServiceCenter/>
   <RiderTraining/>
   <MotorcycleTyres/>
   <OffroadEvent/>
   <OnroadEvent/>
   <RidingGear/>
   <SafetySystem/>
   <RiderHelmet/>
   <HearingProtection/>
   <GearGrid/>
   <ProductShowcase/>
    </div>
  )
}

export default Home