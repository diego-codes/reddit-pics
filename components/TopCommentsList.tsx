import { FC } from 'react'
import styled from 'styled-components'
import { getSingleResponsiveTypographyStyle, Size } from '../styles/typography'
import { RedditComment } from '../types/RedditImage'
import Comment from './Comment'

const CommentsTitle = styled.h2`
  ${getSingleResponsiveTypographyStyle(Size.H4)}
  margin-block-end: 0.5em;
`

const CommentsList = styled.ol``

const CommentsListItem = styled.li`
  margin-block-end: 1.5em;
`
type TopCommentsListProps = {
  comments: RedditComment[]
  maxComments: number
}
const TopCommentsList: FC<TopCommentsListProps> = ({
  comments = [],
  maxComments,
}) => (
  <>
    <CommentsTitle>
      Top {comments.length < maxComments ? '' : `${maxComments} `}
      comments:
    </CommentsTitle>
    <CommentsList>
      {comments.slice(0, maxComments).map(comment => (
        <CommentsListItem key={comment.id}>
          <Comment comment={comment} />
        </CommentsListItem>
      ))}
    </CommentsList>
  </>
)

export default TopCommentsList
