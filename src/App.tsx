import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Account from './Pages/Account/Account'
import About from './Pages/About/About'
import BuyMe from './Pages/BuyMe/BuyMe'
import Contacts from './Pages/Contacts/Contacts'
import Settings from './Pages/AccountSettings/Settings'
import Parcels from './Pages/Parcels/Parcels'
import Transactions from './Pages/Transactions/Transactions'
import Notifications from './Pages/Notifications/Notifications'
import AddParcel from './Pages/AddParcel/AddParcel'
import MyNotifications from './Pages/MyNotifications/MyNotifications'
import MyAddress from './Pages/MyAddresses/MyAddress'
import ParcelDetails from './Pages/ParcelDetails/ParcelDetails'
import AdminPanel from './Pages/AdminPanel/AdminPanel'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/profile' element={<Account />} />
        <Route path='/profile/settings' element={<Settings />} />
        <Route path='/profile/parcels' element={<Parcels />} />
        <Route path='/profile/transactions' element={<Transactions />} />
        <Route path='/profile/nsettings' element={<Notifications />} />
        <Route path='/profile/parcels/create' element={<AddParcel />} />
        <Route path='/profile/parcels/details' element={<ParcelDetails />} />
        <Route path='/profile/notifications' element={<MyNotifications />} />
        <Route path='/profile/addresses' element={<MyAddress />} />
        <Route path='/o-kompanii' element={<About />} />
        <Route path='/buy-me' element={<BuyMe />} />
        <Route path='/kontakty' element={<Contacts />} />
        <Route path='/panel' element={<AdminPanel />} />
      </Routes>
    </>
  )
}

export default App
