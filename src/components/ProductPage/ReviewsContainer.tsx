import { Box, Rating, Typography } from "@mui/material";
import { FC } from "react";
import { Review } from "../../utils/types";

interface Props {
  reviews: Review[];
}

const ReviewsContainer: FC<Props> = ({ reviews }) => {
  return (
    <Box>
      <Typography variant="h5">Recensioner</Typography>
      {reviews.map((review, idx) => (
        <Box key={idx}>
          <Typography variant="h6">{review.title} </Typography>
          <Rating name="read-only" value={review.stars} readOnly />
          <Typography variant="body2" color="text.secondary">
            <Typography component="legend">{review.body}</Typography>-{" "}
            {review.author}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewsContainer;
