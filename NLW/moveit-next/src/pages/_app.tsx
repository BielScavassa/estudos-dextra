import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdowProvider } from '../contexts/CountdowContext';

function MyApp({ Component, pageProps}){
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp
