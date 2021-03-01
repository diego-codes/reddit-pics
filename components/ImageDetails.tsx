import { FC } from 'react'
import styled from 'styled-components'
import { getSingleResponsiveTypographyStyle, Size } from '../styles/typography'
import { RedditComment, RedditListing } from '../types/RedditImage'
import Card from './Card'
import StyledLink from './StyledLink'
import RedditDetails from './RedditDetails'
import { Breakpoint, mediaQuery } from '../styles/responsive'
import TopCommentsList from './TopCommentsList'

const Container = styled.div<{ imageHeight: number; imageWidth: number }>`
  ${mediaQuery(Breakpoint.SM)} {
    display: grid;
    grid-template-columns: 22em auto;
    max-block-size: ${props => (props.imageHeight / props.imageWidth) * 22}em;
  }

  ${mediaQuery(Breakpoint.MD)} {
    grid-template-columns: 33em auto;
    max-block-size: ${props => (props.imageHeight / props.imageWidth) * 33}em;
  }

  ${mediaQuery(Breakpoint.LG)} {
    grid-template-columns: 40em auto;
    max-block-size: ${props => (props.imageHeight / props.imageWidth) * 40}em;
  }
`

const Picture = styled.img`
  inline-size: 100%;
  background-color: ${props => props.theme.bg03};
`

const DETAILS_INLINE_PADDING = '1.5em'

const Details = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  max-block-size: inherit;
`

const Header = styled.div`
  padding: 0 ${DETAILS_INLINE_PADDING};
`

const Title = styled.h1``

const SubTitle = styled.h2`
  ${getSingleResponsiveTypographyStyle(Size.Small)}
  margin-block-start: 0;
  color: ${props => props.theme.text01};
`

const CommentsSection = styled.div`
  overflow: auto;
  padding: 0 ${DETAILS_INLINE_PADDING};
`

type ImageDetailsProps = {
  listing: RedditListing
  comments: RedditComment[]
}

const ImageDetails: FC<ImageDetailsProps> = ({ listing, comments = [] }) => (
  <Card>
    <Container
      imageHeight={listing.preview.images[0].source.height}
      imageWidth={listing.preview.images[0].source.width}
    >
      <Picture src={listing.url} alt={listing.title} />
      <Details>
        <Header>
          <Title>
            <StyledLink href={`https://reddit.com${listing.permalink}`}>
              {listing.title}
            </StyledLink>
          </Title>
          <SubTitle>
            <RedditDetails obj={listing} />
          </SubTitle>
        </Header>
        <CommentsSection>
          <TopCommentsList comments={comments} maxComments={5} />
        </CommentsSection>
      </Details>
    </Container>
  </Card>
)

export default ImageDetails
