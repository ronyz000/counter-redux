let initialState={count:0,title:"Default Title",todo:[],forum:[]}
function CountReducer(state=initialState,action){
	console.log(action)
	console.log(state)
	switch(action.type){
		case 'counter/increase':
		console.log('came in action counter/increase')
		return {...state,count:state.count+1}
		case 'counter/decrease':
		console.log('came in action counter/decrease')
		return {...state,count:state.count-1}
		case 'counter/reset':
		console.log('came in action counter/reset')
		return {...state,count:0}
		case 'counter/sqr':
		console.log('came in action counter/sqr')
		return {...state,count:state.count*state.count}
		case 'counter/sqrt':
		console.log('came in action counter/sqrt')
		return {...state,count:(Math.sqrt(state.count))}
		case 'counter/changetitle':
		return{...state,title:action.title}
		case 'counter/addtodo':
		return{...state,todo:action.todo}
		case 'counter/addforum':
		return{...state,forum:action.forum}
		case 'counter/deleteforum':
		return{...state,forum:action.forum}
		case 'counter/delete5forum':
		return{...state,forum:action.forum}
		default:
		return state;

	}
}
export default CountReducer