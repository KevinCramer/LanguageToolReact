const KanjiExplained = () => { 

  const kanjiTable = (
    <table className=" text-base md:text-lg table-auto border-collapse border border-gray-500 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-500 px-4 py-2">Kanji</th>
          <th className="border border-gray-500 px-4 py-2">Meaning</th>
          <th className="border border-gray-500 px-4 py-2">On’yomi</th>
          <th className="border border-gray-500 px-4 py-2">Kun’yomi</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-lg'>
          <td className="border border-gray-500 px-4 py-2">火</td>
          <td className="border border-gray-500 px-4 py-2">Fire</td>
          <td className="border border-gray-500 px-4 py-2">Ka, Hi</td>
          <td className="border border-gray-500 px-4 py-2">Hi, Ho</td>
        </tr>
        <tr>
          <td className="border border-gray-500 px-4 py-2">山</td>
          <td className="border border-gray-500 px-4 py-2">Mountain</td>
          <td className="border border-gray-500 px-4 py-2">San, Zan</td>
          <td className="border border-gray-500 px-4 py-2">Yama</td>
        </tr>
      </tbody>
    </table>)
    
  return (
    <div className='max-w-screen-md mx-auto px-4'>
      <h4 className='text-center text-2xl py-12'>Kanji Explained</h4>
      <div className='py-2'>
        Kanji are characters used in the Japanese writing system, originally borrowed from Chinese characters. They represent ideas or meanings rather than just sounds. Each kanji can have multiple meanings and pronunciations depending on the context.
      </div>
      <div className='py-2'>
        <div>Kanji usually have two types of readings:</div>
        <div><b>On’yomi:</b> Based on the original Chinese pronunciation.</div>
        <div><b>Kun’yomi:</b> The native Japanese pronunciation.</div>
      </div>
      <div className='py-2'>
        Here are some examples:     
        {kanjiTable}
      </div>
      <div className='py-2'>
        <div>Moreover, kanji combine with other kanji, hiragana, or katakana to form words.</div>
        <div>For example: <b>火</b> (fire) + <b>山</b> (mountain) = <b>火山</b> (volcano).</div>
      </div>
      <div>
        Having said that, at LingoCommand we strongly recommend you avoid spending too much time studying kanji in isolation. Instead, we suggest you learn Japanese vocabulary, which will allow you to naturally gain familiarity with kanji over time. 

      </div>        
      <div className="flex flex-col space-y-2 justify-center items-center m-4">
        <a className="border-[1px] border-b-4 bg-blue-500 border-blue-700 bg-200 text-center text-white p-2 rounded-2xl transform transition-transform duration-200 hover:scale-105"
          href='vocabulary?s=clo-T2TFT'>
                      Kanji Vocabulary Exercises
        </a>
      </div>
    </div>
  );
}

export default KanjiExplained;
