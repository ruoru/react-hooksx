import { useEffect, useRef } from 'react'

const useDebounce = (fn: Function, ms = 30, deps = []) => {
  let timeout: any = useRef<number | null>();

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      fn();
    }, ms);
  }, deps);

  const cancel = () => {
    clearTimeout(timeout.current);
    timeout = null;
  }

  return [cancel];
}

export default useDebounce;