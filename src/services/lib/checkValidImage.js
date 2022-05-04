const TeachableMachine = require('@sashido/teachablemachine-node');

module.exports = async function checkValidImages(imageList) {
  // const imageList = [
  //   'https://res.cloudinary.com/dlq6za9et/image/upload/v1631869968/tphcm-ban-hanh-quy-chuan-xay-nha-tro-1_ye0xg4.jpg',
  //   'https://res.cloudinary.com/dlq6za9et/image/upload/v1631869968/ykHuo4y_rxz4xd.jpg',
  //   'https://res.cloudinary.com/dlq6za9et/image/upload/v1631869968/20200517162850-de09-1599386457573404221201_bsfwva.jpg',
  // ];

  const model = new TeachableMachine({
    modelUrl: 'https://teachablemachine.withgoogle.com/models/MsdmCLpKI/',
  });

  const setCriteria = new Set();
  const x = imageList.map(async (image) => {
    await model
      .classify({
        imageUrl: image,
      })
      .then((predictions) => {
        const returnValue = predictions.filter((criteria) => criteria.score > 0.8);
        console.log('returnValue =', returnValue);
        returnValue.map((criteria) => setCriteria.add(criteria.class));
      })
      .catch(() => {
        throw new Error('Somethings wrong!');
      });
  });
  await Promise.allSettled(x)
    .then((values) => {
      console.log('values =', values);
      const array = Array.from(setCriteria);
      console.log('array =', array);
      const filteredArray = array.filter((criteria) => criteria === 'banList');
      return !!(filteredArray.length > 0);
    })
    .catch(() => {
      throw new Error('Somethings wrong!');
    });
};
