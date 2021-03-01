import { FC } from 'react'
import styled from 'styled-components'
import { getSingleResponsiveTypographyStyle, Size } from '../styles/typography'
import { RedditComment, RedditListing } from '../types/RedditImage'
import Card from './Card'
import StyledLink from './StyledLink'
import RedditDetails from './RedditDetails'
import Comment from './Comment'
import { Breakpoint, mediaQuery } from '../styles/responsive'

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

const Details = styled.div`
  padding: 1em 1.5em;
  display: flex;
  flex-direction: column;
  max-block-size: inherit;
`

const Title = styled.h1``

const SubTitle = styled.h2`
  ${getSingleResponsiveTypographyStyle(Size.Small)}
  margin-block-start: 0;
  color: ${props => props.theme.text01};
`

const CommentsTitle = styled.h2`
  ${getSingleResponsiveTypographyStyle(Size.H4)}
  margin-block-end: 0.5em;
`

const CommentsSection = styled.div`
  overflow: auto;
`
const CommentsList = styled.ol``

const CommentsListItem = styled.li`
  margin-block-end: 1.5em;
`

type ImageDetailsProps = {
  listing: RedditListing
  comments: RedditComment[]
}

const MAX_COMMENTS = 5

const ImageDetails: FC<ImageDetailsProps> = ({ listing, comments = [] }) => (
  <Card>
    <Container
      imageHeight={listing.preview.images[0].source.height}
      imageWidth={listing.preview.images[0].source.width}
    >
      <Picture src={listing.url} alt={listing.title} />
      <Details>
        <div>
          <Title>
            <StyledLink href={`https://reddit.com${listing.permalink}`}>
              {listing.title}
            </StyledLink>
          </Title>
          <SubTitle>
            <RedditDetails obj={listing} />
          </SubTitle>
        </div>
        <CommentsSection>
          <CommentsTitle>Top {MAX_COMMENTS} comments:</CommentsTitle>
          <CommentsList>
            {comments.slice(0, MAX_COMMENTS).map(comment => (
              <CommentsListItem key={comment.id}>
                <Comment comment={comment} />
              </CommentsListItem>
            ))}
          </CommentsList>
        </CommentsSection>
      </Details>
    </Container>
  </Card>
)

export default ImageDetails
