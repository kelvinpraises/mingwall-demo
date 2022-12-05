import React from 'react'
import styled from 'styled-components'


const SAdminBox = styled.div`
  width: 50%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

const SBox = styled.div`
width: 100%;
height: 190rem;
margin-top: 2rem;
background: #fafafa;
border: 1px solid  rgba(0, 209, 239, 0.3);
border-radius: 30px;
display: flex;
flex-direction: column;
font-size: 1.3rem; 
padding: 1rem 1.5rem;
overflow-y: auto;

`

const STitle = styled.p`
font-size: 2.2rem;
text-align: center;
`

const Admin = () => {
  return (
    <SAdminBox>
      <STitle>Admin</STitle>
      <SBox>Actions</SBox>
      <SBox>Logs</SBox>
    </SAdminBox>
  )
}

export default Admin