interface VehicleLocationInterface {
  cordinates: Cordinates;
  orientation: number;
  distance: number;
  time: string;
}

const VehicleLocationMock: Array<VehicleLocationInterface> = [
  {
    cordinates: {
      latitude: -18.914931,
      longitude: -48.244491,
    },
    orientation: -20,
    distance: 6.5,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915202,
      longitude: -48.244386,
    },
    orientation: -110,
    distance: 6.4,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915261,
      longitude: -48.244156,
    },
    orientation: -110,
    distance: 6.3,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915306,
      longitude: -48.24399,
    },
    orientation: -110,
    distance: 6.2,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915351,
      longitude: -48.243829,
    },
    orientation: -110,
    distance: 6.1,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915404,
      longitude: -48.243645,
    },
    orientation: -110,
    distance: 6.0,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915439,
      longitude: -48.243513,
    },
    orientation: -110,
    distance: 5.9,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.91548,
      longitude: -48.243373,
    },
    orientation: -110,
    distance: 5.8,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915514,
      longitude: -48.243241,
    },
    orientation: -20,
    distance: 5.7,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915629,
      longitude: -48.243253,
    },
    orientation: -20,
    distance: 5.6,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915719,
      longitude: -48.243285,
    },
    orientation: -20,
    distance: 5.5,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915842,
      longitude: -48.243332,
    },
    orientation: -20,
    distance: 5.4,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915973,
      longitude: -48.243372,
    },
    orientation: -20,
    distance: 5.3,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.915973,
      longitude: -48.243372,
    },
    orientation: -20,
    distance: 5.2,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916049,
      longitude: -48.243392,
    },
    orientation: -110,
    distance: 5.1,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916088,
      longitude: -48.243288,
    },
    orientation: -110,
    distance: 5.0,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.91612,
      longitude: -48.243143,
    },
    orientation: -110,
    distance: 4.9,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916167,
      longitude: -48.242993,
    },
    orientation: -110,
    distance: 4.8,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916215,
      longitude: -48.242817,
    },
    orientation: -110,
    distance: 4.7,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916247,
      longitude: -48.242677,
    },
    orientation: -110,
    distance: 4.6,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916275,
      longitude: -48.242543,
    },
    orientation: -110,
    distance: 4.5,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916322,
      longitude: -48.242381,
    },
    orientation: -110,
    distance: 4.4,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916369,
      longitude: -48.242151,
    },
    orientation: -110,
    distance: 4.3,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916397,
      longitude: -48.241999,
    },
    orientation: -110,
    distance: 4.2,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916451,
      longitude: -48.241831,
    },
    orientation: -110,
    distance: 4.1,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916498,
      longitude: -48.241657,
    },
    orientation: -110,
    distance: 4.0,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.916555,
      longitude: -48.24144,
    },
    orientation: -110,
    distance: 3.9,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916589,
      longitude: -48.241317,
    },
    orientation: -110,
    distance: 3.8,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916646,
      longitude: -48.24108,
    },
    orientation: -110,
    distance: 3.7,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916682,
      longitude: -48.240917,
    },
    orientation: -110,
    distance: 3.6,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916715,
      longitude: -48.240777,
    },
    orientation: -110,
    distance: 3.5,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916734,
      longitude: -48.240678,
    },
    orientation: -20,
    distance: 3.4,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916819,
      longitude: -48.240704,
    },
    orientation: -20,
    distance: 3.3,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916958,
      longitude: -48.240747,
    },
    orientation: -20,
    distance: 3.2,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.916959,
      longitude: -48.240745,
    },
    orientation: -20,
    distance: 3.1,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917252,
      longitude: -48.240832,
    },
    orientation: -20,
    distance: 3.0,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917324,
      longitude: -48.240849,
    },
    orientation: -20,
    distance: 2.9,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917477,
      longitude: -48.240897,
    },
    orientation: -20,
    distance: 2.8,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917598,
      longitude: -48.240929,
    },
    orientation: -20,
    distance: 2.7,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.91769,
      longitude: -48.240956,
    },
    orientation: -20,
    distance: 2.6,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917756,
      longitude: -48.240976,
    },
    orientation: -20,
    distance: 2.5,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917852,
      longitude: -48.241005,
    },
    orientation: -20,
    distance: 2.4,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.917988,
      longitude: -48.241044,
    },
    orientation: -20,
    distance: 2.3,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918167,
      longitude: -48.241094,
    },
    orientation: -20,
    distance: 2.2,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918271,
      longitude: -48.241121,
    },
    orientation: -20,
    distance: 2.1,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918365,
      longitude: -48.241147,
    },
    orientation: -20,
    distance: 2.0,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918513,
      longitude: -48.241191,
    },
    orientation: -20,
    distance: 1.9,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918557,
      longitude: -48.241201,
    },
    orientation: -20,
    distance: 1.8,
    time: '2 min',
  },
  {
    cordinates: {
      latitude: -18.918653,
      longitude: -48.241233,
    },
    orientation: -20,
    distance: 1.7,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918839,
      longitude: -48.241277,
    },
    orientation: -20,
    distance: 1.6,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.91888,
      longitude: -48.241291,
    },
    orientation: -20,
    distance: 1.5,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918943,
      longitude: -48.241307,
    },
    orientation: -20,
    distance: 1.4,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.918967,
      longitude: -48.241317,
    },
    orientation: -20,
    distance: 1.3,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919096,
      longitude: -48.241352,
    },
    orientation: -20,
    distance: 1.2,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919156,
      longitude: -48.241367,
    },
    orientation: -20,
    distance: 1.0,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919296,
      longitude: -48.241404,
    },
    orientation: -20,
    distance: 0.9,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919425,
      longitude: -48.241444,
    },
    orientation: -20,
    distance: 0.8,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919474,
      longitude: -48.241457,
    },
    orientation: -20,
    distance: 0.7,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919569,
      longitude: -48.241487,
    },
    orientation: -20,
    distance: 0.6,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919804,
      longitude: -48.241546,
    },
    orientation: -20,
    distance: 0.5,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.919905,
      longitude: -48.241574,
    },
    orientation: -20,
    distance: 0.4,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.920058,
      longitude: -48.241612,
    },
    orientation: -20,
    distance: 0.3,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.920189,
      longitude: -48.241814,
    },
    orientation: 70,
    distance: 0.2,
    time: '1 min',
  },
  {
    cordinates: {
      latitude: -18.920153,
      longitude: -48.241946,
    },
    orientation: 70,
    distance: 0.1,
    time: '1 min',
  },
];

export default VehicleLocationMock;
