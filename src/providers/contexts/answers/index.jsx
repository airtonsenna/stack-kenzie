import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useAuth } from "../../hooks";

const AnswerContext = createContext({});

const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const { accessToken } = useAuth();

  const tokenBearer = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  useEffect(() => {
    api.get("/answers").then((response) => {
      setAnswers(response.data);
    });
  }, [answers]);

  //Criar uma questão
  const createAnswer = async (data) => {};

  //Pegar todos as resposta
  const getAnswers = async (userId, postId) => {
    if (userId && postId) {
      api.get(`/answers?userId=${userId}&postId=${postId}`).then((response) => {
        setAnswers(response.data); //return response.data
      });
    } else {
      api.get("/answers").then((response) => {
        setAnswers(response.data);
      });
    }
  };

  //deletar uma questão
  const deleteAnswer = async () => {};

  return (
    <AnswerContext.Provider
      value={{ answers, setAnswers, createAnswer, getAnswers, deleteAnswer }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export { AnswerProvider, AnswerContext };
