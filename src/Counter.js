import {useStore,useDispatch,useSelector} from 'react-redux'
function ReduxCounter(){
	const dispatch=useDispatch()
	const store=useStore()
	const count=useSelector(state=>state.count)
	console.log('inside ReduxCounter')
	console.log(store)
	const increase=()=>{
		dispatch({type:'counter/increase'})
	}
	const decrease=()=>{
		dispatch({type:'counter/decrease'})
	}
	const reset=()=>{
		dispatch({type:'counter/reset'})
	}
	const sqr=()=>{
		dispatch({type:'counter/sqr'})
	}
	const sqrt=()=>{
		dispatch({type:'counter/sqrt'})
	}
	return(
		<div>
		count={count}<br/>
		<button onClick={increase}>increase</button>
		<button onClick={decrease}>decrease</button>
		<button onClick={reset}>reset</button>
		<button onClick={sqr}>Square</button>
		<button onClick={sqrt}>Square Root</button>
		</div>
		)
}
export default ReduxCounter