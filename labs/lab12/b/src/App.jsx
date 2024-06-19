import useSWR from "swr";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: blanchedalmond;
    align-items: center;
    padding: 5%;
    margin: 5%;
`

export default function App() {

    const{error, data} = useSWR("https://rickandmortyapi.com/api/character",
        (url)=> fetch(url).then((res)=>res.json())
    )

    if (error) return <h3>There was an error</h3>
    if (!data) return <h3>Loading...</h3>

    return (
        <>
            {
                data.results.map((char) =>
                    (
                        <StyledDiv key={char.id}>
                            <h1>{char.name}</h1>
                            <img src={char.image} alt={char.name}/>
                            <h3>{char.species}</h3>
                            <h3>{char.status}</h3>
                        </StyledDiv>
                    )
                )
            }
        </>
    )
}
