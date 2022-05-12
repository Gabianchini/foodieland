import Recipes from './components/Recipes/Recipes'
import ContactUsRecipes from './components/ContactUsRecipes'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import PageRecipes from './pages/Recipes'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'

import './components/comp-footer/footer.css'
import './globalVariables.css'
import Footer from './components/comp-footer/Footer.jsx'

function App() {
  
  return (

    <div className='App'>
      <Footer/>

    </div>



  )
        

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} exact />
				<Route path='/recipes' element={<Recipes />} exact />
				<Route path='/blog' element={<Blog />} exact />
				<Route path='/about' element={<About />} exact />
				<Route path='/contact' element={<Contact />} exact />
			</Routes>
			<div>
				<Recipes items={ContactUsRecipes} />
			</div>
		</div>
	)
}
export default App
