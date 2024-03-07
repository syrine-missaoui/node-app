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


const Container = styled.div` 
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

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
    font-weight: 600;
    padding-bottom: 10px;
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

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
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
`




const Register = () => {

    const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
    
    const [errorStateN, setErrorStateN] = useState(false)
    const [errorStateL, setErrorStateL] = useState(false)
    const [errorStateU, setErrorStateU] = useState(false)
    const [errorStateE, setErrorStateE] = useState(false)
    const [errorStateP, setErrorStateP] = useState(false)
    const [errorStateC, setErrorStateC] = useState(false)
    
    const [queryName, setQueryName] = useState('')
    const [queryLastName, setQueryLastName] = useState('')
    const [queryUserName, setQueryUserName] = useState('')
    const [queryEmail, setQueryEmail] = useState('')
    const [queryPassword, setQueryPassword] = useState('')
    const [queryConfirm, setQueryConfirm] = useState('')

    const [errorName, setErrorName] = useState('')
    const [errorLastname, setErrorLastName] = useState('')
    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirm,setErrorConfirm] = useState('')

    function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
    }   

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    
    const [coloring,setColoring] = useState('')
    const verifyRegister = () => {

        if (queryName === ''){
            setErrorName('Enter name !')
            setErrorStateN(true);
        }
        else if ( !onlyLetters(queryName) && queryName !== '') {
            setErrorName('Name must be in characters !')
            setErrorStateN(true);
        } else {
            setErrorName('');
            setErrorStateN(false);
        }

        if (queryLastName === ''){
            setErrorLastName('Enter last name !')
            setErrorStateL(true);
        }
        else if ( !onlyLetters(queryLastName) && queryLastName !== '') {
            setErrorLastName('Last name must be in characters !')
            setErrorStateL(true);
        } else {
            setErrorLastName('');
            setErrorStateL(false);
        }

        if (queryUserName === ''){
            setErrorUserName('Enter User name !')
            setErrorStateU(true);
        }
        else if ( queryUserName.length < 8  && queryLastName !== '') {
            setErrorUserName('Username must contains at least 8 characters !')
            setErrorStateU(true);
        } else {
            setErrorUserName('');
            setErrorStateU(false);
        }

        if (queryEmail === '') {
            
            setErrorEmail('Enter Your email !')
            setErrorStateE(true);
        }
        else if ( !validateEmail(queryEmail)  && queryEmail !== '') {
            setErrorEmail(`Email must be in this forme 'exemple@gmail.com' `)
            console.log(validateEmail(queryEmail))
            setErrorStateE(true);
        } else {
            setErrorEmail('');
            setErrorStateE(false);
        }

        if (queryPassword === '' || queryPassword.length < 8){
            setErrorPassword('Enter password \'must be at least 8 caracteres\' !')
            setErrorStateP(true);
        }
        else {
            setErrorPassword('');
            setErrorStateP(false);
        }

        if (queryConfirm === '' || queryConfirm !== queryPassword){
            setErrorConfirm('Password does not match !')
            setErrorStateC(true)
        }
        else if (queryConfirm === queryPassword){
            setErrorConfirm('');
            setErrorStateC(false)
        }


    }

    useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Enter') {
        event.preventDefault();

          verifyRegister();
          
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  return (
    <Container>
          <Wrapper>
              <Title>CREATE ACCOUNT</Title>
              <Form>
                  <TextField
                      error={errorStateN}
                      helperText={errorName}
                      onChange={e => setQueryName(e.target.value)}
                      InputLabelProps={{ style: { fontFamily: 'Urbanist', fontWeight: 600 } }}
                      InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
                      label="Name" id="outlined-size-small" size="small" />
                  <br/>
                  <TextField
                      error={errorStateL}
                      helperText={errorLastname}
                      onChange={e => setQueryLastName(e.target.value)}
                      InputLabelProps={{ style: { fontFamily: 'Urbanist', fontWeight: 600 } }}
                      InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
                      label="Last name" id="outlined-size-small" size="small" />
                  <br/>
                  <TextField
                      error={errorStateU}
                      helperText={errorUserName}
                      onChange={e => setQueryUserName(e.target.value)}
                      InputLabelProps={{ style: { fontFamily: 'Urbanist', fontWeight: 600 } }}
                      InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
                      label="Username" id="outlined-size-small" size="small" />
                  <br/>
                  <TextField
                      type='email'
                      error={errorStateE}
                      helperText={errorEmail}
                      onChange={e => setQueryEmail(e.target.value)}
                      InputLabelProps={{ style: { fontFamily: 'Urbanist', fontWeight: 600 } }}
                      InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
                      label="Email" id="outlined-size-small" size="small" />

                  <FormControl
                      onChange={e => setQueryPassword(e.target.value)}
                      size="small" sx={{ paddingTop: 2.5, m: 0, width: '100%' }}
                      variant="outlined">
                      <InputLabel error={errorStateP}
                          sx={{ paddingTop: 2.5, m: 0, width: '100%', fontFamily: 'Urbanist', fontWeight: 600 }}
                          htmlFor="outlined-adornment-password">Password
                      </InputLabel>
                        <OutlinedInput error={errorStateP}
                            InputProps={{ style: { fontFamily: 'Urbanist', fontWeight: 500 } }}
                            id="outlined-adornment-password"
                            size="small"
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
                      <FormHelperText error={errorStateP} id="component-helper-text">{ errorPassword }</FormHelperText>
                  </FormControl>
                  <br/>
                  <TextField
                      helperText={errorConfirm}
                      error={errorStateC}
                      onChange={e => setQueryConfirm(e.target.value)}
                      InputLabelProps={{ style: { fontFamily: 'Urbanist', fontWeight: 600 } }}
                      label="Confirm Password" id="outlined-password-input" size="small" type="password" />

                  {/* <Input placeholder="name"></Input>
                  <Input placeholder="last name"></Input>
                  <Input placeholder="username"></Input>
                  <Input placeholder="email"></Input>
                  <Input placeholder="password"></Input>
                  <Input placeholder="confirm password"></Input> */}
                  <Agreement>By creating an account, I consent to the processing of my personal
                      data in accordance with the <b>PRIVACY POLICY</b>
                  </Agreement>
                  <Button type='button' onClick={verifyRegister}>Create</Button>
              </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
