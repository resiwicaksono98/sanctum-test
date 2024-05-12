import { UseFetchOptions }  from "nuxt/app";

export const useApiFetch = <T>(
  path: string,
  options: UseFetchOptions<T> = {}
) => {
  let headers: any = {};

  const token = useCookie("XSRF-TOKEN");

  if (token) {
    headers["X-XSRF-TOKEN"] = token.value;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["referer", "cookie"])
    };
  }

  return useFetch(`https://api.trait.id${path}`, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
};
