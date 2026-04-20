import styled from "styled-components";

export const ProfileContainer = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const ProfileHeader = styled.header`
width: 75%;
margin-top: 1rem;
display: flex;
justify-content: space-between;
align-items: flex-end;
position: relative;
border-radius: 0.3rem;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background: #fff;
z-index: 0;
`

export const ProfileIconEdit = styled.i`
position: absolute;
top: 1rem;
right: 1rem;
color: #F40009;
background: #fff;
padding: 0.5rem;
border-radius: 50%;
font-size: 1.5rem;
cursor: pointer;
transition: all 0.3s ease-in-out;

& :hover {
    color: #fff;
    backgroud: #F40009;
}
`

export const ProfileBackground = styled.img`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
object-fit: cover;
width: 100%;
height: 50%;
z-index: -1;
border-radius: 0.3rem 0.3rem 0 0;
`

export const ProfileUser = styled.div`
padding: 2rem;
`

export const ProfileAvatar = styled.img`
border-radius: 50%;
width: 13rem;
height: 13rem;
border: solid 12px #ffe;
object-fit: cover;
object-position: center;
`

export const ProfileActions = styled.div`
padding: 2rem;
`

export const ProfileIconAdd = styled.i`
background: transparent;
border-radius: 50%;
color: #F40009;
outline: none;
border: none;
cursor: pointer !important;
font-family: Roboto, Arial;
font-weight: bold;
font-size: 2rem;

transition: all 0.3s ease-in-out;

& :hover {
    color: #cc0c13;
    font-size: 2.1rem;
}
`

export const ProfilePosts = styled.main`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 15px;
margin: 1rem auto;
width: 75%;

& h3 {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #023344;
    margin-top: 1rem;
}
`