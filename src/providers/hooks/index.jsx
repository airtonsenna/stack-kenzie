import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { UserContext } from "../contexts/users";
import { QuestionContext } from "../contexts/questions";
import { CommentContext } from "../contexts/comments";

//Hook useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

//Hook useUsers

export const useUsers = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useQuestion must be used within an AuthProvider");
  }

  return context;
};

//Hook useQuestions
export const useQuestions = () => {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error("useQuestion must be used within an AuthProvider");
  }

  return context;
};

//Hook useComments

export const useComments = () => {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("useQuestion must be used within an AuthProvider");
  }

  return context;
};
