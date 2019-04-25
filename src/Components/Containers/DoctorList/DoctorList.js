import React, { useState }from 'react';
import styled from 'styled-components';
import renderIf from 'render-if';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const DoctorName = styled.div`
display:flex;
width:230px;
height:50px;
transition: .5s;
`;

const DoctorAdd = styled.div`
margin: 5px;
background-color:#cccccc;
display:flex;
justify-content:flex-start;
padding: 5px 10px;
width:200px;
height:30px;
box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);
transform: scale (1.05);
`;


const Container = styled.div`
width:auto;
display:flex;
flex-direction:column;
`;

const StyleClient = styled.p`
display: flex;
width:410px;
height:30px;
border: 1px solid #CCC;
background-color : #e0e0eb ;
`;

const ClientName = styled.div`
display:flex;
flex-direction:column;
align-self : flex-end;

`;
const ClientItem = styled.div`
display:flex;
justify-content:flex-start;
width:400px;
height:30px;
border: 1px solid #CCC;
padding: 5px;

`;

const ClientList = styled.div`
&&{
display:flex;
flex-direction:column;
align-self:center;
align-items: flex-start;
justify-content: flex-start;
margin: -12%;
width: 100%;
max-Width: 360px;
}
`;

const DoctorList = () =>{
    
const [doctorName, setDoctorName] = useState("");

function handleChange(doctorName) {
    console.log ("blahifhi", doctorName)
    setDoctorName(doctorName);
  }

const mockData = ["Julie Bertrand" ,"David Germain" , "Tam Le Duc"];

const doctor1 = {
    name:"Colisse",
    age:22,
    sexe:"M",
    clients:["julie","clara"]
}

const doctor2 = {
    name:"Colisse",
    age:22,
    sexe:"M",
    clients:["julie","clara"]
}

const doctorListData = [doctor1,doctor2 ];


return(
    <Container>
        {doctorListData.map(doctor => {
            
            return (

                <DoctorName 
                value={doctor.name}
                onClick={() =>{handleChange(doctor.name)}}
                >
                <DoctorAdd>{doctor.name}</DoctorAdd>
                </DoctorName>
                
            ) 
        })}
       
        {doctorName?
            
            <ClientList>
               {doctorListData.map(doctor =>{
                if(doctor.name === doctorName){
                    return( 
                        <List>
                            <StyleClient>Liste des patients</StyleClient>
                            
                            {doctor.clients.map(client => <ListItem button><ClientItem>{client}</ClientItem></ListItem>)}
                            
                        </List>
                     )
                }
                  
               })}
            </ClientList>:null
        }
    </Container>
)
}
export default DoctorList;