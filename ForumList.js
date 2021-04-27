import {useStore,useDispatch,useSelector} from 'react-redux'
import ForumTopic from'./ForumTopic'
function ForumList({Deletetask}){
	let vall=0
	const forum=useSelector(state=>state.forum)
	console.log(forum)

		return(
		<div>
			{forum.map(function(val,index){

			return <div> Topic :  {val.topic} User :  {val.user}  Time :{val.time}<button onClick={()=>{if(window.confirm(' Do you want to Delete this item ?'))Deletetask(index)}}>delete</button></div>

		})}
			    {forum.map(function(val,index){
			vall=val

			return <ForumTopic/>})}

		</div>)
}
export default ForumList
