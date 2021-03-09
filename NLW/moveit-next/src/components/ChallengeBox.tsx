import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdowContext } from '../contexts/CountdowContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
   const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
   const { resetCountdown } = useContext(CountdowContext);
   
   function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
   } 
   
   function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
   }

    return(
        <div className={styles.challengeBoxContainer}>
           { activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>


                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button
                    type="button"
                    className={styles.challengeFailedButton}
                    onClick={handleChallengeFailed}
                    >
                        Fracassado !!
                    </button>
                    <button
                    type="button"
                    className={styles.challengeSuccededButton}
                    onClick={handleChallengeSucceded}
                    >
                        O miseravel é um gênio !!
                    </button>
                </footer>

               </div>
           ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio.</strong>
                <p>
                    <img src="icons/level-up.svg" alt="LevelUp"/>
                    Avance de level completando desafios.
                </p>
            </div>
           ) }
        </div>
    );
}