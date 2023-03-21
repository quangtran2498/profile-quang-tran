
import i18n from './index'
export const languages = (text:string) => { //! viết kiểu này ko dc
  return i18n.t(text)
}
export const textI18n = {
    test:"textMultiLanguage.test",
    home:"textMultiLanguage.home",
    about:"textMultiLanguage.about",
    projects:"textMultiLanguage.projects",
    skills:"textMultiLanguage.skills",
    blog:"textMultiLanguage.blog",
    services:"textMultiLanguage.services",
    language:"textMultiLanguage.language"
}