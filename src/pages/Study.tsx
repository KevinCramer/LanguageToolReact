/*
export function Study(){
    return <h1>Study</h1>
}
*/

import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Amharic} from "./Languages/Amharic"
import {Arabic} from "./Languages/Arabic"
import {Dutch} from "./Languages/Dutch"
import {Japanese} from "./Languages/Japanese"
import {Spanish} from "./Languages/Spanish"
import {NavbarLanguages} from "../components/NavbarLanguages"

export function Study(){
    return( 
        <>
      <NavbarLanguages/>
      <Container className = "mb-4">
        <Routes>
          <Route path ="/study/amharic" element = {<Amharic/>}/>
          <Route path ="/study/arabic" element = {<Arabic/>}/>
          <Route path ="/study/dutch" element = {<Dutch/>}/>
          <Route path ="/study/japanese" element = {<Japanese/>}/>
          <Route path ="/study/spanish" element = {<Spanish/>}/>

        </Routes>
      </Container>
      </>
    )
}