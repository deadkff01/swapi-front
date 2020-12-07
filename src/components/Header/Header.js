import styled from 'styled-components'
import { Link } from '@reach/router'

const HeaderStyle = styled.div`
  font-family: 'STARWARS';
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  height: auto;
  top: 0;
  cursor: pointer;
  text-transform: uppercase;
  opacity: 0.9;
`

export default function Header() {
  return (
    <HeaderStyle className="w-full bg-black py-5 text-center mb-10">
      <Link to="/">Star Wars - Movies</Link>
    </HeaderStyle>
  )
}
