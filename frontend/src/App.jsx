import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './pages/Admin/Signin'
import Signup from './pages/Admin/Signup'
import Home from './pages/Admin/Home'
import CompaniesList from './pages/Admin/CompaniesList'
import AddFund from './pages/Admin/AddFund'
import EachCompany from './pages/Admin/eachCompany'
import CompaniesListPending from './pages/Admin/CompaniesListPending'
import Layout from './pages/Admin/Layout'
function App() {


  return (
    <>

    <BrowserRouter>
      <Routes>

    
      <Route path='/login' element={ <Signin /> } />
      <Route path='/signup' element={ <Signup /> } />

      {/* <Route path='/' element={<Layout}> */}
      <Route path='/home' element={<Home />}></Route>
      <Route path='/getCompanies' element={<CompaniesList />}></Route>
      <Route path='/getCompaniesPending' element={<CompaniesListPending />}></Route>
      <Route path='/addFund' element={<AddFund />}></Route>
      <Route path='/companies/:id' element={<EachCompany />}></Route>
      {/* </Route> */}
      
    
      </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App
