import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [Like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="couter">
      <IconButton
        aria-label="like"
        className="btn"
        onClick={() => setLike(Like + 1)}
        color="primary"
      >
        <Badge badgeContent={Like} color="primary">
          👍{" "}
        </Badge>
      </IconButton>
      {/* <button >
              
            </button> */}
      <IconButton
        aria-label="dislike"
        className="btn"
        onClick={() => setdisLike(dislike + 1)}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button>
             </button> */}
    </div>
  );
}
