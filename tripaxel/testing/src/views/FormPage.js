import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from '../components/Navbar.jsx' ;
import '../assets/css/design.css';
import axios from "axios";
import Cookies from 'js-cookie'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';
import { Divider ,Typography ,CardMedia ,CardContent ,CardActions ,CardActionArea ,Card, Grid,Container,Box,List,ListItem,ListItemText } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-root':{
      color:'white',
    },

    '& .MuiTextField-root': {
      marginTop: '20ch',
      marginLeft: '0',
      width: '80ch',
      color: 'white',

    },
    '& .MuiButton-root': {
      
      width: '20ch',
     
      display:'block',
      marginLeft:'45%',
      marginTop:'10ch',
      

    },
    
    
  },
  QInput:{
    color:'white',
  },
  Qlist: {
    marginTop:'20ch',
    alignContent:'center',
    alignItems:'center',
    background:'white',
    color:'black',
    width:'70%',
    color:'black',
    background: 'rgb(0,65,136)',
    alignItems:'center',
    alignContent:'center',
    fontFamily: "'Inconsolata', monospace",
    borderRadius:'6px',
    
  },
  CardUnans:{
    width: 345,
    
    marginTop:'20ch',
    display: 'flex',
    alignItems: 'flex-end'
  },
  CardUnansTitle:{
    color:'black', 
    fontFamily: "'Yanone Kaffeesatz', sans-serif",
  },
  media: {
    height: 140,
    
  },
  QListItemContainer:{
    width:'100%',
    alignContent:'center',
    alignItems:'center',
    background:'white', 
    
    '&:hover': {
      background: "rgb(186,209,233)",
   },

  },
  QListItems:{
    marginLeft: 40,
   alignContent:'center',
    alignItems:'center',
    
   
  },
  QHeader:{
color:'white',
margin:'1ch',
fontFamily: "'Gotu', sans-serif",


  }
  
}));


const FormPage = () => {

  
  const [Qlist, setQlist] = React.useState([]);
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [ActiveItem, setActiveItem] = React.useState({id: null,  title:'' , answered:false})
  const [edition, setEditing] = React.useState(false)


  function fetchTask(){
    axios.get('http://127.0.0.1:8000/api/Qlist/')
    .then(response => response.data)
    .then(data=>{setQlist(data) 
      console.log('data=',data)
    })
    
  }

  React.useEffect(() => {
    console.log('fetching2')
    fetchTask()
    
  },[])
  

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  
  function handleChange(e){
    var name =  e.target.name 
    var value = e.target.value
    console.log('name', name)
    console.log('value', value)
    setActiveItem({
      title:value ,

    })

  }
  
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

  function handleSubmit(e){
    var csrftoken = getCookie('csrftoken');
    e.preventDefault()
    console.log('ITEM', ActiveItem)
    console.log('active item' , ActiveItem.title)
    var url = 'http://127.0.0.1:8000/api/Qcreate/'
    fetch(url,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken
      },
      body: JSON.stringify(ActiveItem)
    }).then((response) => {
      fetchTask()
      console.log('its here')
      setActiveItem({id: null,  title:'' , answered:false})

    }).catch((error) => {
      console.log(error)
       
    })


  }



  var task = Qlist
  return (
       
    <div>
    <NavBar />
    <div className="wrapper">
          <div className="page-header">
          <img
          alt="..."
          className="path"
          src={require("../assets/img/blob.png")}
        />
        
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <div>
      
     
      <TextField
          id="standard-multiline-flexible"
          label="Ask Question"
          multiline
          rowsMax="4"
          classes={{ root:classes.QInput }}
          onChange={handleChange}
        />
        
      <Button variant="contained" color="primary" type='submit'>
        Ask
      </Button>
        
      <Box display="flex" flexDirection="column" classes={{ root: classes.QforumBox}}>
      <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
        

        <List component="nav" aria-label="secondary mailbox folders" classes={{ root: classes.Qlist }}>
        <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    ><QuestionAnswerIcon fontSize='large'/> <Typography variant="h4" component="h2" classes={{ root: classes.QHeader }}>
    Questions
            </Typography> </Grid>
       {task.map((task,index) => {
            return (
              <div>
              <ListItem button alignItems="center" key={index} classes={{ 
                root:classes.QListItemContainer
               }} >
               <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
             >
             <PriorityHighRoundedIcon />
          <ListItemText alignItems="center" classes={{ 
            root:classes.QListItems
           }}> {task.title} </ListItemText>
           </Grid>
         
        </ListItem>
        <br /> 
        </div>
            )
       })}
      </List>

      
      <Card className={classes.CardUnans}>
      <CardActionArea>
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" color='black' classes={{ root:classes.CardUnansTitle }}>
Unanswered
        </Typography>
        
        <List>
        <ListItem button alignItems="center">
        <ListItemText primary="Trash" />
      </ListItem>
        </List>
     
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
        </Box>
        
      </div>
      
      </form>
 
      </div>
            </div>
            
      </div>
  );
};

export default FormPage;
