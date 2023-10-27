const bcrypt = require("bcrypt");

let defaultHashedPassword;

const utilisateurs = [];

(async () => {
  const salt = await bcrypt.genSalt(10);

  defaultHashedPassword = await bcrypt.hash("1234", salt);

  utilisateurs.push(
    {
      id: 1,
      nom: "MADEGNAN Romaric",
      email: "romaricmadegnan@gmail.com",
      password: defaultHashedPassword,
    },
    {
      id: 2,
      nom: "John Doe",
      email: "john@doe.com",
      password: defaultHashedPassword,
    }
  );
})();

module.exports = {
  cours: [
    {
      titre: "Guide complet sur mongoose",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/mongoose.jpg",
    },
    {
      titre: "Javascript moderne",
      desc: `Vous apprendrez dans ce cours les notions fondamentales du langae de programmation
           Javascript`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/js.jpg",
    },
    {
      titre: "MongoDB pour débutants",
      desc: `Gérer vos données avec la base de données non relationnelle MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/mongodb.jpg",
    },
    {
      titre: "Cours Git et Github pour débutants",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/gitgithub.jpg",
    },
    {
      titre: "NodeJs pour débutants",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/nodejs.jpg",
    },
    {
      titre: "Créer une API avec NodeJs et MongoDB",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/restapi.jpg",
    },
    {
      titre: "Créer des applications NodeJs Sécurisées",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/safenodejs.jpg",
    },
    {
      titre: "Cloner Youtube avec Flutter Web",
      desc: `Dans ce cous vous apprendrez les notions fondamentales sur 
          l'utilisation de la bibliothèque mongoose pour gérer la base de données MongoDB`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/youtubeclone.jpg",
    },
  ],
  utilisateurs,
};
