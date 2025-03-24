export const resolvePath = (path: string) => {
    // Directly return external URLs or format local paths prefixed with a slash
    return path.startsWith('http') ? path : `/${path}`;
  };