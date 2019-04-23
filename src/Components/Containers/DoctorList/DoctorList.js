import React from 'react';
import styled from 'styled-components';

const DoctorName = styled.div`
margin: 5px;
background-color:gray;
display:flex;
justify-content:center;
padding: 5px 10px;
width:200px;
height:30px;
`;

const Container = styled.div`
width:auto;
display:flex;
flex-direction:column;
`;

const DoctorList = () =>{
    

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
                <DoctorName>{doctor}</DoctorName>
            )
        })}
        {renderIf(doctorname)(
            <ClientList>
                {doctor.map()}
            </ClientList>
        )}
    </Container>
)
}
export default DoctorList;