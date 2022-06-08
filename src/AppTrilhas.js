import React from 'react';
import TrilhaInfra from './Components/TrilhaInfra/Trilha-infra'
import TrilhaDados from './Components/TrilhaDados/Trilha-dados'
import TrilhaDevWeb from './Components/TrilhaDevWeb/Trilha-dev-web'


function AppTrilhaInfra() {
  return ( 
    <>
    <TrilhaInfra/>
    </>
  );
}


function AppTrilhaDados() {
  return ( 
    <>
    <TrilhaDados/>
    </>
  );
}

function AppTrilhaDevWeb(){
  return ( 
    <>
    <TrilhaDevWeb/>
    </>
  );
}

export default {AppTrilhaInfra, AppTrilhaDados, AppTrilhaDevWeb};
