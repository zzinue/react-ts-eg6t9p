import React, { createRef } from 'react';
import './style.scss';

export default function App() {
  return (
    <div className="App">
      <h1>Registro </h1>
      <InputControlado />
    </div>
  );
}

const Style = {
  Error: {
    border: '2px solid red',
  },
  Ok: {
    border: '2px solid green',
  },
};

//Refactorizar el componete YA
// Evaluar que la Contraseña tenga mas de 8 caracteres Ya
// habilitar el boton solo cuando tenga la informacion correcta

// Manejar diferentes mensajes de error dependiendo de input que lo arroje

const InputControlado = () => {
  const [Name, setName] = React.useState(null);
  const [Password, setPassword] = React.useState(0);
  const [enableButton, setEnableButton]=React.useState(true)
  const [ErrorMessage, setErrorMessage] = React.useState({
    Message: null,
    Type: '',
    Class: '',
  });

  const isEnnabled=()=>{
    if(ErrorMessage.Message== 'Nombre muy Corto'|| ErrorMessage.Message==null || ErrorMessage.Message=='Contraseña muy corta') {setEnableButton(true); return true}
    else{
      setEnableButton(false); return false
    }
  }
  const handleInfo = (e) => {};
return (
    <div>
      <input
        className={ErrorMessage.Class}
        type="text"
        placeholder="Nombre"
        onChange={({ target }) => {
          console.log(target.value);
          setName(target.value);
          {
            target.value.length < 3
              ? setErrorMessage({
                  ...ErrorMessage,
                  Message: 'Nombre muy Corto',
                  Class: 'Error',
                }) 
              : setErrorMessage({ ...ErrorMessage, Message: '', Class: 'Ok' });
          }
        }}
      />
      <p>{Error}</p>
      <input
        className={ErrorMessage.Class2}
        type="password"
        placeholder="password"
        onChange={({ target }) => {
          console.log(target.value);
          setPassword(target.value);
          {
            target.value.length < 8
              ? setErrorMessage({
                  ...ErrorMessage,
                  Message: 'Contraseña muy corta',
                  Class2: 'Error',
                })
              : setErrorMessage({ ...ErrorMessage, Message: '', Class2: 'Ok' });
          }
        }}
      />
      <p className="ErrorMessage">{ErrorMessage.Message}</p>
         
      <button disabled= {isEnnabled()}>Show</button>
    </div>
  );
};

/**
 * const InputNoControlado = () => {
  const Name = React.createRef();
  const Password = createRef();

  const handleInfo = () => {
    console.log(Name);
    //petecion POST
  };

  return (
    <>
      <input type="text" ref={Name} placeholder="Nombre" />
      <input type="password" ref={Password} />
      <button onClick={handleInfo}>show</button>
    </>
  );
};

const FormularioNoControlado = () => {
  const handleInfo = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const password = e.target[1].value;
  };

  return (
    <form onSubmit={handleInfo}>
      <input type="text" />
      <input type="password" />
      <button>show</button>
    </form>
  );
};

const FormularioControlado = () => {
  const [user, setUser] = React.useState({
    Name: null,
    Password: null,
  });

  const handleInfo = (e) => {
    e.preventDefault();

    const Name = e.target[0].value;
    const Password = e.target[1].value;

    setUser({
      Name,
      Password,
    });
  };

  console.log(user);

  return (
    <form onSubmit={handleInfo}>
      <input type="text" />
      <input type="password" />
      <button>show</button>
    </form>
  );
};
 */
