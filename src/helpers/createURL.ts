import { LearningSections } from '../../types/LearningSectionsTypes'

export const createURL = (language: any, section: LearningSections, topic: any, urlIsSimple = false) => {
  if(!urlIsSimple) return `/${language}/${section}?s=${topic.slugName}-T0TFT`
  return `/${language}/${section}/${topic.slugName}`
}