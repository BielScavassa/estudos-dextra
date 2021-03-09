import { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdowContextData{
    minutes: number;
    seconds: number; 
    hasFinished: boolean; 
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdowProviderProps{
    children: ReactNode;
}

let countdownTimeout : NodeJS.Timeout;

export const CountdowContext = createContext({} as CountdowContextData);

export function CountdowProvider({ children } : CountdowProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false); 
    const [hasFinished, setHasFinished] = useState(false); 
   
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        setIsActive(false);
        setHasFinished(false);
        clearTimeout(countdownTimeout);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge(); 
        }
    }, [isActive, time]);

    return(
        <CountdowContext.Provider value={{
            minutes,
            seconds, 
            hasFinished, 
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdowContext.Provider>
    );
}