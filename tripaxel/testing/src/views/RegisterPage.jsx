import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import ThemeDefault from '../variables/theme-default';
import '../assets/css/design.css'

import EmailOutlinedIcon from '@material-ui/icons/AlternateEmailTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import {Grid, Box} from '@material-ui/core'
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
const RegisterPage = () => {

  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10,
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
    passField:{
        
        marginBottom:'8ch',
        color:'black',
        maxWidth:'50ch',
        color:'black'
    },
    emailField:{
        marginBottom:'8ch',
    },
    passIcon:{
        marginTop:'3ch',
        
    },
    fieldContainer:{
        marginTop:'3ch',
        marginBottom:'3ch',
        maxWidth:'100ch',
        borderRadius: '70px',
        paddingLeft:'3ch',
        paddingRight:'3ch',
        display:'flex', 
        maxHeight:'80px',

        background:'black',
        background: 'rgb(110,115,241)',
background: ' linear-gradient(90deg, rgba(193,77,208,0) 0%, rgba(49,96,232,1) 100%)',

    },
    

   
  };



  
  return (
      
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>

        <div style={styles.loginContainer}>

          <Paper style={styles.paper}>

            <form>
            <div style={styles.fieldContainer}>
            <AccountBoxTwoToneIcon />
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                fullWidth={true}
                style={styles.emailField}
              />
              
              </div>
             
              
       
        <div style={styles.fieldContainer}>
        <EmailOutlinedIcon/>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
                style={styles.emailField}
              />
              
              </div>
              
              
                <div style={styles.fieldContainer}>
                <LockTwoToneIcon />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
                classes={{ root:styles.passField }}
                
              />
    </div>
    <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
             >
              <div classes={{ root:styles.regiserBtnContainer }}>
                <Link to="/">
                  <RaisedButton label="Register"
                                primary={true}
                                style={styles.loginBtn}/>
                </Link>
              </div>
              </Grid>
            </form>
          </Paper>


          <div style={styles.buttonsDiv}>
            <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
              <i className="fa fa-facebook fa-lg"/>
              <span style={styles.btnSpan}>Log in with Facebook</span>
            </Link>
            <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
              <i className="fa fa-google-plus fa-lg"/>
              <span style={styles.btnSpan}>Log in with Google</span>
            </Link>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default RegisterPage;
