import {Component} from 'react'
import DisplayList from '../TaskList'
import './index.css'

class TaskForm extends Component{


    state={tasks:[],title:"",description:"",is:false,is1:false,title1:"",description1:'',k:0}

    componentDidMount() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks!==null) {
            console.log(storedTasks)
            this.setState({ tasks: storedTasks ,is:true});
        }
    }

    componentDidUpdate(prevprops){
        const {tasks} = this.state
        if(prevprops.tasks!==tasks){
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
    }

    titleChange=(event)=>{
        this.setState({title:event.target.value})
    }

    descriptionChange=(event)=>{
        this.setState({description:event.target.value})
    }

    addTask=()=>{
        const {tasks} = this.state
        const {title,description} = this.state
        const id = tasks.length
        const newState  = {title,description,id}
        if(title==='' && description===''){
            console.log("sam")
            this.setState({is:false})
        }else{
        this.setState((prev)=>({
            tasks:[...prev.tasks,newState],
            title:"",
            description:"",
            is:true,
        }));
    }
    }

    updateTasks=(id)=>{
        const{tasks} = this.state
        const x = tasks.filter((each)=>(each.id!==id))
        this.setState({tasks:x})
    }

    title1=(event)=>{
        this.setState({title1:event.target.value})
    }

    description1=(event)=>{
        this.setState({description1:event.target.value})
    }

    editTask=(id)=>{
        this.setState({is1:true,k:id})
    }

    editAgain=()=>{
        const {title1,description1,tasks,k} = this.state
        const g = tasks.map((each)=>{
            if(each.id===k){
               return{
                ...each,
                title:(title1!=='') ? title1 : each.title,
                description:(description1!=='') ? description1 : each.description,
               }
            }else{
            return each
            }
        })

        this.setState({tasks:g,is1:false,title:'',description:''})
    }

    render(){
        const {is,is1,tasks,title,description} = this.state
        return(
            <div className='main-page'>
            <div className='form-container'>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='title'>Title</label><br/>
                <input type="text" id="title" value={title} onChange={this.titleChange}/><br/>
                <label htmlFor='description'>Description</label><br/>
                <input type="text" id="description" value={description} onChange={this.descriptionChange}/><br/>
                <button type="button" onClick={this.addTask}>ADD</button>
            </form>
            {is1 && <form className='edit-container'>
                <h1>Edit here</h1>
                <p>If you do not want to change anyone leave it blank</p>
             <label htmlFor='title1'>Title</label><br/>
                <input type="text" id="title1" onChange={this.title1}/><br/>
                <label htmlFor='description1'>Description</label><br/>
                <input type="text" id="description1" onChange={this.description1}/><br/>
                <button type="button" onClick={this.editAgain}>Edit</button>
            </form>}
            {is ? <DisplayList details={tasks} updateTask={this.updateTasks} editTask = {this.editTask}/> : <p className='error-msg'>Please fill Title and description details</p>}
            </div>
            </div>
        )
    }
}

export default TaskForm