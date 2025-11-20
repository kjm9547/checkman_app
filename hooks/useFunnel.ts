import { useRouter } from "expo-router";
import { ComponentType, useState } from "react";

export function useFunnel<T>(steps: ComponentType<T>[]) {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  const StepComponent = steps[index];

  return {
    next,
    back,
    StepComponent,
  };
}
