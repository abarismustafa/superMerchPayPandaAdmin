import React from 'react'
import MastersForm from './mastersForm/MastersForm'
import ApiMasterForm from './apiMasterForm/ApiMasterForm'
import SettingMaster from './settingsForm/SettingMaster'
import WebsiteMaster from './websiteMaster/WebsiteMaster'
import Members from './members/Members'
import Reports from './reports/Reports'
import Payment from './payment/Payment'
import Dispute from './dispute/Dispute'
import Leadgenerations from './leadgenerations/Leadgenerations'

function Master() {
  return (
    <>
      <MastersForm />
      <ApiMasterForm />
      <SettingMaster />
      <WebsiteMaster />
      <Members />
      <Reports />
      <Payment />
      <Dispute />
      <Leadgenerations />
    </>

  )
}

export default Master
