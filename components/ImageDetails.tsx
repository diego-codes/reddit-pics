import { FC } from 'react'
import styled from 'styled-components'
import { getResponseTypeStyle, Size } from '../styles/typography'
import RedditListing from '../types/RedditImage'
import { truncateNumber } from '../utils/i18n.utils'
import Card from './Card'
import StyledLink from './StyledLink'

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 30em) auto;
`

const Picture = styled.img`
  object-fit: cover;
`

const Details = styled.div`
  padding: 1em 1.5em;
`

const Title = styled.h1`
  margin-block-end: 0.2em;
`
const Author = styled.span`
  ${getResponseTypeStyle(Size.Small)}
`

const AuthorLink = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const Score = styled.span``

type ImageDetailsProps = {
  listing: RedditListing
}

const ImageDetails: FC<ImageDetailsProps> = ({ listing }) => (
  <Card>
    <Container>
      <Picture src={listing.url} alt={listing.title} />
      <Details>
        <Title>{listing.title}</Title>
        <Author>
          By{' '}
          <AuthorLink href={`https://reddit.com/u/${listing.author}`}>
            u/{listing.author}
          </AuthorLink>
        </Author>
        <Score>{truncateNumber(listing.score)}</Score>
        <StyledLink href={`https://reddit.com${listing.permalink}`}>
          See in Reddit
        </StyledLink>
      </Details>
    </Container>
  </Card>
)

export default ImageDetails
