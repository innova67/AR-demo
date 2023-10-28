var sceneContainer = `
                  <a-scene embedded arjs>
                    <a-marker type="pattern" preset="custom" url="imagenes/control-marker.patt">
                      <a-entity
                        position="0 0 0"
                        scale="10 10 10"
                        gltf-model="imagenes/modelo.gltf"
                      ></a-entity>
                    </a-marker>
                    <a-entity camera></a-entity>
                  </a-scene>
                `;
// Agrega el elemento <div> al <body> de la página
var support = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString(sceneContainer);
	} catch(err) {
		return false;
	}
	return true;
})();
