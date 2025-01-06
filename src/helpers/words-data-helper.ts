import { 
  Topic, 
  TopicWithOneAlphabet,
  TopicWithThreeAlphabets,
  TopicWithTwoAlphabets
} from '../../types/learningSections/VocabTypes';
import { lingoCommandIsLocked } from '../constants';

export const sortTopics = (
  topics: TopicWithOneAlphabet[] | TopicWithTwoAlphabets[] | TopicWithThreeAlphabets[],
  userIsLoggedIn: boolean,
) => {
  return topics.sort((a: Topic, b: Topic) => {
    if(lingoCommandIsLocked && !userIsLoggedIn){
      if (a.isLocked === b.isLocked) {
        return a.name < b.name ? -1 : 1;
      }
      return a.isLocked ? 1 : -1;
      
    }
    else{
      return a.name < b.name ? -1 : 1;
    }
   
  });
}