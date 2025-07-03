var APP_DATA = {
  "scenes": [
    {
      "id": "0-caixa",
      "name": "CAIXA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.676090783336731,
          "pitch": 0.3936809752674755,
          "rotation": 0,
          "target": "2-circulao"
        },
        {
          "yaw": 1.6436943971918447,
          "pitch": 0.22008663474591472,
          "rotation": 0,
          "target": "1-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-recepo",
      "name": "RECEPÇÃO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6073014296948234,
          "pitch": 0.4939379593344828,
          "rotation": 0,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-circulao",
      "name": "CIRCULAÇÃO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19135337573258937,
          "pitch": 0.5922321089791787,
          "rotation": 0,
          "target": "1-recepo"
        },
        {
          "yaw": -2.950978904380891,
          "pitch": 0.26588561950076794,
          "rotation": 0,
          "target": "0-caixa"
        },
        {
          "yaw": 2.3308909977585124,
          "pitch": 0.5746120623138999,
          "rotation": 0.7853981633974483,
          "target": "9-administrativo"
        },
        {
          "yaw": 1.9865198207411314,
          "pitch": 0.399618209022476,
          "rotation": 0.7853981633974483,
          "target": "6-copa"
        },
        {
          "yaw": 1.6935588822468883,
          "pitch": 0.20033307402047384,
          "rotation": 0,
          "target": "7-consultrio"
        },
        {
          "yaw": 1.1969635450250156,
          "pitch": 0.387483947474788,
          "rotation": 4.71238898038469,
          "target": "3-reunio"
        },
        {
          "yaw": 1.3122510375728034,
          "pitch": 0.22014003887683842,
          "rotation": 4.71238898038469,
          "target": "4-descano"
        },
        {
          "yaw": 1.4398615603645215,
          "pitch": 0.09829310052903217,
          "rotation": 0,
          "target": "5-sala-cirurgia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-reunio",
      "name": "REUNIÃO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.478473085116173,
        "pitch": 0.14030679086850384,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.9728309437724416,
          "pitch": 0.5511416023388769,
          "rotation": 1.5707963267948966,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-descano",
      "name": "DESCANÇO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.335938123061406,
        "pitch": 0.41042948457130635,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 2.9224905019185528,
          "pitch": 0.69302522110209,
          "rotation": 0,
          "target": "5-sala-cirurgia"
        },
        {
          "yaw": -1.0826648095439761,
          "pitch": 0.49981704710461905,
          "rotation": 7.853981633974483,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-cirurgia",
      "name": "SALA CIRURGIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.2351575315902643,
        "pitch": 0.1041460767068969,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.8594935782317297,
          "pitch": 0.182233378009645,
          "rotation": 4.71238898038469,
          "target": "7-consultrio"
        },
        {
          "yaw": 1.1850350130281289,
          "pitch": 0.27689601766662264,
          "rotation": 0,
          "target": "2-circulao"
        },
        {
          "yaw": 2.0936160783040014,
          "pitch": 0.1089318481604753,
          "rotation": 0,
          "target": "4-descano"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-copa",
      "name": "COPA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5442050007179855,
        "pitch": 0.3035290134821764,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -0.12443293770185981,
          "pitch": 0.6917241890822545,
          "rotation": 4.71238898038469,
          "target": "2-circulao"
        },
        {
          "yaw": 0.38489655332147166,
          "pitch": 0.7491912551881619,
          "rotation": 7.853981633974483,
          "target": "7-consultrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-consultrio",
      "name": "CONSULTÓRIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7473756317774605,
          "pitch": 0.3253749558624577,
          "rotation": 1.5707963267948966,
          "target": "5-sala-cirurgia"
        },
        {
          "yaw": -1.8111227398782646,
          "pitch": 0.1836708030349321,
          "rotation": 0,
          "target": "8-almoxarifado"
        },
        {
          "yaw": -1.0403343163860637,
          "pitch": 0.1821772663446719,
          "rotation": 0,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-almoxarifado",
      "name": "ALMOXARIFADO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.4438134347012985,
        "pitch": 0.39591524400176326,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.3281009819324723,
          "pitch": 0.3332336321774694,
          "rotation": 0,
          "target": "7-consultrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-administrativo",
      "name": "ADMINISTRATIVO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9905632333186105,
        "pitch": 0.030804406236423887,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.5802955362561715,
          "pitch": 0.5132733077390288,
          "rotation": 0,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
