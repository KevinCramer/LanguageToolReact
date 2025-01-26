import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { japaneseVocabTopicSlugNames } from '../../data/structured-data/words';

interface Topic {
  Name: string;
  slugName?: string;
}

const allTopics: Topic[] = [
  { Name: 'Animals', slugName: japaneseVocabTopicSlugNames.animals },
  { Name: 'Appliances' },
  { Name: 'At a Party' },
  { Name: 'At the Beach' },
  { Name: 'At the Mall' },
  { Name: 'At the Store' },
  { Name: 'Bank and Finance' },
  { Name: 'Bathroom' },
  { Name: 'Bedroom' },
  { Name: 'Body Parts I', slugName: japaneseVocabTopicSlugNames.body },
  { Name: 'Body Parts II' },
  { Name: 'Car Parts' },
  { Name: 'Cleaning Supplies' },
  { Name: 'Clothes' },
  { Name: 'Colours', slugName: japaneseVocabTopicSlugNames.colours },
  { Name: 'Common Japanese Phrases' },
  { Name: 'Conjunctions' },
  { Name: 'Countries and Continents' },
  { Name: 'Days of Week', slugName: japaneseVocabTopicSlugNames.daysOfWeek },
  { Name: 'Family' },
  { Name: 'Food I', slugName: japaneseVocabTopicSlugNames.food },
  { Name: 'Food II' },
  { Name: 'Furniture' },
  { Name: 'Government' },
  { Name: 'Irregular Adjectives Group 1', slugName: japaneseVocabTopicSlugNames.irregularAdjectives },
  { Name: 'Irregular Adjectives Group 2' },
  { Name: 'Irregular Adjectives Group 3' },
  { Name: 'Irregular Adjectives Group 4' },
  { Name: 'Japanese Survival' },
  { Name: 'Japanese Greetings' },
  { Name: 'Japanese Love Phrases' },
  { Name: 'Japanese Slang' },
  { Name: 'Kitchen' },
  { Name: 'Living Room' },
  { Name: 'Locations', slugName: japaneseVocabTopicSlugNames.locations },
  { Name: 'Military' },
  { Name: 'Months', slugName: japaneseVocabTopicSlugNames.monthsOfYear },
  { Name: 'Music' },
  { Name: 'Nature' },
  { Name: 'Numbers' },
  { Name: 'Outside' },
  { Name: 'Prepositions' },
  { Name: 'Professions' },
  { Name: 'Pronouns' },
  { Name: 'Regular Adjectives Group 1', slugName: japaneseVocabTopicSlugNames.regularAdjectives },
  { Name: 'Regular Adjectives Group 2' },
  { Name: 'Regular Adjectives Group 3' },
  { Name: 'Regular Adjectives Group 4' },
  { Name: 'Restaurant Table' },
  { Name: 'School and Science' },
  { Name: 'School Supplies' },
  { Name: 'Sports' },
  { Name: 'Technology' },
  { Name: 'Time and Seasons' },
  { Name: 'Tools' },
  { Name: 'Toys' },
  { Name: 'Travel' },
  { Name: 'Types of Restaurants' },
  { Name: 'Vehicles' },
  { Name: 'Verbs Group 1' },
  { Name: 'Verbs Group 2' },
  { Name: 'Verbs Group 3' },
  { Name: 'Verbs Group 4' },
  { Name: 'Verbs Group 5' },
  { Name: 'Verbs Group 6' },
  { Name: 'Verbs Group 7' },
  { Name: 'Verbs Group 8' },
  { Name: 'Verbs Group 9' },
  { Name: 'Verbs Group 10' },
  { Name: 'Verbs Group 11' },
  { Name: 'Verbs Group 12' },
  { Name: 'Verbs Group 13' },
  { Name: 'Verbs Group 14' },
  { Name: 'Verbs Group 15' },
  { Name: 'Weather' },
];

const VocabularyGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate();

  const handleTopicClick = (topic: Topic) => {
    if (topic.slugName) {
      navigate(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`); // Navigate to the given subroute
    } else {
      setModalContent(topic.Name);
      setIsModalOpen(true); // Show the modal if no slugName
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold py-8">Vocabulary Topics</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {allTopics.map((topic, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-1.5 my-4 h-[70px] shadow-md transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
            onClick={() => handleTopicClick(topic)}
          >
            <h2 className={`md:text-xl font-semibold mb-4 ${!topic.slugName ? 'text-gray-500' : ''}`}>
              {topic.Name}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-md w-1/3">
            <h2 className="md:text-xl font-semibold">Coming Soon: {modalContent}</h2>
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyGuide;
