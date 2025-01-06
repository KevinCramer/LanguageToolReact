import React, { useState } from 'react';
import { Paragraph, SentenceWithNumAlphabets, TranscriptionType } from '../../../../types/learningSections/ComprehensionTypes';
import AudioPlayer from '../../atoms/CustomAudioPlayer/CustomAudioPlayer';

const RenderTableCell = ({
  current,
  visibility,
  sentences,
  audioFile,
  granularity,
}: {
  current: TranscriptionType;
  visibility: boolean;
  sentences: (
    | SentenceWithNumAlphabets<1>
    | SentenceWithNumAlphabets<2>
    | SentenceWithNumAlphabets<3>
    | SentenceWithNumAlphabets<4>
  )[];
  audioFile: Paragraph['audioFile'];
  granularity: string;
}) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => { return setShow(!show)}

  const displayContent =
  granularity === 'sentence'
    ? sentences
    : [
      {
        englishText: sentences.map((s) => s.englishText).join(' '),
        foreignText: [
          sentences.map((s) => s.foreignText[0]).join(' '),
          sentences.map((s) => s.foreignText[1]).join(''),
          sentences.map((s) => s.foreignText[2]).join(' '),
          sentences.map((s) => s.foreignText[3]).join(''),
        ],
        audioFile: audioFile,
      },
    ];

  const sentenceContent = <div>
    {displayContent.map((content, index) => (
      <div key={index}>
        {current === TranscriptionType.Audio && <AudioPlayer audioFile={content.audioFile || ''} />}
        {current === TranscriptionType.English && <div>{content.englishText}</div>}
        {current === TranscriptionType.WritingSystem1 && <div>{content.foreignText[0]}</div>}
        {current === TranscriptionType.WritingSystem2 && <div>{content.foreignText[1]}</div>}
        {current === TranscriptionType.WritingSystem2v2 && (
          <div>
            {content.foreignText[2]?.split(' ').map((word: any, idx: any) => (
              <div
                key={idx}>
                {word}
              </div>
            ))}
          </div>
        )}
        {current === TranscriptionType.WritingSystem3 && <div>{content.foreignText[3] || ''}</div>}
      </div>
    ))}
  </div>    
  const paragraphContent = <div>
    {current === TranscriptionType.Audio && <AudioPlayer audioFile={displayContent[0].audioFile || ''} />}
    {current === TranscriptionType.English && <div>{displayContent[0].englishText}</div>}
    {current === TranscriptionType.WritingSystem1 && <div>{displayContent[0].foreignText[0]}</div>}
    {current === TranscriptionType.WritingSystem2 && <div>{displayContent[0].foreignText[1]}</div>}
    {current === TranscriptionType.WritingSystem2v2 && (
      <div>
        {displayContent[0].foreignText[2]?.split(' ').map((word, idx) => (
          <div
            key={idx}
          >
            {word}
          </div>
        ))}
      </div>
    )}
    {current === TranscriptionType.WritingSystem3 && <div>{displayContent[0].foreignText[3] || ''}</div>}
  </div>     
  if (!visibility) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <>
        <button
          onClick={toggleShow}>
          {show ? 'Hide Content' : 'Show Content'}
        </button>
        {show && 
        <div>
          {granularity === 'sentence' && 
          <div>
            {sentenceContent}
          </div>
          }
          {granularity === 'paragraph' && 
          <div>
            {paragraphContent}
          </div>
          }
        </div>}
       
      </>
    );

  }

  if (granularity === 'sentence') {
    return sentenceContent
  } else {
    return paragraphContent;
  }
};

export default RenderTableCell;
