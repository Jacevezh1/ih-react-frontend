
// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react'

import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

import axiosClient from "./../../config/axios"

const StoreState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		stores: [],
		singleStore: {
			_id: "",
			nombre: "",
			descripcion: "",
			direccion: "",
			imagen: ""
		},
		hola: "mundo"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	// REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(StoreReducer, initialState)

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})

	}

	const getStores = async () => {

		const res = await axiosClient.get("store/readall")

		console.log("Obteniendo Stores...")
		
		const list = res.data.data

		dispatch({
			type: "GET_STORES",
			payload: list
		})

	}

	const getStore = async (storeId) => {
		
		const res = await axiosClient.get(`store/readone/${storeId}`)

		const selectedStore = res.data.data

		dispatch({
			type: "GET_STORE",
			payload: selectedStore
		})

	}

	const CreateStore = async (form) => {

		const res = await axiosClient.post("store/create", form)

		console.log(res)

	}


	// 4. RETORNO
	return (
		<StoreContext.Provider
			value={{
				stores: globalState.stores,
				hola: globalState.hola,
				singleStore: globalState.singleStore,
				changeText,
				getStores,
				getStore,
				CreateStore
			}}
		>
			{props.children}
		</StoreContext.Provider>
	)


}

export default StoreState