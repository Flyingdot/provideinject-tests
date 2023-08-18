import { createInjectionState } from "@vueuse/core";
import { ref } from "vue";

const [useProvideTestStore, useTestStore] = createInjectionState(() => {
  const hasTest = ref(false);
  return { hasTest };
});

export { useProvideTestStore };

export function useTestStoreOrThrow() {
  const applicationStore = useTestStore();
  if (applicationStore == null)
    throw new Error(
      "Please call `useProvideTestStore` on the appropriate parent component"
    );
  return applicationStore;
}
