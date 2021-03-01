import { FC } from 'react'
import styled from 'styled-components'
import { getSingleResponsiveTypographyStyle, Size } from '../styles/typography'
import { RedditObject } from '../types/RedditImage'
import Author from './Author'
import Votes from './Votes'

const Container = styled.div`
  ${getSingleResponsiveTypographyStyle(Size.Small)}

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  * > {
    display: inline-block;
    margin-inline-end: 0.3;
  }
`

type RedditDetailsProps = { obj: RedditObject }

const RedditDetails: FC<RedditDetailsProps> = ({ obj }) => (
  <Container>
    <Author>{obj.author}</Author>
    <Votes>{obj.score}</Votes>
  </Container>
)

export default RedditDetails
