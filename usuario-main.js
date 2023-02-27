document.getElementById("btn-Comprar-V1").addEventListener(
    "click",
    () => {
      document.getElementById("Tienda").hidden = true;
      document.getElementById("V1-recolector").hidden = false;
      document.getElementById("V2-botella").hidden = true;
      document.getElementById("V3-alimentar").hidden = true;
    },
    false
);

document.getElementById("btn-Comprar-V2").addEventListener(
    "click",
    () => {
      document.getElementById("Tienda").hidden = true;
      document.getElementById("V1-recolector").hidden = true;
      document.getElementById("V2-botella").hidden = false;
      document.getElementById("V3-alimentar").hidden = true;
    },
    false
);

document.getElementById("btn-Comprar-V3").addEventListener(
  "click",
  () => {
    document.getElementById("Tienda").hidden = true;
    document.getElementById("V1-recolector").hidden = true;
    document.getElementById("V2-botella").hidden = true;
    document.getElementById("V3-alimentar").hidden = false;
  },
  false
);

document.getElementById("btn-volver-tienda1").addEventListener(
    "click",
    () => {
      document.getElementById("Tienda").hidden = false;
      document.getElementById("V1-recolector").hidden = true;
      document.getElementById("V2-botella").hidden = true;
      document.getElementById("V3-alimentar").hidden = true;
    },
    false
);

document.getElementById("btn-volver-tienda2").addEventListener(
  "click",
  () => {
    document.getElementById("Tienda").hidden = false;
    document.getElementById("V1-recolector").hidden = true;
    document.getElementById("V2-botella").hidden = true;
    document.getElementById("V3-alimentar").hidden = true;
  },
  false
);

document.getElementById("btn-volver-tienda3").addEventListener(
  "click",
  () => {
    document.getElementById("Tienda").hidden = false;
    document.getElementById("V1-recolector").hidden = true;
    document.getElementById("V2-botella").hidden = true;
    document.getElementById("V3-alimentar").hidden = true;
  },
  false
);