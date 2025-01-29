import { 
  Topic, 
  TopicWithThreeWritingSystems,
} from '../../types/learningSections/VocabTypes';
import { lingoCommandHasLoginLock } from '../constants';

export const sortTopics = (
  topics: TopicWithThreeWritingSystems[],
  userIsLoggedIn: boolean,
) => {
  return topics.sort((a: Topic, b: Topic) => {
    if(lingoCommandHasLoginLock && !userIsLoggedIn){
      if (a.hasLoginLock === b.hasLoginLock) {
        return a.name < b.name ? -1 : 1;
      }
      return a.hasLoginLock ? 1 : -1;
      
    }
    else{
      return a.name < b.name ? -1 : 1;
    }
   
  });
}