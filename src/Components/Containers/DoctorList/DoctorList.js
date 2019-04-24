import React, { useState }from 'react';
import styled from 'styled-components';
import renderIf from 'render-if';

const DoctorName = styled.div`
margin: 5px;
background-color:gray;
display:flex;
justify-content:flex-start;
padding: 5px 10px;
width:200px;
height:30px;

`;

const Container = styled.div`
width:auto;
display:flex;
flex-direction: column;
`;

const ClientName = styled.div`
padding: 5px 10px;
width:200px;
height:50px;
display:flex;
flex-direction:column;

`;
const ClientItem = styled.div`
display:flex;
justify-content:center;
`;

const ClientList = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
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
                {doctor.name}
                </DoctorName>
            )
        })}
        {doctorName?
            <ClientList>
               {doctorListData.map(doctor =>{
                if(doctor.name === doctorName){
                    return( 
                        <ClientName>
                            {doctor.clients.map(client => <ClientItem>{client}</ClientItem>)}
                        </ClientName>
                     )
                }
                  
               })}
            </ClientList>:null
        }
    </Container>
)
}
export default DoctorList;