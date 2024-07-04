import { Topic, Topic1, Topic2, Topic3 } from '../../types/vocabTypes';

export const sortTopics = (topics: Topic1[] | Topic2[] | Topic3[]) =>
{return topics.sort((a:Topic,
  b: Topic) => a.name < b.name ? -1 : 1 )}