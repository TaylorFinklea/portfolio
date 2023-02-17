type Use = {
  label: string
  items: Array<{
    title: string
    subtitle: string
  }>
}

type TalentGroup = {
  label: string
  items: string[]
}

type Project = {
  _path: string
  description: string
  image: string
  title: string
}
