// Extract relevant content
export default async () => {
  const { data: navigation } = await useAsyncData('navigation', () =>
    fetchContentNavigation()
  )
  return navigation.value
    ?.find((x) => typeof x !== undefined)
    ?.children?.find((x) => typeof x !== undefined)?.children as Project[]
}
