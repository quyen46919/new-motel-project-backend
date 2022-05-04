const predictNearSchool = (lat, lng) => {
  const universities = [
    {
      name: 'Đại học Đông Á - Đại học kiến trúc',
      location: [16.03210312191947, 108.22128337609145],
    },
    {
      name: 'Đại học ngoại ngữ - Đại học Đà Nẵng',
      location: [16.0351637028247, 108.21165121253205],
    },
    {
      name: 'Đại học Kinh tế - Đại học Đà Nẵng',
      location: [16.047402676254702, 108.2396314037839],
    },
    {
      name: 'Đại học Sư phạm kỹ thuật - Đại học Đà Nẵng',
      location: [16.077649398119746, 108.21356081692831],
    },
    {
      name: 'Cao đẳng FPT Politechnic Đà Nẵng',
      location: [16.075946990335677, 108.16996203058308],
    },
    {
      name: 'Đại học Greenwich Việt Nam',
      location: [16.08279941032236, 108.23598771262171],
    },
  ];

  // 16.03013471538867, 108.22598213047466

  const result = [];
  // universities.map((item) => {

  // });
  // eslint-disable-next-line no-restricted-syntax
  for (const university of universities) {
    console.log(university.location[0] - 0.002);
    console.log(university.location[0] + 0.002);
    console.log(university.location[1] - 0.0009);
    console.log(university.location[1] + 0.0009);
    if (
      // (lat > university.location[0] + 0.00007278829 && lat < university.location[0] - 0.00007278829) &&
      // (lng > university.location[1] + 0.00034080228 && lng < university.location[1] - 0.00034080228)
      lat > university.location[0] - 0.002 &&
      lat < university.location[0] + 0.002 &&
      lng > university.location[1] + 0.009 &&
      lng < university.location[1] - 0.009
    ) {
      result.push(university);
    }
  }
  console.log('result =', result);
};
predictNearSchool(16.032438502323274, 108.22135445825734);
