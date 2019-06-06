import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';


const DoctorList = () =>{
    
const [doctorName, setDoctorName] = useState("");
const [doctorListData, setDoctorListData] = useState([]);
const [clients, setClients] = useState([]);

function handleChange(doctorName) {
    console.log ("blahifhi", doctorName)
    setDoctorName(doctorName);
  }


// const doctor1 = {
//     name:"Colisse",
//     age:22,
//     sexe:"M",
//     clients:["julie","clara"]
// }

// const doctor2 = {
//     name:"Colisse",
//     age:22,
//     sexe:"M",
//     clients:["julie","clara"]
// }

async function fetchDoctor(){
    console.log("marche")
    let  response =  await fetch('http://localhost:3001/doctor')
    response = await response.json();
    
    const doctorListData = response;
    console.log(doctorListData);
    console.log("tf " ,doctorListData[0].matricule)
    setDoctorListData(doctorListData);
    let i=0;
    for(i = 0 ; i < doctorListData.length;i++)
    {
      console.log(doctorListData[i]);
      // table.push(newData[i]);
       
    }
      console.log("udddser" , response);
    
    console.log("marche")
    let  res =  await fetch('http://localhost:3001/patient')
    
    res = await res.json();
    
    
    const clients = res;
    console.log("tf " ,clients[0].name)
    setClients(clients);
    let a=0;
    for(a = 0 ; a < clients.length;a++)
    {
      console.log(clients[a]);
      // table.push(newData[i]);
       
    }
      console.log("udddser" , res);
    }


    
// const doctorListData = [doctor1,doctor2 ];

console.log(clients, "clients");
return(
    <Container>

        {doctorListData.map(doctor => {
            
            return (

                <DoctorName 
                value={doctor.matricule}
                onClick={() =>{handleChange(doctor.matricule)}}
                
                >
                <DoctorAdd >  {`${doctor.name} ${doctor.surname}`}</DoctorAdd>
                </DoctorName>
                
            ) 
        })}
       
        {doctorName !==""?
            
            <ClientList>
               {doctorListData.map(doctor =>{
                    clients.map(client => {
                        if(doctor.matricule === client.doctor_matricule){
                            console.log("GGG")
                            return( 
                             <p>ggggg</p>
                             )
                        }

                    })
                    console.log(doctor);
                    
                  
               })}
            </ClientList>:null
        }
        <button  onClick={fetchDoctor}>Connexion</button>
    </Container>
)

    }
export default DoctorList;

const DoctorName = styled.div`
display:flex;
width:230px;
height:50px;
transition: .5s;
`;

const DoctorAdd = styled.div`
margin: 5px;
background-color:#DFDEE6;
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
margin: -9%;
width: 100%;
max-Width: 360px;
}
`;