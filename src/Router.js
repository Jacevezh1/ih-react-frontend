// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'

// Guitars
import Guitars from './components/Guitars'
import Single from './components/Guitars/Single'
import CreateGuitar from './components/Guitars/Create'
import GuitarState from './context/Guitar/GuitarState'
import EditGuitar from './components/Guitars/Single/Edit'


// Auth
import Auth from './routes/Auth'
import Private from './routes/Private'



// User
import UserState from './context/User/UserState'
import Profile from './components/User/Profile'



// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>	

			<UserState>
				<GuitarState>
						<BrowserRouter>
							<Routes>
								<Route path="/" element={<Layout />}>


								
									{/* localhost:3000/ */}
									<Route index element={<Home />} />
									{/* localhost:3000/registro */}
									<Route path="registro" element={<Auth component={Register} />} />
									{/* localhost:3000/iniciar-sesion */}
									<Route path="iniciar-sesion" element={<Auth component={Login} />} />
									{/* localhost:3000/guitarras */}
									<Route path="guitarras" element={<Guitars />} />
									{/* localhost:3000/guitarras/crear */}
									<Route path="guitarras/crear" element={<CreateGuitar />} />
									{/* localhost:3000/guitarras/:id */}
									<Route path="guitarras/:id" element={<Single />} />
									<Route path="guitarras/:id/editar" element={<EditGuitar />} />


									<Route path="profile" element={<Private component={Profile} />} />
									
									

								</Route>
							</Routes>
						</BrowserRouter>
				</GuitarState>
			</UserState>
				
		</>
	)
}


// 3. EXPORTACIÓN
export default Router