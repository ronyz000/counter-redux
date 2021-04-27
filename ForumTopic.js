import {useStore,useDispatch,useSelector} from 'react-redux'
function ForumTopic(val){
	const forum=useSelector(state=>state.forum)
	console.log(forum)
	return(
		<div>Topic :{val.topic} </div>
		)
}
export default ForumTopic