const tech = "MERN";
const exp = "Fresher";
const lang = "English";

const GenerateNo = () => {
    return `${Math.floor(Math.random() * 100)}%`
}

// module.exports = tech;

export default tech;
export { exp, lang, GenerateNo }