// Save state to localStorage
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (error) {
      console.error('Could not save state', error);
    }
  };
  
  // Load state from localStorage
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return undefined; // Return undefined to let Redux initialize the state
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Could not load state', error);
      return undefined;
    }
  };
  