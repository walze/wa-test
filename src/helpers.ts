export const errorHandler = async <T>(p: Promise<T>) => {
  try {
    return p
      .catch((e: Error) => {
        console.error(e);

        return e.message;
      });
  } catch (error) {
    console.error(error);

    return (error as Error).message;
  }
};
