import { 
  Topic, 
  TopicWithOneAlphabet,
  TopicWithThreeAlphabets,
  TopicWithTwoAlphabets
} from '../../types/vocabTypes';

export const sortTopics = (
  topics: TopicWithOneAlphabet[] | TopicWithTwoAlphabets[] | TopicWithThreeAlphabets[]
) => {
  return topics.sort((a:Topic,b: Topic) => a.name < b.name ? -1 : 1 )
}