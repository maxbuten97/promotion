"use strict";
import s from "./Answers.module.scss";
import { questions } from "./questions";

const Answers = () => {
  return (
    <div className={s.Answers}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.title}>Ответы на частые вопросы</div>
          <div className={s.answers_title}>
            <div className={s.investors}>ИНВЕСТОРАМ</div>
            <div className={s.companies}>КОМПАНИЯМ</div>
          </div>
          <div className={s.answers_block}>
            {questions.map((question) => {
              return (
                <div className={s.question} key={question.id}>
                  <span className={s.num}>{question.number}</span>
                  {question.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
