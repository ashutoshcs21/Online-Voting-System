// VotingButton.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import ParticleSpinner from './ParticleSpinner'; // Adjust the path based on your project structure
import './VotingButton.css';


const VotingButton = () => {
  const navigate = useNavigate();
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedParty, setSelectedParty] = useState(null);
 const parties1 = [
    { name: 'Naman Mathur', photo: 'https://esportsawards.com/wp-content/uploads/2023/07/Naman-Mortal-Sandeep-Mathur.jpg', details: 'Center-right political party, etc.', },
    { name: 'Hector HECZ ', photo: 'https://esportsawards.com/wp-content/uploads/2023/07/Hector-_H3CZ_-Rodriguez.jpg', details: 'Center-left political party, etc.' },
    { name: 'Seth  Abner', photo: 'https://esportsawards.com/wp-content/uploads/2023/07/Scump.jpg', details: 'Socialist political party, etc.' },
    
   
  ];

  const parties2 = [
    { name: 'Ludwig  Ahgren', photo: 'https://esportsawards.com/wp-content/uploads/2023/07/Ludwig-Ahgren.jpg', details: 'Center-right political party, etc.' },
    { name: 'Jeremy  Toast ', photo: 'https://esportsawards.com/wp-content/uploads/2023/07/Jeremy-Wang.jpg', details: 'Center-left political party, etc.' },
    { name: 'Gustavo  Gomes', photo: 'https://esportsawards.com/wp-content/uploads/2023/10/Baiano-website-01.png', details: 'Socialist political party, etc.' },
    
   
  ];

  const parties3 = [
    { name: ' Thomas  Paparatto', photo: 'https://esportsawards.com/wp-content/uploads/2023/10/Zoomaa-Website-01.png', details: 'Center-right political party, etc.', },
    { name: 'Timothy Timmy', photo: 'https://esportsawards.com/wp-content/uploads/2023/10/IItztimmy-website-01.png', details: 'Center-left political party, etc.' },
    { name: 'Juan  Debiedma ', photo: 'https://esportsawards.com/wp-content/uploads/2023/07/Juan-Hungrybox-Debiedma.jpg', details: 'Socialist political party, etc.' },
    
   
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (hasVoted) {
      navigate('/RatingStarsAndComment');
    }
  }, [hasVoted, navigate]);

  const handleVote = (partyName) => {
    if (!hasVoted && !isLoading) {
      const confirmVote = window.confirm(`Are you sure you want to vote for ${partyName}?`);
      if (confirmVote) {
        setIsLoading(true);
        setTimeout(() => {
          setVotes(votes + 1);
          setHasVoted(true);
          setSelectedParty(null);
          setIsLoading(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="fullscreen-container bg-purple-900 text-black">
      <ParticleSpinner isLoading={isLoading} />
      <div className="voting-content">
        
         <h1 className='text-[100px] text-center text-white'> E Voting System</h1>

         <h2 className='text-white w-[200px] text-[25px] rounded-[18px] relative right-[3px] text-right px-6 bg-black '>Vote Count: {votes}</h2>
        <div className="parties-container flex flex-col gap-[10px]">
          
             

         <div className='m-8 flex gap-[250px] '>
        
          
          {parties1.map((party) => (
            <div key={party.name} className=" m-10  bg-pink-500 rounded-[10px] text-black h-[20vh] w-[20vw] " data-tip={party.details}>
             
                  <div className='flex'>
                            <div className=''> <img
                                  src={party.photo}
                                  alt={`${party.name} Logo`}
                                  className="h-[15vh] m-[10px] rounded-[10px] px-0.5"
                                  onClick={() => setSelectedParty(party)}
                                />
                      
                            </div>
               
                    <div className='img-info'>
                            <h3 className='m-[10px] text-[25px]'>{party.name}</h3>
                            
                            <button
                            className=' bg-black hover:bg-blue-500 text-white h-[38px] w-[80px] rounded-[10px] text-[20px] relative m-6 '
                              onClick={() => handleVote(party.name)}
                              disabled={hasVoted || selectedParty === party.name || isLoading}
                            >
                              {isLoading ? (
                                <Spinner animation="border" role="status">
                                  <span className="sr-only">Loading...</span>
                                </Spinner>
                              ) : hasVoted ? (
                                'Voted'
                              ) : (
                                'Vote'
                              )}
                            </button>
                    </div>
                  </div>


            </div>
          ))}
          </div>

          <div className='m-8 flex gap-[250px] '>
        
          
          {parties2.map((party) => (
            <div key={party.name} className=" m-10  bg-pink-500 rounded-[10px] text-black h-[20vh] w-[20vw] " data-tip={party.details}>
             
                  <div className='flex'>
                            <div className=''> <img
                                  src={party.photo}
                                  alt={`${party.name} Logo`}
                                  className="h-[15vh] m-[10px] rounded-[10px] px-0.5"
                                  onClick={() => setSelectedParty(party)}
                                />
                      
                            </div>
               
                    <div className='img-info'>
                            <h3 className='m-[10px] text-[25px]'>{party.name}</h3>
                            
                            <button
                           className=' bg-black hover:bg-blue-500 text-white h-[38px] w-[80px] rounded-[10px] text-[20px] relative m-6 '
                              onClick={() => handleVote(party.name)}
                              disabled={hasVoted || selectedParty === party.name || isLoading}
                            >
                              {isLoading ? (
                                <Spinner animation="border" role="status">
                                  <span className="sr-only">Loading...</span>
                                </Spinner>
                              ) : hasVoted ? (
                                'Voted'
                              ) : (
                                'Vote'
                              )}
                            </button>
                    </div>
                  </div>


            </div>
          ))}
          </div>
          
          <div className='m-8 flex gap-[250px] '>
        
          
          {parties3.map((party) => (
            <div key={party.name} className=" m-10  bg-pink-500 rounded-[10px] text-black h-[20vh] w-[20vw] " data-tip={party.details}>
             
                  <div className='flex'>
                            <div className=''> <img
                                  src={party.photo}
                                  alt={`${party.name} Logo`}
                                  className="h-[15vh] m-[10px] rounded-[10px] px-0.5"
                                  onClick={() => setSelectedParty(party)}
                                />
                      
                            </div>
               
                    <div className='img-info'>
                            <h3 className='m-[10px] text-[25px]'>{party.name}</h3>
                            
                            <button
                            className=' bg-black hover:bg-blue-500 text-white h-[38px] w-[80px] rounded-[10px] text-[20px] relative m-6 '
                              onClick={() => handleVote(party.name)}
                              disabled={hasVoted || selectedParty === party.name || isLoading}
                            >
                              {isLoading ? (
                                <Spinner animation="border" role="status">
                                  <span className="sr-only">Loading...</span>
                                </Spinner>
                              ) : hasVoted ? (
                                'Voted'
                              ) : (
                                'Vote'
                              )}
                            </button>
                    </div>
                  </div>


            </div>
          ))}
          </div>
          
       
           </div>
      </div>
    </div>
  );
};

export default VotingButton;
