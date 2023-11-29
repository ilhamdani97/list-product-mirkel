import React, { useState, useEffect } from "react";
import Logins from "./styles";
import { Button, Input } from "../../components";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [userName,setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if(userName === 'admin' && password === 'admin') {
            navigate('dashboard')
        }else {
            setIsError(true);
        }
    }

    useEffect(() => {
        setIsError(false)
    },[userName, password])
    return (
        <Logins.Container>
            <Logins.Header>

            </Logins.Header>
            <Logins.Content>
                <Logins.ContainerForm>
                    <Input 
                        variant={'default'}
                        placeholder={'Username'}
                        value={userName}
                        setValue={(e) => setUserName(e)}
                    />
                     <Input 
                        variant={'default'}
                        placeholder={'Password'}
                        value={password}
                        setValue={(e) => setPassword(e)}
                    />
                    <Button
                        mode={'default'}
                        title={'Login'}
                        variant={'primary'}
                        onClick={handleLogin}
                    />
                </Logins.ContainerForm>
                {isError && (
                    <Logins.TextError>
                        {'Email Atau Password Salah'}
                    </Logins.TextError>
                )}
                
            </Logins.Content>
            <Logins.Footer>

            </Logins.Footer>
        </Logins.Container>
    )
}

export default Login