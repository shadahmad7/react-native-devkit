export const fetchInterceptor = (url: string, options: any) => {
    console.log(`[Core Network] Request to: ${url}`, options);
    return fetch(url, options);
  };
  