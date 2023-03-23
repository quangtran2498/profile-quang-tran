import moment from "moment";

export const dateAboutMe = {
  startFe: "01/01/2022",
  startBe: "01/01/2023",
};
export const monthNow = new Date().getMonth() + 1;

const newDate = moment(new Date()).format("MM/DD/YYYY");
const dateStartFe: any = new Date(dateAboutMe.startFe);
const dateStartBe: any = new Date(dateAboutMe.startBe);
const dateNow: any = new Date(newDate);

export const monthExperienceFe = () => {
  const diffTime = Math.abs(dateNow - dateStartFe);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const monthExperience = diffDays / 30 / 10
  return monthExperience.toFixed(1);
};
export const monthExperienceBe = () => {
    const diffTime = Math.abs(dateNow - dateStartBe);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const monthExperience = diffDays / 30 / 10
    return monthExperience.toFixed(1);
  };