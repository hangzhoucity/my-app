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

const MockData = ["Julie Bertrand" ,"David Germain" , "Tam Le Duc"];

return(
    <Container>
        {MockData.map(doctor => {
            return (
                <DoctorName>{doctor}</DoctorName>
            )
        })}
    </Container>
)
}
export default DoctorList;