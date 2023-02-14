const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)

// Extract relevant content
export const useProjects = () => {
  return navigation.value
    ?.find((x) => typeof x !== undefined)
    ?.children?.find((x) => typeof x !== undefined)?.children
}
