export const getData = async (url: string) => {
  try {
    const res = await fetch(url, {
      cache: 'no-store',
    });
    return res.ok ? await res.json() : { error: 'error' };
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
};
