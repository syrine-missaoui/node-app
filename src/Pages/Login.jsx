import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch } from 'react-redux';
import { login } from "../redux/apiCalls";
import { useSelector } from 'react-redux';



const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 30vw;
    background-color: white;
    border-radius: 10px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    padding-bottom: 10px;
    letter-spacing: 1px;
`

const Form = styled.form`
    display: grid;
    padding:10px;
    
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`



const Button = styled.button`
    width: 40%;
    border: none;
    margin-top:15px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    opacity: 0.7;
    &:hover{
        opacity: 1;
        transform: scale(1.02);
        transition: all 0.2s ease;
    }
    &:disabled{
      color: green;
      cursor: not-allowed;
    }
`

const Link = styled.a` 
    font-size: 12px;
    margin: 15px 0px 5px 10px;
    cursor: pointer;
    &:hover{
      color: blueviolet;
      transform: translateY(-1px);
      text-decoration: underline;
    }
`


const Login = () => {


  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    
    setValues({ ...values, [prop]: event.target.value });
    // setQuery(values.password);
    
    // console.log(values.password)
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [errorState, setErrorState] = useState(false)
  const [errorMessageName, setErrorMessageName] = useState('')
  const [errorPassword, setErrorPassowrd] = useState('')
  const [queryPassword, setQueryPassword] = useState('')
  const [queryName, setQueryName] = useState('')
  const {isFetching, error} = useSelector((state)=>state.user)

  const dispatch = useDispatch()
  
  


  const handleClick = (e) => {
   
      e.preventDefault()
    login(dispatch, { username: queryName, password: queryPassword })
         if (error) {
      setErrorMessageName('check username !')
      setErrorPassowrd("check Password !")
      setErrorState(true)
    }
    
  }

  // useEffect(() => {
  //    if (error) {
  //     setErrorMessageName('check username !')
  //     setErrorPassowrd("check Password !")
  //     setErrorState(true)
  //   }
  // },[error])
  
  //  useEffect(() => {
  //   const keyDownHandler = event => {

  //     if (event.key === 'Enter') {
  //       event.preventDefault();

        
  //       handleClick();
  //     }
  //   };

  //   document.addEventListener('keydown', keyDownHandler);

  //   return () => {
  //     document.removeEventListener('keydown', keyDownHandler);
  //   };
  // });

 
  return (
    <Container>
        <Wrapper>
              <Title>SIGN IN</Title>
        <Form>
          
          <TextField
            onChange={e=>setQueryName(e.target.value)}
            color="success" error={errorState} helperText={errorMessageName}
            InputLabelProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500, minWidth: "100%" } }}
              InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
               label="Username" id="outlined-size-small" size="small" />

          <FormControl 
            size="small"
            onChange={e=>setQueryPassword(e.target.value)}
            sx={{ paddingTop: 2.5, marginBottom: 1, width: '100%', minWidth: "40%" }}
            variant="outlined"
          >
            <InputLabel error={errorState}
              sx={{ paddingTop: 2.5, m: 0, width: '100%', fontFamily: 'Urbanist' }}
              color="success"
              htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              error={errorState} 
                      InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
                      id="outlined-adornment-password"
                      size="small"
                      color="success"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                      </InputAdornment>
                      }
                      label="Password"
            />
            <FormHelperText error={errorState} id="component-helper-text">{ errorPassword }</FormHelperText>
          </FormControl>
          <Link>Do not remember password! click here</Link>
          <Link>Create account</Link>
          <Button type='button' onClick={handleClick} disabled={isFetching} >LOGIN</Button>
          
              </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
