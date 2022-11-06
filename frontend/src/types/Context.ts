import React from 'react';
import { Phone } from '../../../backend/src/types/Phone';

type callBack = (prevPhones: Phone[]) => Phone[];

interface ContexState {
  favoritePhones: Phone[];
  cartPhones: Phone[];
  setFavoritePhones: (callback: callBack) => void;
  setCartPhones: (callback: callBack) => void;
}

export default React.createContext<ContexState>({} as ContexState);
