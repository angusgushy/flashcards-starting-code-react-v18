import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selector
import { useSelector } from 'react-redux';
import { selectTopics } from './TopicsSlice.js';

export default function Topics() {
  // Renders a list of topics from the Redux store.
  const topics = useSelector(selectTopics);
/*
  const topics = useSelector(selectTopics);

  // Memoize the topics list to prevent unnecessary re-renders
  const topicsList = useMemo(() => Object.values(topics), [topics]);
  
  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {topicsList.map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  ); 
  */
  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
