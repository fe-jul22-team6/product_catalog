import React from 'react';
import { Phone } from '../../../backend/src/types/Phone';

type callBack = (prevPhones: Phone[]) => Phone[];

interface ContextState {
  favoritePhones: Phone[];
  setFavoritePhones: (callback: callBack) => void;
}

export default React.createContext<ContextState>({} as ContextState);
