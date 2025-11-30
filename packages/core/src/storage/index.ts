export const saveItem = (key: string, value: any) => {
    console.log(`[Core Storage] Saving: ${key} = ${JSON.stringify(value)}`);
  };
  
  export const getItem = (key: string) => {
    console.log(`[Core Storage] Getting: ${key}`);
    return null;
  };
  