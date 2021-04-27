import {useStore,useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import ForumForm from './ForumForm.js'
import ForumList from './ForumList.js'
function ForumContainer(){
	const [Forum,setForum]=useState([])
	const dispatch=useDispatch()
	const store=useStore()
	const forum=useSelector(state=>state.forum)
	let d=new Date()
		let time =d.getTime()
		let ttime=d.toLocaleTimeString()
		console.log(time)
		
		const SaveForum=(e)=>{
		e.preventDefault()
		console.log(e.target.topic.value)
		
		let ForumOb=({topic:e.target.topic.value,user:e.target.users.value,times:time,time:ttime})
		let arr=Forum.concat(ForumOb)
		localStorage.setItem('Forum', JSON.stringify(arr));
		console.log(arr)
		setForum(arr)
		dispatch({type:'counter/addforum',forum:arr})
	}
	console.log(forum)
	function Deletetask(indextodelete){
		let newarr=forum.filter(function(val,index){
			if (indextodelete==index) {
				return false

			}else{return true}
		})

			setForum(newarr)
		dispatch({type:'counter/deleteforum',forum:newarr})
	}
	console.log(forum)	
	function Delete5(){
		let newArr= forum.filter(function(val){
			console.log(val.times)
			console.log(time)
			if(val.times<time-30000){
				return false
			}
			else{
				return true
			}
		})
		setForum(newArr)
		dispatch({type:'counter/delete5forum',forum:newArr})
	}
	console.log(forum)
return(
		<div>
		<ForumList Deletetask={Deletetask}/>
		<ForumForm SaveForum={SaveForum}/>
		<button onClick={Delete5}>Delete_5_mins</button>
		
		</div>
		)
}
export default ForumContainer