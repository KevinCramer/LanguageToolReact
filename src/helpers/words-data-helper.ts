import { 
  Topic, 
  TopicWithOneAlphabet,
  TopicWithThreeAlphabets,
  TopicWithTwoAlphabets
} from '../../types/vocabTypes';

export const sortTopics = (
  topics: TopicWithOneAlphabet[] | TopicWithTwoAlphabets[] | TopicWithThreeAlphabets[]
) => {
  return topics.sort((a: Topic, b: Topic) => {
    if (a.isLocked === b.isLocked) {
      return a.name < b.name ? -1 : 1;
    }
    return a.isLocked ? 1 : -1;
  });
}