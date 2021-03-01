import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { RedditComment } from '../types/RedditImage'
import RedditDetails from './RedditDetails'

const Container = styled.article``

const Body = styled(ReactMarkdown)`
  word-break: break-word;

  & > * {
    :first-child {
      margin-block-start: 0;
    }
  }
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
