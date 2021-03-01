import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { getSingleResponsiveTypographyStyle, Size } from '../styles/typography'
import { RedditComment } from '../types/RedditImage'
import RedditDetails from './RedditDetails'
import Votes from './Votes'

const Container = styled.article``
const Author = styled.header`
  display: inline;
  color: ${props => props.theme.text02};
  font-weight: 400;
`

const Content = styled.p`
  margin-block-end: 0.3em;
`

const Body = styled(ReactMarkdown)`
  word-break: break-word;

  & > * {
    :first-child {
      margin-block-start: 0;
    }
  }
`

const Footer = styled.footer`
  ${getSingleResponsiveTypographyStyle(Size.Small)}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${props => props.theme.bg02};
  padding: 0.1em 0.3em;
`
type CommentProps = {
  comment: RedditComment
}
const Comment: FC<CommentProps> = ({ comment }) => (
  <Container>
    <RedditDetails obj={comment}></RedditDetails>
    <Body>{comment.body}</Body>
  </Container>
)

export default Comment
