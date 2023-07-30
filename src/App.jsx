import IllustrationBox from './images/illustration-box-desktop.svg'
import IllustrationBgImage from './images/bg-pattern-desktop.svg'
import Women from './images/illustration-woman-online-desktop.svg'
import ArrowImage from './images/icon-arrow-down.svg'
import ArrowUpImage from './images/chevron-up.svg'

import { useState } from 'react'
import { list } from 'postcss'


function App() {
  
  const [displayDl, setDisplayDl] = useState(null)
  const [descriptiveList, setDescriptiveList] = useState("")
  const [isIconOn, setIsIconOn] = useState(true) 

   const handleArrowClick = (index) => {
   // Toggle both displayDl and isIconOn
    if (displayDl === index) {
      setDisplayDl(null);
      setIsIconOn(true);
    } else {
      setDisplayDl(index);
      setIsIconOn(false);
    }
  };

  return (
    <>
      <div className="max-w-full h-screen bg-blue-500 p-8">
        <div className="flex justify-center items-center w-[1100px] mx-auto  h-[530px] border-none rounded-md bg-white">
          <div className="w-1/2 h-full relative overflow-hidden">
            <div className="absolute w-full">
              <img className='w-full h-full right-10 -left-24 relative' src={IllustrationBgImage} alt="IllustrationBgImage" />
            </div>
            <div className=''>
            <img className='absolute top-20 right-[110px] bottom-28' src={Women} alt="Women" />
            <img className='relative top-60 right-3' src={IllustrationBox} alt="IllustrationBox" />
            </div>

          </div>
          <div className="w-1/2 h-full text-left p-3">
            <h1 className='font-bold text-2xl mt-5'>FAQ</h1>

            <div className='flex justify-between items-center border-b-2 mt-5'>
              <dl onChange={descriptiveList}>
                <span onClick={() => handleArrowClick(0)} className='hover:font-bold cursor-pointer'>Hom many team members can i invite?</span>
                {displayDl === 0 && (
                  <ul>
                  <li className='cursor-pointer'>
                    1
                  </li>
                  <li className='cursor-pointer'>
                    2
                  </li>
                  <li className='cursor-pointer'>
                    3
                  </li>
                  </ul>
                )}
              </dl>
              <img onClick={() => handleArrowClick(0)} src={isIconOn ? ArrowImage : ArrowUpImage} alt="ArrowImage" />
            </div>

            <div className='flex justify-between items-center border-b-2 mt-10'>
              <dl onChange={descriptiveList}>
                <span className='hover:font-bold cursor-pointer'>What is the upload maximum size?</span>
              <dl>No more than 2GB. All files in your account must fit your storage allocated space</dl>
              </dl>
              <img src={ArrowImage} alt="ArrowImage" />
            </div>

            <div className='flex justify-between items-center border-b-2 mt-10'>
              <dl>
                <span onClick={() => handleArrowClick(1)} className='hover:font-bold cursor-pointer'>How do i reset my password?</span>
                {displayDl === 1 && (
                  <ul>
                  <li className='cursor-pointer'>
                    Hard reset
                  </li>
                  <li className='cursor-pointer'>
                    Follow the instructions
                  </li>
                  <li className='cursor-pointer'>
                    Delete account
                  </li>
                  </ul>
                )}
              </dl>
              <img onClick={() => handleArrowClick(1)} src={isIconOn ? ArrowImage : ArrowUpImage} alt="ArrowImage" />
            </div>     

            <div className='flex justify-between items-center border-b-2 mt-10'>
              <dl onChange={descriptiveList}>
                <span onClick={() => handleArrowClick(2)} className='hover:font-bold cursor-pointer'>Can i cancell my subscription?</span>
                {displayDl === 2 && (
                  <ul>
                  <li className='cursor-pointer'>
                    Yes
                  </li>
                  <li className='cursor-pointer'>
                    No
                  </li> 
                  </ul>
                )}
              </dl>
              <img onClick={() => handleArrowClick(2)} src={isIconOn ? ArrowImage : ArrowUpImage} alt="ArrowImage" />
            </div>

            <div className='flex justify-between items-center border-b-2 mt-10'>
              <dl className='' onChange={descriptiveList}>
                <span onClick={() => handleArrowClick(3)} className='hover:font-bold cursor-pointer'>How can you provide additional support?</span>
                {displayDl === 3 && (
                  <ul>
                  <li className='cursor-pointer'>
                    Question and Answers
                  </li>
                  <li className='cursor-pointer'>
                    Mentance
                  </li>
                  <li className='cursor-pointer'>
                    Feedbacks
                  </li>
                  </ul>
                )}
              </dl>
              <img onClick={() => handleArrowClick(3)} src={isIconOn ? ArrowImage : ArrowUpImage} alt="ArrowImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
