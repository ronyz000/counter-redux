function ForumForm({SaveForum}){
	return(
		<div>
		<form onSubmit={SaveForum}>
		<textarea name="topic" placeholder="Type Something"></textarea>
		<select name="users">
		<option value="user1">User1</option>
		<option value="user2">User2</option>
		<option value="user3">User3</option>
		</select>
		<button>Submit</button>
		</form>
		</div>
		)
}
export default ForumForm