import { FC } from "react";
import { Card, CardContent, Typography, Rating } from "@mui/material";
import { Review } from "../../utils/types";

interface Props {
  review: Review;
}
const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <div className="flex flex-col p-1">
      <div className="flex p-1">
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Reviews
            </Typography>

            <Typography variant="h6" color="text.secondary">
              {review.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography component="legend">
                {review.body}
                {review.author}
              </Typography>

              <Rating name="read-only" value={review.stars} readOnly />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewCard;
